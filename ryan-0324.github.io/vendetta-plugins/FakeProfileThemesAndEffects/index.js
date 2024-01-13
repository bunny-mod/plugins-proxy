(function(k,_,m,u,a,M,x,$e,p,Oe){"use strict";function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ue(e){if(Array.isArray(e))return j(e)}function De(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ze(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ae(e){return Ue(e)||De(e)||He(e)||ze()}function He(e,t){if(e){if(typeof e=="string")return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(r);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}}function G(e,t){var r;return(r=String).fromCodePoint.apply(r,ae(ae("[#".concat(e.toString(16),",#").concat(t.toString(16),"]")).map(function(n){return n.codePointAt(0)+917504})))}function le(e){var t=e.matchAll(RegExp("(?<=#)[\\dA-Fa-f]{1,6}","g"));return[parseInt(t.next().value?.[0],16)||-1,parseInt(t.next().value?.[0],16)||-1]}function V(e){if(e===0)return"\u{E0000}";for(var t="";e>0;e=Math.trunc(e/4096))t=String.fromCodePoint(e%4096+917504)+t;return t}function A(e){if(e==="")return-1;for(var t=0,r=0;r<e.length;r++){if(t>16777215)return-2;t+=e.codePointAt(r)*4096**(e.length-1-r)}return t}function N(e){if(e===0n)return"\u{E0000}";for(var t="";e>0n;e/=4096n)t=String.fromCodePoint(Number(e%4096n)+917504)+t;return t}function L(e){if(e==="")return-1n;for(var t=0n,r=0;r<e.length;r++){if(t>1200000000000000000n)return-2n;t+=BigInt(e.codePointAt(r))*4096n**BigInt(e.length-1-r)}return t}function ke(e,t,r,n){var o="\u200B",i="";if(n){if(e!==-1)return t!==-1?i=G(e,t):i=G(e,e),r!==""&&(i+=o+N(BigInt(r))),i;if(t!==-1)return i=G(t,t),r!==""&&(i+=o+N(BigInt(r))),i}else if(e!==-1){if(i=V(e),t!==-1&&e!==t)return i+=o+V(t),r!==""&&(i+=o+N(BigInt(r))),i}else t!==-1&&(i=V(t));return r!==""&&(i+=o+o+N(BigInt(r))),i}function W(e){var t=["","",""],r=0,n=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),f;!(n=(f=l.next()).done);n=!0){var s=f.value,c=s.codePointAt(0);if(c===8203){if(r>=2)break;r++}else if(c>=917504&&c<=921599)t[r]+=String.fromCodePoint(c-917504);else if(r>0||t[0]!=="")break}}catch(h){o=!0,i=h}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw i}}return t}var Me=u.findByStoreName("UserProfileStore");function X(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function je(e){if(Array.isArray(e))return X(e)}function Ge(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ve(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ce(e){return je(e)||Ge(e)||We(e)||Ve()}function We(e,t){if(e){if(typeof e=="string")return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(r);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}}function $(e,t,r){t>-1?(e.themeColors=[t,r>-1?r:t],e.premiumType=2):r>-1&&(e.themeColors=[r,r],e.premiumType=2)}function O(e,t){t>-1n&&(e.profileEffectId=e.profileEffectID=t.toString(),e.premiumType=2)}function Xe(){return _.after("getUserProfile",Me,function(e,t){if(t===void 0)return t;if(m.storage.prioritizeNitro){if(t.themeColors!==void 0){if(t.profileEffectId===void 0&&t.profileEffectID===void 0){var r=W(t.bio);A(r[0])===-2?O(t,L(r[1])):O(t,L(r[2]))}return t}else if(t.profileEffectId!==void 0||t.profileEffectID!==void 0){var n=W(t.bio),o=A(n[0]);return o===-2?$.apply(void 0,[t].concat(ce(le(n[0])))):$(t,o,A(n[1])),t}}var i=W(t.bio),l=A(i[0]);return l===-2?($.apply(void 0,[t].concat(ce(le(i[0])))),O(t,L(i[1]))):($(t,l,A(i[1])),O(t,L(i[2]))),t})}function ue(e){return typeof e[Symbol.iterator]=="function"}function w(e){return e!==null&&typeof e=="object"}function Ke(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}function fe(e){return w(e)&&"type"in e}function se(e){return"children"in e.props}function Ye(e){return"_context"in e}function qe(e){return"render"in e}function Je(e){return"type"in e}function S(e){return(typeof e>"u"?"undefined":Ke(e))==="symbol"?Symbol.keyFor(e)||null:typeof e=="function"?e.displayName||e.name||null:Ye(e)?e._context.displayName||null:e.displayName?e.displayName:qe(e)?e.render.displayName||e.render.name||null:Je(e)?S(e.type):null}function U(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200;if(w(e))if(ue(e)){if(r>0){var n=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),f;!(n=(f=l.next()).done);n=!0){var s=f.value,c=U(s,t,r-1);if(c)return c}}catch(h){o=!0,i=h}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw i}}}}else{if(t(e))return e;if(se(e))return U(e.props.children,t,r-1)}return null}function I(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200;if(w(e)){if(ue(e)){if(r>0){var n=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),f;!(n=(f=l.next()).done);n=!0){var s=f.value,c=I(s,t,r-1);if(c)return c}}catch(h){o=!0,i=h}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw i}}}}else if(se(e))return t(e.props.children)?e:I(e.props.children,t,r-1)}return null}var K=u.findByStoreName("UserStore"),D=Symbol(),d={primaryColor:-1,accentColor:-1,showPreview:!0},Qe=u.findByName("useProfileThemeColors",!1);function Ze(){return _.after("default",Qe,function(e,t){if(e?.[0]?.id===K.getCurrentUser().id&&(w(e[2])&&"pendingThemeColors"in e[2]||w(e[0])&&D in e[0])&&d.showPreview){if(d.primaryColor>-1)return[d.primaryColor,d.accentColor>-1?d.accentColor:d.primaryColor];if(d.accentColor>-1)return[d.accentColor,d.accentColor]}return t})}var de=u.findByName("showCustomColorPickerActionSheet")??function(){},et="/user-profile-effects",tt=x.getAssetIDByName("sample-profile-small")??{uri:"https://discordapp.com/assets/f328a6f8209d4f1f5022.png"},rt=u.findByProps("DEFAULT_PROFILE_EFFECT_WH_RATIO")?.DEFAULT_PROFILE_EFFECT_WH_RATIO??45/88,ye=u.findByName("ProfileEffectRecord"),nt=u.findByProps("getAPIBaseURL"),pe=u.findByProps("triggerHapticFeedback"),it=pe?.HapticFeedbackTypes??{},ot=pe?.triggerHapticFeedback??function(){},T=$e.semanticColors,B=u.find(function(e){return e.default?.internal?.resolveSemanticColor})?.default.internal.resolveSemanticColor??u.find(function(e){return e.meta?.resolveSemanticColor})?.meta.resolveSemanticColor??function(){},at=u.findByProps("useAvatarColors")?.useAvatarColors??function(){},Y=u.findByProps("useThemeContext")?.useThemeContext??function(){return{}},lt=u.findByProps("ThemeContextProvider")?.ThemeContextProvider??function(e){var t=e.children;return t},q=u.findByProps("Radius")?.Radius??{},g=u.findByProps("Spacing")?.Spacing??{},ct=u.findByProps("SafeAreaContext")?.SafeAreaContext,ut=u.findByName("useWindowDimensions")??function(){};function J(e){var t=e.label,r=e.fgColor,n=e.bgColor,o=e.onPress,i=e.children;return React.createElement(E,{style:{width:50}},React.createElement(ge,{accessibilityLabel:t,accessibilityRole:"button",onPress:o,style:[{display:"flex",alignItems:"center",justifyContent:"center",height:50,overflow:"hidden",borderColor:r,borderStyle:"dashed",borderWidth:2,borderRadius:q.xs},n!=null&&{backgroundColor:"#"+n.toString(16).padStart(6,"0"),borderStyle:"solid"},!!i&&{borderWidth:0}]},i||n==null&&React.createElement(ht,{fill:r,width:"40%",height:"40%",viewBox:"0 0 144 144"},React.createElement(vt,{d:"M144 64H80V0H64v64H0v16h64v64h16V80h64Z"}))),!!t&&React.createElement(z,{variant:"text-sm/normal",style:{marginTop:g.PX_4,textAlign:"center"}},t))}var ft=p.Forms.FormSection,st=p.Forms.FormRow,he=p.Forms.FormRadioRow,Q=p.Forms.FormSwitchRow,dt=p.Forms.FormCardSection,ve=u.findByProps("IconSizes")?.default??function(){return null};function me(e){var t=e.effect,r=e.style;return React.createElement(E,{style:r},React.createElement(Ee,{resizeMode:"cover",source:tt,style:{width:"100%",height:"100%"}}),React.createElement(Ee,{alt:t.accessibilityLabel,resizeMethod:"resize",resizeMode:"cover",source:{uri:t.thumbnailPreviewSrc},style:{position:"absolute",width:"100%",aspectRatio:rt}}))}var z=u.findByProps("TextStyleSheet")?.Text??function(){return null},Ee=p.General.Image,yt=p.General.ScrollView,E=p.General.View,pt=u.findByName("FlashList")??function(){return null},be=u.findByProps("Svg"),ht=be?.Svg??function(){return null},vt=be?.Path??function(){return null},ge=u.findByProps("PressableOpacity")?.PressableOpacity??function(){return null};function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function mt(e){if(Array.isArray(e))return e}function Et(e){if(Array.isArray(e))return Z(e)}function bt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,l,f;try{for(r=r.call(e);!(o=(l=r.next()).done)&&(n.push(l.value),!(t&&n.length===t));o=!0);}catch(s){i=!0,f=s}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw f}}return n}}function St(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ct(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ee(e,t){return mt(e)||gt(e,t)||Se(e,t)||St()}function Pt(e){return Et(e)||bt(e)||Se(e)||Ct()}function Se(e,t){if(e){if(typeof e=="string")return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(r);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}}var Rt=a.React.useContext,Ce=a.React.useMemo,Pe=a.React.useState,At=x.getAssetIDByName("img_none"),Re=3;function Ae(e){var t=e.label,r=e.isSelected,n=e.size,o=e.colors,i=e.onPress,l=e.style,f=e.children,s=ee(o,3),c=s[0],h=s[1],P=s[2];return a.React.createElement(ge,{accessibilityLabel:t,accessibilityRole:"button",accessibilityState:{selected:r},disabled:r,onPress:function(){ot(it.IMPACT_LIGHT),i()},style:[{height:n,width:n,overflow:"hidden",backgroundColor:h,borderColor:c,borderRadius:q.sm,borderWidth:2},r&&{borderColor:P},l]},f)}function te(e){var t=ee(Pe(e.currentEffectId),2),r=t[0],n=t[1],o=ee(Pe(0),2),i=o[0],l=o[1],f=Y().theme,s=Ce(function(){return[B(f,T.BACKGROUND_PRIMARY),B(f,T.BACKGROUND_FLOATING),B(f,T.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE)]},[f]),c=ut(),h=Rt(ct),P=Ce(function(){for(var y=a.lodash.chunk([null].concat(Pt(e.effects)),Re),R=y[y.length-1];R.length<3;)R.push(void 0);return y},[e.effects]);return a.React.createElement(Nt,{transparentHeader:!0,scrollable:!0,startExpanded:!0,contentHeight:c.height-h.top},a.React.createElement(Lt,null,a.React.createElement(E,{style:{flex:1,flexDirection:"column",alignItems:"center",paddingBottom:88}},a.React.createElement(z,{variant:"redesign/heading-18/bold",color:"header-primary",style:{margin:g.PX_16}},e.currentEffectId?"Change Effect":"Add Profile Effect"),a.React.createElement(E,{style:{width:"72%",minHeight:38}},a.React.createElement(z,{variant:"heading-md/bold",color:"header-primary",style:{textAlign:"center"}},e.effects.find(function(y){return y.id===r})?.title??"None")),a.React.createElement(E,{style:{flex:1,width:"92%",marginTop:3}},a.React.createElement(pt,{accessibilityLabel:"Profile Effect Selection Section",numColumns:1,estimatedItemSize:98,ItemSeparatorComponent:function(){return a.React.createElement(E,{style:{height:g.PX_16}})},contentContainerStyle:{paddingHorizontal:g.PX_4},data:P,extraData:r,renderItem:function(y){var R=y.item;return a.React.createElement(E,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:g.PX_16}},R.map(function(b){return b?a.React.createElement(Ae,{label:b.accessibilityLabel,isSelected:b.id===r,size:i,colors:s,onPress:function(){return n(b.id)}},a.React.createElement(me,{effect:b})):b===null?a.React.createElement(Ae,{label:"None",isSelected:!r,size:i,colors:s,onPress:function(){return n(void 0)},style:{alignItems:"center",justifyContent:"center"}},a.React.createElement(ve,{source:At,size:ve.Sizes.LARGE}),a.React.createElement(z,{variant:"text-sm/medium",color:"header-primary",style:{marginTop:g.PX_4}},"None")):a.React.createElement(E,{style:{width:i,height:i}})}))},onLayout:function(y){return l((y.nativeEvent.layout.width-64)/Re)}})))),a.React.createElement(p.Button,{text:"Apply",textStyle:{fontSize:16},onPress:function(){return e.onSelect(e.effects.find(function(y){return y.id===r})??null)},style:{position:"absolute",right:0,bottom:0,left:0,height:48,marginHorizontal:36,marginBottom:g.PX_48,borderRadius:q.round}}))}var wt=a.React.useMemo,we=u.findByName("EditProfileEffectActionSheet"),re;function It(e){var t=we({user:e.user}),r=Y(),n=wt(function(){return e.effects.map(function(c){return{items:new ye({id:c.id})}})},[e.effects]),o=!1,i=U(t,function(c){return S(c.type)==="EditProfileEffectInner"?!0:"profileEffects"in c.props&&"selectedProfileEffect"in c.props&&typeof c.props.setSelectedProfileEffect=="function"?o=!0:!1});if(!i)return re||te(e);var l=U(t,function(c){return S(c.type)==="Button"});if(!l)return re||te(e);if(o){i.props.selectedProfileEffect===void 0&&i.props.setSelectedProfileEffect(e.currentEffectId?{id:e.currentEffectId}:null),i.props.profileEffects=e.effects;var f=I(t,function(c){return Array.isArray(c)&&c.some(function(h){return S(h.type)==="DisplayBanner"})});if(f){var s=t;f.props.children=a.React.createElement(lt,{theme:s.props.theme,primaryColor:s.props.primaryColor,secondaryColor:s.props.secondaryColor,children:f.props.children}),s.props.theme=r.theme,s.props.primaryColor=r.primaryColor,s.props.secondaryColor=r.secondaryColor}}else i.props.selectedProfileEffect===void 0&&i.props.setSelectedProfileEffect(e.currentEffectId?new ye({id:e.currentEffectId}):null),i.props.purchases=n;return e.user[D]=void 0,l.props.onPress=function(){delete e.user[D],e.onSelect(e.effects.find(function(c){return c.id===i.props.selectedProfileEffect?.id})??null)},re=t}var Tt=we?It:te,Bt=x.getAssetIDByName("toast_copy_link"),Ft=x.getAssetIDByName("Small");function _t(e,t){a.clipboard.setString(e),M.showToast(t,Bt)}function Ie(e){M.showToast(e,Ft)}var ne="__FPTE__";function xt(e,t){nt.get({url:et}).then(function(r){var n=r.body.profile_effect_configs;if(!n)return Ie("Unable to fetch the list of profile effects from Discord's API.");var o=K.getCurrentUser(),i=function(l){l.key===ne&&(a.FluxDispatcher.unsubscribe("HIDE_ACTION_SHEET",i),delete o[D])};a.FluxDispatcher.subscribe("HIDE_ACTION_SHEET",i),$t({content:React.createElement(Tt,{effects:n,onSelect:function(l){e(l),Ot(ne)},user:o,currentEffectId:t}),key:ne})}).catch(function(r){console.error(r),console.log(r.stack),Ie("Unable to setup the effect picker.")})}var Nt=u.findByProps("ActionSheet")?.ActionSheet??function(){throw new Error("FakeProfileThemesAndEffects threw an error to avoid an otherwise-inevitable, unrecoverable freeze.")},Lt=u.findByProps("BottomSheetScrollView")?.BottomSheetScrollView??function(){return null},Te=u.findByProps("showActionSheet"),$t=Te?.showActionSheet??function(){},Ot=Te?.default?.hideActionSheet??function(){};function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ut(e){if(Array.isArray(e))return e}function Dt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,l,f;try{for(r=r.call(e);!(o=(l=r.next()).done)&&(n.push(l.value),!(t&&n.length===t));o=!0);}catch(s){i=!0,f=s}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw f}}return n}}function zt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,t){return Ut(e)||Dt(e,t)||Ht(e,t)||zt()}function Ht(e,t){if(e){if(typeof e=="string")return Be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(r);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Be(e,t)}}var kt=a.React.useEffect,Mt=a.React.useMemo,F=a.React.useState;function H(){a.FluxDispatcher.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"})}function Fe(e){var t=e.guildId,r=C(F(-1),2),n=r[0],o=r[1],i=C(F(-1),2),l=i[0],f=i[1],s=C(F(null),2),c=s[0],h=s[1],P=C(F(!0),2),y=P[0],R=P[1],b=C(F(!1),2),xe=b[0],Yt=b[1],ie=Y().theme,Ne=C(Mt(function(){return[B(ie,T.HEADER_SECONDARY),B(ie,T.BACKGROUND_ACCENT)]},[ie]),2),oe=Ne[0],qt=Ne[1],Le=at(K.getCurrentUser().getAvatarURL(t,80),qt,!1);return kt(function(){return function(){d.primaryColor=-1,d.accentColor=-1,d.showPreview=!0}},[]),a.React.createElement(dt,{title:"FPTE Builder",cardStyle:{backgroundColor:"transparent"}},a.React.createElement(E,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},a.React.createElement(J,{fgColor:oe,label:"Primary",bgColor:n!==-1?n:void 0,onPress:function(){de({color:n!==-1?n:0,onSelect:function(v){o(d.primaryColor=v),y&&H()},suggestedColors:Le})}}),a.React.createElement(J,{fgColor:oe,label:"Accent",bgColor:l!==-1?l:void 0,onPress:function(){de({color:l!==-1?l:0,onSelect:function(v){f(d.accentColor=v),y&&H()},suggestedColors:Le})}}),a.React.createElement(J,{fgColor:oe,label:"Effect",onPress:function(){return xt(function(v){return h(v)},c?.id)}},c&&a.React.createElement(me,{effect:c,style:{width:"100%",height:"100%"}})),a.React.createElement(E,{style:{display:"flex",alignItems:"center",flexDirection:"column"}},a.React.createElement(p.Button,{text:"Copy FPTE",size:p.Button.Sizes.SMALL,onPress:function(){var v=ke(n,l,c?.id??"",xe);v?_t(v,"FPTE copied to clipboard!"):M.showToast("FPTE Builder is empty; nothing to copy!")}}),a.React.createElement(p.Button,{text:"Reset",look:p.Button.Looks.LINK,color:p.Button.Colors.TRANSPARENT,size:p.Button.Sizes.SMALL,...n===-1&&l===-1&&!c&&{pointerEvents:"none",style:{opacity:0}},onPress:function(){o(d.primaryColor=-1),f(d.accentColor=-1),h(null),y&&H()}}))),a.React.createElement(Q,{label:"FPTE Builder Preview",value:y,onValueChange:function(v){R(d.showPreview=v),H()}}),a.React.createElement(Q,{label:"Build backwards compatible FPTE",subLabel:"Will use more characters",value:xe,onValueChange:function(v){return Yt(v)}}))}var jt=u.findByName("GuildProfileEditForm",!1);function Gt(){return _.after("default",jt,function(e,t){if(m.storage.hideBuilder)return t;var r,n=I(t,function(o){return Array.isArray(o)&&o.some(function(i){return fe(i)&&S(i.type)==="EditGuildIdentityBio"?(r=i.props.displayProfile?.guildId,!0):!1})});return n&&n.props.children.splice(2,0,React.createElement(Fe,{guildId:r})),t})}var Vt=u.findByName("UserProfileEditForm",!1);function Wt(){return _.after("default",Vt,function(e,t){if(m.storage.hideBuilder)return t;var r=I(t,function(n){return Array.isArray(n)&&n.some(function(o){return fe(o)&&S(o.type)==="EditUserProfileBio"})});return r&&r.props.children.splice(2,0,React.createElement(Fe,null)),t})}function Xt(){return Oe.useProxy(m.storage),React.createElement(yt,null,React.createElement(ft,{title:"Settings"},React.createElement(st,{label:"Source to prioritize"}),React.createElement(he,{label:"Nitro",selected:!!m.storage.prioritizeNitro,onPress:function(){m.storage.prioritizeNitro=!0}}),React.createElement(he,{label:"About Me",selected:!m.storage.prioritizeNitro,onPress:function(){m.storage.prioritizeNitro=!1}}),React.createElement(Q,{label:"Hide Builder",subLabel:"Hide the FPTE Builder in the User Profile and Server Profiles settings pages",value:!!m.storage.hideBuilder,onValueChange:function(e){m.storage.hideBuilder=e}})))}var _e=[],Kt={onLoad:function(){_e.push(Xe(),Ze(),Wt(),Gt())},onUnload:function(){return _e.forEach(function(e){e()})},settings:Xt};return k.default=Kt,Object.defineProperty(k,"__esModule",{value:!0}),k})({},vendetta.patcher,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui.toasts,vendetta.ui.assets,vendetta.ui,vendetta.ui.components,vendetta.storage);