// var Mock = require('mockjs'); 
// var Vue = require('vue'); 
// var VueResource = require('vue-resource')

var  demoTemplate =  {
    'list|1-10':[ {
        'id|+1':1, 
        'name|1-2':true, //value 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)
        'double|1-123.1':123.1, 
        'float|1-100.1-10':10.1, //生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位，属性值只是来确定类型
        'province|2-4': {
            '110000':'北京市', 
            '120000':'天津市', 
            '130000':'河北省', 
            '140000':'山西省'
        }, 
        'array1|1':['AMD', 'CMD', 'KMD', 'UMD'], 
        'array2|1-10':['Mock.js'], 
        'array3|3':['Mock.js'], 

    }]
}
var data = Mock.mock(demoTemplate); 

Mock.mock(/.json/,  {
    'list|1-10':[ {
        'id|+1':1, 
        'email':'@EMAIL'
    }]
})
 Vue.http.get('package.json').then(function (response) {
            console.log(response.body)
        })

// $.ajax({
//     url:'package.json',
//     dataType:'json'
// }).done(function(data){
//     console.log(JSON.stringify(data))
// })


//console.log(JSON.stringify(data, null, 4))