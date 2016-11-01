<template>
<ul>
    <li v-for="article in articles">
        {{article.title}}
    </li>
</ul>
</template>

<script>
    export default {
        data () {
            return {
                articles:[]
                }
        },
        mounted:function (){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {
                    
                },
                emulateJSON: true
                }).then(function(response){
                    this.articles=response.data.subjects
                },function(){
                    console.log(response)
                })
        }

    }

</script>

