
import Vue from 'vue'

export default ()=>{

    Vue.directive('checkAll',{
        bind: function (el,binding) {
            
            let list = binding.value;
            list.forEach((item)=>{
                item.checked = false;
            })
        },
        update:  (el, binding) => {
            debugger
            let list = binding.value;
            if(binding.value === binding.oldValue){
                console.log(1);
            }
            let count = 0;
            let length = binding.value.length;
            if(el.id ==='all'){
                if(el.checked ===true){
                    list.forEach((item)=>{  item.checked = true; return item;})
                }else{
                    list.forEach((item)=>{  item.checked = false; return item;})
                }
            }else{
                list.forEach((item)=>{
                    if(item.checked === false){
                        el.checked = false;
                        return true;
                    }else{
                        count++;
                    }
                })
                if(count ===length){
                    el.checked =true;
                }
            }
        }
    })
}
    
