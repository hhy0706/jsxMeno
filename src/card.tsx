import {defineComponent} from 'vue';

export default (props,{slots}) =>{
    
    console.log(2222,slots)
    return (<div >
        {/* card1 */}
        {slots.foo && slots.foo({test:'test'})}
    </div>)
}