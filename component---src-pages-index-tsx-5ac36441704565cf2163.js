(self.webpackChunkszl_portfolio=self.webpackChunkszl_portfolio||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),a=r(7067);function c(t,r,l){return a()?(e.exports=c=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var a=[null];a.push.apply(a,t);var c=new(Function.bind.apply(e,a));return r&&n(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),c=r(379),l=r(8206);e.exports=function(e){return n(e)||a(e)||c(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2748:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7294),a=r(3757),c=r(7487),l=r(5444),o=r(6125),s=function(){return n.createElement("header",{className:"header-bar"},n.createElement("div",null,n.createElement(o.S,{alt:"logo",aspectRatio:1,className:"logo",src:"../static/images/sl-icon.png",__imageData:r(8857)}),n.createElement(l.Link,{to:"/#software"},"Software"),n.createElement(l.Link,{to:"/#research"},"Research"),n.createElement(l.Link,{to:"/#career"},"Career"),n.createElement(l.Link,{to:"/#more"},"More")))},i=function(){var e=(0,l.useStaticQuery)("792698529").allSocialJson;return n.createElement("div",{className:"link-container"},e.edges.map((function(e){var t=e.node,r=t.name,a=t.icon,c=t.url,l=t.id;return n.createElement("a",{key:l,href:c,target:"_blank"},n.createElement("img",{src:a.publicURL,alt:r}))})))},u=r(9394),d=function(e){var t=e.id,a=(0,l.useStaticQuery)("2568244352").mdx,c=a.body,d=a.frontmatter;return n.createElement("section",{id:t,className:"main-container"},n.createElement("section",{className:"left-panel"},n.createElement(s,null),n.createElement("div",{className:"text-container"},n.createElement("h3",null,"Hey there!"),n.createElement("h1",null,"How's it ",n.createElement("br",null)," going?"),n.createElement("h3",null,"I'm Stephen."),n.createElement("div",{className:"roles"},n.createElement("h5",null,"Software developer"),n.createElement("h5",null,"Neuroscience research trainee"),n.createElement("h5",null,"Entrepreneur")),n.createElement(i,null))),n.createElement("section",{className:"right-panel"},n.createElement("div",{className:"text-container"},n.createElement(o.S,{quality:100,alt:"avatar",className:"avatar",src:"../static/images/avatar.png",__imageData:r(4470)}),n.createElement("h2",null,d.title),n.createElement("p",{className:"subtitle"},"Last updated ",d.date),n.createElement(u.MDXRenderer,null,c))))},m=function(e){var t=e.id,r=e.frontmatter,a=e.body,c=(0,o.d)(r.icon);return n.createElement("a",{key:t,className:"card",href:r.url,target:"_blank"},c?n.createElement(o.G,{image:c,className:"icon",alt:r.title}):n.createElement("div",{className:"icon"}),n.createElement("h2",null,r.title),n.createElement("p",{className:"small"},r.year),n.createElement(u.MDXRenderer,null,a),n.createElement("p",{className:"url small"},r.url))},p=function(e){var t=(0,l.useStaticQuery)("2385520925").allMdx;return n.createElement("section",e,n.createElement("h1",null,"Software"),n.createElement("div",{className:"flex-container"},t.edges.map((function(e){var t=e.node,r=t.id,a=t.frontmatter,c=t.body;return n.createElement(m,{key:r,id:r,frontmatter:a,body:c})}))))},f=function(e){var t=e.id,r=e.frontmatter,a=e.body;return n.createElement("div",{key:t,className:"research-entry"},n.createElement("h3",null,r.lab_url?n.createElement("a",{href:r.lab_url},r.title):r.title," ","@ ",r.location),n.createElement("h5",null,r.start_date," - ",r.end_date),n.createElement(u.MDXRenderer,null,a))},b=function(e){var t=(0,l.useStaticQuery)("1289115338");return n.createElement("section",e,n.createElement("h1",null,"Research"),t.allMdx.edges.map((function(e){var t=e.node,r=t.id,a=t.body,c=t.frontmatter;return n.createElement(f,{key:r,id:r,frontmatter:c,body:a})})))},E=function(e){var t=e.title,r=e.description,a=e.start_time,c=e.end_time;return n.createElement("div",{className:"career-entry"},n.createElement("h2",null,t),n.createElement("p",null,r),n.createElement("p",{className:"date"},a," - ",c))},y=function(e){var t=(0,l.useStaticQuery)("1367653310"),r=t.allAwardsJson,a=t.allCareerJson,c=t.allEduJson;return n.createElement("section",e,n.createElement("section",null,n.createElement("h1",null,"Career"),a.edges.map((function(e){var t=e.node,r=t.id,a=t.title,c=t.description,l=t.start_time,o=t.end_time;return n.createElement(E,{key:r,title:a,description:c,start_time:l,end_time:o})}))),n.createElement("section",null,n.createElement("h1",null,"Education"),c.edges.map((function(e){var t=e.node,r=t.id,a=t.title,c=t.description,l=t.start_time,o=t.end_time;return n.createElement(E,{key:r,title:a,description:c,start_time:l,end_time:o})}))),n.createElement("section",null,n.createElement("h1",null,"Awards"),r.edges.map((function(e){var t=e.node,r=t.id,a=t.title,c=t.year;return n.createElement("div",{key:r},n.createElement("p",null,a," '",c))}))))},x=function(e){var t=(0,l.useStaticQuery)("2990606948").mdx;return n.createElement("section",e,n.createElement("h1",null,"How I built this site..."),n.createElement(u.MDXRenderer,null,t.body))},v=function(){return n.createElement(a.Z,null,n.createElement(c.Z,{title:"Home"}),n.createElement(d,{id:"home"}),n.createElement(p,{id:"software",className:"page"}),n.createElement(b,{id:"research",className:"page"}),n.createElement(y,{id:"career",className:"page grid-container"}),n.createElement(x,{id:"more",className:"page"}))}},9394:function(e,t,r){var n=r(6660);e.exports={MDXRenderer:n}},6660:function(e,t,r){var n=r(9100),a=r(319),c=r(9713),l=r(7316),o=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),d=r(3497).mdx,m=r(2197).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=l(e,o),s=m(t),p=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:d},s),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(c)))}),[r,t]);return u.createElement(p,i({},c))}},4470:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8d8","images":{"fallback":{"src":"/static/2abce964ed6c3d8218971d2be9537863/6a7d2/avatar.png","srcSet":"/static/2abce964ed6c3d8218971d2be9537863/88242/avatar.png 281w,\\n/static/2abce964ed6c3d8218971d2be9537863/d2910/avatar.png 562w,\\n/static/2abce964ed6c3d8218971d2be9537863/6a7d2/avatar.png 1123w","sizes":"(min-width: 1123px) 1123px, 100vw"},"sources":[{"srcSet":"/static/2abce964ed6c3d8218971d2be9537863/5b324/avatar.webp 281w,\\n/static/2abce964ed6c3d8218971d2be9537863/b4134/avatar.webp 562w,\\n/static/2abce964ed6c3d8218971d2be9537863/087a9/avatar.webp 1123w","type":"image/webp","sizes":"(min-width: 1123px) 1123px, 100vw"}]},"width":1123,"height":798}')},8857:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/cdbda974d078d9023c8f925535a93f50/ccc41/sl-icon.png","srcSet":"/static/cdbda974d078d9023c8f925535a93f50/bf8e1/sl-icon.png 128w,\\n/static/cdbda974d078d9023c8f925535a93f50/acb7c/sl-icon.png 256w,\\n/static/cdbda974d078d9023c8f925535a93f50/ccc41/sl-icon.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cdbda974d078d9023c8f925535a93f50/6766a/sl-icon.webp 128w,\\n/static/cdbda974d078d9023c8f925535a93f50/22bfc/sl-icon.webp 256w,\\n/static/cdbda974d078d9023c8f925535a93f50/d689f/sl-icon.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5ac36441704565cf2163.js.map