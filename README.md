# jsxMeno 

jsx传参
         或者使用函数调用 
        {card(11)} 
         组件要大写才生效 

       ```  javascript 
<Card age={11} name="susu"></Card>
      
       ```
``` javascript
<Card age={11} name="susu"></Card>
        </Card>
```
​       jsx插槽 
组件外部使用插槽

``` javascript
<Card age={11} name="susu" >
            {{
                foo:() => 'sssss'
                
            }}
        </Card>
```

组件内部定义插槽
 {slots.default && slots.default()}

jsx页面引入css，使用css module方式需要以xx.module.css的命名才行，vite内部默认支持css Module

在vue中使用jsx 安装@vitejs/plugin-vue-jsx
ts配置或者继承@vue/tsconfig/tsconfig.dom.json,能够在打包是通过
 "jsx": "preserve",
    "jsxImportSource": "vue",

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

