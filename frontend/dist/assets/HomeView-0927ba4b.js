import{a as Gi,b as xs,d as Ki,r as N,c as me,o as Xi,e as Yi,f as H,g as J,h as v,i as kt,w as On,j as Os,F as Cs,v as Ds,_ as Ss,k as Ls,l as Ji,m as Z,n as F,p as Ce,u as P,q as de,t as pn,s as Rs,x as oi,y as ai}from"./index-e8ab809d.js";const gn="https://ki67.app/",Ps=({body:t,url:e})=>Gi.post(gn+e,t,{headers:{Authorization:`Bearer ${xs.get("token")}`}}),Bs=({body:t,url:e,result:n,error:i,onFinally:r})=>{Gi.post(e,t).then(n).catch(i).finally(r)},st=Ki("counter",()=>{const t=N(),e=N(1),n=N({});return{counterData:t,countCell:(r,s)=>Ps({url:"count-cell",body:s}).then(({data:o})=>{o.status&&(t.value=o,console.log("message"),r(o.message,void 0))}).catch(o=>{var a;console.log("e");const c=((a=o.response.data)==null?void 0:a.message)??`${o}`;console.log(c),r(void 0,c??o)}),currentStep:e,formValues:n}});Ki("counter",()=>({counterData:N()}));const Ns="/assets/Picture56-788f566d.jpg",Ms=["onDrop"],$s=me({__name:"DragDropFile",emits:["upload"],setup(t,{emit:e}){const n=["dragenter","dragleave","dragover","drop"],i=N(!1),r=N();Xi(()=>{n.forEach(l=>document.body.addEventListener(l,u=>u.preventDefault()))}),Yi(()=>{n.forEach(l=>document.body.removeEventListener(l,u=>u.preventDefault()))});const s=l=>{const u=l.target.files;console.log(u),u[0].name.includes("png")||u[0].name.includes("jpg")||u[0].name.includes("jpeg")?e("upload",[...u]):alert("Unsupported file type")},o=l=>{var d;const u=(d=l.dataTransfer)==null?void 0:d.files;console.log({files:u}),u[0].name.includes("png")||u[0].name.includes("jpg")||u[0].name.includes("jpeg")?e("upload",[...u]):alert("Unsupported file type")},c=l=>{const u=l.target.files;console.log({files:u}),u[0].name.includes("png")||u[0].name.includes("jpg")||u[0].name.includes("jpeg")?e("upload",[...u]):alert("Unsupported file type")},a=()=>{var l;console.log(r.value),(l=r.value)==null||l.click()};return(l,u)=>(H(),J(Cs,null,[v("div",{onClick:a,class:"drag-area text-field-3 w-input",onDrop:On(o,["prevent"]),onDragenter:u[0]||(u[0]=d=>i.value=!0),onDragleave:u[1]||(u[1]=d=>i.value=!1)},[kt(l.$slots,"default",{},void 0,!0)],40,Ms),Os(v("input",{ref_key:"cvInput",ref:r,onChange:s,onInput:c,type:"file"},null,544),[[Ds,!1]])],64))}});const Us=Ss($s,[["__scopeId","data-v-b2b450d0"]]),{notify:ci}=Ls();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},js=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,u=s>>2,d=(s&3)<<4|c>>4;let f=(c&15)<<2|l>>6,h=l&63;a||(h=64,o||(f=64)),i.push(n[u],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):js(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||c==null||l==null||d==null)throw new Fs;const f=s<<2|c>>4;if(i.push(f),l!==64){const h=c<<4&240|l>>2;if(i.push(h),d!==64){const m=l<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hs=function(t){const e=Zi(t);return Qi.encodeByteArray(e,!0)},xt=function(t){return Hs(t).replace(/\./g,"")},Vs=function(t){try{return Qi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=()=>qs().__FIREBASE_DEFAULTS__,Ws=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vs(t[1]);return e&&JSON.parse(e)},Cn=()=>{try{return zs()||Ws()||Gs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ks=t=>{var e,n;return(n=(e=Cn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xs=t=>{const e=Ks(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},er=()=>{var t;return(t=Cn())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[xt(JSON.stringify(n)),xt(JSON.stringify(o)),c].join(".")}function Zs(){var t;const e=(t=Cn())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tr(){try{return typeof indexedDB=="object"}catch{return!1}}function nr(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function eo(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="FirebaseError";class ve extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=to,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?no(s,i):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new ve(r,c,i)}}function no(t,e){return t.replace(io,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const io=/\{\$([^}]+)}/g;function Ot(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(li(s)&&li(o)){if(!Ot(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function li(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=1e3,so=2,oo=4*60*60*1e3,ao=.5;function ui(t,e=ro,n=so){const i=e*Math.pow(n,t),r=Math.round(ao*i*(Math.random()-.5)*2);return Math.min(oo,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class re{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ys;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uo(e))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ie){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ie){return this.instances.has(e)}getOptions(e=Ie){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lo(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ie){return this.component?this.component.multipleInstances?e:Ie:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lo(t){return t===Ie?void 0:t}function uo(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new co(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const fo={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},po=A.INFO,go={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},mo=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=go[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ir{constructor(e){this.name=e,this._logLevel=po,this._logHandler=mo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const vo=(t,e)=>e.some(n=>t instanceof n);let di,hi;function _o(){return di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bo(){return hi||(hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rr=new WeakMap,mn=new WeakMap,sr=new WeakMap,en=new WeakMap,Dn=new WeakMap;function yo(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(he(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rr.set(n,t)}).catch(()=>{}),Dn.set(e,t),e}function wo(t){if(mn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mn.set(t,e)}let vn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return he(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Eo(t){vn=t(vn)}function To(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(tn(this),e,...n);return sr.set(i,e.sort?e.sort():[e]),he(i)}:bo().includes(t)?function(...e){return t.apply(tn(this),e),he(rr.get(this))}:function(...e){return he(t.apply(tn(this),e))}}function Io(t){return typeof t=="function"?To(t):(t instanceof IDBTransaction&&wo(t),vo(t,_o())?new Proxy(t,vn):t)}function he(t){if(t instanceof IDBRequest)return yo(t);if(en.has(t))return en.get(t);const e=Io(t);return e!==t&&(en.set(t,e),Dn.set(e,t)),e}const tn=t=>Dn.get(t);function Ao(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),c=he(o);return i&&o.addEventListener("upgradeneeded",a=>{i(he(o.result),a.oldVersion,a.newVersion,he(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const ko=["get","getKey","getAll","getAllKeys","count"],xo=["put","add","delete","clear"],nn=new Map;function fi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nn.get(e))return nn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=xo.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ko.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return i&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return nn.set(e,s),s}Eo(t=>({...t,get:(e,n,i)=>fi(e,n)||t.get(e,n,i),has:(e,n)=>!!fi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Co(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Co(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _n="@firebase/app",pi="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new ir("@firebase/app"),Do="@firebase/app-compat",So="@firebase/analytics-compat",Lo="@firebase/analytics",Ro="@firebase/app-check-compat",Po="@firebase/app-check",Bo="@firebase/auth",No="@firebase/auth-compat",Mo="@firebase/database",$o="@firebase/database-compat",Uo="@firebase/functions",jo="@firebase/functions-compat",Fo="@firebase/installations",Ho="@firebase/installations-compat",Vo="@firebase/messaging",qo="@firebase/messaging-compat",zo="@firebase/performance",Wo="@firebase/performance-compat",Go="@firebase/remote-config",Ko="@firebase/remote-config-compat",Xo="@firebase/storage",Yo="@firebase/storage-compat",Jo="@firebase/firestore",Zo="@firebase/firestore-compat",Qo="firebase",ea="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]",ta={[_n]:"fire-core",[Do]:"fire-core-compat",[Lo]:"fire-analytics",[So]:"fire-analytics-compat",[Po]:"fire-app-check",[Ro]:"fire-app-check-compat",[Bo]:"fire-auth",[No]:"fire-auth-compat",[Mo]:"fire-rtdb",[$o]:"fire-rtdb-compat",[Uo]:"fire-fn",[jo]:"fire-fn-compat",[Fo]:"fire-iid",[Ho]:"fire-iid-compat",[Vo]:"fire-fcm",[qo]:"fire-fcm-compat",[zo]:"fire-perf",[Wo]:"fire-perf-compat",[Go]:"fire-rc",[Ko]:"fire-rc-compat",[Xo]:"fire-gcs",[Yo]:"fire-gcs-compat",[Jo]:"fire-fst",[Zo]:"fire-fst-compat","fire-js":"fire-js",[Qo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map,yn=new Map;function na(t,e){try{t.container.addComponent(e)}catch(n){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ge(t){const e=t.name;if(yn.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;yn.set(e,t);for(const n of Ct.values())na(n,t);return!0}function ot(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new zt("app","Firebase",ia);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=ea;function or(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw fe.create("bad-app-name",{appName:String(r)});if(n||(n=er()),!n)throw fe.create("no-options");const s=Ct.get(r);if(s){if(Ot(n,s.options)&&Ot(i,s.config))return s;throw fe.create("duplicate-app",{appName:r})}const o=new ho(r);for(const a of yn.values())o.addComponent(a);const c=new ra(n,i,o);return Ct.set(r,c),c}function ar(t=bn){const e=Ct.get(t);if(!e&&t===bn&&er())return or();if(!e)throw fe.create("no-app",{appName:t});return e}function ee(t,e,n){var i;let r=(i=ta[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(c.join(" "));return}ge(new re(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="firebase-heartbeat-database",aa=1,nt="firebase-heartbeat-store";let rn=null;function cr(){return rn||(rn=Ao(oa,aa,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nt)}}}).catch(t=>{throw fe.create("idb-open",{originalErrorMessage:t.message})})),rn}async function ca(t){try{return await(await cr()).transaction(nt).objectStore(nt).get(lr(t))}catch(e){if(e instanceof ve)Le.warn(e.message);else{const n=fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(n.message)}}}async function gi(t,e){try{const i=(await cr()).transaction(nt,"readwrite");await i.objectStore(nt).put(e,lr(t)),await i.done}catch(n){if(n instanceof ve)Le.warn(n.message);else{const i=fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Le.warn(i.message)}}}function lr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=1024,ua=30*24*60*60*1e3;class da{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fa(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=ua}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mi(),{heartbeatsToSend:n,unsentEntries:i}=ha(this._heartbeatsCache.heartbeats),r=xt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function mi(){return new Date().toISOString().substring(0,10)}function ha(t,e=la){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),vi(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class fa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tr()?nr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ca(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vi(t){return xt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){ge(new re("platform-logger",e=>new Oo(e),"PRIVATE")),ge(new re("heartbeat",e=>new da(e),"PRIVATE")),ee(_n,pi,t),ee(_n,pi,"esm2017"),ee("fire-js","")}pa("");const ga=(t,e)=>e.some(n=>t instanceof n);let _i,bi;function ma(){return _i||(_i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return bi||(bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ur=new WeakMap,wn=new WeakMap,dr=new WeakMap,sn=new WeakMap,Sn=new WeakMap;function _a(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pe(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ur.set(n,t)}).catch(()=>{}),Sn.set(e,t),e}function ba(t){if(wn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wn.set(t,e)}let En={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ya(t){En=t(En)}function wa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(on(this),e,...n);return dr.set(i,e.sort?e.sort():[e]),pe(i)}:va().includes(t)?function(...e){return t.apply(on(this),e),pe(ur.get(this))}:function(...e){return pe(t.apply(on(this),e))}}function Ea(t){return typeof t=="function"?wa(t):(t instanceof IDBTransaction&&ba(t),ga(t,ma())?new Proxy(t,En):t)}function pe(t){if(t instanceof IDBRequest)return _a(t);if(sn.has(t))return sn.get(t);const e=Ea(t);return e!==t&&(sn.set(t,e),Sn.set(e,t)),e}const on=t=>Sn.get(t);function Ta(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),c=pe(o);return i&&o.addEventListener("upgradeneeded",a=>{i(pe(o.result),a.oldVersion,a.newVersion,pe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",()=>r())}).catch(()=>{}),c}const Ia=["get","getKey","getAll","getAllKeys","count"],Aa=["put","add","delete","clear"],an=new Map;function yi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(an.get(e))return an.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Aa.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Ia.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return i&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return an.set(e,s),s}ya(t=>({...t,get:(e,n,i)=>yi(e,n)||t.get(e,n,i),has:(e,n)=>!!yi(e,n)||t.has(e,n)}));const hr="@firebase/installations",Ln="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=1e4,pr=`w:${Ln}`,gr="FIS_v2",ka="https://firebaseinstallations.googleapis.com/v1",xa=60*60*1e3,Oa="installations",Ca="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Re=new zt(Oa,Ca,Da);function mr(t){return t instanceof ve&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr({projectId:t}){return`${ka}/projects/${t}/installations`}function _r(t){return{token:t.token,requestStatus:2,expiresIn:La(t.expiresIn),creationTime:Date.now()}}async function br(t,e){const i=(await e.json()).error;return Re.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function yr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Sa(t,{refreshToken:e}){const n=yr(t);return n.append("Authorization",Ra(e)),n}async function wr(t){const e=await t();return e.status>=500&&e.status<600?t():e}function La(t){return Number(t.replace("s","000"))}function Ra(t){return`${gr} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=vr(t),r=yr(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:gr,appId:t.appId,sdkVersion:pr},c={method:"POST",headers:r,body:JSON.stringify(o)},a=await wr(()=>fetch(i,c));if(a.ok){const l=await a.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:_r(l.authToken)}}else throw await br("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=/^[cdef][\w-]{21}$/,Tn="";function Ma(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$a(t);return Na.test(n)?n:Tn}catch{return Tn}}function $a(t){return Ba(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function Ir(t,e){const n=Wt(t);Ar(n,e),Ua(n,e)}function Ar(t,e){const n=Tr.get(t);if(n)for(const i of n)i(e)}function Ua(t,e){const n=ja();n&&n.postMessage({key:t,fid:e}),Fa()}let Oe=null;function ja(){return!Oe&&"BroadcastChannel"in self&&(Oe=new BroadcastChannel("[Firebase] FID Change"),Oe.onmessage=t=>{Ar(t.data.key,t.data.fid)}),Oe}function Fa(){Tr.size===0&&Oe&&(Oe.close(),Oe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="firebase-installations-database",Va=1,Pe="firebase-installations-store";let cn=null;function Rn(){return cn||(cn=Ta(Ha,Va,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pe)}}})),cn}async function Dt(t,e){const n=Wt(t),r=(await Rn()).transaction(Pe,"readwrite"),s=r.objectStore(Pe),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Ir(t,e.fid),e}async function kr(t){const e=Wt(t),i=(await Rn()).transaction(Pe,"readwrite");await i.objectStore(Pe).delete(e),await i.done}async function Gt(t,e){const n=Wt(t),r=(await Rn()).transaction(Pe,"readwrite"),s=r.objectStore(Pe),o=await s.get(n),c=e(o);return c===void 0?await s.delete(n):await s.put(c,n),await r.done,c&&(!o||o.fid!==c.fid)&&Ir(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t){let e;const n=await Gt(t.appConfig,i=>{const r=qa(i),s=za(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Tn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qa(t){const e=t||{fid:Ma(),registrationStatus:0};return xr(e)}function za(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Re.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Wa(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ga(t)}:{installationEntry:e}}async function Wa(t,e){try{const n=await Pa(t,e);return Dt(t.appConfig,n)}catch(n){throw mr(n)&&n.customData.serverCode===409?await kr(t.appConfig):await Dt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ga(t){let e=await wi(t.appConfig);for(;e.registrationStatus===1;)await Er(100),e=await wi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Pn(t);return i||n}return e}function wi(t){return Gt(t,e=>{if(!e)throw Re.create("installation-not-found");return xr(e)})}function xr(t){return Ka(t)?{fid:t.fid,registrationStatus:0}:t}function Ka(t){return t.registrationStatus===1&&t.registrationTime+fr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa({appConfig:t,heartbeatServiceProvider:e},n){const i=Ya(t,n),r=Sa(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:pr,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(o)},a=await wr(()=>fetch(i,c));if(a.ok){const l=await a.json();return _r(l)}else throw await br("Generate Auth Token",a)}function Ya(t,{fid:e}){return`${vr(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e=!1){let n;const i=await Gt(t.appConfig,s=>{if(!Or(s))throw Re.create("not-registered");const o=s.authToken;if(!e&&Qa(o))return s;if(o.requestStatus===1)return n=Ja(t,e),s;{if(!navigator.onLine)throw Re.create("app-offline");const c=tc(s);return n=Za(t,c),c}});return n?await n:i.authToken}async function Ja(t,e){let n=await Ei(t.appConfig);for(;n.authToken.requestStatus===1;)await Er(100),n=await Ei(t.appConfig);const i=n.authToken;return i.requestStatus===0?Bn(t,e):i}function Ei(t){return Gt(t,e=>{if(!Or(e))throw Re.create("not-registered");const n=e.authToken;return nc(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Za(t,e){try{const n=await Xa(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Dt(t.appConfig,i),n}catch(n){if(mr(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kr(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dt(t.appConfig,i)}throw n}}function Or(t){return t!==void 0&&t.registrationStatus===2}function Qa(t){return t.requestStatus===2&&!ec(t)}function ec(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xa}function tc(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nc(t){return t.requestStatus===1&&t.requestTime+fr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){const e=t,{installationEntry:n,registrationPromise:i}=await Pn(e);return i?i.catch(console.error):Bn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t,e=!1){const n=t;return await sc(n),(await Bn(n,e)).token}async function sc(t){const{registrationPromise:e}=await Pn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){if(!t||!t.options)throw ln("App Configuration");if(!t.name)throw ln("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ln(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ln(t){return Re.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="installations",ac="installations-internal",cc=t=>{const e=t.getProvider("app").getImmediate(),n=oc(e),i=ot(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},lc=t=>{const e=t.getProvider("app").getImmediate(),n=ot(e,Cr).getImmediate();return{getId:()=>ic(n),getToken:r=>rc(n,r)}};function uc(){ge(new re(Cr,cc,"PUBLIC")),ge(new re(ac,lc,"PRIVATE"))}uc();ee(hr,Ln);ee(hr,Ln,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="analytics",dc="firebase_id",hc="origin",fc=60*1e3,pc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new ir("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},q=new zt("analytics","Analytics",gc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){if(!t.startsWith(Nn)){const e=q.create("invalid-gtag-resource",{gtagURL:t});return M.warn(e.message),""}return t}function Dr(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vc(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _c(t,e){const n=vc("firebase-js-sdk-policy",{createScriptURL:mc}),i=document.createElement("script"),r=`${Nn}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function bc(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yc(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const a=(await Dr(n)).find(l=>l.measurementId===r);a&&await e[a.appId]}}catch(c){M.error(c)}t("config",r,s)}async function wc(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const c=await Dr(n);for(const a of o){const l=c.find(d=>d.measurementId===a),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){M.error(s)}}function Ec(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[c,a]=o;await wc(t,e,n,c,a)}else if(s==="config"){const[c,a]=o;await yc(t,e,n,i,c,a)}else if(s==="consent"){const[c]=o;t("consent","update",c)}else if(s==="get"){const[c,a,l]=o;t("get",c,a,l)}else if(s==="set"){const[c]=o;t("set",c)}else t(s,...o)}catch(c){M.error(c)}}return r}function Tc(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Ec(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function Ic(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nn)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=30,kc=1e3;class xc{constructor(e={},n=kc){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sr=new xc;function Oc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Cc(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Oc(i)},s=pc.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let c="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(c=a.error.message)}catch{}throw q.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Dc(t,e=Sr,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw q.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw q.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Rc;return setTimeout(async()=>{c.abort()},n!==void 0?n:fc),Lr({appId:i,apiKey:r,measurementId:s},o,c,e)}async function Lr(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Sr){var s;const{appId:o,measurementId:c}=t;try{await Sc(i,e)}catch(a){if(c)return M.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:c};throw a}try{const a=await Cc(t);return r.deleteThrottleMetadata(o),a}catch(a){const l=a;if(!Lc(l)){if(r.deleteThrottleMetadata(o),c)return M.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw a}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?ui(n,r.intervalMillis,Ac):ui(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,d),M.debug(`Calling attemptFetch again in ${u} millis`),Lr(t,d,i,r)}}function Sc(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Lc(t){if(!(t instanceof ve)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pc(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(){if(tr())try{await nr()}catch(t){return M.warn(q.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return M.warn(q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nc(t,e,n,i,r,s,o){var c;const a=Dc(t);a.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&M.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>M.error(h)),e.push(a);const l=Bc().then(h=>{if(h)return i.getId()}),[u,d]=await Promise.all([a,l]);Ic(s)||_c(s,u.measurementId),r("js",new Date);const f=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return f[hc]="firebase",f.update=!0,d!=null&&(f[dc]=d),r("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.app=e}_delete(){return delete Je[this.app.options.appId],Promise.resolve()}}let Je={},Ti=[];const Ii={};let un="dataLayer",$c="gtag",Ai,Rr,ki=!1;function Uc(){const t=[];if(Qs()&&t.push("This is a browser extension environment."),eo()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=q.create("invalid-analytics-context",{errorInfo:e});M.warn(n.message)}}function jc(t,e,n){Uc();const i=t.options.appId;if(!i)throw q.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)M.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw q.create("no-api-key");if(Je[i]!=null)throw q.create("already-exists",{id:i});if(!ki){bc(un);const{wrappedGtag:s,gtagCore:o}=Tc(Je,Ti,Ii,un,$c);Rr=s,Ai=o,ki=!0}return Je[i]=Nc(t,Ti,Ii,e,Ai,un,n),new Mc(t)}function Fc(t=ar()){t=ze(t);const e=ot(t,St);return e.isInitialized()?e.getImmediate():Hc(t)}function Hc(t,e={}){const n=ot(t,St);if(n.isInitialized()){const r=n.getImmediate();if(Ot(e,n.getOptions()))return r;throw q.create("already-initialized")}return n.initialize({options:e})}function Mn(t,e,n,i){t=ze(t),Pc(Rr,Je[t.app.options.appId],e,n,i).catch(r=>M.error(r))}const xi="@firebase/analytics",Oi="0.10.0";function Vc(){ge(new re(St,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return jc(i,r,n)},"PUBLIC")),ge(new re("analytics-internal",t,"PRIVATE")),ee(xi,Oi),ee(xi,Oi,"esm2017");function t(e){try{const n=e.getProvider(St).getImmediate();return{logEvent:(i,r,s)=>Mn(n,i,r,s)}}catch(n){throw q.create("interop-component-reg-failed",{reason:n})}}}Vc();var qc="firebase",zc="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee(qc,zc,"app");const Wc={apiKey:"AIzaSyCAHZjMfbrnQFWn3LdQXaukMaSC5BhlhwE",authDomain:"ki67-app.firebaseapp.com",projectId:"ki67-app",storageBucket:"ki67-app.appspot.com",messagingSenderId:"56553490214",appId:"1:56553490214:web:2dd72d89abe43bd2ad23e7",measurementId:"G-E28RR3HLG2"},Pr=or(Wc),Br=Fc(Pr),Gc={class:"max-w-4xl"},Kc={class:"border border-gray-500 p-12"},Xc=["onSubmit"],Yc={class:"mt-4 text-center"},Jc=v("span",{class:"font-semibold"},"10X magnification",-1),Zc=v("a",{class:"font-semibold",href:"mailto:aaishah.raquib@gmail.com"},"aaishah.raquib@gmail.com.",-1),Qc=v("br",null,null,-1),el={class:"w-form"},tl=v("label",{class:"block label text-sm font-medium mt-5 text-gray-900"},"Threshold*",-1),nl=v("p",{class:"text-sm mb-2 text-gray-700"}," (The validated threshold is 0.56 - only change this if you know what you're doing.) ",-1),il=v("div",null,null,-1),rl=v("label",{for:"email",class:"block mb-2 label text-sm font-medium mt-5 text-gray-900"},"Upload your Image format*",-1),sl={ref:"imageValidator",style:{display:"none"}},ol=["src"],al={key:1,class:"flex flex-col justify-center items-center"},cl={id:"upload-icon",class:"icon"},ll={key:0,style:{color:"#6b7380"},id:"fileName",class:"text-xl"},ul={style:{color:"#6b7380"},class:"text-xl"},dl=v("div",{class:"border border-gray-500 border-dashed p-12 my-2"},[v("p",{class:"body-1 mb-3 text-center"}," Here is a representative example of the type of image that was used to validate the algorithm. If your image has markedly different contrast, resolution, lighting, quality, etc, then the algorithm might give inaccurate results. "),v("div",{class:"flex justify-center items-center"},[v("img",{src:Ns,class:"rounded-lg",alt:"sample"})])],-1),hl=me({__name:"CounterForm",setup(t){const e=st(),n=N("0.56"),i=N(!1),r=Ji(()=>{let c=new FormData;return c.append("image_file",e.formValues.image_file),c}),s=c=>{console.log({file:c[0]}),e.formValues.image_file=c[0],e.formValues.image_url=URL.createObjectURL(c[0])},o=()=>{var c;(((c=e.formValues)==null?void 0:c.image_url)??!1)&&(i.value=!0,window.scrollTo(0,0),document.body.scrollTop=0,e.countCell((a,l)=>{console.log(l),l&&ci({type:"error",title:l})},r.value).then(()=>{var a;Mn(Br,"task_completed",{task_name:"Uploaded An image"}),console.log((a=e.counterData)==null?void 0:a.data),e.currentStep=2,i.value=!1}).catch(a=>{console.log({err:a}),i.value=!1,ci({type:"error",title:a})}))};return(c,a)=>{var h;const l=de("snap"),u=de("app-input"),d=de("app-icon"),f=de("app-button");return H(),J("div",Gc,[v("div",Kc,[v("form",{class:"space-y-6",onSubmit:On(o,["prevent"])},[v("div",null,[v("p",Yc,[Z(" Please be informed that this app has only been validated/calibrated with "),F(l,{class:"font-semibold"},{default:Ce(()=>[Z("low-grade meningiomas")]),_:1}),Z(" at "),Jc,Z(". If there is demand, we will expand it in future updates. For questions, you can contact Aaishah Raquib at "),Zc,Z(),Qc,Z(" See below for an example of what your image should look like. Most recent revision 5/4/2024. ")]),v("div",el,[tl,nl,F(u,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=m=>n.value=m),name:"company",type:"text",class:"text-field-3 w-input focus:outline-0",placeholder:"Input the company name you are applying for",disabled:!0,required:""},null,8,["modelValue"]),il,rl,v("div",sl,null,512),F(Us,{onUpload:s},{default:Ce(()=>{var m,_,p,y,T,b;return[(m=P(e).formValues)!=null&&m.image_url?(H(),J("img",{key:0,src:(_=P(e).formValues)==null?void 0:_.image_url,class:"rounded-lg h-full",alt:"sample"},null,8,ol)):(H(),J("div",al,[v("div",cl,[F(d,{icon:"formkit:uploadcloud",width:"100px"})]),(p=P(e).formValues)!=null&&p.image_file?(H(),J("p",ll,pn((T=(y=P(e).formValues)==null?void 0:y.image_file)==null?void 0:T.name),1)):Rs("",!0),v("header",ul,pn(((b=P(e).formValues)==null?void 0:b.image_file)==null?"Drag or Upload image here":""),1)]))]}),_:1}),F(f,{disabled:!(((h=P(e).formValues)==null?void 0:h.image_url)??!1),loading:i.value},{default:Ce(()=>[Z(" Calculate ")]),_:1},8,["disabled","loading"])])])],40,Xc)]),dl])}}}),Lt=N();var fl=function(){function t(e,n){n===void 0&&(n=[]),this._eventType=e,this._eventFunctions=n}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(e._eventType,n)})},t}(),Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Rt.apply(this,arguments)},Pt={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},Nr=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=Pt),this._items=e,this._options=Rt(Rt({},Pt),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(n){n.active&&e.open(n.id),n.triggerEl.addEventListener("click",function(){e.toggle(n.id)})})},t.prototype.getItem=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.open=function(e){var n,i,r=this,s=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var c,a;o!==s&&((c=o.triggerEl.classList).remove.apply(c,r._options.activeClasses.split(" ")),(a=o.triggerEl.classList).add.apply(a,r._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=s.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(i=s.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},t.prototype.toggle=function(e){var n=this.getItem(e);n.active?this.close(e):this.open(e),this._options.onToggle(this,n)},t.prototype.close=function(e){var n,i,r=this.getItem(e);(n=r.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(i=r.triggerEl.classList).add.apply(i,this._options.inactiveClasses.split(" ")),r.targetEl.classList.add("hidden"),r.triggerEl.setAttribute("aria-expanded","false"),r.active=!1,r.iconEl&&r.iconEl.classList.remove("rotate-180"),this._options.onClose(this,r)},t}();typeof window<"u"&&(window.Accordion=Nr);function pl(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),n=t.getAttribute("data-active-classes"),i=t.getAttribute("data-inactive-classes"),r=[];t.querySelectorAll("[data-accordion-target]").forEach(function(s){var o={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};r.push(o)}),new Nr(r,{alwaysOpen:e==="open",activeClasses:n||Pt.activeClasses,inactiveClasses:i||Pt.inactiveClasses})})}var Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Bt.apply(this,arguments)},Ci={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},Mr=function(){function t(e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=Ci),this._targetEl=e,this._triggerEl=n,this._options=Bt(Bt({},Ci),i),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();typeof window<"u"&&(window.Collapse=Mr);function gl(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),n=document.getElementById(e);n?new Mr(n,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}var Ae=globalThis&&globalThis.__assign||function(){return Ae=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ae.apply(this,arguments)},It={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},$r=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=It),this._items=e,this._options=Ae(Ae(Ae({},It),n),{indicators:Ae(Ae({},It.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return t.prototype._init=function(){var e=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,i){n.el.addEventListener("click",function(){e.slideTo(i)})})},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var n=this._items[e],i={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(i),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this._getActiveItem(),n=null;e.position===this._items.length-1?n=this._items[0]:n=this._items[e.position+1],this.slideTo(n.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this._getActiveItem(),n=null;e.position===0?n=this._items[this._items.length-1]:n=this._items[e.position-1],this.slideTo(n.position),this._options.onPrev(this)},t.prototype._rotate=function(e){this._items.map(function(n){n.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var n,i,r=this;this._activeItem=e;var s=e.position;this._indicators.length&&(this._indicators.map(function(o){var c,a;o.el.setAttribute("aria-current","false"),(c=o.el.classList).remove.apply(c,r._options.indicators.activeClasses.split(" ")),(a=o.el.classList).add.apply(a,r._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[s].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(i=this._indicators[s].el.classList).remove.apply(i,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},t}();typeof window<"u"&&(window.Carousel=$r);function ml(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),n=t.getAttribute("data-carousel")==="slide",i=[],r=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(l,u){i.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(r=u)});var s=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(l){s.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new $r(i,{defaultPosition:r,indicators:{items:s},interval:e||It.interval});n&&o.cycle();var c=t.querySelector("[data-carousel-next]"),a=t.querySelector("[data-carousel-prev]");c&&c.addEventListener("click",function(){o.next()}),a&&a.addEventListener("click",function(){o.prev()})})}var Nt=globalThis&&globalThis.__assign||function(){return Nt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Nt.apply(this,arguments)},Di={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},Ur=function(){function t(e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=Di),this._targetEl=e,this._triggerEl=n,this._options=Nt(Nt({},Di),i),this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t}();typeof window<"u"&&(window.Dismiss=Ur);function vl(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),n=document.querySelector(e);n?new Ur(n,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}var $="top",W="bottom",G="right",U="left",$n="auto",at=[$,W,G,U],Fe="start",it="end",_l="clippingParents",jr="viewport",Xe="popper",bl="reference",Si=at.reduce(function(t,e){return t.concat([e+"-"+Fe,e+"-"+it])},[]),Fr=[].concat(at,[$n]).reduce(function(t,e){return t.concat([e,e+"-"+Fe,e+"-"+it])},[]),yl="beforeRead",wl="read",El="afterRead",Tl="beforeMain",Il="main",Al="afterMain",kl="beforeWrite",xl="write",Ol="afterWrite",Cl=[yl,wl,El,Tl,Il,Al,kl,xl,Ol];function ne(t){return t?(t.nodeName||"").toLowerCase():null}function K(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Be(t){var e=K(t).Element;return t instanceof e||t instanceof Element}function z(t){var e=K(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Un(t){if(typeof ShadowRoot>"u")return!1;var e=K(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Dl(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var i=e.styles[n]||{},r=e.attributes[n]||{},s=e.elements[n];!z(s)||!ne(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var c=r[o];c===!1?s.removeAttribute(o):s.setAttribute(o,c===!0?"":c)}))})}function Sl(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(i){var r=e.elements[i],s=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:n[i]),c=o.reduce(function(a,l){return a[l]="",a},{});!z(r)||!ne(r)||(Object.assign(r.style,c),Object.keys(s).forEach(function(a){r.removeAttribute(a)}))})}}const Ll={name:"applyStyles",enabled:!0,phase:"write",fn:Dl,effect:Sl,requires:["computeStyles"]};function te(t){return t.split("-")[0]}var De=Math.max,Mt=Math.min,He=Math.round;function In(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Hr(){return!/^((?!chrome|android).)*safari/i.test(In())}function Ve(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),r=1,s=1;e&&z(t)&&(r=t.offsetWidth>0&&He(i.width)/t.offsetWidth||1,s=t.offsetHeight>0&&He(i.height)/t.offsetHeight||1);var o=Be(t)?K(t):window,c=o.visualViewport,a=!Hr()&&n,l=(i.left+(a&&c?c.offsetLeft:0))/r,u=(i.top+(a&&c?c.offsetTop:0))/s,d=i.width/r,f=i.height/s;return{width:d,height:f,top:u,right:l+d,bottom:u+f,left:l,x:l,y:u}}function jn(t){var e=Ve(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function Vr(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Un(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function se(t){return K(t).getComputedStyle(t)}function Rl(t){return["table","td","th"].indexOf(ne(t))>=0}function _e(t){return((Be(t)?t.ownerDocument:t.document)||window.document).documentElement}function Kt(t){return ne(t)==="html"?t:t.assignedSlot||t.parentNode||(Un(t)?t.host:null)||_e(t)}function Li(t){return!z(t)||se(t).position==="fixed"?null:t.offsetParent}function Pl(t){var e=/firefox/i.test(In()),n=/Trident/i.test(In());if(n&&z(t)){var i=se(t);if(i.position==="fixed")return null}var r=Kt(t);for(Un(r)&&(r=r.host);z(r)&&["html","body"].indexOf(ne(r))<0;){var s=se(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function ct(t){for(var e=K(t),n=Li(t);n&&Rl(n)&&se(n).position==="static";)n=Li(n);return n&&(ne(n)==="html"||ne(n)==="body"&&se(n).position==="static")?e:n||Pl(t)||e}function Fn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ze(t,e,n){return De(t,Mt(e,n))}function Bl(t,e,n){var i=Ze(t,e,n);return i>n?n:i}function qr(){return{top:0,right:0,bottom:0,left:0}}function zr(t){return Object.assign({},qr(),t)}function Wr(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var Nl=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,zr(typeof e!="number"?e:Wr(e,at))};function Ml(t){var e,n=t.state,i=t.name,r=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,c=te(n.placement),a=Fn(c),l=[U,G].indexOf(c)>=0,u=l?"height":"width";if(!(!s||!o)){var d=Nl(r.padding,n),f=jn(s),h=a==="y"?$:U,m=a==="y"?W:G,_=n.rects.reference[u]+n.rects.reference[a]-o[a]-n.rects.popper[u],p=o[a]-n.rects.reference[a],y=ct(s),T=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,b=_/2-p/2,g=d[h],w=T-f[u]-d[m],E=T/2-f[u]/2+b,I=Ze(g,E,w),x=a;n.modifiersData[i]=(e={},e[x]=I,e.centerOffset=I-E,e)}}function $l(t){var e=t.state,n=t.options,i=n.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||Vr(e.elements.popper,r)&&(e.elements.arrow=r))}const Ul={name:"arrow",enabled:!0,phase:"main",fn:Ml,effect:$l,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function qe(t){return t.split("-")[1]}var jl={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fl(t){var e=t.x,n=t.y,i=window,r=i.devicePixelRatio||1;return{x:He(e*r)/r||0,y:He(n*r)/r||0}}function Ri(t){var e,n=t.popper,i=t.popperRect,r=t.placement,s=t.variation,o=t.offsets,c=t.position,a=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,d=t.isFixed,f=o.x,h=f===void 0?0:f,m=o.y,_=m===void 0?0:m,p=typeof u=="function"?u({x:h,y:_}):{x:h,y:_};h=p.x,_=p.y;var y=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),b=U,g=$,w=window;if(l){var E=ct(n),I="clientHeight",x="clientWidth";if(E===K(n)&&(E=_e(n),se(E).position!=="static"&&c==="absolute"&&(I="scrollHeight",x="scrollWidth")),E=E,r===$||(r===U||r===G)&&s===it){g=W;var C=d&&E===w&&w.visualViewport?w.visualViewport.height:E[I];_-=C-i.height,_*=a?1:-1}if(r===U||(r===$||r===W)&&s===it){b=G;var D=d&&E===w&&w.visualViewport?w.visualViewport.width:E[x];h-=D-i.width,h*=a?1:-1}}var S=Object.assign({position:c},l&&jl),X=u===!0?Fl({x:h,y:_}):{x:h,y:_};if(h=X.x,_=X.y,a){var L;return Object.assign({},S,(L={},L[g]=T?"0":"",L[b]=y?"0":"",L.transform=(w.devicePixelRatio||1)<=1?"translate("+h+"px, "+_+"px)":"translate3d("+h+"px, "+_+"px, 0)",L))}return Object.assign({},S,(e={},e[g]=T?_+"px":"",e[b]=y?h+"px":"",e.transform="",e))}function Hl(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=i===void 0?!0:i,s=n.adaptive,o=s===void 0?!0:s,c=n.roundOffsets,a=c===void 0?!0:c,l={placement:te(e.placement),variation:qe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ri(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:a})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ri(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Vl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Hl,data:{}};var mt={passive:!0};function ql(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,c=o===void 0?!0:o,a=K(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",n.update,mt)}),c&&a.addEventListener("resize",n.update,mt),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",n.update,mt)}),c&&a.removeEventListener("resize",n.update,mt)}}const zl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ql,data:{}};var Wl={left:"right",right:"left",bottom:"top",top:"bottom"};function At(t){return t.replace(/left|right|bottom|top/g,function(e){return Wl[e]})}var Gl={start:"end",end:"start"};function Pi(t){return t.replace(/start|end/g,function(e){return Gl[e]})}function Hn(t){var e=K(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Vn(t){return Ve(_e(t)).left+Hn(t).scrollLeft}function Kl(t,e){var n=K(t),i=_e(t),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,c=0,a=0;if(r){s=r.width,o=r.height;var l=Hr();(l||!l&&e==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:s,height:o,x:c+Vn(t),y:a}}function Xl(t){var e,n=_e(t),i=Hn(t),r=(e=t.ownerDocument)==null?void 0:e.body,s=De(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=De(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),c=-i.scrollLeft+Vn(t),a=-i.scrollTop;return se(r||n).direction==="rtl"&&(c+=De(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:c,y:a}}function qn(t){var e=se(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Gr(t){return["html","body","#document"].indexOf(ne(t))>=0?t.ownerDocument.body:z(t)&&qn(t)?t:Gr(Kt(t))}function Qe(t,e){var n;e===void 0&&(e=[]);var i=Gr(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=K(i),o=r?[s].concat(s.visualViewport||[],qn(i)?i:[]):i,c=e.concat(o);return r?c:c.concat(Qe(Kt(o)))}function An(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Yl(t,e){var n=Ve(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Bi(t,e,n){return e===jr?An(Kl(t,n)):Be(e)?Yl(e,n):An(Xl(_e(t)))}function Jl(t){var e=Qe(Kt(t)),n=["absolute","fixed"].indexOf(se(t).position)>=0,i=n&&z(t)?ct(t):t;return Be(i)?e.filter(function(r){return Be(r)&&Vr(r,i)&&ne(r)!=="body"}):[]}function Zl(t,e,n,i){var r=e==="clippingParents"?Jl(t):[].concat(e),s=[].concat(r,[n]),o=s[0],c=s.reduce(function(a,l){var u=Bi(t,l,i);return a.top=De(u.top,a.top),a.right=Mt(u.right,a.right),a.bottom=Mt(u.bottom,a.bottom),a.left=De(u.left,a.left),a},Bi(t,o,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function Kr(t){var e=t.reference,n=t.element,i=t.placement,r=i?te(i):null,s=i?qe(i):null,o=e.x+e.width/2-n.width/2,c=e.y+e.height/2-n.height/2,a;switch(r){case $:a={x:o,y:e.y-n.height};break;case W:a={x:o,y:e.y+e.height};break;case G:a={x:e.x+e.width,y:c};break;case U:a={x:e.x-n.width,y:c};break;default:a={x:e.x,y:e.y}}var l=r?Fn(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case Fe:a[l]=a[l]-(e[u]/2-n[u]/2);break;case it:a[l]=a[l]+(e[u]/2-n[u]/2);break}}return a}function rt(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=i===void 0?t.placement:i,s=n.strategy,o=s===void 0?t.strategy:s,c=n.boundary,a=c===void 0?_l:c,l=n.rootBoundary,u=l===void 0?jr:l,d=n.elementContext,f=d===void 0?Xe:d,h=n.altBoundary,m=h===void 0?!1:h,_=n.padding,p=_===void 0?0:_,y=zr(typeof p!="number"?p:Wr(p,at)),T=f===Xe?bl:Xe,b=t.rects.popper,g=t.elements[m?T:f],w=Zl(Be(g)?g:g.contextElement||_e(t.elements.popper),a,u,o),E=Ve(t.elements.reference),I=Kr({reference:E,element:b,strategy:"absolute",placement:r}),x=An(Object.assign({},b,I)),C=f===Xe?x:E,D={top:w.top-C.top+y.top,bottom:C.bottom-w.bottom+y.bottom,left:w.left-C.left+y.left,right:C.right-w.right+y.right},S=t.modifiersData.offset;if(f===Xe&&S){var X=S[r];Object.keys(D).forEach(function(L){var be=[G,W].indexOf(L)>=0?1:-1,ye=[$,W].indexOf(L)>=0?"y":"x";D[L]+=X[ye]*be})}return D}function Ql(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,c=n.flipVariations,a=n.allowedAutoPlacements,l=a===void 0?Fr:a,u=qe(i),d=u?c?Si:Si.filter(function(m){return qe(m)===u}):at,f=d.filter(function(m){return l.indexOf(m)>=0});f.length===0&&(f=d);var h=f.reduce(function(m,_){return m[_]=rt(t,{placement:_,boundary:r,rootBoundary:s,padding:o})[te(_)],m},{});return Object.keys(h).sort(function(m,_){return h[m]-h[_]})}function eu(t){if(te(t)===$n)return[];var e=At(t);return[Pi(t),e,Pi(e)]}function tu(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,c=o===void 0?!0:o,a=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,h=n.flipVariations,m=h===void 0?!0:h,_=n.allowedAutoPlacements,p=e.options.placement,y=te(p),T=y===p,b=a||(T||!m?[At(p)]:eu(p)),g=[p].concat(b).reduce(function(Me,oe){return Me.concat(te(oe)===$n?Ql(e,{placement:oe,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:_}):oe)},[]),w=e.rects.reference,E=e.rects.popper,I=new Map,x=!0,C=g[0],D=0;D<g.length;D++){var S=g[D],X=te(S),L=qe(S)===Fe,be=[$,W].indexOf(X)>=0,ye=be?"width":"height",j=rt(e,{placement:S,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),Y=be?L?G:U:L?W:$;w[ye]>E[ye]&&(Y=At(Y));var dt=At(Y),we=[];if(s&&we.push(j[X]<=0),c&&we.push(j[Y]<=0,j[dt]<=0),we.every(function(Me){return Me})){C=S,x=!1;break}I.set(S,we)}if(x)for(var ht=m?3:1,Yt=function(oe){var Ke=g.find(function(pt){var Ee=I.get(pt);if(Ee)return Ee.slice(0,oe).every(function(Jt){return Jt})});if(Ke)return C=Ke,"break"},Ge=ht;Ge>0;Ge--){var ft=Yt(Ge);if(ft==="break")break}e.placement!==C&&(e.modifiersData[i]._skip=!0,e.placement=C,e.reset=!0)}}const nu={name:"flip",enabled:!0,phase:"main",fn:tu,requiresIfExists:["offset"],data:{_skip:!1}};function Ni(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Mi(t){return[$,G,W,U].some(function(e){return t[e]>=0})}function iu(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=rt(e,{elementContext:"reference"}),c=rt(e,{altBoundary:!0}),a=Ni(o,i),l=Ni(c,r,s),u=Mi(a),d=Mi(l);e.modifiersData[n]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const ru={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:iu};function su(t,e,n){var i=te(t),r=[U,$].indexOf(i)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],c=s[1];return o=o||0,c=(c||0)*r,[U,G].indexOf(i)>=0?{x:c,y:o}:{x:o,y:c}}function ou(t){var e=t.state,n=t.options,i=t.name,r=n.offset,s=r===void 0?[0,0]:r,o=Fr.reduce(function(u,d){return u[d]=su(d,e.rects,s),u},{}),c=o[e.placement],a=c.x,l=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=o}const au={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ou};function cu(t){var e=t.state,n=t.name;e.modifiersData[n]=Kr({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const lu={name:"popperOffsets",enabled:!0,phase:"read",fn:cu,data:{}};function uu(t){return t==="x"?"y":"x"}function du(t){var e=t.state,n=t.options,i=t.name,r=n.mainAxis,s=r===void 0?!0:r,o=n.altAxis,c=o===void 0?!1:o,a=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,h=f===void 0?!0:f,m=n.tetherOffset,_=m===void 0?0:m,p=rt(e,{boundary:a,rootBoundary:l,padding:d,altBoundary:u}),y=te(e.placement),T=qe(e.placement),b=!T,g=Fn(y),w=uu(g),E=e.modifiersData.popperOffsets,I=e.rects.reference,x=e.rects.popper,C=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,D=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,X={x:0,y:0};if(E){if(s){var L,be=g==="y"?$:U,ye=g==="y"?W:G,j=g==="y"?"height":"width",Y=E[g],dt=Y+p[be],we=Y-p[ye],ht=h?-x[j]/2:0,Yt=T===Fe?I[j]:x[j],Ge=T===Fe?-x[j]:-I[j],ft=e.elements.arrow,Me=h&&ft?jn(ft):{width:0,height:0},oe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:qr(),Ke=oe[be],pt=oe[ye],Ee=Ze(0,I[j],Me[j]),Jt=b?I[j]/2-ht-Ee-Ke-D.mainAxis:Yt-Ee-Ke-D.mainAxis,ws=b?-I[j]/2+ht+Ee+pt+D.mainAxis:Ge+Ee+pt+D.mainAxis,Zt=e.elements.arrow&&ct(e.elements.arrow),Es=Zt?g==="y"?Zt.clientTop||0:Zt.clientLeft||0:0,Jn=(L=S==null?void 0:S[g])!=null?L:0,Ts=Y+Jt-Jn-Es,Is=Y+ws-Jn,Zn=Ze(h?Mt(dt,Ts):dt,Y,h?De(we,Is):we);E[g]=Zn,X[g]=Zn-Y}if(c){var Qn,As=g==="x"?$:U,ks=g==="x"?W:G,Te=E[w],gt=w==="y"?"height":"width",ei=Te+p[As],ti=Te-p[ks],Qt=[$,U].indexOf(y)!==-1,ni=(Qn=S==null?void 0:S[w])!=null?Qn:0,ii=Qt?ei:Te-I[gt]-x[gt]-ni+D.altAxis,ri=Qt?Te+I[gt]+x[gt]-ni-D.altAxis:ti,si=h&&Qt?Bl(ii,Te,ri):Ze(h?ii:ei,Te,h?ri:ti);E[w]=si,X[w]=si-Te}e.modifiersData[i]=X}}const hu={name:"preventOverflow",enabled:!0,phase:"main",fn:du,requiresIfExists:["offset"]};function fu(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function pu(t){return t===K(t)||!z(t)?Hn(t):fu(t)}function gu(t){var e=t.getBoundingClientRect(),n=He(e.width)/t.offsetWidth||1,i=He(e.height)/t.offsetHeight||1;return n!==1||i!==1}function mu(t,e,n){n===void 0&&(n=!1);var i=z(e),r=z(e)&&gu(e),s=_e(e),o=Ve(t,r,n),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!n)&&((ne(e)!=="body"||qn(s))&&(c=pu(e)),z(e)?(a=Ve(e,!0),a.x+=e.clientLeft,a.y+=e.clientTop):s&&(a.x=Vn(s))),{x:o.left+c.scrollLeft-a.x,y:o.top+c.scrollTop-a.y,width:o.width,height:o.height}}function vu(t){var e=new Map,n=new Set,i=[];t.forEach(function(s){e.set(s.name,s)});function r(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(c){if(!n.has(c)){var a=e.get(c);a&&r(a)}}),i.push(s)}return t.forEach(function(s){n.has(s.name)||r(s)}),i}function _u(t){var e=vu(t);return Cl.reduce(function(n,i){return n.concat(e.filter(function(r){return r.phase===i}))},[])}function bu(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function yu(t){var e=t.reduce(function(n,i){var r=n[i.name];return n[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var $i={placement:"bottom",modifiers:[],strategy:"absolute"};function Ui(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function wu(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,r=e.defaultOptions,s=r===void 0?$i:r;return function(c,a,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},$i,s),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},d=[],f=!1,h={state:u,setOptions:function(y){var T=typeof y=="function"?y(u.options):y;_(),u.options=Object.assign({},s,u.options,T),u.scrollParents={reference:Be(c)?Qe(c):c.contextElement?Qe(c.contextElement):[],popper:Qe(a)};var b=_u(yu([].concat(i,u.options.modifiers)));return u.orderedModifiers=b.filter(function(g){return g.enabled}),m(),h.update()},forceUpdate:function(){if(!f){var y=u.elements,T=y.reference,b=y.popper;if(Ui(T,b)){u.rects={reference:mu(T,ct(b),u.options.strategy==="fixed"),popper:jn(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(D){return u.modifiersData[D.name]=Object.assign({},D.data)});for(var g=0;g<u.orderedModifiers.length;g++){if(u.reset===!0){u.reset=!1,g=-1;continue}var w=u.orderedModifiers[g],E=w.fn,I=w.options,x=I===void 0?{}:I,C=w.name;typeof E=="function"&&(u=E({state:u,options:x,name:C,instance:h})||u)}}}},update:bu(function(){return new Promise(function(p){h.forceUpdate(),p(u)})}),destroy:function(){_(),f=!0}};if(!Ui(c,a))return h;h.setOptions(l).then(function(p){!f&&l.onFirstUpdate&&l.onFirstUpdate(p)});function m(){u.orderedModifiers.forEach(function(p){var y=p.name,T=p.options,b=T===void 0?{}:T,g=p.effect;if(typeof g=="function"){var w=g({state:u,name:y,instance:h,options:b}),E=function(){};d.push(w||E)}})}function _(){d.forEach(function(p){return p()}),d=[]}return h}}var Eu=[zl,lu,Vl,Ll,au,nu,hu,Ul,ru],zn=wu({defaultModifiers:Eu}),ae=globalThis&&globalThis.__assign||function(){return ae=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ae.apply(this,arguments)},vt=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},ke={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},Xr=function(){function t(e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=ke),this._targetEl=e,this._triggerEl=n,this._options=ae(ae({},ke),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){e.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){i==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(i,function(){e.show()})}),n.hideEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(i,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},t.prototype._createPopperInstance=function(){return zn(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var i=e.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return ae(ae({},e),{modifiers:vt(vt([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return ae(ae({},e),{modifiers:vt(vt([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();typeof window<"u"&&(window.Dropdown=Xr);function Tu(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),n=document.getElementById(e);if(n){var i=t.getAttribute("data-dropdown-placement"),r=t.getAttribute("data-dropdown-offset-skidding"),s=t.getAttribute("data-dropdown-offset-distance"),o=t.getAttribute("data-dropdown-trigger"),c=t.getAttribute("data-dropdown-delay");new Xr(n,t,{placement:i||ke.placement,triggerType:o||ke.triggerType,offsetSkidding:r?parseInt(r):ke.offsetSkidding,offsetDistance:s?parseInt(s):ke.offsetDistance,delay:c?parseInt(c):ke.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}var $t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},$t.apply(this,arguments)},je={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},Ut=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=je),this._targetEl=e,this._options=$t($t({},je),n),this._isHidden=!0,this._backdropEl=null,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(n){e._targetEl.classList.add(n)})},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){e._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t}();typeof window<"u"&&(window.Modal=Ut);var _t=function(t,e){return e.some(function(n){return n.id===t})?e.find(function(n){return n.id===t}):null};function Iu(){var t=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var n=e.getAttribute("data-modal-target"),i=document.getElementById(n);if(i){var r=i.getAttribute("data-modal-placement"),s=i.getAttribute("data-modal-backdrop");_t(n,t)||t.push({id:n,object:new Ut(i,{placement:r||je.placement,backdrop:s||je.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var n=e.getAttribute("data-modal-toggle"),i=document.getElementById(n);if(i){var r=i.getAttribute("data-modal-placement"),s=i.getAttribute("data-modal-backdrop"),o=_t(n,t);o||(o={id:n,object:new Ut(i,{placement:r||je.placement,backdrop:s||je.backdrop})},t.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var n=e.getAttribute("data-modal-show"),i=document.getElementById(n);if(i){var r=_t(n,t);r?e.addEventListener("click",function(){r.object.isHidden&&r.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var n=e.getAttribute("data-modal-hide"),i=document.getElementById(n);if(i){var r=_t(n,t);r?e.addEventListener("click",function(){r.object.isVisible&&r.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}var jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},jt.apply(this,arguments)},xe={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Yr=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=xe),this._targetEl=e,this._options=jt(jt({},xe),n),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){e._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.isVisible()&&e.hide()})},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,n=this;if(!this._visible){var i=document.createElement("div");i.setAttribute("drawer-backdrop",""),(e=i.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(i),i.addEventListener("click",function(){n.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t}();typeof window<"u"&&(window.Drawer=Yr);var bt=function(t,e){if(e.some(function(n){return n.id===t}))return e.find(function(n){return n.id===t})};function Au(){var t=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var n=e.getAttribute("data-drawer-target"),i=document.getElementById(n);if(i){var r=e.getAttribute("data-drawer-placement"),s=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),c=e.getAttribute("data-drawer-edge"),a=e.getAttribute("data-drawer-edge-offset");bt(n,t)||t.push({id:n,object:new Yr(i,{placement:r||xe.placement,bodyScrolling:s?s==="true":xe.bodyScrolling,backdrop:o?o==="true":xe.backdrop,edge:c?c==="true":xe.edge,edgeOffset:a||xe.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var n=e.getAttribute("data-drawer-toggle"),i=document.getElementById(n);if(i){var r=bt(n,t);r?e.addEventListener("click",function(){r.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var n=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),i=document.getElementById(n);if(i){var r=bt(n,t);r?e.addEventListener("click",function(){r.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var n=e.getAttribute("data-drawer-show"),i=document.getElementById(n);if(i){var r=bt(n,t);r?e.addEventListener("click",function(){r.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}var Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ft.apply(this,arguments)},ji={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},Jr=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=ji),this._items=e,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=Ft(Ft({},ji),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){e.show(n.id)})}))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.show=function(e,n){var i,r,s=this;n===void 0&&(n=!1);var o=this.getTab(e);o===this._activeTab&&!n||(this._items.map(function(c){var a,l;c!==o&&((a=c.triggerEl.classList).remove.apply(a,s._options.activeClasses.split(" ")),(l=c.triggerEl.classList).add.apply(l,s._options.inactiveClasses.split(" ")),c.targetEl.classList.add("hidden"),c.triggerEl.setAttribute("aria-selected","false"))}),(i=o.triggerEl.classList).add.apply(i,this._options.activeClasses.split(" ")),(r=o.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},t}();typeof window<"u"&&(window.Tabs=Jr);function ku(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],n=null;t.querySelectorAll('[role="tab"]').forEach(function(i){var r=i.getAttribute("aria-selected")==="true",s={id:i.getAttribute("data-tabs-target"),triggerEl:i,targetEl:document.querySelector(i.getAttribute("data-tabs-target"))};e.push(s),r&&(n=s.id)}),new Jr(e,{defaultTabId:n})})}var ce=globalThis&&globalThis.__assign||function(){return ce=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ce.apply(this,arguments)},yt=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},Ht={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Zr=function(){function t(e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=Ht),this._targetEl=e,this._triggerEl=n,this._options=ce(ce({},Ht),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){e.show()})}),n.hideEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){e.hide()})})},t.prototype._createPopperInstance=function(){return zn(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var i=e.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return ce(ce({},e),{modifiers:yt(yt([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return ce(ce({},e),{modifiers:yt(yt([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();typeof window<"u"&&(window.Tooltip=Zr);function xu(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),n=document.getElementById(e);if(n){var i=t.getAttribute("data-tooltip-trigger"),r=t.getAttribute("data-tooltip-placement");new Zr(n,t,{placement:r||Ht.placement,triggerType:i||Ht.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}var le=globalThis&&globalThis.__assign||function(){return le=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},le.apply(this,arguments)},wt=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},et={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Qr=function(){function t(e,n,i){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=et),this._targetEl=e,this._triggerEl=n,this._options=le(le({},et),i),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){e.show()}),e._targetEl.addEventListener(i,function(){e.show()})}),n.hideEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(i,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},t.prototype._createPopperInstance=function(){return zn(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var i=e.target;i!==n&&!n.contains(i)&&!this._triggerEl.contains(i)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return le(le({},e),{modifiers:wt(wt([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return le(le({},e),{modifiers:wt(wt([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();typeof window<"u"&&(window.Popover=Qr);function Ou(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),n=document.getElementById(e);if(n){var i=t.getAttribute("data-popover-trigger"),r=t.getAttribute("data-popover-placement"),s=t.getAttribute("data-popover-offset");new Qr(n,t,{placement:r||et.placement,offset:s?parseInt(s):et.offset,triggerType:i||et.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}var Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Vt.apply(this,arguments)},kn={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},es=function(){function t(e,n,i,r){e===void 0&&(e=null),n===void 0&&(n=null),i===void 0&&(i=null),r===void 0&&(r=kn),this._parentEl=e,this._triggerEl=n,this._targetEl=i,this._options=Vt(Vt({},kn),r),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(i){e._triggerEl.addEventListener(i,function(){e.show()}),e._targetEl.addEventListener(i,function(){e.show()})}),n.hideEvents.forEach(function(i){e._parentEl.addEventListener(i,function(){e._parentEl.matches(":hover")||e.hide()})})}},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t}();typeof window<"u"&&(window.Dial=es);function Cu(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var n=e.getAttribute("data-dial-toggle"),i=document.getElementById(n);if(i){var r=e.getAttribute("data-dial-trigger");new es(t,e,i,{triggerType:r||kn.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}var Du=new fl("load",[pl,gl,ml,vl,Tu,Iu,Au,ku,xu,Ou,Cu]);Du.init();const Su=t=>{const e={placement:"bottom-right",backdrop:"dynamic",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",closable:!1,onHide:()=>{console.log("modal is hidden")},onShow:()=>{console.log("modal is shown")},onToggle:()=>{console.log("modal has been toggled")}};return new Ut(t,e)},Lu=v("div",{class:"tooltip-arrow","data-popper-arrow":""},null,-1),Ru=me({__name:"FeedBackModal",setup(t,{expose:e}){const n=N();return e({show:()=>{if(n.value){Lt.value=Su(n.value),Lt.value.show();return}alert("no element")}}),(r,s)=>(H(),J("div",{ref_key:"rideOptionsModal",ref:n,tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"},[kt(r.$slots,"default"),Lu],512))}}),Pu={class:"relative p-4 w-full lg:w-[744px] h-full"},Bu={class:"relative p-4 ] bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 min-h-[500px]"},Nu={class:"flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-100"},Mu=v("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),$u=v("span",{class:"sr-only"},"Close modal",-1),Uu=[Mu,$u],ju=me({__name:"ModalWrapper",emits:["close"],setup(t,{emit:e}){return(n,i)=>(H(),J("div",Pu,[v("div",Bu,[v("div",Nu,[kt(n.$slots,"header"),v("button",{type:"button",onClick:i[0]||(i[0]=r=>e("close")),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"defaultModal"},Uu)]),kt(n.$slots,"default")])]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="firebasestorage.googleapis.com",ns="storageBucket",Fu=2*60*1e3,Hu=10*60*1e3,Vu=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O extends ve{constructor(e,n,i=0){super(dn(e),`Firebase Storage: ${n} (${dn(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,O.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var k;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function dn(t){return"storage/"+t}function Wn(){const t="An unknown error occurred, please check the error payload for server response.";return new O(k.UNKNOWN,t)}function qu(t){return new O(k.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zu(t){return new O(k.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Wu(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new O(k.UNAUTHENTICATED,t)}function Gu(){return new O(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ku(t){return new O(k.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function is(){return new O(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rs(){return new O(k.CANCELED,"User canceled the upload/download.")}function Xu(t){return new O(k.INVALID_URL,"Invalid URL '"+t+"'.")}function Yu(t){return new O(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ju(){return new O(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ns+"' property when initializing the app?")}function ss(){return new O(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Zu(){return new O(k.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Qu(){return new O(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ed(t){return new O(k.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xn(t){return new O(k.INVALID_ARGUMENT,t)}function os(){return new O(k.APP_DELETED,"The Firebase app was deleted.")}function td(t){return new O(k.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function tt(t,e){return new O(k.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ye(t){throw new O(k.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=V.makeFromUrl(e,n)}catch{return new V(e,"")}if(i.path==="")return i;throw Yu(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function l(g){g.path_=decodeURIComponent(g.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp(`^https?://${d}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},_=n===ts?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",y=new RegExp(`^https?://${_}/${r}/${p}`,"i"),b=[{regex:c,indices:a,postModify:s},{regex:h,indices:m,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let g=0;g<b.length;g++){const w=b[g],E=w.regex.exec(e);if(E){const I=E[w.indices.bucket];let x=E[w.indices.path];x||(x=""),i=new V(I,x),w.postModify(i);break}}if(i==null)throw Xu(e);return i}}class nd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e,n){let i=1,r=null,s=null,o=!1,c=0;function a(){return c===2}let l=!1;function u(...p){l||(l=!0,e.apply(null,p))}function d(p){r=setTimeout(()=>{r=null,t(h,a())},p)}function f(){s&&clearTimeout(s)}function h(p,...y){if(l){f();return}if(p){f(),u.call(null,p,...y);return}if(a()||o){f(),u.call(null,p,...y);return}i<64&&(i*=2);let b;c===1?(c=2,b=0):b=(i+Math.random())*1e3,d(b)}let m=!1;function _(p){m||(m=!0,f(),!l&&(r!==null?(p||(c=2),clearTimeout(r),d(0)):p||(c=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function rd(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return t!==void 0}function od(t){return typeof t=="function"}function ad(t){return typeof t=="object"&&!Array.isArray(t)}function Xt(t){return typeof t=="string"||t instanceof String}function Fi(t){return Gn()&&t instanceof Blob}function Gn(){return typeof Blob<"u"&&!Zs()}function Hi(t,e,n,i){if(i<e)throw xn(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw xn(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function as(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Se||(Se={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,i,r,s,o,c,a,l,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,m)=>{this.resolve_=h,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Et(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Se.NO_ERROR,a=s.getStatus();if(!c||cs(a,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Se.ABORT;i(!1,new Et(!1,null,u));return}const l=this.successCodes_.indexOf(a)!==-1;i(!0,new Et(l,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());sd(a)?s(a):s()}catch(a){o(a)}else if(c!==null){const a=Wn();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?os():rs();o(a)}else{const a=is();o(a)}};this.canceled_?n(!1,new Et(!1,null,!0)):this.backoffId_=id(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Et{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function ld(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ud(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hd(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fd(t,e,n,i,r,s,o=!0){const c=as(t.urlParams),a=t.url+c,l=Object.assign({},t.headers);return dd(l,e),ld(l,n),ud(l,s),hd(l,i),new cd(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gd(...t){const e=pd();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Gn())return new Blob(t);throw new O(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function md(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){if(typeof atob>"u")throw ed("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hn{constructor(e,n){this.data=e,this.contentType=n||null}}function _d(t,e){switch(t){case Q.RAW:return new hn(ls(e));case Q.BASE64:case Q.BASE64URL:return new hn(us(t,e));case Q.DATA_URL:return new hn(yd(e),wd(e))}throw Wn()}function ls(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function bd(t){let e;try{e=decodeURIComponent(t)}catch{throw tt(Q.DATA_URL,"Malformed data URL.")}return ls(e)}function us(t,e){switch(t){case Q.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw tt(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Q.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw tt(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vd(e)}catch(r){throw r.message.includes("polyfill")?r:tt(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class ds{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw tt(Q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=Ed(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function yd(t){const e=new ds(t);return e.base64?us(Q.BASE64,e.rest):bd(e.rest)}function wd(t){return new ds(t).contentType}function Ed(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){let i=0,r="";Fi(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Fi(this.data_)){const i=this.data_,r=md(i,e,n);return r===null?null:new ue(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new ue(i,!0)}}static getBlob(...e){if(Gn()){const n=e.map(i=>i instanceof ue?i.data_:i);return new ue(gd.apply(null,n))}else{const n=e.map(o=>Xt(o)?_d(Q.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)r[s++]=o[c]}),new ue(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){let e;try{e=JSON.parse(t)}catch{return null}return ad(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Id(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function fs(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){return e}class R{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||Ad}}let Tt=null;function kd(t){return!Xt(t)||t.length<2?t:fs(t)}function ps(){if(Tt)return Tt;const t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(s,o){return kd(o)}const n=new R("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new R("size");return r.xform=i,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),Tt=t,Tt}function xd(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new V(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Od(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return xd(i,t),i}function gs(t,e,n){const i=hs(e);return i===null?null:Od(t,i,n)}function Cd(t,e,n,i){const r=hs(e);if(r===null||!Xt(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),h=lt(f,n,i),m=as({alt:"media",token:l});return h+m})[0]}function ms(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class We{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){if(!t)throw Wn()}function Kn(t,e){function n(i,r){const s=gs(t,r,e);return ie(s!==null),s}return n}function Dd(t,e){function n(i,r){const s=gs(t,r,e);return ie(s!==null),Cd(s,r,t.host,t._protocol)}return n}function ut(t){function e(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Gu():r=Wu():n.getStatus()===402?r=zu(t.bucket):n.getStatus()===403?r=Ku(t.path):r=i,r.status=n.getStatus(),r.serverResponse=i.serverResponse,r}return e}function vs(t){const e=ut(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=qu(t.path)),s.serverResponse=r.serverResponse,s}return n}function Sd(t,e,n){const i=e.fullServerUrl(),r=lt(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,c=new We(r,s,Kn(t,n),o);return c.errorHandler=vs(e),c}function Ld(t,e,n){const i=e.fullServerUrl(),r=lt(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,c=new We(r,s,Dd(t,n),o);return c.errorHandler=vs(e),c}function Rd(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _s(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=Rd(null,e)),i}function Pd(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let b="";for(let g=0;g<2;g++)b=b+Math.random().toString().slice(2);return b}const a=c();o["Content-Type"]="multipart/related; boundary="+a;const l=_s(e,i,r),u=ms(l,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+a+"--",h=ue.getBlob(d,i,f);if(h===null)throw ss();const m={name:l.fullPath},_=lt(s,t.host,t._protocol),p="POST",y=t.maxUploadRetryTime,T=new We(_,p,Kn(t,n),y);return T.urlParams=m,T.headers=o,T.body=h.uploadData(),T.errorHandler=ut(e),T}class qt{constructor(e,n,i,r){this.current=e,this.total=n,this.finalized=!!i,this.metadata=r||null}}function Xn(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ie(!1)}return ie(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Bd(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=_s(e,i,r),c={name:o.fullPath},a=lt(s,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=ms(o,n),f=t.maxUploadRetryTime;function h(_){Xn(_);let p;try{p=_.getResponseHeader("X-Goog-Upload-URL")}catch{ie(!1)}return ie(Xt(p)),p}const m=new We(a,l,h,f);return m.urlParams=c,m.headers=u,m.body=d,m.errorHandler=ut(e),m}function Nd(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(l){const u=Xn(l,["active","final"]);let d=null;try{d=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ie(!1)}d||ie(!1);const f=Number(d);return ie(!isNaN(f)),new qt(f,i.size(),u==="final")}const o="POST",c=t.maxUploadRetryTime,a=new We(n,o,s,c);return a.headers=r,a.errorHandler=ut(e),a}const Vi=256*1024;function Md(t,e,n,i,r,s,o,c){const a=new qt(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=i.size()),i.size()!==a.total)throw Zu();const l=a.total-a.current;let u=l;r>0&&(u=Math.min(u,r));const d=a.current,f=d+u;let h="";u===0?h="finalize":l===u?h="upload, finalize":h="upload";const m={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":`${a.current}`},_=i.slice(d,f);if(_===null)throw ss();function p(g,w){const E=Xn(g,["active","final"]),I=a.current+u,x=i.size();let C;return E==="final"?C=Kn(e,s)(g,w):C=null,new qt(I,x,E==="final",C)}const y="POST",T=e.maxUploadRetryTime,b=new We(n,y,p,T);return b.headers=m,b.body=_.uploadData(),b.progressCallback=c||null,b.errorHandler=ut(t),b}const B={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function fn(t){switch(t){case"running":case"pausing":case"canceling":return B.RUNNING;case"paused":return B.PAUSED;case"success":return B.SUCCESS;case"canceled":return B.CANCELED;case"error":return B.ERROR;default:return B.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,i){if(od(e)||n!=null||i!=null)this.next=e,this.error=n??void 0,this.complete=i??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Ud{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Se.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Se.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Se.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw Ye("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ye("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ye("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ye("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ye("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jd extends Ud{initXhr(){this.xhr_.responseType="text"}}function Ue(){return new jd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=i,this._mappings=ps(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(k.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(cs(r.status,[]))if(s)r=is();else{this.sleepTime=Math.max(this.sleepTime*2,Vu),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(k.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,s)=>{this._resolve=r,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,i])=>{switch(this._state){case"running":e(n,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const i=Bd(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(i,Ue,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,i)=>{const r=Nd(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,Ue,n,i);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Vi*this._chunkMultiplier,n=new qt(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((r,s)=>{let o;try{o=Md(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const c=this._ref.storage._makeRequest(o,Ue,r,s,!1);this._request=c,c.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Vi*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const i=Sd(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(i,Ue,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const i=Pd(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(i,Ue,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=rs(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=fn(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,i,r){const s=new $d(n||void 0,i||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(fn(this._state)){case B.SUCCESS:$e(this._resolve.bind(null,this.snapshot))();break;case B.CANCELED:case B.ERROR:const n=this._reject;$e(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(fn(this._state)){case B.RUNNING:case B.PAUSED:e.next&&$e(e.next.bind(e,this.snapshot))();break;case B.SUCCESS:e.complete&&$e(e.complete.bind(e))();break;case B.CANCELED:case B.ERROR:e.error&&$e(e.error.bind(e,this._error))();break;default:e.error&&$e(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this._service=e,n instanceof V?this._location=n:this._location=V.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ne(e,n)}get root(){const e=new V(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fs(this._location.path)}get storage(){return this._service}get parent(){const e=Td(this._location.path);if(e===null)return null;const n=new V(this._location.bucket,e);return new Ne(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw td(e)}}function Hd(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Fd(t,new ue(e),n)}function Vd(t){t._throwIfRoot("getDownloadURL");const e=Ld(t.storage,t._location,ps());return t.storage.makeRequestWithTokens(e,Ue).then(n=>{if(n===null)throw Qu();return n})}function qd(t,e){const n=Id(t._location.path,e),i=new V(t._location.bucket,n);return new Ne(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return/^[A-Za-z]+:\/\//.test(t)}function Wd(t,e){return new Ne(t,e)}function bs(t,e){if(t instanceof Yn){const n=t;if(n._bucket==null)throw Ju();const i=new Ne(n,n._bucket);return e!=null?bs(i,e):i}else return e!==void 0?qd(t,e):t}function Gd(t,e){if(e&&zd(e)){if(t instanceof Yn)return Wd(t,e);throw xn("To use ref(service, url), the first argument must be a Storage instance.")}else return bs(t,e)}function qi(t,e){const n=e==null?void 0:e[ns];return n==null?null:V.makeFromBucketSpec(n,t)}function Kd(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:Js(r,t.app.options.projectId))}class Yn{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=ts,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fu,this._maxUploadRetryTime=Hu,this._requests=new Set,r!=null?this._bucket=V.makeFromBucketSpec(r,this._host):this._bucket=qi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=V.makeFromBucketSpec(this._url,e):this._bucket=qi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ne(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new nd(os());{const o=fd(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const zi="@firebase/storage",Wi="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="storage";function Xd(t,e,n){return t=ze(t),Hd(t,e,n)}function Yd(t){return t=ze(t),Vd(t)}function Jd(t,e){return t=ze(t),Gd(t,e)}function Zd(t=ar(),e){t=ze(t);const i=ot(t,ys).getImmediate({identifier:e}),r=Xs("storage");return r&&Qd(i,...r),i}function Qd(t,e,n,i={}){Kd(t,e,n,i)}function eh(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Yn(n,i,r,e,sa)}function th(){ge(new re(ys,eh,"PUBLIC").setMultipleInstances(!0)),ee(zi,Wi,""),ee(zi,Wi,"esm2017")}th();const nh=Zd(Pr),ih=(t,e,n,i,r,s)=>new Promise((o,c)=>{const a={},l=Jd(nh,`${e}/${t}`),u=Xd(l,n);u.on("state_changed",d=>{const f=d.bytesTransferred/d.totalBytes*100;switch(r==null||r(`${f} + %`),console.log("Upload is "+f+"% done"),d.state){case"paused":console.log("Upload is paused"),s==null||s("Upload is paused ");break;case"running":s==null||s("Upload is running"),console.log("Upload is running");break;case"success":s==null||s("Upload is successfully"),console.log("Upload is successfully");break;case"canceled":s==null||s("Upload is canceled"),console.log("Upload is canceled");break;case"error":s==null||s("Upload is error"),console.log("Upload is error");break}},d=>{switch(a.status=!1,a.message=d.message,i==null||i(a),d.code){case"storage/unauthorized":console.log("User does'nt have permission to access the object");break;case"storage/canceled":console.log("user canceled the upload");break;case"storage/unknown":console.log("Unknown error occurred, inspect error.serverResponse");break}c(a)},()=>{Yd(u.snapshot.ref).then(d=>{console.log("File available at",d),a.status=!0,a.url=d,i==null||i(a),o(a)})})}),rh=v("p",{class:"text-center text-2xl font-semibold w-full"}," Report a discrepancy ",-1),sh=["onSubmit"],oh=me({__name:"FeedBack",setup(t){const e=N(!1),n=st(),i=N(""),r=N(""),s=async()=>{var u,d;if(!i.value||!r.value)return;const a=await c(),l=JSON.stringify({expectedCount:i.value+"%",count:Math.ceil((((d=(u=n.counterData)==null?void 0:u.data)==null?void 0:d.count)??0)*100)/100+"%",imageUrl:a,comments:r.value,to:"aaishah.raquib@gmail.com"});e.value=!0,window.scrollTo(0,0),document.body.scrollTop=0,e.value=!0,Bs({url:"https://script.google.com/macros/s/AKfycbxXVAc-gsUOF0UeT2l13Odm86phnzMrHDwhagSmFjh3rVsbLcyP3ePxQWMc9ho_NwuL/exec",body:l,result:({data:f})=>{e.value=!e.value,console.log({data:f}),o()},error:f=>{console.log({err:f}),alert("an error occured")},onFinally:()=>{e.value=!e.value}})},o=()=>{var a;(a=Lt.value)==null||a.hide()},c=async()=>{if(e.value=!0,n.formValues.image_file){const a=(await ih(new Date+"","report",n.formValues.image_file)).url;return e.value=!1,a}};return Yi(()=>{var a;(a=Lt.value)==null||a.hide()}),(a,l)=>{const u=de("app-input"),d=de("app-textarea"),f=de("app-button");return H(),J("div",null,[F(ju,{onClose:o},{header:Ce(()=>[rh]),default:Ce(()=>[v("form",{onSubmit:On(s,["prevent"])},[F(u,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=h=>i.value=h),name:"company",type:"text",label:"What do you think the count should have been? It's OK if you only have a rough approximation.",class:"text-field-3 w-input focus:outline-0 border-none px-4",placeholder:"",disabled:!0,required:""},null,8,["modelValue"]),F(d,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=h=>r.value=h),name:"company",type:"text",label:"Do you have any other comments?",class:"text-field-3 w-input focus:outline-0 border-none",placeholder:"",disabled:!0,required:""},null,8,["modelValue"]),F(f,{loading:e.value},{default:Ce(()=>[Z(" Proceed")]),_:1},8,["loading"])],40,sh)]),_:1})])}}}),ah={class:"max-w-4xl"},ch={class:"border border-gray-500 border-dashed p-12 my-2"},lh=v("span",null," Below are the images that we generated to separate the different cell types. Please review the images to make sure that we correctly classified Ki-67 positive versus negative cells. If they look wrong, you may optionally. ",-1),uh=v("span",null,"to report a discrepancy so that we can fix it for the next version.",-1),dh={class:"font-bold text-6xl text-primary text-center my-5"},hh={class:"grid md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center"},fh=["src"],ph=v("p",{class:"font-semibold mb-3 text-center"},"Ki67 positive",-1),gh=["src"],mh=v("p",{class:"font-semibold mb-3 text-center"},"Ki67 Negative",-1),vh=me({__name:"ResultView",setup(t){const e=st(),n=N(null),i=()=>{n.value&&n.value.show()},r=Ji(()=>{var s,o;return Math.ceil((((o=(s=e.counterData)==null?void 0:s.data)==null?void 0:o.count)??0)*100)/100});return(s,o)=>{var c,a;return H(),J("div",ah,[F(Ru,{ref_key:"feedBackRef",ref:n},{default:Ce(()=>[F(oh)]),_:1},512),v("div",ch,[v("div",{class:"mb-3 text-center gap-1"},[lh,v("button",{onClick:i,class:"pr-1 font-semibold text-primary underline"}," click here "),uh]),v("div",null,[v("p",dh,pn(P(r)>95?">95":P(r))+"% ",1)]),v("div",hh,[v("div",null,[v("img",{src:P(gn)+((c=P(e).counterData)==null?void 0:c.data.output1),class:"rounded-lg",alt:"sample"},null,8,fh),ph]),v("div",null,[v("img",{src:P(gn)+((a=P(e).counterData)==null?void 0:a.data.output2),class:"rounded-lg",alt:"sample"},null,8,gh),mh])])])])}}}),_h={class:"flex items-center w-full p-3 mb-3 gap-2 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"},bh=v("svg",{class:"w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 10"},[v("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m7 9 4-4-4-4M1 9l4-4-4-4"})],-1),yh=me({__name:"StepBar",props:{currentStep:null},setup(t){const e=st(),n=()=>{var i;(i=e.counterData)!=null&&i.data.count&&(e.currentStep=2)};return(i,r)=>{const s=de("app-icon");return H(),J("div",null,[v("ol",_h,[v("li",{onClick:r[0]||(r[0]=o=>P(e).currentStep=1),class:oi(["flex items-center gap-2 cursor-default",{"text-blue-600 dark:text-blue-500":(t.currentStep??1)===1}])},[Z(" Detection Form "),bh],2),v("li",{onClick:n,class:oi(["flex items-center gap-3 cursor-default",{"text-blue-600 dark:text-blue-5000":(t.currentStep??1)===2}])},[Z(" Ki-67 count "),F(s,{icon:"fluent-mdl2:completed",width:"15px"})],2)])])}}}),wh={class:"flex flex-col justify-center items-center mt-20"},Eh=v("h1",{class:"text-4xl text-center mb-10",style:{color:"#bc49d3"}}," Ki-67 counter ",-1),Ih=me({__name:"HomeView",setup(t){const e=st();return Xi(()=>{Mn(Br,"page_view",{page_path:"/"})}),(n,i)=>(H(),J("div",wh,[Eh,F(yh,{"current-step":P(e).currentStep},null,8,["current-step"]),P(e).currentStep==1?(H(),ai(hl,{key:0})):(H(),ai(vh,{key:1}))]))}});export{Ih as default};
