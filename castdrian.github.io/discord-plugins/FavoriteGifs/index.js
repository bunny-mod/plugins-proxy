(function(y,G,u,d,a,m,v,f,x,F,_,$){"use strict";const D=u.findByProps("openLazy","hideActionSheet"),{addFavoriteGIF:k,removeFavoriteGIF:L}=u.findByProps("addFavoriteGIF","removeFavoriteGIF");function O(o){const t=new URL(o).pathname;return t.substring(t.lastIndexOf("/")+1)}function p(o,t){const e=Math.max(...Object.values(o).map(function(r){return r.order}));return{format:t.format,src:t.src,url:t.url,width:t.width,height:t.height,order:e+1}}function M(o){const t=[];for(let e of o.embeds)e.type==="gifv"?t.push({src:e.video.url,url:e.url,width:e.thumbnail.width,height:e.thumbnail.height,format:2}):e.type==="image"?t.push({src:e.image.url,url:e.url,width:e.image.width,height:e.image.height,format:1}):e.type==="video"&&t.push({src:e.video.url,url:e.url,width:e.thumbnail.width,height:e.thumbnail.height,format:2,isVideo:!0});for(let e of o.attachments)e.content_type&&e.content_type.includes("image")?t.push({src:e.url,url:e.url,width:e.width,height:e.height,format:1}):e.content_type&&e.content_type.includes("video")&&t.push({src:e.url,url:e.url,width:e.width,height:e.height,format:2,isVideo:!0});return t}const V=function(o,t,e,r){return function(){const c=function(){L(o.url),m.showToast(`Removed ${r} from Favorites`,a.getAssetIDByName("check"))},h=function(){k(p(t.favoriteGifs.gifs,o)),m.showToast(`Added ${r} to Favorites`,a.getAssetIDByName("check"))};D.hideActionSheet(),e?f.storage.confirm?v.showConfirmationAlert({title:"Remove from Favorites",content:`Are you sure you want to remove ${r} from your favorites?`,confirmText:"Remove",cancelText:"Cancel",onConfirm:c}):c():o.isVideo?v.showConfirmationAlert({title:"Add video to Favorites",content:"If a video is the first entry in the GIF picker, on mobile this breaks the picker until a new valid item is added or the video is removed. It will only show on Desktop.",confirmText:"Add to Favorites",cancelText:"Cancel",onConfirm:h}):f.storage.confirm?v.showConfirmationAlert({title:"Add to Favorites",content:`Are you sure you want to add ${r} to your favorites?`,confirmText:"Add to Favorites",cancelText:"Cancel",onConfirm:h}):h()}},{ScrollView:z}=F.General,{FormSection:j,FormSwitchRow:U,FormIcon:H}=F.Forms;function W(){return x.useProxy(f.storage),React.createElement(z,{style:{flex:1}},React.createElement(j,{title:"Settings"},React.createElement(U,{label:"Confirm actions",subLabel:"Show a confirmation alert before performing actions",leading:React.createElement(H,{source:a.getAssetIDByName("alert")}),value:f.storage.confirm??!1,onValueChange:function(o){f.storage.confirm=o}})))}var w;const{FormRow:B}=F.Forms,A=(w=u.findByProps("ActionSheetRow"))===null||w===void 0?void 0:w.ActionSheetRow;function C(o){let{label:t,icon:e,onPress:r}=o;const c=d.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:$.semanticColors.INTERACTIVE_NORMAL}});return A?React.createElement(A,{label:t,icon:React.createElement(A.Icon,{source:e,IconComponent:function(){return React.createElement(d.ReactNative.Image,{resizeMode:"cover",style:c.iconComponent,source:e})}}),onPress:function(){return r?.()}}):React.createElement(B,{label:t,leading:React.createElement(B.Icon,{source:e}),onPress:function(){return r?.()}})}const S=u.findByProps("openLazy","hideActionSheet"),q=u.findByStoreName("UserSettingsProtoStore"),{addFavoriteGIF:P,removeFavoriteGIF:T}=u.findByProps("addFavoriteGIF","removeFavoriteGIF"),J=G.before("openLazy",S,function(o){let[t,e,r]=o;const c=r?.message;e!=="MessageLongPressActionSheet"||!c||t.then(function(h){const Q=G.after("default",h,function(Z,E){d.React.useEffect(function(){return function(){Q()}},[]);const I=_.findInReactTree(E,function(i){var n,l;return(i==null||(l=i[0])===null||l===void 0||(n=l.type)===null||n===void 0?void 0:n.name)==="ButtonRow"});if(!I)return E;const N=M(c);if(N.length)for(let i of N){var R,b;const n=q.frecencyWithoutFetchingLatest;if(!n.favoriteGifs)return;const l=Math.max(...Object.values(n.favoriteGifs.gifs).map(function(Y){return Y.order})),g=n.favoriteGifs.gifs[i.src]!==void 0||n.favoriteGifs.gifs[i.url]!==void 0,X=((R=n.favoriteGifs.gifs[i.src])===null||R===void 0?void 0:R.order)===l||((b=n.favoriteGifs.gifs[i.url])===null||b===void 0?void 0:b.order)===l,s=O(i.url);I.splice(0,0,d.React.createElement(C,{label:g?`Remove ${s} from Favorites`:`Add ${s} to Favorites`,icon:g?a.getAssetIDByName("ic_clear"):a.getAssetIDByName("ic_star_filled"),onPress:V(i,n,g,s)})),g&&!X&&I.splice(0,0,d.React.createElement(C,{label:`Bump ${s} to the top of Favorites`,icon:a.getAssetIDByName("ic_activity_24px"),onPress:function(){S.hideActionSheet(),f.storage.confirm?v.showConfirmationAlert({title:"Bump Favorite",content:`Are you sure you want to bump ${s} to the top of your favorites?`,confirmText:"Bump",onConfirm:function(){T(i.url),P(p(n.favoriteGifs.gifs,i)),m.showToast(`Bumped ${s} to the top of Favorites`,a.getAssetIDByName("check"))}}):(T(i.url),P(p(n.favoriteGifs.gifs,i)),m.showToast(`Bumped ${s} to the top of Favorites`,a.getAssetIDByName("check")))}}))}})})});var K={onUnload:function(){return J()},settings:W};return y.default=K,Object.defineProperty(y,"__esModule",{value:!0}),y})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.plugin,vendetta.storage,vendetta.ui.components,vendetta.utils,vendetta.ui);
