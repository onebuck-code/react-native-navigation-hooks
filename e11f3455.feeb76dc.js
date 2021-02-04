(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(6),o=(t(0),t(84)),r={id:"use-navigation-component-did-disappear",title:"useNavigationComponentDidDisappear",sidebar_label:"useNavigationComponentDidDisappear",hide_title:!0,hide_table_of_contents:!0},p={unversionedId:"use-navigation-component-did-disappear",id:"use-navigation-component-did-disappear",isDocsHomePage:!1,title:"useNavigationComponentDidDisappear",description:"useNavigationComponentDidDisappear",source:"@site/docs/use-navigation-component-did-disappear.mdx",permalink:"/react-native-navigation-hooks/docs/use-navigation-component-did-disappear",editUrl:"https://github.com/underscopeio/react-native-navigation-hooks/edit/master/website/docs/use-navigation-component-did-disappear.mdx",sidebar_label:"useNavigationComponentDidDisappear",sidebar:"docs",previous:{title:"useNavigationComponentDidAppear",permalink:"/react-native-navigation-hooks/docs/use-navigation-component-did-appear"},next:{title:"useNavigationCommand",permalink:"/react-native-navigation-hooks/docs/use-navigation-command"}},c=[{value:"<code>useNavigationComponentDidDisappear</code>",id:"usenavigationcomponentdiddisappear",children:[{value:"Examples",id:"examples",children:[]},{value:"Reference",id:"reference",children:[]}]}],s={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usenavigationcomponentdiddisappear"},Object(o.b)("inlineCode",{parentName:"h2"},"useNavigationComponentDidDisappear")),Object(o.b)("p",null,"Called each time the component disappears on screen (attached to the view hierarchy) ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#componentdiddisappear"}),"more info")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"using-navigation-context"},"Using Navigation Context"),Object(o.b)("samp",{id:"use-navigation-component-did-disappear-using-navigation-context"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationComponentDidDisappear } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = () => {\n  // Listen events only for this screen if screen was wrapped with NavigationProvider\n  useNavigationComponentDidDisappear((e) => {\n    console.warn(`${e.componentName} disappeared!`)\n  })\n\n  return <Text>Example Screen</Text>\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Provide a Navigation Context")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your screen wasn't wrapped with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," nor using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"hocs#withnavigationproviders"}),"withNavigationProvider")," HOC it will ",Object(o.b)("inlineCode",{parentName:"p"},"console.warn")," you about it!"))),Object(o.b)("h4",{id:"manually"},"Manually"),Object(o.b)("samp",{id:"use-navigation-component-did-disappear-without-navigation-context"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationComponentDidDisappear } from 'react-native-navigation-hooks'\n\nconst ExampleScreen = ({ componentId }) => {\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationComponentDidDisappear(\n    (e) => {\n      console.warn(`${e.componentName} appeared`)\n    },\n    { componentId }\n  )\n\n  return <Text>Example Screen</Text>\n}\n")),Object(o.b)("h3",{id:"reference"},"Reference"),Object(o.b)("h4",{id:"methods"},"Methods"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useNavigationComponentDidDisappear(handler: (event: ComponentDidAppearEvent) => any, options: Options): void")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useNavigationComponentDidDisappear(handler: (event: ComponentDidAppearEvent) => any, componentId?: string): void")),Object(o.b)("h4",{id:"types"},"Types"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Options: { componentId?: string, global?: boolean }")),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"componentId?: string")),Object(o.b)("p",null,"Filters the event from being triggered on every mounted screen but rather the one you've hooked with the event."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"global?: boolean")),Object(o.b)("p",null,"Disables the ",Object(o.b)("inlineCode",{parentName:"p"},"console.warn")," for the cases you don't provide a ",Object(o.b)("inlineCode",{parentName:"p"},"componentId")," through options nor context. In case you want to handle events globally for doing stuff like tracking/logging we encourage you to use the ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.events()")," from ",Object(o.b)("strong",{parentName:"p"},"React Native Navigation")))}d.isMDXComponent=!0},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(t),m=a,u=l["".concat(r,".").concat(m)]||l[m]||b[m]||o;return t?i.a.createElement(u,p(p({ref:n},s),{},{components:t})):i.a.createElement(u,p({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);