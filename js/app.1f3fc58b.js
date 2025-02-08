(function(){"use strict";var e={705:function(e,n,t){var i=t(751),r=t(641),o=t(33);const a={id:"app",style:{display:"flex",height:"100vh"}},s={style:{flex:"1","max-width":"20%","padding-right":"10px","overflow-y":"auto"}},l=["onClick"],u={style:{flex:"3",padding:"10px"}},c={style:{flex:"1","padding-left":"10px","overflow-y":"auto"}},d={style:{"margin-top":"20px",padding:"10px",background:"#f1f1f1"}};function m(e,n,t,i,m,g){const f=(0,r.g2)("OpenSeadragonViewer");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",s,[n[0]||(n[0]=(0,r.Lk)("h3",null,"slides",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(m.images,((e,n)=>((0,r.uX)(),(0,r.CE)("li",{key:n,onClick:e=>g.selectImage(n)},(0,o.v_)(e.name),9,l)))),128))])]),(0,r.Lk)("div",u,[(0,r.bF)(f,{"image-index":m.imageIndex},null,8,["image-index"])]),(0,r.Lk)("div",c,[(0,r.Lk)("div",d,[n[1]||(n[1]=(0,r.Lk)("h3",null,"Description",-1)),(0,r.Lk)("p",null,(0,o.v_)(m.currentImageText),1)])])])}const g={id:"viewer",class:"openseadragon-viewer"};function f(e,n,t,i,o,a){return(0,r.uX)(),(0,r.CE)("div",g)}var p=t(11),v=t.n(p),h={name:"OpenSeadragonViewer",props:{imageIndex:{required:!0}},data(){return{images:[{name:"Image 1",source:"./example_images/small.dzi"},{name:"Image 2",source:"./example_images/test.dzi"}],viewer:null}},watch:{imageIndex(e,n){this.viewer&&(this.viewer.close(),this.viewer.destroy()),this.initViewer(),console.log(e),console.log(n),console.log(this.images.newVal)}},mounted(){console.log(this.images[this.imageIndex].source),this.initViewer()},methods:{initViewer(){this.viewer=v()({id:"viewer",tileSources:this.images[this.imageIndex].source,prefixUrl:"/images-icon/",showNavigator:!0,showZoomControl:!0,crossOriginPolicy:"Anonymous"})}},beforeUnmount(){this.viewer&&this.viewer.destroy()}},x=t(262);const w=(0,x.A)(h,[["render",f],["__scopeId","data-v-c0c84d8c"]]);var y=w,I={name:"App",components:{OpenSeadragonViewer:y},data(){return{imageIndex:0,selectedImage:"./example_images/small.dzi",currentImageText:"small",images:[{name:"small",source:"./example_images/small.dzi"},{name:"test",source:"./example_images/test.dzi"}],texts:[{name:"text 1",content:"small"},{name:"text 2",content:"cell"}]}},methods:{selectImage(e){console.log(e),this.imageIndex=e,this.currentImageText=this.texts[e].content}},mounted(){this.selectedImage=this.images[0].source,this.imageIndex=0}};const b=(0,x.A)(I,[["render",m],["__scopeId","data-v-81abd934"]]);var k=b;(0,i.Ef)(k).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,a=i[0],s=i[1],l=i[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var c=l(t)}for(n&&n(i);u<a.length;u++)o=a[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},i=self["webpackChunkviewer_vue"]=self["webpackChunkviewer_vue"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(705)}));i=t.O(i)})();
//# sourceMappingURL=app.1f3fc58b.js.map