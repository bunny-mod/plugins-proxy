(function(h,i,c,a,u,R,l,m){"use strict";function y(e,n,o){return`https://discord.com/channels/${e??"@me"}/${n}/${o}`}function S(e){return y(e.guild_id,e.id,e.id)}const{hideActionSheet:_}=i.findByProps("openLazy","hideActionSheet"),d=i.findByProps("ActionSheetRow")?.ActionSheetRow,A=i.findByName("ForumPostLongPressActionSheet",!1),L=u.getAssetIDByName("ic_copy_message_link"),P=u.getAssetIDByName("toast_copy_link"),{FormIcon:D,FormRow:U}=R.Forms;var C=d?function(){return a.after("default",A,function(e,n){let[{thread:o}]=e;const t=m.findInReactTree(n,function(s){return s?.[0]?.type?.name==="ActionSheetRowGroup"});if(!t)return;const r=S(o);t.unshift(React.createElement(d.Group,{key:"jumptovd"},React.createElement(d,{label:"Jump To Starter Message",icon:React.createElement(d.Icon,{source:L}),onPress:function(){c.url.openDeeplink(r)},onLongPress:function(){c.clipboard.setString(r),l.showToast("Copied starter message URL",P),_()}})))})}():function(){return a.after("default",A,function(e,n){let[{thread:o}]=e;const t=m.findInReactTree(n,function(v){return v?.props?.bottom})?.props?.children?.props?.children?.[1];if(!t)return;const r=S(o),s=t[0].type;t.unshift(React.createElement(s,{key:"jumptovd"},React.createElement(U,{label:"Jump To Starter Message",leading:React.createElement(D,{source:L,style:{opacity:1}}),onPress:function(){c.url.openDeeplink(r)},onLongPress:function(){c.clipboard.setString(r),l.showToast("Copied starter message URL",P),_()}})))})}();const{TouchableOpacity:N}=R.General,E=i.findByProps("openLazy","hideActionSheet"),I=u.getAssetIDByName("ic_copy_message_link"),F=u.getAssetIDByName("toast_copy_link");var M=a.before("openLazy",E,function(e){let[n,o,t]=e;o=="MessageLongPressActionSheet"&&n.then(function(r){const s=a.after("default",r,function(v,J){React.useEffect(function(){return function(){s()}},[]);let T,b;const k=m.findInReactTree(J,function(B){const g=B?.find?.(function(p){return p.props?.iconSource===I})??B?.find?.(function(p){return p.type?.name==="ButtonRow"&&p.props?.IconComponent});return g?(T=g.type,b=g.props.IconComponent,!0):!1}),f=t?.message?.messageReference;if(!f?.message_id||!k)return;const w=y(f.guild_id,f.channel_id,f.message_id);k.push(React.createElement(N,{onLongPress:function(){c.clipboard.setString(w),l.showToast("Copied referenced message URL",F),E.hideActionSheet()},onPress:function(){c.url.openDeeplink(w)}},React.createElement(T,{message:"Jump To Reference",iconSource:I,IconComponent:b})))})})});const z=[C,M],G=function(){return z.forEach(function(e){return e?.()})};return h.onUnload=G,h})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts,vendetta.utils);
