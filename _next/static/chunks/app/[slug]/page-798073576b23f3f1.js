(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{18:function(e,t,n){Promise.resolve().then(n.t.bind(n,4766,23)),Promise.resolve().then(n.bind(n,2008)),Promise.resolve().then(n.bind(n,7975))},2008:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Link}});var r=n(7437),i=n(2265),s=n(1396),o=n.n(s),u=n(4033);function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function Link(e){let{className:t,children:n,style:s,href:a,target:c,...l}=e,f=(0,u.useRouter)(),[d,h]=(0,i.useTransition)();return c||a.startsWith("/")||(c="_blank"),(0,r.jsx)(o(),{...l,target:c,href:a,onClick:e=>{isModifiedEvent(e)||(e.preventDefault(),h(()=>{f.push(e.currentTarget.href)}))},className:[t,"scale-100 active:scale-100"].join(" "),style:{...s,transform:d?"scale(1)":"",opacity:d?.85:1,transition:"transform 0.2s ease-in-out, opacity 0.2s 0.4s linear"},children:n})}},7975:function(e,t,n){"use strict";n.r(t),n.d(t,{Counter:function(){return Counter}});var r=n(7437),i=n(2265);function Counter(){let[e,t]=(0,i.useState)(0);return(0,r.jsxs)("button",{className:"dark:color-white rounded-lg bg-purple-700 px-2 py-1 font-sans font-semibold text-white focus:ring active:bg-purple-600",onClick:()=>t(e+1),children:["You clicked me ",e," times"]})}},4766:function(){}},function(e){e.O(0,[569,971,472,744],function(){return e(e.s=18)}),_N_E=e.O()}]);