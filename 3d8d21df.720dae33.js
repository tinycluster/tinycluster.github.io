(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(135)),c={id:"about",title:"About",sidebar_label:"About"},i={id:"about",title:"About",description:"Tiny Cluster is the simplest way for you to build",source:"@site/docs/about.md",permalink:"/docs/about",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/about.md",sidebar_label:"About",sidebar:"someSidebar",next:{title:"Quick Start",permalink:"/docs/guide"}},u=[{value:"Architecture",id:"architecture",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Tiny Cluster is the simplest way for you to build\na small cluster on your local machine for you who\nare just starting out in the world of distributed\ncomputing. I created it after a lot of study and\nresearch.\nI give credit to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ansilh/k8s-vagrant"}),"Ansil H")," , which I take as a basis."),Object(a.b)("p",null,"From the Tiny Cluster you quickly build a local\ncluster on your computer or notebook, to carry out\nyour parallel computing, machine learning,\ndistributed computing experiments."),Object(a.b)("p",null,"If you find something incorrect, feel free to get in touch."),Object(a.b)("h2",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"Tiny Cluster through ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.vagrantup.com/"}),"Vagrant")," built a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://kubernetes.io/"}),"Kubernetes")," cluster using virtual machines."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"assets/img/architecture.png",alt:"alt text"}))))}s.isMDXComponent=!0},135:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);