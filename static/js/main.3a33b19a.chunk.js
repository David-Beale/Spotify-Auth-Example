(this["webpackJsonpspotify-pkce"]=this["webpackJsonpspotify-pkce"]||[]).push([[0],{110:function(e,n,t){},111:function(e,n,t){},130:function(e,n){},172:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(79),a=t.n(c),i=(t(110),t(111),t(188)),s=t(29),u=t(82),l=t.n(u),f=t(11),p=t(6),d=t.n(p),h=t(10),b=t(81),g=t.n(b),x=t(47),j=t.n(x),O=function(e){for(var n=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++){var o=t.charAt(Math.floor(Math.random()*t.length));n.push(o)}return n.join("")};function m(e){var n=(new TextEncoder).encode(e);return window.crypto.subtle.digest("SHA-256",n)}function v(e){return btoa(String.fromCharCode.apply(null,new Uint8Array(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n);case 2:return t=e.sent,e.abrupt("return",v(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w,S,T=function(e){for(var n=[],t=Object.keys(e),r=0;r<t.length;r++){var o=t[r],c=e[o];r>0&&n.push("&"),n.push(o,"=",c)}return n.join("")},P=function(e,n,t,r,o){var c=t.top.outerHeight/2+t.top.screenY-o/2,a=t.top.outerWidth/2+t.top.screenX-r/2;return t.open(e,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(r,", height=").concat(o,", top=").concat(c,", left=").concat(a))},R=new g.a,C=null;R.refreshAccessToken=function(){var e=R.getRefreshToken(),n=new URLSearchParams;return n.append("client_id","bd04787f2eb041528818a634a0e71cea"),n.append("grant_type","refresh_token"),n.append("refresh_token",e),j.a.post("https://accounts.spotify.com/api/token",n,{headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).then((function(e){var n=e.data,t=n.access_token,r=n.expires_in,o=n.refresh_token;localStorage.setItem("sp-accessToken",t),localStorage.setItem("sp-refreshToken",o);var c=1e3*(r-60);return localStorage.setItem("sp-expiry",Date.now()+c),R.setRefreshToken(o),R.setAccessToken(t),setTimeout((function(){R.refreshAccessToken()}),c),console.log("accessTokenRefreshed"),!0})).catch((function(e){return console.log("Could not refresh access token",e),U.getState().logout(),!1}))},R.preFlightCheck=function(){var e=Object(h.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("sp-expiry"),!(Date.now()>t)){e.next=7;break}return e.next=4,R.refreshAccessToken();case 4:return e.abrupt("return",e.sent);case 7:setTimeout((function(){R.refreshAccessToken()}),+t-Date.now());case 8:return R.setAccessToken(n),e.abrupt("return","accessTokenValid");case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R.login=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R.getAccessToken(),e.abrupt("return",j.a.get("https://api.spotify.com/v1/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return C=e.data.id,!0})).catch((function(e){return console.log("Could not access profile data",e),U.getState().setAccessRequired(),U.getState().logout(),!1})));case 2:case"end":return e.stop()}}),e)}))),R.checkAuthentication=Object(h.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("sp-accessToken"),t=localStorage.getItem("sp-refreshToken"),n&&t){e.next=4;break}return e.abrupt("return",!1);case 4:return R.setRefreshToken(t),e.next=7,R.preFlightCheck(n);case 7:if(e.sent){e.next=10;break}return e.abrupt("return",!1);case 10:return e.next=12,R.login();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)}))),R.loginRedirect=Object(h.a)(d.a.mark((function e(){var n,t,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w=O((c=43,a=128,c=Math.ceil(c),a=Math.floor(a),Math.floor(Math.random()*(a-c+1))+c)),e.next=3,y(w);case 3:return n=e.sent,S=O(12),t={response_type:"code",client_id:"bd04787f2eb041528818a634a0e71cea",redirect_uri:"https://david-beale.github.io/Spotify-Auth-Example/",scope:["streaming","user-read-email","user-read-private","user-read-playback-state","user-modify-playback-state","user-library-read","user-library-modify","playlist-read-private"].join(" "),state:S,code_challenge:n,code_challenge_method:"S256"},r="https://accounts.spotify.com/authorize?"+T(t),o=P(r,"Login With Spotify",window,600,800),e.abrupt("return",o);case 10:case"end":return e.stop()}var c,a}),e)}))),R.requestTokens=function(e){var n=e.state,t=e.code;if(e.error||n!==S)return!1;var r=new URLSearchParams;return r.append("client_id","bd04787f2eb041528818a634a0e71cea"),r.append("grant_type","authorization_code"),r.append("code",t),r.append("redirect_uri","https://david-beale.github.io/Spotify-Auth-Example/"),r.append("code_verifier",w),j.a.post("https://accounts.spotify.com/api/token",r,{headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).then((function(e){var n=e.data,t=n.access_token,r=n.refresh_token,o=n.expires_in;localStorage.setItem("sp-accessToken",t),localStorage.setItem("sp-refreshToken",r);var c=1e3*(o-60);return localStorage.setItem("sp-expiry",Date.now()+c),R.setAccessToken(t),R.setRefreshToken(r),setTimeout((function(){R.refreshAccessToken()}),c),!0})).catch((function(e){return console.log(e),!1}))};var I=function(e){var n=Math.round(e/1e3),t=~~(n/60);return n-=60*t,"".concat(t,":").concat(n.toString().padStart(2,"0"))},z=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){n&&(e=e.track);var t=e.album.images.reduce((function(e,n){return n.height<e.height?n:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,id:e.id,albumUrl:t.url,duration:I(e.duration_ms)}}))};R.getTracks=function(e,n){return R.searchTracks(e,{offset:n}).then((function(e){return z(e.body.tracks.items)})).catch((function(){return!1}))},R.getMyPlaylist=function(e,n){return"liked"===e?R.getMySavedTracks({offset:n}).then((function(e){return z(e.body.items,!0)})).catch((function(e){return console.log(e),!1})):R.getPlaylist(e,{offset:n}).then((function(e){return z(e.body.tracks.items,!0)})).catch((function(e){return console.log(e),!1}))},R.getTracks=function(e){return R.searchTracks(e).then((function(e){return z(e.body.tracks.items)})).catch((function(){return!1}))},R.getPlaylists=function(){return R.getUserPlaylists(C,{limit:50}).then((function(e){return e.body.items.map((function(e){return{name:e.name,id:e.id,image:e.images[1]||e.images[0]}}))}),(function(e){console.log("Something went wrong!",e)})).catch((function(e){return console.log(e)}))};var q,_,A=null,E=null,F=function(e){e((function(){return{searchTracksOpen:!1,clearSearchText:[],searchFinised:!1,searchQuery:null,searchOffset:0,inProgress:!1}}));var n=Date.now();A=Date.now(),setTimeout((function(){n===A&&e((function(){return{searchTracks:[]}}))}),500)},L=null,M=null,D=function(e,n){for(var t=0;t<e.length;t++)if(e[t].id===n)return[].concat(Object(f.a)(e.slice(t,e.length)),Object(f.a)(e.slice(0,t))).map((function(e){return"spotify:track:"+e.id}))},N=function(e){e((function(){return{selectedPlaylist:null,playlistTracksOpen:!1,playlistRequestsFinised:!1,playlistRequestsOffset:0,playlistRequestsInProgress:!1}}));var n=Date.now();L=Date.now(),setTimeout((function(){n===L&&e((function(){return{playlistTracks:[]}}))}),500)},U=l()((function(e,n){return Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},function(e){return{loggedIn:null,accessRequired:!1,login:function(){return e((function(){return{loggedIn:!0,accessRequired:!1}}))},logout:function(){e((function(){return{loggedIn:!1,interfaceOpen:!1,lightsOn:!1}})),localStorage.removeItem("sp-accessToken"),localStorage.removeItem("sp-refreshToken")},setAccessRequired:function(){return e((function(){return{accessRequired:!0}}))}}}(e)),function(e,n){return{playlistTracksOpen:!1,playlistTracks:[],selectedPlaylist:null,playlistRequestsFinised:!1,playlistRequestsOffset:0,playlistRequestsInProgress:!1,onClosePlaylist:function(){N(e)},onSelectPlayList:function(){var t=Object(h.a)(d.a.mark((function t(r){var o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r!==n().selectedPlaylist){t.next=3;break}return N(e),t.abrupt("return");case 3:return o=Date.now(),M=o,t.next=7,R.getMyPlaylist(r);case 7:if(c=t.sent,M===o){t.next=10;break}return t.abrupt("return");case 10:L="abort",e((function(){return{selectedPlaylist:r,playlistTracksOpen:!0,playlistTracks:c,playlistRequestsOffset:20,playlistRequestsFinised:c.length<20}})),F(e);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),setPlaylistSong:function(t){var r=n().playlistTracks,o=D(r,t);e((function(){return{songs:o,isPlaying:!0}}))},playlistRequestsLoadNextPage:function(){var t=Object(h.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n().playlistRequestsOffset&&!n().playlistRequestsInProgress){t.next=2;break}return t.abrupt("return");case 2:return e((function(){return{playlistRequestsInProgress:!0}})),t.next=5,R.getMyPlaylist(n().selectedPlaylist,n().playlistRequestsOffset);case 5:r=t.sent,e((function(e){return{playlistTracks:[].concat(Object(f.a)(e.playlistTracks),Object(f.a)(r)),playlistRequestsOffset:e.playlistRequestsOffset+20,playlistRequestsFinised:r.length<20,playlistRequestsInProgress:!1}}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}(e,n)),function(e,n){return{clearSearchText:[],searchTracksOpen:!1,searchTracks:[],searchFinised:!1,searchQuery:null,searchOffset:0,searchInProgress:!1,sendSearchRequest:function(){var n=Object(h.a)(d.a.mark((function n(t){var r,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Date.now(),E=r,n.next=4,R.getTracks(t,0);case 4:if(o=n.sent,E===r){n.next=7;break}return n.abrupt("return");case 7:A="abort",e((function(){return{searchTracks:o,searchTracksOpen:!0,searchQuery:t,searchOffset:20,searchFinised:o.length<20}})),N(e);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onCloseSearch:function(){return F(e)},setSearchSong:function(n){e((function(){return{songs:["spotify:track:"+n],isPlaying:!0}}))},searchLoadNextPage:function(){var t=Object(h.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n().searchOffset&&!n().searchInProgress){t.next=2;break}return t.abrupt("return");case 2:return e((function(){return{searchInProgress:!0}})),t.next=5,R.getTracks(n().searchQuery,n().searchOffset);case 5:r=t.sent,e((function(e){return{searchTracks:[].concat(Object(f.a)(e.searchTracks),Object(f.a)(r)),searchOffset:e.searchOffset+20,searchFinised:r.length<20,searchInProgress:!1}}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}(e,n)),function(e){return{songs:[],currentSong:null,setCurrentSong:function(n){return e((function(){return{currentSong:n}}))}}}(e))})),H=t(4),Q=t(5),B=t(85),J=t.n(B),W="#1db954",V="#25362c",X="#2b6d42",Y="rgb(218, 218, 218)",G="rgb(168, 168, 168)",K="rgb(23, 23, 23)",Z=Q.a.div(q||(q=Object(H.a)(["\n  height: 50px;\n  width: 50px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  color: white;\n  z-index: 7;\n"]))),$=Object(Q.a)(J.a)(_||(_=Object(H.a)(["\n  color: ",";\n"])),Y),ee=t(1);function ne(){var e=U((function(e){return e.loggedIn})),n=U((function(e){return e.logout}));return!0!==e?null:Object(ee.jsx)(Z,{children:Object(ee.jsx)(i.a,{color:"success",onClick:n,children:Object(ee.jsx)($,{fontSize:"large"})})})}var te,re,oe,ce,ae,ie=t(7),se=Q.a.div(te||(te=Object(H.a)(["\n  width: 130px;\n  color: ",";\n  font-weight: 700;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"])),(function(e){return e.error?"rgb(247,49,49)":""})),ue=Q.a.div(re||(re=Object(H.a)(["\n  font-size: 1rem;\n  color: white;\n  padding: 0 25px;\n  text-align: center;\n"]))),le=Q.a.div(oe||(oe=Object(H.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  z-index: 4;\n"]))),fe=Q.a.div(ce||(ce=Object(H.a)(["\n  background-color: ",";\n  width: 200px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  border-radius: 25px;\n  cursor: pointer;\n  box-shadow: 0 0 6px 0px white;\n  user-select: none;\n  transition: background-position 0.2s ease-in-out;\n  background-image: linear-gradient(to top, white 50%, transparent 50%);\n  background-size: 100% 200%;\n  background-position: top;\n  &:hover {\n    background-position: bottom;\n    color: ",";\n    font-weight: 600;\n  }\n"])),W,W);function pe(){var e=Object(r.useState)("..."),n=Object(ie.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){var e;return function n(){e=setTimeout((function(){o((function(e){return 3===e.length?"":0===e.length?".":1===e.length?"..":2===e.length?"...":void 0})),n()}),500)}(),function(){clearTimeout(e)}}),[]),Object(ee.jsx)(ee.Fragment,{children:t})}function de(){var e=U((function(e){return e.loggedIn})),n=U((function(e){return e.accessRequired})),t=U((function(e){return e.login})),o=U((function(e){return e.logout})),c=function(){var e=U((function(e){return e.login})),n=Object(r.useState)(!1),t=Object(ie.a)(n,2),o=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(ie.a)(a,2),s=i[0],u=i[1],l=function(){var n=Object(h.a)(d.a.mark((function n(){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),u(!1),n.next=4,R.loginRedirect();case 4:t=n.sent,r=function(){var n=Object(h.a)(d.a.mark((function n(t){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.requestTokens(t);case 2:if(r=n.sent,c(!1),!r){n.next=9;break}return n.next=7,R.login();case 7:n.sent&&e();case 9:u(!0);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),window.spotifyCallback=function(e){t.close(),r(e)};case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return[l,o,s]}(),a=Object(ie.a)(c,3),i=a[0],s=a[1],u=a[2];return Object(r.useEffect)((function(){Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.checkAuthentication();case 2:e.sent?t():o();case 4:case"end":return e.stop()}}),e)})))()}),[t,o]),!1!==e?null:Object(ee.jsxs)(le,{children:[Object(ee.jsx)(fe,{onClick:i,children:"Login"}),Object(ee.jsx)(se,{error:u,children:s?Object(ee.jsxs)(ee.Fragment,{children:["Authenticating ",Object(ee.jsx)(pe,{})]}):u&&Object(ee.jsx)(ee.Fragment,{children:"Error Logging In"})}),n&&Object(ee.jsx)(ue,{children:"Sorry, your account needs to be manually authorised. Please get in touch."})]})}var he,be,ge,xe,je,Oe=Q.a.div(ae||(ae=Object(H.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  height: 75px;\n  box-shadow: 0 0 15px 0 ",";\n  z-index: 6;\n  position: fixed;\n  left: 0;\n  top: ",";\n  transition: top 1s ease-in-out;\n"])),K,W,(function(e){return e.open?0:"-80px"})),me=t(90),ve=t(91),ye=t.n(ve),ke=t(92),we=t.n(ke),Se=Q.a.div(he||(he=Object(H.a)(["\n  width: 650px;\n  height: 50px;\n  position: relative;\n  @media (max-width: 1100px) {\n    margin-left: 230px;\n    margin-right: 60px;\n  }\n"]))),Te=Q.a.input(be||(be=Object(H.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  border: none;\n  outline: none;\n  padding: 10px 10px 5px 70px;\n  background-color: transparent;\n  color: ",";\n  box-shadow: inset 8px 8px 8px ",",\n    inset -8px -8px 8px ",";\n  font-weight: 700;\n  font-size: 1rem;\n  ::placeholder {\n    color: ",";\n  }\n"])),G,V,X,G),Pe=Object(Q.a)(ye.a)(ge||(ge=Object(H.a)(["\n  color: ",";\n  position: absolute;\n  left: 10px;\n  top: 10px;\n"])),G),Re=Object(Q.a)(we.a)(xe||(xe=Object(H.a)(["\n  color: ",";\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  cursor: pointer;\n"])),G);function Ce(){var e=U((function(e){return e.clearSearchText})),n=U((function(e){return e.onCloseSearch})),t=U((function(e){return e.sendSearchRequest})),o=Object(r.useState)(""),c=Object(ie.a)(o,2),a=c[0],i=c[1];Object(r.useEffect)((function(){i("")}),[e]);var s=Object(r.useMemo)((function(){return Object(me.debounce)(function(){var e=Object(h.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:t(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),300)}),[t]);Object(r.useEffect)((function(){return function(){s.cancel()}}),[s]);var u=Object(r.useCallback)((function(e){s(e.target.value),i(e.target.value),e.target.value||n()}),[s,n]);return Object(ee.jsxs)(Se,{children:[Object(ee.jsx)(Pe,{fontSize:"large"}),Object(ee.jsx)(Te,{type:"text",id:"search",placeholder:"Search for songs...",value:a,onChange:u,autoComplete:"off"}),a&&Object(ee.jsx)(Re,{onClick:n,fontSize:"large"})]})}var Ie=Q.a.img(je||(je=Object(H.a)(["\n  position: absolute;\n  top: 5px;\n  left: 25px;\n  width: 200px;\n  cursor: pointer;\n  z-index: 2;\n"]))),ze=t.p+"static/media/spotifyLogo.0c4ae91b.png";function qe(){return Object(ee.jsx)(Ie,{onClick:function(){var e=window.open("https://open.spotify.com/","_blank","noopener,noreferrer");e&&(e.opener=null)},src:ze,alt:"spotify-logo"})}function _e(){var e=Object(r.useState)(!1),n=Object(ie.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){o(!0)}),[t]),Object(ee.jsxs)(Oe,{open:t,children:[Object(ee.jsx)(qe,{}),Object(ee.jsx)(Ce,{})]})}var Ae,Ee,Fe,Le,Me,De,Ne,Ue,He,Qe,Be=t(31),Je=t(45),We=Q.a.div(Ae||(Ae=Object(H.a)(["\n  box-sizing: border-box;\n  min-height: 65px;\n  width: 100%;\n  background-color: ",";\n  margin-bottom: 2px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  position: absolute;\n  overflow: hidden;\n  padding-left: 100px;\n  padding-right: 35px;\n  top: ","px;\n\n  &:hover {\n    background-color: rgb(50, 60, 50);\n    box-shadow: 0 0 4px 0px chartreuse;\n  }\n"])),(function(e){return e.isPlaying?"rgb(40, 50, 40)":"rgba(60, 70, 60, 1)"}),(function(e){return e.top})),Ve=Q.a.img(Ee||(Ee=Object(H.a)(["\n  height: 65px;\n  width: 65px;\n  position: absolute;\n  left: 0;\n"]))),Xe=Q.a.div(Fe||(Fe=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 50px);\n"]))),Ye=Q.a.div(Le||(Le=Object(H.a)(["\n  font-size: 1.1rem;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(e){return e.isPlaying?W:Y})),Ge=Q.a.div(Me||(Me=Object(H.a)(["\n  font-size: 0.8rem;\n  color: ",";\n  margin-top: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),G),Ke=Q.a.div(De||(De=Object(H.a)(["\n  font-size: 1rem;\n  color: ",";\n"])),Y);function Ze(e){var n=e.track,t=e.selectSong,r=e.top,o=e.isPlaying;return Object(ee.jsxs)(We,{onClick:function(){t(n.id)},top:r,isPlaying:o,children:[Object(ee.jsx)(Ve,{src:n.albumUrl,alt:n.title}),Object(ee.jsxs)(Xe,{children:[Object(ee.jsx)(Ye,{isPlaying:o,children:n.title}),Object(ee.jsx)(Ge,{children:n.artist})]}),Object(ee.jsx)(Ke,{children:n.duration})]})}var $e=Q.a.div(Ne||(Ne=Object(H.a)(["\n  box-sizing: border-box;\n  z-index: 4;\n  position: absolute;\n  height: ","px;\n  width: calc(100vw - 350px);\n  overflow: auto;\n  padding: 25px;\n  overflow: auto;\n  color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n"])),(function(e){return e.height})),en=Object(Q.a)($e)(Ue||(Ue=Object(H.a)(["\n  transition: top 500ms ease-in-out;\n  top: ",";\n  left: 350px;\n"])),(function(e){return e.open?"75px":"-100%"})),nn=Object(Q.a)($e)(He||(He=Object(H.a)(["\n  transition: left 500ms ease-in-out;\n  top: 75px;\n  left: ",";\n"])),(function(e){return e.open?"350px":"-100%"})),tn=Q.a.div(Qe||(Qe=Object(H.a)(["\n  position: relative;\n"]))),rn=function(){var e=Object(r.useState)(0),n=Object(ie.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){var e=function(){o(window.innerHeight-150)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t};function on(e){return Object(ee.jsx)(tn,Object(s.a)({},e))}var cn=Object(r.forwardRef)((function(e,n){var t=e.children,r=e.style,o=e.onScroll,c=U((function(e){return e.playlistTracksOpen}));return Object(ee.jsx)(nn,{onScroll:o,open:c,height:r.height,children:t.props.children.length?t:Object(ee.jsx)(ee.Fragment,{children:"No Songs Found"})})})),an=o.a.memo((function(e){var n=U((function(e){return e.setPlaylistSong})),t=e.data,r=e.index,o=e.style,c=t.items[r];if(!c)return null;var a=c.id;return Object(ee.jsx)(Ze,{track:c,top:o.top,selectSong:n,isPlaying:c.id===t.currentSong},a)}),Be.b);function sn(){var e=U((function(e){return e.playlistTracks})),n=U((function(e){return e.currentSong})),t=U((function(e){return!e.playlistRequestsFinised})),o=U((function(e){return e.playlistRequestsLoadNextPage})),c=Object(r.useCallback)((function(n){return!t||n<e.length}),[t,e]),a=Object(r.useMemo)((function(){return t?e.length+1:e.length}),[t,e]),i=rn();return Object(ee.jsx)(Je.a,{isItemLoaded:c,itemCount:a,loadMoreItems:o,threshold:5,children:function(t){var r=t.onItemsRendered,o=t.ref;return Object(ee.jsx)(Be.a,{ref:o,height:i,itemCount:a,itemSize:67,onItemsRendered:r,outerElementType:cn,innerElementType:on,itemData:{items:e,currentSong:n},children:an})}})}var un,ln=Object(r.forwardRef)((function(e,n){var t=e.children,r=e.style,o=e.onScroll,c=U((function(e){return e.searchTracksOpen}));return Object(ee.jsx)(en,{onScroll:o,open:c,height:r.height,children:t.props.children.length?t:Object(ee.jsx)(ee.Fragment,{children:"No Results Found"})})})),fn=o.a.memo((function(e){var n=U((function(e){return e.setSearchSong})),t=e.data,r=e.index,o=e.style,c=t.items[r];if(!c)return null;var a=c.id;return Object(ee.jsx)(Ze,{track:c,top:o.top,selectSong:n,isPlaying:c.id===t.currentSong},a)}),Be.b);function pn(){var e=U((function(e){return e.searchTracks})),n=U((function(e){return e.currentSong})),t=U((function(e){return!e.searchFinised})),o=U((function(e){return e.searchLoadNextPage})),c=Object(r.useCallback)((function(n){return!t||n<e.length}),[t,e]),a=Object(r.useMemo)((function(){return t?e.length+1:e.length}),[t,e]),i=rn();return Object(ee.jsx)(Je.a,{isItemLoaded:c,itemCount:a,loadMoreItems:o,threshold:5,children:function(t){var r=t.onItemsRendered,o=t.ref;return Object(ee.jsx)(Be.a,{ref:o,height:i,itemCount:a,itemSize:67,onItemsRendered:r,outerElementType:ln,innerElementType:on,itemData:{items:e,currentSong:n},children:fn})}})}var dn,hn=Q.a.div(un||(un=Object(H.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 30px;\n  color: ",";\n  font-weight: ",";\n  cursor: pointer;\n  padding: 3px 25px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background-color: ",";\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.selected?Y:G}),(function(e){return e.selected?600:""}),(function(e){return e.selected?W:""}),Y,(function(e){return e.selected?W:"rgb(60, 70, 60)"}));function bn(e){var n=e.playlist,t=e.selected,r=U((function(e){return e.onSelectPlayList}));return Object(ee.jsx)(hn,{selected:t,onClick:function(){r(n.id)},children:n.name})}var gn=Q.a.div(dn||(dn=Object(H.a)(["\n  box-sizing: border-box;\n  width: 350px;\n  height: calc(100vh - 157px);\n  background-color: ",";\n  position: absolute;\n  top: 75px;\n  z-index: 5;\n  box-shadow: 7.5px 0 8px -10px ",";\n  padding: 10px 0;\n  overflow: auto;\n  left: ",";\n  transition: left 1s ease-in-out;\n"])),K,W,(function(e){return e.open?0:"-360px"})),xn={name:"Liked Songs",id:"liked"};function jn(){var e=Object(r.useState)(!1),n=Object(ie.a)(e,2),t=n[0],o=n[1],c=U((function(e){return e.selectedPlaylist})),a=Object(r.useState)([]),i=Object(ie.a)(a,2),s=i[0],u=i[1];return Object(r.useEffect)((function(){o(!0),Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getPlaylists();case 2:n=e.sent,u([xn].concat(Object(f.a)(n)));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(ee.jsx)(gn,{open:t,children:s.map((function(e){return Object(ee.jsx)(bn,{playlist:e,selected:c===e.id},e.id)}))})}var On,mn,vn,yn=t(101),kn=Q.a.div(On||(On=Object(H.a)(["\n  position: fixed;\n  width: 100%;\n  z-index: 6;\n  box-shadow: 0 0 15px 0 ",";\n  bottom: ",";\n  transition: bottom 1s ease-in-out;\n"])),W,(function(e){return e.open?0:"-85px"})),wn={bgColor:K,height:"75px",color:Y,sliderTrackColor:G,sliderColor:W,sliderHandleColor:Y,trackNameColor:Y,trackArtistColor:G};function Sn(){var e=U((function(e){return e.songs})),n=U((function(e){return e.setCurrentSong})),t=Object(r.useState)(!1),o=Object(ie.a)(t,2),c=o[0],a=o[1],i=Object(r.useState)(!1),s=Object(ie.a)(i,2),u=s[0],l=s[1],f=Object(r.useCallback)((function(e){e.isPlaying||l(!1),n(e.track.id)}),[n]);return Object(r.useEffect)((function(){e.length&&l(!0)}),[e]),Object(r.useEffect)((function(){a(!0)}),[]),Object(ee.jsx)(kn,{open:c,children:Object(ee.jsx)(yn.a,{token:R.getAccessToken(),play:u,callback:f,showSaveIcon:!0,syncExternalDevice:!0,uris:e.length?e:null,styles:wn})})}function Tn(){return!0!==U((function(e){return e.loggedIn}))?null:Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(Sn,{}),Object(ee.jsx)(_e,{}),Object(ee.jsx)(jn,{}),Object(ee.jsx)(sn,{}),Object(ee.jsx)(pn,{})]})}var Pn=Q.a.div(mn||(mn=Object(H.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  color: rgb(0, 37, 46);\n  z-index: 0;\n  background-color: black;\n"]))),Rn=Q.a.div(vn||(vn=Object(H.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: radial-gradient(circle at top, #034412, #000000);\n  z-index: 1;\n"])));function Cn(){return Object(ee.jsxs)(Pn,{children:[Object(ee.jsx)(Rn,{}),Object(ee.jsx)(de,{}),Object(ee.jsx)(ne,{}),Object(ee.jsx)(Tn,{})]})}function In(e){var n=e.children,t=Object(r.useState)(!1),o=Object(ie.a)(t,2),c=o[0],a=o[1];return Object(r.useEffect)((function(){var e=new URLSearchParams(window.location.search),n=e.get("code"),t=e.get("state"),r=e.get("error");r||n&&t?window.opener.spotifyCallback({code:n,state:t,error:r}):a(!0)}),[]),Object(ee.jsx)(ee.Fragment,{children:c&&n})}a.a.render(Object(ee.jsx)(o.a.StrictMode,{children:Object(ee.jsx)(In,{children:Object(ee.jsx)(Cn,{})})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.3a33b19a.chunk.js.map