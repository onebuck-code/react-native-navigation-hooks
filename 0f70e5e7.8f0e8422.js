(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return i})),o.d(n,"metadata",(function(){return s})),o.d(n,"rightToc",(function(){return r})),o.d(n,"default",(function(){return p}));var t=o(2),a=(o(0),o(72));const i={id:"hooks",title:"Hooks",sidebar_label:"Hooks"},s={unversionedId:"hooks",id:"hooks",isDocsHomePage:!1,title:"Hooks",description:"useNavigation",source:"@site/docs/docs-hooks.mdx",permalink:"/react-native-navigation-hooks/docs/hooks",editUrl:"https://github.com/underscopeio/react-native-navigation-hooks/edit/master/website/docs/docs-hooks.mdx",sidebar_label:"Hooks",sidebar:"docs",previous:{title:"Migration Guide",permalink:"/react-native-navigation-hooks/docs/migration-guide"},next:{title:"Helpers",permalink:"/react-native-navigation-hooks/docs/helpers"}},r=[{value:"<code>useNavigation</code>",id:"usenavigation",children:[]},{value:"<code>useNavigationComponentDidAppear</code>",id:"usenavigationcomponentdidappear",children:[]},{value:"<code>useNavigationComponentDidDisappear</code>",id:"usenavigationcomponentdiddisappear",children:[]},{value:"<code>useNavigationCommand</code>",id:"usenavigationcommand",children:[]},{value:"<code>useNavigationCommandComplete</code>",id:"usenavigationcommandcomplete",children:[]},{value:"<code>useNavigationModalAttemptedToDismiss</code>",id:"usenavigationmodalattemptedtodismiss",children:[]},{value:"<code>useNavigationModalDismiss</code>",id:"usenavigationmodaldismiss",children:[]},{value:"<code>useNavigationScreenPop</code>",id:"usenavigationscreenpop",children:[]},{value:"<code>useNavigationBottomTabSelect</code>",id:"usenavigationbottomtabselect",children:[]},{value:"<code>useNavigationBottomTabPress</code>",id:"usenavigationbottomtabpress",children:[]},{value:"<code>useNavigationBottomTabLongPress</code>",id:"usenavigationbottomtablongpress",children:[]},{value:"<code>useNavigationButtonPress</code>",id:"usenavigationbuttonpress",children:[]},{value:"<code>useNavigationSearchBarUpdate (iOS 11+ only)</code>",id:"usenavigationsearchbarupdate-ios-11-only",children:[]},{value:"<code>useNavigationSearchBarCancelPress (iOS 11+ only)</code>",id:"usenavigationsearchbarcancelpress-ios-11-only",children:[]},{value:"<code>useNavigationPreviewComplete (iOS 11.4+ only)</code>",id:"usenavigationpreviewcomplete-ios-114-only",children:[]}],c={rightToc:r};function p({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"usenavigation"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigation")),Object(a.b)("p",null,"This hook provides you a set of navigation helpers that aims to reduce the boilerplate required to execute common navigation commands specially those that need the ",Object(a.b)("inlineCode",{parentName:"p"},"componentId")," argument."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use Navigation Context")),Object(a.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In order to use this hook your screens must use the ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," to pass the ",Object(a.b)("strong",{parentName:"p"},"componentId")," to the three below so the ",Object(a.b)("strong",{parentName:"p"},"useNavigation")," hook can read it."),Object(a.b)("p",{parentName:"div"},"You can take advantage of the ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"hocs#withnavigationproviders"}),"withNavigationProvider")," or you could also use the ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"contexts#navigationprovider"}),"NavigationProvider")," manually."))),Object(a.b)("p",null,"Then in your component just need to import ",Object(a.b)("strong",{parentName:"p"},"useNavigation")," to obtain the navigation commands helpers contextualized with the ",Object(a.b)("strong",{parentName:"p"},"componentId")," out of the box \ud83d\udcaa"),Object(a.b)("h4",{id:"-\u3164this-is-how-it-looks-like"},"\ud83d\udc85 ","\u3164",Object(a.b)("strong",{parentName:"h4"},"This is how it looks like")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigation } from 'react-native-navigation-hooks'\n\nconst MyScreen = () => {\n  const { showModal } = useNavigation()\n\n  const handleShowModalPress = () => showModal('ModalScreen')\n\n  return <Text onPress={handleShowModalPress}>Show Modal</Text>\n}\n")),Object(a.b)("h4",{id:"-\u3164before-usenavigation-hook"},"\ud83d\udcdc ","\u3164",Object(a.b)("strong",{parentName:"h4"},"Before useNavigation Hook")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { Navigation } from 'react-native-navigation'\n\nconst MyScreen = ({ componentId }) => {\n  const handleShowModalPress = () =>\n    Navigation.showModal({\n      stack: {\n        children: [\n          {\n            component: {\n              name: 'ModalScreen',\n            },\n          },\n        ],\n      },\n    })\n\n  return <Text onPress={handleShowModalPress}>Show Modal</Text>\n}\n")),Object(a.b)("p",null,"You can check the list of the ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"helpers#createnavigationcommands"}),"supported methods")," and the arguments overload."),Object(a.b)("h3",{id:"usenavigationcomponentdidappear"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationComponentDidAppear")),Object(a.b)("p",null,"Called each time this component appears on screen (attached to the view hierarchy) ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#componentdidappear"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationComponentDidAppear((e) => {\n    console.log(`${e.componentName} appeared`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationComponentDidAppear(\n    (e) => {\n      console.log(`${e.componentName} appeared`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationComponentDidAppear(\n    (e) => {\n      console.log(`${e.componentName} appeared`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationcomponentdiddisappear"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationComponentDidDisappear")),Object(a.b)("p",null,"Called each time this component disappears from screen (detached from the view heirarchy) ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#componentdiddisappear"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationComponentDidDisappear } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationComponentDidDisappear((e) => {\n    console.log(`${e.componentName} appeared`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationComponentDidDisappear(\n    (e) => {\n      console.log(`${e.componentName} appeared`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationComponentDidDisappear(\n    (e) => {\n      console.log(`${e.componentName} appeared`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationcommand"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationCommand")),Object(a.b)("p",null,"The commandListener is called whenever a Navigation command (i.e push, pop, showModal etc) is invoked. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registercommandlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationCommand } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationCommand((commandName, { commandId, layout }) => {\n    console.log(`Command ${commandName} (${commandId}) invoked`)\n  })\n\n  // Filtering event by commandName\n  useNavigationCommand((commandName, { commandId, layout }) => {\n    console.log(`Command ${commandName} (${commandId}) invoked`)\n  }, 'commandName')\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationcommandcomplete"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationCommandComplete")),Object(a.b)("p",null,"Invoked when a command finishes executing in native. If the command contains animations, for example pushed screen animation,) the listener is invoked after the animation ends. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registercommandcompletedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationCommandComplete } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationCommandComplete(({ commandId, commandName, completionTime, params }) => {\n    console.log(`Command ${name} (${commandId}) invocation finished`)\n  })\n\n  // Filtering event by commandName\n  useNavigationCommandComplete(({ commandId, commandName, completionTime, params }) => {\n    console.log(`Command ${name} (${commandId}) invocation finished`)\n  }, 'commandName')\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationmodalattemptedtodismiss"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationModalAttemptedToDismiss")),Object(a.b)("p",null,"Invoked only on iOS pageSheet modal when swipeToDismiss flag is set to true and modal swiped down to dismiss. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registermodalattemptedtodismisslistenerios-13-only"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationModalAttemptedToDismiss } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationModalAttemptedToDismiss((e) => {\n    console.log(`Modal attempted dismissed on componentId: ${e.componentId}`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationModalAttemptedToDismiss(\n    (e) => {\n      console.log(`Modal attempted dismissed on componentId: ${e.componentId}`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationModalAttemptedToDismiss(\n    (e) => {\n      console.log(`Modal attempted dismissed on componentId: ${e.componentId}`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationmodaldismiss"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationModalDismiss")),Object(a.b)("p",null,"Invoked when modal dismissed. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registermodaldismissedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationModalDismiss } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationModalDismiss((e) => {\n    console.log(`Modals dismissed: ${e.modalsDismissed} on componentId: ${e.componentId}`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationModalDismiss(\n    (e) => {\n      console.log(`Modals dismissed: ${e.modalsDismissed} on componentId: ${e.componentId}`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationModalDismiss(\n    (e) => {\n      console.log(`Modals dismissed: ${e.modalsDismissed} on componentId: ${e.componentId}`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationscreenpop"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationScreenPop")),Object(a.b)("p",null,"Invoked when screen is popped. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registerscreenpoppedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationScreenPop } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationScreenPop((e) => {\n    console.log(`Screen was popped on componentId: ${e.componentId}`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationScreenPop(\n    (e) => {\n      console.log(`Screen was popped on componentId: ${e.componentId}`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationScreenPop(\n    (e) => {\n      console.log(`Screen was popped on componentId: ${e.componentId}`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationbottomtabselect"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationBottomTabSelect")),Object(a.b)("p",null,"Invoked when a BottomTab is selected by the user. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registerbottomtabselectedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationBottomTabSelect((e) => {\n    console.log(`Selected tab id ${e.selectedTabIndex}, unselected tab id ${e.unselectedTabIndex}`)\n  })\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationbottomtabpress"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationBottomTabPress")),Object(a.b)("p",null,"Invoked when a BottomTab is pressed by the user. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registerbottomtabpressedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationBottomTabPress } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationBottomTabPress((e) => {\n    console.log(`Selected tab id ${e.tabIndex}`)\n  })\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationbottomtablongpress"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationBottomTabLongPress")),Object(a.b)("p",null,"Invoked when a BottomTab is long pressed by the user. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#registerbottomtablongpressedlistener"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationBottomTabLongPress } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationBottomTabLongPress((e) => {\n    console.log(`Selected tab id ${e.selectedTabIndex}`)\n  })\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationbuttonpress"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationButtonPress")),Object(a.b)("p",null,"Emitted whenever a TopBar button is pressed by the user. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#navigationbuttonpressed-event"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationButtonPress } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen and all buttons when using withNavigation HOC or <NavigationProvider> (if neither of those are provided it will warn you at least you provide a `{ global: true}` option)\n  useNavigationButtonPress((e) => {\n    console.log(`Pressed ${e.buttonId} on componentId: ${e.componentId}`)\n  })\n\n  // Listen events only for this screen and all buttons by providing componentId as paramenter\n  useNavigationButtonPress(\n    (e) => {\n      console.log(`Pressed ${e.buttonId} on componentId: ${e.componentId}`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationButtonPress(\n    (e) => {\n      console.log(`Pressed ${e.buttonId} on componentId: ${e.componentId}`)\n    },\n    { global: true }\n  )\n\n  // Listen events only for this screen and a specifi buttonc by providing componentId and button as options\n  useNavigationButtonPress(\n    (e) => {\n      console.log('Pressed profile button on this screen!')\n    },\n    { componentId, buttonId: 'profileButton' }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationsearchbarupdate-ios-11-only"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationSearchBarUpdate (iOS 11+ only)")),Object(a.b)("p",null,"Called when a SearchBar from NavigationBar gets updated. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#searchbarupdated-ios-11-only"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationSearchBarUpdate } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationSearchBarUpdate((e) => {\n    console.log(`Seach bar text changed to ${e.text}${e.focussed ? ' (focussed)' : ''} on this screen`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationSearchBarUpdate(\n    (e) => {\n      console.log(`Seach bar text changed to ${e.text}${e.focussed ? ' (focussed)' : ''} on this screen`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationSearchBarUpdate(\n    (e) => {\n      console.log(\n        `Seach bar text changed to ${e.text}${e.focussed ? ' (focussed)' : ''} on componentId: ${e.componentId}`\n      )\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationsearchbarcancelpress-ios-11-only"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationSearchBarCancelPress (iOS 11+ only)")),Object(a.b)("p",null,"Called when the cancel button on the SearchBar from NavigationBar gets pressed. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#searchbarcancelpressed-ios-11-only"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationSearchBarCancelPress } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationSearchBarCancelPress((e) => {\n    console.log('Seach bar cancel button pressed on this screen')\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationSearchBarCancelPress(\n    (e) => {\n      console.log('Seach bar cancel button pressed on this screen')\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationSearchBarCancelPress(\n    (e) => {\n      console.log(`Seach bar cancel button pressed on componentName: ${e.componentName}`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")),Object(a.b)("h3",{id:"usenavigationpreviewcomplete-ios-114-only"},Object(a.b)("inlineCode",{parentName:"h3"},"useNavigationPreviewComplete (iOS 11.4+ only)")),Object(a.b)("p",null,"Called when preview peek is completed. ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://wix.github.io/react-native-navigation/api/events/#previewcompleted-ios-114-only"}),"more info")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useNavigationPreviewComplete } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Listen events only for this screen when using withNavigation HOC or <NavigationProvider>\n  // (if neither of those are provided it will warn you at least you provide a `{ global: true }` option)\n  useNavigationPreviewComplete((e) => {\n    console.log(`Preview component ${e.previewComponentId} shown on this screen`)\n  })\n\n  // Listen events only for this screen by providing componentId as paramenter\n  useNavigationPreviewComplete(\n    (e) => {\n      console.log(`Preview component ${e.previewComponentId} shown on this screen`)\n    },\n    { componentId }\n  )\n\n  // Global event handler. You should probably never use this but just in case.\n  useNavigationPreviewComplete(\n    (e) => {\n      console.log(`Preview component ${e.previewComponentId} shown on ${e.componentId}`)\n    },\n    { global: true }\n  )\n\n  return <Text>Screen Component</Text>\n}\n")))}p.isMDXComponent=!0},72:function(e,n,o){"use strict";o.d(n,"a",(function(){return l})),o.d(n,"b",(function(){return u}));var t=o(0),a=o.n(t);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},l=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(o),b=t,u=l["".concat(s,".").concat(b)]||l[b]||m[b]||i;return o?a.a.createElement(u,r(r({ref:n},p),{},{components:o})):a.a.createElement(u,r({ref:n},p))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,s=new Array(i);s[0]=b;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:t,s[1]=r;for(var p=2;p<i;p++)s[p]=o[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);