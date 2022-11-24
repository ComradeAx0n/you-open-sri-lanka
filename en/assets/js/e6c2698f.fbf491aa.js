"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[491],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),l=a(6010),i=a(2389),o=a(7392),u=a(7094),p=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function s(e){var t;const{lazy:a,block:i,defaultValue:s,values:d,groupId:k,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),f=(0,o.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[w,T]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&y.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,a=O.indexOf(t),r=y[a].value;r!==w&&(E(t),T(r),null!=k&&N(k,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:_},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},8265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={description:"\u0420\u043e\u0437\u0435\u0442\u043a\u0438, \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430"},u="\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e",p={unversionedId:"residence/electricity",id:"residence/electricity",title:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e",description:"\u0420\u043e\u0437\u0435\u0442\u043a\u0438, \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430",source:"@site/docs/residence/electricity.mdx",sourceDirName:"residence",slug:"/residence/electricity",permalink:"/en/residence/electricity",draft:!1,editUrl:"https://github.com/ComradeAx0n/you-open-sri-lanka/tree/master/docs/residence/electricity.mdx",tags:[],version:"current",frontMatter:{description:"\u0420\u043e\u0437\u0435\u0442\u043a\u0438, \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430"},sidebar:"tutorialSidebar",previous:{title:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u044b",permalink:"/en/residence/online-stores"},next:{title:"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0438",permalink:"/en/residence/holidays"}},c={},m=[{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430",level:2},{value:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0443\u043a\u043d\u0442\u044b \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c",id:"\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0435-\u043f\u0443\u043a\u043d\u0442\u044b-\u043f\u043e-\u0433\u0440\u0443\u043f\u043f\u0430\u043c",level:3},{value:"\u0420\u043e\u0437\u0435\u0442\u043a\u0438",id:"\u0440\u043e\u0437\u0435\u0442\u043a\u0438",level:2}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"},"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),(0,n.kt)("h2",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cebcare.ceb.lk/Incognito/DemandMgmtSchedule"},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cebcare.ceb.lk/Incognito/OutageMap"},"\u041a\u0430\u0440\u0442\u0430"))),(0,n.kt)("p",null,"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0431\u044b\u0432\u0430\u0435\u0442 \u0434\u0432\u0443\u0445 \u0442\u0438\u043f\u043e\u0432: \u043f\u043e\u043b\u043e\u043c\u043a\u0430 \u0438 \u043f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0423 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438\u043b\u0438 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0436\u0438\u043b\u044c\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043f\u043b\u0430\u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 ",(0,n.kt)("a",{parentName:"p",href:"https://cebcare.ceb.lk/Incognito/OutageMap"},"\u0441\u0430\u0439\u0442"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u041f\u043e \u0444\u0430\u043a\u0442\u0443, \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043f\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044e, \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u043d\u0430 \u0446\u0435\u043b\u044b\u0439 \u0447\u0430\u0441, \u0430 \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435, \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0447\u0430\u0441\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 5 \u0447\u0430\u0441\u043e\u0432 \u0438 \u0431\u043e\u043b\u0435\u0435. \u041d\u043e \u0432 \u0446\u0435\u043b\u043e\u043c \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0442\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0432 ",(0,n.kt)("a",{parentName:"p",href:"https://cebcare.ceb.lk/Incognito/DemandMgmtSchedule"},"\u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0438"),".")),(0,n.kt)("h3",{id:"\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0435-\u043f\u0443\u043a\u043d\u0442\u044b-\u043f\u043e-\u0433\u0440\u0443\u043f\u043f\u0430\u043c"},"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0443\u043a\u043d\u0442\u044b \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c"),(0,n.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u0430\u044f, \u043d\u0430\u0432\u0435\u0440\u043d\u044f\u043a\u0430 \u043b\u0443\u0447\u0448\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0443 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0436\u0438\u043b\u044c\u044f \u0438\u043b\u0438 \u0441\u043e\u0441\u0435\u0434\u0435\u0439."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u0413\u0440\u0443\u043f\u043f\u0430"),(0,n.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"B, L"),(0,n.kt)("td",{parentName:"tr",align:null},"\u0411\u0435\u0440\u0435\u0433 \u043e\u0442 Galle \u0434\u043e Matara")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u0421"),(0,n.kt)("td",{parentName:"tr",align:null},"Nilwella (\u0440\u044f\u0434\u043e\u043c Hiriketiya \u0438 Dikwella)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D"),(0,n.kt)("td",{parentName:"tr",align:null},"Weligama, Mirissa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"E"),(0,n.kt)("td",{parentName:"tr",align:null},'Dikwella, Hiriketiya (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0432 "H")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"F"),(0,n.kt)("td",{parentName:"tr",align:null},"Galle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"G"),(0,n.kt)("td",{parentName:"tr",align:null},"Beruwala")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"H"),(0,n.kt)("td",{parentName:"tr",align:null},"Unawatuna , Kandy , Matara")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I"),(0,n.kt)("td",{parentName:"tr",align:null},"Hikkaduwa, Koggala , Mirihipenna , Talpe , Kabalana , Ahangama , Ambalangoda")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"J"),(0,n.kt)("td",{parentName:"tr",align:null},"Tangalle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"K"),(0,n.kt)("td",{parentName:"tr",align:null},"Aluthgama , Pasikuda")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"S"),(0,n.kt)("td",{parentName:"tr",align:null},"Trincomalee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"U, P"),(0,n.kt)("td",{parentName:"tr",align:null},"Pottuvil , Arugam Bay")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Q"),(0,n.kt)("td",{parentName:"tr",align:null},"Anuradhapura, Kalpitiya")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"W"),(0,n.kt)("td",{parentName:"tr",align:null},"Negombo")))),(0,n.kt)("h2",{id:"\u0440\u043e\u0437\u0435\u0442\u043a\u0438"},"\u0420\u043e\u0437\u0435\u0442\u043a\u0438"),(0,n.kt)("p",null,"\u0412 \u0428\u0440\u0438-\u041b\u0430\u043d\u043a\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u044f \u0440\u043e\u0437\u0435\u0442\u043a\u0438 \u0442\u0438\u043f\u0430 D, M \u0438 G. \u0422\u0430\u043a \u0436\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0442\u0441\u044f \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u043e\u0437\u0435\u0442\u043a\u0438. \u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u044b \u0440\u043e\u0437\u0435\u0442\u043a\u0438 \u0442\u0438\u043f\u0430 D."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"type_d",label:"\u0422\u0438\u043f D",default:!0,mdxType:"TabItem"},(0,n.kt)("img",{src:"/img/power_socket_type_d.jpg",alt:"Power socket Type D"})),(0,n.kt)(i.Z,{value:"type_m",label:"\u0422\u0438\u043f M",mdxType:"TabItem"},(0,n.kt)("img",{src:"/img/power_socket_type_m.jpg",alt:"Power socket Type M"})),(0,n.kt)(i.Z,{value:"type_g",label:"\u0422\u0438\u043f G",mdxType:"TabItem"},(0,n.kt)("img",{src:"/img/power_socket_type_g.jpg",alt:"Power socket Type G"})),(0,n.kt)(i.Z,{value:"multi_socket",label:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u043e\u0437\u0435\u0442\u043a\u0430",mdxType:"TabItem"},(0,n.kt)("img",{src:"/img/multi_socket.jpg",alt:"Multi Socket",width:"213",height:"213"})),(0,n.kt)(i.Z,{value:"multi_plug",label:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u043e\u0437\u0435\u0442\u043a\u0430",mdxType:"TabItem"},(0,n.kt)("img",{src:"/img/multi_plug.jpg",alt:"Multi Plug",width:"213",height:"213"}))),(0,n.kt)("p",null,"\u0420\u043e\u0437\u0435\u0442\u043a\u0430 \u0442\u0438\u043f\u0430 D \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043d\u0430\u0448\u0438\u0445 \u0435\u0432\u0440\u043e\u0432\u0438\u043b\u043e\u043a, \u043d\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0432\u043e\u0442\u043a\u043d\u0443\u0442\u044c \u0432 \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u0434\u044b\u0440\u043a\u0443 \u0440\u0443\u0447\u043a\u0443 (\u0432 \u043d\u0435\u0439 \u0437\u0430\u0437\u0435\u043c\u043b\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u0431\u043e\u0438\u0442\u0435\u0441\u044c, \u0442\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u043e\u0437\u0435\u0442\u043a\u0443), \u0430 \u043f\u043e\u0441\u043b\u0435 \u0432 \u043d\u0438\u0436\u043d\u0438\u0438 \u0434\u044b\u0440\u043a\u0438 \u0432\u043e\u0442\u043a\u043d\u0443\u0442\u044c \u0432\u0438\u043b\u043a\u0443, \u0440\u0443\u0447\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0442\u0430\u0449\u0438\u0442\u044c \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u043e\u0437\u0435\u0442\u043a\u0443.",(0,n.kt)("br",{parentName:"p"}),"\n","\u041b\u0438\u0431\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u0438\u043a."))}d.isMDXComponent=!0}}]);