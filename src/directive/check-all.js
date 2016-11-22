
import Vue from 'vue'

export default ()=>{

    Vue.directive('checkAll',{
        bind: function (el,binding ,vnode) {
            
            let list = binding.value;
            list.forEach((item)=>{
                item.checked = false;
            })
            vnode.context.$watch('list',function(){
                if( list.every((item)=>{
                    return item.checked === true;
                })){
                    el.checked =true;
                }else{
                    el.checked =false;
                }
            },{deep:true})
        },
        update:  (el, binding,vnode) => {
            let list = binding.value;
            debugger
            if(binding.value === binding.oldValue){
                
            }
            if(el.checked ===true){
                list.forEach((item)=>{  item.checked = true; return item;})
            }else{
                list.forEach((item)=>{  item.checked = false; return item;})
            }
        },
    })
}
    
