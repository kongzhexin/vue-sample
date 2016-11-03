<template>
<ul>
    <li class="item" v-for="article in articles">
        <ul>
            <li>
                <img v-bind:src='article.images.medium'>
            </li>
            <li>
                <span v-bind:class="'allstar'+article.rating.stars"></span>
                <span>{{article.rating.average}}</span>
            </li>
             <li>
                <span>{{article.title}}</span>
            </li>
        </ul>
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
        created () {
           this.fetchData();
        },
        watch: {
            "$router":'fetchData'
        },
        methods:{
            fetchData (){
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
    }

</script>

<style scoped>
    .item{
        display:inline-block;
        text-align:center;
        
    }
    ul li{
        list-style-type:none
    }
    .allstar50,.allstar45,.allstar40,.allstar35,.allstar30,.allstar25,.allstar20,.allstar15,.allstar10,.allstar05,.allstar00,.rating1-t,.rating15-t,.rating2-t,.rating25-t,.rating3-t,.rating35-t,.rating4-t,.rating45-t,.rating5-t,.rating-t,.starb ~ .stars5,.starb ~ .stars4,.starb ~ .stars3,.starb ~ .stars2,.starb ~ .stars1,.collectors .stars5,.collectors .stars4,.collectors .stars3,.collectors .stars2,.collectors .stars1 {
        display: inline-block;
        *display: inline;
        zoom:1;background: url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) no-repeat;
        background: -webkit-image-set(url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(https://img3.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
        background: -moz-image-set(url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(https://img3.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
        background: -o-image-set(url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(https://img3.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
        background: -ms-image-set(url(https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png) 1x, url(https://img3.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png) 2x) no-repeat;
        width: 55px;
        height: 11px;
        margin: 0 3px 0 0;
        overflow: hidden
    }
    .allstar50 {
        background-position: 0 0px
    }

    .allstar45 {
        background-position: 0 -11px
    }

    .allstar40 {
        background-position: 0 -22px
    }

    .allstar35 {
        background-position: 0 -33px
    }

    .allstar30 {
        background-position: 0 -44px
    }

    .allstar25 {
        background-position: 0 -55px
    }

    .allstar20 {
        background-position: 0 -66px
    }

    .allstar15 {
        background-position: 0 -77px
    }

    .allstar10 {
        background-position: 0 -88px
    }

    .allstar05 {
        background-position: 0 -99px
    }

    .allstar00 {
        background-position: 0 -110px
    }
</style>