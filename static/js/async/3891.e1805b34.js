/*! For license information please see 3891.e1805b34.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3891"],{3213:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n("80372");n.es(o,t),n("23866");var a=o.default},80372:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.default}});var o=n("97087");n.es(o,t)},97087:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n("38613"),a=n("59778"),r=n("25486"),i=n("74656"),l=(0,o.defineComponent)({__name:"index",setup(e){var t=(0,r.useTranslate)({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),n=(0,o.ref)({tel:"",name:""}),l=()=>(0,i.showToast)(t("save")),u=()=>(0,i.showToast)(t("delete"));return(e,r)=>{var i=(0,o.resolveComponent)("demo-block");return(0,o.openBlock)(),(0,o.createBlock)(i,{title:(0,o.unref)(t)("basicUsage")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{"is-edit":"","show-set-default":"","contact-info":n.value,"set-default-label":(0,o.unref)(t)("defaultLabel"),onSave:l,onDelete:u},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}})},67685:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return r},default:function(){return i}});var o=n("96040"),a=n("18777"),r=(0,o.withInstall)(a.default),i=r},39989:function(e,t,n){"use strict";n.r(t),n.d(t,{useId:function(){return r}});var o=n("38613"),a=0;function r(){var e=(0,o.getCurrentInstance)(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return"".concat(t,"-").concat(++a)}},48256:function(e,t,n){"use strict";n.r(t),n.d(t,{routeProps:function(){return a},route:function(){return r},useRoute:function(){return i}}),n("53951"),n("28067");var o=n("38613"),a={to:[String,Object],url:String,replace:Boolean};function r(e){var{to:t,url:n,replace:o,$router:a}=e;t&&a?a[o?"replace":"push"](t):n&&(o?location.replace(n):location.href=n)}function i(){var e=(0,o.getCurrentInstance)().proxy;return()=>r(e)}},59778:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var o=n("96040"),a=n("42896"),r=(0,o.withInstall)(a.default)},73060:function(e,t,n){"use strict";n.r(t),n.d(t,{Form:function(){return r},default:function(){return i}});var o=n("96040"),a=n("69886"),r=(0,o.withInstall)(a.default),i=r},68610:function(e,t,n){"use strict";n.r(t),n.d(t,{Switch:function(){return r},default:function(){return i}});var o=n("96040"),a=n("72393"),r=(0,o.withInstall)(a.default),i=r},74656:function(e,t,n){"use strict";n.r(t),n.d(t,{showToast:function(){return r.showToast},closeToast:function(){return r.closeToast},showFailToast:function(){return r.showFailToast},showLoadingToast:function(){return r.showLoadingToast},showSuccessToast:function(){return r.showSuccessToast},default:function(){return i}});var o=n("96040"),a=n("82464"),r=n("13740"),i=(0,o.withInstall)(a.default)},58485:function(e,t,n){"use strict";n.r(t),n.d(t,{lockClick:function(){return a}});var o=0;function a(e){e?(!o&&document.body.classList.add("van-toast--unclickable"),o++):o&&!--o&&document.body.classList.remove("van-toast--unclickable")}},52221:function(e,t,n){"use strict";n.r(t),n.d(t,{usePopupState:function(){return i},mountComponent:function(){return l}});var o=n("38613"),a=n("88694"),r=n("4821");function i(){var e=(0,o.reactive)({show:!1}),t=t=>{e.show=t},n=n=>{(0,a.extend)(e,n,{transitionAppear:!0}),t(!0)},i=()=>t(!1);return(0,r.useExpose)({open:n,close:i,toggle:t}),{open:n,close:i,state:e,toggle:t}}function l(e){var t=(0,o.createApp)(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}},18777:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n("97381"),n("8781"),n("5737");var o=n("38613"),a=n("96040"),r=n("48256"),i=n("13820"),l=n("77956"),[u,s]=(0,a.createNamespace)("button"),c=(0,a.extend)({},r.routeProps,{tag:(0,a.makeStringProp)("button"),text:String,icon:String,type:(0,a.makeStringProp)("default"),size:(0,a.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,a.makeStringProp)("button"),loadingSize:a.numericProp,loadingText:String,loadingType:String,iconPosition:(0,a.makeStringProp)("left")}),d=(0,o.defineComponent)({name:u,props:c,emits:["click"],setup(e,t){var{emit:n,slots:u}=t,c=(0,r.useRoute)(),d=()=>u.loading?u.loading():(0,o.createVNode)(l.Loading,{size:e.loadingSize,type:e.loadingType,class:s("loading")},null),f=()=>e.loading?d():u.icon?(0,o.createVNode)("div",{class:s("icon")},[u.icon()]):e.icon?(0,o.createVNode)(i.Icon,{name:e.icon,class:s("icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{var t;if(t=e.loading?e.loadingText:u.default?u.default():e.text)return(0,o.createVNode)("span",{class:s("text")},[t])},v=()=>{var{color:t,plain:n}=e;if(t){var o={color:n?t:"white"};return!n&&(o.background=t),t.includes("gradient")?o.border=0:o.borderColor=t,o}},m=t=>{e.loading?(0,a.preventDefault)(t):!e.disabled&&(n("click",t),c())};return()=>{var{tag:t,type:n,size:r,block:i,round:l,plain:u,square:c,loading:d,disabled:g,hairline:h,nativeType:b,iconPosition:w}=e,S=[s([n,r,{plain:u,block:i,round:l,square:c,loading:d,disabled:g,hairline:h}]),{[a.BORDER_SURROUND]:h}];return(0,o.createVNode)(t,{type:b,class:S,style:v(),disabled:g,onClick:m},{default:()=>[(0,o.createVNode)("div",{class:s("content")},["left"===w&&f(),p(),"right"===w&&f()])]})}}})},42896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}}),n("97381"),n("8781");var o=n("38613"),a=n("96040"),r=n("57517"),i=n("73060"),l=n("3533"),u=n("67685"),s=n("68610"),[c,d,f]=(0,a.createNamespace)("contact-edit"),p={tel:"",name:""},v={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>(0,a.extend)({},p)},telValidator:{type:Function,default:a.isMobile}},m=(0,o.defineComponent)({name:c,props:v,emits:["save","delete","changeDefault"],setup(e,t){var{emit:n}=t,c=(0,o.reactive)((0,a.extend)({},p,e.contactInfo)),v=()=>{!e.isSaving&&n("save",c)},m=()=>n("delete",c),g=()=>(0,o.createVNode)("div",{class:d("buttons")},[(0,o.createVNode)(u.Button,{block:!0,round:!0,type:"primary",text:f("save"),class:d("button"),loading:e.isSaving,nativeType:"submit"},null),e.isEdit&&(0,o.createVNode)(u.Button,{block:!0,round:!0,text:f("delete"),class:d("button"),loading:e.isDeleting,onClick:m},null)]),h=()=>(0,o.createVNode)(s.Switch,{modelValue:c.isDefault,"onUpdate:modelValue":e=>c.isDefault=e,onChange:e=>n("changeDefault",e)},null),b=()=>{if(e.showSetDefault)return(0,o.createVNode)(r.Cell,{title:e.setDefaultLabel,class:d("switch-cell"),border:!1},{"right-icon":h})};return(0,o.watch)(()=>e.contactInfo,e=>(0,a.extend)(c,p,e)),()=>(0,o.createVNode)(i.Form,{class:d(),onSubmit:v},{default:()=>[(0,o.createVNode)("div",{class:d("fields")},[(0,o.createVNode)(l.Field,{modelValue:c.name,"onUpdate:modelValue":e=>c.name=e,clearable:!0,label:f("name"),rules:[{required:!0,message:f("nameEmpty")}],maxlength:"30",placeholder:f("name")},null),(0,o.createVNode)(l.Field,{modelValue:c.tel,"onUpdate:modelValue":e=>c.tel=e,clearable:!0,type:"tel",label:f("tel"),rules:[{validator:e.telValidator,message:f("telInvalid")}],placeholder:f("tel")},null)]),b(),g()]})}})},69886:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}}),n("97381"),n("8781"),n("55220"),n("72880"),n("45145"),n("5737"),n("88287"),n("63351"),n("11017"),n("16790"),n("82623"),n("90517"),n("54368"),n("8296"),n("63298"),n("63145"),n("68900"),n("89095"),n("30406");var o=n("38613"),a=n("96040"),r=n("25111"),i=n("4821"),[l,u]=(0,a.createNamespace)("form"),s={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:a.numericProp,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:a.truthProp,showErrorMessage:a.truthProp,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},c=(0,o.defineComponent)({name:l,props:s,emits:["submit","failed"],setup(e,t){var{emit:n,slots:l}=t,{children:s,linkChildren:c}=(0,r.useChildren)(a.FORM_KEY),d=e=>e?s.filter(t=>e.includes(t.name)):s,f=e=>new Promise((t,n)=>{var o=[];d(e).reduce((e,t)=>e.then(()=>{if(!o.length)return t.validate().then(e=>{e&&o.push(e)})}),Promise.resolve()).then(()=>{o.length?n(o):t()})}),p=e=>new Promise((t,n)=>{Promise.all(d(e).map(e=>e.validate())).then(e=>{(e=e.filter(Boolean)).length?n(e):t()})}),v=e=>{var t=s.find(t=>t.name===e);return t?new Promise((e,n)=>{t.validate().then(t=>{t?n(t):e()})}):Promise.reject()},m=t=>"string"==typeof t?v(t):e.validateFirst?f(t):p(t),g=(e,t)=>{s.some(n=>n.name===e&&(n.$el.scrollIntoView(t),!0))},h=()=>s.reduce((e,t)=>(void 0!==t.name&&(e[t.name]=t.formValue.value),e),{}),b=()=>{var t=h();m().then(()=>n("submit",t)).catch(o=>{n("failed",{values:t,errors:o}),e.scrollToError&&o[0].name&&g(o[0].name)})},w=e=>{(0,a.preventDefault)(e),b()};return c({props:e}),(0,i.useExpose)({submit:b,validate:m,getValues:h,scrollToField:g,resetValidation:e=>{"string"==typeof e&&(e=[e]),d(e).forEach(e=>{e.resetValidation()})},getValidationStatus:()=>s.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{})}),()=>{var e;return(0,o.createVNode)("form",{class:u(),onSubmit:w},[null===(e=l.default)||void 0===e?void 0:e.call(l)])}}})},72393:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}}),n("97381"),n("8781");var o=n("38613"),a=n("96040"),r=n("25111"),i=n("77956"),[l,u]=(0,a.createNamespace)("switch"),s={size:a.numericProp,loading:Boolean,disabled:Boolean,modelValue:a.unknownProp,activeColor:String,inactiveColor:String,activeValue:{type:a.unknownProp,default:!0},inactiveValue:{type:a.unknownProp,default:!1}},c=(0,o.defineComponent)({name:l,props:s,emits:["change","update:modelValue"],setup(e,t){var{emit:n,slots:l}=t,s=()=>e.modelValue===e.activeValue,c=()=>{if(!e.disabled&&!e.loading){var t=s()?e.inactiveValue:e.activeValue;n("update:modelValue",t),n("change",t)}},d=()=>{if(e.loading){var t=s()?e.activeColor:e.inactiveColor;return(0,o.createVNode)(i.Loading,{class:u("loading"),color:t},null)}if(l.node)return l.node()};return(0,r.useCustomFieldValue)(()=>e.modelValue),()=>{var t,{size:n,loading:r,disabled:i,activeColor:f,inactiveColor:p}=e,v=s(),m={fontSize:(0,a.addUnit)(n),backgroundColor:v?f:p};return(0,o.createVNode)("div",{role:"switch",class:u({on:v,loading:r,disabled:i}),style:m,tabindex:i?void 0:0,"aria-checked":v,onClick:c},[(0,o.createVNode)("div",{class:u("node")},[d()]),null===(t=l.background)||void 0===t?void 0:t.call(l)])}}})},82464:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}}),n("97381"),n("8781");var o=n("38613"),a=n("96040"),r=n("58485"),i=n("13820"),l=n("96187"),u=n("77956"),[s,c]=(0,a.createNamespace)("toast"),d=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],f={icon:String,show:Boolean,type:(0,a.makeStringProp)("text"),overlay:Boolean,message:a.numericProp,iconSize:a.numericProp,duration:(0,a.makeNumberProp)(2e3),position:(0,a.makeStringProp)("middle"),teleport:[String,Object],wordBreak:String,className:a.unknownProp,iconPrefix:String,transition:(0,a.makeStringProp)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:a.unknownProp,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},p=(0,o.defineComponent)({name:s,props:f,emits:["update:show"],setup(e,t){var n,{emit:s,slots:f}=t,p=!1,v=()=>{var t=e.show&&e.forbidClick;p!==t&&(p=t,(0,r.lockClick)(p))},m=e=>s("update:show",e),g=()=>{e.closeOnClick&&m(!1)},h=()=>clearTimeout(n),b=()=>{var{icon:t,type:n,iconSize:a,iconPrefix:r,loadingType:l}=e;return t||"success"===n||"fail"===n?(0,o.createVNode)(i.Icon,{name:t||n,size:a,class:c("icon"),classPrefix:r},null):"loading"===n?(0,o.createVNode)(u.Loading,{class:c("loading"),size:a,type:l},null):void 0},w=()=>{var{type:t,message:n}=e;return f.message?(0,o.createVNode)("div",{class:c("text")},[f.message()]):(0,a.isDef)(n)&&""!==n?"html"===t?(0,o.createVNode)("div",{key:0,class:c("text"),innerHTML:String(n)},null):(0,o.createVNode)("div",{class:c("text")},[n]):void 0};return(0,o.watch)(()=>[e.show,e.forbidClick],v),(0,o.watch)(()=>[e.show,e.type,e.message,e.duration],()=>{h(),e.show&&e.duration>0&&(n=setTimeout(()=>{m(!1)},e.duration))}),(0,o.onMounted)(v),(0,o.onUnmounted)(v),()=>(0,o.createVNode)(l.Popup,(0,o.mergeProps)({class:[c([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:h,"onUpdate:show":m},(0,a.pick)(e,d)),{default:()=>[b(),w()]})}})},13740:function(e,t,n){"use strict";n.r(t),n.d(t,{showToast:function(){return d},showLoadingToast:function(){return p},showSuccessToast:function(){return v},showFailToast:function(){return m},closeToast:function(){return g}}),n("43186"),n("24468"),n("19272"),n("77544"),n("99353"),n("36852"),n("78420"),n("21860"),n("39193"),n("86167"),n("77253"),n("73455"),n("90095"),n("68571"),n("97381"),n("8781"),n("55220"),n("72880"),n("45145"),n("82623"),n("63145"),n("68900");var o=n("38613"),a=n("96040"),r=n("52221"),i=n("82464"),l=[],u=(0,a.extend)({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1}),s=new Map;function c(e){return(0,a.isObject)(e)?e:{message:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!a.inBrowser)return{};var t=function(){if(!l.length){var e=function(){var{instance:e,unmount:t}=(0,r.mountComponent)({setup(){var e=(0,o.ref)(""),{open:t,state:n,close:a,toggle:l}=(0,r.usePopupState)(),u=()=>{};return(0,o.watch)(e,e=>{n.message=e}),(0,o.getCurrentInstance)().render=()=>(0,o.createVNode)(i.default,(0,o.mergeProps)(n,{onClosed:u,"onUpdate:show":l}),null),{open:t,close:a,message:e}}});return e}();l.push(e)}return l[l.length-1]}(),n=c(e);return t.open((0,a.extend)({},u,s.get(n.type||u.type),n)),t}var f=e=>t=>d((0,a.extend)({type:e},c(t))),p=f("loading"),v=f("success"),m=f("fail"),g=e=>{if(l.length){if(e)l.forEach(e=>{e.close()}),l=[];else{var t;l[0].close()}}}},23866:function(e,t,n){},79034:function(e,t,n){}}]);