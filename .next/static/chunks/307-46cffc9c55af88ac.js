"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{328:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return a},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return s},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return P}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function s(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await s(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},2277:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3307:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},useLinkStatus:function(){return b}});let n=r(3300),o=r(4786),u=n._(r(6362)),i=r(5686),a=r(9648),l=r(2023),f=r(4307),c=r(328),s=r(5322);r(861);let p=r(6603),d=r(4703),h=r(3135);function y(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}function g(e){let t,r,n,[i,g]=(0,u.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,u.useRef)(null),{href:P,as:_,children:v,prefetch:E=null,passHref:O,replace:j,shallow:T,scroll:C,onClick:N,onMouseEnter:S,onTouchStart:A,legacyBehavior:L=!1,onNavigate:x,ref:M,unstable_dynamicOnHover:U,...R}=e;t=v,L&&("string"==typeof t||"number"==typeof t)&&(t=(0,o.jsx)("a",{children:t}));let k=u.default.useContext(a.AppRouterContext),I=!1!==E,w=null===E?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:D,as:F}=u.default.useMemo(()=>{let e=y(P);return{href:e,as:_?y(_):e}},[P,_]);L&&(r=u.default.Children.only(t));let K=L?r&&"object"==typeof r&&r.ref:M,B=u.default.useCallback(e=>(null!==k&&(b.current=(0,p.mountLinkInstance)(e,D,k,w,I,g)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[I,D,k,w,g]),z={ref:(0,f.useMergedRef)(B,K),onClick(e){L||"function"!=typeof N||N(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),k&&(e.defaultPrevented||function(e,t,r,n,o,i,a){let{nodeName:l}=e.currentTarget;if(!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(t)){o&&(e.preventDefault(),location.replace(t));return}e.preventDefault(),u.default.startTransition(()=>{if(a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}(0,h.dispatchNavigateAction)(r||t,o?"replace":"push",null==i||i,n.current)})}}(e,D,F,b,j,C,x))},onMouseEnter(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),k&&I&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){L||"function"!=typeof A||A(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),k&&I&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,c.isAbsoluteUrl)(F)?z.href=F:L&&!O&&("a"!==r.type||"href"in r.props)||(z.href=(0,s.addBasePath)(F)),n=L?u.default.cloneElement(r,z):(0,o.jsx)("a",{...R,...z,children:t}),(0,o.jsx)(m.Provider,{value:i,children:n})}r(2277);let m=(0,u.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,u.useContext)(m);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4307:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(6362);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=u(e,n)),t&&(o.current=u(t,n))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4703:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(328),o=r(1489);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},5686:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return a},urlObjectKeys:function(){return i}});let n=r(3300)._(r(9862)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",i=e.pathname||"",a=e.hash||"",l=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),i&&"/"!==i[0]&&(i="/"+i)):f||(f=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+u+f+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return u(e)}},9862:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})}}]);