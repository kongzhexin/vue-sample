
import Vue from 'vue'

export default ()=>{

    Vue.directive('checkAll',{
        bind: function (el,binding) {
           
            let list = binding.value;
            list.forEach((item)=>{
                item.checked = false;
            })
        },
        update: function (el, binding) {
            debugger
            // this.vm.$watch(binding.value,function(){

            // })
            let list = binding.value;
            if(list.every((item)=>{ return item.checked === true;})){
                el.checked =true;
            }else{
                el.checked =false;
            }
        },
        componentUpdated :function(el, binding){
            debugger
        }
    })
}
    
