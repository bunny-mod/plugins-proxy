(function(i,l,c,a,e,o,u){"use strict";function y(s){const t=JSON.parse(JSON.stringify(s));for(const n in t.author)switch(n){case"id":case"username":case"usernameNormalized":case"discriminator":case"avatar":case"bot":case"system":case"publicFlags":break;default:delete t.author[n]}return t}const{ScrollView:b,Text:_}=e.ReactNative,d=a.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default;function h(s){let{message:t}=s;const n=e.React.useMemo(function(){return JSON.stringify(y(t),null,4)},[t.id]),r={marginBottom:8};return e.React.createElement(e.React.Fragment,null,e.React.createElement(b,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(d,{style:r,text:"Copy Raw Content",color:"brand",size:"small",disabled:!t.content,onPress:function(){e.clipboard.setString(t.content),u.showToast("Copied content to clipboard",c.getAssetIDByName("toast_copy_link"))}}),e.React.createElement(d,{text:"Copy Raw Data",style:r,color:"brand",size:"small",onPress:function(){e.clipboard.setString(n),u.showToast("Copied data to clipboard",c.getAssetIDByName("toast_copy_link"))}}),t.content&&e.React.createElement(o.Codeblock,{selectable:!0,style:r},t.content),e.React.createElement(o.Codeblock,{selectable:!0},n)))}const f=a.findByProps("openLazy","hideActionSheet"),p=a.findByProps("push","pushLazy","pop"),B=a.findByProps("getRenderCloseButton"),{default:w,getRenderCloseButton:E}=B,N=a.findByName("Icon"),{FormRow:P}=o.Forms,C=l.before("openLazy",f,function(s){const[t,n,r]=s;n==="MessageLongPressActionSheet"&&t.then(function(v){const k=l.after("default",v,function(x,z){e.React.useEffect(function(){return function(){k()}},[]);let[A,g]=z.props?.children?.props?.children?.props?.children;const R=A?.props?.message??r?.message;if(!g||!R)return;const L=function(){return e.React.createElement(w,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:E(function(){return p.pop()}),render:function(){return e.React.createElement(h,{message:R})}}}})};g.push(e.React.createElement(P,{label:"View Raw",leading:e.React.createElement(N,{source:c.getAssetIDByName("ic_chat_bubble_16px")}),onPress:function(){f.hideActionSheet(),p.push(L)}}))})})}),S=function(){return C()};return i.onUnload=S,i})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.toasts);
