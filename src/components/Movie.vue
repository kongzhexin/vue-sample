<template>
<ul>
    <li v-for="article in articles">
        {{article.title}}
    </li>
</ul>
</template>

<script>
    import * as types from '../store/mutation-types.js'
    import Vue from 'vue'
    export default {
        data () {
            return {
                articles:[]
            }
        },
        mounted:function (){
            Vue.http.interceptors.push((request, next) => {

                this.$store.commit(types.SHOW_LOADING)
                next((response) => {
                    if (!response.ok) { }
                    this.$store.commit(types.SHOW_LOADING)
                    return response;
                })
                });    
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function(response){
                    this.articles=response.data.subjects
                },function(){
                    console.log(response)
                });
        }
    }

</script>

