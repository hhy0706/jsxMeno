import style from './index.module.css';
import Card from './card';
import {defineComponent,ref} from 'vue';
export default defineComponent({
    setup(props,{slots}) {
      
        const val =  ref(2);
        const susu = () => {
            val.value = val.value +1;
            console.log(1111111,val.value);
        }  
        return () => (<div class={[style['container']]}>
            <button onClick={susu}>
                点击
            </button>
            {/* <MyTest></MyTest> */}
            {/*  或者使用函数调用 */}
            {/* {card(11)} */}
            {/* 组件要大写才生效 */}
            <p>Count: {val.value}</p>
            {/* <input v-model={val}/> */}
            {/* <Card age={11} name="susu"></Card>  slots={{foo:() => (<div>foo</div>)}}*/}
            <Card age={11} name="susu" >
                {{
                    foo:({test}) => test
                    
                }}
            </Card>
            {/* {slots.default && slots.default()} */}
    
        </div>)
    }
})