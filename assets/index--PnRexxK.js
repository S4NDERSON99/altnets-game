(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ef="modulepreload",Af=function(s){return"/altnets-game/"+s},lh={},Xa=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=Af(c),c in lh)return;lh[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ef,l||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="169",Rf=0,hh=1,Cf=2,id=1,sd=2,Zn=3,si=0,Vt=1,_n=2,Bt=0,Ts=1,Ti=2,uh=3,dh=4,rd=5,Rn=100,Pf=101,Lf=102,If=103,Df=104,hr=200,Nf=201,Uf=202,Ff=203,vc=204,xc=205,_c=206,Of=207,Mc=208,kf=209,Bf=210,zf=211,Hf=212,Gf=213,Vf=214,yc=0,Sc=1,wc=2,Ls=3,Tc=4,Ec=5,Ac=6,Rc=7,_l=0,Wf=1,jf=2,yi=0,ad=1,od=2,cd=3,Ml=4,Xf=5,ld=6,hd=7,fh="attached",qf="detached",ud=300,Is=301,Ds=302,Cc=303,Pc=304,io=306,pn=1e3,xi=1001,qa=1002,Ut=1003,dd=1004,ur=1005,un=1006,Ua=1007,ei=1008,On=1009,fd=1010,pd=1011,Sr=1012,yl=1013,ji=1014,Ln=1015,yn=1016,Sl=1017,wl=1018,Xi=1020,md=35902,gd=1021,bd=1022,sn=1023,vd=1024,xd=1025,Es=1026,qi=1027,Tl=1028,El=1029,_d=1030,Al=1031,Rl=1033,Fa=33776,Oa=33777,ka=33778,Ba=33779,Lc=35840,Ic=35841,Dc=35842,Nc=35843,Uc=36196,Fc=37492,Oc=37496,kc=37808,Bc=37809,zc=37810,Hc=37811,Gc=37812,Vc=37813,Wc=37814,jc=37815,Xc=37816,qc=37817,Kc=37818,Yc=37819,Jc=37820,Zc=37821,za=36492,Qc=36494,$c=36495,Md=36283,el=36284,tl=36285,nl=36286,Kf=2200,Yf=2201,Jf=2202,wr=2300,Tr=2301,xo=2302,xs=2400,_s=2401,Ka=2402,Cl=2500,Zf=2501,Qf=0,yd=1,il=2,$f=3200,ep=3201,Nr=0,tp=1,vi="",dt="srgb",zt="srgb-linear",Pl="display-p3",so="display-p3-linear",Ya="linear",pt="srgb",Ja="rec709",Za="p3",Qi=7680,ph=519,np=512,ip=513,sp=514,Sd=515,rp=516,ap=517,op=518,cp=519,sl=35044,mh="300 es",ti=2e3,Qa=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const fr=Math.PI/180,Ns=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Ll(s,e){return(s%e+e)%e}function lp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hp(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function up(s,e,t,n){return pr(s,e,1-Math.exp(-t*n))}function dp(s,e=1){return e-Math.abs(Ll(s,e*2)-e)}function fp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gp(s,e){return s+Math.random()*(e-s)}function bp(s){return s*(.5-Math.random())}function vp(s){s!==void 0&&(gh=s);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(s){return s*fr}function _p(s){return s*Ns}function Mp(s){return(s&s-1)===0&&s!==0}function yp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tp={DEG2RAD:fr,RAD2DEG:Ns,generateUUID:Sn,clamp:Pt,euclideanModulo:Ll,mapLinear:lp,inverseLerp:hp,lerp:pr,damp:up,pingpong:dp,smoothstep:fp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:bp,seededRandom:vp,degToRad:xp,radToDeg:_p,isPowerOfTwo:Mp,ceilPowerOfTwo:yp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:wp,normalize:ht,denormalize:Cn};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,r,a,o,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],p=i[3],g=i[6],_=i[1],x=i[4],M=i[7],A=i[2],w=i[5],T=i[8];return r[0]=a*b+o*_+c*A,r[3]=a*p+o*x+c*w,r[6]=a*g+o*M+c*T,r[1]=l*b+h*_+u*A,r[4]=l*p+h*x+u*w,r[7]=l*g+h*M+u*T,r[2]=d*b+f*_+m*A,r[5]=d*p+f*x+m*w,r[8]=d*g+f*M+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new Ke;function wd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ep(){const s=Er("canvas");return s.style.display="block",s}const bh={};function Ha(s){s in bh||(bh[s]=!0,console.warn(s))}function Ap(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Rp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[zt]:{transfer:Ya,primaries:Ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[dt]:{transfer:pt,primaries:Ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[so]:{transfer:Ya,primaries:Za,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(xh),fromReference:s=>s.applyMatrix3(vh)},[Pl]:{transfer:pt,primaries:Za,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(xh),fromReference:s=>s.applyMatrix3(vh).convertLinearToSRGB()}},Pp=new Set([zt,so]),nt={enabled:!0,_workingColorSpace:zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Pp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ys[e].toReference,i=Ys[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ys[s].primaries},getTransfer:function(s){return s===vi?Ya:Ys[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ys[e].luminanceCoefficients)}};function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class Lp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Er("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=As(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ip=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(yo(i[a].image)):r.push(yo(i[a]))}else r=yo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function yo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class Lt extends Yi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=xi,i=xi,r=un,a=ei,o=sn,c=On,l=Lt.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Sn(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ud;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(f+1)/2,A=(g+1)/2,w=(h+d)/4,T=(u+b)/4,L=(m+p)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=T/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=L/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=L/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Np extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ed extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let p=1-o;const g=c*d+l*f+h*m+u*b,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,g*_);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const M=o*_;if(c=c*p+d*M,l=l*p+f*M,h=h*p+m*M,u=u*p+b*M,p===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new C,_h=new Ft;class Dn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),jr.subVectors(this.max,Js),es.subVectors(e.a,Js),ts.subVectors(e.b,Js),ns.subVectors(e.c,Js),ci.subVectors(ts,es),li.subVectors(ns,ts),Ri.subVectors(es,ns);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!wo(t,es,ts,ns,jr)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,es,ts,ns,jr))?!1:(Xr.crossVectors(ci,li),t=[Xr.x,Xr.y,Xr.z],wo(t,es,ts,ns,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,Wr=new Dn,es=new C,ts=new C,ns=new C,ci=new C,li=new C,Ri=new C,Js=new C,jr=new C,Xr=new C,Ci=new C;function wo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ci.fromArray(s,r);const o=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Fp=new Dn,Zs=new C,To=new C;class Bn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(To)),this.expandByPoint(Zs.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new C,Eo=new C,qr=new C,hi=new C,Ao=new C,Kr=new C,Ro=new C;class Ur{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=hi.dot(this.direction),c=-hi.dot(qr),l=hi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Eo).addScaledVector(qr,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,r){Ao.subVectors(t,e),Kr.subVectors(n,e),Ro.crossVectors(Ao,Kr);let a=this.direction.dot(Ro),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const c=o*this.direction.dot(Kr.crossVectors(hi,Kr));if(c<0)return null;const l=o*this.direction.dot(Ao.cross(hi));if(l<0||c+l>a)return null;const h=-o*hi.dot(Ro);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,p)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=b,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,kp)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ui.crossVectors(n,ln),ui.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ui.crossVectors(n,ln)),ui.normalize(),Yr.crossVectors(ln,ui),i[0]=ui.x,i[4]=Yr.x,i[8]=ln.x,i[1]=ui.y,i[5]=Yr.y,i[9]=ln.y,i[2]=ui.z,i[6]=Yr.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],p=n[10],g=n[14],_=n[3],x=n[7],M=n[11],A=n[15],w=i[0],T=i[4],L=i[8],D=i[12],v=i[1],y=i[5],I=i[9],N=i[13],G=i[2],Y=i[6],B=i[10],se=i[14],W=i[3],he=i[7],k=i[11],q=i[15];return r[0]=a*w+o*v+c*G+l*W,r[4]=a*T+o*y+c*Y+l*he,r[8]=a*L+o*I+c*B+l*k,r[12]=a*D+o*N+c*se+l*q,r[1]=h*w+u*v+d*G+f*W,r[5]=h*T+u*y+d*Y+f*he,r[9]=h*L+u*I+d*B+f*k,r[13]=h*D+u*N+d*se+f*q,r[2]=m*w+b*v+p*G+g*W,r[6]=m*T+b*y+p*Y+g*he,r[10]=m*L+b*I+p*B+g*k,r[14]=m*D+b*N+p*se+g*q,r[3]=_*w+x*v+M*G+A*W,r[7]=_*T+x*y+M*Y+A*he,r[11]=_*L+x*I+M*B+A*k,r[15]=_*D+x*N+M*se+A*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],p=e[11],g=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+p*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+g*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],p=e[14],g=e[15],_=u*p*l-b*d*l+b*c*f-o*p*f-u*c*g+o*d*g,x=m*d*l-h*p*l-m*c*f+a*p*f+h*c*g-a*d*g,M=h*b*l-m*u*l+m*o*f-a*b*f-h*o*g+a*u*g,A=m*u*c-h*b*c-m*o*d+a*b*d+h*o*p-a*u*p,w=t*_+n*x+i*M+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(b*d*r-u*p*r-b*i*f+n*p*f+u*i*g-n*d*g)*T,e[2]=(o*p*r-b*c*r+b*i*l-n*p*l-o*i*g+n*c*g)*T,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*T,e[4]=x*T,e[5]=(h*p*r-m*d*r+m*i*f-t*p*f-h*i*g+t*d*g)*T,e[6]=(m*c*r-a*p*r-m*i*l+t*p*l+a*i*g-t*c*g)*T,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*T,e[8]=M*T,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*g-t*u*g)*T,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*g+t*o*g)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*T,e[12]=A*T,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*p+t*u*p)*T,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*p-t*o*p)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,p=a*u,g=o*u,_=c*l,x=c*h,M=c*u,A=n.x,w=n.y,T=n.z;return i[0]=(1-(b+g))*A,i[1]=(f+M)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+g))*w,i[6]=(p+_)*w,i[7]=0,i[8]=(m+x)*T,i[9]=(p-_)*T,i[10]=(1-(d+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=is.set(i[0],i[1],i[2]).length();const a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ti){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===ti)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Qa)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ti){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h;let m,b;if(o===ti)m=(a+r)*u,b=-2*u;else if(o===Qa)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new C,En=new Oe,Op=new C(0,0,0),kp=new C(1,1,1),ui=new C,Yr=new C,ln=new C,Mh=new Oe,yh=new Ft;class In{constructor(e=0,t=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bp=0;const Sh=new C,ss=new Ft,Xn=new Oe,Jr=new C,Qs=new C,zp=new C,Hp=new Ft,wh=new C(1,0,0),Th=new C(0,1,0),Eh=new C(0,0,1),Ah={type:"added"},Gp={type:"removed"},rs={type:"childadded",child:null},Co={type:"childremoved",child:null};class bt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new C,t=new In,n=new Ft,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ke}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qs,Jr,this.up):Xn.lookAt(Jr,Qs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Xn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gp),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new C,qn=new C,Po=new C,Kn=new C,as=new C,os=new C,Rh=new C,Lo=new C,Io=new C,Do=new C,No=new st,Uo=new st,Fo=new st;class Mn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),qn.subVectors(n,t),Po.subVectors(e,t);const a=An.dot(An),o=An.dot(qn),c=An.dot(Po),l=qn.dot(qn),h=qn.dot(Po),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return No.setScalar(0),Uo.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(Fo,r.z),a}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),qn.subVectors(e,t),An.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;as.subVectors(i,n),os.subVectors(r,n),Lo.subVectors(e,n);const c=as.dot(Lo),l=os.dot(Lo);if(c<=0&&l<=0)return t.copy(n);Io.subVectors(e,i);const h=as.dot(Io),u=os.dot(Io);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(as,a);Do.subVectors(e,r);const f=as.dot(Do),m=os.dot(Do);if(m>=0&&f<=m)return t.copy(r);const b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(os,o);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Rh.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Rh,o);const g=1/(p+b+d);return a=b*g,o=d*g,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Oo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Ll(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Oo(a,r,e+1/3),this.g=Oo(a,r,e),this.b=Oo(a,r,e-1/3)}return nt.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Pt(Gt.r*255,0,255))*65536+Math.round(Pt(Gt.g*255,0,255))*256+Math.round(Pt(Gt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=dt){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Zr);const n=pr(di.h,Zr.h,t),i=pr(di.s,Zr.s,t),r=pr(di.l,Zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new fe;fe.NAMES=Ad;let Vp=0;class an extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ts,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Je extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new C,Qr=new ee;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Rd extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cd extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wp=0;const vn=new Oe,ko=new bt,cs=new C,hn=new Dn,$s=new Dn,Nt=new C;class mt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Cd:Rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,$s.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,$s.max),hn.expandByPoint(Nt)):(hn.expandByPoint($s.min),hn.expandByPoint($s.max))}hn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(e,l),Nt.add(cs)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new C,c[L]=new C;const l=new C,h=new C,u=new C,d=new ee,f=new ee,m=new ee,b=new C,p=new C;function g(L,D,v){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const y=1/(f.x*m.y-m.x*f.y);isFinite(y)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(y),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(y),o[L].add(b),o[D].add(b),o[v].add(b),c[L].add(p),c[D].add(p),c[v].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,D=_.length;L<D;++L){const v=_[L],y=v.start,I=v.count;for(let N=y,G=y+I;N<G;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new C,M=new C,A=new C,w=new C;function T(L){A.fromBufferAttribute(i,L),w.copy(A);const D=o[L];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),M.crossVectors(w,D);const y=M.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,y)}for(let L=0,D=_.length;L<D;++L){const v=_[L],y=v.start,I=v.count;for(let N=y,G=y+I;N<G;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),b=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new Oe,Pi=new Ur,$r=new Bn,Ph=new C,ea=new C,ta=new C,na=new C,Bo=new C,ia=new C,Lh=new C,sa=new C;class De extends bt{constructor(e=new mt,t=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Bo.fromBufferAttribute(u,e),a?ia.addScaledVector(Bo,h):ia.addScaledVector(Bo.sub(t),h))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!($r.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere($r,Ph)===null||Pi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,A=x;M<A;M+=3){const w=o.getX(M),T=o.getX(M+1),L=o.getX(M+2);i=ra(this,g,e,n,l,h,u,w,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let p=m,g=b;p<g;p+=3){const _=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=ra(this,a,e,n,l,h,u,_,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,A=x;M<A;M+=3){const w=M,T=M+1,L=M+2;i=ra(this,g,e,n,l,h,u,w,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let p=m,g=b;p<g;p+=3){const _=p,x=p+1,M=p+2;i=ra(this,a,e,n,l,h,u,_,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function jp(s,e,t,n,i,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===si,o),c===null)return null;sa.copy(o),sa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:s}}function ra(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ea),s.getVertexPosition(c,ta),s.getVertexPosition(l,na);const h=jp(s,e,t,n,ea,ta,na,Lh);if(h){const u=new C;Mn.getBarycoord(Lh,ea,ta,na,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,o,c,l,u,new ee)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,c,l,u,new ee)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Mn.getNormal(ea,ta,na,d.normal),h.face=d,h.barycoord=u}return h}class _t extends mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function m(b,p,g,_,x,M,A,w,T,L,D){const v=M/T,y=A/L,I=M/2,N=A/2,G=w/2,Y=T+1,B=L+1;let se=0,W=0;const he=new C;for(let k=0;k<B;k++){const q=k*y-N;for(let ne=0;ne<Y;ne++){const ae=ne*v-I;he[b]=ae*_,he[p]=q*x,he[g]=G,l.push(he.x,he.y,he.z),he[b]=0,he[p]=0,he[g]=w>0?1:-1,h.push(he.x,he.y,he.z),u.push(ne/T),u.push(1-k/L),se+=1}}for(let k=0;k<L;k++)for(let q=0;q<T;q++){const ne=d+q+Y*k,ae=d+q+Y*(k+1),H=d+(q+1)+Y*(k+1),V=d+(q+1)+Y*k;c.push(ne,ae,V),c.push(ae,H,V),W+=6}o.addGroup(f,W,D),f+=W,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=Us(s[t]);for(const i in n)e[i]=n[i]}return e}function Xp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Fn={clone:Us,merge:qt};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ld extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new C,Ih=new ee,Dh=new ee;class Yt extends Ld{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Dh),t.subVectors(Dh,Ih)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class Yp extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(ls,hs,e,t);i.layers=this.layers,this.add(i);const r=new Yt(ls,hs,e,t);r.layers=this.layers,this.add(r);const a=new Yt(ls,hs,e,t);a.layers=this.layers,this.add(a);const o=new Yt(ls,hs,e,t);o.layers=this.layers,this.add(o);const c=new Yt(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new Yt(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Id extends Lt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jp extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Id(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _t(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Bt});r.uniforms.tEquirect.value=t;const a=new De(i,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=un),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const zo=new C,Zp=new C,Qp=new Ke;class ki{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zo.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qp.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Bn,aa=new C;class Dl{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,a=new ki){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],b=i[10],p=i[11],g=i[12],_=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,p-f,M-g).normalize(),n[1].setComponents(c+r,d+l,p+f,M+g).normalize(),n[2].setComponents(c+a,d+h,p+m,M+_).normalize(),n[3].setComponents(c-a,d-h,p-m,M-_).normalize(),n[4].setComponents(c-o,d-u,p-b,M-x).normalize(),t===ti)n[5].setComponents(c+o,d+u,p+b,M+x).normalize();else if(t===Qa)n[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $p(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class ri extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],p=[];for(let g=0;g<h;g++){const _=g*d-a;for(let x=0;x<l;x++){const M=x*u-r;m.push(M,-_,0),b.push(0,0,1),p.push(x/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<o;_++){const x=_+l*g,M=_+l*(g+1),A=_+1+l*(g+1),w=_+1+l*g;f.push(x,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:sm,alphatest_pars_fragment:rm,aomap_fragment:am,aomap_pars_fragment:om,batching_pars_vertex:cm,batching_vertex:lm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:vm,color_fragment:xm,color_pars_fragment:_m,color_pars_vertex:Mm,color_vertex:ym,common:Sm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Em,displacementmap_vertex:Am,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Lm,envmap_fragment:Im,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Nm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Fm,fog_vertex:Om,fog_pars_vertex:km,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Wm,lights_pars_begin:jm,lights_toon_fragment:qm,lights_toon_pars_fragment:Km,lights_phong_fragment:Ym,lights_phong_pars_fragment:Jm,lights_physical_fragment:Zm,lights_physical_pars_fragment:Qm,lights_fragment_begin:$m,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:ag,map_pars_fragment:og,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:bg,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:_g,normal_vertex:Mg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Lg,dithering_pars_fragment:Ig,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Fg,shadowmap_vertex:Og,shadowmask_pars_fragment:kg,skinbase_vertex:Bg,skinning_pars_vertex:zg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:jg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Kg,uv_pars_fragment:Yg,uv_pars_vertex:Jg,uv_vertex:Zg,worldpos_vertex:Qg,background_vert:$g,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:a0,distanceRGBA_vert:o0,distanceRGBA_frag:c0,equirect_vert:l0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:b0,meshmatcap_frag:v0,meshnormal_vert:x0,meshnormal_frag:_0,meshphong_vert:M0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:w0,meshtoon_vert:T0,meshtoon_frag:E0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:L0,sprite_frag:I0},ve={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Un={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new fe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new fe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const oa={r:0,b:0,g:0},Ii=new In,D0=new Oe;function N0(s,e,t,n,i,r,a){const o=new fe(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function b(_){let x=!1;const M=m(_);M===null?g(o,c):M&&M.isColor&&(g(M,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===io)?(h===void 0&&(h=new De(new _t(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Us(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ii.copy(x.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Ii)),h.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new De(new ri(2,2),new Et({name:"BackgroundMaterial",uniforms:Us(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,x){_.getRGB(oa,Pd(s)),n.buffers.color.setClear(oa.r,oa.g,oa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,g(o,c)},render:b,addToRenderList:p}}function U0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,y,I,N,G){let Y=!1;const B=u(N,I,y);r!==B&&(r=B,l(r.object)),Y=f(v,N,I,G),Y&&m(v,N,I,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(v,y,I,N),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,y,I){const N=I.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[y.id];Y===void 0&&(Y={},G[y.id]=Y);let B=Y[N];return B===void 0&&(B=d(c()),Y[N]=B),B}function d(v){const y=[],I=[],N=[];for(let G=0;G<t;G++)y[G]=0,I[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:I,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,y,I,N){const G=r.attributes,Y=y.attributes;let B=0;const se=I.getAttributes();for(const W in se)if(se[W].location>=0){const k=G[W];let q=Y[W];if(q===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(q=v.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function m(v,y,I,N){const G={},Y=y.attributes;let B=0;const se=I.getAttributes();for(const W in se)if(se[W].location>=0){let k=Y[W];k===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(k=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(k=v.instanceColor));const q={};q.attribute=k,k&&k.data&&(q.data=k.data),G[W]=q,B++}r.attributes=G,r.attributesNum=B,r.index=N}function b(){const v=r.newAttributes;for(let y=0,I=v.length;y<I;y++)v[y]=0}function p(v){g(v,0)}function g(v,y){const I=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;I[v]=1,N[v]===0&&(s.enableVertexAttribArray(v),N[v]=1),G[v]!==y&&(s.vertexAttribDivisor(v,y),G[v]=y)}function _(){const v=r.newAttributes,y=r.enabledAttributes;for(let I=0,N=y.length;I<N;I++)y[I]!==v[I]&&(s.disableVertexAttribArray(I),y[I]=0)}function x(v,y,I,N,G,Y,B){B===!0?s.vertexAttribIPointer(v,y,I,G,Y):s.vertexAttribPointer(v,y,I,N,G,Y)}function M(v,y,I,N){b();const G=N.attributes,Y=I.getAttributes(),B=y.defaultAttributeValues;for(const se in Y){const W=Y[se];if(W.location>=0){let he=G[se];if(he===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){const k=he.normalized,q=he.itemSize,ne=e.get(he);if(ne===void 0)continue;const ae=ne.buffer,H=ne.type,V=ne.bytesPerElement,de=H===s.INT||H===s.UNSIGNED_INT||he.gpuType===yl;if(he.isInterleavedBufferAttribute){const re=he.data,Ae=re.stride,Re=he.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)g(W.location+Le,re.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<W.locationSize;Le++)p(W.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Le=0;Le<W.locationSize;Le++)x(W.location+Le,q/W.locationSize,H,k,Ae*V,(Re+q/W.locationSize*Le)*V,de)}else{if(he.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)g(W.location+re,he.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let re=0;re<W.locationSize;re++)p(W.location+re);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let re=0;re<W.locationSize;re++)x(W.location+re,q/W.locationSize,H,k,q*V,q/W.locationSize*re*V,de)}}else if(B!==void 0){const k=B[se];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(W.location,k);break;case 3:s.vertexAttrib3fv(W.location,k);break;case 4:s.vertexAttrib4fv(W.location,k);break;default:s.vertexAttrib1fv(W.location,k)}}}}_()}function A(){L();for(const v in n){const y=n[v];for(const I in y){const N=y[I];for(const G in N)h(N[G].object),delete N[G];delete y[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const y=n[v.id];for(const I in y){const N=y[I];for(const G in N)h(N[G].object),delete N[G];delete y[I]}delete n[v.id]}function T(v){for(const y in n){const I=n[y];if(I[v.id]===void 0)continue;const N=I[v.id];for(const G in N)h(N[G].object),delete N[G];delete I[v.id]}}function L(){D(),a=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:p,disableUnusedAttributes:_}}function F0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b];for(let b=0;b<d.length;b++)t.update(m,n,d[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function O0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==On&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!L)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function k0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ki,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):l();else{const _=r?0:n,x=_*4;let M=g.clippingState||null;c.value=M,M=h(m,d,x,f);for(let A=0;A!==x;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const b=u!==null?u.length:0;let p=null;if(b!==0){if(p=c.value,m!==!0||p===null){const g=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,M=f;x!==b;++x,M+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function B0(s){let e=new WeakMap;function t(a,o){return o===Cc?a.mapping=Is:o===Pc&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cc||o===Pc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jp(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ro extends Ld{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,Nh=[.125,.215,.35,.446,.526,.582],zi=20,Ho=new ro,Uh=new fe;let Go=null,Vo=0,Wo=0,jo=!1;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,Fh=[new C(-Bi,us,0),new C(Bi,us,0),new C(-us,0,Bi),new C(us,0,Bi),new C(0,Bi,-us),new C(0,Bi,us),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Vo,Wo),this._renderer.xr.enabled=jo,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:yn,format:sn,colorSpace:zt,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z0(r)),this._blurMaterial=H0(r,e,t)}return i}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uh),h.toneMapping=yi,h.autoClear=!1;const f=new Je({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new De(new _t,f);let b=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,b=!0):(f.color.copy(Uh),b=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):_===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const x=this._cubeSize;ca(i,_*x,g>2?x:0,x,x),h.setRenderTarget(i),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fh[(i-r-1)%Fh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new De(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),b=r/m,p=isFinite(r)?1+Math.floor(h*b):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const g=[];let _=0;for(let T=0;T<zi;++T){const L=T/b,D=Math.exp(-L*L/2);g.push(D),T===0?_+=D:T<p&&(_+=2*D)}for(let T=0;T<g.length;T++)g[T]=g[T]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const M=this._sizeLods[i],A=3*M*(i>x-Ms?i-x+Ms:0),w=4*(this._cubeSize-M);ca(t,A,w,3*M,2*M),c.setRenderTarget(t),c.render(u,Ho)}}function z0(s){const e=[],t=[],n=[];let i=s;const r=s-Ms+1+Nh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ms?c=Nh[a-s+Ms-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,p=2,g=1,_=new Float32Array(b*m*f),x=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,L=w>2?0:-1,D=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(D,b*m*w),x.set(d,p*m*w);const v=[w,w,w,w,w,w];M.set(v,g*m*w)}const A=new mt;A.setAttribute("position",new xt(_,b)),A.setAttribute("uv",new xt(x,p)),A.setAttribute("faceIndex",new xt(M,g)),e.push(A),i>Ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(s,e,t){const n=new rn(s,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function H0(s,e,t){const n=new Float32Array(zi),i=new C(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function Bh(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function zh(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cc||c===Pc,h=c===Is||c===Ds;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Oh(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Oh(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function V0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ha("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function W0(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const b=d.morphAttributes[m];for(let p=0,g=b.length;p<g;p++)e.remove(b[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const b=f[m];for(let p=0,g=b.length;p<g;p++)e.update(b[p],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let b=0;if(f!==null){const _=f.array;b=f.version;for(let x=0,M=_.length;x<M;x+=3){const A=_[x+0],w=_[x+1],T=_[x+2];d.push(A,w,w,T,T,A)}}else if(m!==void 0){const _=m.array;b=m.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const A=x+0,w=x+1,T=x+2;d.push(A,w,w,T,T,A)}}else return;const p=new(wd(d)?Cd:Rd)(d,1);p.version=b;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function j0(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,b){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)l(d[g]/a,f[g],b[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_];for(let _=0;_<b.length;_++)t.update(g,n,b[_])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function q0(s,e,t){const n=new WeakMap,i=new st;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let D=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),b===!0&&(x=3);let M=o.attributes.position.count*x,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*u),T=new Ed(w,M,A,u);T.type=Ln,T.needsUpdate=!0;const L=x*4;for(let v=0;v<u;v++){const y=p[v],I=g[v],N=_[v],G=M*A*4*v;for(let Y=0;Y<y.count;Y++){const B=Y*L;f===!0&&(i.fromBufferAttribute(y,Y),w[G+B+0]=i.x,w[G+B+1]=i.y,w[G+B+2]=i.z,w[G+B+3]=0),m===!0&&(i.fromBufferAttribute(I,Y),w[G+B+4]=i.x,w[G+B+5]=i.y,w[G+B+6]=i.z,w[G+B+7]=0),b===!0&&(i.fromBufferAttribute(N,Y),w[G+B+8]=i.x,w[G+B+9]=i.y,w[G+B+10]=i.z,w[G+B+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new ee(M,A)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function K0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Ul extends Lt{constructor(e,t,n,i,r,a,o,c,l,h=Es){if(h!==Es&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=ji),n===void 0&&h===qi&&(n=Xi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nd=new Lt,Hh=new Ul(1,1),Ud=new Ed,Fd=new Up,Od=new Id,Gh=[],Vh=[],Wh=new Float32Array(16),jh=new Float32Array(9),Xh=new Float32Array(4);function Gs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Gh[i];if(r===void 0&&(r=new Float32Array(i),Gh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ao(s,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Y0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function $0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Xh.set(n),s.uniformMatrix2fv(this.addr,!1,Xh),Dt(t,n)}}function eb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;jh.set(n),s.uniformMatrix3fv(this.addr,!1,jh),Dt(t,n)}}function tb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Wh.set(n),s.uniformMatrix4fv(this.addr,!1,Wh),Dt(t,n)}}function nb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function ab(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function hb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hh.compareFunction=Sd,r=Hh):r=Nd,t.setTexture2D(e||r,i)}function ub(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fd,i)}function db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Od,i)}function fb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ud,i)}function pb(s){switch(s){case 5126:return Y0;case 35664:return J0;case 35665:return Z0;case 35666:return Q0;case 35674:return $0;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ab;case 36294:return ob;case 36295:return cb;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}function mb(s,e){s.uniform1fv(this.addr,e)}function gb(s,e){const t=Gs(e,this.size,2);s.uniform2fv(this.addr,t)}function bb(s,e){const t=Gs(e,this.size,3);s.uniform3fv(this.addr,t)}function vb(s,e){const t=Gs(e,this.size,4);s.uniform4fv(this.addr,t)}function xb(s,e){const t=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _b(s,e){const t=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mb(s,e){const t=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yb(s,e){s.uniform1iv(this.addr,e)}function Sb(s,e){s.uniform2iv(this.addr,e)}function wb(s,e){s.uniform3iv(this.addr,e)}function Tb(s,e){s.uniform4iv(this.addr,e)}function Eb(s,e){s.uniform1uiv(this.addr,e)}function Ab(s,e){s.uniform2uiv(this.addr,e)}function Rb(s,e){s.uniform3uiv(this.addr,e)}function Cb(s,e){s.uniform4uiv(this.addr,e)}function Pb(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Nd,r[a])}function Lb(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fd,r[a])}function Ib(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Od,r[a])}function Db(s,e,t){const n=this.cache,i=e.length,r=ao(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ud,r[a])}function Nb(s){switch(s){case 5126:return mb;case 35664:return gb;case 35665:return bb;case 35666:return vb;case 35674:return xb;case 35675:return _b;case 35676:return Mb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Db}}class Ub{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}}class Fb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nb(t.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function qh(s,e){s.seq.push(e),s.map[e.id]=e}function kb(s,e,t){const n=s.name,i=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),a=Xo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){qh(t,l===void 0?new Ub(o,s,e):new Fb(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ob(o),qh(t,u)),t=u}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);kb(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Kh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bb=37297;let zb=0;function Hb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gb(s){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(s);let n;switch(e===t?n="":e===Za&&t===Ja?n="LinearDisplayP3ToLinearSRGB":e===Ja&&t===Za&&(n="LinearSRGBToLinearDisplayP3"),s){case zt:case so:return[n,"LinearTransferOETF"];case dt:case Pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hb(s.getShaderSource(e),a)}else return i}function Vb(s,e){const t=Gb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Wb(s,e){let t;switch(e){case ad:t="Linear";break;case od:t="Reinhard";break;case cd:t="Cineon";break;case Ml:t="ACESFilmic";break;case ld:t="AgX";break;case hd:t="Neutral";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new C;function jb(){nt.getLuminanceCoefficients(la);const s=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function qb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function dr(s){return s!==""}function Jh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(s){return s.replace(Yb,Zb)}const Jb=new Map;function Zb(s,e){let t=qe[e];if(t===void 0){const n=Jb.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(s){return s.replace(Qb,$b)}function $b(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $h(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ev(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function tv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ds:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function iv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _l:e="ENVMAP_BLENDING_MULTIPLY";break;case Wf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function sv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ev(t),l=tv(t),h=nv(t),u=iv(t),d=sv(t),f=Xb(t),m=qb(r),b=i.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(p=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?qe.tonemapping_pars_fragment:"",t.toneMapping!==yi?Wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Vb("linearToOutputTexel",t.outputColorSpace),jb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=rl(a),a=Jh(a,t),a=Zh(a,t),o=rl(o),o=Jh(o,t),o=Zh(o,t),a=Qh(a),o=Qh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+p+a,M=_+g+o,A=Kh(i,i.VERTEX_SHADER,x),w=Kh(i,i.FRAGMENT_SHADER,M);i.attachShader(b,A),i.attachShader(b,w),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(y){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(b).trim(),N=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(w).trim();let Y=!0,B=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,A,w);else{const se=Yh(i,A,"vertex"),W=Yh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+I+`
`+se+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||G==="")&&(B=!1);B&&(y.diagnostics={runnable:Y,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:g}})}i.deleteShader(A),i.deleteShader(w),L=new Ga(i,b),D=Kb(i,b)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(b,Bb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=w,this}let av=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function lv(s,e,t,n,i,r,a){const o=new Il,c=new ov,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,I,N,G){const Y=N.fog,B=G.geometry,se=v.isMeshStandardMaterial?N.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||se),he=W&&W.mapping===io?W.image.height:null,k=b[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=q!==void 0?q.length:0;let ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let H,V,de,re;if(k){const Qt=Un[k];H=Qt.vertexShader,V=Qt.fragmentShader}else H=v.vertexShader,V=v.fragmentShader,c.update(v),de=c.getVertexShaderID(v),re=c.getFragmentShaderID(v);const Ae=s.getRenderTarget(),Re=G.isInstancedMesh===!0,Le=G.isBatchedMesh===!0,Be=!!v.map,Q=!!v.matcap,P=!!W,pe=!!v.aoMap,ue=!!v.lightMap,oe=!!v.bumpMap,ge=!!v.normalMap,Ne=!!v.displacementMap,ye=!!v.emissiveMap,R=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,J=v.clearcoat>0,ie=v.dispersion>0,Z=v.iridescence>0,Pe=v.sheen>0,be=v.transmission>0,_e=z&&!!v.anisotropyMap,Xe=J&&!!v.clearcoatMap,ce=J&&!!v.clearcoatNormalMap,Me=J&&!!v.clearcoatRoughnessMap,ze=Z&&!!v.iridescenceMap,He=Z&&!!v.iridescenceThicknessMap,Ce=Pe&&!!v.sheenColorMap,Ze=Pe&&!!v.sheenRoughnessMap,je=!!v.specularMap,it=!!v.specularColorMap,U=!!v.specularIntensityMap,xe=be&&!!v.transmissionMap,K=be&&!!v.thicknessMap,te=!!v.gradientMap,Se=!!v.alphaMap,Te=v.alphaTest>0,tt=!!v.alphaHash,Rt=!!v.extensions;let Zt=yi;v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Zt=s.toneMapping);const rt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:V,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Le,batchingColor:Le&&G._colorsTexture!==null,instancing:Re,instancingColor:Re&&G.instanceColor!==null,instancingMorph:Re&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:zt,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:Q,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:he,aoMap:pe,lightMap:ue,bumpMap:oe,normalMap:ge,displacementMap:f&&Ne,emissiveMap:ye,normalMapObjectSpace:ge&&v.normalMapType===tp,normalMapTangentSpace:ge&&v.normalMapType===Nr,metalnessMap:R,roughnessMap:S,anisotropy:z,anisotropyMap:_e,clearcoat:J,clearcoatMap:Xe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:ie,iridescence:Z,iridescenceMap:ze,iridescenceThicknessMap:He,sheen:Pe,sheenColorMap:Ce,sheenRoughnessMap:Ze,specularMap:je,specularColorMap:it,specularIntensityMap:U,transmission:be,transmissionMap:xe,thicknessMap:K,gradientMap:te,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:tt,combine:v.combine,mapUv:Be&&p(v.map.channel),aoMapUv:pe&&p(v.aoMap.channel),lightMapUv:ue&&p(v.lightMap.channel),bumpMapUv:oe&&p(v.bumpMap.channel),normalMapUv:ge&&p(v.normalMap.channel),displacementMapUv:Ne&&p(v.displacementMap.channel),emissiveMapUv:ye&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:_e&&p(v.anisotropyMap.channel),clearcoatMapUv:Xe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(v.sheenRoughnessMap.channel),specularMapUv:je&&p(v.specularMap.channel),specularColorMapUv:it&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:xe&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:Se&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Be||Se),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Rt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&v.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)y.push(I),y.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(y,v),M(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function x(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)}function A(v){const y=b[v.type];let I;if(y){const N=Un[y];I=Fn.clone(N.uniforms)}else I=v.uniforms;return I}function w(v,y){let I;for(let N=0,G=h.length;N<G;N++){const Y=h[N];if(Y.cacheKey===y){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new rv(s,y,v,r),h.push(I)),I}function T(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function L(v){c.remove(v)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:D}}function hv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,p){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:p},s[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=b,g.group=p),e++,g}function o(u,d,f,m,b,p){const g=a(u,d,f,m,b,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function c(u,d,f,m,b,p){const g=a(u,d,f,m,b,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,d){t.length>1&&t.sort(u||uv),n.length>1&&n.sort(d||eu),i.length>1&&i.sort(d||eu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function dv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new tu,s.set(n,[a])):i>=r.length?(a=new tu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new fe};break;case"SpotLight":t={position:new C,direction:new C,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function pv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mv=0;function gv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bv(s){const e=new fv,t=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new Oe,a=new Oe;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,b=0,p=0,g=0,_=0,x=0,M=0,A=0,w=0,T=0;l.sort(gv);for(let D=0,v=l.length;D<v;D++){const y=l[D],I=y.color,N=y.intensity,G=y.distance,Y=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=I.r*N,u+=I.g*N,d+=I.b*N;else if(y.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(y.sh.coefficients[B],N);T++}else if(y.isDirectionalLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const se=y.shadow,W=t.get(y);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=y.shadow.matrix,_++}n.directional[f]=B,f++}else if(y.isSpotLight){const B=e.get(y);B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(I).multiplyScalar(N),B.distance=G,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,n.spot[b]=B;const se=y.shadow;if(y.map&&(n.spotLightMap[A]=y.map,A++,se.updateMatrices(y),y.castShadow&&w++),n.spotLightMatrix[b]=se.matrix,y.castShadow){const W=t.get(y);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=Y,M++}b++}else if(y.isRectAreaLight){const B=e.get(y);B.color.copy(I).multiplyScalar(N),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=B,p++}else if(y.isPointLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),B.distance=y.distance,B.decay=y.decay,y.castShadow){const se=y.shadow,W=t.get(y);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=y.shadow.matrix,x++}n.point[m]=B,m++}else if(y.isHemisphereLight){const B=e.get(y);B.skyColor.copy(y.color).multiplyScalar(N),B.groundColor.copy(y.groundColor).multiplyScalar(N),n.hemi[g]=B,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==_||L.numPointShadows!==x||L.numSpotShadows!==M||L.numSpotMaps!==A||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,L.directionalLength=f,L.pointLength=m,L.spotLength=b,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=_,L.numPointShadows=x,L.numSpotShadows=M,L.numSpotMaps=A,L.numLightProbes=T,n.version=mv++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0;const p=h.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){const x=l[g];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[b];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),b++}}}return{setup:o,setupView:c,state:n}}function nu(s){const e=new bv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function vv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new nu(s),e.set(i,[o])):r>=a.length?(o=new nu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class xv extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _v extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sv(s,e,t){let n=new Dl;const i=new ee,r=new ee,a=new st,o=new xv({depthPacking:ep}),c=new _v,l={},h=t.maxTextureSize,u={[si]:Vt,[Vt]:si,[_n]:_n},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Mv,fragmentShader:yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new mt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new De(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let g=this.type;this.render=function(w,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const D=s.getRenderTarget(),v=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Bt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=g!==Zn&&this.type===Zn,G=g===Zn&&this.type!==Zn;for(let Y=0,B=w.length;Y<B;Y++){const se=w[Y],W=se.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const he=W.getFrameExtents();if(i.multiply(he),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||N===!0||G===!0){const q=this.type!==Zn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new rn(i.x,i.y,q),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const k=W.getViewportCount();for(let q=0;q<k;q++){const ne=W.getViewport(q);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),I.viewport(a),W.updateMatrices(se,q),n=W.getFrustum(),M(T,L,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&_(W,L),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(D,v,y)};function _(w,T){const L=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,L,f,b,null)}function x(w,T,L,D){let v=null;const y=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)v=y;else if(v=L.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,N=T.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let Y=G[N];Y===void 0&&(Y=v.clone(),G[N]=Y,T.addEventListener("dispose",A)),v=Y}if(v.visible=T.visible,v.wireframe=T.wireframe,D===Zn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=s.properties.get(v);I.light=L}return v}function M(w,T,L,D,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=e.update(w),G=w.material;if(Array.isArray(G)){const Y=N.groups;for(let B=0,se=Y.length;B<se;B++){const W=Y[B],he=G[W.materialIndex];if(he&&he.visible){const k=x(w,he,D,v);w.onBeforeShadow(s,w,T,L,N,k,W),s.renderBufferDirect(L,null,N,k,w,W),w.onAfterShadow(s,w,T,L,N,k,W)}}}else if(G.visible){const Y=x(w,G,D,v);w.onBeforeShadow(s,w,T,L,N,Y,null),s.renderBufferDirect(L,null,N,Y,w,null),w.onAfterShadow(s,w,T,L,N,Y,null)}}const I=w.children;for(let N=0,G=I.length;N<G;N++)M(I[N],T,L,D,v)}function A(w){w.target.removeEventListener("dispose",A);for(const L in l){const D=l[L],v=w.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}const wv={[yc]:Sc,[wc]:Ac,[Tc]:Rc,[Ls]:Ec,[Sc]:yc,[Ac]:wc,[Rc]:Tc,[Ec]:Ls};function Tv(s){function e(){let U=!1;const xe=new st;let K=null;const te=new st(0,0,0,0);return{setMask:function(Se){K!==Se&&!U&&(s.colorMask(Se,Se,Se,Se),K=Se)},setLocked:function(Se){U=Se},setClear:function(Se,Te,tt,Rt,Zt){Zt===!0&&(Se*=Rt,Te*=Rt,tt*=Rt),xe.set(Se,Te,tt,Rt),te.equals(xe)===!1&&(s.clearColor(Se,Te,tt,Rt),te.copy(xe))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function t(){let U=!1,xe=!1,K=null,te=null,Se=null;return{setReversed:function(Te){xe=Te},setTest:function(Te){Te?de(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(Te){K!==Te&&!U&&(s.depthMask(Te),K=Te)},setFunc:function(Te){if(xe&&(Te=wv[Te]),te!==Te){switch(Te){case yc:s.depthFunc(s.NEVER);break;case Sc:s.depthFunc(s.ALWAYS);break;case wc:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Tc:s.depthFunc(s.EQUAL);break;case Ec:s.depthFunc(s.GEQUAL);break;case Ac:s.depthFunc(s.GREATER);break;case Rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=Te}},setLocked:function(Te){U=Te},setClear:function(Te){Se!==Te&&(s.clearDepth(Te),Se=Te)},reset:function(){U=!1,K=null,te=null,Se=null}}}function n(){let U=!1,xe=null,K=null,te=null,Se=null,Te=null,tt=null,Rt=null,Zt=null;return{setTest:function(rt){U||(rt?de(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(rt){xe!==rt&&!U&&(s.stencilMask(rt),xe=rt)},setFunc:function(rt,Qt,Vn){(K!==rt||te!==Qt||Se!==Vn)&&(s.stencilFunc(rt,Qt,Vn),K=rt,te=Qt,Se=Vn)},setOp:function(rt,Qt,Vn){(Te!==rt||tt!==Qt||Rt!==Vn)&&(s.stencilOp(rt,Qt,Vn),Te=rt,tt=Qt,Rt=Vn)},setLocked:function(rt){U=rt},setClear:function(rt){Zt!==rt&&(s.clearStencil(rt),Zt=rt)},reset:function(){U=!1,xe=null,K=null,te=null,Se=null,Te=null,tt=null,Rt=null,Zt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,m=!1,b=null,p=null,g=null,_=null,x=null,M=null,A=null,w=new fe(0,0,0),T=0,L=!1,D=null,v=null,y=null,I=null,N=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(se)[1]),Y=B>=1):se.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Y=B>=2);let W=null,he={};const k=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),ne=new st().fromArray(k),ae=new st().fromArray(q);function H(U,xe,K,te){const Se=new Uint8Array(4),Te=s.createTexture();s.bindTexture(U,Te),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<K;tt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(xe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Te}const V={};V[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(s.DEPTH_TEST),r.setFunc(Ls),ue(!1),oe(hh),de(s.CULL_FACE),P(Bt);function de(U){l[U]!==!0&&(s.enable(U),l[U]=!0)}function re(U){l[U]!==!1&&(s.disable(U),l[U]=!1)}function Ae(U,xe){return h[U]!==xe?(s.bindFramebuffer(U,xe),h[U]=xe,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xe),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function Re(U,xe){let K=d,te=!1;if(U){K=u.get(xe),K===void 0&&(K=[],u.set(xe,K));const Se=U.textures;if(K.length!==Se.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,tt=Se.length;Te<tt;Te++)K[Te]=s.COLOR_ATTACHMENT0+Te;K.length=Se.length,te=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,te=!0);te&&s.drawBuffers(K)}function Le(U){return f!==U?(s.useProgram(U),f=U,!0):!1}const Be={[Rn]:s.FUNC_ADD,[Pf]:s.FUNC_SUBTRACT,[Lf]:s.FUNC_REVERSE_SUBTRACT};Be[If]=s.MIN,Be[Df]=s.MAX;const Q={[hr]:s.ZERO,[Nf]:s.ONE,[Uf]:s.SRC_COLOR,[vc]:s.SRC_ALPHA,[Bf]:s.SRC_ALPHA_SATURATE,[Mc]:s.DST_COLOR,[_c]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[xc]:s.ONE_MINUS_SRC_ALPHA,[kf]:s.ONE_MINUS_DST_COLOR,[Of]:s.ONE_MINUS_DST_ALPHA,[zf]:s.CONSTANT_COLOR,[Hf]:s.ONE_MINUS_CONSTANT_COLOR,[Gf]:s.CONSTANT_ALPHA,[Vf]:s.ONE_MINUS_CONSTANT_ALPHA};function P(U,xe,K,te,Se,Te,tt,Rt,Zt,rt){if(U===Bt){m===!0&&(re(s.BLEND),m=!1);return}if(m===!1&&(de(s.BLEND),m=!0),U!==rd){if(U!==b||rt!==L){if((p!==Rn||x!==Rn)&&(s.blendEquation(s.FUNC_ADD),p=Rn,x=Rn),rt)switch(U){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.ONE,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,_=null,M=null,A=null,w.set(0,0,0),T=0,b=U,L=rt}return}Se=Se||xe,Te=Te||K,tt=tt||te,(xe!==p||Se!==x)&&(s.blendEquationSeparate(Be[xe],Be[Se]),p=xe,x=Se),(K!==g||te!==_||Te!==M||tt!==A)&&(s.blendFuncSeparate(Q[K],Q[te],Q[Te],Q[tt]),g=K,_=te,M=Te,A=tt),(Rt.equals(w)===!1||Zt!==T)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Zt),w.copy(Rt),T=Zt),b=U,L=!1}function pe(U,xe){U.side===_n?re(s.CULL_FACE):de(s.CULL_FACE);let K=U.side===Vt;xe&&(K=!K),ue(K),U.blending===Ts&&U.transparent===!1?P(Bt):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function oe(U){U!==Rf?(de(s.CULL_FACE),U!==v&&(U===hh?s.cullFace(s.BACK):U===Cf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),v=U}function ge(U){U!==y&&(Y&&s.lineWidth(U),y=U)}function Ne(U,xe,K){U?(de(s.POLYGON_OFFSET_FILL),(I!==xe||N!==K)&&(s.polygonOffset(xe,K),I=xe,N=K)):re(s.POLYGON_OFFSET_FILL)}function ye(U){U?de(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+G-1),W!==U&&(s.activeTexture(U),W=U)}function S(U,xe,K){K===void 0&&(W===null?K=s.TEXTURE0+G-1:K=W);let te=he[K];te===void 0&&(te={type:void 0,texture:void 0},he[K]=te),(te.type!==U||te.texture!==xe)&&(W!==K&&(s.activeTexture(K),W=K),s.bindTexture(U,xe||V[U]),te.type=U,te.texture=xe)}function z(){const U=he[W];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(U){ne.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function Ce(U){ae.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function Ze(U,xe){let K=c.get(xe);K===void 0&&(K=new WeakMap,c.set(xe,K));let te=K.get(U);te===void 0&&(te=s.getUniformBlockIndex(xe,U.name),K.set(U,te))}function je(U,xe){const te=c.get(xe).get(U);o.get(xe)!==te&&(s.uniformBlockBinding(xe,te,U.__bindingPointIndex),o.set(xe,te))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,he={},h={},u=new WeakMap,d=[],f=null,m=!1,b=null,p=null,g=null,_=null,x=null,M=null,A=null,w=new fe(0,0,0),T=0,L=!1,D=null,v=null,y=null,I=null,N=null,ne.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:de,disable:re,bindFramebuffer:Ae,drawBuffers:Re,useProgram:Le,setBlending:P,setMaterial:pe,setFlipSided:ue,setCullFace:oe,setLineWidth:ge,setPolygonOffset:Ne,setScissorTest:ye,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Me,texImage3D:ze,updateUBOMapping:Ze,uniformBlockBinding:je,texStorage2D:Xe,texStorage3D:ce,texSubImage2D:Z,texSubImage3D:Pe,compressedTexSubImage2D:be,compressedTexSubImage3D:_e,scissor:He,viewport:Ce,reset:it}}function iu(s,e,t,n){const i=Ev(n);switch(t){case gd:return s*e;case vd:return s*e;case xd:return s*e*2;case Tl:return s*e/i.components*i.byteLength;case El:return s*e/i.components*i.byteLength;case _d:return s*e*2/i.components*i.byteLength;case Al:return s*e*2/i.components*i.byteLength;case bd:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case Rl:return s*e*4/i.components*i.byteLength;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Nc:return Math.max(s,16)*Math.max(e,8)/4;case Lc:case Dc:return Math.max(s,8)*Math.max(e,8)/2;case Uc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case za:case Qc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Md:case el:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ev(s){switch(s){case On:case fd:return{byteLength:1,components:1};case Sr:case pd:case yn:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case ji:case yl:case Ln:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Av(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):Er("canvas")}function b(R,S,z){let J=1;const ie=ye(R);if((ie.width>z||ie.height>z)&&(J=z/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(J*ie.width),Pe=Math.floor(J*ie.height);u===void 0&&(u=m(Z,Pe));const be=S?m(Z,Pe):u;return be.width=Z,be.height=Pe,be.getContext("2d").drawImage(R,0,0,Z,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Pe+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Ut&&R.minFilter!==un}function g(R){s.generateMipmap(R)}function _(R,S,z,J,ie=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){const Pe=ie?Ya:nt.getTransfer(J);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=Pe===pt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,S){let z;return R?S===null||S===ji||S===Xi?z=s.DEPTH24_STENCIL8:S===Ln?z=s.DEPTH32F_STENCIL8:S===Sr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===Xi?z=s.DEPTH_COMPONENT24:S===Ln?z=s.DEPTH_COMPONENT32F:S===Sr&&(z=s.DEPTH_COMPONENT16),z}function M(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),D(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,J=d.get(z);if(J){const ie=J[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(R),Object.keys(J).length===0&&d.delete(z)}n.remove(R)}function L(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const z=R.source,J=d.get(z);delete J[S.__cacheKey],a.memory.textures--}function D(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ie=0;ie<S.__webglFramebuffer[J].length;ie++)s.deleteFramebuffer(S.__webglFramebuffer[J][ie]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,ie=z.length;J<ie;J++){const Z=n.get(z[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(R)}let v=0;function y(){v=0}function I(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function N(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function G(R,S){const z=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(z,R,S);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ae(z,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function B(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ae(z,R,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function se(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){H(z,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const W={[pn]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},he={[Ut]:s.NEAREST,[dd]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[Ua]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},k={[np]:s.NEVER,[cp]:s.ALWAYS,[ip]:s.LESS,[Sd]:s.LEQUAL,[sp]:s.EQUAL,[op]:s.GEQUAL,[rp]:s.GREATER,[ap]:s.NOTEQUAL};function q(R,S){if(S.type===Ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===Ua||S.magFilter===ur||S.magFilter===ei||S.minFilter===un||S.minFilter===Ua||S.minFilter===ur||S.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,W[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,k[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==ur&&S.minFilter!==ei||S.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const Z=N(S);if(Z!==R.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[Z].usedTimes++;const Pe=ie[R.__cacheKey];Pe!==void 0&&(ie[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&L(S)),R.__cacheKey=Z,R.__webglTexture=ie[Z].texture}return z}function ae(R,S,z){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const ie=ne(R,S),Z=S.source;t.bindTexture(J,R.__webglTexture,s.TEXTURE0+z);const Pe=n.get(Z);if(Z.version!==Pe.__version||ie===!0){t.activeTexture(s.TEXTURE0+z);const be=nt.getPrimaries(nt.workingColorSpace),_e=S.colorSpace===vi?null:nt.getPrimaries(S.colorSpace),Xe=S.colorSpace===vi||be===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ce=b(S.image,!1,i.maxTextureSize);ce=Ne(S,ce);const Me=r.convert(S.format,S.colorSpace),ze=r.convert(S.type);let He=_(S.internalFormat,Me,ze,S.colorSpace,S.isVideoTexture);q(J,S);let Ce;const Ze=S.mipmaps,je=S.isVideoTexture!==!0,it=Pe.__version===void 0||ie===!0,U=Z.dataReady,xe=M(S,ce);if(S.isDepthTexture)He=x(S.format===qi,S.type),it&&(je?t.texStorage2D(s.TEXTURE_2D,1,He,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,He,ce.width,ce.height,0,Me,ze,null));else if(S.isDataTexture)if(Ze.length>0){je&&it&&t.texStorage2D(s.TEXTURE_2D,xe,He,Ze[0].width,Ze[0].height);for(let K=0,te=Ze.length;K<te;K++)Ce=Ze[K],je?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Me,ze,Ce.data):t.texImage2D(s.TEXTURE_2D,K,He,Ce.width,Ce.height,0,Me,ze,Ce.data);S.generateMipmaps=!1}else je?(it&&t.texStorage2D(s.TEXTURE_2D,xe,He,ce.width,ce.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Me,ze,ce.data)):t.texImage2D(s.TEXTURE_2D,0,He,ce.width,ce.height,0,Me,ze,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,He,Ze[0].width,Ze[0].height,ce.depth);for(let K=0,te=Ze.length;K<te;K++)if(Ce=Ze[K],S.format!==sn)if(Me!==null)if(je){if(U)if(S.layerUpdates.size>0){const Se=iu(Ce.width,Ce.height,S.format,S.type);for(const Te of S.layerUpdates){const tt=Ce.data.subarray(Te*Se/Ce.data.BYTES_PER_ELEMENT,(Te+1)*Se/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Te,Ce.width,Ce.height,1,Me,tt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,ce.depth,Me,Ce.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,He,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,ce.depth,Me,ze,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,He,Ce.width,Ce.height,ce.depth,0,Me,ze,Ce.data)}else{je&&it&&t.texStorage2D(s.TEXTURE_2D,xe,He,Ze[0].width,Ze[0].height);for(let K=0,te=Ze.length;K<te;K++)Ce=Ze[K],S.format!==sn?Me!==null?je?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Me,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,K,He,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Me,ze,Ce.data):t.texImage2D(s.TEXTURE_2D,K,He,Ce.width,Ce.height,0,Me,ze,Ce.data)}else if(S.isDataArrayTexture)if(je){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,He,ce.width,ce.height,ce.depth),U)if(S.layerUpdates.size>0){const K=iu(ce.width,ce.height,S.format,S.type);for(const te of S.layerUpdates){const Se=ce.data.subarray(te*K/ce.data.BYTES_PER_ELEMENT,(te+1)*K/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,Me,ze,Se)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,ze,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,Me,ze,ce.data);else if(S.isData3DTexture)je?(it&&t.texStorage3D(s.TEXTURE_3D,xe,He,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,ze,ce.data)):t.texImage3D(s.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,Me,ze,ce.data);else if(S.isFramebufferTexture){if(it)if(je)t.texStorage2D(s.TEXTURE_2D,xe,He,ce.width,ce.height);else{let K=ce.width,te=ce.height;for(let Se=0;Se<xe;Se++)t.texImage2D(s.TEXTURE_2D,Se,He,K,te,0,Me,ze,null),K>>=1,te>>=1}}else if(Ze.length>0){if(je&&it){const K=ye(Ze[0]);t.texStorage2D(s.TEXTURE_2D,xe,He,K.width,K.height)}for(let K=0,te=Ze.length;K<te;K++)Ce=Ze[K],je?U&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me,ze,Ce):t.texImage2D(s.TEXTURE_2D,K,He,Me,ze,Ce);S.generateMipmaps=!1}else if(je){if(it){const K=ye(ce);t.texStorage2D(s.TEXTURE_2D,xe,He,K.width,K.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,ze,ce)}else t.texImage2D(s.TEXTURE_2D,0,He,Me,ze,ce);p(S)&&g(J),Pe.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function H(R,S,z){if(S.image.length!==6)return;const J=ne(R,S),ie=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const Z=n.get(ie);if(ie.version!==Z.__version||J===!0){t.activeTexture(s.TEXTURE0+z);const Pe=nt.getPrimaries(nt.workingColorSpace),be=S.colorSpace===vi?null:nt.getPrimaries(S.colorSpace),_e=S.colorSpace===vi||Pe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!Xe&&!ce?Me[te]=b(S.image[te],!0,i.maxCubemapSize):Me[te]=ce?S.image[te].image:S.image[te],Me[te]=Ne(S,Me[te]);const ze=Me[0],He=r.convert(S.format,S.colorSpace),Ce=r.convert(S.type),Ze=_(S.internalFormat,He,Ce,S.colorSpace),je=S.isVideoTexture!==!0,it=Z.__version===void 0||J===!0,U=ie.dataReady;let xe=M(S,ze);q(s.TEXTURE_CUBE_MAP,S);let K;if(Xe){je&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ze,ze.width,ze.height);for(let te=0;te<6;te++){K=Me[te].mipmaps;for(let Se=0;Se<K.length;Se++){const Te=K[Se];S.format!==sn?He!==null?je?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Te.width,Te.height,He,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Te.width,Te.height,He,Ce,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,Ze,Te.width,Te.height,0,He,Ce,Te.data)}}}else{if(K=S.mipmaps,je&&it){K.length>0&&xe++;const te=ye(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(ce){je?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,He,Ce,Me[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,Me[te].width,Me[te].height,0,He,Ce,Me[te].data);for(let Se=0;Se<K.length;Se++){const tt=K[Se].image[te].image;je?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,tt.width,tt.height,He,Ce,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Ze,tt.width,tt.height,0,He,Ce,tt.data)}}else{je?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Ce,Me[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,He,Ce,Me[te]);for(let Se=0;Se<K.length;Se++){const Te=K[Se];je?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,He,Ce,Te.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,Ze,He,Ce,Te.image[te])}}}p(S)&&g(s.TEXTURE_CUBE_MAP),Z.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function V(R,S,z,J,ie,Z){const Pe=r.convert(z.format,z.colorSpace),be=r.convert(z.type),_e=_(z.internalFormat,Pe,be,z.colorSpace);if(!n.get(S).__hasExternalTextures){const ce=Math.max(1,S.width>>Z),Me=Math.max(1,S.height>>Z);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,_e,ce,Me,S.depth,0,Pe,be,null):t.texImage2D(ie,Z,_e,ce,Me,0,Pe,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ie,n.get(z).__webglTexture,0,ue(S)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ie,n.get(z).__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(R,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Z=x(S.stencilBuffer,ie),Pe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ue(S);oe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,Z,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,R)}else{const J=S.textures;for(let ie=0;ie<J.length;ie++){const Z=J[ie],Pe=r.convert(Z.format,Z.colorSpace),be=r.convert(Z.type),_e=_(Z.internalFormat,Pe,be,Z.colorSpace),Xe=ue(S);z&&oe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,_e,S.width,S.height):oe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,ie=ue(S);if(S.depthTexture.format===Es)oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===qi)oe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");re(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),de(S.__webglDepthbuffer[J],R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),de(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(R,S,z){const J=n.get(R);S!==void 0&&V(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ae(R)}function Le(R){const S=R.texture,z=n.get(R),J=n.get(S);R.addEventListener("dispose",w);const ie=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[be]=[];for(let _e=0;_e<S.mipmaps.length;_e++)z.__webglFramebuffer[be][_e]=s.createFramebuffer()}else z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)z.__webglFramebuffer[be]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let be=0,_e=ie.length;be<_e;be++){const Xe=n.get(ie[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&oe(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let be=0;be<ie.length;be++){const _e=ie[be];z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[be]);const Xe=r.convert(_e.format,_e.colorSpace),ce=r.convert(_e.type),Me=_(_e.internalFormat,Xe,ce,_e.colorSpace,R.isXRRenderTarget===!0),ze=ue(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),de(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),q(s.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)V(z.__webglFramebuffer[be][_e],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,_e);else V(z.__webglFramebuffer[be],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);p(S)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let be=0,_e=ie.length;be<_e;be++){const Xe=ie[be],ce=n.get(Xe);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),q(s.TEXTURE_2D,Xe),V(z.__webglFramebuffer,R,Xe,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),p(Xe)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,J.__webglTexture),q(be,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)V(z.__webglFramebuffer[_e],R,S,s.COLOR_ATTACHMENT0,be,_e);else V(z.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,be,0);p(S)&&g(be),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Be(R){const S=R.textures;for(let z=0,J=S.length;z<J;z++){const ie=S[z];if(p(ie)){const Z=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pe=n.get(ie).__webglTexture;t.bindTexture(Z,Pe),g(Z),t.unbindTexture()}}}const Q=[],P=[];function pe(R){if(R.samples>0){if(oe(R)===!1){const S=R.textures,z=R.width,J=R.height;let ie=s.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(R),be=S.length>1;if(be)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Xe=n.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,z,J,0,0,z,J,ie,s.NEAREST),c===!0&&(Q.length=0,P.length=0,Q.push(s.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Xe=n.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ue(R){return Math.min(i.maxSamples,R.samples)}function oe(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ne(R,S){const z=R.colorSpace,J=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==zt&&z!==vi&&(nt.getTransfer(z)===pt?(J!==sn||ie!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=B,this.setTextureCube=se,this.rebindTextures=Re,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=V,this.useMultisampledRTT=oe}function Rv(s,e){function t(n,i=vi){let r;const a=nt.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return s.BYTE;if(n===pd)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===ji)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===gd)return s.ALPHA;if(n===bd)return s.RGB;if(n===sn)return s.RGBA;if(n===vd)return s.LUMINANCE;if(n===xd)return s.LUMINANCE_ALPHA;if(n===Es)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===El)return s.RED_INTEGER;if(n===_d)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Rl)return s.RGBA_INTEGER;if(n===Fa||n===Oa||n===ka||n===Ba)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Ic||n===Dc||n===Nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Fc||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Fc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Bc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===jc||n===Xc||n===qc||n===Kc||n===Yc||n===Jc||n===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Qc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Md||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Cv extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const p=t.getJointPose(b,n),g=this._getHandJoint(l,b);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Et({vertexShader:Lv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nv extends Yi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const b=new Dv,p=t.getContextAttributes();let g=null,_=null;const x=[],M=[],A=new ee;let w=null;const T=new Yt;T.layers.enable(1),T.viewport=new st;const L=new Yt;L.layers.enable(2),L.viewport=new st;const D=[T,L],v=new Cv;v.layers.enable(1),v.layers.enable(2);let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=x[H];return V===void 0&&(V=new qo,x[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=x[H];return V===void 0&&(V=new qo,x[H]=V),V.getGripSpace()},this.getHand=function(H){let V=x[H];return V===void 0&&(V=new qo,x[H]=V),V.getHandSpace()};function N(H){const V=M.indexOf(H.inputSource);if(V===-1)return;const de=x[V];de!==void 0&&(de.update(H.inputSource,H.frame,l||a),de.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let H=0;H<x.length;H++){const V=M[H];V!==null&&(M[H]=null,x[H].disconnect(V))}y=null,I=null,b.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,_=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const V={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new rn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,de=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=p.stencil?qi:Es,de=p.stencil?Xi:ji);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new rn(d.textureWidth,d.textureHeight,{format:sn,type:On,depthTexture:new Ul(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Y(H){for(let V=0;V<H.removed.length;V++){const de=H.removed[V],re=M.indexOf(de);re>=0&&(M[re]=null,x[re].disconnect(de))}for(let V=0;V<H.added.length;V++){const de=H.added[V];let re=M.indexOf(de);if(re===-1){for(let Re=0;Re<x.length;Re++)if(Re>=M.length){M.push(de),re=Re;break}else if(M[Re]===null){M[Re]=de,re=Re;break}if(re===-1)break}const Ae=x[re];Ae&&Ae.connect(de)}}const B=new C,se=new C;function W(H,V,de){B.setFromMatrixPosition(V.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const re=B.distanceTo(se),Ae=V.projectionMatrix.elements,Re=de.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),Q=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],pe=(Ae[8]-1)/Ae[0],ue=(Re[8]+1)/Re[0],oe=Le*pe,ge=Le*ue,Ne=re/(-pe+ue),ye=Ne*-pe;if(V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ye),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ae[10]===-1)H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const R=Le+Ne,S=Be+Ne,z=oe-ye,J=ge+(re-ye),ie=Q*Be/S*R,Z=P*Be/S*R;H.projectionMatrix.makePerspective(z,J,ie,Z,R,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function he(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let V=H.near,de=H.far;b.texture!==null&&(b.depthNear>0&&(V=b.depthNear),b.depthFar>0&&(de=b.depthFar)),v.near=L.near=T.near=V,v.far=L.far=T.far=de,(y!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,I=v.far);const re=H.parent,Ae=v.cameras;he(v,re);for(let Re=0;Re<Ae.length;Re++)he(Ae[Re],re);Ae.length===2?W(v,T,L):v.projectionMatrix.copy(T.projectionMatrix),k(H,v,re)};function k(H,V,de){de===null?H.matrix.copy(V.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(V.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ns*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let q=null;function ne(H,V){if(h=V.getViewerPose(l||a),m=V,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let re=!1;de.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let Re=0;Re<de.length;Re++){const Le=de[Re];let Be=null;if(f!==null)Be=f.getViewport(Le);else{const P=u.getViewSubImage(d,Le);Be=P.viewport,Re===0&&(e.setRenderTargetTextures(_,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let Q=D[Re];Q===void 0&&(Q=new Yt,Q.layers.enable(Re),Q.viewport=new st,D[Re]=Q),Q.matrix.fromArray(Le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Be.x,Be.y,Be.width,Be.height),Re===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(Q)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=u.getDepthInformation(de[0]);Re&&Re.isValid&&Re.texture&&b.init(e,Re,i.renderState)}}for(let de=0;de<x.length;de++){const re=M[de],Ae=x[de];re!==null&&Ae!==void 0&&Ae.update(re,V,l||a)}q&&q(H,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),m=null}const ae=new Dd;ae.setAnimationLoop(ne),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}const Di=new In,Uv=new Oe;function Fv(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Pd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,x,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),b(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,_,x):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Vt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Vt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),x=_.envMap,M=_.envMapRotation;x&&(p.envMap.value=x,Di.copy(M),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),p.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Di)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function b(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ov(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const M=x.program;n.uniformBlockBinding(_,M)}function l(_,x){let M=i[_.id];M===void 0&&(m(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(_,A);const w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){const x=u();_.__bindingPointIndex=x;const M=s.createBuffer(),A=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],M=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,T=M.length;w<T;w++){const L=Array.isArray(M[w])?M[w]:[M[w]];for(let D=0,v=L.length;D<v;D++){const y=L[D];if(f(y,w,D,A)===!0){const I=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let G=0;for(let Y=0;Y<N.length;Y++){const B=N[Y],se=b(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,I+G,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):(B.toArray(y.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,M,A){const w=_.value,T=x+"_"+M;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const L=A[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(_){const x=_.uniforms;let M=0;const A=16;for(let T=0,L=x.length;T<L;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,y=D.length;v<y;v++){const I=D[v],N=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Y=N.length;G<Y;G++){const B=N[G],se=b(B),W=M%A,he=W%se.boundary,k=W+he;M+=he,k!==0&&A-k<se.storage&&(M+=A-k),I.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=se.storage}}}const w=M%A;return w>0&&(M+=A-w),_.__size=M,_.__cache={},this}function b(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}class kv{constructor(e={}){const{canvas:t=Ep(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let b=null,p=null;const g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let M=!1,A=0,w=0,T=null,L=-1,D=null;const v=new st,y=new st;let I=null;const N=new fe(0);let G=0,Y=t.width,B=t.height,se=1,W=null,he=null;const k=new st(0,0,Y,B),q=new st(0,0,Y,B);let ne=!1;const ae=new Dl;let H=!1,V=!1;const de=new Oe,re=new Oe,Ae=new C,Re=new st,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Q(){return T===null?se:1}let P=n;function pe(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),P===null){const F="webgl2";if(P=pe(F,E),P===null)throw pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ue,oe,ge,Ne,ye,R,S,z,J,ie,Z,Pe,be,_e,Xe,ce,Me,ze,He,Ce,Ze,je,it,U;function xe(){ue=new V0(P),ue.init(),je=new Rv(P,ue),oe=new O0(P,ue,e,je),ge=new Tv(P),oe.reverseDepthBuffer&&ge.buffers.depth.setReversed(!0),Ne=new X0(P),ye=new hv,R=new Av(P,ue,ge,ye,oe,je,Ne),S=new B0(x),z=new G0(x),J=new $p(P),it=new U0(P,J),ie=new W0(P,J,Ne,it),Z=new K0(P,ie,J,Ne),He=new q0(P,oe,R),ce=new k0(ye),Pe=new lv(x,S,z,ue,oe,it,ce),be=new Fv(x,ye),_e=new dv,Xe=new vv(ue),ze=new N0(x,S,z,ge,Z,d,c),Me=new Sv(x,Z,oe),U=new Ov(P,Ne,oe,ge),Ce=new F0(P,ue,Ne),Ze=new j0(P,ue,Ne),Ne.programs=Pe.programs,x.capabilities=oe,x.extensions=ue,x.properties=ye,x.renderLists=_e,x.shadowMap=Me,x.state=ge,x.info=Ne}xe();const K=new Nv(x,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(Y,B,!1))},this.getSize=function(E){return E.set(Y,B)},this.setSize=function(E,F,j=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,B=F,t.width=Math.floor(E*se),t.height=Math.floor(F*se),j===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Y*se,B*se).floor()},this.setDrawingBufferSize=function(E,F,j){Y=E,B=F,se=j,t.width=Math.floor(E*j),t.height=Math.floor(F*j),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,F,j,X){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,F,j,X),ge.viewport(v.copy(k).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,F,j,X){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,F,j,X),ge.scissor(y.copy(q).multiplyScalar(se).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){ge.setScissorTest(ne=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(E=!0,F=!0,j=!0){let X=0;if(E){let O=!1;if(T!==null){const me=T.texture.format;O=me===Rl||me===Al||me===El}if(O){const me=T.texture.type,we=me===On||me===ji||me===Sr||me===Xi||me===Sl||me===wl,Ie=ze.getClearColor(),Ue=ze.getClearAlpha(),Ge=Ie.r,Ve=Ie.g,Fe=Ie.b;we?(f[0]=Ge,f[1]=Ve,f[2]=Fe,f[3]=Ue,P.clearBufferuiv(P.COLOR,0,f)):(m[0]=Ge,m[1]=Ve,m[2]=Fe,m[3]=Ue,P.clearBufferiv(P.COLOR,0,m))}else X|=P.COLOR_BUFFER_BIT}F&&(X|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),_e.dispose(),Xe.dispose(),ye.dispose(),S.dispose(),z.dispose(),Z.dispose(),it.dispose(),U.dispose(),Pe.dispose(),K.dispose(),K.removeEventListener("sessionstart",th),K.removeEventListener("sessionend",nh),Ai.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Ne.autoReset,F=Me.enabled,j=Me.autoUpdate,X=Me.needsUpdate,O=Me.type;xe(),Ne.autoReset=E,Me.enabled=F,Me.autoUpdate=j,Me.needsUpdate=X,Me.type=O}function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function tt(E){const F=E.target;F.removeEventListener("dispose",tt),Rt(F)}function Rt(E){Zt(E),ye.remove(E)}function Zt(E){const F=ye.get(E).programs;F!==void 0&&(F.forEach(function(j){Pe.releaseProgram(j)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,j,X,O,me){F===null&&(F=Le);const we=O.isMesh&&O.matrixWorld.determinant()<0,Ie=yf(E,F,j,X,O);ge.setMaterial(X,we);let Ue=j.index,Ge=1;if(X.wireframe===!0){if(Ue=ie.getWireframeAttribute(j),Ue===void 0)return;Ge=2}const Ve=j.drawRange,Fe=j.attributes.position;let lt=Ve.start*Ge,gt=(Ve.start+Ve.count)*Ge;me!==null&&(lt=Math.max(lt,me.start*Ge),gt=Math.min(gt,(me.start+me.count)*Ge)),Ue!==null?(lt=Math.max(lt,0),gt=Math.min(gt,Ue.count)):Fe!=null&&(lt=Math.max(lt,0),gt=Math.min(gt,Fe.count));const St=gt-lt;if(St<0||St===1/0)return;it.setup(O,X,Ie,j,Ue);let on,at=Ce;if(Ue!==null&&(on=J.get(Ue),at=Ze,at.setIndex(on)),O.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Q()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(O.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),ge.setLineWidth(ke*Q()),O.isLineSegments?at.setMode(P.LINES):O.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else O.isPoints?at.setMode(P.POINTS):O.isSprite&&at.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,Ot=O._multiDrawCounts,ot=O._multiDrawCount,wn=Ue?J.get(Ue).bytesPerElement:1,Zi=ye.get(X).currentProgram.getUniforms();for(let cn=0;cn<ot;cn++)Zi.setValue(P,"_gl_DrawID",cn),at.render(ke[cn]/wn,Ot[cn])}else if(O.isInstancedMesh)at.renderInstances(lt,St,O.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ot=Math.min(j.instanceCount,ke);at.renderInstances(lt,St,Ot)}else at.render(lt,St)};function rt(E,F,j){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Vr(E,F,j),E.side=si,E.needsUpdate=!0,Vr(E,F,j),E.side=_n):Vr(E,F,j)}this.compile=function(E,F,j=null){j===null&&(j=E),p=Xe.get(j),p.init(F),_.push(p),j.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==j&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ie=me[we];rt(Ie,j,O),X.add(Ie)}else rt(me,j,O),X.add(me)}),_.pop(),p=null,X},this.compileAsync=function(E,F,j=null){const X=this.compile(E,F,j);return new Promise(O=>{function me(){if(X.forEach(function(we){ye.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){O(E);return}setTimeout(me,10)}ue.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Qt=null;function Vn(E){Qt&&Qt(E)}function th(){Ai.stop()}function nh(){Ai.start()}const Ai=new Dd;Ai.setAnimationLoop(Vn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){Qt=E,K.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},K.addEventListener("sessionstart",th),K.addEventListener("sessionend",nh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,T),p=Xe.get(E,_.length),p.init(F),_.push(p),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ae.setFromProjectionMatrix(re),V=this.localClippingEnabled,H=ce.init(this.clippingPlanes,V),b=_e.get(E,g.length),b.init(),g.push(b),K.enabled===!0&&K.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&mo(me,F,-1/0,x.sortObjects)}mo(E,F,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(W,he),Be=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Be&&ze.addToRenderList(b,E),this.info.render.frame++,H===!0&&ce.beginShadows();const j=p.state.shadowsArray;Me.render(j,E,F),H===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=b.opaque,O=b.transmissive;if(p.setupLights(),F.isArrayCamera){const me=F.cameras;if(O.length>0)for(let we=0,Ie=me.length;we<Ie;we++){const Ue=me[we];sh(X,O,E,Ue)}Be&&ze.render(E);for(let we=0,Ie=me.length;we<Ie;we++){const Ue=me[we];ih(b,E,Ue,Ue.viewport)}}else O.length>0&&sh(X,O,E,F),Be&&ze.render(E),ih(b,E,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,F),it.resetDefaultState(),L=-1,D=null,_.pop(),_.length>0?(p=_[_.length-1],H===!0&&ce.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function mo(E,F,j,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){X&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const we=Z.update(E),Ie=E.material;Ie.visible&&b.push(E,we,Ie,j,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const we=Z.update(E),Ie=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Re.copy(we.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Ie)){const Ue=we.groups;for(let Ge=0,Ve=Ue.length;Ge<Ve;Ge++){const Fe=Ue[Ge],lt=Ie[Fe.materialIndex];lt&&lt.visible&&b.push(E,we,lt,j,Re.z,Fe)}}else Ie.visible&&b.push(E,we,Ie,j,Re.z,null)}}const me=E.children;for(let we=0,Ie=me.length;we<Ie;we++)mo(me[we],F,j,X)}function ih(E,F,j,X){const O=E.opaque,me=E.transmissive,we=E.transparent;p.setupLightsView(j),H===!0&&ce.setGlobalState(x.clippingPlanes,j),X&&ge.viewport(v.copy(X)),O.length>0&&Gr(O,F,j),me.length>0&&Gr(me,F,j),we.length>0&&Gr(we,F,j),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function sh(E,F,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new rn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?yn:On,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[X.id],we=X.viewport||v;me.setSize(we.z,we.w);const Ie=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(N),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ze.render(j);const Ue=x.toneMapping;x.toneMapping=yi;const Ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),H===!0&&ce.setGlobalState(x.clippingPlanes,X),Gr(E,j,X),R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,lt=F.length;Fe<lt;Fe++){const gt=F[Fe],St=gt.object,on=gt.geometry,at=gt.material,ke=gt.group;if(at.side===_n&&St.layers.test(X.layers)){const Ot=at.side;at.side=Vt,at.needsUpdate=!0,rh(St,j,X,on,at,ke),at.side=Ot,at.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me))}x.setRenderTarget(Ie),x.setClearColor(N,G),Ge!==void 0&&(X.viewport=Ge),x.toneMapping=Ue}function Gr(E,F,j){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,me=E.length;O<me;O++){const we=E[O],Ie=we.object,Ue=we.geometry,Ge=X===null?we.material:X,Ve=we.group;Ie.layers.test(j.layers)&&rh(Ie,F,j,Ue,Ge,Ve)}}function rh(E,F,j,X,O,me){E.onBeforeRender(x,F,j,X,O,me),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,j,X,E,me),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,x.renderBufferDirect(j,F,X,O,E,me),O.side=si,O.needsUpdate=!0,x.renderBufferDirect(j,F,X,O,E,me),O.side=_n):x.renderBufferDirect(j,F,X,O,E,me),E.onAfterRender(x,F,j,X,O,me)}function Vr(E,F,j){F.isScene!==!0&&(F=Le);const X=ye.get(E),O=p.state.lights,me=p.state.shadowsArray,we=O.state.version,Ie=Pe.getParameters(E,O.state,me,F,j),Ue=Pe.getProgramCacheKey(Ie);let Ge=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",tt),Ge=new Map,X.programs=Ge);let Ve=Ge.get(Ue);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===we)return oh(E,Ie),Ve}else Ie.uniforms=Pe.getUniforms(E),E.onBeforeCompile(Ie,x),Ve=Pe.acquireProgram(Ie,Ue),Ge.set(Ue,Ve),X.uniforms=Ie.uniforms;const Fe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ce.uniform),oh(E,Ie),X.needsLights=wf(E),X.lightsStateVersion=we,X.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function ah(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ga.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function oh(E,F){const j=ye.get(E);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function yf(E,F,j,X,O){F.isScene!==!0&&(F=Le),R.resetTextureUnits();const me=F.fog,we=X.isMeshStandardMaterial?F.environment:null,Ie=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zt,Ue=(X.isMeshStandardMaterial?z:S).get(X.envMap||we),Ge=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,gt=!!j.morphAttributes.color;let St=yi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(St=x.toneMapping);const on=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=on!==void 0?on.length:0,ke=ye.get(X),Ot=p.state.lights;if(H===!0&&(V===!0||E!==D)){const bn=E===D&&X.id===L;ce.setState(X,E,bn)}let ot=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ot.state.version||ke.outputColorSpace!==Ie||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Ue||X.fog===!0&&ke.fog!==me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ce.numPlanes||ke.numIntersection!==ce.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ve||ke.morphTargets!==Fe||ke.morphNormals!==lt||ke.morphColors!==gt||ke.toneMapping!==St||ke.morphTargetsCount!==at)&&(ot=!0):(ot=!0,ke.__version=X.version);let wn=ke.currentProgram;ot===!0&&(wn=Vr(X,F,O));let Zi=!1,cn=!1,go=!1;const Tt=wn.getUniforms(),oi=ke.uniforms;if(ge.useProgram(wn.program)&&(Zi=!0,cn=!0,go=!0),X.id!==L&&(L=X.id,cn=!0),Zi||D!==E){oe.reverseDepthBuffer?(de.copy(E.projectionMatrix),Rp(de),Cp(de),Tt.setValue(P,"projectionMatrix",de)):Tt.setValue(P,"projectionMatrix",E.projectionMatrix),Tt.setValue(P,"viewMatrix",E.matrixWorldInverse);const bn=Tt.map.cameraPosition;bn!==void 0&&bn.setValue(P,Ae.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,cn=!0,go=!0)}if(O.isSkinnedMesh){Tt.setOptional(P,O,"bindMatrix"),Tt.setOptional(P,O,"bindMatrixInverse");const bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Tt.setValue(P,"boneTexture",bn.boneTexture,R))}O.isBatchedMesh&&(Tt.setOptional(P,O,"batchingTexture"),Tt.setValue(P,"batchingTexture",O._matricesTexture,R),Tt.setOptional(P,O,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",O._indirectTexture,R),Tt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",O._colorsTexture,R));const bo=j.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&He.update(O,j,wn),(cn||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,Tt.setValue(P,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(oi.envMap.value=Ue,oi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(oi.envMapIntensity.value=F.environmentIntensity),cn&&(Tt.setValue(P,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Sf(oi,go),me&&X.fog===!0&&be.refreshFogUniforms(oi,me),be.refreshMaterialUniforms(oi,X,se,B,p.state.transmissionRenderTarget[E.id]),Ga.upload(P,ah(ke),oi,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ga.upload(P,ah(ke),oi,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(P,"center",O.center),Tt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(P,"normalMatrix",O.normalMatrix),Tt.setValue(P,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const bn=X.uniformsGroups;for(let vo=0,Tf=bn.length;vo<Tf;vo++){const ch=bn[vo];U.update(ch,wn),U.bind(ch,wn)}}return wn}function Sf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function wf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,F,j){ye.get(E.texture).__webglTexture=F,ye.get(E.depthTexture).__webglTexture=j;const X=ye.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const j=ye.get(E);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,j=0){T=E,A=F,w=j;let X=!0,O=null,me=!1,we=!1;if(E){const Ue=ye.get(E);if(Ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Ue.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ue.__hasExternalTextures)R.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&ye.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const Ve=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?O=Ve[F][j]:O=Ve[F],me=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[j]:O=Ve,v.copy(E.viewport),y.copy(E.scissor),I=E.scissorTest}else v.copy(k).multiplyScalar(se).floor(),y.copy(q).multiplyScalar(se).floor(),I=ne;if(ge.bindFramebuffer(P.FRAMEBUFFER,O)&&X&&ge.drawBuffers(E,O),ge.viewport(v),ge.scissor(y),ge.setScissorTest(I),me){const Ue=ye.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ue.__webglTexture,j)}else if(we){const Ue=ye.get(E.texture),Ge=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ue.__webglTexture,j||0,Ge)}L=-1},this.readRenderTargetPixels=function(E,F,j,X,O,me,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ge.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Ue=E.texture,Ge=Ue.format,Ve=Ue.type;if(!oe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&j>=0&&j<=E.height-O&&P.readPixels(F,j,X,O,je.convert(Ge),je.convert(Ve),me)}finally{const Ue=T!==null?ye.get(T).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,j,X,O,me,we){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){const Ue=E.texture,Ge=Ue.format,Ve=Ue.type;if(!oe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&j>=0&&j<=E.height-O){ge.bindFramebuffer(P.FRAMEBUFFER,Ie);const Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),P.readPixels(F,j,X,O,je.convert(Ge),je.convert(Ve),0);const lt=T!==null?ye.get(T).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,lt);const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ap(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.deleteBuffer(Fe),P.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,j=0){E.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-j),O=Math.floor(E.image.width*X),me=Math.floor(E.image.height*X),we=F!==null?F.x:0,Ie=F!==null?F.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,we,Ie,O,me),ge.unbindTexture()},this.copyTextureToTexture=function(E,F,j=null,X=null,O=0){E.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,j=null);let me,we,Ie,Ue,Ge,Ve;j!==null?(me=j.max.x-j.min.x,we=j.max.y-j.min.y,Ie=j.min.x,Ue=j.min.y):(me=E.image.width,we=E.image.height,Ie=0,Ue=0),X!==null?(Ge=X.x,Ve=X.y):(Ge=0,Ve=0);const Fe=je.convert(F.format),lt=je.convert(F.type);R.setTexture2D(F,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const gt=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),at=P.getParameter(P.UNPACK_SKIP_ROWS),ke=P.getParameter(P.UNPACK_SKIP_IMAGES),Ot=E.isCompressedTexture?E.mipmaps[O]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Ge,Ve,me,we,Fe,lt,Ot.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Ge,Ve,Ot.width,Ot.height,Fe,Ot.data):P.texSubImage2D(P.TEXTURE_2D,O,Ge,Ve,me,we,Fe,lt,Ot),P.pixelStorei(P.UNPACK_ROW_LENGTH,gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke),O===0&&F.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,F,j=null,X=null,O=0){E.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let me,we,Ie,Ue,Ge,Ve,Fe,lt,gt;const St=E.isCompressedTexture?E.mipmaps[O]:E.image;j!==null?(me=j.max.x-j.min.x,we=j.max.y-j.min.y,Ie=j.max.z-j.min.z,Ue=j.min.x,Ge=j.min.y,Ve=j.min.z):(me=St.width,we=St.height,Ie=St.depth,Ue=0,Ge=0,Ve=0),X!==null?(Fe=X.x,lt=X.y,gt=X.z):(Fe=0,lt=0,gt=0);const on=je.convert(F.format),at=je.convert(F.type);let ke;if(F.isData3DTexture)R.setTexture3D(F,0),ke=P.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ot=P.getParameter(P.UNPACK_ROW_LENGTH),ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(P.UNPACK_SKIP_PIXELS),Zi=P.getParameter(P.UNPACK_SKIP_ROWS),cn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(ke,O,Fe,lt,gt,me,we,Ie,on,at,St.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ke,O,Fe,lt,gt,me,we,Ie,on,St.data):P.texSubImage3D(ke,O,Fe,lt,gt,me,we,Ie,on,at,St),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cn),O===0&&F.generateMipmaps&&P.generateMipmap(ke),ge.unbindTexture()},this.initRenderTarget=function(E){ye.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,ge.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===so?"display-p3":"srgb"}}class Fl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new Fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bv extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new C;class Ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fs extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const er=new C,fs=new C,ps=new C,ms=new ee,tr=new ee,Bd=new Oe,ha=new C,nr=new C,ua=new C,su=new ee,Ko=new ee,ru=new ee;class Rr extends bt{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kd(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Ar(n,3,0,!1)),ds.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;da(ha.set(-.5,-.5,0),ps,a,fs,i,r),da(nr.set(.5,-.5,0),ps,a,fs,i,r),da(ua.set(.5,.5,0),ps,a,fs,i,r),su.set(0,0),Ko.set(1,0),ru.set(1,1);let o=e.ray.intersectTriangle(ha,nr,ua,!1,er);if(o===null&&(da(nr.set(-.5,.5,0),ps,a,fs,i,r),Ko.set(0,1),o=e.ray.intersectTriangle(ha,ua,nr,!1,er),o===null))return;const c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:Mn.getInterpolation(er,ha,nr,ua,su,Ko,ru,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function da(s,e,t,n,i,r){ms.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(tr.x=r*ms.x-i*ms.y,tr.y=i*ms.x+r*ms.y):tr.copy(ms),s.copy(e),s.x+=tr.x,s.y+=tr.y,s.applyMatrix4(Bd)}const au=new C,ou=new st,cu=new st,zv=new C,lu=new Oe,fa=new C,Yo=new Bn,hu=new Oe,Jo=new Ur;class Hv extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(i),e.ray.intersectsSphere(Yo)!==!1&&(hu.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,e),cu.fromBufferAttribute(i.attributes.skinWeight,e),au.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=cu.getComponent(r);if(a!==0){const o=ou.getComponent(r);lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zv.copy(au).applyMatrix4(lu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zd extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fr extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ut,h=Ut,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Oe,Gv=new Oe;class Ol{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Gv;uu.multiplyMatrices(o,t[r]),uu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fr(t,e,e,sn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new zd),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class al extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Oe,du=new Oe,pa=[],fu=new Dn,Vv=new Oe,ir=new De,sr=new Bn;class Pn extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),fu.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),sr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gs),du.multiplyMatrices(n,gs),ir.matrixWorld=du,ir.raycast(e,pa);for(let a=0,o=pa.length;a<o;a++){const c=pa[a];c.instanceId=r,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,Tl,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hd extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new C,eo=new C,pu=new Oe,rr=new Ur,ma=new Bn,Zo=new C,mu=new C;class kl extends bt{constructor(e=new mt,t=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$a.fromBufferAttribute(t,i-1),eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(eo);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;pu.copy(i).invert(),rr.copy(e.ray).applyMatrix4(pu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,p=m-1;b<p;b+=l){const g=h.getX(b),_=h.getX(b+1),x=ga(this,e,rr,c,g,_);x&&t.push(x)}if(this.isLineLoop){const b=h.getX(m-1),p=h.getX(f),g=ga(this,e,rr,c,b,p);g&&t.push(g)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,p=m-1;b<p;b+=l){const g=ga(this,e,rr,c,b,b+1);g&&t.push(g)}if(this.isLineLoop){const b=ga(this,e,rr,c,m-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ga(s,e,t,n,i,r){const a=s.geometry.attributes.position;if($a.fromBufferAttribute(a,i),eo.fromBufferAttribute(a,r),t.distanceSqToSegment($a,eo,Zo,mu)>n)return;Zo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Zo);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const gu=new C,bu=new C;class Wv extends kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(bu);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jv extends kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Or extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new Oe,ol=new Ur,ba=new Bn,va=new C;class oo extends bt{constructor(e=new mt,t=new Or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;vu.copy(i).invert(),ol.copy(e.ray).applyMatrix4(vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){const p=l.getX(m);va.fromBufferAttribute(u,p),xu(va,p,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)va.fromBufferAttribute(u,m),xu(va,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xu(s,e,t,n,i,r,a){const o=ol.distanceSqToPoint(s);if(o<t){const c=new C;ol.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wt extends Lt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ee:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],a=[],o=new C,c=new Oe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bl extends zn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ee){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xv extends Bl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const xa=new C,Qo=new zl,$o=new zl,ec=new zl;class qv extends zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(xa.subVectors(i[0],i[1]).add(i[0]),l=xa);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(xa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),p<1e-4&&(p=b),Qo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,b,p),$o.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,b,p),ec.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,b,p)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),$o.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ec.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Qo.calc(c),$o.calc(c),ec.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Kv(s,e){const t=1-s;return t*t*e}function Yv(s,e){return 2*(1-s)*s*e}function Jv(s,e){return s*s*e}function mr(s,e,t,n){return Kv(s,e)+Yv(s,t)+Jv(s,n)}function Zv(s,e){const t=1-s;return t*t*t*e}function Qv(s,e){const t=1-s;return 3*t*t*s*e}function $v(s,e){return 3*(1-s)*s*s*e}function ex(s,e){return s*s*s*e}function gr(s,e,t,n,i){return Zv(s,e)+Qv(s,t)+$v(s,n)+ex(s,i)}class Gd extends zn{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,r.x,a.x,o.x),gr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tx extends zn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,i.x,r.x,a.x,o.x),gr(e,i.y,r.y,a.y,o.y),gr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vd extends zn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nx extends zn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends zn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,i.x,r.x,a.x),mr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ix extends zn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,i.x,r.x,a.x),mr(e,i.y,r.y,a.y),mr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(_u(o,c.x,l.x,h.x,u.x),_u(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:Xv,CatmullRomCurve3:qv,CubicBezierCurve:Gd,CubicBezierCurve3:tx,EllipseCurve:Bl,LineCurve:Vd,LineCurve3:nx,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:ix,SplineCurve:jd});class sx extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new cl[i.type]().fromJSON(i))}return this}}class Mu extends sx{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vd(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Wd(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Gd(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new jd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Bl(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hl extends mt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,d=new ee,f=new C,m=new C,b=new C;let p=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:p=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(m)}for(let _=0;_<=t;_++){const x=n+_*h*i,M=Math.sin(x),A=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*M,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=w/(e.length-1),o.push(d.x,d.y);const T=c[3*w+0]*M,L=c[3*w+1],D=c[3*w+0]*A;l.push(T,L,D)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){const M=x+_*e.length,A=M,w=M+e.length,T=M+e.length+1,L=M+1;r.push(A,w,L),r.push(T,L,w)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.points,e.segments,e.phiStart,e.phiLength)}}class Ei extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,h=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const b=[],p=n/2;let g=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function _(){const M=new C,A=new C;let w=0;const T=(t-e)/n;for(let L=0;L<=r;L++){const D=[],v=L/r,y=v*(t-e)+e;for(let I=0;I<=i;I++){const N=I/i,G=N*c+o,Y=Math.sin(G),B=Math.cos(G);A.x=y*Y,A.y=-v*n+p,A.z=y*B,u.push(A.x,A.y,A.z),M.set(Y,T,B).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-v),D.push(m++)}b.push(D)}for(let L=0;L<i;L++)for(let D=0;D<r;D++){const v=b[D][L],y=b[D+1][L],I=b[D+1][L+1],N=b[D][L+1];e>0&&(h.push(v,y,N),w+=3),t>0&&(h.push(y,I,N),w+=3)}l.addGroup(g,w,0),g+=w}function x(M){const A=m,w=new ee,T=new C;let L=0;const D=M===!0?e:t,v=M===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),m++;const y=m;for(let I=0;I<=i;I++){const G=I/i*c+o,Y=Math.cos(G),B=Math.sin(G);T.x=D*B,T.y=p*v,T.z=D*Y,u.push(T.x,T.y,T.z),d.push(0,v,0),w.x=Y*.5+.5,w.y=B*.5*v+.5,f.push(w.x,w.y),m++}for(let I=0;I<i;I++){const N=A+I,G=y+I;M===!0?h.push(G,G+1,N):h.push(G+1,G,N),L+=3}l.addGroup(g,L,M===!0?1:2),g+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends At{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const x=new C,M=new C,A=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],M),f(t[w+2],A),c(x,M,A,_)}function c(_,x,M,A){const w=A+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const D=_.clone().lerp(M,L/w),v=x.clone().lerp(M,L/w),y=w-L;for(let I=0;I<=y;I++)I===0&&L===w?T[L][I]=D:T[L][I]=D.clone().lerp(v,I/y)}for(let L=0;L<w;L++)for(let D=0;D<2*(w-L)-1;D++){const v=Math.floor(D/2);D%2===0?(d(T[L][v+1]),d(T[L+1][v]),d(T[L][v])):(d(T[L][v+1]),d(T[L+1][v+1]),d(T[L+1][v]))}}function l(_){const x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const _=new C;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const M=p(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(M,1-A)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){const x=a[_+0],M=a[_+2],A=a[_+4],w=Math.max(x,M,A),T=Math.min(x,M,A);w>.9&&T<.1&&(x<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){const M=_*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function m(){const _=new C,x=new C,M=new C,A=new C,w=new ee,T=new ee,L=new ee;for(let D=0,v=0;D<r.length;D+=9,v+=6){_.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),w.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),A.copy(_).add(x).add(M).divideScalar(3);const y=p(A);b(w,v+0,_,y),b(T,v+2,x,y),b(L,v+4,M,y)}}function b(_,x,M,A){A<0&&_.x===1&&(a[x]=_.x-1),M.x===0&&M.z===0&&(a[x]=A/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.vertices,e.indices,e.radius,e.details)}}class kr extends Mu{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mu().fromJSON(i))}return this}}const rx={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Xd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=hx(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Pr(r,a,t,o,c,f,0),a}};function Xd(s,e,t,n,i){let r,a;if(i===Mx(s,e,t,n)>0)for(r=e;r<t;r+=n)a=yu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=yu(r,s[r],s[r+1],a);return a&&co(a,a.next)&&(Ir(a),a=a.next),a}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(co(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&mx(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?ox(s,n,i,r):ax(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ir(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=cx(Ki(s),e,t),Pr(s,e,t,n,i,r,2)):a===2&&lx(s,e,t,n,i,r):Pr(Ki(s),e,t,n,i,r,1);break}}}function ax(s){const e=s.prev,t=s,n=s.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ys(i,o,r,c,a,l,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ox(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Mt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,b=o>c?o>l?o:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,g=ll(f,m,e,t,n),_=ll(b,p,e,t,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=g&&M&&M.z<=_;){if(x.x>=f&&x.x<=b&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&ys(o,h,c,u,l,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=b&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&ys(o,h,c,u,l,d,M.x,M.y)&&Mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=b&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&ys(o,h,c,u,l,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=b&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&ys(o,h,c,u,l,d,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!co(i,r)&&qd(i,n,n.next,r)&&Lr(i,r)&&Lr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ir(n),Ir(n.next),n=s=r),n=n.next}while(n!==s);return Ki(n)}function lx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vx(a,o)){let c=Kd(a,o);a=Ki(a,a.next),c=Ki(c,c.next),Pr(a,e,t,n,i,r,0),Pr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function hx(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Xd(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(bx(l));for(i.sort(ux),r=0;r<i.length;r++)t=dx(i[r],t);return t}function ux(s,e){return s.x-e.x}function dx(s,e){const t=fx(s,e);if(!t)return e;const n=Kd(t,s);return Ki(n,n.next),Ki(t,t.next)}function fx(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ys(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Lr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&px(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function px(s,e){return Mt(s.prev,s,e.prev)<0&&Mt(e.next,s,s.next)<0}function mx(s,e,t,n){let i=s;do i.z===0&&(i.z=ll(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gx(i)}function gx(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function ll(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function bx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ys(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function vx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!xx(s,e)&&(Lr(s,e)&&Lr(e,s)&&_x(s,e)&&(Mt(s.prev,s,e.prev)||Mt(s,e.prev,e))||co(s,e)&&Mt(s.prev,s,s.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function co(s,e){return s.x===e.x&&s.y===e.y}function qd(s,e,t,n){const i=Ma(Mt(s,e,t)),r=Ma(Mt(s,e,n)),a=Ma(Mt(t,n,s)),o=Ma(Mt(t,n,e));return!!(i!==r&&a!==o||i===0&&_a(s,t,e)||r===0&&_a(s,n,e)||a===0&&_a(t,s,n)||o===0&&_a(t,e,n))}function _a(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ma(s){return s>0?1:s<0?-1:0}function xx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&qd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Lr(s,e){return Mt(s.prev,s,s.next)<0?Mt(s,e,s.next)>=0&&Mt(s,s.prev,e)>=0:Mt(s,e,s.prev)<0||Mt(s,s.next,e)<0}function _x(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Kd(s,e){const t=new hl(s.i,s.x,s.y),n=new hl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yu(s,e,t,n){const i=new hl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ir(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Si{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Su(e),wu(n,e);let a=e.length;t.forEach(Su);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,wu(n,t[c]);const o=rx.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Su(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function wu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class lo extends mt{constructor(e=new kr([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new $e(i,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:yx;let x,M=!1,A,w,T,L;g&&(x=g.getSpacedPoints(h),M=!0,d=!1,A=g.computeFrenetFrames(h,!1),w=new C,T=new C,L=new C),d||(p=0,f=0,m=0,b=0);const D=o.extractPoints(l);let v=D.shape;const y=D.holes;if(!Si.isClockWise(v)){v=v.reverse();for(let Q=0,P=y.length;Q<P;Q++){const pe=y[Q];Si.isClockWise(pe)&&(y[Q]=pe.reverse())}}const N=Si.triangulateShape(v,y),G=v;for(let Q=0,P=y.length;Q<P;Q++){const pe=y[Q];v=v.concat(pe)}function Y(Q,P,pe){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(P,pe)}const B=v.length,se=N.length;function W(Q,P,pe){let ue,oe,ge;const Ne=Q.x-P.x,ye=Q.y-P.y,R=pe.x-Q.x,S=pe.y-Q.y,z=Ne*Ne+ye*ye,J=Ne*S-ye*R;if(Math.abs(J)>Number.EPSILON){const ie=Math.sqrt(z),Z=Math.sqrt(R*R+S*S),Pe=P.x-ye/ie,be=P.y+Ne/ie,_e=pe.x-S/Z,Xe=pe.y+R/Z,ce=((_e-Pe)*S-(Xe-be)*R)/(Ne*S-ye*R);ue=Pe+Ne*ce-Q.x,oe=be+ye*ce-Q.y;const Me=ue*ue+oe*oe;if(Me<=2)return new ee(ue,oe);ge=Math.sqrt(Me/2)}else{let ie=!1;Ne>Number.EPSILON?R>Number.EPSILON&&(ie=!0):Ne<-Number.EPSILON?R<-Number.EPSILON&&(ie=!0):Math.sign(ye)===Math.sign(S)&&(ie=!0),ie?(ue=-ye,oe=Ne,ge=Math.sqrt(z)):(ue=Ne,oe=ye,ge=Math.sqrt(z/2))}return new ee(ue/ge,oe/ge)}const he=[];for(let Q=0,P=G.length,pe=P-1,ue=Q+1;Q<P;Q++,pe++,ue++)pe===P&&(pe=0),ue===P&&(ue=0),he[Q]=W(G[Q],G[pe],G[ue]);const k=[];let q,ne=he.concat();for(let Q=0,P=y.length;Q<P;Q++){const pe=y[Q];q=[];for(let ue=0,oe=pe.length,ge=oe-1,Ne=ue+1;ue<oe;ue++,ge++,Ne++)ge===oe&&(ge=0),Ne===oe&&(Ne=0),q[ue]=W(pe[ue],pe[ge],pe[Ne]);k.push(q),ne=ne.concat(q)}for(let Q=0;Q<p;Q++){const P=Q/p,pe=f*Math.cos(P*Math.PI/2),ue=m*Math.sin(P*Math.PI/2)+b;for(let oe=0,ge=G.length;oe<ge;oe++){const Ne=Y(G[oe],he[oe],ue);re(Ne.x,Ne.y,-pe)}for(let oe=0,ge=y.length;oe<ge;oe++){const Ne=y[oe];q=k[oe];for(let ye=0,R=Ne.length;ye<R;ye++){const S=Y(Ne[ye],q[ye],ue);re(S.x,S.y,-pe)}}}const ae=m+b;for(let Q=0;Q<B;Q++){const P=d?Y(v[Q],ne[Q],ae):v[Q];M?(T.copy(A.normals[0]).multiplyScalar(P.x),w.copy(A.binormals[0]).multiplyScalar(P.y),L.copy(x[0]).add(T).add(w),re(L.x,L.y,L.z)):re(P.x,P.y,0)}for(let Q=1;Q<=h;Q++)for(let P=0;P<B;P++){const pe=d?Y(v[P],ne[P],ae):v[P];M?(T.copy(A.normals[Q]).multiplyScalar(pe.x),w.copy(A.binormals[Q]).multiplyScalar(pe.y),L.copy(x[Q]).add(T).add(w),re(L.x,L.y,L.z)):re(pe.x,pe.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const P=Q/p,pe=f*Math.cos(P*Math.PI/2),ue=m*Math.sin(P*Math.PI/2)+b;for(let oe=0,ge=G.length;oe<ge;oe++){const Ne=Y(G[oe],he[oe],ue);re(Ne.x,Ne.y,u+pe)}for(let oe=0,ge=y.length;oe<ge;oe++){const Ne=y[oe];q=k[oe];for(let ye=0,R=Ne.length;ye<R;ye++){const S=Y(Ne[ye],q[ye],ue);M?re(S.x,S.y+x[h-1].y,x[h-1].x+pe):re(S.x,S.y,u+pe)}}}H(),V();function H(){const Q=i.length/3;if(d){let P=0,pe=B*P;for(let ue=0;ue<se;ue++){const oe=N[ue];Ae(oe[2]+pe,oe[1]+pe,oe[0]+pe)}P=h+p*2,pe=B*P;for(let ue=0;ue<se;ue++){const oe=N[ue];Ae(oe[0]+pe,oe[1]+pe,oe[2]+pe)}}else{for(let P=0;P<se;P++){const pe=N[P];Ae(pe[2],pe[1],pe[0])}for(let P=0;P<se;P++){const pe=N[P];Ae(pe[0]+B*h,pe[1]+B*h,pe[2]+B*h)}}n.addGroup(Q,i.length/3-Q,0)}function V(){const Q=i.length/3;let P=0;de(G,P),P+=G.length;for(let pe=0,ue=y.length;pe<ue;pe++){const oe=y[pe];de(oe,P),P+=oe.length}n.addGroup(Q,i.length/3-Q,1)}function de(Q,P){let pe=Q.length;for(;--pe>=0;){const ue=pe;let oe=pe-1;oe<0&&(oe=Q.length-1);for(let ge=0,Ne=h+p*2;ge<Ne;ge++){const ye=B*ge,R=B*(ge+1),S=P+ue+ye,z=P+oe+ye,J=P+oe+R,ie=P+ue+R;Re(S,z,J,ie)}}}function re(Q,P,pe){c.push(Q),c.push(P),c.push(pe)}function Ae(Q,P,pe){Le(Q),Le(P),Le(pe);const ue=i.length/3,oe=_.generateTopUV(n,i,ue-3,ue-2,ue-1);Be(oe[0]),Be(oe[1]),Be(oe[2])}function Re(Q,P,pe,ue){Le(Q),Le(P),Le(ue),Le(P),Le(pe),Le(ue);const oe=i.length/3,ge=_.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);Be(ge[0]),Be(ge[1]),Be(ge[3]),Be(ge[1]),Be(ge[2]),Be(ge[3])}function Le(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function Be(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new cl[i.type]().fromJSON(i)),new lo(n,e.options)}}const yx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ee(r,a),new ee(o,c),new ee(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],b=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ee(a,1-c),new ee(l,1-u),new ee(d,1-m),new ee(b,1-g)]:[new ee(o,1-c),new ee(h,1-u),new ee(f,1-m),new ee(p,1-g)]}};function Sx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ss extends Gl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ss(e.radius,e.detail)}}class Vl extends mt{constructor(e=new kr([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new $e(i,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Si.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const _=m[p];Si.isClockWise(_)===!0&&(m[p]=_.reverse())}const b=Si.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const _=m[p];f=f.concat(_)}for(let p=0,g=f.length;p<g;p++){const _=f[p];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,g=b.length;p<g;p++){const _=b[p],x=_[0]+u,M=_[1]+u,A=_[2]+u;n.push(x,M,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Vl(n,e.curveSegments)}}function wx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class nn extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],b=[],p=[];for(let g=0;g<=n;g++){const _=[],x=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),p.push(w+M,1-x),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const x=h[g][_+1],M=h[g][_],A=h[g+1][_],w=h[g+1][_+1];(g!==0||a>0)&&f.push(x,M,w),(g!==n-1||c<Math.PI)&&f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Os extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const b=m/i*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(b),u.y=(e+t*Math.cos(p))*Math.sin(b),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const b=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,_=(i+1)*f+m;a.push(b,p,_),a.push(p,g,_)}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tx extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hn extends Vs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Va extends an{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Ex extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class gi extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ya(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ax(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Yd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cx extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _s:r=e,o=2*t-n;break;case Ka:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _s:a=e,c=2*n-t;break;case Ka:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,p=b*m,g=-d*p+2*d*b-d*m,_=(1+d)*p+(-1.5-2*d)*b+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*b+.5*m,M=f*p-f*b;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+_*a[l+A]+x*a[c+A]+M*a[u+A];return r}}class Jd extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Px extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ax(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Tr;class Ws extends Gn{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=wr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Zd extends Gn{}Zd.prototype.ValueTypeName="color";class ks extends Gn{}ks.prototype.ValueTypeName="number";class Lx extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ft.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Bs extends Gn{InterpolantFactoryMethodLinear(e){return new Lx(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Gn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=wr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Gn{}zs.prototype.ValueTypeName="vector";class ul{constructor(e="",t=-1,n=[],i=Cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Rx(c);c=Tu(c,1,h),l=Tu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ks(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,b){if(f.length!==0){const p=[],g=[];Yd(f,p,g,m),p.length!==0&&b.push(new u(d,p,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(const b in f){const p=[],g=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];p.push(x.time),g.push(x.morphTarget===b?1:0)}i.push(new ks(".morphTargetInfluence["+b+"]",p,g))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(zs,f+".position",d,"pos",i),n(Bs,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ix(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Zd;case"quaternion":return Bs;case"bool":case"boolean":return Ws;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(s.type);if(s.times===void 0){const t=[],n=[];Yd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Nx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Ux=new Nx;class Xs{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class Fx extends Error{constructor(e,t){super(e),this.response=t}}class Qd extends Xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Yn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let b=0;const p=new ReadableStream({start(g){_();function _(){u.read().then(({done:x,value:M})=>{if(x)g.close();else{b+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let w=0,T=h.length;w<T;w++){const L=h[w];L.onProgress&&L.onProgress(A)}g.enqueue(M),_()}},x=>{g.error(x)})}}});return new Response(p)}else throw new Fx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{_i.add(e,l);const h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ox extends Xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Er("img");function c(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class $d extends Xs{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,a=new Ox(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kx extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tc=new Oe,Eu=new C,Au=new C;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bx extends Wl{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zx extends zr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new Oe,ar=new C,nc=new C;class Hx extends Wl{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(ar),nc.copy(n.position),nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nc),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class qs extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gx extends Wl{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ef extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Gx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vx extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class br{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wx extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,c),r.manager.itemStart(e)}}class jx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cu(){return performance.now()}class Xx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const jl="\\[\\]\\.:\\/",qx=new RegExp("["+jl+"]","g"),Xl="[^"+jl+"]",Kx="[^"+jl.replace("\\.","")+"]",Yx=/((?:WC+[\/:])*)/.source.replace("WC",Xl),Jx=/(WCOD+)?/.source.replace("WCOD",Kx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),$x=new RegExp("^"+Yx+Jx+Zx+Qx+"$"),e_=["material","materials","bones","map"];class t_{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(e){const t=$x.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=t_;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:xs,endingEnd:xs};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Zf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Cl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Jf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Kf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:xs:i.endingStart=Ka,t?i.endingEnd=this.zeroSlopeAtEnd?_s:xs:i.endingEnd=Ka)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const i_=new Float32Array(1);class s_ extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const b=t&&t._propertyBindings[u].binding.parsedPath;m=new Xx(ct.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Jd(new Float32Array(2),new Float32Array(2),1,i_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?ul.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cl),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new n_(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ul.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Pu=new Oe;class r_{constructor(e,t,n=0,i=1/0){this.ray=new Ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,n=[]){return dl(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)dl(e[i],this,n,t);return n.sort(Lu),n}}function Lu(s,e){return s.distance-e.distance}function dl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)dl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a_=new ro(-1,1,1,-1,0,1);class o_ extends mt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const c_=new o_;class ho{constructor(e){this._mesh=new De(c_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class tf extends Ji{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ho(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Iu extends Ji{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class l_ extends Ji{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tf(vr),this.copyPass.material.blending=Bt,this.clock=new jx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Iu!==void 0&&(a instanceof Iu?n=!0:a instanceof l_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class u_ extends Ji{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const d_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hs extends Ji{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,a,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new rn(r,a,{type:yn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new rn(r,a,{type:yn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=d_;this.highPassUniforms=Fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=vr;this.copyUniforms=Fn.clone(h.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new Je,this.fsQuad=new ho(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hs.BlurDirectionX=new ee(1,0);Hs.BlurDirectionY=new ee(0,1);const f_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class p_ extends Ji{constructor(){super();const e=f_;this.uniforms=Fn.clone(e.uniforms),this.material=new Tx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ho(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ad?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===od?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ld?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Sa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Oe},cameraProjectionMatrixInverse:{value:new Oe},cameraWorldMatrix:{value:new Oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},wa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ic={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function m_(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=g_(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],c=2*Math.PI*o/n,l=new C(Math.cos(c),Math.sin(c),0).normalize();i[a*4]=(l.x*.5+.5)*255,i[a*4+1]=(l.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}const r=new Fr(i,e,e);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}function g_(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}const Ta={defines:{SAMPLES:16,SAMPLE_VECTORS:nf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ee},cameraProjectionMatrixInverse:{value:new Oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function nf(s,e,t){const n=b_(s,e,t);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function b_(s,e,t){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new C(Math.cos(r),Math.sin(r),a))}return n}class v_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=e-d,b=t-f;let p,g;m>b?(p=1,g=0):(p=0,g=1);const _=m-p+h,x=b-g+h,M=m-1+2*h,A=b-1+2*h,w=c&255,T=l&255,L=this.perm[w+this.perm[T]]%12,D=this.perm[w+p+this.perm[T+g]]%12,v=this.perm[w+1+this.perm[T+1]]%12;let y=.5-m*m-b*b;y<0?n=0:(y*=y,n=y*y*this.dot(this.grad3[L],m,b));let I=.5-_*_-x*x;I<0?i=0:(I*=I,i=I*I*this.dot(this.grad3[D],_,x));let N=.5-M*M-A*A;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[v],M,A)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,b=h-m,p=u-m,g=d-m,_=e-b,x=t-p,M=n-g;let A,w,T,L,D,v;_>=x?x>=M?(A=1,w=0,T=0,L=1,D=1,v=0):_>=M?(A=1,w=0,T=0,L=1,D=0,v=1):(A=0,w=0,T=1,L=1,D=0,v=1):x<M?(A=0,w=0,T=1,L=0,D=1,v=1):_<M?(A=0,w=1,T=0,L=0,D=1,v=1):(A=0,w=1,T=0,L=1,D=1,v=0);const y=_-A+f,I=x-w+f,N=M-T+f,G=_-L+2*f,Y=x-D+2*f,B=M-v+2*f,se=_-1+3*f,W=x-1+3*f,he=M-1+3*f,k=h&255,q=u&255,ne=d&255,ae=this.perm[k+this.perm[q+this.perm[ne]]]%12,H=this.perm[k+A+this.perm[q+w+this.perm[ne+T]]]%12,V=this.perm[k+L+this.perm[q+D+this.perm[ne+v]]]%12,de=this.perm[k+1+this.perm[q+1+this.perm[ne+1]]]%12;let re=.6-_*_-x*x-M*M;re<0?i=0:(re*=re,i=re*re*this.dot3(this.grad3[ae],_,x,M));let Ae=.6-y*y-I*I-N*N;Ae<0?r=0:(Ae*=Ae,r=Ae*Ae*this.dot3(this.grad3[H],y,I,N));let Re=.6-G*G-Y*Y-B*B;Re<0?a=0:(Re*=Re,a=Re*Re*this.dot3(this.grad3[V],G,Y,B));let Le=.6-se*se-W*W-he*he;return Le<0?o=0:(Le*=Le,o=Le*Le*this.dot3(this.grad3[de],se,W,he)),32*(i+r+a+o)}noise4d(e,t,n,i){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,m;const b=(e+t+n+i)*c,p=Math.floor(e+b),g=Math.floor(t+b),_=Math.floor(n+b),x=Math.floor(i+b),M=(p+g+_+x)*l,A=p-M,w=g-M,T=_-M,L=x-M,D=e-A,v=t-w,y=n-T,I=i-L,N=D>v?32:0,G=D>y?16:0,Y=v>y?8:0,B=D>I?4:0,se=v>I?2:0,W=y>I?1:0,he=N+G+Y+B+se+W,k=a[he][0]>=3?1:0,q=a[he][1]>=3?1:0,ne=a[he][2]>=3?1:0,ae=a[he][3]>=3?1:0,H=a[he][0]>=2?1:0,V=a[he][1]>=2?1:0,de=a[he][2]>=2?1:0,re=a[he][3]>=2?1:0,Ae=a[he][0]>=1?1:0,Re=a[he][1]>=1?1:0,Le=a[he][2]>=1?1:0,Be=a[he][3]>=1?1:0,Q=D-k+l,P=v-q+l,pe=y-ne+l,ue=I-ae+l,oe=D-H+2*l,ge=v-V+2*l,Ne=y-de+2*l,ye=I-re+2*l,R=D-Ae+3*l,S=v-Re+3*l,z=y-Le+3*l,J=I-Be+3*l,ie=D-1+4*l,Z=v-1+4*l,Pe=y-1+4*l,be=I-1+4*l,_e=p&255,Xe=g&255,ce=_&255,Me=x&255,ze=o[_e+o[Xe+o[ce+o[Me]]]]%32,He=o[_e+k+o[Xe+q+o[ce+ne+o[Me+ae]]]]%32,Ce=o[_e+H+o[Xe+V+o[ce+de+o[Me+re]]]]%32,Ze=o[_e+Ae+o[Xe+Re+o[ce+Le+o[Me+Be]]]]%32,je=o[_e+1+o[Xe+1+o[ce+1+o[Me+1]]]]%32;let it=.6-D*D-v*v-y*y-I*I;it<0?h=0:(it*=it,h=it*it*this.dot4(r[ze],D,v,y,I));let U=.6-Q*Q-P*P-pe*pe-ue*ue;U<0?u=0:(U*=U,u=U*U*this.dot4(r[He],Q,P,pe,ue));let xe=.6-oe*oe-ge*ge-Ne*Ne-ye*ye;xe<0?d=0:(xe*=xe,d=xe*xe*this.dot4(r[Ce],oe,ge,Ne,ye));let K=.6-R*R-S*S-z*z-J*J;K<0?f=0:(K*=K,f=K*K*this.dot4(r[Ze],R,S,z,J));let te=.6-ie*ie-Z*Z-Pe*Pe-be*be;return te<0?m=0:(te*=te,m=te*te*this.dot4(r[je],ie,Z,Pe,be)),27*(h+u+d+f+m)}}class Nn extends Ji{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=m_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new rn(this.width,this.height,{type:yn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},Sa.defines),uniforms:Fn.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,blending:Bt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ex,this.normalMaterial.blending=Bt,this.pdMaterial=new Et({defines:Object.assign({},Ta.defines),uniforms:Fn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},wa.defines),uniforms:Fn.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:Bt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:Fn.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Mc,blendDst:hr,blendEquation:Rn,blendSrcAlpha:_c,blendDstAlpha:hr,blendEquationAlpha:Rn}),this.blendMaterial=new Et({uniforms:Fn.clone(ic.uniforms),vertexShader:ic.vertexShader,fragmentShader:ic.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:rd,blendSrc:Mc,blendDst:hr,blendEquation:Rn,blendSrcAlpha:_c,blendDstAlpha:hr,blendEquationAlpha:Rn}),this.fsQuad=new ho(null),this.originalClearColor=new fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ul,this.depthTexture.format=qi,this.depthTexture.type=Xi,this.normalRenderTarget=new rn(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Nn.OUTPUT.Off:break;case Nn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new v_,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=a,l=o;i[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new Fr(i,e,e,sn,On);return r.wrapS=pn,r.wrapT=pn,r.needsUpdate=!0,r}}Nn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Du=Math.PI*2,x_=6,Dr=s=>(s=(s+Math.PI)%Du,(s<0?s+Du:s)-Math.PI),sc=(s,e)=>Math.atan2(s,-e);class __{constructor(e){this.nodes=e.nodes.map(([t,n])=>({x:t,z:n,out:[]})),this.edges=e.edges.map((t,n)=>{const i=[0];for(let o=1;o<t.pts.length;o++)i.push(i[o-1]+Math.hypot(t.pts[o][0]-t.pts[o-1][0],t.pts[o][1]-t.pts[o-1][1]));const r=i[i.length-1],a=Math.max(1,Math.round(r/x_));return{i:n,a:t.a,b:t.b,pts:t.pts,cum:i,len:r,name:t.name,kind:t.kind,cells:a,cellLen:r/a}}),this.edges.forEach(t=>{this.nodes[t.a].out.push({edge:t.i,dir:1}),this.nodes[t.b].out.push({edge:t.i,dir:-1})}),this.totalCells=this.edges.reduce((t,n)=>t+n.cells,0),this.total=this.edges.reduce((t,n)=>t+n.len,0),this.laid=this.edges.map(t=>new Uint8Array(t.cells)),this.laidCount=0}pointAt(e,t){const{pts:n,cum:i}=e;t=Math.max(0,Math.min(e.len,t));let r=1;for(;r<i.length-1&&i[r]<t;)r++;const a=i[r]-i[r-1]||1,o=(t-i[r-1])/a,c=n[r-1],l=n[r];return{x:c[0]+(l[0]-c[0])*o,z:c[1]+(l[1]-c[1])*o,h:sc(l[0]-c[0],l[1]-c[1])}}pose(e){const t=this.edges[e.edge],n=this.pointAt(t,e.dir===1?e.s:t.len-e.s);return e.dir===-1&&(n.h=Dr(n.h+Math.PI)),n}endNode(e){const t=this.edges[e.edge];return e.dir===1?t.b:t.a}startNode(e){const t=this.edges[e.edge];return e.dir===1?t.a:t.b}leaveHeading(e){const t=this.edges[e.edge],n=e.dir===1?t.pts:t.pts.slice().reverse();let i=1;for(;i<n.length-1&&Math.hypot(n[i][0]-n[0][0],n[i][1]-n[0][1])<4;)i++;return sc(n[i][0]-n[0][0],n[i][1]-n[0][1])}arriveHeading(e){const t=this.edges[e.edge],n=e.dir===1?t.pts:t.pts.slice().reverse(),i=n.length-1;let r=i-1;for(;r>0&&Math.hypot(n[i][0]-n[r][0],n[i][1]-n[r][1])<4;)r--;return sc(n[i][0]-n[r][0],n[i][1]-n[r][1])}options(e,t,n){return this.nodes[e].out.filter(r=>!(r.edge===t.edge&&r.dir===-t.dir)).map(r=>({...r,rel:Dr(this.leaveHeading(r)-n)}))}choose(e,t){if(!e.length)return null;if(t==="left"||t==="right"){const n=t==="left"?-1:1,i=e.filter(r=>r.rel*n>.35);return i.length?i.reduce((r,a)=>Math.abs(a.rel-n*Math.PI/2)<Math.abs(r.rel-n*Math.PI/2)?a:r):null}return e.reduce((n,i)=>Math.abs(i.rel)<Math.abs(n.rel)?i:n)}distancesTo(e){const t=this.nodes.length,n=new Float64Array(t).fill(1/0),i=new Uint8Array(t);n[e]=0;for(let r=0;r<t;r++){let a=-1;for(let o=0;o<t;o++)!i[o]&&(a<0||n[o]<n[a])&&(a=o);if(a<0||n[a]===1/0)break;i[a]=1;for(const o of this.nodes[a].out){const c=this.edges[o.edge],l=o.dir===1?c.b:c.a;n[a]+c.len<n[l]&&(n[l]=n[a]+c.len)}}return n}nearestNode(e,t){let n=0,i=1/0;return this.nodes.forEach((r,a)=>{const o=Math.hypot(r.x-e,r.z-t);o<i&&(i=o,n=a)}),n}nearestOnEdges(e,t,n=null){let i=null;for(const r of this.edges)if(!(n&&!n(r)))for(let a=1;a<r.pts.length;a++){const[o,c]=r.pts[a-1],[l,h]=r.pts[a],u=l-o,d=h-c,f=u*u+d*d||1,m=Math.max(0,Math.min(1,((e-o)*u+(t-c)*d)/f)),b=o+u*m,p=c+d*m,g=Math.hypot(b-e,p-t);(!i||g<i.dist)&&(i={edge:r.i,d:r.cum[a-1]+Math.sqrt(f)*m,dist:g})}return i}lay(e,t){const n=this.edges[e],i=Math.min(n.cells-1,Math.max(0,Math.floor(t/n.cellLen)));return this.laid[e][i]?-1:(this.laid[e][i]=1,this.laidCount++,i)}resetFibre(){this.laid.forEach(e=>e.fill(0)),this.laidCount=0}get coverage(){return this.laidCount/this.totalCells}}function Nu(s,e,t,n){let i=0;for(e.s+=t;i++<8;){const r=s.edges[e.edge];if(e.s<r.len)return;const a=e.s-r.len,o=s.endNode(e),c=s.arriveHeading(e);if(n(e,o,c)===!1){e.s=s.edges[e.edge].len;return}e.s=a}}function Gi(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new mt;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Uu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);const m=Uu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Uu(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new xt(a,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Fu(s,e){if(e===Qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===il||e===yd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===il)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const Vi=1.3,$n=16519255,ai=723984,sf=13214282;function rc(s){return()=>{s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function We(s,e,t=0,n=0,i=0,r=0){let a=s.index?s.toNonIndexed():s;a.deleteAttribute("uv"),a.computeVertexNormals(),r&&a.rotateY(r),a.translate(t,n,i);const o=new fe(e),c=a.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=o.r,l[h*3+1]=o.g,l[h*3+2]=o.b;return a.setAttribute("color",new xt(l,3)),a}const ft=(s,e,t)=>new _t(s*Vi,e*Vi,t*Vi),fn=(s,e,t,n=14)=>new At(s*Vi,e*Vi,t*Vi,n),le=s=>s*Vi;function gn(s){return Gi(s)}const M_=()=>gn([We(ft(1.1,.18,1.1),$n,0,le(.09)),We(ft(1,2.3,1),$n,0,le(1.33)),We(ft(1.1,.26,1.1),$n,0,le(2.6)),We(fn(.5,.58,.28,4),$n,0,le(2.87),0,Math.PI/4),We(ft(.24,.16,.24),$n,0,le(3.08))]),y_=()=>gn([...[0,1,2,3].map(s=>We(ft(.78,1.55,.04),16769702,Math.sin(s*Math.PI/2)*le(.51),le(1.35),Math.cos(s*Math.PI/2)*le(.51),s*Math.PI/2)),...[0,1,2,3].map(s=>We(ft(.8,.13,.04),16777215,Math.sin(s*Math.PI/2)*le(.56),le(2.6),Math.cos(s*Math.PI/2)*le(.56),s*Math.PI/2))]),S_=()=>gn([We(fn(.36,.38,.16),ai,0,le(.08)),We(fn(.34,.34,1.25),$n,0,le(.78)),We(fn(.4,.38,.12),$n,0,le(1.44)),We(new nn(le(.36),14,8,0,Math.PI*2,0,Math.PI/2),$n,0,le(1.5)),We(ft(.36,.05,.05),ai,0,le(1.2),le(-.34))]),w_=()=>gn([We(fn(.12,.14,.95,10),ai,0,le(.48)),We(fn(.13,.13,.08,10),sf,0,le(.82)),We(new nn(le(.12),10,6,0,Math.PI*2,0,Math.PI/2),ai,0,le(.95))]),T_=()=>gn([We(fn(.16,.24,3.2,8),6969994,0,le(1.6)),We(fn(.1,.14,1.2,6),5917306,le(.3),le(3.2),0,0)]),E_=()=>gn([We(new Ss(le(1.7),1),16777215,0,le(4.6)),We(new Ss(le(1.3),1),16777215,le(1.1),le(4.1),le(.4)),We(new Ss(le(1.25),1),16777215,le(-1),le(4.3),le(-.3)),We(new Ss(le(1.1),1),16777215,le(.2),le(5.6),le(-.2))]),A_=()=>gn([We(ft(1.8,.08,.5),8016436,0,le(.5)),We(ft(1.8,.4,.07),8016436,0,le(.78),le(.24)),We(ft(.08,.5,.5),ai,le(-.8),le(.25)),We(ft(.08,.5,.5),ai,le(.8),le(.25))]),R_=()=>gn([We(fn(.3,.26,.9,12),ai,0,le(.45)),We(fn(.32,.32,.06,12),sf,0,le(.88))]),C_=()=>gn([We(ft(1.8,.62,4.2),ai,0,le(.62)),We(ft(1.62,.62,2.3),ai,0,le(1.22),le(.25)),We(ft(1.64,.42,2.2),2898500,0,le(1.24),le(.25)),We(ft(1.85,.12,4.25),2764081,0,le(.32)),...[[-.8,-1.3],[.8,-1.3],[-.8,1.35],[.8,1.35]].map(([s,e])=>{const t=fn(.36,.36,.26,12);return t.rotateZ(Math.PI/2),We(t,789774,le(s),le(.36),le(e))})]),P_=()=>gn([We(ft(.5,.16,.2),16763194,0,le(1.62),le(-.35)),We(ft(1.62,.12,.05),16773832,0,le(.72),le(-2.12))]),L_=()=>gn([We(ft(2.5,4.1,10.5),$n,0,le(2.45)),We(ft(2.52,.9,10.3),2830904,0,le(1.75)),We(ft(2.52,.9,10.3),2830904,0,le(3.55)),We(ft(2.55,.25,10.6),16051416,0,le(2.62)),We(ft(2.4,.12,10.4),2764081,0,le(.45)),...[[-1.1,-3.6],[1.1,-3.6],[-1.1,3.4],[1.1,3.4]].map(([s,e])=>{const t=fn(.5,.5,.3,14);return t.rotateZ(Math.PI/2),We(t,789774,le(s),le(.5),le(e))})]),I_=()=>gn([We(ft(2.54,.78,10.2),16767392,0,le(1.75)),We(ft(2.54,.78,10.2),16767392,0,le(3.55))]),D_=()=>gn([We(fn(.05,.05,2.9,8),2764081,0,le(1.45)),We(ft(.06,2.2,3.2),2764081,le(-.7),le(1.1)),We(ft(1.5,.08,3.3),2764081,0,le(2.25)),We(ft(.04,1.9,3),11126476,le(-.66),le(1.15))]);function N_(s,e,t){const n=new Pn(s,e,Math.max(1,t));return n.count=0,n}function U_(s,e){const t=document.createElement("canvas");t.width=512,t.height=160;const n=t.getContext("2d");n.fillStyle="#1a1a1a",n.beginPath(),n.roundRect(0,0,512,160,26),n.fill(),n.fillStyle="#fbfaf5",n.beginPath(),n.roundRect(8,8,496,144,20),n.fill(),n.strokeStyle="#1a1a1a",n.lineWidth=4,n.beginPath(),n.roundRect(18,18,476,124,14),n.stroke(),n.fillStyle="#111",n.textAlign="center",n.textBaseline="middle";let i=64;const r=s.toUpperCase();do n.font=`800 ${i}px Outfit, system-ui, sans-serif`,i-=4;while(n.measureText(r).width>440&&i>26);n.fillText(r,256,e?70:82),e&&(n.fillStyle="#c8232c",n.font="800 30px Outfit, system-ui, sans-serif",n.fillText(e,256,118));const a=new Wt(t);return a.colorSpace=dt,a.anisotropy=4,a}function F_(){const s=document.createElement("canvas");s.width=512,s.height=96;const e=s.getContext("2d");e.fillStyle="#111",e.fillRect(0,0,512,96),e.fillStyle="#ffb81c",e.font="800 44px Outfit, system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("BRIGHTER TOMORROW",256,50);const t=new Wt(s);return t.colorSpace=dt,t}function O_(s){const t=new Map;return s.forEach(n=>{let i=1/0,r=-1/0,a=1/0,o=-1/0;for(const[c,l]of n.p)i=Math.min(i,c),r=Math.max(r,c),a=Math.min(a,l),o=Math.max(o,l);for(let c=Math.floor(i/25);c<=Math.floor(r/25);c++)for(let l=Math.floor(a/25);l<=Math.floor(o/25);l++){const h=`${c},${l}`;(t.get(h)||t.set(h,[]).get(h)).push(n.p)}}),(n,i,r=.8)=>{for(const a of t.get(`${Math.floor(n/25)},${Math.floor(i/25)}`)||[]){let o=!1;for(let c=0,l=a.length-1;c<a.length;l=c++){const[h,u]=a[c],[d,f]=a[l];u>i!=f>i&&n<(d-h)*(i-u)/(f-u)+h&&(o=!o)}if(o)return!0;if(r)for(let c=0,l=a.length-1;c<a.length;l=c++){const[h,u]=a[l],[d,f]=a[c],m=d-h,b=f-u,p=m*m+b*b||1,g=Math.max(0,Math.min(1,((n-h)*m+(i-u)*b)/p));if(Math.hypot(h+m*g-n,u+b*g-i)<r)return!0}}return!1}}function k_(s,e,t={}){const n=new yt,i=!!t.lowEnd,r=rc(1234+s.edges.length),a=O_(e.buildings||[]),o=[],c=(k,q,ne)=>!o.some(([ae,H,V])=>Math.hypot(ae-k,H-q)<V+ne),l=(k,q,ne)=>o.push([k,q,ne]);for(const k of s.edges){const q=$t(k.kind);let ne=k.i%2?1:-1;for(let ae=10;ae<k.len-6;ae+=26){const H=s.pointAt(k,ae);l(H.x+Math.cos(H.h)*ne*(q/2+1.4),H.z+Math.sin(H.h)*ne*(q/2+1.4),2.2),ne=-ne}}const h=(k,q,ne)=>s.nodes.some(ae=>ae.out.length>2&&Math.hypot(ae.x-k,ae.z-q)<ne),u=(k,q,ne,ae)=>{const H=s.pointAt(k,q),V=Math.cos(H.h)*ne,de=Math.sin(H.h)*ne;return{x:H.x+V*ae,z:H.z+de*ae,h:H.h,nx:V,nz:de}},d=(k,q)=>Math.atan2(-k,-q);let f=0;const m={phone:[],pillar:[],bollard:[],tree:[],bench:[],bin:[],cab:[],bus:[],stop:[]},b=(k,q,ne,ae,H=1,V)=>m[k].push({x:q,z:ne,yaw:ae,s:H,colour:V}),p=k=>["trunk","primary","secondary","tertiary"].includes(k),g=k=>["residential","tertiary","unclassified","living_street","pedestrian","road"].includes(k);s.nodes.forEach((k,q)=>{if(k.out.length<3)return;for(const Re of k.out){const Le=s.edges[Re.edge],Be=$t(Le.kind);if(Le.len<Be+6)continue;const Q=Re.dir===1?Be/2+2.5:Le.len-Be/2-2.5;for(const P of[-1,1])for(const pe of p(Le.kind)?[0,1]:[0]){const ue=u(Le,Q+(Re.dir===1?pe*1.4:-pe*1.4),P,Be/2+.55);m.bollard.length<220&&!a(ue.x,ue.z,.3)&&c(ue.x,ue.z,.4)&&(b("bollard",ue.x,ue.z,0),l(ue.x,ue.z,.5))}}const ne=k.out[q%k.out.length],ae=s.edges[ne.edge],H=$t(ae.kind);if(ae.len<H+16)return;const V=ne.dir===1?H/2+7+r()*3:ae.len-H/2-7-r()*3,de=r()<.5?-1:1,re=u(ae,V,de,H/2+1.5);if(a(re.x,re.z)||!c(re.x,re.z,1.2))return;const Ae=r()<.6&&m.phone.length<8?"phone":m.pillar.length<10?"pillar":null;Ae&&(b(Ae,re.x,re.z,d(-re.nx,-re.nz)),l(re.x,re.z,1.4))});for(const k of s.edges){const q=$t(k.kind),ne=rc(k.i*7919+17);if(g(k.kind)&&k.len>30)for(let ae=12+ne()*8;ae<k.len-12;ae+=i?40:20+ne()*10)for(const H of[-1,1]){if(ne()<.25)continue;const V=u(k,ae,H,q/2+1.9);if(h(V.x,V.z,q/2+6)||a(V.x,V.z,1.4)||!c(V.x,V.z,1.8))continue;if(m.tree.length>=(i?60:140))break;const de=new fe().setHSL(.47+ne()*.06,.5+ne()*.15,.22+ne()*.1);b("tree",V.x,V.z,ne()*Math.PI*2,.85+ne()*.35,de),l(V.x,V.z,2.2)}if(k.len>40&&ne()<.5){const ae=15+ne()*(k.len-30),H=ne()<.5?-1:1,V=u(k,ae,H,q/2+1.8);!h(V.x,V.z,q/2+6)&&!a(V.x,V.z,1)&&c(V.x,V.z,1.4)&&(m.bench.length<30&&ne()<.5?(b("bench",V.x,V.z,d(-V.nx,-V.nz)+Math.PI),l(V.x,V.z,1.6)):m.bin.length<30&&(b("bin",V.x,V.z,0),l(V.x,V.z,.8)))}if(p(k.kind)&&k.len>45&&q>=8)for(let ae=18+ne()*10;ae<k.len-18;ae+=34+ne()*20){if(ne()<.55||m.cab.length>=(i?6:14))continue;const H=ne()<.5?-1:1,V=u(k,ae,H,q/2-le(.95));h(V.x,V.z,q/2+8)||!c(V.x,V.z,3.2)||(b("cab",V.x,V.z,d(Math.sin(V.h)*(H>0?1:-1),-Math.cos(V.h)*(H>0?1:-1))),l(V.x,V.z,3.4))}}const _=(e.radius||200)*1.05,x=rc(9001+s.edges.length);let M=0;for(let k=-_;k<=_;k+=11)for(let q=-_;q<=_;q+=11){if(Math.hypot(k,q)>_||M>=(i?40:110))continue;const ne=k+(x()-.5)*6,ae=q+(x()-.5)*6,H=s.nearestOnEdges(ne,ae);if(!H)continue;const V=$t(s.edges[H.edge].kind);if(H.dist<V/2+4.5||a(ne,ae,2.5)||!c(ne,ae,3)||x()<.45)continue;const de=new fe().setHSL(.47+x()*.07,.5+x()*.15,.2+x()*.11);if(b("tree",ne,ae,x()*Math.PI*2,.9+x()*.5,de),l(ne,ae,3),M++,x()<.12&&m.bench.length<40){const re=ne+2.6,Ae=ae;!a(re,Ae,1)&&c(re,Ae,1.2)&&(b("bench",re,Ae,x()*Math.PI*2),l(re,Ae,1.4))}}f=M;const A=s.edges.filter(k=>$t(k.kind)>=10&&k.len>40).sort((k,q)=>q.len-k.len)[0];if(A){const k=$t(A.kind),q=A.len/2,ne=u(A,q,1,k/2-le(1.35));if(c(ne.x,ne.z,7)){b("bus",ne.x,ne.z,d(Math.sin(ne.h),-Math.cos(ne.h))),l(ne.x,ne.z,8);const ae=u(A,q+4,1,k/2+1.6);a(ae.x,ae.z,.6)||b("stop",ae.x,ae.z,d(-ae.nx,-ae.nz))}}const w=dn({vertexColors:!0,roughness:.62,metalness:.05}),T=new Je({vertexColors:!0}),L=dn({color:16777215,roughness:.85,flatShading:!0}),D=new Oe,v=new Ft,y=new C(0,1,0),I=(k,q,ne=!1)=>(q.forEach((ae,H)=>{v.setFromAxisAngle(y,ae.yaw),D.compose(new C(ae.x,0,ae.z),v,new C(ae.s,ae.s,ae.s)),k.setMatrixAt(H,D),ne&&ae.colour&&k.setColorAt(H,ae.colour)}),k.count=q.length,k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k),N=(k,q,ne,{shadow:ae=!1,colours:H=!1}={})=>{if(!ne.length)return null;const V=I(N_(k(),q,ne.length),ne,H);return V.castShadow=ae&&!!t.shadows&&!i,V.receiveShadow=!!t.shadows,n.add(V),V};N(M_,w,m.phone,{shadow:!0}),N(y_,T,m.phone),N(S_,w,m.pillar,{shadow:!0}),N(w_,w,m.bollard),N(T_,w,m.tree,{shadow:!0}),N(E_,L,m.tree,{shadow:!0,colours:!0}),N(A_,w,m.bench),N(R_,w,m.bin),N(C_,w,m.cab,{shadow:!0}),N(P_,T,m.cab),N(L_,w,m.bus,{shadow:!0}),N(I_,T,m.bus),N(D_,w,m.stop);for(const k of m.bus){const q=new De(new ri(le(2.1),le(.4)),new Je({map:F_()})),ne=-Math.sin(k.yaw),ae=-Math.cos(k.yaw);q.position.set(k.x+ne*le(5.27),le(4.15),k.z+ae*le(5.27)),q.rotation.y=k.yaw+Math.PI,n.add(q)}const G=(e.postcode||"").split(" ")[0],Y=new Set,B=new ri(le(1.6),le(.5)),se=new At(le(.04),le(.04),le(2.3),6),W=[];for(const k of s.edges)if(!(!k.name||k.len<25||Y.size>=40))for(const q of[1,-1]){const ne=`${k.name}|${q}`;if(Y.has(ne)||Y.size>=40)continue;const ae=$t(k.kind),H=q===1?Math.min(k.len-5,ae/2+5):Math.max(5,k.len-ae/2-5),V=q===1?1:-1,de=u(k,H,V,ae/2+2.2);if(a(de.x,de.z,.4)||!c(de.x,de.z,.9))continue;const re=Math.sin(de.h)*-q,Ae=-Math.cos(de.h)*-q,Re=d(re,Ae)-.5*V*q,Le=U_(k.name,G),Be=dn({map:Le,emissive:16777215,emissiveMap:Le,emissiveIntensity:.28,roughness:.5});for(const Q of[0,Math.PI]){const P=new De(B,Be);P.position.set(de.x,le(2.35),de.z),P.rotation.y=Re+Math.PI+Q,n.add(P)}for(const Q of[-1,1])W.push({x:de.x+Math.cos(Re)*Q*le(.7),z:de.z-Math.sin(Re)*Q*le(.7)});l(de.x,de.z,1),Y.add(ne)}if(W.length){const k=new Pn(se,dn({color:1776928,roughness:.6}),W.length);W.forEach((q,ne)=>{D.makeTranslation(q.x,le(1.15),q.z),k.setMatrixAt(ne,D)}),n.add(k)}const he=Object.fromEntries(Object.entries(m).map(([k,q])=>[k,q.length]));return he.plates=Y.size,he.park=f,{group:n,counts:he,update(){}}}const xr={midnight:2563696,grape:5580714,ink:723984,oil:2041907,ice:6749425},vt={ground:1712720,pavement:5857679,road:1844288,kerb:11055320,copper:13135932,fibre:6749425,pink:15220879,yellow:16172321,orange:15895076,blue:3109606,lamp:16763256},B_={trunk:12,primary:11,secondary:10,tertiary:9,unclassified:7.5,residential:7.5,road:7.5,living_street:6,pedestrian:6,service:5},$t=s=>B_[s]||7,ws=new C(-.55,.62,.56).normalize(),Ou=s=>s!=="pedestrian"&&s!=="service"&&s!=="living_street";let Ni=null;function z_(){return Ni||(Ni=new Fr(new Uint8Array([130,130,130,255,195,195,195,255,255,255,255,255]),3,1,sn),Ni.minFilter=Ni.magFilter=Ut,Ni.needsUpdate=!0,Ni)}function dn(s={}){const e={...s};return delete e.roughness,delete e.metalness,delete e.flatShading,delete e.envMapIntensity,new Va({gradientMap:z_(),...e})}function ku(s,e=.16){const t=new Je({color:xr.ink,side:Vt});t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed += normalize(normal) * ${e.toFixed(3)};`)};const n=new De(s.geometry,t);return n.matrixAutoUpdate=!1,n.matrix.copy(s.matrix),n}function Hr(s){return()=>{s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function H_(s,e,t,n,i=3){const r=[];if(n-t<.5)return r;const a=Math.max(1,Math.ceil((n-t)/i));for(let o=0;o<=a;o++){const c=s.pointAt(e,t+(n-t)*o/a);r.push([c.x,c.z])}return r}function or(s,e,t,n=0){const i=s.length,r=[],a=[];for(let c=0;c<i;c++){const l=s[Math.max(0,c-1)],h=s[Math.min(i-1,c+1)];let u=h[0]-l[0],d=h[1]-l[1];const f=Math.hypot(u,d)||1;u/=f,d/=f;const m=-d,b=u,p=s[c][0]+m*n,g=s[c][1]+b*n;if(r.push(p+m*e/2,t,g+b*e/2,p-m*e/2,t,g-b*e/2),c){const _=(c-1)*2;a.push(_,_+1,_+2,_+1,_+3,_+2)}}const o=new mt;return o.setAttribute("position",new $e(r,3)),o.setIndex(a),rf(o)}function Bu(s,e,t,n){const i=new Ei(t,20);return i.rotateX(-Math.PI/2),i.translate(s,n,e),rf(i)}function rf(s){const e=s.attributes.position.count,t=new Float32Array(e*3);for(let n=0;n<e;n++)t[n*3+1]=1;return s.setAttribute("normal",new xt(t,3)),s.deleteAttribute("uv"),s}function G_(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,s),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,128,128),new Wt(t)}function V_(){const s=document.createElement("canvas");s.width=64,s.height=4;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,4),new Wt(s)}function W_(s,e){const t=new Et({side:Vt,depthWrite:!1,uniforms:{top:{value:new fe(396078)},mid:{value:new fe(1847160)},low:{value:new fe(13081312)},sun:{value:ws.clone()},glow:{value:new fe(5926864)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 low; uniform vec3 sun; uniform vec3 glow; varying vec3 vP;
      void main(){
        float h = vP.y;
        vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.75, h)) : mix(low, mid, smoothstep(-0.04, 0.12, h));
        float s = max(dot(normalize(vP), sun), 0.0);
        c += glow * pow(s, 12.0) * 0.45;
        c += vec3(0.95, 0.55, 0.85) * pow(max(0.0, 1.0 - abs(h - 0.02) * 9.0), 3.0) * 0.35; // pink band on the horizon
        gl_FragColor = vec4(c, 1.0);
      }`}),n=new De(new nn(2200,32,16),t);n.renderOrder=-10,s.add(n);const i=Hr(7),r=500,a=new Float32Array(r*3);for(let d=0;d<r;d++){const f=i()*Math.PI*2,m=.75+i()*.8;a.set([Math.cos(f)*Math.cos(m)*2e3,Math.sin(m)*2e3,Math.sin(f)*Math.cos(m)*2e3],d*3)}const o=new mt;o.setAttribute("position",new xt(a,3)),s.add(new oo(o,new Or({color:15265023,size:1.4,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.45})));const c=(()=>{const d=document.createElement("canvas");d.width=d.height=256;const f=d.getContext("2d"),m=f.createRadialGradient(118,118,20,128,128,120);return m.addColorStop(0,"#f4f2ff"),m.addColorStop(1,"#b9c6ff"),f.fillStyle=m,f.beginPath(),f.arc(128,128,110,0,Math.PI*2),f.fill(),f.globalCompositeOperation="destination-out",f.beginPath(),f.arc(172,96,104,0,Math.PI*2),f.fill(),new Wt(d)})();c.colorSpace=dt;const l=new Rr(new Fs({map:c,fog:!1,depthWrite:!1}));l.scale.setScalar(260),l.position.copy(ws).multiplyScalar(1900),s.add(l);const h=(()=>{const d=document.createElement("canvas");d.width=d.height=64;const f=d.getContext("2d");f.fillStyle="#ffffff",f.beginPath();for(let m=0;m<8;m++){const b=m/8*Math.PI*2,p=m%2?6:32;f.lineTo(32+Math.cos(b)*p,32+Math.sin(b)*p)}return f.fill(),new Wt(d)})(),u=[];for(let d=0;d<26;d++){const f=i()*Math.PI*2,m=.35+i()*.9,b=new Rr(new Fs({map:h,color:i()<.5?16777215:12175103,fog:!1,depthWrite:!1,transparent:!0}));b.position.set(Math.cos(f)*Math.cos(m)*1950,Math.sin(m)*1950,Math.sin(f)*Math.cos(m)*1950),b.scale.setScalar(18+i()*34),b.userData.phase=i()*6,s.add(b),u.push(b)}return j_(s,Math.max(900,e*3.2)),u}function j_(s,e){const t=Hr(42),n=[],i=[],r=(v,y,I)=>{v.translate(Math.cos(y)*I,0,Math.sin(y)*I),n.push(v)};for(let v=0;v<150;v++){const y=v/150*Math.PI*2+t()*.03,I=e*(.95+t()*.3),N=18+t()*45,G=14+Math.pow(t(),2.2)*90,Y=18+t()*30,B=new _t(N,G,Y);B.translate(0,G/2,0),B.rotateY(-y),r(B,y,I);for(let se=0;se<6;se++){if(t()<.5)continue;const W=(t()-.5)*N*.8,he=t()*G*.9,k=Math.cos(y)*(I-Y/2-.5)-Math.sin(y)*W,q=Math.sin(y)*(I-Y/2-.5)+Math.cos(y)*W;i.push(k,he,q)}}const a=(v,y,I=e*1.05)=>r(v,y,I),o=new Cr(26,300,4);o.translate(0,150,0),a(o,.6,e*1.1);const c=new At(26,28,40,20);c.translate(0,45,0);const l=new nn(27,20,12,0,Math.PI*2,0,Math.PI/2);l.translate(0,65,0);const h=new At(3,5,26,8);h.translate(0,100,0);const u=new _t(110,40,40);u.translate(0,20,0),[c,l,h,u].forEach(v=>a(v,2.2));const d=[];for(let v=0;v<=16;v++){const y=v/16;d.push(new ee(Math.max(.5,Math.sin(Math.PI*(.18+y*.82))*28),y*180))}a(new Hl(d,16),1.2,e*1.02);const f=new At(7,9,175,12);f.translate(0,87,0);const m=new At(12,12,22,12);m.translate(0,150,0),a(f,4.1),a(m,4.1);const b=new _t(14,90,14);b.translate(0,45,0);const p=new Cr(10,26,4);p.translate(0,103,0),a(b,5.3),a(p,5.3);const g=Gi(n.map(v=>v.index?v.toNonIndexed():v).map(v=>(v.deleteAttribute("uv"),v.deleteAttribute("normal"),v))),_=g.attributes.position,x=new Float32Array(_.count*3),M=new fe(9074904),A=new fe(2902696),w=new fe;for(let v=0;v<_.count;v+=3){const y=(_.getY(v)+_.getY(v+1)+_.getY(v+2))/3;w.copy(M).lerp(A,Math.min(1,y/140)).multiplyScalar(.75+t()*.4);for(let I=0;I<3;I++)x.set([w.r,w.g,w.b],(v+I)*3)}g.setAttribute("color",new xt(x,3));const T=new Je({vertexColors:!0,fog:!1});s.add(new De(g,T));const L=new mt;L.setAttribute("position",new $e(i,3)),s.add(new oo(L,new Or({color:xr.ice,size:1.8,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85})));const D=new De(new nn(3,8,6),new Je({color:16724016,fog:!1}));return D.position.set(Math.cos(.6)*e*1.1,300,Math.sin(.6)*e*1.1),s.add(D),D}function X_(s){const i=document.createElement("canvas");i.width=i.height=512;const r=document.createElement("canvas");r.width=r.height=512;const a=i.getContext("2d"),o=r.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,512,512),o.fillStyle="#000",o.fillRect(0,0,512,512);const c=512/8,l=512/8,h=["#66fcf1","#ffd98c","#ff9fbf","#2bfdaf","#ffe7b0"],u=Hr({brick:3,render:5,stone:7,glass:9}[s]||3),d="#1f2833",f=(b,p,g,_,x)=>{if(u()>=x)return!1;const M=h[Math.floor(u()*h.length)];return a.fillStyle=M,a.fillRect(b,p,g,_),o.fillStyle=M,o.globalAlpha=.5+u()*.5,o.fillRect(b,p,g,_),o.globalAlpha=1,u()<.35&&(a.fillStyle="rgba(40,40,40,0.45)",a.fillRect(b,p,g,_*.4),o.fillStyle="#000",o.fillRect(b,p,g,_*.4)),!0};for(let b=0;b<8;b++){if(s==="brick"){a.fillStyle="rgba(0,0,0,0.08)";for(let p=0;p<l;p+=6)a.fillRect(0,b*l+p,512,1)}s==="stone"&&(a.fillStyle="rgba(0,0,0,0.1)",a.fillRect(0,b*l+l-4,512,3)),s==="render"&&(a.fillStyle="rgba(255,255,255,0.6)",a.fillRect(0,b*l+l-8,512,6),a.fillStyle="rgba(0,0,0,0.12)",a.fillRect(0,b*l+l-2,512,2));for(let p=0;p<8;p++){const g=p*c,_=b*l;if(s==="glass"){const D=g+3,v=_+4,y=c-6,I=l-10;a.fillStyle="#2a3a55",a.fillRect(D,v,y,I),a.fillStyle="rgba(255,255,255,0.18)",a.fillRect(D,v,y*.35,I),f(D,v,y,I,.42),a.fillStyle="#c9d2d4",a.fillRect(g,_,3,l),a.fillRect(g,_+l-6,c,6);continue}const x=s==="render"?.66:.6,M=s==="stone"?.54:s==="render"?.42:.4,A=g+c*(1-M)/2,w=_+l*.16,T=c*M,L=l*x;if(a.fillStyle=s==="brick"?"#efe8da":"rgba(0,0,0,0.14)",a.fillRect(A-3,w-6,T+6,5),a.fillRect(A-4,w+L,T+8,4),a.fillStyle=d,a.fillRect(A,w,T,L),f(A,w,T,L,.3),a.fillStyle=s==="stone"?"#3c4144":"#f4f1ea",a.fillRect(A,w,T,3),a.fillRect(A,w+L-3,T,3),a.fillRect(A,w,3,L),a.fillRect(A+T-3,w,3,L),a.fillRect(A,w+L*.5-1.5,T,3),a.fillRect(A+T*.5-1,w,2,L),s==="render"){a.fillStyle="#1b1d20",a.fillRect(A-5,w+L*.72,T+10,3);for(let D=0;D<6;D++)a.fillRect(A-4+D*(T+8)/5,w+L*.72,2,L*.28)}}}const m=b=>{const p=new Wt(b);return p.wrapS=p.wrapT=pn,p.repeat.set(s==="glass"?1/19.2:1/22.4,1/25.6),p.colorSpace=dt,p.anisotropy=8,p};return{map:m(i),emissiveMap:m(r)}}const q_=[["Caff","#45a29e"],["News","#271e70"],["Launderette","#ab196f"],["Chippy","#1f2833"],["Barber","#0b0c10"],["Florist","#5527aa"],["Deli","#fc1057"],["Bakery","#ab196f"],["Books","#271e70"],["Hardware","#45a29e"],["Cafe Bar","#5527aa"],["Offy","#1f2833"]];function K_(){const n=341.3333333333333,i=document.createElement("canvas");i.width=2048,i.height=192;const r=document.createElement("canvas");r.width=2048,r.height=192;const a=i.getContext("2d"),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,2048,192);const c=Hr(21),l=q_.slice().sort(()=>c()-.5).slice(0,6);for(let u=0;u<6;u++){const d=u*n,[f,m]=l[u];a.fillStyle="#c5c6c7",a.fillRect(d,0,n,192),a.fillStyle=m,a.fillRect(d+10,14,n-20,40),a.fillStyle="#f4ecd8",a.font="800 30px Outfit, system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(f.toUpperCase(),d+n/2,35),o.fillStyle="rgba(255,236,200,0.35)",o.font=a.font,o.textAlign="center",o.textBaseline="middle",o.fillText(f.toUpperCase(),d+n/2,35);const b=c()<.8,p=d+22,g=n*.62,_=64,x=102;a.fillStyle=b?"#ffd9a0":"#39464c",a.fillRect(p,_,g,x),a.fillStyle="rgba(40,30,20,0.35)";for(let w=1;w<3;w++)a.fillRect(p+g*w/3-2,_,4,x);b&&(o.fillStyle="#ffcf8a",o.globalAlpha=.75+c()*.25,o.fillRect(p,_,g,x),o.globalAlpha=1);const M=p+g+14,A=n-(M-d)-22;if(a.fillStyle=m,a.fillRect(M,_-4,A,192-_-12),a.fillStyle=b?"#ffe2b0":"#2a3236",a.fillRect(M+8,_+6,A-16,(192-_)*.42),b&&(o.fillStyle="rgba(255,215,150,0.8)",o.fillRect(M+8,_+6,A-16,(192-_)*.42)),c()<.45){for(let w=0;w<10;w++)a.fillStyle=w%2?"#f4ecd8":m,a.fillRect(p+g/10*w,_,g/10,12);o.fillStyle="#000",o.fillRect(p,_,g,12)}}const h=u=>{const d=new Wt(u);return d.wrapS=pn,d.colorSpace=dt,d.anisotropy=8,d};return{map:h(i),glow:h(r)}}const Y_=4.4;let zu=null;function J_(s){const e=zu||(zu=K_());return s.onBeforeCompile=t=>{t.uniforms.shopMap={value:e.map},t.uniforms.shopGlow={value:e.glow},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;
varying float vFlip;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vWY = transformed.y;
        // shop names must read left to right from the street on every wall
        vFlip = abs(objectNormal.z) > abs(objectNormal.x) ? (objectNormal.z < 0.0 ? -1.0 : 1.0) : (objectNormal.x < 0.0 ? -1.0 : 1.0);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;
varying float vFlip;
uniform sampler2D shopMap;
uniform sampler2D shopGlow;
const float SHOP_H = ${Y_.toFixed(1)};`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 su = vec2(vMapUv.x * 22.4 / 48.0 * sign(vFlip), clamp(vWY / SHOP_H, 0.0, 1.0));
        if (vWY < SHOP_H) diffuseColor.rgb = texture2D(shopMap, su).rgb * 0.95;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (vWY < SHOP_H) totalEmissiveRadiance = texture2D(shopGlow, su).rgb * 0.9;`)},s}function Z_(s){const e=[];for(const t of s.groups){const n=new mt;for(const i of["position","normal","uv"]){const r=s.attributes[i];n.setAttribute(i,new xt(r.array.slice(t.start*r.itemSize,(t.start+t.count)*r.itemSize),r.itemSize))}e[t.materialIndex]=n}return e}const Q_={brick:[8014494,9191302,6963086,11213167],stone:[4873920,4150704,5580714],render:[11049958,10135784,12961511],glass:[4563614,3112854,3829672]};function ac(s,e,t,n){const i=s.attributes.position.count,r=new Float32Array(i*3),a=s.attributes.position.array;for(let o=0;o<i;o++){const c=n?.42+.58*Math.pow(Math.min(1,Math.max(0,a[o*3+1]/Math.max(1,t))),.55):1;r[o*3]=e.r*c,r[o*3+1]=e.g*c,r[o*3+2]=e.b*c}return s.setAttribute("color",new xt(r,3)),s}function $_(s,e){const t=[],n=[],i={brick:[],render:[],stone:[],glass:[]},r=[],a=Hr(11);s.forEach((l,h)=>{if(l.p.length<3)return;const u=new kr(l.p.map(([w,T])=>new ee(w,-T))),d=new lo(u,{depth:l.h,bevelEnabled:!1});d.rotateX(-Math.PI/2);const f=l.h>42?"glass":a()<.5?"brick":a()<.6?"stone":"render",m=Q_[f],b=new fe(m[Math.floor(a()*m.length)]).convertSRGBToLinear(),p=new fe(a()<.4?xr.midnight:xr.oil).lerp(new fe(xr.grape),a()*.45).convertSRGBToLinear(),[g,_]=Z_(d);g&&t.push(ac(g,p,l.h,!1)),_&&i[f].push(ac(_,b,l.h,!0)),d.dispose();let x=0,M=0,A=0;for(let w=0;w<l.p.length;w++){const[T,L]=l.p[w],[D,v]=l.p[(w+1)%l.p.length],y=T*v-D*L;A+=y,x+=(T+D)*y,M+=(L+v)*y}if(A/=2,Math.abs(A)>1?(x/=6*A,M/=6*A):(x=l.p[0][0],M=l.p[0][1]),Math.abs(A)>300){const w=1+Math.floor(a()*3);for(let T=0;T<w;T++){const L=2+a()*3.5,D=2+a()*3.5,v=1.2+a()*2,y=new _t(L,v,D);y.translate(x+(a()-.5)*6,l.h+v/2,M+(a()-.5)*6),n.push(ac(y.toNonIndexed(),new fe(3817322).convertSRGBToLinear(),1,!1))}}l.h>45&&r.push([x,l.h+1.2,M])});const o=new yt;let c=null;if(t.length){for(const[h,u]of Object.entries(i)){if(!u.length)continue;const d=X_(h),f=J_(dn({vertexColors:!0,map:d.map,emissive:16777215,emissiveMap:d.emissiveMap,emissiveIntensity:h==="glass"?.75:.6})),m=new De(Gi(u),f);m.castShadow=m.receiveShadow=e.shadows,o.add(m),e.lowEnd||o.add(ku(m,.25))}const l=new De(Gi(t),dn({vertexColors:!0}));if(l.castShadow=l.receiveShadow=e.shadows,o.add(l),e.lowEnd||o.add(ku(l,.25)),n.length){const h=new De(Gi(n.map(u=>(u.deleteAttribute("uv"),u))),dn({vertexColors:!0}));h.castShadow=e.shadows,o.add(h)}}if(r.length){c=new Pn(new nn(.45,8,6),new Je({color:16722474}),r.length);const l=new Oe;r.forEach((h,u)=>{l.makeTranslation(h[0],h[1],h[2]),c.setMatrixAt(u,l)}),o.add(c)}return{group:o,red:c}}function eM(s,e,t){const n=[],i=[],r=[],a=[];for(const u of e.edges){const d=$t(u.kind);n.push(or(u.pts,d+5,.02)),i.push(or(u.pts,d,.045));const f=d/2+2,m=H_(e,u,f,u.len-f);if(m.length>1&&Ou(u.kind))for(const b of[-1,1])r.push(or(m,.32,.06,b*(d/2))),a.push(or(m,.1,.062,b*(d/2-.35))),a.push(or(m,.1,.062,b*(d/2-.58)))}e.nodes.forEach(u=>{const d=Math.max(...u.out.map(f=>$t(e.edges[f.edge].kind)));n.push(Bu(u.x,u.z,(d+5)/2,.021)),i.push(Bu(u.x,u.z,d/2+.6,.046))});const o=(u,d,f=!0)=>{const m=new De(Gi(u),d);return m.receiveShadow=f&&t.shadows,s.add(m),m};o(n,dn({color:vt.pavement})),o(i,dn({color:vt.road})),r.length&&o(r,dn({color:vt.kerb})),a.length&&o(a,new Je({color:15909198}),!1);const c=[];if(e.nodes.forEach(u=>{if(!(u.out.length<3))for(const d of u.out){const f=e.edges[d.edge],m=$t(f.kind);if(f.len<30||m<7||!Ou(f.kind))continue;const b=d.dir===1?m/2+3.5:f.len-m/2-3.5;c.push({p:e.pointAt(f,b),w:m})}}),c.length){const u=c.reduce((g,_)=>g+Math.floor(_.w/1),0),d=new Pn(new _t(.55,.02,2.6),dn({color:15265002,emissive:2764590}),u),f=new Oe,m=new Ft,b=new C(0,1,0);let p=0;for(const g of c){const _=Math.floor(g.w/1),x=Math.sin(g.p.h),M=-Math.cos(g.p.h),A=-M,w=x;m.setFromAxisAngle(b,Math.atan2(x,M));for(let T=0;T<_;T++){const L=(T-(_-1)/2)*1;f.compose(new C(g.p.x+A*L,.065,g.p.z+w*L),m,new C(1,1,1)),d.setMatrixAt(p++,f)}}d.receiveShadow=t.shadows,s.add(d)}const l=[];for(const u of e.edges){const d=$t(u.kind);if(d<7||u.len<16)continue;const f=Math.min(2.2,d/3);for(let m=d/2+3;m<u.len-d/2-3;m+=4.5){const b=e.pointAt(u,m);for(const p of[-.5,.5])l.push({x:b.x+Math.cos(b.h)*p*f,z:b.z+Math.sin(b.h)*p*f,h:b.h})}}if(l.length){const u=new Pn(new _t(.14,.02,2.2),new Je({color:14673663,transparent:!0,opacity:.55}),l.length),d=new Oe,f=new Ft,m=new C(0,1,0),b=new C(1,1,1);l.forEach((p,g)=>{f.setFromAxisAngle(m,Math.atan2(Math.sin(p.h),-Math.cos(p.h))),d.compose(new C(p.x,.063,p.z),f,b),u.setMatrixAt(g,d)}),s.add(u)}const h=[];for(const u of e.edges){const d=$t(u.kind);let f=u.i%2?1:-1;for(let m=10;m<u.len-6;m+=26){const b=e.pointAt(u,m),p=Math.cos(b.h),g=Math.sin(b.h);h.push({x:b.x+p*f*(d/2+1.4),z:b.z+g*f*(d/2+1.4),ax:-p*f,az:-g*f}),f=-f}}if(h.length){const u=new At(.08,.13,6.2,8);u.translate(0,3.1,0);const d=new _t(.1,.1,1.3);d.translate(0,6.1,.6);const f=new Pn(Gi([u.toNonIndexed(),d.toNonIndexed()].map(M=>(M.deleteAttribute("uv"),M))),dn({color:1778470}),h.length),m=new Pn(new _t(.42,.18,.7),new Je({color:new fe(vt.lamp).multiplyScalar(1.6)}),h.length),b=new Pn((()=>{const M=new ri(11,11);return M.rotateX(-Math.PI/2),M})(),new Je({map:G_("rgba(255,200,140,0.3)","rgba(255,200,140,0)"),transparent:!0,depthWrite:!1,blending:Ti}),h.length),p=new Oe,g=new Ft,_=new C(0,1,0),x=new C(1,1,1);h.forEach((M,A)=>{g.setFromAxisAngle(_,Math.atan2(M.ax,M.az)),p.compose(new C(M.x,0,M.z),g,x),f.setMatrixAt(A,p),p.compose(new C(M.x+M.ax*1.2,6.05,M.z+M.az*1.2),g,x),m.setMatrixAt(A,p),p.compose(new C(M.x+M.ax*2.2,.07,M.z+M.az*2.2),g,x),b.setMatrixAt(A,p)}),f.castShadow=t.shadows,b.renderOrder=2,s.add(f,m,b)}}function oc(s,e,t,n){const i=new Pn(e,t,s.totalCells),r=new Oe,a=new Ft,o=new C,c=new C,l=new C(0,1,0),h=[],u=[];let d=0;for(const f of s.edges){h.push(d);for(let m=0;m<f.cells;m++){const b=s.pointAt(f,m*f.cellLen),p=s.pointAt(f,(m+1)*f.cellLen),g=Math.hypot(p.x-b.x,p.z-b.z)+.35;a.setFromAxisAngle(l,Math.atan2(p.x-b.x,p.z-b.z)),c.set((b.x+p.x)/2,0,(b.z+p.z)/2),o.set(1,1,n?g:1e-4),r.compose(c,a,o),i.setMatrixAt(d,r),u.push(g),d++}}return i.instanceMatrix.needsUpdate=!0,i.frustumCulled=!1,{mesh:i,offsets:h,lens:u}}function tM(s,e){s.onBeforeCompile=t=>{t.uniforms.uTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <project_vertex>",`#include <project_vertex>
vW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vW;
uniform float uTime;`).replace("#include <color_fragment>",`#include <color_fragment>
        float pulse = pow(0.5 + 0.5 * sin((vW.x + vW.z) * 0.32 - uTime * 7.0), 10.0);
        diffuseColor.rgb *= 0.8 + pulse * 1.6;`)}}function nM(s,e,t={}){const n=new Bv;n.background=new fe(1847160),n.fog=new Fl(2964102,150,950);const i={value:0};n.add(new kx(11845887,3811960,2.9)),n.add(new Vx(5925568,.8));const r=new ef(12898047,3.2);if(r.position.copy(ws).multiplyScalar(160),n.add(r,r.target),t.shadows){r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const L=r.shadow.camera;L.left=L.bottom=-90,L.right=L.top=90,L.near=1,L.far=500,r.shadow.bias=-4e-4,r.shadow.normalBias=.4}const a=s.radius,o=W_(n,a),c=new De(new Ei(3e3,64),dn({color:vt.ground}));c.rotation.x=-Math.PI/2,c.receiveShadow=!!t.shadows,n.add(c),eM(n,e,t);const l=$_(s.buildings||[],t);n.add(l.group);const h=k_(e,s,t);n.add(h.group);const u=new _t(.2,.05,.55);u.translate(0,.08,0);const d=oc(e,u,new Je({color:vt.copper,transparent:!0,opacity:.8}),!0);n.add(d.mesh);const f=new At(.19,.19,1,10,1,!0);f.rotateX(Math.PI/2),f.translate(0,.24,0);const m=new Je({color:new fe(vt.fibre).multiplyScalar(1.2)});tM(m,i);const b=oc(e,f,m,!1);n.add(b.mesh);const p=new ri(2.4,1);p.rotateX(-Math.PI/2),p.translate(0,.075,0);const g=new Je({map:V_(),color:vt.fibre,transparent:!0,opacity:.55,depthWrite:!1,blending:Ti}),_=oc(e,p,g,!1);_.mesh.renderOrder=3,n.add(_.mesh);const x=new Oe,M=new C,A=new Ft,w=new C,T=(L,D,v)=>{L.mesh.getMatrixAt(D,x),x.decompose(M,A,w),w.z=v,x.compose(M,A,w),L.mesh.setMatrixAt(D,x),L.mesh.instanceMatrix.needsUpdate=!0};return{scene:n,fibreMat:m,glowMat:g,update(L,D){i.value=L;for(const v of o)v.material.opacity=.55+.45*Math.sin(L*1.6+v.userData.phase);l.red&&(l.red.visible=Math.floor(L*1.2)%2===0),t.shadows&&D&&(r.target.position.set(D.x,0,D.z),r.position.set(D.x+ws.x*160,ws.y*160,D.z+ws.z*160))},layCell(L,D){const v=b.offsets[L]+D;T(b,v,b.lens[v]),T(_,v,_.lens[v]),T(d,v,1e-4)},resetFibre(){for(let L=0;L<e.totalCells;L++)T(b,L,1e-4),T(_,L,1e-4),T(d,L,d.lens[L])}}}class af extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new MM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=br.extractUrlBase(e);a=br.resolveURL(l,this.path)}else a=br.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===of){try{a[Ye.KHR_BINARY_GLTF]=new yM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new UM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new rM;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new SM(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new wM;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new TM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function iM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sM{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ef(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qs(h),l.distance=u;break;case"spot":l=new zx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rM{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Je}extendParams(e,t,n){const i=[];e.color=new fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class aM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(o,o)}return Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class lM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class hM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class uM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class dM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],zt),Promise.all(r)}}class fM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],zt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class vM{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xM{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _M{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class MM{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const b=new Oe,p=new C,g=new Ft,_=new C(1,1,1),x=new Pn(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&_.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,b.compose(p,g,_));for(const M in c)if(M==="_COLOR_0"){const A=c[M];x.instanceColor=new al(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);bt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const of="glTF",cr=12,Hu={JSON:1313821514,BIN:5130562};class yM{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cr,r=new DataView(e,cr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Hu.JSON){const l=new Uint8Array(e,cr+a,o);this.content=n.decode(l)}else if(c===Hu.BIN){const l=cr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=fl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=fl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Rs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const b=f.attributes[m],p=c[m];p!==void 0&&(b.normalized=p)}u(f)},o,l,zt,d)})})}}class wM{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TM{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class cf extends Br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,p=-2*f+3*d,g=f-d,_=1-p,x=g-d+u;for(let M=0;M!==o;M++){const A=a[b+M+o],w=a[b+M+c]*h,T=a[m+M+o],L=a[m+M]*h;r[M]=_*A+x*w+p*T+g*L}return r}}const EM=new Ft;class AM extends cf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return EM.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gu={9728:Ut,9729:un,9984:dd,9985:Ua,9986:ur,9987:ei},Vu={33071:xi,33648:qa,10497:pn},cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RM={CUBICSPLINE:void 0,LINEAR:Tr,STEP:wr},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),s.DefaultMaterial}function Ui(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function LM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IM(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=s.indices+":"+hc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hc(s.targets[n]);return e}function hc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function pl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const NM=new Oe;class UM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new $d(this.options.manager):this.textureLoader=new Wx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ui(r,o,i),Qn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(br.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=cc[i.type],o=Rs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new xt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=cc[i.type],l=Rs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,p;if(f&&f!==u){const g=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let x=t.cache.get(_);x||(b=new l(o,g*f,i.count*f/h),x=new kd(b,f/h),t.cache.add(_,x)),p=new Ar(x,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),p=new xt(b,c,m);if(i.sparse!==void 0){const g=cc.SCALAR,_=Rs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new _(a[1],x,i.sparse.count*g),w=new l(a[2],M,i.sparse.count*c);o!==null&&(p=new xt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,L=A.length;T<L;T++){const D=A[T];if(p.setX(D,w[T*c]),c>=2&&p.setY(D,w[T*c+1]),c>=3&&p.setZ(D,w[T*c+2]),c>=4&&p.setW(D,w[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Gu[d.magFilter]||un,h.minFilter=Gu[d.minFilter]||ei,h.wrapS=Vu[d.wrapS]||pn,h.wrapT=Vu[d.wrapT]||pn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){const p=new Lt(b);p.needsUpdate=!0,d(p)}),t.load(br.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Qn(u,a),u.userData.mimeType=a.mimeType||DM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Or,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Hd,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],zt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const h=r.alphaMode||lc.OPAQUE;if(h===lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Je&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Je&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Je){const u=r.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],zt)}return r.emissiveTexture!==void 0&&a!==Je&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ui(i,u,r),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Wu(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=IM(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wu(new mt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?CM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const b=h[f],p=a[f];let g;const _=l[f];if(p.mode===xn.TRIANGLES||p.mode===xn.TRIANGLE_STRIP||p.mode===xn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Hv(b,_):new De(b,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===xn.TRIANGLE_STRIP?g.geometry=Fu(g.geometry,yd):p.mode===xn.TRIANGLE_FAN&&(g.geometry=Fu(g.geometry,il));else if(p.mode===xn.LINES)g=new Wv(b,_);else if(p.mode===xn.LINE_STRIP)g=new kl(b,_);else if(p.mode===xn.LINE_LOOP)g=new jv(b,_);else if(p.mode===xn.POINTS)g=new oo(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&LM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Qn(g,r),p.extensions&&Ui(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ui(i,u[0],r),u[0];const d=new yt;r.extensions&&Ui(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Tp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ro(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Oe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ol(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],b=f.target,p=b.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",_)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],b=u[3],p=u[4],g=[];for(let _=0,x=d.length;_<x;_++){const M=d[_],A=f[_],w=m[_],T=b[_],L=p[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const D=n._createAnimationTracks(M,A,w,T,L);if(D)for(let v=0;v<D.length;v++)g.push(D[v])}return new ul(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,NM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new zd:l.length>1?h=new yt:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Qn(h,r),r.extensions&&Ui(n,h,r),r.matrix!==void 0){const u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yt;n.name&&(r.name=i.createUniqueName(n.name)),Qn(r,n),n.extensions&&Ui(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof an||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];pi[r.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(pi[r.path]){case pi.weights:l=ks;break;case pi.rotation:l=Bs;break;case pi.position:case pi.scale:l=zs;break;default:switch(n.itemSize){case 1:l=ks;break;case 2:case 3:default:l=zs;break}break}const h=i.interpolation!==void 0?RM[i.interpolation]:Tr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+pi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bs?AM:cf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FM(s,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=pl(Rs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const b=pl(Rs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Bn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=fl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return nt.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Qn(s,e),FM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?PM(s,e.targets,t):s})}var lf=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var _=new Uint8Array(g.length),x=0;x<g.length;++x){var M=g.charCodeAt(x);_[x]=M>96?M-97:M>64?M-39:M+4}for(var A=0,x=0;x<g.length;++x)_[A++]=_[x]<60?n[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,A)}function c(g,_,x,M,A,w){var T=r.exports.sbrk,L=x+3&-4,D=T(L*M),v=T(A.length),y=new Uint8Array(r.exports.memory.buffer);y.set(A,v);var I=g(D,x,M,v,A.length);if(I==0&&w&&w(D,L,M),_.set(y.subarray(D,D+x*M)),T(D-T(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(g){var _={object:new Worker(g),pending:0,requests:{}};return _.object.onmessage=function(x){var M=x.data;_.pending-=M.count,_.requests[M.id][M.action](M.value),delete _.requests[M.id]},_}function m(g){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),x=new Blob([_],{type:"text/javascript"}),M=URL.createObjectURL(x),A=0;A<g;++A)u[A]=f(M);URL.revokeObjectURL(M)}function b(g,_,x,M,A){for(var w=u[0],T=1;T<u.length;++T)u[T].pending<w.pending&&(w=u[T]);return new Promise(function(L,D){var v=new Uint8Array(x),y=d++;w.pending+=g,w.requests[y]={resolve:L,reject:D},w.object.postMessage({id:y,count:g,size:_,source:v,mode:M,filter:A},[v.buffer])})}function p(g){a.then(function(){var _=g.data;try{var x=new Uint8Array(_.count*_.size);c(r.exports[_.mode],x,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:_.id,count:_.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(g){m(g)},decodeVertexBuffer:function(g,_,x,M,A){c(r.exports.meshopt_decodeVertexBuffer,g,_,x,M,r.exports[l[A]])},decodeIndexBuffer:function(g,_,x,M){c(r.exports.meshopt_decodeIndexBuffer,g,_,x,M)},decodeIndexSequence:function(g,_,x,M){c(r.exports.meshopt_decodeIndexSequence,g,_,x,M)},decodeGltfBuffer:function(g,_,x,M,A,w){c(r.exports[h[A]],g,_,x,M,r.exports[l[w]])},decodeGltfBufferAsync:function(g,_,x,M,A){return u.length>0?b(g,_,x,h[M],l[A]):a.then(function(){var w=new Uint8Array(g*_);return c(r.exports[h[M]],w,g,_,x,r.exports[l[A]]),w})}}}();const hf=new $d;function OM(){const s=hf.load("/altnets-game/sprites/altnet-back.png");s.colorSpace=dt;const e=new Fs({map:s,transparent:!0,fog:!1}),t=new Rr(e),n=4.2;t.scale.set(n*(168/327),n,1),t.center.set(.5,0);const i=new yt;i.add(t);const r=new De(new Ei(.9,20),new Je({color:0,transparent:!0,opacity:.45,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.15,i.add(r);const a=new qs(vt.fibre,6,12,1.8);a.position.set(0,.8,0),i.add(a);const o={group:i,sprite:t,shadow:r,mat:e,height:n,model:null,body:null,mixer:null,actions:{}};return zM(o),o}function uf(s,e,{hair:t=1}={}){e.uHair={value:t},s.geometry.computeBoundingBox();const n=s.geometry.boundingBox;e.uB={value:new st(n.min.y,n.max.y-n.min.y,(n.min.z+n.max.z)/2,(n.max.z-n.min.z)/2)},e.uCx={value:(n.min.x+n.max.x)/2},s.material.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uB; uniform float uCx; uniform float uPhase; uniform float uRun; uniform float uTime; uniform vec2 uSway; uniform float uHair;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float f = (transformed.y - uB.x) / uB.y;
        float H = uB.y;
        float legW = 1.0 - smoothstep(0.16, 0.26, f);
        float side = clamp((transformed.z - uB.z) / (uB.w * 0.18), -1.0, 1.0);
        float a = sin(uPhase) * 0.6 * uRun * side * legW;
        float py = uB.x + 0.25 * H;
        float dx = transformed.x - uCx, dy = transformed.y - py;
        transformed.x = uCx + dx * cos(a) - dy * sin(a);
        transformed.y = py + dx * sin(a) + dy * cos(a) + max(0.0, sin(uPhase) * side) * 0.045 * H * uRun * legW;
        float h = clamp((f - 0.7) / 0.3, 0.0, 1.0);
        float hh = h * h * uHair;
        transformed.x -= hh * H * (0.11 * uRun + 0.018 * sin(uTime * 11.0 + f * 14.0));
        transformed.z += hh * H * (uSway.x * 0.3 + 0.025 * sin(uTime * 8.0 + transformed.x * 30.0));
        transformed.y += hh * H * 0.025 * sin(uPhase * 2.0) * uRun;`)},s.material.needsUpdate=!0}function kM(s){const e=s.geometry.boundingBox,t=e.max.y-e.min.y,n=e.max.z-e.min.z,i=(e.min.z+e.max.z)/2,r=e.min.y+t*.42,o=new r_(new C(e.min.x-t,r,i),new C(1,0,0)).intersectObject(new De(s.geometry),!1)[0],c=o?o.point.x:e.min.x,l=hf.load("/altnets-game/models/hoodie-back.png");l.colorSpace=dt;const h=n*.62,u=new De(new ri(h,h*(328/472)),new Vs({map:l,transparent:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-4}));u.position.set(c-t*.006,r,i),u.rotation.y=-Math.PI/2,s.add(u)}let uc=null;function BM(){if(!uc){const s=new af;s.setMeshoptDecoder(lf),uc=s.loadAsync("/altnets-game/models/altnet.glb")}return uc}function zM(s){BM().then(e=>{var h;const t=e.scene.clone(!0);t.traverse(u=>{u.isMesh&&u.material&&(u.material=u.material.clone())});const n=new Dn().setFromObject(t),i=n.getSize(new C),r=s.height*.92/i.y;t.scale.setScalar(r);const a=n.getCenter(new C);t.position.set(-a.x*r,-n.min.y*r,-a.z*r),s.uniforms={uPhase:{value:0},uRun:{value:0},uTime:{value:0},uSway:{value:new ee}};let o=null;t.traverse(u=>{u.isMesh&&(u.castShadow=!0,o=o||u,u.frustumCulled=!1,u.material&&(u.material.metalness=0,u.material.roughness=.9,uf(u,s.uniforms)))}),o&&kM(o);const c=new yt;c.add(t);const l=new yt;if(l.add(c),s.group.add(l),s.model=l,s.body=c,s.sprite.visible=!1,e.animations.length){s.mixer=new s_(t),e.animations.forEach(d=>{s.actions[d.name.toLowerCase()]=s.mixer.clipAction(d)});const u=((h=Object.entries(s.actions).find(([d])=>d.includes("run")))==null?void 0:h[1])||Object.values(s.actions)[0];u.play(),s.run=u}}).catch(()=>{})}function Jn(s,e={}){return new Vs({color:s,roughness:.45,metalness:.1,...e})}let Ea=null;const Aa=[];function HM(s){if(Ea)return s(Ea);if(Aa.push(s),Aa.length>1)return;const e=new af;e.setMeshoptDecoder(lf),e.load("/altnets-game/models/copper.glb",t=>{Ea=t.scene,Aa.splice(0).forEach(n=>n(Ea))},void 0,()=>{Aa.length=0})}function GM(s){const e=new yt,t=new yt;e.add(t);const n=Jn(s,{metalness:.75,roughness:.32,emissive:new fe(s).multiplyScalar(.12)}),i=Jn(8010263,{metalness:.8,roughness:.3}),r=Jn(1581386,{roughness:.55}),a=Jn(14015968,{metalness:.9,roughness:.2}),o=Jn(16777215,{roughness:.3}),c=Jn(329223),l=new De(new At(.85,1,1.9,20),n);l.position.y=.95,t.add(l);for(let v=0;v<2;v++){const y=new De(new Os(.97-v*.03,.09,8,24),i);y.rotation.x=Math.PI/2,y.position.y=.3+v*.36,t.add(y)}const h=Jn(13954847,{roughness:.6,emissive:new fe(3820032)}),u=new De(new At(.9,.96,1.05,20),h);u.position.y=1.38,t.add(u);for(const v of[1.12,1.62]){const y=new De(new At(.915+(v>1.4?-.015:.01),.925+(v>1.4?-.01:.02),.12,20),Jn(15265520,{metalness:.9,roughness:.15,emissive:new fe(3357244)}));y.position.y=v,t.add(y)}const d=new Wt((()=>{const v=document.createElement("canvas");v.width=64,v.height=16;const y=v.getContext("2d");for(let I=0;I<8;I++)for(let N=0;N<2;N++)y.fillStyle=(I+N)%2?"#ffffff":"#1d3fae",y.fillRect(I*8,N*8,8,8);return v})());d.colorSpace=dt,d.wrapS=pn,d.repeat.set(3,1);const f=new De(new At(.73,.73,.16,24,1,!0),new Vs({map:d,roughness:.5}));f.position.y=2.5,t.add(f);const m=new De(new _t(.22,.34,.12),Jn(1118481));m.position.set(.45,1.65,-.82),t.add(m);const b=new De(new nn(.82,20,14),n);b.position.y=2.05,t.add(b);const p=new De(new nn(.72,20,14),r);p.scale.set(1,1.35,1),p.position.y=2.75,t.add(p);const g=new De(new Os(.72,.08,8,24),r);g.rotation.x=Math.PI/2,g.position.y=2.42,t.add(g);const _=new De(new Ei(.2,8),a);_.position.set(0,2.85,-.72),_.rotation.y=Math.PI,t.add(_);const x=new De(new nn(.18,10,8),new Je({color:4033535}));x.position.y=3.72,t.add(x);for(const v of[-1,1]){const y=new De(new nn(.2,12,10),o);y.position.set(v*.3,2.12,-.72),t.add(y);const I=new De(new nn(.1,8,8),c);I.position.set(v*.3,2.12,-.9),t.add(I)}const M=new De(new Ei(1.1,20),new Je({color:0,transparent:!0,opacity:.4,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.14,e.add(M),e.add(x);const A=new fe(8163476),w=new fe(s),T={group:e,lamp:x,model:null,mats:[],uniforms:null};HM(v=>{const y=v.clone(!0),I={uPhase:{value:Math.random()*6},uRun:{value:0},uTime:{value:0},uSway:{value:new ee}},N=new Dn().setFromObject(y),Y=3.9/N.getSize(new C).y;y.scale.setScalar(Y);const B=N.getCenter(new C);y.position.set(-B.x*Y,-N.min.y*Y,-B.z*Y),y.traverse(W=>{W.isMesh&&(W.material=W.material.clone(),W.material.metalness=Math.min(W.material.metalness,.6),W.castShadow=!0,W.frustumCulled=!1,T.mats.push(W.material),uf(W,I,{hair:0}))});const se=new yt;se.rotation.y=Math.PI/2,se.add(y),e.add(se),x.position.y=4.05,t.visible=!1,T.model=se,T.uniforms=I});const L=new fe(9413552),D=new fe(16777215);return Object.assign(T,{tick(v,y,I){if(!T.uniforms)return;const N=T.uniforms;N.uRun.value+=((I?1:0)-N.uRun.value)*(1-Math.exp(-v*8)),N.uPhase.value+=v*13*(I?1:0),N.uTime.value=y,T.model.rotation.z=Math.sin(N.uPhase.value)*.06*N.uRun.value},setLook(v,y,I){if(e.visible=v!=="hidden",T.model){const N=v==="fright"?I&&Math.floor(y*6)%2?D:L:D;for(const G of T.mats)G.color.copy(N),G.emissive&&G.emissive.setScalar(v==="fright"&&I&&Math.floor(y*6)%2?.25:0);x.material.color.set(v==="fright"?6710886:Math.floor(y*4)%2?4033535:728917);return}if(v==="fright"){const N=I&&Math.floor(y*6)%2;n.color.set(N?15134446:A),n.emissive.set(0),r.color.set(N?16777215:4871511),h.color.set(N?16777215:10135208),h.emissive.set(0),x.material.color.set(6710886)}else n.color.copy(w),n.emissive.copy(w).multiplyScalar(.12),r.color.set(1581386),h.color.set(13954847),h.emissive.set(3820032),x.material.color.set(Math.floor(y*4)%2?4033535:728917)}})}function df(s){const e=new At(.9,1.6,40,16,1,!0);e.translate(0,20,0);const t=document.createElement("canvas");t.width=4,t.height=64;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,64);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(255,255,255,0.9)"),n.fillStyle=i,n.fillRect(0,0,4,64);const r=new De(e,new Je({map:new Wt(t),color:s,transparent:!0,opacity:.35,depthWrite:!1,blending:Ti,side:_n,fog:!1}));return r.renderOrder=4,r}function VM(){const s=new yt,e=new De(new Os(.9,.2,10,28,Math.PI*1.6),new Je({color:vt.yellow}));e.rotation.z=Math.PI/2+Math.PI*.2;const t=new De(new _t(.34,1.1,.34),e.material);t.position.y=.55;const n=new yt;n.add(e,t),n.position.y=2.2,s.add(n),s.add(df(vt.yellow));const i=new qs(vt.yellow,18,12,1.8);return i.position.y=2,s.add(i),{group:s,spin:n}}function WM(){const s=new yt,e=new kr;[[.1,1],[-.5,0],[0,0],[-.2,-1],[.5,.15],[0,.15],[.3,1]].forEach(([r,a],o)=>o?e.lineTo(r,a):e.moveTo(r,a));const t=new De(new lo(e,{depth:.25,bevelEnabled:!1}),new Je({color:vt.pink}));t.scale.setScalar(1.3);const n=new yt;n.add(t),n.position.y=2.2,s.add(n),s.add(df(vt.pink));const i=new qs(vt.pink,16,12,1.8);return i.position.y=2,s.add(i),{group:s,spin:n}}function jM(){const s=document.createElement("canvas");s.width=128,s.height=32;const e=s.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,128,32),e.fillStyle="#e02424";for(let n=-2;n<10;n++)e.beginPath(),e.moveTo(n*16,32),e.lineTo(n*16+8,32),e.lineTo(n*16+20,0),e.lineTo(n*16+12,0),e.fill();const t=new Wt(s);return t.colorSpace=dt,t}let dc;function XM(s,e){const t=new yt;if(s==="roadworks"){dc=dc||jM();const n=new De(new _t(e*.8,.45,.12),new gi({map:dc,emissive:3346705}));n.position.y=.9,t.add(n);for(const r of[-1,1]){const a=new De(new _t(.12,1.1,.5),new gi({color:14540253}));a.position.set(r*e*.38,.55,0),t.add(a)}const i=new De(new nn(.14,8,6),new Je({color:vt.orange}));i.position.set(e*.38,1.25,0),t.add(i)}else if(s==="manhole"){const n=new De(new At(1.2,1.2,.12,20),new gi({color:3884616}));n.position.y=.06;const i=new De(new Ei(1,20),new Je({color:0}));i.rotation.x=-Math.PI/2,i.position.y=.13;const r=new De(new At(1.05,1.05,.1,20),new gi({color:5266012}));r.position.set(1.4,.3,.2),r.rotation.z=.5,t.add(n,i,r);for(const a of[-1,1]){const o=new De(new Cr(.28,.8,10),new gi({color:vt.orange,emissive:3347712}));o.position.set(a*1.6,.4,-.3),t.add(o)}}else{const n=new gi({color:14034984}),i=new gi({color:1710618});for(const l of[-1,1]){const h=new De(new Os(.42,.07,8,20),i);h.position.set(l*.7,.45,0),t.add(h)}const r=new De(new _t(1.4,.14,.12),n);r.position.y=.8;const a=new De(new _t(.12,.6,.12),n);a.position.set(-.25,1,0);const o=new De(new _t(.12,.12,.7),i);o.position.set(.55,1.2,0),t.add(r,a,o),t.rotation.y=Math.PI/2;const c=new yt;return c.add(t),c}return t}function qM(s,e,t){const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,64),i.fillStyle=t,i.font="800 40px Outfit, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,34);const r=new Wt(n);return r.colorSpace=dt,r}function KM(){const s=new yt,e=new De(new At(.15,.2,5,10),new gi({color:1118481}));e.position.y=2.5,s.add(e);const t=qM("POLICE","#1b4fd8","#ffffff"),n=new De(new _t(1.4,1.1,1.4),[new Je({map:t}),new Je({map:t}),new Je({color:1789912}),new Je({color:1789912}),new Je({map:t}),new Je({map:t})]);n.position.y=5.5,s.add(n);const i=new qs(4029439,40,30,1.5);return i.position.y=5.5,s.add(i),s}let Qe=null,ni=null,Wa=null,uo=!1;try{uo=localStorage.getItem("altnets-muted")==="1"}catch{}function ff(){if(Qe){Qe.resume();return}const s=window.AudioContext||window.webkitAudioContext;if(!s)return;Qe=new s,ni=Qe.createGain(),ni.gain.value=uo?0:.7,ni.connect(Qe.destination);const e=Qe.createOscillator();e.type="square";const t=Qe.createBiquadFilter();t.type="lowpass",t.frequency.value=1400;const n=Qe.createGain();n.gain.value=0,e.connect(t).connect(n).connect(ni),e.start(),Wa={osc:e,g:n},JM()}function to(){return uo}const YM=["oi","ello","sunshine","dialup","landline","legit","switchoff","gotcha","buffering"],ml={};let ju=0;function JM(){for(const s of YM)fetch(`/altnets-game/audio/${s}.mp3`).then(e=>e.arrayBuffer()).then(e=>Qe.decodeAudioData(e)).then(e=>{ml[s]=e}).catch(()=>{})}function fc(s,e=0,t=!1){if(!Qe||!ml[s]||!t&&Qe.currentTime<ju)return;const n=Qe.createBufferSource();n.buffer=ml[s],n.playbackRate.value=.96+Math.random()*.1;const i=Qe.createGain();i.gain.value=Math.max(.25,1-e/40)*.9,n.connect(i).connect(ni),n.start(),ju=Qe.currentTime+n.buffer.duration/n.playbackRate.value+.6,sy(n.buffer.duration/n.playbackRate.value)}function ZM(s){uo=s;try{localStorage.setItem("altnets-muted",s?"1":"0")}catch{}ni&&(ni.gain.value=s?0:.7)}function kt(s,e,{type:t="square",vol:n=.05,slide:i=1,delay:r=0}={}){if(!Qe)return;const a=Qe.currentTime+r,o=Qe.createOscillator(),c=Qe.createGain();o.type=t,o.frequency.setValueAtTime(s,a),i!==1&&o.frequency.exponentialRampToValueAtTime(s*i,a+e),c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(c).connect(ni),o.start(a),o.stop(a+e+.02)}let pc=0;const Xt={lay(){pc=(pc+1)%6,kt(900+pc*70,.04,{type:"triangle",vol:.025})},coin(){kt(1319,.06,{type:"square",vol:.03}),kt(1976,.12,{type:"square",vol:.03,delay:.05})},turn(){kt(520,.05,{type:"triangle",vol:.03})},jump(){kt(380,.22,{vol:.04,slide:2})},land(){kt(160,.08,{type:"triangle",vol:.05})},hit(){kt(170,.3,{type:"sawtooth",vol:.07,slide:.5})},clear(){kt(620,.12,{vol:.04,slide:1.4})},power(){kt(220,.5,{type:"sawtooth",vol:.06,slide:4})},retire(){kt(440,.25,{vol:.06,slide:3}),kt(880,.2,{vol:.04,delay:.12})},boost(){kt(600,.35,{type:"triangle",vol:.06,slide:2.5})},caught(){kt(700,1.1,{vol:.07,slide:.15})},win(){[523,659,784,1047,1319].forEach((s,e)=>kt(s,.22,{vol:.05,delay:e*.11}))},streak(){[660,880,1320].forEach((s,e)=>kt(s,.1,{type:"triangle",vol:.05,delay:e*.06}))},street(){[784,988,1175,1568].forEach((s,e)=>kt(s,.14,{type:"square",vol:.035,delay:e*.07}))},go(){[392,523].forEach((s,e)=>kt(s,.16,{vol:.05,delay:e*.14}))}};function ja(s,e){if(!Wa)return;const t=s<70?.035*(1-s/70):0;Wa.g.gain.setTargetAtTime(t,Qe.currentTime,.1),Wa.osc.frequency.setTargetAtTime(Math.floor(e*1.6)%2?960:720,Qe.currentTime,.01)}const QM=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],$M=[0,0,12,0,0,7,0,12],gl=s=>440*2**((s-69)/12);let et=null;function ey(){const s=Qe.createBuffer(1,Qe.sampleRate*.3,Qe.sampleRate),e=s.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return s}function Ra(s,e,t,n,i,r,a=.005){const o=Qe.createOscillator(),c=Qe.createGain();return o.type=n,o.frequency.setValueAtTime(s,e),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(i,e+a),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(c).connect(r),o.start(e),o.stop(e+t+.05),o}function Xu(s,e,t,n,i,r){const a=Qe.createBufferSource();a.buffer=et.noise;const o=Qe.createBiquadFilter();o.type=n,o.frequency.value=i;const c=Qe.createGain();c.gain.setValueAtTime(t,s),c.gain.exponentialRampToValueAtTime(1e-4,s+e),a.connect(o).connect(c).connect(r),a.start(s),a.stop(s+e+.02)}function ty(s,e,t){const n=Qe.createBiquadFilter();n.type="lowpass",n.frequency.value=900+et.level*900,n.Q.value=.7;const i=Qe.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.045,e+.35),i.gain.setValueAtTime(.045,e+t-.3),i.gain.exponentialRampToValueAtTime(1e-4,e+t),n.connect(i).connect(et.gain);for(const r of s)for(const a of[-7,7]){const o=Qe.createOscillator();o.type="sawtooth",o.frequency.value=gl(r),o.detune.value=a,o.connect(n),o.start(e),o.stop(e+t+.05)}}function ny(s,e){const t=et,n=t.gain,i=t.level,r=Math.floor(s/16)%4,a=s%16,o=QM[r];a===0&&ty(o,e,60/t.tempo*4),(a%4===0||i>.6&&a===14)&&Ra(150,e,.22,"sine",.5,n).frequency.exponentialRampToValueAtTime(45,e+.12),(a===4||a===12)&&(Xu(e,.16,.16,"bandpass",1900,n),Ra(190,e,.08,"triangle",.12,n)),(a%2===1||i>.45&&a%1===0)&&Xu(e,.04,a%4===2?.05:.03,"highpass",8e3,n),a%2===0&&Ra(gl(o[0]-24+$M[a/2%8]),e,.2,"triangle",.26,n),i>.25&&a%2===0&&Ra(gl(o[a/2%3]+12+(a>=8?12:0)),e,.16,"square",.028+i*.02,n)}function Wi(s){Qe&&(s&&!(et!=null&&et.timer)?(et=et||{gain:Qe.createGain(),noise:ey(),level:0,tempo:112,step:0,next:0},et.gain.gain.value=.5,et.gain.connect(ni),et.next=Qe.currentTime+.06,et.step=0,et.timer=setInterval(()=>{for(;et.next<Qe.currentTime+.12;)ny(et.step,et.next),et.next+=60/et.tempo/4,et.step=(et.step+1)%64},25)):!s&&(et!=null&&et.timer)&&(clearInterval(et.timer),et.timer=null,et.gain.disconnect()))}function iy(s){et&&(et.level=s,et.tempo=112+s*26)}function sy(s){if(!(et!=null&&et.timer))return;const e=et.gain.gain,t=Qe.currentTime;e.cancelScheduledValues(t),e.setTargetAtTime(.18,t,.05),e.setTargetAtTime(.5,t+s,.25)}const mi=600;class ry{constructor(e){this.pos=new Float32Array(mi*3),this.col=new Float32Array(mi*3),this.vel=new Float32Array(mi*3),this.life=new Float32Array(mi),this.max=new Float32Array(mi),this.base=new Float32Array(mi*3),this.next=0;const t=new mt;t.setAttribute("position",new xt(this.pos,3)),t.setAttribute("color",new xt(this.col,3));const n=document.createElement("canvas");n.width=n.height=64;const i=n.getContext("2d"),r=i.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,0.8)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),this.points=new oo(t,new Or({map:new Wt(n),size:.7,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ti,fog:!1})),this.points.frustumCulled=!1,e.add(this.points),this.pos.fill(-9999)}burst(e,t,n,i,r,{up:a=6,spread:o=5,life:c=.9,gravity:l=!0}={}){for(let h=0;h<i;h++){const u=this.next;this.next=(this.next+1)%mi;const d=Math.random()*Math.PI*2,f=Math.random()*o;this.pos.set([e,t,n],u*3),this.vel.set([Math.cos(d)*f,a*(.4+Math.random()*.8),Math.sin(d)*f],u*3);const m=r[Math.floor(Math.random()*r.length)];this.base.set([m.r,m.g,m.b],u*3),this.life[u]=this.max[u]=c*(.6+Math.random()*.6),this.gravity=l}}update(e){for(let t=0;t<mi;t++){if(this.life[t]<=0)continue;this.life[t]-=e;const n=t*3;if(this.life[t]<=0){this.pos[n+1]=-9999;continue}this.vel[n+1]-=14*e,this.pos[n]+=this.vel[n]*e,this.pos[n+1]=Math.max(.15,this.pos[n+1]+this.vel[n+1]*e),this.pos[n+2]+=this.vel[n+2]*e;const i=this.life[t]/this.max[t];this.col[n]=this.base[n]*i,this.col[n+1]=this.base[n+1]*i,this.col[n+2]=this.base[n+2]*i}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}const qu=[{text:"Oi! Stop right there!",voice:"oi"},{text:"'Ello 'ello 'ello!",voice:"ello"},{text:"Back to copper, sunshine!",voice:"sunshine"},{text:"Dial-up was good enough for me!",voice:"dialup"},{text:"Stop! In the name of the landline!",voice:"landline"},{text:"Buffering…",voice:"buffering"}],Ku=[{text:"Leg it, lads!",voice:"legit"},{text:"Not the switch-off!",voice:"switchoff"}];function ay(){const t=document.createElement("canvas");t.width=1024,t.height=180;const n=new Wt(t);n.colorSpace=dt;const i=new Rr(new Fs({map:n,color:13619151,transparent:!0,depthTest:!1,fog:!1}));return i.scale.set(9.5,9.5*(180/1024),1),i.center.set(.5,0),i.position.y=4.5,i.visible=!1,i.renderOrder=10,{sprite:i,say(r){const a=t.getContext("2d");a.clearRect(0,0,1024,180);let o=72;do a.font=`900 ${o}px Outfit, system-ui, sans-serif`,o-=4;while(a.measureText(r).width>904&&o>36);const c=Math.min(1008,a.measureText(r).width+80),l=(1024-c)/2;a.fillStyle="#f4f3ef",a.beginPath(),a.roundRect(l,8,c,126,46),a.moveTo(1024/2-22,132),a.lineTo(1024/2,172),a.lineTo(1024/2+22,132),a.fill(),a.fillStyle="#0f1414",a.textAlign="center",a.textBaseline="middle",a.fillText(r,1024/2,72),n.needsUpdate=!0,i.visible=!0},hide(){i.visible=!1}}}function oy(){const t=document.createElement("canvas");t.width=640,t.height=150;const n=new Wt(t);n.colorSpace=dt;const i=new Rr(new Fs({map:n,transparent:!0,depthTest:!1,fog:!1}));i.scale.set(8.8,8.8*(150/640),1),i.renderOrder=9,i.visible=!1;let r="";return{sprite:i,set(a,o,c,l){const h=a+o+c+l;if(h===r)return;r=h;const u=t.getContext("2d");u.clearRect(0,0,640,150),u.fillStyle=c?l?"#f6c521":"#f4f3ef":"rgba(15,20,20,0.72)",u.beginPath(),u.roundRect(6,6,628,138,34),u.fill(),u.fillStyle=c?"#0f1414":"#eaf6f5",u.textBaseline="middle",u.font="900 86px Outfit, system-ui, sans-serif",u.textAlign="left",u.fillText(a,30,150/2+4);let d=50;do u.font=`800 ${d}px Outfit, system-ui, sans-serif`,d-=3;while(u.measureText(o).width>490&&d>24);u.fillText(o,120,150/2+2),n.needsUpdate=!0,i.material.opacity=c?1:.85}}}const cy=1.15,ly=2.4,hy=34;function uy(){const s=document.createElement("canvas");s.width=s.height=256;const e=s.getContext("2d"),t=e.createRadialGradient(100,90,20,128,128,130);t.addColorStop(0,"#fff3a8"),t.addColorStop(.55,"#ffc928"),t.addColorStop(1,"#e08a00"),e.fillStyle=t,e.beginPath(),e.arc(128,128,128,0,Math.PI*2),e.fill(),e.lineWidth=14,e.strokeStyle="#c87400",e.beginPath(),e.arc(128,128,100,0,Math.PI*2),e.stroke(),e.fillStyle="#0b8f8a",e.font='900 150px system-ui, -apple-system, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("A",128,140),e.fillStyle="#2bfdaf",e.fillText("A",124,134);const n=new Wt(s);return n.colorSpace=dt,n.anisotropy=4,n}class dy{constructor(e){this.scene=e,this.list=[],this.mesh=null;const t=new At(.62,.62,.16,28);t.rotateX(Math.PI/2),this.geo=t;const n=uy();this.mats=[new Va({color:16758812,emissive:8014336}),new Va({map:n,emissive:5913088,emissiveMap:n}),new Va({map:n,emissive:5913088,emissiveMap:n})],this.m=new Oe,this.q=new Ft,this.v=new C,this.s=new C,this.up=new C(0,1,0)}layout(e,t,n=[]){this.list=[];for(const i of e.edges){if(i.len<22)continue;const r=t(i);for(let a=9+Math.random()*8;a<i.len-14;a+=hy+Math.random()*14){const o=5+Math.floor(Math.random()*5);let c=Math.floor(Math.random()*3)-1;const l=Math.random()<.3?c===0?Math.random()<.5?-1:1:0:null;for(let h=0;h<o;h++){const u=a+h*ly;if(u>i.len-8)break;l!==null&&h===Math.floor(o/2)&&(c=l);const d=e.pointAt(i,u),f=d.x+Math.cos(d.h)*c*r,m=d.z+Math.sin(d.h)*c*r;n.some(b=>Math.hypot(b.x-f,b.z-m)<b.r)||this.list.push({x:f,z:m,got:!1,pop:0})}}}this.mesh&&(this.scene.remove(this.mesh),this.mesh.dispose()),this.mesh=new Pn(this.geo,this.mats,Math.max(1,this.list.length)),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.total=this.list.length,this.update(0,0)}reset(){for(const e of this.list)e.got=!1,e.pop=0}collect(e,t){let n=0;for(const i of this.list){if(i.got)continue;const r=i.x-e,a=i.z-t;r*r+a*a<1.5*1.5&&(i.got=!0,i.pop=.25,n++)}return n}update(e,t){if(!this.mesh)return;const{m:n,q:i,v:r,s:a,up:o}=this;this.q.setFromAxisAngle(o,t*3.2);for(let c=0;c<this.list.length;c++){const l=this.list[c];let h=1,u=cy+Math.sin(t*3+c*.7)*.12;l.got&&(l.pop=Math.max(0,l.pop-e),h=l.pop/.25,u+=(1-h)*2.2),r.set(l.x,u,l.z),a.setScalar(h),n.compose(r,i,a),this.mesh.setMatrixAt(c,n)}this.mesh.instanceMatrix.needsUpdate=!0}}const fy=[{name:"Sgt Dial-Up",kind:"chase",tint:13792570,wait:1.2},{name:"PC Landline",kind:"ambush",tint:14717034,wait:2},{name:"Inspector ADSL",kind:"shy",tint:12083758,wait:4},{name:"DC Buffering",kind:"wander",tint:11098154,wait:6}],mc=[[3,"scatter"],[25,"chase"],[3,"scatter"],[30,"chase"],[1/0,"chase"]],Yu=.62,py=2.6,Ju=["roadworks","manhole","bike"],my={roadworks:"Roadworks!",manhole:"Open manhole!",bike:"Hire bike!"},bs=[vt.fibre,vt.pink,vt.yellow,vt.orange,vt.blue].map(s=>new fe(s)),gy=[new fe(2018244),new fe(13172731)],Zu=[new fe(13135932),new fe(16172321),new fe(16777215)],gc=3.4,by=20,Ca=5,vy=[new fe(16765503),new fe(16774056),new fe(16777215)],vs=s=>Math.min(2.2,$t(s.kind)/3),xy=16,_y=5.5,lr=(s,e)=>({x:s.x+Math.cos(s.h)*e,z:s.z+Math.sin(s.h)*e,h:s.h}),Qu=(s,e,t)=>s+Dr(e-s)*t;class My{constructor(e,t,n={}){this.area=e,this.emit=t,this.g=new __(e),this.world=nM(e,this.g,n),this.scene=this.world.scene,this.camera=new Yt(62,1,.5,2600),this.time=0,this.attract=!0,this.runner=OM(),this.scene.add(this.runner.group),this.cops=fy.map(o=>({...o,view:GM(o.tint),m:null,mode:"wait"})),this.cops.forEach(o=>{this.scene.add(o.view.group),o.bubble=ay(),o.view.group.add(o.bubble.sprite)}),this.sparks=new ry(this.scene),this.coins=new dy(this.scene),this.coinCount=0,this.signs=[0,1,2,3,4].map(()=>{const o=oy();return this.scene.add(o.sprite),o});const i=new At(1.2,2.2,60,16,1,!0);i.translate(0,30,0),this.finderBeam=new De(i,new Je({color:vt.fibre,transparent:!0,opacity:.28,depthWrite:!1,blending:Ti,side:_n,fog:!1})),this.finderBeam.visible=!1,this.scene.add(this.finderBeam),this.finder=null,this.finderT=0;const r=new kr;[[0,1.2],[1.2,-.1],[.6,-.1],[0,.5],[-.6,-.1],[-1.2,-.1]].forEach(([o,c],l)=>l?r.lineTo(o,c):r.moveTo(o,c));const a=new Vl(r);a.scale(1.7,1.7,1),a.rotateX(-Math.PI/2),this.chevrons=[0,1,2].map(()=>{const o=new De(a,new Je({color:16777215,transparent:!0,opacity:.8,depthWrite:!1}));return o.renderOrder=5,o.visible=!1,this.scene.add(o),o}),this.siren=new qs(4029439,0,30,1.5),this.scene.add(this.siren),this.shake=0,this.baseFov=62,this.hints=new Set,this.streets=new Map;for(const o of this.g.edges){if(!o.name)continue;const c=this.streets.get(o.name)||{total:0,laid:0,done:!1};c.total+=o.cells,this.streets.set(o.name,c)}this.setupCorners(),this.setupStation(),this.setupStart(),this.round=1,this.score=0,this.lives=3,this.pickups=[],this.hurdles=[],this.resetRound(),this.resetActors(),this.state="title"}setupCorners(){const e=this.g,t=[[1,-1],[-1,-1],[-1,1],[1,1]],n=new Set;this.corners=t.map(([i,r])=>{let a=-1,o=-1/0;return e.nodes.forEach((c,l)=>{const h=c.x*i+c.z*r;!n.has(l)&&h>o&&(o=h,a=l)}),n.add(a),a}),this.cops.forEach((i,r)=>{i.corner=this.corners[r]})}setupStation(){const e=this.g,t=this.area.station,n=this.area.radius;let i,r;if(t&&t.dist<n+150)i=e.nearestNode(t.x,t.z),r=t.dist<n+30?[t.x,t.z]:null;else if(t){const c=Math.atan2(t.z,t.x);let l=-1/0;e.nodes.forEach((h,u)=>{const d=h.x*Math.cos(c)+h.z*Math.sin(c);d>l&&(l=d,i=u)})}else i=this.corners[0];this.spawnNode=i;const a=e.nodes[i];r||(r=[a.x+6,a.z+6]);const o=KM();o.position.set(r[0],0,r[1]),this.scene.add(o),this.waitSpots=this.cops.map((c,l)=>{const h=(l+1)/(this.cops.length+1);return[r[0]+(a.x-r[0])*h,r[1]+(a.z-r[1])*h]}),this.stationName=(t==null?void 0:t.name)||"the local nick",this.stationDist=(t==null?void 0:t.dist)??null}setupStart(){const e=this.g;let t=e.nearestOnEdges(0,0);if(!e.edges[t.edge].name){const c=e.nearestOnEdges(0,0,l=>l.name);c&&c.dist<t.dist+60&&(t=c)}const n=e.edges[t.edge],i=e.nodes[this.spawnNode],r=Math.hypot(e.nodes[n.a].x-i.x,e.nodes[n.a].z-i.z),o=Math.hypot(e.nodes[n.b].x-i.x,e.nodes[n.b].z-i.z)>=r?1:-1;this.start={edge:n.i,dir:o,s:o===1?t.d:n.len-t.d}}resetRound(){this.streets.forEach(n=>{n.laid=0,n.done=!1}),this.streetsDone=0,this.g.resetFibre(),this.world.resetFibre();const e=this.g.pose(this.start),t=[{x:e.x,z:e.z,r:14},...this.corners.map(n=>({x:this.g.nodes[n].x,z:this.g.nodes[n].z,r:5}))];this.coins.layout(this.g,vs,t);for(const n of this.pickups)this.scene.remove(n.view.group);this.pickups=[];for(const n of this.corners){if(n===this.spawnNode)continue;const i=this.g.nodes[n],r=VM();r.group.position.set(i.x,0,i.z),this.scene.add(r.group),this.pickups.push({type:"switch",x:i.x,z:i.z,view:r,life:1/0})}}resetActors(){this.p={...this.start,buf:null,lane:0,lx:0,air:0,jcd:0,stumble:0,boost:0,since:99,last:null},this.cops.forEach((r,a)=>{r.mode="wait",r.waitT=Math.max(.8,r.wait-(this.round-1)*.8),r.m=null,r.lane=0,r.lx=0,r.laneT=0,r.rT=0,r.wt=null,r.sayT=0,r.nextTaunt=1+Math.random()*3,r.bubble.hide()}),this.streak=0,this.streakT=0,this.mult=1,this.grace=2,this.modeIdx=0,this.modeT=0,this.fright=0,this.combo=0;for(const r of this.hurdles)this.scene.remove(r.view);this.hurdles=[],this.hurdleT=5,this.gigT=14,this.pickups=this.pickups.filter(r=>(r.type==="gig"&&this.scene.remove(r.view.group),r.type!=="gig"));const e=this.p,t=this.g.edges[e.edge];e.s<Ca+3&&t.len>Ca+8&&(e.s=Ca+3);const n=this.cops.find(r=>r.kind==="chase");n.m={edge:e.edge,dir:e.dir,s:Math.max(.5,e.s-Ca)},n.mode="active",n.lane=0,n.lx=0,n.nextTaunt=.5;const i=this.g.pose(this.p);this.camH=i.h,this.readyT=2.2,this.seedTrail()}begin(){this.attract=!1,this.outro=!1,this.state="ready",this.readyT=gc,this.intro=!0,this.readyReason="start"}skipIntro(){this.state==="ready"&&this.intro&&(this.readyT=Math.min(this.readyT,.9))}turn(e){if(this.state!=="play"&&this.state!=="ready")return;const t=this.p,n=this.g,i=e==="left"?-1:1,r=Math.max(-1,Math.min(1,t.lane+i));if(r===t.lane?(this.shake=Math.max(this.shake,.15),Xt.land()):Xt.turn(),t.lane=r,t.buf=r<0?"left":r>0?"right":null,this.state==="play"&&t.buf&&t.last&&t.since<6){const{node:a,inH:o,edge:c,dir:l}=t.last,h=n.choose(n.options(a,{edge:c,dir:l},o),t.buf);h&&!(h.edge===t.edge&&h.dir===t.dir)&&(t.edge=h.edge,t.dir=h.dir,t.s=Math.min(t.since,n.edges[h.edge].len-.1),t.last=null,this.tookTurn())}}tookTurn(){const e=this.p;e.lane=0,e.buf=null}uturn(){if(this.state!=="play")return;const e=this.p;e.dir=-e.dir,e.s=this.g.edges[e.edge].len-e.s,e.lane=-e.lane,e.lx=-e.lx,e.buf=e.lane<0?"left":e.lane>0?"right":null,e.last=null,this.seedTrail()}jump(){if(this.state!=="play")return;const e=this.p;e.air>0||e.jcd>0||(e.air=Yu,Xt.jump())}update(e){if(this.time+=e,this.state==="ready"){this.readyT-=e,this.readyT<=0&&(this.state="play",this.intro=!1,Xt.go(),this.emit("go"),this.hint("turn"));return}if(this.state==="dying"){this.dyingT-=e,this.dyingT<=0&&(this.lives--,this.lives<=0?(this.state="over",this.startOutro(),this.emit("over")):(this.resetActors(),this.state="ready",this.readyReason="respawn"));return}this.state==="play"&&(this.updatePlayer(e),this.state==="play"&&(this.updateModes(e),this.updateCops(e),this.updateHurdles(e),this.updatePickups(e),this.updateCoins(e),this.updateFinder(e),this.grace>0&&(this.grace-=e),this.checkCops()))}hint(e){this.hints.has(e)||(this.hints.add(e),this.emit("hint",e))}updatePlayer(e){const t=this.p,n=this.g;this.streakT-=e,this.streakT<=0&&this.streak&&(this.streak=0,this.mult=1),t.air>0?(t.air-=e,t.air<=0&&(t.air=0,t.jcd=.12,Xt.land())):t.jcd>0&&(t.jcd-=e),t.stumble=Math.max(0,t.stumble-e),t.boost=Math.max(0,t.boost-e);let i=this.runSpeed();t.boost>0&&(i*=1.45),t.stumble>0&&(i*=.4),Nu(n,t,i*e,(c,l,h)=>this.playerAtNode(c,l,h)),t.since+=i*e;const r=t.lane*vs(n.edges[t.edge]),a=xy*e;t.lx+=Math.max(-a,Math.min(a,r-t.lx));const o=n.edges[t.edge];this.layAt(t.edge,t.dir===1?t.s:o.len-t.s)}layAt(e,t){const n=this.g.lay(e,t);if(n<0)return;this.world.layCell(e,n),this.streak++,this.streakT=1.4;const i=Math.min(5,1+Math.floor(this.streak/20));i>this.mult&&(this.emit("pop",{text:`x${i} streak!`,tone:"pink"}),Xt.streak()),this.mult=i,this.score+=10*i,Xt.lay();const r=this.g.pose(this.p);this.sparks.burst(r.x,.3,r.z,3,gy,{up:4,spread:3,life:.5});const a=this.g.edges[e].name,o=a&&this.streets.get(a);o&&!o.done&&++o.laid>=o.total&&(o.done=!0,this.streetsDone++,this.score+=250,this.emit("pop",{text:`${a} connected! +250`,tone:"teal"}),Xt.street(),this.sparks.burst(r.x,1,r.z,40,bs,{up:10,spread:7,life:1.3})),this.g.laidCount===this.g.totalCells&&this.levelClear()}planExit(e,t){const n=this.g,i=this.p;if(!t.length)return{pick:null,turning:!1};if(i.buf){const c=n.choose(t,i.buf);if(c)return{pick:c,turning:!0}}if(t.filter(c=>Math.abs(c.rel)<.55).length||t.length===1)return{pick:n.choose(t,null),turning:!1};let a=t[0],o=1/0;for(const c of t){const l=this.unlaidDistance(c);l<o&&(o=l,a=c)}return{pick:a,turning:!1}}unlaidDistance(e){const t=this.g;if(t.laid[e.edge].some(a=>!a))return 0;const n=this.farNode(e),i=t.distancesTo(n);let r=1/0;for(const a of t.edges)t.laid[a.i].some(o=>!o)&&(r=Math.min(r,i[a.a],i[a.b]));return t.edges[e.edge].len+r}playerAtNode(e,t,n){const i=this.g,r=this.p,a=i.edges[e.edge];this.layAt(e.edge,e.dir===1?a.len-.01:.01);const o=i.options(t,e,n),{pick:c,turning:l}=this.planExit(t,o);if(l&&this.tookTurn(),r.last={node:t,inH:n,edge:e.edge,dir:e.dir},r.since=0,!c){e.dir=-e.dir,this.emit("pop",{text:"Dead end! Turning round",tone:"orange"});return}e.edge=c.edge,e.dir=c.dir}runnerPos(){return lr(this.g.pose(this.p),this.p.lx)}copPos(e){return lr(this.g.pose(e.m),e.lx)}copLanes(e,t){const n=e.lane*vs(this.g.edges[e.m.edge]),i=_y*t;e.lx+=Math.max(-i,Math.min(i,n-e.lx))}updateCoins(e){const t=this.runnerPos(),n=this.coins.collect(t.x,t.z);n&&(this.coinCount+=n,this.score+=5*n*this.mult,Xt.coin(),this.sparks.burst(t.x,1.6,t.z,6,vy,{up:5,spread:2.5,life:.4}),this.coinCount===1&&this.hint("coins"))}modeName(){return mc[this.modeIdx][1]}updateModes(e){if(this.fright>0){this.fright-=e,this.fright<=0&&(this.fright=0,this.cops.forEach(t=>{t.mode==="fright"&&(t.mode="active")}));return}this.modeT+=e,this.modeT>mc[this.modeIdx][0]&&(this.modeT=0,this.modeIdx=Math.min(this.modeIdx+1,mc.length-1))}runSpeed(){return by+(this.round-1)*.8}copSpeed(e){if(e.mode==="fright")return 8;const t=this.runSpeed();if(e.kind==="chase"){const i=this.g.pose(e.m),r=this.g.pose(this.p),a=Math.hypot(i.x-r.x,i.z-r.z);return t*(a>30?1.1:a>18?1:.95)+(this.g.coverage>.7?.6:0)}const n=15.5+(this.round-1)*1;return Math.min(t-.8,n)}updateCops(e){const t=this.g.pose(this.p);for(const n of this.cops){if(n.sayT>0&&(n.sayT-=e,n.sayT<=0&&n.bubble.hide()),n.mode==="active"){const i=this.g.pose(n.m),r=Math.hypot(i.x-t.x,i.z-t.z);if(r<26&&(n.nextTaunt-=e)<=0){const a=qu[Math.floor(Math.random()*qu.length)];n.bubble.say(a.text),fc(a.voice,r),n.sayT=1.6,n.nextTaunt=4+Math.random()*5}}if(n.mode==="wait"){n.waitT-=e,n.waitT<=0&&this.release(n);continue}if(n.mode==="retired"){n.rT-=e,n.rT<=0&&(n.mode="wait",n.waitT=.6);continue}Nu(this.g,n.m,this.copSpeed(n)*e,(i,r,a)=>this.copAtNode(n,i,r,a)),this.copLanes(n,e)}}release(e){const t=this.g,n=t.nodes[this.spawnNode].out.map(r=>({...r,rel:0})),i=this.copPick(e,this.spawnNode,n);e.m={edge:i.edge,dir:i.dir,s:0},e.mode="active",e.lane=Math.floor(Math.random()*3)-1,e.lx=e.lane*vs(t.edges[i.edge])}farNode(e){const t=this.g.edges[e.edge];return e.dir===1?t.b:t.a}copTarget(e){const t=this.g,n=this.p,i=t.endNode(n);if(this.modeName()==="scatter"&&e.kind!=="chase")return e.corner;const r=t.pose(n),a=e.m?t.pose(e.m):t.nodes[this.spawnNode],o=Math.hypot(r.x-a.x,r.z-a.z);switch(e.kind){case"ambush":{const c=t.choose(t.options(i,n,t.arriveHeading(n)),null);return c?this.farNode(c):i}case"shy":return o>70?i:e.corner;case"wander":return o<45?i:((e.wt==null||this.time>e.wtT)&&(e.wt=Math.floor(Math.random()*t.nodes.length),e.wtT=this.time+7),e.wt);default:return i}}copPick(e,t,n){const i=this.g,r=this.p;if(e.mode==="fright")return n[Math.floor(Math.random()*n.length)];if(this.modeName()==="chase"&&(t===i.endNode(r)||t===i.startNode(r))){const l=n.find(h=>h.edge===r.edge);if(l)return l}const a=i.distancesTo(this.copTarget(e));let o=n[0],c=1/0;for(const l of n){const h=i.edges[l.edge].len+a[this.farNode(l)]+Math.random()*3;h<c&&(c=h,o=l)}return o}copAtNode(e,t,n,i){const r=this.g.options(n,t,i);if(!r.length){t.dir=-t.dir;return}const a=this.copPick(e,n,r);t.edge=a.edge,t.dir=a.dir}reverse(e){e.dir=-e.dir,e.s=this.g.edges[e.edge].len-e.s}startFright(){this.fright=Math.max(2.5,5.5-(this.round-1)*.7),this.combo=0,this.score+=50;for(const e of this.cops)if(e.mode==="active"){this.reverse(e.m),e.mode="fright";const t=Ku[Math.floor(Math.random()*Ku.length)];e.bubble.say(t.text),e.sayT=1.4,fc(t.voice,10)}this.hint("chase"),Xt.power(),this.emit("pop",{text:"SWITCH-OFF!",tone:"yellow"})}checkCops(){const e=this.runnerPos();let t=1/0;for(const n of this.cops){if(n.mode!=="active"&&n.mode!=="fright")continue;const i=this.copPos(n),r=Math.hypot(e.x-i.x,e.z-i.z);if(n.mode==="active"&&(t=Math.min(t,r)),!(r>(n.mode==="fright"?py:1.5))&&!(n.mode==="active"&&this.grace>0))if(n.mode==="fright"){this.combo++;const a=200*2**(this.combo-1);this.score+=a,n.mode="retired",n.rT=4,n.bubble.hide(),this.sparks.burst(i.x,1.5,i.z,50,Zu,{up:9,spread:8,life:1.1}),this.shake=.35,Xt.retire(),this.emit("retire"),this.emit("pop",{text:`${n.name} retired! +${a}`,tone:"teal"})}else{this.caughtBy=n,this.caughtOn=this.g.edges[this.p.edge].name,this.state="dying",this.dyingT=1.8,this.slowmo=.45,this.shake=1.3,fc("gotcha",0,!0),this.streak=0,this.mult=1,this.sparks.burst(e.x,1.5,e.z,60,Zu,{up:8,spread:9,life:1.2}),Xt.caught(),ja(1/0,this.time),this.emit("caught",{name:n.name});return}}this.nearestCop=t}randomSpot(e){const t=this.g,n=t.pose(this.p);for(let i=0;i<30;i++){const r=t.edges[Math.floor(Math.random()*t.edges.length)];if(r.len<30)continue;const a=10+Math.random()*(r.len-20),o=t.pointAt(r,a);if(!(Math.hypot(o.x-n.x,o.z-n.z)<e||[...this.hurdles,...this.pickups].some(l=>Math.hypot(l.x-o.x,l.z-o.z)<12)))return{e:r,d:a,...o}}return null}updateHurdles(e){if(this.hurdleT-=e,this.hurdleT<=0&&(this.hurdleT=Math.max(2.2,5-this.round*.8),this.hurdles.length<5+this.round*2)){const i=this.randomSpot(55);if(i){const r=Ju[Math.floor(Math.random()*Ju.length)],a=vs(i.e),o=[-1,0,1].sort(()=>Math.random()-.5).slice(0,Math.random()<.45?2:1),c=new yt,l=o.map(h=>{const u=XM(r,Math.max(1.8,a*.95)),d=lr(i,h*a);return u.position.set(d.x,0,d.z),u.rotation.y=-i.h,c.add(u),{x:d.x,z:d.z}});this.scene.add(c),this.hurdles.push({type:r,x:i.x,z:i.z,pieces:l,view:c,life:30,cleared:!1})}}const t=this.runnerPos(),n=this.p;!this.hints.has("jump")&&this.hurdles.some(i=>Math.hypot(t.x-i.x,t.z-i.z)<45)&&this.hint("jump"),this.hurdles=this.hurdles.filter(i=>{i.life-=e;const r=Math.min(...i.pieces.map(o=>Math.hypot(t.x-o.x,t.z-o.z)));let a=i.life>0;return r<1.4?n.air>0?i.cleared||(i.cleared=!0,this.score+=50,this.emit("pop",{text:"Cleared! +50",tone:"teal"})):i.cleared||(n.stumble=1.1,this.streak=0,this.mult=1,this.shake=.6,this.emit("hit"),Xt.hit(),this.emit("pop",{text:my[i.type],tone:"orange"}),a=!1):r>5&&(i.cleared=!1),a||this.scene.remove(i.view),a})}updatePickups(e){if(this.gigT-=e,this.gigT<=0&&(this.gigT=20,!this.pickups.some(n=>n.type==="gig"))){const n=this.randomSpot(80);if(n){const i=WM();i.group.position.set(n.x,0,n.z),this.scene.add(i.group),this.pickups.push({type:"gig",x:n.x,z:n.z,view:i,life:14})}}const t=this.runnerPos();this.pickups=this.pickups.filter(n=>{n.life-=e;const i=Math.hypot(t.x-n.x,t.z-n.z)<3.2;i&&n.type==="switch"&&this.startFright(),i&&n.type==="gig"&&(this.p.boost=4,this.score+=100,Xt.boost(),this.emit("pop",{text:"GIGABIT! +100",tone:"pink"}));const r=!i&&n.life>0;return r||this.scene.remove(n.view.group),r})}updateFinder(e){if(this.finderT-=e,this.finderT>0)return;this.finderT=.5;const t=this.g;if(t.coverage<.85){this.finder=null,this.finderBeam.visible=!1;return}const n=this.p,i=t.edges[n.edge],r=n.dir===1?n.s:i.len-n.s,a=t.distancesTo(t.endNode(n)),o=i.len-n.s;let c=null;for(const h of t.edges){const u=t.laid[h.i];for(let d=0;d<h.cells;d++){if(u[d])continue;const f=(d+.5)*h.cellLen;let m=Math.min(o+a[h.a]+f,o+a[h.b]+(h.len-f));h.i===n.edge&&(m=Math.abs(f-r)),(!c||m<c.v)&&(c={v:m,e:h,d:f})}}if(!c){this.finder=null,this.finderBeam.visible=!1;return}const l=t.pointAt(c.e,c.d);this.finder={x:l.x,z:l.z,dist:Math.round(c.v),name:c.e.name},this.finderBeam.position.set(l.x,0,l.z),this.finderBeam.visible=!0}startOutro(){this.outro=!0,this.outroT0=this.time;const e=this.g.pose(this.p);this.outroA=e.h+Math.PI}resetRun(){this.round=1,this.score=0,this.coinCount=0,this.coins.reset(),this.lives=3,this.outro=!1,this.slowmo=0,this.resetRound(),this.resetActors(),this.state="title"}levelClear(){this.state="clear",this.startOutro(),this.score+=1e3+this.lives*250,ja(1/0,this.time),Xt.win(),this.emit("clear")}nextRound(){this.outro=!1,this.round++,this.resetRound(),this.resetActors(),this.state="ready",this.readyT=gc,this.intro=!0,this.readyReason="round"}sync(e,t){const n=this.g,i=this.p,r=this.runner,a=n.pose(i),o=lr(a,i.lx);r.group.position.set(o.x,0,o.z);const c=i.air>0?1-i.air/Yu:0,l=Math.sin(Math.PI*c),h=this.state==="play";r.sprite.position.y=l*3.4+(h?Math.abs(Math.sin(t*15))*.28:0),r.shadow.scale.setScalar(1-.45*l);let u=h?Math.sin(t*15)*.07:0;i.stumble>0&&(u=Math.sin(t*40)*.3);let d=1;if(this.state==="dying"&&(u=t*14,d=Math.max(.05,this.dyingT/1.8)),r.mat.rotation=u,r.sprite.scale.set(r.height*(168/327)*d,r.height*d,1),r.model){this.faceH=this.faceH==null?o.h:Qu(this.faceH,o.h,1-Math.exp(-e*12));const b=Dr(o.h-this.faceH);r.model.rotation.y=Math.PI/2-this.faceH;const p=r.body,g=h?Math.sin(t*15):0;p.position.y=l*3.4+(h&&!r.mixer?Math.abs(g)*.3:0),p.rotation.x=h?.14:0;const _=Math.max(-1,Math.min(1,(i.lane*vs(n.edges[i.edge])-i.lx)/2.2));p.rotation.z=-b*1.4-_*.35+(h&&!r.mixer?g*.08:0),i.stumble>0&&(p.rotation.z+=Math.sin(t*40)*.25);let x=1+(h&&!r.mixer?Math.abs(g)*.05:0);if(i.air>0&&(x=1+l*.12),this.state==="dying"&&(r.model.rotation.y+=t*14,x=d),p.scale.set(this.state==="dying"?d:1/Math.sqrt(x),x,this.state==="dying"?d:1/Math.sqrt(x)),r.uniforms){const M=r.uniforms,A=h&&i.air<=0?1:0;M.uRun.value+=(A-M.uRun.value)*(1-Math.exp(-e*10)),M.uPhase.value+=e*(i.boost>0?21:i.stumble>0?8:15)*(h?1:0),M.uTime.value=t,M.uSway.value.set(Math.max(-1,Math.min(1,b*3)),0)}r.mixer&&(r.run&&(r.run.timeScale=h?i.boost>0?1.5:i.stumble>0?.5:1.1:.001),r.mixer.update(e))}r.mat.color.setScalar(i.boost>0&&Math.floor(t*12)%2?1.6:1),r.group.visible=!(this.grace>0&&this.state==="play"&&Math.floor(t*10)%2),this.cops.forEach((b,p)=>{var x;const g=b.view;if(b.mode==="retired"){g.setLook("hidden",t);return}if(g.setLook(b.mode==="fright"?"fright":"normal",t,this.fright<1.6),b.mode==="wait"||!b.m){const[M,A]=this.waitSpots[p];g.group.position.set(M,0,A),g.group.rotation.y=-Math.atan2(o.x-M,-(o.z-A)),g.group.position.y=0;return}const _=this.copPos(b);g.group.position.set(_.x,Math.abs(Math.sin(t*12+p))*.2,_.z),g.group.rotation.y=-_.h,(x=g.tick)==null||x.call(g,e,t,this.state==="play")});for(const b of this.pickups)b.view.spin.rotation.y=t*2.5,b.view.spin.position.y=2.2+Math.sin(t*3)*.25;if(this.state==="clear"){const b=t*3%bs.length,p=bs[Math.floor(b)],g=bs[(Math.floor(b)+1)%bs.length];this.world.fibreMat.color.copy(p).lerp(g,b%1).multiplyScalar(1.3)}else this.world.fibreMat.color.set(vt.fibre).multiplyScalar(1.15+Math.sin(t*4)*.1);let f=null,m=60;for(const b of this.cops){if(b.mode!=="active"||!b.m)continue;const p=n.pose(b.m),g=Math.hypot(p.x-o.x,p.z-o.z);g<m&&(m=g,f=p)}f&&this.state==="play"?(this.siren.position.set(f.x,3.8,f.z),this.siren.intensity=Math.floor(t*7)%2?90:8):this.siren.intensity=0,this.state==="clear"&&Math.random()<.6&&this.sparks.burst(o.x+(Math.random()-.5)*16,7,o.z+(Math.random()-.5)*16,5,bs,{up:2,spread:3,life:1.8}),this.sparks.update(e),this.coins.update(e,t),this.syncChevrons(t),this.world.update(t,o),this.syncCamera(e,t,this.attract||this.outro?o:lr(a,i.lx*.55)),this.state==="play"&&ja(this.nearestCop??1/0,t)}syncChevrons(e){const t=this.g,n=this.p,i=()=>{this.chevrons.forEach(d=>{d.visible=!1}),this.signs.forEach(d=>{d.sprite.visible=!1})};if(this.state!=="play"&&this.state!=="ready"||this.state==="ready"&&this.intro||t.edges[n.edge].len-n.s>55)return i();const a=t.endNode(n),o=t.options(a,n,t.arriveHeading(n));if(o.length<2)return i();const{pick:c,turning:l}=this.planExit(a,o),h=t.nodes[a];this.signs.forEach((d,f)=>{const m=o[f];if(!m){d.sprite.visible=!1;return}const b=t.leaveHeading(m),p=m.edge===c.edge&&m.dir===c.dir,g=Math.abs(m.rel)<.55?"↑":m.rel<0?"←":"→";d.set(g,t.edges[m.edge].name||"Back lane",p,l),d.sprite.position.set(h.x+Math.sin(b)*6.5,4.4+(p?Math.sin(e*6)*.15:0),h.z-Math.cos(b)*6.5),d.sprite.visible=d.sprite.position.distanceTo(this.camera.position)>9});const u=t.edges[c.edge];this.chevrons.forEach((d,f)=>{const m=3.5+f*4.2;if(m>u.len-1){d.visible=!1;return}const b=t.pointAt(u,c.dir===1?m:u.len-m),p=c.dir===1?b.h:b.h+Math.PI;d.position.set(b.x,.12,b.z),d.rotation.y=-p,d.material.color.set(l?16172321:16777215),d.material.opacity=(l?.55:.28)+.4*Math.max(0,Math.sin(e*7-f*1.2)),d.visible=!0})}seedTrail(){const e=this.g,t=this.p;this.trail=[];for(let n=Math.min(t.s,16);n>.4;n-=.8){const i=e.pose({edge:t.edge,dir:t.dir,s:t.s-n});this.trail.push({x:i.x,z:i.z})}}addTrail(e){const t=this.trail||(this.trail=[]),n=t[t.length-1];(!n||Math.hypot(e.x-n.x,e.z-n.z)>.6)&&(t.push({x:e.x,z:e.z}),t.length>120&&t.shift())}behind(e,t){const n=this.trail;let i=e.x,r=e.z,a=t;for(let o=n.length-1;o>=0;o--){const c=n[o],l=Math.hypot(c.x-i,c.z-r);if(l>=a&&l>0)return{x:i+(c.x-i)*a/l,z:r+(c.z-r)*a/l};a-=l,i=c.x,r=c.z}return{x:i-Math.sin(e.h)*a,z:r+Math.cos(e.h)*a}}syncCamera(e,t,n){const i=this.camera,r=f=>f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2,a=(f,m,b)=>new C(n.x+Math.sin(f)*m,b,n.z-Math.cos(f)*m);if(this.attract){const f=n.h+Math.sin(t*.35)*.25,m=this.frameShift||{side:0,up:0,dist:8.5},b=-Math.cos(f)*m.side,p=-Math.sin(f)*m.side,g=a(f,m.dist||8.5,3.2+Math.sin(t*.5)*.2);g.x+=b,g.z+=p,i.position.lerp(g,1-Math.exp(-e*2));const _=new C(n.x+b,2.3+m.up,n.z+p);this.camLook=(this.camLook||_.clone()).lerp(_,1-Math.exp(-e*3)),i.lookAt(this.camLook),this.camH=n.h;return}if(this.outro){const f=this.area.radius,m=(this.time-this.outroT0)*.12+this.outroA,b=new C(n.x*.5+Math.sin(m)*f*.55,f*.85,n.z*.5-Math.cos(m)*f*.55);i.position.lerp(b,1-Math.exp(-e*1.4)),this.camLook=(this.camLook||new C).lerp(new C(n.x*.5,0,n.z*.5),1-Math.exp(-e*1.6)),i.lookAt(this.camLook);return}this.camH=Qu(this.camH,n.h,1-Math.exp(-e*4.5));const o=Math.sin(this.camH),c=-Math.cos(this.camH);this.addTrail(n);const l=this.behind(n,this.camBack||11),h=new C(l.x,this.camUp||6.6,l.z),u=new C(n.x+o*12,1.4,n.z+c*12);if(this.state==="ready"&&this.intro&&this.reducedMotion&&(this.readyT=Math.min(this.readyT,1.2)),this.state==="ready"&&this.intro&&!this.reducedMotion){const f=1-Math.max(0,this.readyT)/gc,m=r(Math.min(1,f*1.15)),b=(8.5+((this.camBack||11)-8.5)*m)*(1-.6*Math.sin(Math.PI*m)),p=a(n.h+Math.PI*m,b,3.2+((this.camUp||6.6)-3.2)*m);i.position.lerp(p,1-Math.exp(-e*12)),this.camLook=new C(n.x,2.3,n.z).lerp(u,m),i.lookAt(this.camLook)}else i.position.lerp(h,1-Math.exp(-e*(this.state==="ready"?2.5:10))),i.lookAt(u),i.rotateZ(-Dr(n.h-this.camH)*.35);if(this.reducedMotion&&(this.shake=0),this.shake>0){this.shake=Math.max(0,this.shake-e*1.8);const f=this.shake*this.shake;i.position.x+=(Math.random()-.5)*f,i.position.y+=(Math.random()-.5)*f,i.position.z+=(Math.random()-.5)*f}const d=this.baseFov+(this.p.boost>0?12:0);Math.abs(i.fov-d)>.05&&(i.fov+=(d-i.fov)*(1-Math.exp(-e*5)),i.updateProjectionMatrix())}hud(){const e=this.p,t=this.g;return{score:this.score,lives:this.lives,pct:Math.floor(t.coverage*100),street:t.edges[e.edge].name,buf:e.buf,lane:e.lane,coins:this.coinCount,round:this.round,fright:this.fright,boost:e.boost,mult:this.mult,streets:this.streetsDone,finder:this.finder,threats:this.cops.filter(n=>n.mode==="active"&&n.m).map(n=>{const i=t.pose(n.m);return{x:i.x,z:i.z,name:n.name}})}}}const yy={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, 1.32);
      c.rgb += (1.0 - c.rgb) * 0.035; // lift the blacks a touch, cartoon not murk
      c.rgb = (c.rgb - 0.5) * 1.07 + 0.5;
      c.rgb += mix(vec3(0.01, -0.01, 0.04), vec3(0.02, 0.0, 0.01), smoothstep(0.2, 0.8, l));
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - dot(d, d) * 0.55;
      gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), c.a);
    }`},bc=1/60,Sy=!0,Ee=s=>document.getElementById(s),mn=matchMedia("(pointer: coarse)").matches,ii={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,e){try{localStorage.setItem(s,e)}catch{}}},fo=Ee("scene"),kn=new kv({canvas:fo,antialias:!mn,powerPreference:"high-performance"});kn.setPixelRatio(Math.min(window.devicePixelRatio,mn?1.5:2));kn.toneMapping=Ml;kn.toneMappingExposure=1.38;kn.shadowMap.enabled=!mn;kn.shadowMap.type=sd;let tn=null,_r=null,Hi=0,Cs=null,$=null,Kt=null,wi=!1,ql="demo";function wy(){const s=kn.getDrawingBufferSize(new ee);if(tn=new h_(kn,new rn(s.x,s.y,{type:yn,samples:mn?2:4})),tn.addPass(new u_($.scene,$.camera)),!mn){const e=new Nn($.scene,$.camera,innerWidth,innerHeight);e.updateGtaoMaterial({radius:2.2,distanceExponent:1.5,thickness:2,scale:1.1}),e.blendIntensity=.85,tn.addPass(e),_r=e}Cs=new Hs(new ee(innerWidth,innerHeight),.55,.45,.82),tn.addPass(Cs),tn.addPass(new p_),tn.addPass(new tf(yy)),Hi>=1&&_r&&(_r.enabled=!1),Hi>=2&&(Cs.enabled=!1),Kl()}function Kl(){const s=innerWidth,e=innerHeight;kn.setSize(s,e,!1),$&&($.camera.aspect=s/e,$.baseFov=$.camera.fov=s<e?70:62,$.frameShift=s<720?{side:0,up:-3.4,dist:12}:{side:3.4,up:0,dist:9.5},$.camBack=s<e?9.5:11,$.camUp=s<e?6:6.6,$.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,$.camera.updateProjectionMatrix()),tn&&(tn.setSize(s,e),Cs.resolution.set(s/2,e/2))}addEventListener("resize",Kl);function Ty(s){s.traverse(e=>{var n;(n=e.geometry)==null||n.dispose();const t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{var r,a;(r=i.map)==null||r.dispose(),(a=i.emissiveMap)==null||a.dispose(),i.dispose()})})}function pf(s){$&&Ty($.scene),Kt=s,$=new My(s,ky,{shadows:!mn,lowEnd:mn});try{JSON.parse(ii.get("altnets-hints")||"[]").forEach(e=>$.hints.add(e))}catch{}wy()}const wt={score:-1,lives:-1,pct:-1,street:null,buf:void 0,power:-1,mult:-1};function no(s){Ee("hud").hidden=!s,Ee("minimap").hidden=!s,Ee("status").hidden=!s,Ee("pad").hidden=!s||!mn}function Ey(){var a;if(!$||$.attract)return;const s=$.hud();s.score!==wt.score&&(wt.score=s.score,Ee("score").textContent=s.score.toLocaleString("en-GB")),s.coins!==wt.coins&&(wt.coins=s.coins,Ee("coins").textContent=s.coins,Ee("coins").parentElement.classList.remove("bump"),Ee("coins").offsetWidth,Ee("coins").parentElement.classList.add("bump")),s.pct!==wt.pct&&(wt.pct=s.pct,Ee("pct").textContent=s.pct+"%",Ee("bar").style.width=s.pct+"%"),s.lives!==wt.lives&&(wt.lives=s.lives,Ee("lives").innerHTML=Array.from({length:Math.max(0,s.lives)},()=>'<img src="/altnets-game/sprites/altnet-back.png" alt="">').join(""),Ee("lives").setAttribute("aria-label",`${s.lives} lives left`));const e=s.street||"a back lane";e!==wt.street&&(wt.street=e,Ee("street").textContent=e),s.buf!==wt.buf&&(wt.buf=s.buf,Ee("turnChip").hidden=!s.buf,Ee("turnChip").textContent=s.buf==="left"?"‹ Left lane: turning left":"Right lane: turning right ›");const t=s.mult>1?s.mult:0;t!==wt.mult&&(wt.mult=t,Ee("multChip").hidden=!t,Ee("multChip").textContent=`Streak x${t}`);const n=Ee("finderChip");if(s.finder&&$.state==="play"){const o=$.g.pose($.p),c=Math.atan2(s.finder.x-o.x,-(s.finder.z-o.z))-$.camH;n.hidden=!1,n.querySelector("i").style.transform=`rotate(${c}rad)`,n.querySelector("b").textContent=`Fibre gap ${s.finder.dist}m`}else n.hidden=!0;const i=s.fright>0?Math.ceil(s.fright):0;i!==wt.power&&(wt.power=i,Ee("powerChip").hidden=!i,Ee("powerChip").textContent=`Switch-off ${i}s`);const r=Ee("banner");if($.state==="ready"){const o=$.stationDist!=null&&$.stationDist>Kt.radius+150?`Coppers dispatched from ${$.stationName}, ${($.stationDist/1e3).toFixed(1)}km away`:`Coppers dispatched from ${$.stationName}`,c={start:"Ready?",round:`Round ${$.round}`,respawn:"Back on the run"}[$.readyReason]||"Ready?",l=Math.ceil($.readyT),h=$.readyT>2.4?c:String(l),u=Kt.postcode==="EC4M 7EH"?"Breaking out of the Old Bailey":`Breaking out on ${s.street||"a back lane"}`,d=$.intro&&$.readyT>1?`<div class="skip">${mn?"Tap":"Press any key"} to skip</div>`:"",f=`<div class="big${h.length===1?" count":""}">${h}</div><div class="sub">${Jt(u)} &middot; ${Jt(Kt.label)}</div><div class="sub">${Jt(o)}</div>${d}`,m="ready"+$.round+$.lives+h+(d?1:0);r.dataset.k!==m&&(r.innerHTML=f,r.dataset.k=m),r.hidden=!1}else(a=r.dataset.k)!=null&&a.startsWith("ready")&&(r.hidden=!0,r.dataset.k="")}function Mr(s,e){const t=Ee("banner");t.innerHTML=s,t.dataset.k="flash",t.hidden=!1,clearTimeout(Mr.t),Mr.t=setTimeout(()=>{t.dataset.k==="flash"&&(t.hidden=!0)},e)}function Ay(s,e){const t=document.createElement("span");t.className=`pop ${e||"teal"}`,t.textContent=s,Ee("pops").appendChild(t),setTimeout(()=>t.remove(),1400)}const Jt=s=>String(s??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Pa=[],Fi=new C;function Ry(){const s=Ee("threats"),e=$&&!$.attract&&$.state==="play",t=e?$.hud():{threats:[]},n=e?$.g.pose($.p):null;let i=1/0,r=0;for(const a of t.threats){const o=Math.hypot(a.x-n.x,a.z-n.z);if(i=Math.min(i,o),o>70||(Fi.set(a.x,2,a.z).project($.camera),Fi.z<1&&Math.abs(Fi.x)<.92&&Math.abs(Fi.y)<.9))continue;let l=Fi.x,h=Fi.y;Fi.z>1&&(l=-l,h=-h);const u=Math.atan2(-h,l),d=Pa[r]||(Pa[r]=Object.assign(document.createElement("div"),{className:"threat"}));d.parentNode||s.appendChild(d);const f=.42;d.style.left=`${50+Math.cos(u)*f*100}%`,d.style.top=`${50+Math.sin(u)*f*100}%`,d.style.transform=`translate(-50%, -50%) rotate(${u}rad)`,d.dataset.d=`${Math.round(o)}m`,d.hidden=!1,r++}for(let a=r;a<Pa.length;a++)Pa[a].hidden=!0;Ee("danger").style.opacity=e&&i<28?String(Math.min(1,(28-i)/18)*.9):"0"}const bl=Ee("minimap"),ut=bl.getContext("2d");function Cy(){if(bl.hidden||!$)return;const s=$.g,e=bl.width,t=Kt.radius*1.08,n=s.pose($.p),i=e/2/t;ut.clearRect(0,0,e,e),ut.save(),ut.beginPath(),ut.arc(e/2,e/2,e/2,0,Math.PI*2),ut.clip(),ut.translate(e/2,e/2),ut.scale(i,i),ut.lineCap="round";for(const c of s.edges){const l=s.laid[c.i];for(let h=0;h<c.cells;h++){const u=s.pointAt(c,h*c.cellLen),d=s.pointAt(c,(h+1)*c.cellLen);ut.strokeStyle=l[h]?"#1ecbc4":"rgba(200,112,60,0.55)",ut.lineWidth=(l[h]?7:4)/i*(e/300),ut.beginPath(),ut.moveTo(u.x,u.z),ut.lineTo(d.x,d.z),ut.stroke()}}const r=(c,l,h,u)=>{ut.fillStyle=u,ut.beginPath(),ut.arc(c,l,h/i*(e/300),0,Math.PI*2),ut.fill()};for(const c of $.pickups)r(c.x,c.z,9,c.type==="switch"?"#f6c521":"#e8408f");const a=s.nodes[$.spawnNode];r(a.x,a.z,9,"#2f72e6");for(const c of $.cops){if(c.mode==="retired"||!c.m)continue;const l=s.pose(c.m);r(l.x,l.z,11,c.mode==="fright"?"#9fb0b3":"#f28a24")}ut.translate(n.x,n.z),ut.rotate(n.h);const o=1/i*(e/300);ut.fillStyle="#ffffff",ut.beginPath(),ut.moveTo(0,-16*o),ut.lineTo(11*o,12*o),ut.lineTo(-11*o,12*o),ut.closePath(),ut.fill(),ut.restore()}const Mi=Ee("screen");function Yl(s,e="center"){Mi.className=`screen ${e}`,Mi.innerHTML=s,Mi.hidden=!1;const t=Mi.querySelector("[data-autofocus]");t&&!mn&&setTimeout(()=>t.focus(),30)}function Jl(){Mi.hidden=!0,Mi.innerHTML=""}function Zl(s=""){no(!1),Ee("banner").hidden=!0,Ee("hint").hidden=!0,Wi(!1),$&&($.state!=="title"&&$.resetRun(),$.attract=!0);const e=ii.get("altnets-postcode")||"",t=Number(ii.get("altnets-best")||0);Yl(`
  <div class="card panel title">
    <div>
      <div>
        <p class="eyebrow">Alternative routes. A brighter tomorrow.</p>
        <div class="wordmark"><span>The</span>Altnets</div>
        <p class="game-name">Escape the Coppers</p>
        <span class="swoosh"></span>
        <p class="lede"><span class="long">Our hero has just legged it out of the Old Bailey. </span>Every street it runs down gets <b>full fibre</b>. Connect your whole area before the coppers nick you.</p>
        <form class="postcode" id="pcForm" novalidate>
          <label for="pc">Your postcode</label>
          <input id="pc" name="pc" autocomplete="postal-code" autocapitalize="characters" spellcheck="false" inputmode="text" placeholder="e.g. EC4M 7EH" maxlength="8" value="${Jt(e)}" data-autofocus aria-describedby="pcError pcNote">
          <p class="error" id="pcError" role="alert">${Jt(s)}</p>
          <button class="btn teal wide" type="submit">Play my streets</button>
          <button class="btn ghost wide" type="button" id="playDemo">Play the Old Bailey</button>
          <p class="note" id="pcNote">Your postcode only draws the map.${t?` <b class="best-chip">Your best: ${t.toLocaleString("en-GB")}</b>`:""}</p>
        </form>
        <ul class="how">
          <li class="keys-only"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change lane. Your lane picks the turn</li>
          <li class="keys-only"><kbd>Space</kbd> jump roadworks</li>
          <li class="keys-only"><kbd>&darr;</kbd> U-turn</li>
          <li class="touch-only">Swipe left and right to change lane. Your lane picks the turn</li>
          <li class="touch-only">Swipe up to jump</li>
          <li><span class="dot" style="background:#ffc928"></span> Grab the Altnets coins</li>
          <li><span class="dot" style="background:var(--yellow)"></span> Switch-off: the coppers run for it</li>
          <li><span class="dot" style="background:var(--pink)"></span> Gigabit: speed boost</li>
        </ul>
        <p class="osm-note">Real streets from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>.</p>
      </div>
    </div>
  </div>`,"side"),Ee("pcForm").addEventListener("submit",n=>{n.preventDefault();const i=Ee("pc").value.trim();if(!i){Ee("pcError").textContent="Enter a postcode, or play the Old Bailey.";return}Py(i)}),Ee("playDemo").addEventListener("click",()=>Ly()),Ee("pc").addEventListener("input",n=>{const i=n.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,7);n.target.value=i.length>4?`${i.slice(0,-3)} ${i.slice(-3)}`:i,Ee("pcError").textContent="",clearTimeout($u),/^[A-Z]{1,2}\d[A-Z\d]?\s\d[A-Z]{2}$/.test(n.target.value)&&($u=setTimeout(()=>mf(n.target.value).catch(()=>{}),350))})}const La=new Map;let $u=0;function mf(s){const e=s.toUpperCase().replace(/\s+/g,"");if(!La.has(e)){const t=Xa(()=>import("./area-client-Df6gDPQU.js"),[]).then(n=>n.areaFor(s));t.catch(()=>La.delete(e)),La.set(e,t)}return La.get(e)}function ed(s){return Ee("fade").classList.toggle("on",s),new Promise(t=>setTimeout(t,s?220:0))}async function gf(s){if(Kt&&Kt.postcode===s.postcode&&$){$.resetRun();return}await ed(!0),pf(s),$.attract=!0,$.sync(.016,performance.now()/1e3),ed(!1)}async function Py(s){ql="postcode",Ps("start",{mode:"postcode"}),ff(),ii.set("altnets-postcode",s.toUpperCase());const e=Mi.querySelector("#pcForm button[type=submit]"),t=setTimeout(()=>{e&&(e.disabled=!0,e.innerHTML='<span class="mini-spin"></span> Finding your streets&hellip;')},150);try{const n=await mf(s);clearTimeout(t),await gf(n),po()}catch(n){clearTimeout(t),Zl(n.message||"Something went wrong loading that area.")}}let yr=null;async function Ly(){ql="demo",Ps("start",{mode:"demo"}),ff(),yr=yr||await(await fetch("/altnets-game/areas/old-bailey.json")).json(),await gf(yr),po()}function po(){Jl(),wi=!1,wt.lives=wt.score=wt.pct=wt.mult=wt.power=-1,wt.street=null,Ee("hudArea").textContent=Kt.label,no(!0),_f(),$.begin()}function Iy(s,e){let t=null;Xa(()=>import("./share-D7ZKpYwS.js"),[]).then(async({makeShareCard:n})=>{t=await n(s);const i=Ee("cardPreview");i&&(i.src=URL.createObjectURL(t),i.hidden=!1)}).catch(()=>{}),Ee("shareCard").addEventListener("click",async()=>{const n=Ee("shareCard");try{const{makeShareCard:i,shareCard:r}=await Xa(async()=>{const{makeShareCard:o,shareCard:c}=await import("./share-D7ZKpYwS.js");return{makeShareCard:o,shareCard:c}},[]);t=t||await i(s);const a=await r(t,{text:e,url:"https://thealtnets.com"});n.textContent=a==="shared"?"Shared":a==="downloaded"?"Card saved":"Share my streets"}catch{n.textContent="Could not make the card"}})}const Dy="https://thealtnets.com/";function bf(s){const e=new URLSearchParams({utm_source:"escape-the-coppers",utm_medium:"game",utm_campaign:"end-screen"});return s&&e.set("postcode",s),`${Dy}?${e}`}function Ps(s,e={}){try{(window.dataLayer=window.dataLayer||[]).push({event:`etc_${s}`,...e})}catch{}}function Ny(s,e){const t=()=>{const n=document.createElement("textarea");n.value=s,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();try{document.execCommand("copy"),e.textContent="Copied"}catch{e.textContent="Could not copy"}n.remove()};navigator.clipboard?navigator.clipboard.writeText(s).then(()=>{e.textContent="Copied"}).catch(t):t()}async function vf(s){const e=Ee("reality");if(!e)return;if(!s){e.innerHTML=`<p class="reality-q">What can <b>your</b> street get?</p>
      <form class="reality-form" id="realForm" novalidate><input id="realPc" autocomplete="postal-code" autocapitalize="characters" placeholder="Your postcode" maxlength="8" aria-label="Your postcode"><button class="btn" type="submit">Show me</button></form>`,Ee("realForm").addEventListener("submit",n=>{n.preventDefault();const i=Ee("realPc").value.trim().toUpperCase();i&&(ii.set("altnets-postcode",i),Ee("ctaBtn").href=bf(i),vf(i))});return}e.innerHTML=`<p class="reality-q">Checking ${Jt(s)}&hellip;</p>`;let t=null;try{Sy&&(t=await(await Xa(async()=>{const{fibreFor:n}=await import("./area-client-Df6gDPQU.js");return{fibreFor:n}},[])).fibreFor(s))}catch{}if(Ee("reality"))if(t&&t.gigabit!=null){const n=Math.round(t.gigabit);e.innerHTML=`<p class="reality-k">In real life at ${Jt(t.postcode)}</p>
      <p class="reality-big"><b>${n}%</b> of ${t.homes?"homes":"premises"} can get gigabit broadband</p>
      <p class="reality-s">${n>=50?"Gigabit broadband could already reach your street.":"Your street could be next."} Source: ${Jt(t.source)}.</p>`}else e.innerHTML=`<p class="reality-k">In real life</p><p class="reality-big">See what full fibre you can get at <b>${Jt(s)}</b></p>`}function Ql(s){var a,o,c,l,h;const e=Math.max($.score,Number(ii.get("altnets-best")||0));ii.set("altnets-best",String(e));const t=s==="clear"?100:Math.floor($.g.coverage*100),n=ql==="postcode"?Kt.postcode:ii.get("altnets-postcode")||"",i={over:["Game over","Nicked!",`${Jt(((a=$.caughtBy)==null?void 0:a.name)||"The coppers")} caught you${$.caughtOn?` on ${Jt($.caughtOn)}`:""}.`],clear:[`Round ${$.round} complete`,"Connected!",`Every street in ${Jt(Kt.label)} is on fibre. The coppers are calling for backup.`],quit:["Run over","Nice run",`You got ${t}% of ${Jt(Kt.label)} onto fibre.`]}[s],r=s==="clear"?`I connected every street in ${Kt.label} to full fibre and escaped the coppers. Score ${$.score.toLocaleString("en-GB")}. Can you connect your street? thealtnets.com`:`I got ${t}% of ${Kt.label} onto full fibre before ${((o=$.caughtBy)==null?void 0:o.name)||"the coppers"} nicked me. Score ${$.score.toLocaleString("en-GB")}. Escape the Coppers at thealtnets.com`;no(!1),Ee("banner").hidden=!0,Ee("hint").hidden=!0,Wi(!1),Ps("end",{kind:s,pct:t,score:$.score,area:Kt.postcode}),Yl(`
  <div class="card panel end">
    <p class="eyebrow">${i[0]}</p>
    <h2 class="big-title${s==="clear"?" teal":""}">${i[1]}</h2>
    <p class="story">${i[2]}</p>
    <div class="stats">
      <div><small>Score</small><b>${$.score.toLocaleString("en-GB")}</b></div>
      <div><small>In the game</small><b>${t}%</b></div>
      <div><small>Coins</small><b>${$.coinCount}</b></div>
    </div>
    <p class="best">${$.score>=e&&$.score>0?"New personal best!":`Your best: ${e.toLocaleString("en-GB")}`}</p>
    <div class="reality" id="reality"></div>
    <a class="btn teal wide cta-main" id="ctaBtn" href="${bf(n)}" target="_blank" rel="noopener">Check fibre in my area</a>
    <div class="actions">
      ${s==="clear"?'<button class="btn" id="next" data-autofocus>Keep running</button>':'<button class="btn" id="again" data-autofocus>Run again</button>'}
      <button class="btn ghost" id="shareCard">Share my streets</button>
    </div>
    <div class="share">
      <img class="card-preview" id="cardPreview" alt="Your share card" hidden>
      <div class="share-row"><button class="linkish" id="copy" type="button">Copy my score</button><button class="linkish" id="newPc" type="button">Try another postcode</button></div>
    </div>
  </div>`,"side"),vf(n),Ee("ctaBtn").addEventListener("click",()=>Ps("cta",{kind:s,postcode:n||null})),(c=Ee("again"))==null||c.addEventListener("click",()=>{$.resetRun(),po()}),(l=Ee("next"))==null||l.addEventListener("click",()=>{Jl(),no(!0),$.nextRound()}),Ee("newPc").addEventListener("click",()=>Zl()),Ee("copy").addEventListener("click",()=>Ny(r,Ee("copy"))),Iy({area:Kt,graph:$.g,score:$.score,pct:t,caughtBy:s==="over"&&((h=$.caughtBy)==null?void 0:h.name)||null,cleared:s==="clear",round:$.round},r),Ee("shareCard").addEventListener("click",()=>Ps("share",{kind:s}))}const Uy=()=>Ql("over"),Fy=()=>Ql("clear");function $l(){wi=!0,Wi(!1),ja(1/0,0),Yl(`
  <div class="card narrow">
    <h2 class="big-title">Paused</h2>
    <p class="story">Having a breather on ${Jt($.hud().street||"a back lane")}.</p>
    <div class="menu">
      <button class="btn teal wide" id="resume" data-autofocus>Keep running</button>
      <button class="btn ghost wide" id="soundToggle">${to()?"Sound: off":"Sound: on"}</button>
      <button class="btn ghost wide" id="restart">Start this area again</button>
      <button class="linkish" id="quit">End this run</button>
    </div>
    <ul class="how compact">
      <li class="keys-only"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change lane</li>
      <li class="keys-only"><kbd>Space</kbd> jump</li>
      <li class="keys-only"><kbd>&darr;</kbd> U-turn</li>
      <li class="keys-only"><kbd>M</kbd> sound</li>
      <li class="touch-only">Swipe left and right to change lane, swipe up to jump, swipe down to turn round</li>
    </ul>
  </div>`),Ee("resume").addEventListener("click",xf),Ee("soundToggle").addEventListener("click",()=>{eh(),Ee("soundToggle").textContent=to()?"Sound: off":"Sound: on"}),Ee("restart").addEventListener("click",()=>{wi=!1,$.resetRun(),po()}),Ee("quit").addEventListener("click",()=>{wi=!1,$.startOutro(),Ql("quit")})}function xf(){Jl(),wi=!1,$.state==="play"&&Wi(!0)}const Oy={turn:mn?"Swipe left or right to change lane. Be in the left lane at a junction to turn left, the right lane to turn right.":"Press <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> to change lane. Left lane at a junction turns left, right lane turns right, the middle goes straight on.",coins:"Altnets coins! Change lane to scoop up whole rows.",jump:mn?"Roadworks ahead! Swipe up to jump.":"Roadworks ahead! Press <kbd>Space</kbd> to jump.",chase:"Switch-off! The coppers are scared. Catch them for big points."};function vl(s){const e=Ee("hint");e.innerHTML=Oy[s],e.hidden=!1,clearTimeout(vl.t),vl.t=setTimeout(()=>{e.hidden=!0},4200),ii.set("altnets-hints",JSON.stringify([...$.hints]))}const Ia=s=>{var e;try{(e=navigator.vibrate)==null||e.call(navigator,s)}catch{}};function ky(s,e){s==="hint"&&vl(e),s==="hit"&&Ia(60),s==="retire"&&Ia(30),s==="caught"&&(Ia([80,60,220]),Wi(!1)),s==="pop"&&Ay(e.text,e.tone),s==="go"&&Mr('<div class="big" style="color:var(--teal)">Go!</div>',700),s==="caught"&&Mr(`<div class="big" style="color:var(--orange)">Nicked!</div><div class="sub">${Jt(e.name)} got you</div>`,1700),s==="over"&&setTimeout(Uy,900),s==="go"&&Wi(!0),s==="clear"&&(Wi(!1),Ia([40,40,40,40,120]),Mr('<div class="big" style="color:var(--teal)">Connected!</div><div class="hand">Different fibre. Brighter places.</div>',2400),setTimeout(Fy,2600))}const Ks=()=>$&&!wi&&Mi.hidden&&($.state==="play"||$.state==="ready");addEventListener("keydown",s=>{if(s.target.tagName==="INPUT")return;const e=s.key;if(!Ks()){(e==="Escape"||e==="p"||e==="P")&&wi&&(s.preventDefault(),xf());return}if($.state==="ready"&&$.intro&&!["ArrowLeft","ArrowRight","a","A","d","D"].includes(e)){s.preventDefault(),$.skipIntro();return}e==="ArrowLeft"||e==="a"||e==="A"?(s.preventDefault(),$.turn("left")):e==="ArrowRight"||e==="d"||e==="D"?(s.preventDefault(),$.turn("right")):e==="ArrowDown"||e==="s"||e==="S"?(s.preventDefault(),$.uturn()):e===" "||e==="ArrowUp"||e==="w"||e==="W"?(s.preventDefault(),$.jump()):e==="Escape"||e==="p"||e==="P"?(s.preventDefault(),$l()):(e==="m"||e==="M")&&eh()});let en=null;fo.addEventListener("pointerdown",s=>{Ks()&&(en={x:s.clientX,y:s.clientY,used:!1})});fo.addEventListener("pointermove",s=>{if(!en||en.used)return;const e=s.clientY-en.y,t=s.clientX-en.x;e<-35&&Math.abs(e)>Math.abs(t)?(en.used=!0,$.jump()):e>45&&Math.abs(e)>Math.abs(t)?(en.used=!0,$.uturn()):Math.abs(t)>40&&Math.abs(t)>Math.abs(e)&&(en.used=!0,$.turn(t<0?"left":"right"))});fo.addEventListener("pointerup",s=>{if(en&&!en.used&&($==null?void 0:$.state)==="ready"&&$.intro){$.skipIntro(),en=null;return}en&&!en.used&&Ks()&&$.turn(s.clientX<innerWidth/2?"left":"right"),en=null});Ee("pad").addEventListener("pointerdown",s=>{const e=s.target.closest("button");if(!e||!Ks())return;s.preventDefault();const t=e.dataset.act;t==="jump"?$.jump():$.turn(t)});Ee("pauseBtn").addEventListener("click",()=>{Ks()&&$l()});const By='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',zy='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';function _f(){const s=to();Ee("muteBtn").innerHTML=s?zy:By,Ee("muteBtn").setAttribute("aria-label",s?"Turn sound on":"Turn sound off")}function eh(){ZM(!to()),_f()}Ee("muteBtn").addEventListener("click",eh);document.addEventListener("visibilitychange",()=>{document.hidden&&Ks()&&$l()});let Oi=0,Da=0,bi=kn.getPixelRatio();function Hy(s){if(s>.024?(Oi+=s,Da=0):(Da+=s,Oi=Math.max(0,Oi-s*.5)),Oi>1.5&&bi<=.75&&Hi<2){Hi++,Oi=0,Hi===1&&_r&&(_r.enabled=!1),Hi===2&&Cs&&(Cs.enabled=!1),Ps("quality",{tier:Hi});return}Oi>1.5&&bi>.75?(bi=Math.max(.75,bi-.25),Oi=0,td()):Da>6&&bi<Math.min(devicePixelRatio,mn?1.5:2)&&(bi+=.25,Da=0,td())}function td(){var s;kn.setPixelRatio(bi),(s=tn==null?void 0:tn.setPixelRatio)==null||s.call(tn,bi),Kl()}let nd=performance.now(),Na=0;function Mf(s){const e=Math.min(.1,(s-nd)/1e3);if(nd=s,$){if(wi)Na=0;else{const t=$.slowmo>0?.3:1;for($.slowmo>0&&($.slowmo-=e),Na+=e*t;Na>=bc;)$.update(bc),Na-=bc}$.sync(e,s/1e3),$.state==="play"&&iy($.g.coverage),tn.render(),Hy(e),Ey(),Ry(),Cy()}requestAnimationFrame(Mf)}(async()=>(yr=await(await fetch("/altnets-game/areas/old-bailey.json")).json(),pf(yr),Zl(),requestAnimationFrame(Mf)))();window.__game=()=>$;export{Xa as _};
