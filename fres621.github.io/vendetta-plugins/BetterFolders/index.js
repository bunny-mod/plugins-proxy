(function(p,a,i,e,u,y,R,N,S){"use strict";const{View:I,Image:D}=R.General,{getGuildFolders:B}=i.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:L}=i.findByStoreName("ExpandedGuildFolderStore");function C(){B().filter(function(t){return t.folderId&&!L(t.folderId)}).forEach(function(t){let{folderId:n}=t;e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:n}),e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:n})})}function P(){let t=y.after("GuildContainer",i.findByPropsAll("GuildContainer").at(-1),function(n,s){let[r]=n,l=r?.children?.type;if(!l?.type){if(r.expanded)return;let d=r?.children?.props;if(!d?.children?.[1])return;let c=d?.children?.[0]?.props?.style?.[1]?.backgroundColor;if(!c)return;d.children[1]=e.React.createElement(I,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(D,{source:u.getAssetIDByName("img_guild_folder"),style:{tintColor:c}}));return}let o=y.after("type",l,function(d,c){let[h]=d;o(),!r.expanded&&(c.props.children[1]=e.React.createElement(I,{style:{overflow:"hidden",borderRadius:16,justifyContent:"center",alignItems:"center",height:48,width:48}},e.React.createElement(D,{source:u.getAssetIDByName("img_guild_folder"),style:h.folderColor?{tintColor:`#${h.folderColor.toString(16)}`}:{}})))})});return C(),function(){C(),t()}}const{getGuildFolders:A}=i.findByStoreName("UserSettingsProtoStore"),{isFolderExpanded:_}=i.findByStoreName("ExpandedGuildFolderStore");function x(){let t=function(n){let{folderId:s}=n;_(s)&&A().filter(function(r){return r.folderId&&_(r.folderId)}).forEach(function(r){let{folderId:l}=r;l!==s&&e.FluxDispatcher.dispatch({type:"TOGGLE_GUILD_FOLDER_EXPAND",folderId:l})})};return e.FluxDispatcher.subscribe("TOGGLE_GUILD_FOLDER_EXPAND",t),function(){return e.FluxDispatcher.unsubscribe("TOGGLE_GUILD_FOLDER_EXPAND",t)}}const{useState:O}=e.React,{Pressable:w,Animated:f}=e.ReactNative;function F(t){let{onPress:n,children:s,color:r,pressedColor:l}=t;const[o]=O(new f.Value(0)),d=o.interpolate({inputRange:[0,1],outputRange:[r,l]}),c=function(){f.timing(o,{toValue:1,duration:200,useNativeDriver:!1}).start()},h=function(){f.timing(o,{toValue:0,duration:200,useNativeDriver:!1}).start()};return e.React.createElement(w,{onPress:n,onPressIn:c,onPressOut:h},e.React.createElement(f.View,{style:{backgroundColor:d}},s))}const{FormSwitch:G,FormRow:v,FormIcon:b}=R.Forms,{ScrollView:U}=e.ReactNative,T=i.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:V}}=i.findByProps("colors","meta"),g={bgBrighter:V(T.theme,S.semanticColors.BACKGROUND_ACCENT)};function $(){N.useProxy(a.storage);const[t,n]=e.React.useState(a.storage.autoCollapse),[s,r]=e.React.useState(a.storage.hideIcons);function l(){a.storage.autoCollapse=!a.storage.autoCollapse,n(a.storage.autoCollapse)}function o(){a.storage.hideIcons=!a.storage.hideIcons,r(a.storage.hideIcons)}return e.React.createElement(U,{style:{flex:1,marginTop:10}},e.React.createElement(F,{onPress:l,color:g.bgBrighter+"00",pressedColor:g.bgBrighter+"FF"},e.React.createElement(v,{label:"Auto collapse",subLabel:"Automatically collapse folders as you expand different ones.",leading:e.React.createElement(b,{source:u.getAssetIDByName("ic_minus_circle_24px")}),trailing:e.React.createElement(G,{value:t,onValueChange:l})})),e.React.createElement(F,{onPress:o,color:g.bgBrighter+"00",pressedColor:g.bgBrighter+"FF"},e.React.createElement(v,{label:"Hide icons",subLabel:"Don't display server icons for collapsed folders.",leading:e.React.createElement(b,{source:u.getAssetIDByName("ic_hide")}),trailing:e.React.createElement(G,{value:s,onValueChange:o})})))}let E=[];var X={onLoad:function(){a.storage.hideIcons??=!1,a.storage.autoCollapse??=!1,E.push(P()),E.push(x())},onUnload:function(){for(const t of E)t()},settings:$};return p.default=X,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.patcher,vendetta.ui.components,vendetta.storage,vendetta.ui);