(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7840:function(e,t,n){Promise.resolve().then(n.bind(n,2008))},2008:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Link}});var i=n(7437),r=n(2265),s=n(1396),a=n.n(s),u=n(4033);function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function Link(e){let{className:t,children:n,style:s,href:c,target:o,...f}=e,l=(0,u.useRouter)(),[h,v]=(0,r.useTransition)();return o||c.startsWith("/")||(o="_blank"),(0,i.jsx)(a(),{...f,target:o,href:c,onClick:e=>{isModifiedEvent(e)||(e.preventDefault(),v(()=>{l.push(e.currentTarget.href)}))},className:[t,"scale-100 active:scale-100"].join(" "),style:{...s,transform:h?"scale(1)":"",opacity:h?.85:1,transition:"transform 0.2s ease-in-out, opacity 0.2s 0.4s linear"},children:n})}}},function(e){e.O(0,[569,971,472,744],function(){return e(e.s=7840)}),_N_E=e.O()}]);