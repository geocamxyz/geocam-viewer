(function(Ii,Ir){typeof exports=="object"&&typeof module<"u"?Ir(exports):typeof define=="function"&&define.amd?define(["exports"],Ir):(Ii=typeof globalThis<"u"?globalThis:Ii||self,Ir(Ii.GeoCamViewer={}))})(this,(function(Ii){"use strict";Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52)),Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}),Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e}),"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const t=Object(e);for(let n=1;n<arguments.length;n++){const i=arguments[n];if(i!=null)for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t});const Ir="119",lf=0,wl=1,uf=2,Ml=1,hf=2,Dr=3,Nr=0,mt=1,Ho=2,Sl=1,On=0,Br=1,El=2,Tl=3,Al=4,ff=5,Di=100,df=101,pf=102,Ll=103,Cl=104,mf=200,gf=201,yf=202,xf=203,Rl=204,Pl=205,vf=206,_f=207,bf=208,wf=209,Mf=210,Sf=0,Ef=1,Tf=2,Ca=3,Af=4,Lf=5,Cf=6,Rf=7,Vo=0,Pf=1,If=2,Ni=0,Df=1,Nf=2,Bf=3,Of=4,Ff=5,Ra=300,Pa=301,Ia=302,Il=303,Da=304,Or=306,Wo=307,jo=1e3,Pt=1001,qo=1002,gt=1003,Na=1004,Ba=1005,Mt=1006,Dl=1007,Xo=1008,Fr=1009,Uf=1010,Gf=1011,Yo=1012,zf=1013,Jo=1014,Fn=1015,Zo=1016,kf=1017,Hf=1018,Vf=1019,Ur=1020,Wf=1021,ci=1022,kt=1023,jf=1024,qf=1025,Xf=kt,Bi=1026,Gr=1027,Yf=1028,Jf=1029,Zf=1030,$f=1031,Qf=1032,Kf=1033,Nl=33776,Bl=33777,Ol=33778,Fl=33779,Ul=35840,Gl=35841,zl=35842,kl=35843,ed=36196,Hl=37492,Vl=37496,td=37808,nd=37809,id=37810,rd=37811,od=37812,sd=37813,ad=37814,cd=37815,ld=37816,ud=37817,hd=37818,fd=37819,dd=37820,pd=37821,md=36492,gd=37840,yd=37841,xd=37842,vd=37843,_d=37844,bd=37845,wd=37846,Md=37847,Sd=37848,Ed=37849,Td=37850,Ad=37851,Ld=37852,Cd=37853,Rd=2200,Pd=2201,Id=2202,$o=2300,Qo=2301,Oa=2302,Oi=2400,Fi=2401,Ko=2402,Fa=2500,Wl=2501,Dd=0,It=3e3,es=3001,Ua=3007,Ga=3002,Nd=3003,jl=3004,ql=3005,Xl=3006,Bd=3200,Od=3201,Ui=0,Fd=1,za=7680,Ud=519,ts=35044,zr=35048;function wn(){}Object.assign(wn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e)}}});const _t=[];for(let e=0;e<256;e++)_t[e]=(e<16?"0":"")+e.toString(16);let ns=1234567;const Ue={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[e&255]+_t[e>>8&255]+_t[e>>16&255]+_t[e>>24&255]+"-"+_t[t&255]+_t[t>>8&255]+"-"+_t[t>>16&15|64]+_t[t>>24&255]+"-"+_t[n&63|128]+_t[n>>8&255]+"-"+_t[n>>16&255]+_t[n>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(ns=e%2147483647),ns=ns*16807%2147483647,(ns-1)/2147483646},degToRad:function(e){return e*Ue.DEG2RAD},radToDeg:function(e){return e*Ue.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const o=Math.cos,s=Math.sin,c=o(n/2),a=s(n/2),l=o((t+i)/2),h=s((t+i)/2),u=o((t-i)/2),f=s((t-i)/2),d=o((i-t)/2),p=s((i-t)/2);switch(r){case"XYX":e.set(c*h,a*u,a*f,c*l);break;case"YZY":e.set(a*f,c*h,a*u,c*l);break;case"ZXZ":e.set(a*u,a*f,c*h,c*l);break;case"XZX":e.set(c*h,a*p,a*d,c*l);break;case"YXY":e.set(a*d,c*h,a*p,c*l);break;case"ZYZ":e.set(a*p,a*d,c*h,c*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function H(e=0,t=0){this.x=e,this.y=t}Object.defineProperties(H.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}}),Object.assign(H.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function Lt(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(Lt.prototype,{isMatrix3:!0,set:function(e,t,n,i,r,o,s,c,a){const l=this.elements;return l[0]=e,l[1]=i,l[2]=s,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=a,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},extractBasis:function(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],c=n[6],a=n[1],l=n[4],h=n[7],u=n[2],f=n[5],d=n[8],p=i[0],x=i[3],y=i[6],g=i[1],m=i[4],b=i[7],v=i[2],w=i[5],T=i[8];return r[0]=o*p+s*g+c*v,r[3]=o*x+s*m+c*w,r[6]=o*y+s*b+c*T,r[1]=a*p+l*g+h*v,r[4]=a*x+l*m+h*w,r[7]=a*y+l*b+h*T,r[2]=u*p+f*g+d*v,r[5]=u*x+f*m+d*w,r[8]=u*y+f*b+d*T,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],a=e[7],l=e[8];return t*o*l-t*s*a-n*r*l+n*s*c+i*r*a-i*o*c},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const n=e.elements,i=this.elements,r=n[0],o=n[1],s=n[2],c=n[3],a=n[4],l=n[5],h=n[6],u=n[7],f=n[8],d=f*a-l*u,p=l*h-f*c,x=u*c-a*h,y=r*d+o*p+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/y;return i[0]=d*g,i[1]=(s*u-f*o)*g,i[2]=(l*o-s*a)*g,i[3]=p*g,i[4]=(f*r-s*h)*g,i[5]=(s*c-l*r)*g,i[6]=x*g,i[7]=(o*h-u*r)*g,i[8]=(a*r-o*c)*g,this},transpose:function(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,n,i,r,o,s){const c=Math.cos(r),a=Math.sin(r);this.set(n*c,n*a,-n*(c*o+a*s)+o+e,-i*a,i*c,-i*(-a*o+c*s)+s+t,0,0,1)},scale:function(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this},rotate:function(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],s=i[6],c=i[1],a=i[4],l=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*a,i[6]=t*s+n*l,i[1]=-n*r+t*c,i[4]=-n*o+t*a,i[7]=-n*s+t*l,this},translate:function(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}});let Gi;const li={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let Gd=0;function tt(e,t,n,i,r,o,s,c,a,l){Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ue.generateUUID(),this.name="",this.image=e!==void 0?e:tt.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:tt.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:Pt,this.wrapT=i!==void 0?i:Pt,this.magFilter=r!==void 0?r:Mt,this.minFilter=o!==void 0?o:Xo,this.anisotropy=a!==void 0?a:1,this.format=s!==void 0?s:kt,this.internalFormat=null,this.type=c!==void 0?c:Fr,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:It,this.version=0,this.onUpdate=null}tt.DEFAULT_IMAGE=void 0,tt.DEFAULT_MAPPING=Ra,tt.prototype=Object.assign(Object.create(wn.prototype),{constructor:tt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Ue.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)r.push(li.getDataURL(i[o]))}else r=li.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}}),Object.defineProperty(tt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function $e(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}Object.defineProperties($e.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}}),Object.assign($e.prototype,{isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){let t,n,i,r;const c=e.elements,a=c[0],l=c[4],h=c[8],u=c[1],f=c[5],d=c[9],p=c[2],x=c[6],y=c[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(d-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(a+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(a+1)/2,b=(f+1)/2,v=(y+1)/2,w=(l+u)/4,T=(h+p)/4,L=(d+x)/4;return m>b&&m>v?m<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(m),i=w/n,r=T/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=L/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=T/r,i=L/r),this.set(n,i,r,t),this}let g=Math.sqrt((x-d)*(x-d)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(g)<.001&&(g=1),this.x=(x-d)/g,this.y=(h-p)/g,this.z=(u-l)/g,this.w=Math.acos((a+f+y-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Ht(e,t,n){this.width=e,this.height=t,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),n=n||{},this.texture=new tt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Ht.prototype=Object.assign(Object.create(wn.prototype),{constructor:Ht,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Yl(e,t,n){Ht.call(this,e,t,n),this.samples=4}Yl.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Yl,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Ht.prototype.copy.call(this,e),this.samples=e.samples,this}});function yt(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}Object.assign(yt,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,o,s){let c=n[i+0],a=n[i+1],l=n[i+2],h=n[i+3];const u=r[o+0],f=r[o+1],d=r[o+2],p=r[o+3];if(h!==p||c!==u||a!==f||l!==d){let x=1-s,y=c*u+a*f+l*d+h*p,g=y>=0?1:-1,m=1-y*y;if(m>Number.EPSILON){const v=Math.sqrt(m),w=Math.atan2(v,y*g);x=Math.sin(x*w)/v,s=Math.sin(s*w)/v}const b=s*g;if(c=c*x+u*b,a=a*x+f*b,l=l*x+d*b,h=h*x+p*b,x===1-s){const v=1/Math.sqrt(c*c+a*a+l*l+h*h);c*=v,a*=v,l*=v,h*=v}}e[t]=c,e[t+1]=a,e[t+2]=l,e[t+3]=h},multiplyQuaternionsFlat:function(e,t,n,i,r,o){const s=n[i],c=n[i+1],a=n[i+2],l=n[i+3],h=r[o],u=r[o+1],f=r[o+2],d=r[o+3];return e[t]=s*d+l*h+c*f-a*u,e[t+1]=c*d+l*u+a*h-s*f,e[t+2]=a*d+l*f+s*u-c*h,e[t+3]=l*d-s*h-c*u-a*f,e}}),Object.defineProperties(yt.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}}),Object.assign(yt.prototype,{isQuaternion:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e.order,s=Math.cos,c=Math.sin,a=s(n/2),l=s(i/2),h=s(r/2),u=c(n/2),f=c(i/2),d=c(r/2);switch(o){case"XYZ":this._x=u*l*h+a*f*d,this._y=a*f*h-u*l*d,this._z=a*l*d+u*f*h,this._w=a*l*h-u*f*d;break;case"YXZ":this._x=u*l*h+a*f*d,this._y=a*f*h-u*l*d,this._z=a*l*d-u*f*h,this._w=a*l*h+u*f*d;break;case"ZXY":this._x=u*l*h-a*f*d,this._y=a*f*h+u*l*d,this._z=a*l*d+u*f*h,this._w=a*l*h-u*f*d;break;case"ZYX":this._x=u*l*h-a*f*d,this._y=a*f*h+u*l*d,this._z=a*l*d-u*f*h,this._w=a*l*h+u*f*d;break;case"YZX":this._x=u*l*h+a*f*d,this._y=a*f*h+u*l*d,this._z=a*l*d-u*f*h,this._w=a*l*h-u*f*d;break;case"XZY":this._x=u*l*h-a*f*d,this._y=a*f*h-u*l*d,this._z=a*l*d+u*f*h,this._w=a*l*h+u*f*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],a=t[2],l=t[6],h=t[10],u=n+s+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-a)*f,this._z=(o-i)*f}else if(n>s&&n>h){const f=2*Math.sqrt(1+n-s-h);this._w=(l-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+a)/f}else if(s>h){const f=2*Math.sqrt(1+s-n-h);this._w=(r-a)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+h-n-s);this._w=(o-i)/f,this._x=(r+a)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this},setFromUnitVectors:function(e,t){let i=e.dot(t)+1;return i<1e-6?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()},angleTo:function(e){return 2*Math.acos(Math.abs(Ue.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this},identity:function(){return this.set(0,0,0,1)},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,a=t._z,l=t._w;return this._x=n*l+o*s+i*a-r*c,this._y=i*l+o*c+r*s-n*a,this._z=r*l+o*a+n*c-i*s,this._w=o*l-n*s-i*c-r*a,this._onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(c),l=Math.atan2(a,s),h=Math.sin((1-t)*l)/a,u=Math.sin(t*l)/a;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},fromBufferAttribute:function(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});const ka=new M,Jl=new yt;function M(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}Object.assign(M.prototype,{isVector3:!0,set:function(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Jl.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(Jl.setFromAxisAngle(e,t))},applyMatrix3:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this},applyQuaternion:function(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,a=c*t+o*i-s*n,l=c*n+s*t-r*i,h=c*i+r*n-o*t,u=-r*t-o*n-s*i;return this.x=a*c+u*-r+l*-s-h*-o,this.y=l*c+u*-o+h*-r-a*-s,this.z=h*c+u*-s+a*-o-l*-r,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-n*c,this.z=n*s-i*o,this},projectOnVector:function(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)},projectOnPlane:function(e){return ka.copy(this).projectOnVector(e),this.sub(ka)},reflect:function(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue.clamp(n,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},setFromMatrix3Column:function(e,t){return this.fromArray(e.elements,t*3)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});const zi=new M,Zt=new Ge,zd=new M(0,0,0),kd=new M(1,1,1),Un=new M,is=new M,Nt=new M;function Ge(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(Ge.prototype,{isMatrix4:!0,set:function(e,t,n,i,r,o,s,c,a,l,h,u,f,d,p,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=r,y[5]=o,y[9]=s,y[13]=c,y[2]=a,y[6]=l,y[10]=h,y[14]=u,y[3]=f,y[7]=d,y[11]=p,y[15]=x,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new Ge().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this},copyPosition:function(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),a=Math.sin(i),l=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*l,f=o*h,d=s*l,p=s*h;t[0]=c*l,t[4]=-c*h,t[8]=a,t[1]=f+d*a,t[5]=u-p*a,t[9]=-s*c,t[2]=p-u*a,t[6]=d+f*a,t[10]=o*c}else if(e.order==="YXZ"){const u=c*l,f=c*h,d=a*l,p=a*h;t[0]=u+p*s,t[4]=d*s-f,t[8]=o*a,t[1]=o*h,t[5]=o*l,t[9]=-s,t[2]=f*s-d,t[6]=p+u*s,t[10]=o*c}else if(e.order==="ZXY"){const u=c*l,f=c*h,d=a*l,p=a*h;t[0]=u-p*s,t[4]=-o*h,t[8]=d+f*s,t[1]=f+d*s,t[5]=o*l,t[9]=p-u*s,t[2]=-o*a,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const u=o*l,f=o*h,d=s*l,p=s*h;t[0]=c*l,t[4]=d*a-f,t[8]=u*a+p,t[1]=c*h,t[5]=p*a+u,t[9]=f*a-d,t[2]=-a,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*a,d=s*c,p=s*a;t[0]=c*l,t[4]=p-u*h,t[8]=d*h+f,t[1]=h,t[5]=o*l,t[9]=-s*l,t[2]=-a*l,t[6]=f*h+d,t[10]=u-p*h}else if(e.order==="XZY"){const u=o*c,f=o*a,d=s*c,p=s*a;t[0]=c*l,t[4]=-h,t[8]=a*l,t[1]=u*h+p,t[5]=o*l,t[9]=f*h-d,t[2]=d*h-f,t[6]=s*l,t[10]=p*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(zd,e,kd)},lookAt:function(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Un.crossVectors(n,Nt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Un.crossVectors(n,Nt)),Un.normalize(),is.crossVectors(Nt,Un),i[0]=Un.x,i[4]=is.x,i[8]=Nt.x,i[1]=Un.y,i[5]=is.y,i[9]=Nt.y,i[2]=Un.z,i[6]=is.z,i[10]=Nt.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],c=n[8],a=n[12],l=n[1],h=n[5],u=n[9],f=n[13],d=n[2],p=n[6],x=n[10],y=n[14],g=n[3],m=n[7],b=n[11],v=n[15],w=i[0],T=i[4],L=i[8],G=i[12],C=i[1],Y=i[5],N=i[9],O=i[13],B=i[2],P=i[6],R=i[10],U=i[14],q=i[3],K=i[7],te=i[11],pe=i[15];return r[0]=o*w+s*C+c*B+a*q,r[4]=o*T+s*Y+c*P+a*K,r[8]=o*L+s*N+c*R+a*te,r[12]=o*G+s*O+c*U+a*pe,r[1]=l*w+h*C+u*B+f*q,r[5]=l*T+h*Y+u*P+f*K,r[9]=l*L+h*N+u*R+f*te,r[13]=l*G+h*O+u*U+f*pe,r[2]=d*w+p*C+x*B+y*q,r[6]=d*T+p*Y+x*P+y*K,r[10]=d*L+p*N+x*R+y*te,r[14]=d*G+p*O+x*U+y*pe,r[3]=g*w+m*C+b*B+v*q,r[7]=g*T+m*Y+b*P+v*K,r[11]=g*L+m*N+b*R+v*te,r[15]=g*G+m*O+b*U+v*pe,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],a=e[13],l=e[2],h=e[6],u=e[10],f=e[14],d=e[3],p=e[7],x=e[11],y=e[15];return d*(+r*c*h-i*a*h-r*s*u+n*a*u+i*s*f-n*c*f)+p*(+t*c*f-t*a*u+r*o*u-i*o*f+i*a*l-r*c*l)+x*(+t*a*h-t*s*f-r*o*h+n*o*f+r*s*l-n*a*l)+y*(-i*s*l-t*c*h+t*s*u+i*o*h-n*o*u+n*c*l)},transpose:function(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const n=this.elements,i=e.elements,r=i[0],o=i[1],s=i[2],c=i[3],a=i[4],l=i[5],h=i[6],u=i[7],f=i[8],d=i[9],p=i[10],x=i[11],y=i[12],g=i[13],m=i[14],b=i[15],v=d*m*u-g*p*u+g*h*x-l*m*x-d*h*b+l*p*b,w=y*p*u-f*m*u-y*h*x+a*m*x+f*h*b-a*p*b,T=f*g*u-y*d*u+y*l*x-a*g*x-f*l*b+a*d*b,L=y*d*h-f*g*h-y*l*p+a*g*p+f*l*m-a*d*m,G=r*v+o*w+s*T+c*L;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/G;return n[0]=v*C,n[1]=(g*p*c-d*m*c-g*s*x+o*m*x+d*s*b-o*p*b)*C,n[2]=(l*m*c-g*h*c+g*s*u-o*m*u-l*s*b+o*h*b)*C,n[3]=(d*h*c-l*p*c-d*s*u+o*p*u+l*s*x-o*h*x)*C,n[4]=w*C,n[5]=(f*m*c-y*p*c+y*s*x-r*m*x-f*s*b+r*p*b)*C,n[6]=(y*h*c-a*m*c-y*s*u+r*m*u+a*s*b-r*h*b)*C,n[7]=(a*p*c-f*h*c+f*s*u-r*p*u-a*s*x+r*h*x)*C,n[8]=T*C,n[9]=(y*d*c-f*g*c-y*o*x+r*g*x+f*o*b-r*d*b)*C,n[10]=(a*g*c-y*l*c+y*o*u-r*g*u-a*o*b+r*l*b)*C,n[11]=(f*l*c-a*d*c-f*o*u+r*d*u+a*o*x-r*l*x)*C,n[12]=L*C,n[13]=(f*g*s-y*d*s+y*o*p-r*g*p-f*o*m+r*d*m)*C,n[14]=(y*l*s-a*g*s-y*o*h+r*g*h+a*o*m-r*l*m)*C,n[15]=(a*d*s-f*l*s+f*o*h-r*d*h-a*o*p+r*l*p)*C,this},scale:function(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,c=e.z,a=r*o,l=r*s;return this.set(a*o+n,a*s-i*c,a*c+i*s,0,a*s+i*c,l*s+n,l*c-i*o,0,a*c-i*s,l*c+i*o,r*c*c+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,a=r+r,l=o+o,h=s+s,u=r*a,f=r*l,d=r*h,p=o*l,x=o*h,y=s*h,g=c*a,m=c*l,b=c*h,v=n.x,w=n.y,T=n.z;return i[0]=(1-(p+y))*v,i[1]=(f+b)*v,i[2]=(d-m)*v,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(u+y))*w,i[6]=(x+g)*w,i[7]=0,i[8]=(d+m)*T,i[9]=(x-g)*T,i[10]=(1-(u+p))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},decompose:function(e,t,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length(),o=zi.set(i[4],i[5],i[6]).length(),s=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const a=1/r,l=1/o,h=1/s;return Zt.elements[0]*=a,Zt.elements[1]*=a,Zt.elements[2]*=a,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=o,n.z=s,this},makePerspective:function(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,c=2*r/(t-e),a=2*r/(n-i),l=(t+e)/(t-e),h=(n+i)/(n-i),u=-(o+r)/(o-r),f=-2*o*r/(o-r);return s[0]=c,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=a,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makeOrthographic:function(e,t,n,i,r,o){const s=this.elements,c=1/(t-e),a=1/(n-i),l=1/(o-r),h=(t+e)*c,u=(n+i)*a,f=(o+r)*l;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*a,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}});const Zl=new Ge,$l=new yt;function ki(e=0,t=0,n=0,i=ki.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],ki.DefaultOrder="XYZ",Object.defineProperties(ki.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}}),Object.assign(ki.prototype,{isEuler:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){const i=Ue.clamp,r=e.elements,o=r[0],s=r[4],c=r[8],a=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(a,o));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(a,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});function Ha(){this.mask=1}Object.assign(Ha.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},disableAll:function(){this.mask=0},test:function(e){return(this.mask&e.mask)!==0}});let Hd=0;const Ql=new M,Hi=new yt,Mn=new Ge,rs=new M,kr=new M,Vd=new M,Wd=new yt,Kl=new M(1,0,0),eu=new M(0,1,0),tu=new M(0,0,1),jd={type:"added"},qd={type:"removed"};function se(){Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ue.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DefaultUp.clone();const e=new M,t=new ki,n=new yt,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Lt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=se.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}se.DefaultUp=new M(0,1,0),se.DefaultMatrixAutoUpdate=!0,se.prototype=Object.assign(Object.create(wn.prototype),{constructor:se,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this},rotateOnWorldAxis:function(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this},rotateX:function(e){return this.rotateOnAxis(Kl,e)},rotateY:function(e){return this.rotateOnAxis(eu,e)},rotateZ:function(e){return this.rotateOnAxis(tu,e)},translateOnAxis:function(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(Kl,e)},translateY:function(e){return this.translateOnAxis(eu,e)},translateZ:function(e){return this.translateOnAxis(tu,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(Mn.getInverse(this.matrixWorld))},lookAt:function(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(kr,rs,this.up):Mn.lookAt(rs,kr,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Hi.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),Mn.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new M),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new yt),this.updateMatrixWorld(!0),this.matrixWorld.decompose(kr,e,Vd),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new M),this.updateMatrixWorld(!0),this.matrixWorld.decompose(kr,Wd,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new M),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let a=0,l=c.length;a<l;a++){const h=c[a];r(e.shapes,h)}else r(e.shapes,c)}}if(this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,a=this.material.length;c<a;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(t){const s=o(e.geometries),c=o(e.materials),a=o(e.textures),l=o(e.images),h=o(e.shapes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h)}return n.object=i,n;function o(s){const c=[];for(const a in s){const l=s[a];delete l.metadata,c.push(l)}return c}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});function Hr(){se.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Hr.prototype=Object.assign(Object.create(se.prototype),{constructor:Hr,isScene:!0,copy:function(e,t){return se.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){const t=se.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Sn=[new M,new M,new M,new M,new M,new M,new M,new M],Vr=new M,Va=new cn,Vi=new M,Wi=new M,ji=new M,Gn=new M,zn=new M,ui=new M,Wr=new M,os=new M,ss=new M,hi=new M;function cn(e,t){this.min=e!==void 0?e:new M(1/0,1/0,1/0),this.max=t!==void 0?t:new M(-1/0,-1/0,-1/0)}Object.assign(cn.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,a=e.length;c<a;c+=3){const l=e[c],h=e[c+1],u=e[c+2];l<t&&(t=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(t,n,i),this.max.set(r,o,s),this},setFromBufferAttribute:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,a=e.count;c<a;c++){const l=e.getX(c),h=e.getY(c),u=e.getZ(c);l<t&&(t=l),h<n&&(n=h),u<i&&(i=u),l>r&&(r=l),h>o&&(o=h),u>s&&(s=u)}return this.min.set(t,n,i),this.max.set(r,o,s),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=Vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox),Va.applyMatrix4(e.matrixWorld),this.union(Va));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new M),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,Vr),Vr.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(Wr),os.subVectors(this.max,Wr),Vi.subVectors(e.a,Wr),Wi.subVectors(e.b,Wr),ji.subVectors(e.c,Wr),Gn.subVectors(Wi,Vi),zn.subVectors(ji,Wi),ui.subVectors(Vi,ji);let t=[0,-Gn.z,Gn.y,0,-zn.z,zn.y,0,-ui.z,ui.y,Gn.z,0,-Gn.x,zn.z,0,-zn.x,ui.z,0,-ui.x,-Gn.y,Gn.x,0,-zn.y,zn.x,0,-ui.y,ui.x,0];return!Wa(t,Vi,Wi,ji,os)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Vi,Wi,ji,os))?!1:(ss.crossVectors(Gn,zn),t=[ss.x,ss.y,ss.z],Wa(t,Vi,Wi,ji,os))},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new M),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return Vr.copy(e).clamp(this.min,this.max).sub(e).length()},getBoundingSphere:function(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Vr).length()*.5,e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function Wa(e,t,n,i,r){for(let o=0,s=e.length-3;o<=s;o+=3){hi.fromArray(e,o);const c=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),a=t.dot(hi),l=n.dot(hi),h=i.dot(hi);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>c)return!1}return!0}const Xd=new cn;function En(e,t){this.center=e!==void 0?e:new M,this.radius=t!==void 0?t:-1}Object.assign(En.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){const n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new M),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new cn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});const Tn=new M,ja=new M,as=new M,kn=new M,qa=new M,cs=new M,Xa=new M;function qi(e,t){this.origin=e!==void 0?e:new M,this.direction=t!==void 0?t:new M(0,0,-1)}Object.assign(qi.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new M),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,Tn)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new M),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))},distanceSqToSegment:function(e,t,n,i){ja.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(as),s=kn.dot(this.direction),c=-kn.dot(as),a=kn.lengthSq(),l=Math.abs(1-o*o);let h,u,f,d;if(l>0)if(h=o*c-s,u=o*s-c,d=r*l,h>=0)if(u>=-d)if(u<=d){const p=1/l;h*=p,u*=p,f=h*(h+o*u+2*s)+u*(o*h+u+2*c)+a}else u=r,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*c)+a;else u=-r,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*c)+a;else u<=-d?(h=Math.max(0,-(-o*r+s)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+a):u<=d?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+a):(h=Math.max(0,-(o*r+s)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+a);else u=o>0?-r:r,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*c)+a;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(as).multiplyScalar(u).add(ja),f},intersectSphere:function(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,c=n+o;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){let n,i,r,o,s,c;const a=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return a>=0?(n=(e.min.x-u.x)*a,i=(e.max.x-u.x)*a):(n=(e.max.x-u.x)*a,i=(e.min.x-u.x)*a),l>=0?(r=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(s=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(e){return this.intersectBox(e,Tn)!==null},intersectTriangle:function(e,t,n,i,r){qa.subVectors(t,e),cs.subVectors(n,e),Xa.crossVectors(qa,cs);let o=this.direction.dot(Xa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;kn.subVectors(this.origin,e);const c=s*this.direction.dot(cs.crossVectors(kn,cs));if(c<0)return null;const a=s*this.direction.dot(qa.cross(kn));if(a<0||c+a>o)return null;const l=-s*kn.dot(Xa);return l<0?null:this.at(l/o,r)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});const Ya=new M,Yd=new M,Jd=new Lt;function ln(e,t){this.normal=e!==void 0?e:new M(1,0,0),this.constant=t!==void 0?t:0}Object.assign(ln.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,n){const i=Ya.subVectors(n,t).cross(Yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new M),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new M);const n=e.delta(Ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const r=-(e.start.dot(this.normal)+this.constant)/i;if(!(r<0||r>1))return t.copy(n).multiplyScalar(r).add(e.start)},intersectsLine:function(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new M),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){const n=t||Jd.getNormalMatrix(e),i=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});const $t=new M,An=new M,Ja=new M,Ln=new M,Xi=new M,Yi=new M,nu=new M,Za=new M,$a=new M,Qa=new M;function bt(e,t,n){this.a=e!==void 0?e:new M,this.b=t!==void 0?t:new M,this.c=n!==void 0?n:new M}Object.assign(bt,{getNormal:function(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new M),i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},getBarycoord:function(e,t,n,i,r){$t.subVectors(i,t),An.subVectors(n,t),Ja.subVectors(e,t);const o=$t.dot($t),s=$t.dot(An),c=$t.dot(Ja),a=An.dot(An),l=An.dot(Ja),h=o*a-s*s;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new M),h===0)return r.set(-2,-1,-1);const u=1/h,f=(a*c-s*l)*u,d=(o*l-s*c)*u;return r.set(1-f-d,d,f)},containsPoint:function(e,t,n,i){return bt.getBarycoord(e,t,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1},getUV:function(e,t,n,i,r,o,s,c){return this.getBarycoord(e,t,n,i,Ln),c.set(0,0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(s,Ln.z),c},isFrontFacing:function(e,t,n,i){return $t.subVectors(n,t),An.subVectors(e,t),$t.cross(An).dot(i)<0}}),Object.assign(bt.prototype,{set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return $t.subVectors(this.c,this.b),An.subVectors(this.a,this.b),$t.cross(An).length()*.5},getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new M),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return bt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new ln),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return bt.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,n,i,r){return bt.getUV(e,this.a,this.b,this.c,t,n,i,r)},containsPoint:function(e){return bt.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return bt.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new M);const n=this.a,i=this.b,r=this.c;let o,s;Xi.subVectors(i,n),Yi.subVectors(r,n),Za.subVectors(e,n);const c=Xi.dot(Za),a=Yi.dot(Za);if(c<=0&&a<=0)return t.copy(n);$a.subVectors(e,i);const l=Xi.dot($a),h=Yi.dot($a);if(l>=0&&h<=l)return t.copy(i);const u=c*h-l*a;if(u<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(Xi,o);Qa.subVectors(e,r);const f=Xi.dot(Qa),d=Yi.dot(Qa);if(d>=0&&f<=d)return t.copy(r);const p=f*a-c*d;if(p<=0&&a>=0&&d<=0)return s=a/(a-d),t.copy(n).addScaledVector(Yi,s);const x=l*d-f*h;if(x<=0&&h-l>=0&&f-d>=0)return nu.subVectors(r,i),s=(h-l)/(h-l+(f-d)),t.copy(i).addScaledVector(nu,s);const y=1/(x+p+u);return o=p*y,s=u*y,t.copy(n).addScaledVector(Xi,o).addScaledVector(Yi,s)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},ls={h:0,s:0,l:0};function me(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}function Ka(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function ec(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function tc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Object.assign(me.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(e,t,n){if(e=Ue.euclideanModulo(e,1),t=Ue.clamp(t,0,1),n=Ue.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Ka(r,i,e+1/3),this.g=Ka(r,i,e),this.b=Ka(r,i,e-1/3)}return this},setStyle:function(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){const s=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(s,c,a)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this},setColorName:function(e){const t=iu[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this},copyLinearToSRGB:function(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let s,c;const a=(o+r)/2;if(o===r)s=0,c=0;else{const l=r-o;switch(c=a<=.5?l/(r+o):l/(2-r-o),r){case t:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-t)/l+2;break;case i:s=(t-n)/l+4;break}s/=6}return e.h=s,e.s=c,e.l=a,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(Qt),e.getHSL(ls);const n=Ue.lerp(Qt.h,ls.h,t),i=Ue.lerp(Qt.s,ls.s,t),r=Ue.lerp(Qt.l,ls.l,t);return this.setHSL(n,i,r),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},fromBufferAttribute:function(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}}),me.NAMES=iu;function us(e,t,n,i,r,o){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new M,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new me,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=o!==void 0?o:0}Object.assign(us.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});let Zd=0;function De(){Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ue.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Br,this.side=Nr,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}De.prototype=Object.assign(Object.create(wn.prototype),{constructor:De,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Sl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Nr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const c=r[s];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(De.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Vt(e){De.call(this),this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}Vt.prototype=Object.create(De.prototype),Vt.prototype.constructor=Vt,Vt.prototype.isMeshBasicMaterial=!0,Vt.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const it=new M,hs=new H;function Ee(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ts,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(Ee.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new me),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new H),t[n++]=o.x,t[n++]=o.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new M),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new $e),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function nc(e,t,n){Ee.call(this,new Int8Array(e),t,n)}nc.prototype=Object.create(Ee.prototype),nc.prototype.constructor=nc;function ic(e,t,n){Ee.call(this,new Uint8Array(e),t,n)}ic.prototype=Object.create(Ee.prototype),ic.prototype.constructor=ic;function rc(e,t,n){Ee.call(this,new Uint8ClampedArray(e),t,n)}rc.prototype=Object.create(Ee.prototype),rc.prototype.constructor=rc;function oc(e,t,n){Ee.call(this,new Int16Array(e),t,n)}oc.prototype=Object.create(Ee.prototype),oc.prototype.constructor=oc;function jr(e,t,n){Ee.call(this,new Uint16Array(e),t,n)}jr.prototype=Object.create(Ee.prototype),jr.prototype.constructor=jr;function sc(e,t,n){Ee.call(this,new Int32Array(e),t,n)}sc.prototype=Object.create(Ee.prototype),sc.prototype.constructor=sc;function qr(e,t,n){Ee.call(this,new Uint32Array(e),t,n)}qr.prototype=Object.create(Ee.prototype),qr.prototype.constructor=qr;function le(e,t,n){Ee.call(this,new Float32Array(e),t,n)}le.prototype=Object.create(Ee.prototype),le.prototype.constructor=le;function ac(e,t,n){Ee.call(this,new Float64Array(e),t,n)}ac.prototype=Object.create(Ee.prototype),ac.prototype.constructor=ac;function ru(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(ru.prototype,{computeGroups:function(e){const t=[];let n,i,r;const o=e.faces;for(i=0;i<o.length;i++){const s=o[i];s.materialIndex!==r&&(r=s.materialIndex,n!==void 0&&(n.count=i*3-n.start,t.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,t.push(n)),this.groups=t},fromGeometry:function(e){const t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,o=i[1]&&i[1].length>0,s=e.morphTargets,c=s.length;let a;if(c>0){a=[];for(let y=0;y<c;y++)a[y]={name:s[y].name,data:[]};this.morphTargets.position=a}const l=e.morphNormals,h=l.length;let u;if(h>0){u=[];for(let y=0;y<h;y++)u[y]={name:l[y].name,data:[]};this.morphTargets.normal=u}const f=e.skinIndices,d=e.skinWeights,p=f.length===n.length,x=d.length===n.length;n.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let y=0;y<t.length;y++){const g=t[y];this.vertices.push(n[g.a],n[g.b],n[g.c]);const m=g.vertexNormals;if(m.length===3)this.normals.push(m[0],m[1],m[2]);else{const v=g.normal;this.normals.push(v,v,v)}const b=g.vertexColors;if(b.length===3)this.colors.push(b[0],b[1],b[2]);else{const v=g.color;this.colors.push(v,v,v)}if(r===!0){const v=i[0][y];v!==void 0?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",y),this.uvs.push(new H,new H,new H))}if(o===!0){const v=i[1][y];v!==void 0?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",y),this.uvs2.push(new H,new H,new H))}for(let v=0;v<c;v++){const w=s[v].vertices;a[v].data.push(w[g.a],w[g.b],w[g.c])}for(let v=0;v<h;v++){const w=l[v].vertexNormals[y];u[v].data.push(w.a,w.b,w.c)}p&&this.skinIndices.push(f[g.a],f[g.b],f[g.c]),x&&this.skinWeights.push(d[g.a],d[g.b],d[g.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}});function ou(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}let $d=1;const un=new Ge,cc=new se,Ji=new M,Bt=new cn,Xr=new cn,xt=new M;function de(){Object.defineProperty(this,"id",{value:$d+=2}),this.uuid=Ue.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}de.prototype=Object.assign(Object.create(wn.prototype),{constructor:de,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(ou(e)>65535?qr:jr)(e,1):this.index=e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return un.makeRotationX(e),this.applyMatrix4(un),this},rotateY:function(e){return un.makeRotationY(e),this.applyMatrix4(un),this},rotateZ:function(e){return un.makeRotationZ(e),this.applyMatrix4(un),this},translate:function(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this},scale:function(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this},lookAt:function(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this},setFromObject:function(e){const t=e.geometry;if(e.isPoints||e.isLine){const n=new le(t.vertices.length*3,3),i=new le(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){const r=new le(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new ru().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){const t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new Ee(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){const n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new Ee(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){const n=new Float32Array(e.colors.length*3);this.setAttribute("color",new Ee(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){const n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new Ee(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){const n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new Ee(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(const n in e.morphTargets){const i=[],r=e.morphTargets[n];for(let o=0,s=r.length;o<s;o++){const c=r[o],a=new le(c.data.length*3,3);a.name=c.name,i.push(a.copyVector3sArray(c.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){const n=new le(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){const n=new le(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Xr.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(Bt.min,Xr.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Xr.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Xr.min),Bt.expandByPoint(Xr.max))}Bt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],c=this.morphTargetsRelative;for(let a=0,l=s.count;a<l;a++)xt.fromBufferAttribute(s,a),c&&(Ji.fromBufferAttribute(e,a),xt.add(Ji)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new M,r=new M,o=new M,s=new M,c=new M,a=new M,l=new M,h=new M;if(e)for(let u=0,f=e.count;u<f;u+=3){const d=e.getX(u+0),p=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,d),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,x),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),s.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.fromBufferAttribute(n,x),s.add(l),c.add(l),a.add(l),n.setXYZ(d,s.x,s.y,s.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(x,a.x,a.y,a.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,r),h.subVectors(i,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,s=e.attributes[i],c=s.array,a=s.itemSize*t,l=Math.min(c.length,o.length-a);for(let h=0,u=a;h<l;h++,u++)o[u]=c[h]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)},toNonIndexed:function(){function e(s,c){const a=s.array,l=s.itemSize,h=s.normalized,u=new a.constructor(c.length*l);let f=0,d=0;for(let p=0,x=c.length;p<x;p++){f=c[p]*l;for(let y=0;y<l;y++)u[d++]=a[f++]}return new Ee(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const t=new de,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],a=e(c,n);t.setAttribute(s,a)}const r=this.morphAttributes;for(const s in r){const c=[],a=r[s];for(let l=0,h=a.length;l<h;l++){const u=a[l],f=e(u,n);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const a=o[s];t.addGroup(a.start,a.count,a.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const a=n[c],l=a.toJSON(e.data);a.name!==""&&(l.name=a.name),e.data.attributes[c]=l}const i={};let r=!1;for(const c in this.morphAttributes){const a=this.morphAttributes[c],l=[];for(let h=0,u=a.length;h<u;h++){const f=a[h],d=f.toJSON(e.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[c]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e},clone:function(){return new de().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const a in i){const l=i[a];this.setAttribute(a,l.clone(t))}const r=e.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone(t));this.morphAttributes[a]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const su=new Ge,fi=new qi,lc=new En,Hn=new M,Vn=new M,Wn=new M,uc=new M,hc=new M,fc=new M,fs=new M,ds=new M,ps=new M,Zi=new H,$i=new H,Qi=new H,Yr=new M,ms=new M;function et(e,t){se.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new de,this.material=t!==void 0?t:new Vt,this.updateMorphTargets()}et.prototype=Object.assign(Object.create(se.prototype),{constructor:et,isMesh:!0,copy:function(e){return se.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(r),e.ray.intersectsSphere(lc)===!1)||(su.getInverse(r),fi.copy(e.ray).applyMatrix4(su),n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const s=n.index,c=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,x=f.length;p<x;p++){const y=f[p],g=i[y.materialIndex],m=Math.max(y.start,d.start),b=Math.min(y.start+y.count,d.start+d.count);for(let v=m,w=b;v<w;v+=3){const T=s.getX(v),L=s.getX(v+1),G=s.getX(v+2);o=gs(this,g,e,fi,c,a,l,h,u,T,L,G),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),x=Math.min(s.count,d.start+d.count);for(let y=p,g=x;y<g;y+=3){const m=s.getX(y),b=s.getX(y+1),v=s.getX(y+2);o=gs(this,i,e,fi,c,a,l,h,u,m,b,v),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,x=f.length;p<x;p++){const y=f[p],g=i[y.materialIndex],m=Math.max(y.start,d.start),b=Math.min(y.start+y.count,d.start+d.count);for(let v=m,w=b;v<w;v+=3){const T=v,L=v+1,G=v+2;o=gs(this,g,e,fi,c,a,l,h,u,T,L,G),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let y=p,g=x;y<g;y+=3){const m=y,b=y+1,v=y+2;o=gs(this,i,e,fi,c,a,l,h,u,m,b,v),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}else if(n.isGeometry){const s=Array.isArray(i),c=n.vertices,a=n.faces;let l;const h=n.faceVertexUvs[0];h.length>0&&(l=h);for(let u=0,f=a.length;u<f;u++){const d=a[u],p=s?i[d.materialIndex]:i;if(p===void 0)continue;const x=c[d.a],y=c[d.b],g=c[d.c];if(o=au(this,p,e,fi,x,y,g,Yr),o){if(l&&l[u]){const m=l[u];Zi.copy(m[0]),$i.copy(m[1]),Qi.copy(m[2]),o.uv=bt.getUV(Yr,x,y,g,Zi,$i,Qi,new H)}o.face=d,o.faceIndex=u,t.push(o)}}}}});function au(e,t,n,i,r,o,s,c){let a;if(t.side===mt?a=i.intersectTriangle(s,o,r,!0,c):a=i.intersectTriangle(r,o,s,t.side!==Ho,c),a===null)return null;ms.copy(c),ms.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(ms);return l<n.near||l>n.far?null:{distance:l,point:ms.clone(),object:e}}function gs(e,t,n,i,r,o,s,c,a,l,h,u){Hn.fromBufferAttribute(r,l),Vn.fromBufferAttribute(r,h),Wn.fromBufferAttribute(r,u);const f=e.morphTargetInfluences;if(t.morphTargets&&o&&f){fs.set(0,0,0),ds.set(0,0,0),ps.set(0,0,0);for(let p=0,x=o.length;p<x;p++){const y=f[p],g=o[p];y!==0&&(uc.fromBufferAttribute(g,l),hc.fromBufferAttribute(g,h),fc.fromBufferAttribute(g,u),s?(fs.addScaledVector(uc,y),ds.addScaledVector(hc,y),ps.addScaledVector(fc,y)):(fs.addScaledVector(uc.sub(Hn),y),ds.addScaledVector(hc.sub(Vn),y),ps.addScaledVector(fc.sub(Wn),y)))}Hn.add(fs),Vn.add(ds),Wn.add(ps)}e.isSkinnedMesh&&(e.boneTransform(l,Hn),e.boneTransform(h,Vn),e.boneTransform(u,Wn));const d=au(e,t,n,i,Hn,Vn,Wn,Yr);if(d){c&&(Zi.fromBufferAttribute(c,l),$i.fromBufferAttribute(c,h),Qi.fromBufferAttribute(c,u),d.uv=bt.getUV(Yr,Hn,Vn,Wn,Zi,$i,Qi,new H)),a&&(Zi.fromBufferAttribute(a,l),$i.fromBufferAttribute(a,h),Qi.fromBufferAttribute(a,u),d.uv2=bt.getUV(Yr,Hn,Vn,Wn,Zi,$i,Qi,new H));const p=new us(l,h,u);bt.getNormal(Hn,Vn,Wn,p.normal),d.face=p}return d}let Qd=0;const hn=new Ge,dc=new se,ys=new M;function Ne(){Object.defineProperty(this,"id",{value:Qd+=2}),this.uuid=Ue.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Ne.prototype=Object.assign(Object.create(wn.prototype),{constructor:Ne,isGeometry:!0,applyMatrix4:function(e){const t=new Lt().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(e);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let o=0,s=r.vertexNormals.length;o<s;o++)r.vertexNormals[o].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this},rotateY:function(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this},rotateZ:function(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this},translate:function(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this},scale:function(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this},lookAt:function(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this},fromBufferGeometry:function(e){const t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,o=i.normal,s=i.color,c=i.uv,a=i.uv2;a!==void 0&&(this.faceVertexUvs[1]=[]);for(let u=0;u<r.count;u++)t.vertices.push(new M().fromBufferAttribute(r,u)),s!==void 0&&t.colors.push(new me().fromBufferAttribute(s,u));function l(u,f,d,p){const x=s===void 0?[]:[t.colors[u].clone(),t.colors[f].clone(),t.colors[d].clone()],y=o===void 0?[]:[new M().fromBufferAttribute(o,u),new M().fromBufferAttribute(o,f),new M().fromBufferAttribute(o,d)],g=new us(u,f,d,y,x,p);t.faces.push(g),c!==void 0&&t.faceVertexUvs[0].push([new H().fromBufferAttribute(c,u),new H().fromBufferAttribute(c,f),new H().fromBufferAttribute(c,d)]),a!==void 0&&t.faceVertexUvs[1].push([new H().fromBufferAttribute(a,u),new H().fromBufferAttribute(a,f),new H().fromBufferAttribute(a,d)])}const h=e.groups;if(h.length>0)for(let u=0;u<h.length;u++){const f=h[u],d=f.start,p=f.count;for(let x=d,y=d+p;x<y;x+=3)n!==void 0?l(n.getX(x),n.getX(x+1),n.getX(x+2),f.materialIndex):l(x,x+1,x+2,f.materialIndex)}else if(n!==void 0)for(let u=0;u<n.count;u+=3)l(n.getX(u),n.getX(u+1),n.getX(u+2));else for(let u=0;u<r.count;u+=3)l(u,u+1,u+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this},normalize:function(){this.computeBoundingSphere();const e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new Ge;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const e=new M,t=new M;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],o=this.vertices[r.a],s=this.vertices[r.b],c=this.vertices[r.c];e.subVectors(c,s),t.subVectors(o,s),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);const t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new M;if(e){const n=new M,i=new M;for(let r=0,o=this.faces.length;r<o;r++){const s=this.faces[r],c=this.vertices[s.a],a=this.vertices[s.b],l=this.vertices[s.c];n.subVectors(l,a),i.subVectors(c,a),n.cross(i),t[s.a].add(n),t[s.b].add(n),t[s.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],o=r.vertexNormals;o.length===3?(o[0].copy(t[r.a]),o[1].copy(t[r.b]),o[2].copy(t[r.c])):(o[0]=t[r.a].clone(),o[1]=t[r.b].clone(),o[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){const n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,o=i.vertexNormals.length;r<o;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const e=new Ne;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];const r=this.morphNormals[t].faceNormals,o=this.morphNormals[t].vertexNormals;for(let s=0,c=this.faces.length;s<c;s++){const a=new M,l={a:new M,b:new M,c:new M};r.push(a),o.push(l)}}const i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,o=this.faces.length;r<o;r++){const s=this.faces[r],c=i.faceNormals[r],a=i.vertexNormals[r];c.copy(s.normal),a.a.copy(s.vertexNormals[0]),a.b.copy(s.vertexNormals[1]),a.c.copy(s.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i,r=this.vertices.length,o=this.vertices,s=e.vertices,c=this.faces,a=e.faces,l=this.colors,h=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new Lt().getNormalMatrix(t));for(let u=0,f=s.length;u<f;u++){const p=s[u].clone();t!==void 0&&p.applyMatrix4(t),o.push(p)}for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone());for(let u=0,f=a.length;u<f;u++){let d=a[u],p,x,y,g=d.vertexNormals,m=d.vertexColors;p=new us(d.a+r,d.b+r,d.c+r),p.normal.copy(d.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let b=0,v=g.length;b<v;b++)x=g[b].clone(),i!==void 0&&x.applyMatrix3(i).normalize(),p.vertexNormals.push(x);p.color.copy(d.color);for(let b=0,v=m.length;b<v;b++)y=m[b],p.vertexColors.push(y.clone());p.materialIndex=d.materialIndex+n,c.push(p)}for(let u=0,f=e.faceVertexUvs.length;u<f;u++){const d=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,x=d.length;p<x;p++){const y=d[p],g=[];for(let m=0,b=y.length;m<b;m++)g.push(y[m].clone());this.faceVertexUvs[u].push(g)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){const e={},t=[],n=[],r=Math.pow(10,4);for(let c=0,a=this.vertices.length;c<a;c++){const l=this.vertices[c],h=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[h]===void 0?(e[h]=c,t.push(this.vertices[c]),n[c]=t.length-1):n[c]=n[e[h]]}const o=[];for(let c=0,a=this.faces.length;c<a;c++){const l=this.faces[c];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const h=[l.a,l.b,l.c];for(let u=0;u<3;u++)if(h[u]===h[(u+1)%3]){o.push(c);break}}for(let c=o.length-1;c>=0;c--){const a=o[c];this.faces.splice(a,1);for(let l=0,h=this.faceVertexUvs.length;l<h;l++)this.faceVertexUvs[l].splice(a,1)}const s=this.vertices.length-t.length;return this.vertices=t,s},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){const i=e[t];this.vertices.push(new M(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const e=this.faces,t=e.length;for(let c=0;c<t;c++)e[c]._id=c;function n(c,a){return c.materialIndex-a.materialIndex}e.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let o,s;i&&i.length===t&&(o=[]),r&&r.length===t&&(s=[]);for(let c=0;c<t;c++){const a=e[c]._id;o&&o.push(i[a]),s&&s.push(r[a])}o&&(this.faceVertexUvs[0]=o),s&&(this.faceVertexUvs[1]=s)},toJSON:function(){const e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}const t=[];for(let d=0;d<this.vertices.length;d++){const p=this.vertices[d];t.push(p.x,p.y,p.z)}const n=[],i=[],r={},o=[],s={},c=[],a={};for(let d=0;d<this.faces.length;d++){const p=this.faces[d],x=!0,y=!1,g=this.faceVertexUvs[0][d]!==void 0,m=p.normal.length()>0,b=p.vertexNormals.length>0,v=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0;let T=0;if(T=l(T,0,0),T=l(T,1,x),T=l(T,2,y),T=l(T,3,g),T=l(T,4,m),T=l(T,5,b),T=l(T,6,v),T=l(T,7,w),n.push(T),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const L=this.faceVertexUvs[0][d];n.push(f(L[0]),f(L[1]),f(L[2]))}if(m&&n.push(h(p.normal)),b){const L=p.vertexNormals;n.push(h(L[0]),h(L[1]),h(L[2]))}if(v&&n.push(u(p.color)),w){const L=p.vertexColors;n.push(u(L[0]),u(L[1]),u(L[2]))}}function l(d,p,x){return x?d|1<<p:d&~(1<<p)}function h(d){const p=d.x.toString()+d.y.toString()+d.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(d.x,d.y,d.z)),r[p]}function u(d){const p=d.r.toString()+d.g.toString()+d.b.toString();return s[p]!==void 0||(s[p]=o.length,o.push(d.getHex())),s[p]}function f(d){const p=d.x.toString()+d.y.toString();return a[p]!==void 0||(a[p]=c.length/2,c.push(d.x,d.y)),a[p]}return e.data={},e.data.vertices=t,e.data.normals=i,o.length>0&&(e.data.colors=o),c.length>0&&(e.data.uvs=[c]),e.data.faces=n,e},clone:function(){return new Ne().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;const t=e.vertices;for(let u=0,f=t.length;u<f;u++)this.vertices.push(t[u].clone());const n=e.colors;for(let u=0,f=n.length;u<f;u++)this.colors.push(n[u].clone());const i=e.faces;for(let u=0,f=i.length;u<f;u++)this.faces.push(i[u].clone());for(let u=0,f=e.faceVertexUvs.length;u<f;u++){const d=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(let p=0,x=d.length;p<x;p++){const y=d[p],g=[];for(let m=0,b=y.length;m<b;m++){const v=y[m];g.push(v.clone())}this.faceVertexUvs[u].push(g)}}const r=e.morphTargets;for(let u=0,f=r.length;u<f;u++){const d={};if(d.name=r[u].name,r[u].vertices!==void 0){d.vertices=[];for(let p=0,x=r[u].vertices.length;p<x;p++)d.vertices.push(r[u].vertices[p].clone())}if(r[u].normals!==void 0){d.normals=[];for(let p=0,x=r[u].normals.length;p<x;p++)d.normals.push(r[u].normals[p].clone())}this.morphTargets.push(d)}const o=e.morphNormals;for(let u=0,f=o.length;u<f;u++){const d={};if(o[u].vertexNormals!==void 0){d.vertexNormals=[];for(let p=0,x=o[u].vertexNormals.length;p<x;p++){const y=o[u].vertexNormals[p],g={};g.a=y.a.clone(),g.b=y.b.clone(),g.c=y.c.clone(),d.vertexNormals.push(g)}}if(o[u].faceNormals!==void 0){d.faceNormals=[];for(let p=0,x=o[u].faceNormals.length;p<x;p++)d.faceNormals.push(o[u].faceNormals[p].clone())}this.morphNormals.push(d)}const s=e.skinWeights;for(let u=0,f=s.length;u<f;u++)this.skinWeights.push(s[u].clone());const c=e.skinIndices;for(let u=0,f=c.length;u<f;u++)this.skinIndices.push(c[u].clone());const a=e.lineDistances;for(let u=0,f=a.length;u<f;u++)this.lineDistances.push(a[u]);const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class Kd extends Ne{constructor(t,n,i,r,o,s){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s},this.fromBufferGeometry(new xs(t,n,i,r,o,s)),this.mergeVertices()}}class xs extends de{constructor(t=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const c=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const a=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,n,t,s,o,0),p("z","y","x",1,-1,i,n,-t,s,o,1),p("x","z","y",1,1,t,i,n,r,s,2),p("x","z","y",1,-1,t,i,-n,r,s,3),p("x","y","z",1,-1,t,n,i,r,o,4),p("x","y","z",-1,-1,t,n,-i,r,o,5),this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function p(x,y,g,m,b,v,w,T,L,G,C){const Y=v/L,N=w/G,O=v/2,B=w/2,P=T/2,R=L+1,U=G+1;let q=0,K=0;const te=new M;for(let pe=0;pe<U;pe++){const ye=pe*N-B;for(let Oe=0;Oe<R;Oe++){const Ae=Oe*Y-O;te[x]=Ae*m,te[y]=ye*b,te[g]=P,l.push(te.x,te.y,te.z),te[x]=0,te[y]=0,te[g]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(Oe/L),u.push(1-pe/G),q+=1}}for(let pe=0;pe<G;pe++)for(let ye=0;ye<L;ye++){const Oe=f+ye+R*pe,Ae=f+ye+R*(pe+1),qe=f+(ye+1)+R*(pe+1),ze=f+(ye+1)+R*pe;a.push(Oe,Ae,ze),a.push(Ae,qe,ze),K+=6}c.addGroup(d,K,C),d+=K,f+=q}}}function Ki(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function St(e){const t={};for(let n=0;n<e.length;n++){const i=Ki(e[n]);for(const r in i)t[r]=i[r]}return t}const ep={clone:Ki,merge:St};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function Dt(e){De.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}Dt.prototype=Object.create(De.prototype),Dt.prototype.constructor=Dt,Dt.prototype.isShaderMaterial=!0,Dt.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this},Dt.prototype.toJSON=function(e){const t=De.prototype.toJSON.call(this,e);t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function Cn(){se.call(this),this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge}Cn.prototype=Object.assign(Object.create(se.prototype),{constructor:Cn,isCamera:!0,copy:function(e,t){return se.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new M),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){se.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){se.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function dt(e,t,n,i){Cn.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}dt.prototype=Object.assign(Object.create(Cn.prototype),{constructor:dt,isPerspectiveCamera:!0,copy:function(e,t){return Cn.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=Ue.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(Ue.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return Ue.RAD2DEG*2*Math.atan(Math.tan(Ue.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(Ue.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/a,i*=o.width/c,n*=o.height/a}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=se.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const er=90,tr=1;function Jr(e,t,n){if(se.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new dt(er,tr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const r=new dt(er,tr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);const o=new dt(er,tr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new M(0,1,0)),this.add(o);const s=new dt(er,tr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new M(0,-1,0)),this.add(s);const c=new dt(er,tr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,1)),this.add(c);const a=new dt(er,tr,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new M(0,0,-1)),this.add(a),this.update=function(l,h){this.parent===null&&this.updateMatrixWorld();const u=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(h,i),l.setRenderTarget(n,1),l.render(h,r),l.setRenderTarget(n,2),l.render(h,o),l.setRenderTarget(n,3),l.render(h,s),l.setRenderTarget(n,4),l.render(h,c),n.texture.generateMipmaps=d,l.setRenderTarget(n,5),l.render(h,a),l.setRenderTarget(f),l.xr.enabled=u},this.clear=function(l,h,u,f){const d=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(h,u,f);l.setRenderTarget(d)}}Jr.prototype=Object.create(se.prototype),Jr.prototype.constructor=Jr;function Zr(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),Ht.call(this,e,e,t)}Zr.prototype=Object.create(Ht.prototype),Zr.prototype.constructor=Zr,Zr.prototype.isWebGLCubeRenderTarget=!0,Zr.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=kt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n=new Hr,i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},r=new Dt({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mt,blending:On});r.uniforms.tEquirect.value=t;const o=new et(new xs(5,5,5),r);return n.add(o),new Jr(1,10,this).update(e,n),o.geometry.dispose(),o.material.dispose(),this};function nr(e,t,n,i,r,o,s,c,a,l,h,u){tt.call(this,null,o,s,c,a,l,i,r,h,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}nr.prototype=Object.create(tt.prototype),nr.prototype.constructor=nr,nr.prototype.isDataTexture=!0;const ir=new En,vs=new M;function $r(e,t,n,i,r,o){this.planes=[e!==void 0?e:new ln,t!==void 0?t:new ln,n!==void 0?n:new ln,i!==void 0?i:new ln,r!==void 0?r:new ln,o!==void 0?o:new ln]}Object.assign($r.prototype,{set:function(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromProjectionMatrix:function(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],c=n[4],a=n[5],l=n[6],h=n[7],u=n[8],f=n[9],d=n[10],p=n[11],x=n[12],y=n[13],g=n[14],m=n[15];return t[0].setComponents(s-i,h-c,p-u,m-x).normalize(),t[1].setComponents(s+i,h+c,p+u,m+x).normalize(),t[2].setComponents(s+r,h+a,p+f,m+y).normalize(),t[3].setComponents(s-r,h-a,p-f,m-y).normalize(),t[4].setComponents(s-o,h-l,p-d,m-g).normalize(),t[5].setComponents(s+o,h+l,p+d,m+g).normalize(),this},intersectsObject:function(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)},intersectsSprite:function(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)},intersectsSphere:function(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0},intersectsBox:function(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vs.x=i.normal.x>0?e.max.x:e.min.x,vs.y=i.normal.y>0?e.max.y:e.min.y,vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vs)<0)return!1}return!0},containsPoint:function(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}});const ue={common:{diffuse:{value:new me(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new me(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new me(15658734)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Lt}}};function cu(){let e=null,t=!1,n=null,i=null;function r(o,s){n(o,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){e=o}}}function ip(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,f=l.usage,d=e.createBuffer();e.bindBuffer(h,d),e.bufferData(h,u,f),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function o(l,h,u){const f=h.array,d=h.updateRange;e.bindBuffer(u,l),d.count===-1?e.bufferSubData(u,0,f):(n?e.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):e.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function c(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(e.deleteBuffer(h.buffer),i.delete(l))}function a(l,h){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(o(u.buffer,l,h),u.version=l.version)}return{get:s,remove:c,update:a}}function _s(e,t,n,i){Ne.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new rr(e,t,n,i)),this.mergeVertices()}_s.prototype=Object.create(Ne.prototype),_s.prototype.constructor=_s;function rr(e,t,n,i){de.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},e=e||1,t=t||1;const r=e/2,o=t/2,s=Math.floor(n)||1,c=Math.floor(i)||1,a=s+1,l=c+1,h=e/s,u=t/c,f=[],d=[],p=[],x=[];for(let y=0;y<l;y++){const g=y*u-o;for(let m=0;m<a;m++){const b=m*h-r;d.push(b,-g,0),p.push(0,0,1),x.push(m/s),x.push(1-y/c)}}for(let y=0;y<c;y++)for(let g=0;g<s;g++){const m=g+a*y,b=g+a*(y+1),v=g+1+a*(y+1),w=g+1+a*y;f.push(m,b,w),f.push(b,v,w)}this.setIndex(f),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(x,2))}rr.prototype=Object.create(de.prototype),rr.prototype.constructor=rr;var rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp="vec3 transformed = vec3( position );",up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,xp=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,vp=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,_p=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z);    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		reflectVec = normalize( reflectVec );
		vec2 sampleUV = equirectUv( reflectVec );
		vec4 envColor = texture2D( envMap, sampleUV );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Wp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV = equirectUv( reflectVec );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,hm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,dm=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,gm=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Am=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Gm=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,zm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,km=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,dg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wg=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Ve={alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:sp,aomap_fragment:ap,aomap_pars_fragment:cp,begin_vertex:lp,beginnormal_vertex:up,bsdfs:hp,bumpmap_pars_fragment:fp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:yp,color_pars_fragment:xp,color_pars_vertex:vp,color_vertex:_p,common:bp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,encodings_fragment:Lp,encodings_pars_fragment:Cp,envmap_fragment:Rp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Ip,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Wp,envmap_vertex:Np,fog_vertex:Bp,fog_pars_vertex:Op,fog_fragment:Fp,fog_pars_fragment:Up,gradientmap_pars_fragment:Gp,lightmap_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_vertex:Hp,lights_pars_begin:Vp,lights_toon_fragment:jp,lights_toon_pars_fragment:qp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Zp,lights_fragment_begin:$p,lights_fragment_maps:Qp,lights_fragment_end:Kp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:sm,map_particle_pars_fragment:am,metalnessmap_fragment:cm,metalnessmap_pars_fragment:lm,morphnormal_vertex:um,morphtarget_pars_vertex:hm,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:xm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Lm,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Dm,specularmap_fragment:Nm,specularmap_pars_fragment:Bm,tonemapping_fragment:Om,tonemapping_pars_fragment:Fm,transmissionmap_fragment:Um,transmissionmap_pars_fragment:Gm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Hm,uv2_pars_fragment:Vm,uv2_pars_vertex:Wm,uv2_vertex:jm,worldpos_vertex:qm,background_frag:Xm,background_vert:Ym,cube_frag:Jm,cube_vert:Zm,depth_frag:$m,depth_vert:Qm,distanceRGBA_frag:Km,distanceRGBA_vert:eg,equirect_frag:tg,equirect_vert:ng,linedashed_frag:ig,linedashed_vert:rg,meshbasic_frag:og,meshbasic_vert:sg,meshlambert_frag:ag,meshlambert_vert:cg,meshmatcap_frag:lg,meshmatcap_vert:ug,meshtoon_frag:hg,meshtoon_vert:fg,meshphong_frag:dg,meshphong_vert:pg,meshphysical_frag:mg,meshphysical_vert:gg,normal_frag:yg,normal_vert:xg,points_frag:vg,points_vert:_g,shadow_frag:bg,shadow_vert:wg,sprite_frag:Mg,sprite_vert:Sg},fn={basic:{uniforms:St([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:St([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new me(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:St([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:St([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:St([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new me(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:St([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:St([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:St([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:St([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:St([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.normal_vert,fragmentShader:Ve.normal_frag},sprite:{uniforms:St([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:St([ue.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:St([ue.common,ue.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:St([ue.lights,ue.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fn.physical={uniforms:St([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new H(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new me(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function Eg(e,t,n,i){const r=new me(0);let o=0,s,c,a=null,l=0,h=null;function u(d,p,x,y){let g=p.isScene===!0?p.background:null;const m=e.xr,b=m.getSession&&m.getSession();if(b&&b.environmentBlendMode==="additive"&&(g=null),g===null?f(r,o):g&&g.isColor&&(f(g,1),y=!0),(e.autoClear||y)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.isWebGLCubeRenderTarget||g.mapping===Or)){c===void 0&&(c=new et(new xs(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ki(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c));const v=g.isWebGLCubeRenderTarget?g.texture:g;c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture?-1:1,(a!==g||l!==v.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,a=g,l=v.version,h=e.toneMapping),d.unshift(c,c.geometry,c.material,0,0,null)}else g&&g.isTexture&&(s===void 0&&(s=new et(new rr(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(s)),s.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),s.material.uniforms.uvTransform.value.copy(g.matrix),(a!==g||l!==g.version||h!==e.toneMapping)&&(s.material.needsUpdate=!0,a=g,l=g.version,h=e.toneMapping),d.unshift(s,s.geometry,s.material,0,0,null))}function f(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,i)}return{getClearColor:function(){return r},setClearColor:function(d,p){r.set(d),o=p!==void 0?p:1,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,f(r,o)},render:u}}function Tg(e,t,n,i){const r=e.getParameter(34921),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,c={},a=x(null);let l=a;function h(B,P,R,U,q){let K=!1;if(s){const te=p(U,R,P);l!==te&&(l=te,f(l.object)),K=y(U),K&&g(U)}else{const te=P.wireframe===!0;(l.geometry!==U.id||l.program!==R.id||l.wireframe!==te)&&(l.geometry=U.id,l.program=R.id,l.wireframe=te,K=!0)}B.isInstancedMesh===!0&&(K=!0),q!==null&&n.update(q,34963),K&&(L(B,P,R,U),q!==null&&e.bindBuffer(34963,n.get(q).buffer))}function u(){return i.isWebGL2?e.createVertexArray():o.createVertexArrayOES()}function f(B){return i.isWebGL2?e.bindVertexArray(B):o.bindVertexArrayOES(B)}function d(B){return i.isWebGL2?e.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function p(B,P,R){const U=R.wireframe===!0;let q=c[B.id];q===void 0&&(q={},c[B.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let te=K[U];return te===void 0&&(te=x(u()),K[U]=te),te}function x(B){const P=[],R=[],U=[];for(let q=0;q<r;q++)P[q]=0,R[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:R,attributeDivisors:U,object:B,attributes:{}}}function y(B){const P=l.attributes,R=B.attributes;if(Object.keys(P).length!==Object.keys(R).length)return!0;for(const U in R){const q=P[U],K=R[U];if(q.attribute!==K||q.data!==K.data)return!0}return!1}function g(B){const P={},R=B.attributes;for(const U in R){const q=R[U],K={};K.attribute=q,q.data&&(K.data=q.data),P[U]=K}l.attributes=P}function m(){const B=l.newAttributes;for(let P=0,R=B.length;P<R;P++)B[P]=0}function b(B){v(B,0)}function v(B,P){const R=l.newAttributes,U=l.enabledAttributes,q=l.attributeDivisors;R[B]=1,U[B]===0&&(e.enableVertexAttribArray(B),U[B]=1),q[B]!==P&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,P),q[B]=P)}function w(){const B=l.newAttributes,P=l.enabledAttributes;for(let R=0,U=P.length;R<U;R++)P[R]!==B[R]&&(e.disableVertexAttribArray(R),P[R]=0)}function T(B,P,R,U,q,K){i.isWebGL2===!0&&(R===5124||R===5125)?e.vertexAttribIPointer(B,P,R,q,K):e.vertexAttribPointer(B,P,R,U,q,K)}function L(B,P,R,U){if(i.isWebGL2===!1&&(B.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;m();const q=U.attributes,K=R.getAttributes(),te=P.defaultAttributeValues;for(const pe in K){const ye=K[pe];if(ye>=0){const Oe=q[pe];if(Oe!==void 0){const Ae=Oe.normalized,qe=Oe.itemSize,ze=n.get(Oe);if(ze===void 0)continue;const j=ze.buffer,Ye=ze.type,Re=ze.bytesPerElement;if(Oe.isInterleavedBufferAttribute){const Pe=Oe.data,Le=Pe.stride,V=Oe.offset;Pe&&Pe.isInstancedInterleavedBuffer?(v(ye,Pe.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=Pe.meshPerAttribute*Pe.count)):b(ye),e.bindBuffer(34962,j),T(ye,qe,Ye,Ae,Le*Re,V*Re)}else Oe.isInstancedBufferAttribute?(v(ye,Oe.meshPerAttribute),U._maxInstanceCount===void 0&&(U._maxInstanceCount=Oe.meshPerAttribute*Oe.count)):b(ye),e.bindBuffer(34962,j),T(ye,qe,Ye,Ae,0,0)}else if(pe==="instanceMatrix"){const Ae=n.get(B.instanceMatrix);if(Ae===void 0)continue;const qe=Ae.buffer,ze=Ae.type;v(ye+0,1),v(ye+1,1),v(ye+2,1),v(ye+3,1),e.bindBuffer(34962,qe),e.vertexAttribPointer(ye+0,4,ze,!1,64,0),e.vertexAttribPointer(ye+1,4,ze,!1,64,16),e.vertexAttribPointer(ye+2,4,ze,!1,64,32),e.vertexAttribPointer(ye+3,4,ze,!1,64,48)}else if(te!==void 0){const Ae=te[pe];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(ye,Ae);break;case 3:e.vertexAttrib3fv(ye,Ae);break;case 4:e.vertexAttrib4fv(ye,Ae);break;default:e.vertexAttrib1fv(ye,Ae)}}}}w()}function G(){N();for(const B in c){const P=c[B];for(const R in P){const U=P[R];for(const q in U)d(U[q].object),delete U[q];delete P[R]}delete c[B]}}function C(B){if(c[B.id]===void 0)return;const P=c[B.id];for(const R in P){const U=P[R];for(const q in U)d(U[q].object),delete U[q];delete P[R]}delete c[B.id]}function Y(B){for(const P in c){const R=c[P];if(R[B.id]===void 0)continue;const U=R[B.id];for(const q in U)d(U[q].object),delete U[q];delete R[B.id]}}function N(){O(),l!==a&&(l=a,f(l.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:N,resetDefaultState:O,dispose:G,releaseStatesOfGeometry:C,releaseStatesOfProgram:Y,initAttributes:m,enableAttribute:b,disableUnusedAttributes:w}}function Ag(e,t,n,i){const r=i.isWebGL2;let o;function s(l){o=l}function c(l,h){e.drawArrays(o,l,h),n.update(h,o,1)}function a(l,h,u){if(u===0)return;let f,d;if(r)f=e,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](o,l,h,u),n.update(h,o,u)}this.setMode=s,this.render=c,this.renderInstances=a}function Lg(e,t,n){let i;function r(){if(i!==void 0)return i;const T=t.get("EXT_texture_filter_anisotropic");return T!==null?i=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function o(T){if(T==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext;let c=n.precision!==void 0?n.precision:"highp";const a=o(c);a!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",a,"instead."),c=a);const l=n.logarithmicDepthBuffer===!0,h=e.getParameter(34930),u=e.getParameter(35660),f=e.getParameter(3379),d=e.getParameter(34076),p=e.getParameter(34921),x=e.getParameter(36347),y=e.getParameter(36348),g=e.getParameter(36349),m=u>0,b=s||!!t.get("OES_texture_float"),v=m&&b,w=s?e.getParameter(36183):0;return{isWebGL2:s,getMaxAnisotropy:r,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:w}}function Cg(){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ln,s=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,f){const d=h.length!==0||u||n!==0||i;return i=u,t=l(h,f,0),n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,a()},this.setState=function(h,u,f,d,p,x){if(!i||h===null||h.length===0||r&&!f)r?l(null):a();else{const y=r?0:n,g=y*4;let m=p.clippingState||null;c.value=m,m=l(h,d,g,x);for(let b=0;b!==g;++b)m[b]=t[b];p.clippingState=m,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=y}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(h,u,f,d){let p=h!==null?h.length:0,x=null;if(p!==0){if(x=c.value,d!==!0||x===null){const y=f+p*4,g=u.matrixWorldInverse;s.getNormalMatrix(g),(x===null||x.length<y)&&(x=new Float32Array(y));for(let m=0,b=f;m!==p;++m,b+=4)o.copy(h[m]).applyMatrix4(g,s),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,x}}function Rg(e){const t={};return{has:function(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,!!i},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]}}}function Pg(e,t,n,i){const r=new WeakMap,o=new WeakMap;function s(u){const f=u.target,d=r.get(f);d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);f.removeEventListener("dispose",s),r.delete(f);const p=o.get(d);p&&(t.remove(p),o.delete(d)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function c(u,f){let d=r.get(f);return d||(f.addEventListener("dispose",s),f.isBufferGeometry?d=f:f.isGeometry&&(f._bufferGeometry===void 0&&(f._bufferGeometry=new de().setFromObject(u)),d=f._bufferGeometry),r.set(f,d),n.memory.geometries++,d)}function a(u){const f=u.attributes;for(const p in f)t.update(f[p],34962);const d=u.morphAttributes;for(const p in d){const x=d[p];for(let y=0,g=x.length;y<g;y++)t.update(x[y],34962)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let x=0;if(d!==null){const m=d.array;x=d.version;for(let b=0,v=m.length;b<v;b+=3){const w=m[b+0],T=m[b+1],L=m[b+2];f.push(w,T,T,L,L,w)}}else{const m=p.array;x=p.version;for(let b=0,v=m.length/3-1;b<v;b+=3){const w=b+0,T=b+1,L=b+2;f.push(w,T,T,L,L,w)}}const y=new(ou(f)>65535?qr:jr)(f,1);y.version=x;const g=o.get(u);g&&t.remove(g),o.set(u,y)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:c,update:a,getWireframeAttribute:h}}function Ig(e,t,n,i){const r=i.isWebGL2;let o;function s(f){o=f}let c,a;function l(f){c=f.type,a=f.bytesPerElement}function h(f,d){e.drawElements(o,d,c,f*a),n.update(d,o,1)}function u(f,d,p){if(p===0)return;let x,y;if(r)x=e,y="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](o,d,c,f*a,p),n.update(d,o,p)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u}function Dg(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,c){switch(n.calls++,s){case 4:n.triangles+=c*(o/3);break;case 1:n.lines+=c*(o/2);break;case 3:n.lines+=c*(o-1);break;case 2:n.lines+=c*o;break;case 0:n.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ng(e,t){return e[0]-t[0]}function Bg(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Og(e){const t={},n=new Float32Array(8),i=[];for(let o=0;o<8;o++)i[o]=[o,0];function r(o,s,c,a){const l=o.morphTargetInfluences,h=l===void 0?0:l.length;let u=t[s.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];t[s.id]=u}for(let y=0;y<h;y++){const g=u[y];g[0]=y,g[1]=l[y]}u.sort(Bg);for(let y=0;y<8;y++)y<h&&u[y][1]?(i[y][0]=u[y][0],i[y][1]=u[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(Ng);const f=c.morphTargets&&s.morphAttributes.position,d=c.morphNormals&&s.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const g=i[y],m=g[0],b=g[1];m!==Number.MAX_SAFE_INTEGER&&b?(f&&s.getAttribute("morphTarget"+y)!==f[m]&&s.setAttribute("morphTarget"+y,f[m]),d&&s.getAttribute("morphNormal"+y)!==d[m]&&s.setAttribute("morphNormal"+y,d[m]),n[y]=b,p+=b):(f&&s.getAttribute("morphTarget"+y)!==void 0&&s.deleteAttribute("morphTarget"+y),d&&s.getAttribute("morphNormal"+y)!==void 0&&s.deleteAttribute("morphNormal"+y),n[y]=0)}const x=s.morphTargetsRelative?1:1-p;a.getUniforms().setValue(e,"morphTargetBaseInfluence",x),a.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function Fg(e,t,n,i){let r=new WeakMap;function o(c){const a=i.render.frame,l=c.geometry,h=t.get(c,l);return r.get(h)!==a&&(l.isGeometry&&h.updateFromObject(c),t.update(h),r.set(h,a)),c.isInstancedMesh&&n.update(c.instanceMatrix,34962),h}function s(){r=new WeakMap}return{update:o,dispose:s}}function jn(e,t,n,i,r,o,s,c,a,l){e=e!==void 0?e:[],t=t!==void 0?t:Pa,s=s!==void 0?s:ci,tt.call(this,e,t,n,i,r,o,s,c,a,l),this.flipY=!1}jn.prototype=Object.create(tt.prototype),jn.prototype.constructor=jn,jn.prototype.isCubeTexture=!0,Object.defineProperty(jn.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function Qr(e,t,n,i){tt.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=gt,this.minFilter=gt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Qr.prototype=Object.create(tt.prototype),Qr.prototype.constructor=Qr,Qr.prototype.isDataTexture2DArray=!0;function Kr(e,t,n,i){tt.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=gt,this.minFilter=gt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Kr.prototype=Object.create(tt.prototype),Kr.prototype.constructor=Kr,Kr.prototype.isDataTexture3D=!0;const lu=new tt,Ug=new Qr,Gg=new Kr,uu=new jn,hu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function or(e,t,n){const i=e[0];if(i<=0||i>0)return e;let r=t*n,o=hu[r];if(o===void 0&&(o=new Float32Array(r),hu[r]=o),t!==0){i.toArray(o,0);for(let s=1,c=0;s!==t;++s)c+=n,e[s].toArray(o,c)}return o}function Wt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ot(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function gu(e,t){let n=fu[t];n===void 0&&(n=new Int32Array(t),fu[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function zg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wt(n,t))return;e.uniform2fv(this.addr,t),Ot(n,t)}}function Hg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wt(n,t))return;e.uniform3fv(this.addr,t),Ot(n,t)}}function Vg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wt(n,t))return;e.uniform4fv(this.addr,t),Ot(n,t)}}function Wg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ot(n,t)}else{if(Wt(n,i))return;mu.set(i),e.uniformMatrix2fv(this.addr,!1,mu),Ot(n,i)}}function jg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ot(n,t)}else{if(Wt(n,i))return;pu.set(i),e.uniformMatrix3fv(this.addr,!1,pu),Ot(n,i)}}function qg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Wt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ot(n,t)}else{if(Wt(n,i))return;du.set(i),e.uniformMatrix4fv(this.addr,!1,du),Ot(n,i)}}function Xg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||lu,r)}function Yg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Ug,r)}function Jg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Gg,r)}function Zg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||uu,r)}function $g(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Qg(e,t){const n=this.cache;Wt(n,t)||(e.uniform2iv(this.addr,t),Ot(n,t))}function Kg(e,t){const n=this.cache;Wt(n,t)||(e.uniform3iv(this.addr,t),Ot(n,t))}function ey(e,t){const n=this.cache;Wt(n,t)||(e.uniform4iv(this.addr,t),Ot(n,t))}function ty(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ny(e){switch(e){case 5126:return zg;case 35664:return kg;case 35665:return Hg;case 35666:return Vg;case 35674:return Wg;case 35675:return jg;case 35676:return qg;case 5124:case 35670:return $g;case 35667:case 35671:return Qg;case 35668:case 35672:return Kg;case 35669:case 35673:return ey;case 5125:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Yg}}function iy(e,t){e.uniform1fv(this.addr,t)}function ry(e,t){e.uniform1iv(this.addr,t)}function oy(e,t){e.uniform2iv(this.addr,t)}function sy(e,t){e.uniform3iv(this.addr,t)}function ay(e,t){e.uniform4iv(this.addr,t)}function cy(e,t){const n=or(t,this.size,2);e.uniform2fv(this.addr,n)}function ly(e,t){const n=or(t,this.size,3);e.uniform3fv(this.addr,n)}function uy(e,t){const n=or(t,this.size,4);e.uniform4fv(this.addr,n)}function hy(e,t){const n=or(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fy(e,t){const n=or(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dy(e,t){const n=or(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function py(e,t,n){const i=t.length,r=gu(n,i);e.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTexture2D(t[o]||lu,r[o])}function my(e,t,n){const i=t.length,r=gu(n,i);e.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)n.safeSetTextureCube(t[o]||uu,r[o])}function gy(e){switch(e){case 5126:return iy;case 35664:return cy;case 35665:return ly;case 35666:return uy;case 35674:return hy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return sy;case 35669:case 35673:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35680:case 36300:case 36308:case 36293:return my}}function yy(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ny(t.type)}function yu(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gy(t.type)}yu.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Ot(t,e)};function xu(e){this.id=e,this.seq=[],this.map={}}xu.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}};const pc=/([\w\d_]+)(\])?(\[|\.)?/g;function vu(e,t){e.seq.push(t),e.map[t.id]=t}function xy(e,t,n){const i=e.name,r=i.length;for(pc.lastIndex=0;;){const o=pc.exec(i),s=pc.lastIndex;let c=o[1],a=o[2]==="]",l=o[3];if(a&&(c=c|0),l===void 0||l==="["&&s+2===r){vu(n,l===void 0?new yy(c,e,t):new yu(c,e,t));break}else{let u=n.map[c];u===void 0&&(u=new xu(c),vu(n,u)),n=u}}}function qn(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);xy(r,o,this)}}qn.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)},qn.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)},qn.upload=function(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}},qn.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n};function _u(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let vy=0;function _y(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function bu(e){switch(e){case It:return["Linear","( value )"];case es:return["sRGB","( value )"];case Ga:return["RGBE","( value )"];case jl:return["RGBM","( value, 7.0 )"];case ql:return["RGBM","( value, 16.0 )"];case Xl:return["RGBD","( value, 256.0 )"];case Ua:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Nd:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function wu(e,t,n){const i=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const o=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+_y(o)}function eo(e,t){const n=bu(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function by(e,t){const n=bu(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wy(e,t){let n;switch(t){case Df:n="Linear";break;case Nf:n="Reinhard";break;case Bf:n="OptimizedCineon";break;case Of:n="ACESFilmic";break;case Ff:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function My(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(to).join(`
`)}function Sy(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Ey(e,t){const n={},i=e.getProgramParameter(t,35721);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r).name;n[s]=e.getAttribLocation(t,s)}return n}function to(e){return e!==""}function Mu(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(e){return e.replace(Ty,Ay)}function Ay(e,t){const n=Ve[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return mc(n)}const Ly=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Cy=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Eu(e){return e.replace(Cy,Tu).replace(Ly,Ry)}function Ry(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Tu(e,t,n,i)}function Tu(e,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[ i \]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Au(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Py(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Dr&&(t="SHADOWMAP_TYPE_VSM"),t}function Iy(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Pa:case Ia:t="ENVMAP_TYPE_CUBE";break;case Or:case Wo:t="ENVMAP_TYPE_CUBE_UV";break;case Il:case Da:t="ENVMAP_TYPE_EQUIREC";break}return t}function Dy(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ia:case Da:case Wo:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case If:t="ENVMAP_BLENDING_ADD";break}return t}function By(e,t,n,i){const r=e.getContext(),o=n.defines;let s=n.vertexShader,c=n.fragmentShader;const a=Py(n),l=Iy(n),h=Dy(n),u=Ny(n),f=e.gammaFactor>0?e.gammaFactor:1,d=n.isWebGL2?"":My(n),p=Sy(o),x=r.createProgram();let y,g;n.isRawShaderMaterial?(y=[p].filter(to).join(`
`),y.length>0&&(y+=`
`),g=[d,p].filter(to).join(`
`),g.length>0&&(g+=`
`)):(y=[Au(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),g=[d,Au(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+a:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ni?wy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Ve.encodings_pars_fragment,n.map?eo("mapTexelToLinear",n.mapEncoding):"",n.matcap?eo("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?eo("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?eo("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?eo("lightMapTexelToLinear",n.lightMapEncoding):"",by("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),s=mc(s),s=Mu(s,n),s=Su(s,n),c=mc(c),c=Mu(c,n),c=Su(c,n),s=Eu(s),c=Eu(c),n.isWebGL2&&!n.isRawShaderMaterial&&(y=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=[`#version 300 es
`,"#define varying in","out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const m=y+s,b=g+c,v=_u(r,35633,m),w=_u(r,35632,b);if(r.attachShader(x,v),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),e.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),C=r.getShaderInfoLog(v).trim(),Y=r.getShaderInfoLog(w).trim();let N=!0,O=!0;if(r.getProgramParameter(x,35714)===!1){N=!1;const B=wu(r,v,"vertex"),P=wu(r,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(x,35715),"gl.getProgramInfoLog",G,B,P)}else G!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",G):(C===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:N,programLog:G,vertexShader:{log:C,prefix:y},fragmentShader:{log:Y,prefix:g}})}r.deleteShader(v),r.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new qn(r,x)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=Ey(r,x)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=n.shaderName,this.id=vy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=w,this}function Oy(e,t,n,i){const r=[],o=n.isWebGL2,s=n.logarithmicDepthBuffer,c=n.floatVertexTextures,a=n.maxVertexUniforms,l=n.vertexTextures;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function d(v){const T=v.skeleton.bones;if(c)return 1024;{const G=Math.floor((a-20)/4),C=Math.min(G,T.length);return C<T.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+T.length+" bones. This GPU supports "+C+"."),0):C}}function p(v){let w;return v?v.isTexture?w=v.encoding:v.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=v.texture.encoding):w=It,w}function x(v,w,T,L,G,C,Y){const N=L.fog,O=v.isMeshStandardMaterial?L.environment:null,B=v.envMap||O,P=u[v.type],R=Y.isSkinnedMesh?d(Y):0;v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let U,q;if(P){const pe=fn[P];U=pe.vertexShader,q=pe.fragmentShader}else U=v.vertexShader,q=v.fragmentShader;const K=e.getRenderTarget();return{isWebGL2:o,shaderID:P,shaderName:v.type,vertexShader:U,fragmentShader:q,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial,isShaderMaterial:v.isShaderMaterial,precision:h,instancing:Y.isInstancedMesh===!0,supportsVertexTextures:l,outputEncoding:K!==null?p(K.texture):e.outputEncoding,map:!!v.map,mapEncoding:p(v.map),matcap:!!v.matcap,matcapEncoding:p(v.matcap),envMap:!!B,envMapMode:B&&B.mapping,envMapEncoding:p(B),envMapCubeUV:!!B&&(B.mapping===Or||B.mapping===Wo),lightMap:!!v.lightMap,lightMapEncoding:p(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:p(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Fd,tangentSpaceNormalMap:v.normalMapType===Ui,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmissionMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:s,skinning:v.skinning&&R>0,maxBones:R,useVertexTexture:c,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:G,numClipIntersection:C,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&T.length>0,shadowMapType:e.shadowMap.type,toneMapping:v.toneMapped?e.toneMapping:Ni,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Ho,flipSided:v.side===mt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:o||t.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:o||t.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:v.customProgramCacheKey()}}function y(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.fragmentShader),w.push(v.vertexShader)),v.defines!==void 0)for(const T in v.defines)w.push(T),w.push(v.defines[T]);if(v.isRawShaderMaterial===void 0){for(let T=0;T<f.length;T++)w.push(v[f[T]]);w.push(e.outputEncoding),w.push(e.gammaFactor)}return w.push(v.customProgramCacheKey),w.join()}function g(v){const w=u[v.type];let T;if(w){const L=fn[w];T=ep.clone(L.uniforms)}else T=v.uniforms;return T}function m(v,w){let T;for(let L=0,G=r.length;L<G;L++){const C=r[L];if(C.cacheKey===w){T=C,++T.usedTimes;break}}return T===void 0&&(T=new By(e,w,v,i),r.push(T)),T}function b(v){if(--v.usedTimes===0){const w=r.indexOf(v);r[w]=r[r.length-1],r.pop(),v.destroy()}}return{getParameters:x,getProgramCacheKey:y,getUniforms:g,acquireProgram:m,releaseProgram:b,programs:r}}function Fy(){let e=new WeakMap;function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function n(o){e.delete(o)}function i(o,s,c){e.get(o)[s]=c}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function Uy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Gy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Lu(e){const t=[];let n=0;const i=[],r=[],o={id:-1};function s(){n=0,i.length=0,r.length=0}function c(f,d,p,x,y,g){let m=t[n];const b=e.get(p);return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,program:b.program||o,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},t[n]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.program=b.program||o,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=y,m.group=g),n++,m}function a(f,d,p,x,y,g){const m=c(f,d,p,x,y,g);(p.transparent===!0?r:i).push(m)}function l(f,d,p,x,y,g){const m=c(f,d,p,x,y,g);(p.transparent===!0?r:i).unshift(m)}function h(f,d){i.length>1&&i.sort(f||Uy),r.length>1&&r.sort(d||Gy)}function u(){for(let f=n,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:h}}function zy(e){let t=new WeakMap;function n(o){const s=o.target;s.removeEventListener("dispose",n),t.delete(s)}function i(o,s){const c=t.get(o);let a;return c===void 0?(a=new Lu(e),t.set(o,new WeakMap),t.get(o).set(s,a),o.addEventListener("dispose",n)):(a=c.get(s),a===void 0&&(a=new Lu(e),c.set(s,a))),a}function r(){t=new WeakMap}return{get:i,dispose:r}}function ky(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new M,color:new me};break;case"SpotLight":n={position:new M,direction:new M,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new M,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new M,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new M,halfWidth:new M,halfHeight:new M};break}return e[t.id]=n,n}}}function Hy(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Vy=0;function Wy(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function jy(){const e=new ky,t=Hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)n.probe.push(new M);const i=new M,r=new Ge,o=new Ge;function s(c,a,l){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,y=0,g=0,m=0,b=0,v=0;const w=l.matrixWorldInverse;c.sort(Wy);for(let L=0,G=c.length;L<G;L++){const C=c[L],Y=C.color,N=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=Y.r*N,u+=Y.g*N,f+=Y.b*N;else if(C.isLightProbe)for(let P=0;P<9;P++)n.probe[P].addScaledVector(C.sh.coefficients[P],N);else if(C.isDirectionalLight){const P=e.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(w),C.castShadow){const R=C.shadow,U=t.get(C);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=C.shadow.matrix,m++}n.directional[d]=P,d++}else if(C.isSpotLight){const P=e.get(C);if(P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(w),P.color.copy(Y).multiplyScalar(N),P.distance=O,P.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(w),P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,C.castShadow){const R=C.shadow,U=t.get(C);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=B,n.spotShadowMatrix[x]=C.shadow.matrix,v++}n.spot[x]=P,x++}else if(C.isRectAreaLight){const P=e.get(C);P.color.copy(Y).multiplyScalar(N),P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(w),o.identity(),r.copy(C.matrixWorld),r.premultiply(w),o.extractRotation(r),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),n.rectArea[y]=P,y++}else if(C.isPointLight){const P=e.get(C);if(P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(w),P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){const R=C.shadow,U=t.get(C);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,U.shadowCameraNear=R.camera.near,U.shadowCameraFar=R.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=P,p++}else if(C.isHemisphereLight){const P=e.get(C);P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(w),P.direction.normalize(),P.skyColor.copy(C.color).multiplyScalar(N),P.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[g]=P,g++}}n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==d||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==y||T.hemiLength!==g||T.numDirectionalShadows!==m||T.numPointShadows!==b||T.numSpotShadows!==v)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=b,n.spotShadowMatrix.length=v,T.directionalLength=d,T.pointLength=p,T.spotLength=x,T.rectAreaLength=y,T.hemiLength=g,T.numDirectionalShadows=m,T.numPointShadows=b,T.numSpotShadows=v,n.version=Vy++)}return{setup:s,state:n}}function Cu(){const e=new jy,t=[],n=[];function i(){t.length=0,n.length=0}function r(a){t.push(a)}function o(a){n.push(a)}function s(a){e.setup(t,n,a)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e},setupLights:s,pushLight:r,pushShadow:o}}function qy(){let e=new WeakMap;function t(r){const o=r.target;o.removeEventListener("dispose",t),e.delete(o)}function n(r,o){let s;return e.has(r)===!1?(s=new Cu,e.set(r,new WeakMap),e.get(r).set(o,s),r.addEventListener("dispose",t)):e.get(r).has(o)===!1?(s=new Cu,e.get(r).set(o,s)):s=e.get(r).get(o),s}function i(){e=new WeakMap}return{get:n,dispose:i}}function di(e){De.call(this),this.type="MeshDepthMaterial",this.depthPacking=Bd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}di.prototype=Object.create(De.prototype),di.prototype.constructor=di,di.prototype.isMeshDepthMaterial=!0,di.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function pi(e){De.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}pi.prototype=Object.create(De.prototype),pi.prototype.constructor=pi,pi.prototype.isMeshDistanceMaterial=!0,pi.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var Xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ru(e,t,n){let i=new $r;const r=new H,o=new H,s=new $e,c=[],a=[],l={},h={0:mt,1:Nr,2:Ho},u=new Dt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Yy,fragmentShader:Xy}),f=u.clone();f.defines.HORIZONAL_PASS=1;const d=new de;d.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new et(d,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml,this.render=function(w,T,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const G=e.getRenderTarget(),C=e.getActiveCubeFace(),Y=e.getActiveMipmapLevel(),N=e.state;N.setBlending(On),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,B=w.length;O<B;O++){const P=w[O],R=P.shadow;if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}r.copy(R.mapSize);const U=R.getFrameExtents();if(r.multiply(U),o.copy(R.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(o.x=Math.floor(n/U.x),r.x=o.x*U.x,R.mapSize.x=o.x),r.y>n&&(o.y=Math.floor(n/U.y),r.y=o.y*U.y,R.mapSize.y=o.y)),R.map===null&&!R.isPointLightShadow&&this.type===Dr){const K={minFilter:Mt,magFilter:Mt,format:kt,stencilBuffer:!1};R.map=new Ht(r.x,r.y,K),R.map.texture.name=P.name+".shadowMap",R.mapPass=new Ht(r.x,r.y,K),R.camera.updateProjectionMatrix()}if(R.map===null){const K={minFilter:gt,magFilter:gt,format:kt,stencilBuffer:!1};R.map=new Ht(r.x,r.y,K),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}e.setRenderTarget(R.map),e.clear();const q=R.getViewportCount();for(let K=0;K<q;K++){const te=R.getViewport(K);s.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),N.viewport(s),R.updateMatrices(P,K),i=R.getFrustum(),v(T,L,R.camera,P,this.type)}!R.isPointLightShadow&&this.type===Dr&&y(R,L),R.needsUpdate=!1}x.needsUpdate=!1,e.setRenderTarget(G,C,Y)};function y(w,T){const L=t.update(p);u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(T,null,L,u,p,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(T,null,L,f,p,null)}function g(w,T,L){const G=w<<0|T<<1|L<<2;let C=c[G];return C===void 0&&(C=new di({depthPacking:Od,morphTargets:w,skinning:T}),c[G]=C),C}function m(w,T,L){const G=w<<0|T<<1|L<<2;let C=a[G];return C===void 0&&(C=new pi({morphTargets:w,skinning:T}),a[G]=C),C}function b(w,T,L,G,C,Y,N){let O=null,B=g,P=w.customDepthMaterial;if(G.isPointLight===!0&&(B=m,P=w.customDistanceMaterial),P===void 0){let R=!1;L.morphTargets===!0&&(R=T.morphAttributes&&T.morphAttributes.position&&T.morphAttributes.position.length>0);let U=!1;w.isSkinnedMesh===!0&&(L.skinning===!0?U=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const q=w.isInstancedMesh===!0;O=B(R,U,q)}else O=P;if(e.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0){const R=O.uuid,U=L.uuid;let q=l[R];q===void 0&&(q={},l[R]=q);let K=q[U];K===void 0&&(K=O.clone(),q[U]=K),O=K}return O.visible=L.visible,O.wireframe=L.wireframe,N===Dr?O.side=L.shadowSide!==null?L.shadowSide:L.side:O.side=L.shadowSide!==null?L.shadowSide:h[L.side],O.clipShadows=L.clipShadows,O.clippingPlanes=L.clippingPlanes,O.clipIntersection=L.clipIntersection,O.wireframeLinewidth=L.wireframeLinewidth,O.linewidth=L.linewidth,G.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(G.matrixWorld),O.nearDistance=C,O.farDistance=Y),O}function v(w,T,L,G,C){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Dr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=t.update(w),B=w.material;if(Array.isArray(B)){const P=O.groups;for(let R=0,U=P.length;R<U;R++){const q=P[R],K=B[q.materialIndex];if(K&&K.visible){const te=b(w,O,K,G,L.near,L.far,C);e.renderBufferDirect(L,null,O,te,w,q)}}}else if(B.visible){const P=b(w,O,B,G,L.near,L.far,C);e.renderBufferDirect(L,null,O,P,w,null)}}const N=w.children;for(let O=0,B=N.length;O<B;O++)v(N[O],T,L,G,C)}}function Jy(e,t,n){const i=n.isWebGL2;function r(){let I=!1;const ie=new $e;let re=null;const Me=new $e(0,0,0,0);return{setMask:function(Q){re!==Q&&!I&&(e.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){I=Q},setClear:function(Q,J,_e,ge,he){he===!0&&(Q*=ge,J*=ge,_e*=ge),ie.set(Q,J,_e,ge),Me.equals(ie)===!1&&(e.clearColor(Q,J,_e,ge),Me.copy(ie))},reset:function(){I=!1,re=null,Me.set(-1,0,0,0)}}}function o(){let I=!1,ie=null,re=null,Me=null;return{setTest:function(Q){Q?pe(2929):ye(2929)},setMask:function(Q){ie!==Q&&!I&&(e.depthMask(Q),ie=Q)},setFunc:function(Q){if(re!==Q){if(Q)switch(Q){case Sf:e.depthFunc(512);break;case Ef:e.depthFunc(519);break;case Tf:e.depthFunc(513);break;case Ca:e.depthFunc(515);break;case Af:e.depthFunc(514);break;case Lf:e.depthFunc(518);break;case Cf:e.depthFunc(516);break;case Rf:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);re=Q}},setLocked:function(Q){I=Q},setClear:function(Q){Me!==Q&&(e.clearDepth(Q),Me=Q)},reset:function(){I=!1,ie=null,re=null,Me=null}}}function s(){let I=!1,ie=null,re=null,Me=null,Q=null,J=null,_e=null,ge=null,he=null;return{setTest:function(ve){I||(ve?pe(2960):ye(2960))},setMask:function(ve){ie!==ve&&!I&&(e.stencilMask(ve),ie=ve)},setFunc:function(ve,Je,At){(re!==ve||Me!==Je||Q!==At)&&(e.stencilFunc(ve,Je,At),re=ve,Me=Je,Q=At)},setOp:function(ve,Je,At){(J!==ve||_e!==Je||ge!==At)&&(e.stencilOp(ve,Je,At),J=ve,_e=Je,ge=At)},setLocked:function(ve){I=ve},setClear:function(ve){he!==ve&&(e.clearStencil(ve),he=ve)},reset:function(){I=!1,ie=null,re=null,Me=null,Q=null,J=null,_e=null,ge=null,he=null}}}const c=new r,a=new o,l=new s;let h={},u=null,f=null,d=null,p=null,x=null,y=null,g=null,m=null,b=null,v=!1,w=null,T=null,L=null,G=null,C=null;const Y=e.getParameter(35661);let N=!1,O=0;const B=e.getParameter(7938);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL\ ([0-9])/.exec(B)[1]),N=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(B)[1]),N=O>=2);let P=null,R={};const U=new $e,q=new $e;function K(I,ie,re){const Me=new Uint8Array(4),Q=e.createTexture();e.bindTexture(I,Q),e.texParameteri(I,10241,9728),e.texParameteri(I,10240,9728);for(let J=0;J<re;J++)e.texImage2D(ie+J,0,6408,1,1,0,6408,5121,Me);return Q}const te={};te[3553]=K(3553,3553,1),te[34067]=K(34067,34069,6),c.setClear(0,0,0,1),a.setClear(1),l.setClear(0),pe(2929),a.setFunc(Ca),Ye(!1),Re(wl),pe(2884),ze(On);function pe(I){h[I]!==!0&&(e.enable(I),h[I]=!0)}function ye(I){h[I]!==!1&&(e.disable(I),h[I]=!1)}function Oe(I){return u!==I?(e.useProgram(I),u=I,!0):!1}const Ae={[Di]:32774,[df]:32778,[pf]:32779};if(i)Ae[Ll]=32775,Ae[Cl]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(Ae[Ll]=I.MIN_EXT,Ae[Cl]=I.MAX_EXT)}const qe={[mf]:0,[gf]:1,[yf]:768,[Rl]:770,[Mf]:776,[bf]:774,[vf]:772,[xf]:769,[Pl]:771,[wf]:775,[_f]:773};function ze(I,ie,re,Me,Q,J,_e,ge){if(I===On){f&&(ye(3042),f=!1);return}if(f||(pe(3042),f=!0),I!==ff){if(I!==d||ge!==v){if((p!==Di||g!==Di)&&(e.blendEquation(32774),p=Di,g=Di),ge)switch(I){case Br:e.blendFuncSeparate(1,771,1,771);break;case El:e.blendFunc(1,1);break;case Tl:e.blendFuncSeparate(0,0,769,771);break;case Al:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Br:e.blendFuncSeparate(770,771,1,771);break;case El:e.blendFunc(770,1);break;case Tl:e.blendFunc(0,769);break;case Al:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,m=null,b=null,d=I,v=ge}return}Q=Q||ie,J=J||re,_e=_e||Me,(ie!==p||Q!==g)&&(e.blendEquationSeparate(Ae[ie],Ae[Q]),p=ie,g=Q),(re!==x||Me!==y||J!==m||_e!==b)&&(e.blendFuncSeparate(qe[re],qe[Me],qe[J],qe[_e]),x=re,y=Me,m=J,b=_e),d=I,v=null}function j(I,ie){I.side===Ho?ye(2884):pe(2884);let re=I.side===mt;ie&&(re=!re),Ye(re),I.blending===Br&&I.transparent===!1?ze(On):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),c.setMask(I.colorWrite);const Me=I.stencilWrite;l.setTest(Me),Me&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits)}function Ye(I){w!==I&&(I?e.frontFace(2304):e.frontFace(2305),w=I)}function Re(I){I!==lf?(pe(2884),I!==T&&(I===wl?e.cullFace(1029):I===uf?e.cullFace(1028):e.cullFace(1032))):ye(2884),T=I}function Pe(I){I!==L&&(N&&e.lineWidth(I),L=I)}function Le(I,ie,re){I?(pe(32823),(G!==ie||C!==re)&&(e.polygonOffset(ie,re),G=ie,C=re)):ye(32823)}function V(I){I?pe(3089):ye(3089)}function Z(I){I===void 0&&(I=33984+Y-1),P!==I&&(e.activeTexture(I),P=I)}function ne(I,ie){P===null&&Z();let re=R[P];re===void 0&&(re={type:void 0,texture:void 0},R[P]=re),(re.type!==I||re.texture!==ie)&&(e.bindTexture(I,ie||te[I]),re.type=I,re.texture=ie)}function oe(){const I=R[P];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{e.texImage2D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function S(){try{e.texImage3D.apply(e,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(I){U.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),U.copy(I))}function ee(I){q.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function X(){h={},P=null,R={},u=null,d=null,w=null,T=null,c.reset(),a.reset(),l.reset()}return{buffers:{color:c,depth:a,stencil:l},enable:pe,disable:ye,useProgram:Oe,setBlending:ze,setMaterial:j,setFlipSided:Ye,setCullFace:Re,setLineWidth:Pe,setPolygonOffset:Le,setScissorTest:V,activeTexture:Z,bindTexture:ne,unbindTexture:oe,compressedTexImage2D:$,texImage2D:xe,texImage3D:S,scissor:A,viewport:ee,reset:X}}function Zy(e,t,n,i,r,o,s){const c=r.isWebGL2,a=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=new WeakMap;let d,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,A){return p?new OffscreenCanvas(S,A):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(S,A,ee,X){let I=1;if((S.width>X||S.height>X)&&(I=X/Math.max(S.width,S.height)),I<1||A===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ie=A?Ue.floorPowerOfTwo:Math.floor,re=ie(I*S.width),Me=ie(I*S.height);d===void 0&&(d=x(re,Me));const Q=ee?x(re,Me):d;return Q.width=re,Q.height=Me,Q.getContext("2d").drawImage(S,0,0,re,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+re+"x"+Me+")."),Q}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return Ue.isPowerOfTwo(S.width)&&Ue.isPowerOfTwo(S.height)}function m(S){return c?!1:S.wrapS!==Pt||S.wrapT!==Pt||S.minFilter!==gt&&S.minFilter!==Mt}function b(S,A){return S.generateMipmaps&&A&&S.minFilter!==gt&&S.minFilter!==Mt}function v(S,A,ee,X){e.generateMipmap(S);const I=i.get(A);I.__maxMipLevel=Math.log(Math.max(ee,X))*Math.LOG2E}function w(S,A,ee){if(c===!1)return A;if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=A;return A===6403&&(ee===5126&&(X=33326),ee===5131&&(X=33325),ee===5121&&(X=33321)),A===6407&&(ee===5126&&(X=34837),ee===5131&&(X=34843),ee===5121&&(X=32849)),A===6408&&(ee===5126&&(X=34836),ee===5131&&(X=34842),ee===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&t.get("EXT_color_buffer_float"),X}function T(S){return S===gt||S===Na||S===Ba?9728:9729}function L(S){const A=S.target;A.removeEventListener("dispose",L),C(A),A.isVideoTexture&&f.delete(A),s.memory.textures--}function G(S){const A=S.target;A.removeEventListener("dispose",G),Y(A),s.memory.textures--}function C(S){const A=i.get(S);A.__webglInit!==void 0&&(e.deleteTexture(A.__webglTexture),i.remove(S))}function Y(S){const A=i.get(S),ee=i.get(S.texture);if(S){if(ee.__webglTexture!==void 0&&e.deleteTexture(ee.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)e.deleteFramebuffer(A.__webglFramebuffer[X]),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer[X]);else e.deleteFramebuffer(A.__webglFramebuffer),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&e.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer&&e.deleteRenderbuffer(A.__webglColorRenderbuffer),A.__webglDepthRenderbuffer&&e.deleteRenderbuffer(A.__webglDepthRenderbuffer);i.remove(S.texture),i.remove(S)}}let N=0;function O(){N=0}function B(){const S=N;return S>=a&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a),N+=1,S}function P(S,A){const ee=i.get(S);if(S.isVideoTexture&&Z(S),S.version>0&&ee.__version!==S.version){const X=S.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ee,S,A);return}}n.activeTexture(33984+A),n.bindTexture(3553,ee.__webglTexture)}function R(S,A){const ee=i.get(S);if(S.version>0&&ee.__version!==S.version){Ae(ee,S,A);return}n.activeTexture(33984+A),n.bindTexture(35866,ee.__webglTexture)}function U(S,A){const ee=i.get(S);if(S.version>0&&ee.__version!==S.version){Ae(ee,S,A);return}n.activeTexture(33984+A),n.bindTexture(32879,ee.__webglTexture)}function q(S,A){if(S.image.length!==6)return;const ee=i.get(S);if(S.version>0&&ee.__version!==S.version){Oe(ee,S),n.activeTexture(33984+A),n.bindTexture(34067,ee.__webglTexture),e.pixelStorei(37440,S.flipY);const X=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),I=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let he=0;he<6;he++)!X&&!I?ie[he]=y(S.image[he],!1,!0,l):ie[he]=I?S.image[he].image:S.image[he];const re=ie[0],Me=g(re)||c,Q=o.convert(S.format),J=o.convert(S.type),_e=w(S.internalFormat,Q,J);ye(34067,S,Me);let ge;if(X){for(let he=0;he<6;he++){ge=ie[he].mipmaps;for(let ve=0;ve<ge.length;ve++){const Je=ge[ve];S.format!==kt&&S.format!==ci?Q!==null?n.compressedTexImage2D(34069+he,ve,_e,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+he,ve,_e,Je.width,Je.height,0,Q,J,Je.data)}}ee.__maxMipLevel=ge.length-1}else{ge=S.mipmaps;for(let he=0;he<6;he++)if(I){n.texImage2D(34069+he,0,_e,ie[he].width,ie[he].height,0,Q,J,ie[he].data);for(let ve=0;ve<ge.length;ve++){const At=ge[ve].image[he].image;n.texImage2D(34069+he,ve+1,_e,At.width,At.height,0,Q,J,At.data)}}else{n.texImage2D(34069+he,0,_e,Q,J,ie[he]);for(let ve=0;ve<ge.length;ve++){const Je=ge[ve];n.texImage2D(34069+he,ve+1,_e,Q,J,Je.image[he])}}ee.__maxMipLevel=ge.length}b(S,Me)&&v(34067,S,re.width,re.height),ee.__version=S.version,S.onUpdate&&S.onUpdate(S)}else n.activeTexture(33984+A),n.bindTexture(34067,ee.__webglTexture)}function K(S,A){n.activeTexture(33984+A),n.bindTexture(34067,i.get(S).__webglTexture)}const te={[jo]:10497,[Pt]:33071,[qo]:33648},pe={[gt]:9728,[Na]:9984,[Ba]:9986,[Mt]:9729,[Dl]:9985,[Xo]:9987};function ye(S,A,ee){ee?(e.texParameteri(S,10242,te[A.wrapS]),e.texParameteri(S,10243,te[A.wrapT]),(S===32879||S===35866)&&e.texParameteri(S,32882,te[A.wrapR]),e.texParameteri(S,10240,pe[A.magFilter]),e.texParameteri(S,10241,pe[A.minFilter])):(e.texParameteri(S,10242,33071),e.texParameteri(S,10243,33071),(S===32879||S===35866)&&e.texParameteri(S,32882,33071),(A.wrapS!==Pt||A.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(S,10240,T(A.magFilter)),e.texParameteri(S,10241,T(A.minFilter)),A.minFilter!==gt&&A.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const X=t.get("EXT_texture_filter_anisotropic");if(X){if(A.type===Fn&&t.get("OES_texture_float_linear")===null||A.type===Zo&&(c||t.get("OES_texture_half_float_linear"))===null)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(e.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Oe(S,A){S.__webglInit===void 0&&(S.__webglInit=!0,A.addEventListener("dispose",L),S.__webglTexture=e.createTexture(),s.memory.textures++)}function Ae(S,A,ee){let X=3553;A.isDataTexture2DArray&&(X=35866),A.isDataTexture3D&&(X=32879),Oe(S,A),n.activeTexture(33984+ee),n.bindTexture(X,S.__webglTexture),e.pixelStorei(37440,A.flipY),e.pixelStorei(37441,A.premultiplyAlpha),e.pixelStorei(3317,A.unpackAlignment);const I=m(A)&&g(A.image)===!1,ie=y(A.image,I,!1,h),re=g(ie)||c,Me=o.convert(A.format);let Q=o.convert(A.type),J=w(A.internalFormat,Me,Q);ye(X,A,re);let _e;const ge=A.mipmaps;if(A.isDepthTexture)J=6402,c?A.type===Fn?J=36012:A.type===Jo?J=33190:A.type===Ur?J=35056:J=33189:A.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Bi&&J===6402&&A.type!==Yo&&A.type!==Jo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Yo,Q=o.convert(A.type)),A.format===Gr&&J===6402&&(J=34041,A.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ur,Q=o.convert(A.type))),n.texImage2D(3553,0,J,ie.width,ie.height,0,Me,Q,null);else if(A.isDataTexture)if(ge.length>0&&re){for(let he=0,ve=ge.length;he<ve;he++)_e=ge[he],n.texImage2D(3553,he,J,_e.width,_e.height,0,Me,Q,_e.data);A.generateMipmaps=!1,S.__maxMipLevel=ge.length-1}else n.texImage2D(3553,0,J,ie.width,ie.height,0,Me,Q,ie.data),S.__maxMipLevel=0;else if(A.isCompressedTexture){for(let he=0,ve=ge.length;he<ve;he++)_e=ge[he],A.format!==kt&&A.format!==ci?Me!==null?n.compressedTexImage2D(3553,he,J,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,he,J,_e.width,_e.height,0,Me,Q,_e.data);S.__maxMipLevel=ge.length-1}else if(A.isDataTexture2DArray)n.texImage3D(35866,0,J,ie.width,ie.height,ie.depth,0,Me,Q,ie.data),S.__maxMipLevel=0;else if(A.isDataTexture3D)n.texImage3D(32879,0,J,ie.width,ie.height,ie.depth,0,Me,Q,ie.data),S.__maxMipLevel=0;else if(ge.length>0&&re){for(let he=0,ve=ge.length;he<ve;he++)_e=ge[he],n.texImage2D(3553,he,J,Me,Q,_e);A.generateMipmaps=!1,S.__maxMipLevel=ge.length-1}else n.texImage2D(3553,0,J,Me,Q,ie),S.__maxMipLevel=0;b(A,re)&&v(X,A,ie.width,ie.height),S.__version=A.version,A.onUpdate&&A.onUpdate(A)}function qe(S,A,ee,X){const I=o.convert(A.texture.format),ie=o.convert(A.texture.type),re=w(A.texture.internalFormat,I,ie);n.texImage2D(X,0,re,A.width,A.height,0,I,ie,null),e.bindFramebuffer(36160,S),e.framebufferTexture2D(36160,ee,X,i.get(A.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function ze(S,A,ee){if(e.bindRenderbuffer(36161,S),A.depthBuffer&&!A.stencilBuffer){let X=33189;if(ee){const I=A.depthTexture;I&&I.isDepthTexture&&(I.type===Fn?X=36012:I.type===Jo&&(X=33190));const ie=V(A);e.renderbufferStorageMultisample(36161,ie,X,A.width,A.height)}else e.renderbufferStorage(36161,X,A.width,A.height);e.framebufferRenderbuffer(36160,36096,36161,S)}else if(A.depthBuffer&&A.stencilBuffer){if(ee){const X=V(A);e.renderbufferStorageMultisample(36161,X,35056,A.width,A.height)}else e.renderbufferStorage(36161,34041,A.width,A.height);e.framebufferRenderbuffer(36160,33306,36161,S)}else{const X=o.convert(A.texture.format),I=o.convert(A.texture.type),ie=w(A.texture.internalFormat,X,I);if(ee){const re=V(A);e.renderbufferStorageMultisample(36161,re,ie,A.width,A.height)}else e.renderbufferStorage(36161,ie,A.width,A.height)}e.bindRenderbuffer(36161,null)}function j(S,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,S),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),P(A.depthTexture,0);const X=i.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===Bi)e.framebufferTexture2D(36160,36096,3553,X,0);else if(A.depthTexture.format===Gr)e.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function Ye(S){const A=i.get(S),ee=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");j(A.__webglFramebuffer,S)}else if(ee){A.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(36160,A.__webglFramebuffer[X]),A.__webglDepthbuffer[X]=e.createRenderbuffer(),ze(A.__webglDepthbuffer[X],S,!1)}else e.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=e.createRenderbuffer(),ze(A.__webglDepthbuffer,S,!1);e.bindFramebuffer(36160,null)}function Re(S){const A=i.get(S),ee=i.get(S.texture);S.addEventListener("dispose",G),ee.__webglTexture=e.createTexture(),s.memory.textures++;const X=S.isWebGLCubeRenderTarget===!0,I=S.isWebGLMultisampleRenderTarget===!0,ie=g(S)||c;if(c&&S.texture.format===ci&&(S.texture.type===Fn||S.texture.type===Zo)&&(S.texture.format=kt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),X){A.__webglFramebuffer=[];for(let re=0;re<6;re++)A.__webglFramebuffer[re]=e.createFramebuffer()}else if(A.__webglFramebuffer=e.createFramebuffer(),I)if(c){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,A.__webglColorRenderbuffer);const re=o.convert(S.texture.format),Me=o.convert(S.texture.type),Q=w(S.texture.internalFormat,re,Me),J=V(S);e.renderbufferStorageMultisample(36161,J,Q,S.width,S.height),e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,A.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),S.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),ze(A.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(X){n.bindTexture(34067,ee.__webglTexture),ye(34067,S.texture,ie);for(let re=0;re<6;re++)qe(A.__webglFramebuffer[re],S,36064,34069+re);b(S.texture,ie)&&v(34067,S.texture,S.width,S.height),n.bindTexture(34067,null)}else n.bindTexture(3553,ee.__webglTexture),ye(3553,S.texture,ie),qe(A.__webglFramebuffer,S,36064,3553),b(S.texture,ie)&&v(3553,S.texture,S.width,S.height),n.bindTexture(3553,null);S.depthBuffer&&Ye(S)}function Pe(S){const A=S.texture,ee=g(S)||c;if(b(A,ee)){const X=S.isWebGLCubeRenderTarget?34067:3553,I=i.get(A).__webglTexture;n.bindTexture(X,I),v(X,A,S.width,S.height),n.bindTexture(X,null)}}function Le(S){if(S.isWebGLMultisampleRenderTarget)if(c){const A=i.get(S);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);const ee=S.width,X=S.height;let I=16384;S.depthBuffer&&(I|=256),S.stencilBuffer&&(I|=1024),e.blitFramebuffer(0,0,ee,X,0,0,ee,X,I,9728),e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function V(S){return c&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function Z(S){const A=s.render.frame;f.get(S)!==A&&(f.set(S,A),S.update())}let ne=!1,oe=!1;function $(S,A){S&&S.isWebGLRenderTarget&&(ne===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ne=!0),S=S.texture),P(S,A)}function xe(S,A){S&&S.isWebGLCubeRenderTarget&&(oe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),oe=!0),S=S.texture),S&&S.isCubeTexture||Array.isArray(S.image)&&S.image.length===6?q(S,A):K(S,A)}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=P,this.setTexture2DArray=R,this.setTexture3D=U,this.setTextureCube=q,this.setTextureCubeDynamic=K,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Le,this.safeSetTexture2D=$,this.safeSetTextureCube=xe}function $y(e,t,n){const i=n.isWebGL2;function r(o){let s;if(o===Fr)return 5121;if(o===kf)return 32819;if(o===Hf)return 32820;if(o===Vf)return 33635;if(o===Uf)return 5120;if(o===Gf)return 5122;if(o===Yo)return 5123;if(o===zf)return 5124;if(o===Jo)return 5125;if(o===Fn)return 5126;if(o===Zo)return i?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===Wf)return 6406;if(o===ci)return 6407;if(o===kt)return 6408;if(o===jf)return 6409;if(o===qf)return 6410;if(o===Bi)return 6402;if(o===Gr)return 34041;if(o===Yf)return 6403;if(o===Jf)return 36244;if(o===Zf)return 33319;if(o===$f)return 33320;if(o===Qf)return 36248;if(o===Kf)return 36249;if(o===Nl||o===Bl||o===Ol||o===Fl)if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ul||o===Gl||o===zl||o===kl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===ed)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((o===Hl||o===Vl)&&(s=t.get("WEBGL_compressed_texture_etc"),s!==null)){if(o===Hl)return s.COMPRESSED_RGB8_ETC2;if(o===Vl)return s.COMPRESSED_RGBA8_ETC2_EAC}if(o===td||o===nd||o===id||o===rd||o===od||o===sd||o===ad||o===cd||o===ld||o===ud||o===hd||o===fd||o===dd||o===pd||o===gd||o===yd||o===xd||o===vd||o===_d||o===bd||o===wd||o===Md||o===Sd||o===Ed||o===Td||o===Ad||o===Ld||o===Cd)return s=t.get("WEBGL_compressed_texture_astc"),s!==null?o:null;if(o===md)return s=t.get("EXT_texture_compression_bptc"),s!==null?o:null;if(o===Ur)return i?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function gc(e){dt.call(this),this.cameras=e||[]}gc.prototype=Object.assign(Object.create(dt.prototype),{constructor:gc,isArrayCamera:!0});function Xn(){se.call(this),this.type="Group"}Xn.prototype=Object.assign(Object.create(se.prototype),{constructor:Xn,isGroup:!0});function no(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(no.prototype,{constructor:no,getHandSpace:function(){if(this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){let t=new Xn;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,c=this._grip,a=this._hand;if(e)if(e.hand){o=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){let h=t.getJointPose(e.hand[l],n);const u=a.joints[l];h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=h.radius),u.visible=h!==null;const f=a.joints[window.XRHand.INDEX_PHALANX_TIP],d=a.joints[window.XRHand.THUMB_PHALANX_TIP],p=f.position.distanceTo(d.position),x=.02,y=.005;a.inputState.pinching&&p>x+y?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&p<=x-y&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else s!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale))),c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale)));return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}});function Pu(e,t){const n=this;let i=null,r=1,o=null,s="local-floor",c=null;const a=[],l=new Map,h=new dt;h.layers.enable(1),h.viewport=new $e;const u=new dt;u.layers.enable(2),u.viewport=new $e;const f=[h,u],d=new gc;d.layers.enable(1),d.layers.enable(2);let p=null,x=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=a[N];return O===void 0&&(O=new no,a[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=a[N];return O===void 0&&(O=new no,a[N]=O),O.getGripSpace()},this.getHand=function(N){let O=a[N];return O===void 0&&(O=new no,a[N]=O),O.getHandSpace()};function y(N){const O=l.get(N.inputSource);O&&O.dispatchEvent({type:N.type})}function g(){l.forEach(function(N,O){N.disconnect(O)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(N){o=N,Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return i},this.setSession=function(N){if(i=N,i!==null){i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",g);const O=t.getContextAttributes();O.xrCompatible!==!0&&t.makeXRCompatible();const B={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r},P=new XRWebGLLayer(i,t,B);i.updateRenderState({baseLayer:P}),i.requestReferenceSpace(s).then(m),i.addEventListener("inputsourceschange",b)}};function b(N){const O=i.inputSources;for(let B=0;B<a.length;B++)l.set(O[B],a[B]);for(let B=0;B<N.removed.length;B++){const P=N.removed[B],R=l.get(P);R&&(R.dispatchEvent({type:"disconnected",data:P}),l.delete(P))}for(let B=0;B<N.added.length;B++){const P=N.added[B],R=l.get(P);R&&R.dispatchEvent({type:"connected",data:P})}}const v=new M,w=new M;function T(N,O,B){v.setFromMatrixPosition(O.matrixWorld),w.setFromMatrixPosition(B.matrixWorld);const P=v.distanceTo(w),R=O.projectionMatrix.elements,U=B.projectionMatrix.elements,q=R[14]/(R[10]-1),K=R[14]/(R[10]+1),te=(R[9]+1)/R[5],pe=(R[9]-1)/R[5],ye=(R[8]-1)/R[0],Oe=(U[8]+1)/U[0],Ae=q*ye,qe=q*Oe,ze=P/(-ye+Oe),j=ze*-ye;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(j),N.translateZ(ze),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.getInverse(N.matrixWorld);const Ye=q+ze,Re=K+ze,Pe=Ae-j,Le=qe+(P-j),V=te*K/Re*Ye,Z=pe*K/Re*Ye;N.projectionMatrix.makePerspective(Pe,Le,V,Z,Ye,Re)}function L(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.getInverse(N.matrixWorld)}this.getCamera=function(N){d.near=u.near=h.near=N.near,d.far=u.far=h.far=N.far,(p!==d.near||x!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),p=d.near,x=d.far);const O=N.parent,B=d.cameras;L(d,O);for(let R=0;R<B.length;R++)L(B[R],O);N.matrixWorld.copy(d.matrixWorld);const P=N.children;for(let R=0,U=P.length;R<U;R++)P[R].updateMatrixWorld(!0);return B.length===2?T(d,h,u):d.projectionMatrix.copy(h.projectionMatrix),d};let G=null;function C(N,O){if(c=O.getViewerPose(o),c!==null){const P=c.views,R=i.renderState.baseLayer;e.setFramebuffer(R.framebuffer);let U=!1;P.length!==d.cameras.length&&(d.cameras.length=0,U=!0);for(let q=0;q<P.length;q++){const K=P[q],te=R.getViewport(K),pe=f[q];pe.matrix.fromArray(K.transform.matrix),pe.projectionMatrix.fromArray(K.projectionMatrix),pe.viewport.set(te.x,te.y,te.width,te.height),q===0&&d.matrix.copy(pe.matrix),U===!0&&d.cameras.push(pe)}}const B=i.inputSources;for(let P=0;P<a.length;P++){const R=a[P],U=B[P];R.update(U,O,o)}G&&G(N,O)}const Y=new cu;Y.setAnimationLoop(C),this.setAnimationLoop=function(N){G=N},this.dispose=function(){}}Object.assign(Pu.prototype,wn.prototype);function Qy(e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,b,v,w){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),a(g,m)):m.isMeshToonMaterial?(i(g,m),h(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m,b),m.isMeshPhysicalMaterial?f(g,m,b):u(g,m,b)):m.isMeshMatcapMaterial?(i(g,m),d(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),x(g,m)):m.isMeshNormalMaterial?(i(g,m),y(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?s(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m,b){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const v=m.envMap||b;if(v){g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;var w=e.get(v).__maxMipLevel;w!==void 0&&(g.maxMipLevel.value=w)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap&&(T=m.emissiveMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let L;m.aoMap?L=m.aoMap:m.lightMap&&(L=m.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uv2Transform.value.copy(L.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function s(g,m,b,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=v*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix))}function a(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===mt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===mt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===mt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===mt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m,b){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===mt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===mt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),(m.envMap||b)&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){u(g,m,b),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===mt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function d(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===mt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===mt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function x(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function y(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===mt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===mt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function io(e){e=e||{};const t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,o=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,c=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,a=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",h=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let u=null,f=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=It,this.physicallyCorrectLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const d=this;let p=!1,x=null,y=0,g=0,m=null,b=null,v=-1,w=null,T=null;const L=new $e,G=new $e;let C=null,Y=t.width,N=t.height,O=1,B=null,P=null;const R=new $e(0,0,Y,N),U=new $e(0,0,Y,N);let q=!1;const K=new $r,te=new Cg;let pe=!1,ye=!1;const Oe=new Ge,Ae=new M,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return m===null?O:1}let j=n;function Ye(E,z){for(let F=0;F<E.length;F++){const k=E[F],ce=t.getContext(k,z);if(ce!==null)return ce}return null}try{const E={alpha:i,depth:r,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:h};if(t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Je,!1),j===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),j=Ye(z,E),j===null)throw Ye(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,Pe,Le,V,Z,ne,oe,$,xe,S,A,ee,X,I,ie,re,Me,Q,J;function _e(){Re=new Rg(j),Pe=new Lg(j,Re,e),Pe.isWebGL2===!1&&(Re.get("WEBGL_depth_texture"),Re.get("OES_texture_float"),Re.get("OES_texture_half_float"),Re.get("OES_texture_half_float_linear"),Re.get("OES_standard_derivatives"),Re.get("OES_element_index_uint"),Re.get("OES_vertex_array_object"),Re.get("ANGLE_instanced_arrays")),Re.get("OES_texture_float_linear"),Q=new $y(j,Re,Pe),Le=new Jy(j,Re,Pe),Le.scissor(G.copy(U).multiplyScalar(O).floor()),Le.viewport(L.copy(R).multiplyScalar(O).floor()),V=new Dg,Z=new Fy,ne=new Zy(j,Re,Le,Z,Pe,Q,V),oe=new ip(j,Pe),J=new Tg(j,Re,oe,Pe),$=new Pg(j,oe,V,J),xe=new Fg(j,$,oe,V),ie=new Og(j),S=new Oy(d,Re,Pe,J),A=new Qy(Z),ee=new zy(Z),X=new qy,I=new Eg(d,Le,xe,c),re=new Ag(j,Re,V,Pe),Me=new Ig(j,Re,V,Pe),V.programs=S.programs,d.capabilities=Pe,d.extensions=Re,d.properties=Z,d.renderLists=ee,d.state=Le,d.info=V}_e();const ge=new Pu(d,j);this.xr=ge;const he=new Ru(d,xe,Pe.maxTextureSize);this.shadowMap=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(Y,N,!1))},this.getSize=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),E=new H),E.set(Y,N)},this.setSize=function(E,z,F){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,N=z,t.width=Math.floor(E*O),t.height=Math.floor(z*O),F!==!1&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),E=new H),E.set(Y*O,N*O).floor()},this.setDrawingBufferSize=function(E,z,F){Y=E,N=z,O=F,t.width=Math.floor(E*F),t.height=Math.floor(z*F),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),E=new $e),E.copy(L)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,z,F,k){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,z,F,k),Le.viewport(L.copy(R).multiplyScalar(O).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,z,F,k){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,z,F,k),Le.scissor(G.copy(U).multiplyScalar(O).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){Le.setScissorTest(q=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){P=E},this.getClearColor=function(){return I.getClearColor()},this.setClearColor=function(){I.setClearColor.apply(I,arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha.apply(I,arguments)},this.clear=function(E,z,F){let k=0;(E===void 0||E)&&(k|=16384),(z===void 0||z)&&(k|=256),(F===void 0||F)&&(k|=1024),j.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Je,!1),ee.dispose(),X.dispose(),Z.dispose(),xe.dispose(),J.dispose(),ge.dispose(),si.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Je(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,_e()}function At(E){const z=E.target;z.removeEventListener("dispose",At),Sa(z)}function Sa(E){Uo(E),Z.remove(E)}function Uo(E){const z=Z.get(E).program;z!==void 0&&S.releaseProgram(z)}function Bn(E,z){E.render(function(F){d.renderBufferImmediate(F,z)})}this.renderBufferImmediate=function(E,z){J.initAttributes();const F=Z.get(E);E.hasPositions&&!F.position&&(F.position=j.createBuffer()),E.hasNormals&&!F.normal&&(F.normal=j.createBuffer()),E.hasUvs&&!F.uv&&(F.uv=j.createBuffer()),E.hasColors&&!F.color&&(F.color=j.createBuffer());const k=z.getAttributes();E.hasPositions&&(j.bindBuffer(34962,F.position),j.bufferData(34962,E.positionArray,35048),J.enableAttribute(k.position),j.vertexAttribPointer(k.position,3,5126,!1,0,0)),E.hasNormals&&(j.bindBuffer(34962,F.normal),j.bufferData(34962,E.normalArray,35048),J.enableAttribute(k.normal),j.vertexAttribPointer(k.normal,3,5126,!1,0,0)),E.hasUvs&&(j.bindBuffer(34962,F.uv),j.bufferData(34962,E.uvArray,35048),J.enableAttribute(k.uv),j.vertexAttribPointer(k.uv,2,5126,!1,0,0)),E.hasColors&&(j.bindBuffer(34962,F.color),j.bufferData(34962,E.colorArray,35048),J.enableAttribute(k.color),j.vertexAttribPointer(k.color,3,5126,!1,0,0)),J.disableUnusedAttributes(),j.drawArrays(4,0,E.count),E.count=0},this.renderBufferDirect=function(E,z,F,k,ce,He){z===null&&(z=qe);const be=ce.isMesh&&ce.matrixWorld.determinant()<0,fe=zo(E,z,k,ce);Le.setMaterial(k,be);let nt=F.index;const ot=F.attributes.position;if(nt===null){if(ot===void 0||ot.count===0)return}else if(nt.count===0)return;let Qe=1;k.wireframe===!0&&(nt=$.getWireframeAttribute(F),Qe=2),(k.morphTargets||k.morphNormals)&&ie.update(ce,F,k,fe),J.setup(ce,k,fe,F,nt);let lt,Fe=re;nt!==null&&(lt=oe.get(nt),Fe=Me,Fe.setIndex(lt));const st=nt!==null?nt.count:ot.count,_=F.drawRange.start*Qe,D=F.drawRange.count*Qe,W=He!==null?He.start*Qe:0,ae=He!==null?He.count*Qe:1/0,Se=Math.max(_,W),we=Math.min(st,_+D,W+ae)-1,Ie=Math.max(0,we-Se+1);if(Ie!==0){if(ce.isMesh)k.wireframe===!0?(Le.setLineWidth(k.wireframeLinewidth*ze()),Fe.setMode(1)):Fe.setMode(4);else if(ce.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*ze()),ce.isLineSegments?Fe.setMode(1):ce.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else ce.isPoints?Fe.setMode(0):ce.isSprite&&Fe.setMode(4);if(ce.isInstancedMesh)Fe.renderInstances(Se,Ie,ce.count);else if(F.isInstancedBufferGeometry){const Ce=Math.min(F.instanceCount,F._maxInstanceCount);Fe.renderInstances(Se,Ie,Ce)}else Fe.render(Se,Ie)}},this.compile=function(E,z){f=X.get(E,z),f.init(),E.traverse(function(k){k.isLight&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(z);const F=new WeakMap;E.traverse(function(k){let ce=k.material;if(ce)if(Array.isArray(ce))for(let He=0;He<ce.length;He++){let be=ce[He];F.has(be)===!1&&(an(be,E,k),F.set(be))}else F.has(ce)===!1&&(an(ce,E,k),F.set(ce))})};let oi=null;function Ea(E){ge.isPresenting||oi&&oi(E)}const si=new cu;si.setAnimationLoop(Ea),typeof window<"u"&&si.setContext(window),this.setAnimationLoop=function(E){oi=E,ge.setAnimationLoop(E),E===null?si.stop():si.start()},this.render=function(E,z){let F,k;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),F=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),k=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;J.resetDefaultState(),v=-1,w=null,E.autoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(z=ge.getCamera(z)),E.isScene===!0&&E.onBeforeRender(d,E,z,F||m),f=X.get(E,z),f.init(),Oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,pe=te.init(this.clippingPlanes,ye,z),u=ee.get(E,z),u.init(),Ta(E,z,0,d.sortObjects),u.finish(),d.sortObjects===!0&&u.sort(B,P),pe===!0&&te.beginShadows();const ce=f.state.shadowsArray;he.render(ce,E,z),f.setupLights(z),pe===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),F!==void 0&&this.setRenderTarget(F),I.render(u,E,z,k);const He=u.opaque,be=u.transparent;He.length>0&&Aa(He,E,z),be.length>0&&Aa(be,E,z),E.isScene===!0&&E.onAfterRender(d,E,z),m!==null&&(ne.updateRenderTargetMipmap(m),ne.updateMultisampleRenderTarget(m)),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1),u=null,f=null};function Ta(E,z,F,k){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){k&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Oe);const be=xe.update(E),fe=E.material;fe.visible&&u.push(E,be,fe,F,Ae.z,null)}}else if(E.isImmediateRenderObject)k&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Oe),u.push(E,null,E.material,F,Ae.z,null);else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==V.render.frame&&(E.skeleton.update(),E.skeleton.frame=V.render.frame),!E.frustumCulled||K.intersectsObject(E))){k&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Oe);const be=xe.update(E),fe=E.material;if(Array.isArray(fe)){const nt=be.groups;for(let ot=0,Qe=nt.length;ot<Qe;ot++){const lt=nt[ot],Fe=fe[lt.materialIndex];Fe&&Fe.visible&&u.push(E,be,Fe,F,Ae.z,lt)}}else fe.visible&&u.push(E,be,fe,F,Ae.z,null)}}const He=E.children;for(let be=0,fe=He.length;be<fe;be++)Ta(He[be],z,F,k)}function Aa(E,z,F){const k=z.isScene===!0?z.overrideMaterial:null;for(let ce=0,He=E.length;ce<He;ce++){const be=E[ce],fe=be.object,nt=be.geometry,ot=k===null?be.material:k,Qe=be.group;if(F.isArrayCamera){T=F;const lt=F.cameras;for(let Fe=0,st=lt.length;Fe<st;Fe++){const _=lt[Fe];fe.layers.test(_.layers)&&(Le.viewport(L.copy(_.viewport)),f.setupLights(_),Go(fe,z,_,nt,ot,Qe))}}else T=null,Go(fe,z,F,nt,ot,Qe)}}function Go(E,z,F,k,ce,He){if(E.onBeforeRender(d,z,F,k,ce,He),f=X.get(z,T||F),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),E.isImmediateRenderObject){const be=zo(F,z,ce,E);Le.setMaterial(ce),J.reset(),Bn(E,be)}else d.renderBufferDirect(F,z,k,ce,E,He);E.onAfterRender(d,z,F,k,ce,He),f=X.get(z,T||F)}function an(E,z,F){z.isScene!==!0&&(z=qe);const k=Z.get(E),ce=f.state.lights,He=f.state.shadowsArray,be=ce.state.version,fe=S.getParameters(E,ce.state,He,z,te.numPlanes,te.numIntersection,F),nt=S.getProgramCacheKey(fe);let ot=k.program,Qe=!0;if(ot===void 0)E.addEventListener("dispose",At);else if(ot.cacheKey!==nt)Uo(E);else if(k.lightsStateVersion!==be)k.lightsStateVersion=be,Qe=!1;else{if(fe.shaderID!==void 0)return;Qe=!1}Qe&&(fe.uniforms=S.getUniforms(E,fe),E.onBeforeCompile(fe,d),ot=S.acquireProgram(fe,nt),k.program=ot,k.uniforms=fe.uniforms,k.outputEncoding=fe.outputEncoding);const lt=ot.getAttributes();if(E.morphTargets){E.numSupportedMorphTargets=0;for(let D=0;D<d.maxMorphTargets;D++)lt["morphTarget"+D]>=0&&E.numSupportedMorphTargets++}if(E.morphNormals){E.numSupportedMorphNormals=0;for(let D=0;D<d.maxMorphNormals;D++)lt["morphNormal"+D]>=0&&E.numSupportedMorphNormals++}const Fe=k.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(k.numClippingPlanes=te.numPlanes,k.numIntersection=te.numIntersection,Fe.clippingPlanes=te.uniform),k.environment=E.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.needsLights=vl(E),k.lightsStateVersion=be,k.needsLights&&(Fe.ambientLightColor.value=ce.state.ambient,Fe.lightProbe.value=ce.state.probe,Fe.directionalLights.value=ce.state.directional,Fe.directionalLightShadows.value=ce.state.directionalShadow,Fe.spotLights.value=ce.state.spot,Fe.spotLightShadows.value=ce.state.spotShadow,Fe.rectAreaLights.value=ce.state.rectArea,Fe.pointLights.value=ce.state.point,Fe.pointLightShadows.value=ce.state.pointShadow,Fe.hemisphereLights.value=ce.state.hemi,Fe.directionalShadowMap.value=ce.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Fe.spotShadowMap.value=ce.state.spotShadowMap,Fe.spotShadowMatrix.value=ce.state.spotShadowMatrix,Fe.pointShadowMap.value=ce.state.pointShadowMap,Fe.pointShadowMatrix.value=ce.state.pointShadowMatrix);const st=k.program.getUniforms(),_=qn.seqWithValue(st.seq,Fe);k.uniformsList=_}function zo(E,z,F,k){z.isScene!==!0&&(z=qe),ne.resetTextureUnits();const ce=z.fog,He=F.isMeshStandardMaterial?z.environment:null,be=m===null?d.outputEncoding:m.texture.encoding,fe=Z.get(F),nt=f.state.lights;if(pe===!0&&(ye===!0||E!==w)){const D=E===w&&F.id===v;te.setState(F.clippingPlanes,F.clipIntersection,F.clipShadows,E,fe,D)}F.version===fe.__version?(fe.program===void 0||F.fog&&fe.fog!==ce||fe.environment!==He||fe.needsLights&&fe.lightsStateVersion!==nt.state.version||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==te.numPlanes||fe.numIntersection!==te.numIntersection)||fe.outputEncoding!==be)&&an(F,z,k):(an(F,z,k),fe.__version=F.version);let ot=!1,Qe=!1,lt=!1;const Fe=fe.program,st=Fe.getUniforms(),_=fe.uniforms;if(Le.useProgram(Fe.program)&&(ot=!0,Qe=!0,lt=!0),F.id!==v&&(v=F.id,Qe=!0),ot||w!==E){if(st.setValue(j,"projectionMatrix",E.projectionMatrix),Pe.logarithmicDepthBuffer&&st.setValue(j,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,Qe=!0,lt=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const D=st.map.cameraPosition;D!==void 0&&D.setValue(j,Ae.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&st.setValue(j,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||F.skinning)&&st.setValue(j,"viewMatrix",E.matrixWorldInverse)}if(F.skinning){st.setOptional(j,k,"bindMatrix"),st.setOptional(j,k,"bindMatrixInverse");const D=k.skeleton;if(D){const W=D.bones;if(Pe.floatVertexTextures){if(D.boneTexture===void 0){let ae=Math.sqrt(W.length*4);ae=Ue.ceilPowerOfTwo(ae),ae=Math.max(ae,4);const Se=new Float32Array(ae*ae*4);Se.set(D.boneMatrices);const we=new nr(Se,ae,ae,kt,Fn);D.boneMatrices=Se,D.boneTexture=we,D.boneTextureSize=ae}st.setValue(j,"boneTexture",D.boneTexture,ne),st.setValue(j,"boneTextureSize",D.boneTextureSize)}else st.setOptional(j,D,"boneMatrices")}}return(Qe||fe.receiveShadow!==k.receiveShadow)&&(fe.receiveShadow=k.receiveShadow,st.setValue(j,"receiveShadow",k.receiveShadow)),Qe&&(st.setValue(j,"toneMappingExposure",d.toneMappingExposure),fe.needsLights&&xl(_,lt),ce&&F.fog&&A.refreshFogUniforms(_,ce),A.refreshMaterialUniforms(_,F,He,O,N),_.ltc_1!==void 0&&(_.ltc_1.value=ue.LTC_1),_.ltc_2!==void 0&&(_.ltc_2.value=ue.LTC_2),qn.upload(j,fe.uniformsList,_,ne)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(qn.upload(j,fe.uniformsList,_,ne),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&st.setValue(j,"center",k.center),st.setValue(j,"modelViewMatrix",k.modelViewMatrix),st.setValue(j,"normalMatrix",k.normalMatrix),st.setValue(j,"modelMatrix",k.matrixWorld),Fe}function xl(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function vl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.setFramebuffer=function(E){x!==E&&m===null&&j.bindFramebuffer(36160,E),x=E},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return m},this.setRenderTarget=function(E,z,F){m=E,y=z,g=F,E&&Z.get(E).__webglFramebuffer===void 0&&ne.setupRenderTarget(E);let k=x,ce=!1;if(E){const He=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(k=He[z||0],ce=!0):E.isWebGLMultisampleRenderTarget?k=Z.get(E).__webglMultisampledFramebuffer:k=He,L.copy(E.viewport),G.copy(E.scissor),C=E.scissorTest}else L.copy(R).multiplyScalar(O).floor(),G.copy(U).multiplyScalar(O).floor(),C=q;if(b!==k&&(j.bindFramebuffer(36160,k),b=k),Le.viewport(L),Le.scissor(G),Le.setScissorTest(C),ce){const He=Z.get(E.texture);j.framebufferTexture2D(36160,36064,34069+(z||0),He.__webglTexture,F||0)}},this.readRenderTargetPixels=function(E,z,F,k,ce,He,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(fe=fe[be]),fe){let nt=!1;fe!==b&&(j.bindFramebuffer(36160,fe),nt=!0);try{const ot=E.texture,Qe=ot.format,lt=ot.type;if(Qe!==kt&&Q.convert(Qe)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt!==Fr&&Q.convert(lt)!==j.getParameter(35738)&&!(lt===Fn&&(Pe.isWebGL2||Re.get("OES_texture_float")||Re.get("WEBGL_color_buffer_float")))&&!(lt===Zo&&(Pe.isWebGL2?Re.get("EXT_color_buffer_float"):Re.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j.checkFramebufferStatus(36160)===36053?z>=0&&z<=E.width-k&&F>=0&&F<=E.height-ce&&j.readPixels(z,F,k,ce,Q.convert(Qe),Q.convert(lt),He):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{nt&&j.bindFramebuffer(36160,b)}}},this.copyFramebufferToTexture=function(E,z,F){F===void 0&&(F=0);const k=Math.pow(2,-F),ce=Math.floor(z.image.width*k),He=Math.floor(z.image.height*k),be=Q.convert(z.format);ne.setTexture2D(z,0),j.copyTexImage2D(3553,F,be,E.x,E.y,ce,He,0),Le.unbindTexture()},this.copyTextureToTexture=function(E,z,F,k){k===void 0&&(k=0);const ce=z.image.width,He=z.image.height,be=Q.convert(F.format),fe=Q.convert(F.type);ne.setTexture2D(F,0),j.pixelStorei(37440,F.flipY),j.pixelStorei(37441,F.premultiplyAlpha),j.pixelStorei(3317,F.unpackAlignment),z.isDataTexture?j.texSubImage2D(3553,k,E.x,E.y,ce,He,be,fe,z.image.data):z.isCompressedTexture?j.compressedTexSubImage2D(3553,k,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):j.texSubImage2D(3553,k,E.x,E.y,be,fe,z.image),k===0&&F.generateMipmaps&&j.generateMipmap(3553),Le.unbindTexture()},this.initTexture=function(E){ne.setTexture2D(E,0),Le.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Iu(e){io.call(this,e)}Iu.prototype=Object.assign(Object.create(io.prototype),{constructor:Iu,isWebGL1Renderer:!0});function yc(e,t){this.name="",this.color=new me(e),this.density=t!==void 0?t:25e-5}Object.assign(yc.prototype,{isFogExp2:!0,clone:function(){return new yc(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function xc(e,t,n){this.name="",this.color=new me(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}Object.assign(xc.prototype,{isFog:!0,clone:function(){return new xc(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function jt(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ts,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ue.generateUUID()}Object.defineProperty(jt.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(jt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ue.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new jt(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ue.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const mi=new M;function gi(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(gi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}}),Object.assign(gi.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)mi.x=this.getX(t),mi.y=this.getY(t),mi.z=this.getZ(t),mi.applyMatrix4(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ee(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function yi(e){De.call(this),this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}yi.prototype=Object.create(De.prototype),yi.prototype.constructor=yi,yi.prototype.isSpriteMaterial=!0,yi.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let sr;const ro=new M,ar=new M,cr=new M,lr=new H,oo=new H,Du=new Ge,bs=new M,so=new M,ws=new M,Nu=new H,vc=new H,Bu=new H;function _c(e){if(se.call(this),this.type="Sprite",sr===void 0){sr=new de;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jt(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new gi(n,3,0,!1)),sr.setAttribute("uv",new gi(n,2,3,!1))}this.geometry=sr,this.material=e!==void 0?e:new yi,this.center=new H(.5,.5)}_c.prototype=Object.assign(Object.create(se.prototype),{constructor:_c,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Du.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-cr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ms(bs.set(-.5,-.5,0),cr,o,ar,i,r),Ms(so.set(.5,-.5,0),cr,o,ar,i,r),Ms(ws.set(.5,.5,0),cr,o,ar,i,r),Nu.set(0,0),vc.set(1,0),Bu.set(1,1);let s=e.ray.intersectTriangle(bs,so,ws,!1,ro);if(s===null&&(Ms(so.set(-.5,.5,0),cr,o,ar,i,r),vc.set(0,1),s=e.ray.intersectTriangle(bs,ws,so,!1,ro),s===null))return;const c=e.ray.origin.distanceTo(ro);c<e.near||c>e.far||t.push({distance:c,point:ro.clone(),uv:bt.getUV(ro,bs,so,ws,Nu,vc,Bu,new H),face:null,object:this})},copy:function(e){return se.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Ms(e,t,n,i,r,o){lr.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(oo.x=o*lr.x-r*lr.y,oo.y=r*lr.x+o*lr.y):oo.copy(lr),e.copy(t),e.x+=oo.x,e.y+=oo.y,e.applyMatrix4(Du)}const Ss=new M,Ou=new M;function Es(){se.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Es.prototype=Object.assign(Object.create(se.prototype),{constructor:Es,isLOD:!0,copy:function(e){se.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){Ss.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ss);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){Ss.setFromMatrixPosition(e.matrixWorld),Ou.setFromMatrixPosition(this.matrixWorld);const n=Ss.distanceTo(Ou)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=se.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}});function bc(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),et.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge}bc.prototype=Object.assign(Object.create(et.prototype),{constructor:bc,isSkinnedMesh:!0,copy:function(e){return et.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){et.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:(function(){const e=new M,t=new $e,n=new $e,i=new M,r=new Ge;return function(o,s){const c=this.skeleton,a=this.geometry;t.fromBufferAttribute(a.attributes.skinIndex,o),n.fromBufferAttribute(a.attributes.skinWeight,o),e.fromBufferAttribute(a.attributes.position,o).applyMatrix4(this.bindMatrix),s.set(0,0,0);for(let l=0;l<4;l++){const h=n.getComponent(l);if(h!==0){const u=t.getComponent(l);r.multiplyMatrices(c.bones[u].matrixWorld,c.boneInverses[u]),s.addScaledVector(i.copy(e).applyMatrix4(r),h)}}return s.applyMatrix4(this.bindMatrixInverse)}})()});const Fu=new Ge,Ky=new Ge;function wc(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}Object.assign(wc.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const s=e[r]?e[r].matrixWorld:Ky;Fu.multiplyMatrices(s,t[r]),Fu.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new wc(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function Uu(){se.call(this),this.type="Bone"}Uu.prototype=Object.assign(Object.create(se.prototype),{constructor:Uu,isBone:!0});const Gu=new Ge,zu=new Ge,Ts=[],ao=new et;function Mc(e,t,n){et.call(this,e,t),this.instanceMatrix=new Ee(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}Mc.prototype=Object.assign(Object.create(et.prototype),{constructor:Mc,isInstancedMesh:!0,copy:function(e){return et.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Gu),zu.multiplyMatrices(n,Gu),ao.matrixWorld=zu,ao.raycast(e,Ts);for(let o=0,s=Ts.length;o<s;o++){const c=Ts[o];c.instanceId=r,c.object=this,t.push(c)}Ts.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function ut(e){De.call(this),this.type="LineBasicMaterial",this.color=new me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}ut.prototype=Object.create(De.prototype),ut.prototype.constructor=ut,ut.prototype.isLineBasicMaterial=!0,ut.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const ku=new M,Hu=new M,Vu=new Ge,As=new qi,Ls=new En;function qt(e,t,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),se.call(this),this.type="Line",this.geometry=e!==void 0?e:new de,this.material=t!==void 0?t:new ut,this.updateMorphTargets()}qt.prototype=Object.assign(Object.create(se.prototype),{constructor:qt,isLine:!0,copy:function(e){return se.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ku.fromBufferAttribute(t,i-1),Hu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ku.distanceTo(Hu);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;Vu.getInverse(i),As.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new M,a=new M,l=new M,h=new M,u=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,p=n.attributes.position.array;if(f!==null){const x=f.array;for(let y=0,g=x.length-1;y<g;y+=u){const m=x[y],b=x[y+1];if(c.fromArray(p,m*3),a.fromArray(p,b*3),As.distanceSqToSegment(c,a,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let x=0,y=p.length/3-1;x<y;x+=u){if(c.fromArray(p,3*x),a.fromArray(p,3*x+3),As.distanceSqToSegment(c,a,h,l)>s)continue;h.applyMatrix4(this.matrixWorld);const m=e.ray.origin.distanceTo(h);m<e.near||m>e.far||t.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const f=n.vertices,d=f.length;for(let p=0;p<d-1;p+=u){if(As.distanceSqToSegment(f[p],f[p+1],h,l)>s)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Cs=new M,Rs=new M;function pt(e,t){qt.call(this,e,t),this.type="LineSegments"}pt.prototype=Object.assign(Object.create(qt.prototype),{constructor:pt,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cs.fromBufferAttribute(t,i),Rs.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cs.distanceTo(Rs);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)Cs.copy(t[i]),Rs.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cs.distanceTo(Rs)}return this}});function Sc(e,t){qt.call(this,e,t),this.type="LineLoop"}Sc.prototype=Object.assign(Object.create(qt.prototype),{constructor:Sc,isLineLoop:!0});function Yn(e){De.call(this),this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}Yn.prototype=Object.create(De.prototype),Yn.prototype.constructor=Yn,Yn.prototype.isPointsMaterial=!0,Yn.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const Wu=new Ge,Ec=new qi,Ps=new En,Is=new M;function Ds(e,t){se.call(this),this.type="Points",this.geometry=e!==void 0?e:new de,this.material=t!==void 0?t:new Yn,this.updateMorphTargets()}Ds.prototype=Object.assign(Object.create(se.prototype),{constructor:Ds,isPoints:!0,copy:function(e){return se.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;Wu.getInverse(i),Ec.copy(e.ray).applyMatrix4(Wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o;if(n.isBufferGeometry){const c=n.index,l=n.attributes.position.array;if(c!==null){const h=c.array;for(let u=0,f=h.length;u<f;u++){const d=h[u];Is.fromArray(l,d*3),Tc(Is,d,s,i,e,t,this)}}else for(let h=0,u=l.length/3;h<u;h++)Is.fromArray(l,h*3),Tc(Is,h,s,i,e,t,this)}else{const c=n.vertices;for(let a=0,l=c.length;a<l;a++)Tc(c[a],a,s,i,e,t,this)}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Tc(e,t,n,i,r,o,s){const c=Ec.distanceSqToPoint(e);if(c<n){const a=new M;Ec.closestPointToPoint(e,a),a.applyMatrix4(i);const l=r.ray.origin.distanceTo(a);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(c),point:a,index:t,face:null,object:s})}}function ju(e,t,n,i,r,o,s,c,a){tt.call(this,e,t,n,i,r,o,s,c,a),this.format=s!==void 0?s:ci,this.minFilter=o!==void 0?o:Mt,this.magFilter=r!==void 0?r:Mt,this.generateMipmaps=!1;const l=this;function h(){l.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}ju.prototype=Object.assign(Object.create(tt.prototype),{constructor:ju,isVideoTexture:!0,update:function(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function co(e,t,n,i,r,o,s,c,a,l,h,u){tt.call(this,null,o,s,c,a,l,i,r,h,u),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}co.prototype=Object.create(tt.prototype),co.prototype.constructor=co,co.prototype.isCompressedTexture=!0;function xi(e,t,n,i,r,o,s,c,a){tt.call(this,e,t,n,i,r,o,s,c,a),this.needsUpdate=!0}xi.prototype=Object.create(tt.prototype),xi.prototype.constructor=xi,xi.prototype.isCanvasTexture=!0;function Ns(e,t,n,i,r,o,s,c,a,l){if(l=l!==void 0?l:Bi,l!==Bi&&l!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Bi&&(n=Yo),n===void 0&&l===Gr&&(n=Ur),tt.call(this,null,i,r,o,s,c,l,n,a),this.image={width:e,height:t},this.magFilter=s!==void 0?s:gt,this.minFilter=c!==void 0?c:gt,this.flipY=!1,this.generateMipmaps=!1}Ns.prototype=Object.create(tt.prototype),Ns.prototype.constructor=Ns,Ns.prototype.isDepthTexture=!0;function Bs(e){de.call(this),this.type="WireframeGeometry";const t=[],n=[0,0],i={},r=["a","b","c"];if(e&&e.isGeometry){const o=e.faces;for(let s=0,c=o.length;s<c;s++){const a=o[s];for(let l=0;l<3;l++){const h=a[r[l]],u=a[r[(l+1)%3]];n[0]=Math.min(h,u),n[1]=Math.max(h,u);const f=n[0]+","+n[1];i[f]===void 0&&(i[f]={index1:n[0],index2:n[1]})}}for(const s in i){const c=i[s];let a=e.vertices[c.index1];t.push(a.x,a.y,a.z),a=e.vertices[c.index2],t.push(a.x,a.y,a.z)}}else if(e&&e.isBufferGeometry){let o=new M;if(e.index!==null){const s=e.attributes.position,c=e.index;let a=e.groups;a.length===0&&(a=[{start:0,count:c.count,materialIndex:0}]);for(let l=0,h=a.length;l<h;++l){const u=a[l],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let y=0;y<3;y++){const g=c.getX(p+y),m=c.getX(p+(y+1)%3);n[0]=Math.min(g,m),n[1]=Math.max(g,m);const b=n[0]+","+n[1];i[b]===void 0&&(i[b]={index1:n[0],index2:n[1]})}}for(const l in i){const h=i[l];o.fromBufferAttribute(s,h.index1),t.push(o.x,o.y,o.z),o.fromBufferAttribute(s,h.index2),t.push(o.x,o.y,o.z)}}else{const s=e.attributes.position;for(let c=0,a=s.count/3;c<a;c++)for(let l=0;l<3;l++){const h=3*c+l;o.fromBufferAttribute(s,h),t.push(o.x,o.y,o.z);const u=3*c+(l+1)%3;o.fromBufferAttribute(s,u),t.push(o.x,o.y,o.z)}}}this.setAttribute("position",new le(t,3))}Bs.prototype=Object.create(de.prototype),Bs.prototype.constructor=Bs;function Os(e,t,n){Ne.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new lo(e,t,n)),this.mergeVertices()}Os.prototype=Object.create(Ne.prototype),Os.prototype.constructor=Os;function lo(e,t,n){de.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],o=[],s=[],c=1e-5,a=new M,l=new M,h=new M,u=new M,f=new M;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=t+1;for(let p=0;p<=n;p++){const x=p/n;for(let y=0;y<=t;y++){const g=y/t;e(g,x,l),r.push(l.x,l.y,l.z),g-c>=0?(e(g-c,x,h),u.subVectors(l,h)):(e(g+c,x,h),u.subVectors(h,l)),x-c>=0?(e(g,x-c,h),f.subVectors(l,h)):(e(g,x+c,h),f.subVectors(h,l)),a.crossVectors(u,f).normalize(),o.push(a.x,a.y,a.z),s.push(g,x)}}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=p*d+x,g=p*d+x+1,m=(p+1)*d+x+1,b=(p+1)*d+x;i.push(y,g,b),i.push(g,m,b)}this.setIndex(i),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(s,2))}lo.prototype=Object.create(de.prototype),lo.prototype.constructor=lo;function Fs(e,t,n,i){Ne.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new Ft(e,t,n,i)),this.mergeVertices()}Fs.prototype=Object.create(Ne.prototype),Fs.prototype.constructor=Fs;function Ft(e,t,n,i){de.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;const r=[],o=[];s(i),a(n),l(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(g){const m=new M,b=new M,v=new M;for(let w=0;w<t.length;w+=3)f(t[w+0],m),f(t[w+1],b),f(t[w+2],v),c(m,b,v,g)}function c(g,m,b,v){const w=Math.pow(2,v),T=[];for(let L=0;L<=w;L++){T[L]=[];const G=g.clone().lerp(b,L/w),C=m.clone().lerp(b,L/w),Y=w-L;for(let N=0;N<=Y;N++)N===0&&L===w?T[L][N]=G:T[L][N]=G.clone().lerp(C,N/Y)}for(let L=0;L<w;L++)for(let G=0;G<2*(w-L)-1;G++){const C=Math.floor(G/2);G%2===0?(u(T[L][C+1]),u(T[L+1][C]),u(T[L][C])):(u(T[L][C+1]),u(T[L+1][C+1]),u(T[L+1][C]))}}function a(g){const m=new M;for(let b=0;b<r.length;b+=3)m.x=r[b+0],m.y=r[b+1],m.z=r[b+2],m.normalize().multiplyScalar(g),r[b+0]=m.x,r[b+1]=m.y,r[b+2]=m.z}function l(){const g=new M;for(let m=0;m<r.length;m+=3){g.x=r[m+0],g.y=r[m+1],g.z=r[m+2];const b=x(g)/2/Math.PI+.5,v=y(g)/Math.PI+.5;o.push(b,1-v)}d(),h()}function h(){for(let g=0;g<o.length;g+=6){const m=o[g+0],b=o[g+2],v=o[g+4],w=Math.max(m,b,v),T=Math.min(m,b,v);w>.9&&T<.1&&(m<.2&&(o[g+0]+=1),b<.2&&(o[g+2]+=1),v<.2&&(o[g+4]+=1))}}function u(g){r.push(g.x,g.y,g.z)}function f(g,m){const b=g*3;m.x=e[b+0],m.y=e[b+1],m.z=e[b+2]}function d(){const g=new M,m=new M,b=new M,v=new M,w=new H,T=new H,L=new H;for(let G=0,C=0;G<r.length;G+=9,C+=6){g.set(r[G+0],r[G+1],r[G+2]),m.set(r[G+3],r[G+4],r[G+5]),b.set(r[G+6],r[G+7],r[G+8]),w.set(o[C+0],o[C+1]),T.set(o[C+2],o[C+3]),L.set(o[C+4],o[C+5]),v.copy(g).add(m).add(b).divideScalar(3);const Y=x(v);p(w,C+0,g,Y),p(T,C+2,m,Y),p(L,C+4,b,Y)}}function p(g,m,b,v){v<0&&g.x===1&&(o[m]=g.x-1),b.x===0&&b.z===0&&(o[m]=v/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function y(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}Ft.prototype=Object.create(de.prototype),Ft.prototype.constructor=Ft;function Us(e,t){Ne.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new uo(e,t)),this.mergeVertices()}Us.prototype=Object.create(Ne.prototype),Us.prototype.constructor=Us;function uo(e,t){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];Ft.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}uo.prototype=Object.create(Ft.prototype),uo.prototype.constructor=uo;function Gs(e,t){Ne.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ur(e,t)),this.mergeVertices()}Gs.prototype=Object.create(Ne.prototype),Gs.prototype.constructor=Gs;function ur(e,t){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Ft.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}ur.prototype=Object.create(Ft.prototype),ur.prototype.constructor=ur;function zs(e,t){Ne.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ho(e,t)),this.mergeVertices()}zs.prototype=Object.create(Ne.prototype),zs.prototype.constructor=zs;function ho(e,t){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Ft.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}ho.prototype=Object.create(Ft.prototype),ho.prototype.constructor=ho;function ks(e,t){Ne.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new fo(e,t)),this.mergeVertices()}ks.prototype=Object.create(Ne.prototype),ks.prototype.constructor=ks;function fo(e,t){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Ft.call(this,r,o,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}fo.prototype=Object.create(Ft.prototype),fo.prototype.constructor=fo;function Hs(e,t,n,i,r,o){Ne.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const s=new hr(e,t,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}Hs.prototype=Object.create(Ne.prototype),Hs.prototype.constructor=Hs;function hr(e,t,n,i,r){de.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new M,c=new M,a=new H;let l=new M;const h=[],u=[],f=[],d=[];p(),this.setIndex(d),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function p(){for(let m=0;m<t;m++)x(m);x(r===!1?t:0),g(),y()}function x(m){l=e.getPointAt(m/t,l);const b=o.normals[m],v=o.binormals[m];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,L=Math.sin(T),G=-Math.cos(T);c.x=G*b.x+L*v.x,c.y=G*b.y+L*v.y,c.z=G*b.z+L*v.z,c.normalize(),u.push(c.x,c.y,c.z),s.x=l.x+n*c.x,s.y=l.y+n*c.y,s.z=l.z+n*c.z,h.push(s.x,s.y,s.z)}}function y(){for(let m=1;m<=t;m++)for(let b=1;b<=i;b++){const v=(i+1)*(m-1)+(b-1),w=(i+1)*m+(b-1),T=(i+1)*m+b,L=(i+1)*(m-1)+b;d.push(v,w,L),d.push(w,T,L)}}function g(){for(let m=0;m<=t;m++)for(let b=0;b<=i;b++)a.x=m/t,a.y=b/i,f.push(a.x,a.y)}}hr.prototype=Object.create(de.prototype),hr.prototype.constructor=hr,hr.prototype.toJSON=function(){const e=de.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e};function Vs(e,t,n,i,r,o,s){Ne.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new po(e,t,n,i,r,o)),this.mergeVertices()}Vs.prototype=Object.create(Ne.prototype),Vs.prototype.constructor=Vs;function po(e,t,n,i,r,o){de.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},e=e||1,t=t||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,o=o||3;const s=[],c=[],a=[],l=[],h=new M,u=new M,f=new M,d=new M,p=new M,x=new M,y=new M;for(let m=0;m<=n;++m){const b=m/n*r*Math.PI*2;g(b,r,o,e,f),g(b+.01,r,o,e,d),x.subVectors(d,f),y.addVectors(d,f),p.crossVectors(x,y),y.crossVectors(p,x),p.normalize(),y.normalize();for(let v=0;v<=i;++v){const w=v/i*Math.PI*2,T=-t*Math.cos(w),L=t*Math.sin(w);h.x=f.x+(T*y.x+L*p.x),h.y=f.y+(T*y.y+L*p.y),h.z=f.z+(T*y.z+L*p.z),c.push(h.x,h.y,h.z),u.subVectors(h,f).normalize(),a.push(u.x,u.y,u.z),l.push(m/n),l.push(v/i)}}for(let m=1;m<=n;m++)for(let b=1;b<=i;b++){const v=(i+1)*(m-1)+(b-1),w=(i+1)*m+(b-1),T=(i+1)*m+b,L=(i+1)*(m-1)+b;s.push(v,w,L),s.push(w,T,L)}this.setIndex(s),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2));function g(m,b,v,w,T){const L=Math.cos(m),G=Math.sin(m),C=v/b*m,Y=Math.cos(C);T.x=w*(2+Y)*.5*L,T.y=w*(2+Y)*G*.5,T.z=w*Math.sin(C)*.5}}po.prototype=Object.create(de.prototype),po.prototype.constructor=po;function Ws(e,t,n,i,r){Ne.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new mo(e,t,n,i,r)),this.mergeVertices()}Ws.prototype=Object.create(Ne.prototype),Ws.prototype.constructor=Ws;function mo(e,t,n,i,r){de.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||1,t=t||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;const o=[],s=[],c=[],a=[],l=new M,h=new M,u=new M;for(let f=0;f<=n;f++)for(let d=0;d<=i;d++){const p=d/i*r,x=f/n*Math.PI*2;h.x=(e+t*Math.cos(x))*Math.cos(p),h.y=(e+t*Math.cos(x))*Math.sin(p),h.z=t*Math.sin(x),s.push(h.x,h.y,h.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),u.subVectors(h,l).normalize(),c.push(u.x,u.y,u.z),a.push(d/i),a.push(f/n)}for(let f=1;f<=n;f++)for(let d=1;d<=i;d++){const p=(i+1)*f+d-1,x=(i+1)*(f-1)+d-1,y=(i+1)*(f-1)+d,g=(i+1)*f+d;o.push(p,x,g),o.push(x,y,g)}this.setIndex(o),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(a,2))}mo.prototype=Object.create(de.prototype),mo.prototype.constructor=mo;const ex={triangulate:function(e,t,n){n=n||2;let i=t&&t.length,r=i?t[0]*n:e.length,o=qu(e,0,r,n,!0),s=[];if(!o||o.next===o.prev)return s;let c,a,l,h,u,f,d;if(i&&(o=ox(e,t,o,n)),e.length>80*n){c=l=e[0],a=h=e[1];for(let p=n;p<r;p+=n)u=e[p],f=e[p+1],u<c&&(c=u),f<a&&(a=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-c,h-a),d=d!==0?1/d:0}return go(o,s,n,c,a,d),s}};function qu(e,t,n,i,r){let o,s;if(r===gx(e,t,n,i)>0)for(o=t;o<n;o+=i)s=Ju(o,e[o],e[o+1],s);else for(o=n-i;o>=t;o-=i)s=Ju(o,e[o],e[o+1],s);return s&&js(s,s.next)&&(xo(s),s=s.next),s}function Jn(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(js(n,n.next)||at(n.prev,n,n.next)===0)){if(xo(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function go(e,t,n,i,r,o,s){if(!e)return;!s&&o&&ux(e,i,r,o);let c=e,a,l;for(;e.prev!==e.next;){if(a=e.prev,l=e.next,o?nx(e,i,r,o):tx(e)){t.push(a.i/n),t.push(e.i/n),t.push(l.i/n),xo(e),e=l.next,c=l.next;continue}if(e=l,e===c){s?s===1?(e=ix(Jn(e),t,n),go(e,t,n,i,r,o,2)):s===2&&rx(e,t,n,i,r,o):go(Jn(e),t,n,i,r,o,1);break}}}function tx(e){let t=e.prev,n=e,i=e.next;if(at(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(fr(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&at(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function nx(e,t,n,i){let r=e.prev,o=e,s=e.next;if(at(r,o,s)>=0)return!1;let c=r.x<o.x?r.x<s.x?r.x:s.x:o.x<s.x?o.x:s.x,a=r.y<o.y?r.y<s.y?r.y:s.y:o.y<s.y?o.y:s.y,l=r.x>o.x?r.x>s.x?r.x:s.x:o.x>s.x?o.x:s.x,h=r.y>o.y?r.y>s.y?r.y:s.y:o.y>s.y?o.y:s.y,u=Ac(c,a,t,n,i),f=Ac(l,h,t,n,i),d=e.prevZ,p=e.nextZ;for(;d&&d.z>=u&&p&&p.z<=f;){if(d!==e.prev&&d!==e.next&&fr(r.x,r.y,o.x,o.y,s.x,s.y,d.x,d.y)&&at(d.prev,d,d.next)>=0||(d=d.prevZ,p!==e.prev&&p!==e.next&&fr(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&at(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=u;){if(d!==e.prev&&d!==e.next&&fr(r.x,r.y,o.x,o.y,s.x,s.y,d.x,d.y)&&at(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=f;){if(p!==e.prev&&p!==e.next&&fr(r.x,r.y,o.x,o.y,s.x,s.y,p.x,p.y)&&at(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function ix(e,t,n){let i=e;do{let r=i.prev,o=i.next.next;!js(r,o)&&Xu(r,i,i.next,o)&&yo(r,o)&&yo(o,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(o.i/n),xo(i),xo(i.next),i=e=o),i=i.next}while(i!==e);return Jn(i)}function rx(e,t,n,i,r,o){let s=e;do{let c=s.next.next;for(;c!==s.prev;){if(s.i!==c.i&&dx(s,c)){let a=Yu(s,c);s=Jn(s,s.next),a=Jn(a,a.next),go(s,t,n,i,r,o),go(a,t,n,i,r,o);return}c=c.next}s=s.next}while(s!==e)}function ox(e,t,n,i){let r=[],o,s,c,a,l;for(o=0,s=t.length;o<s;o++)c=t[o]*i,a=o<s-1?t[o+1]*i:e.length,l=qu(e,c,a,i,!1),l===l.next&&(l.steiner=!0),r.push(fx(l));for(r.sort(sx),o=0;o<r.length;o++)ax(r[o],n),n=Jn(n,n.next);return n}function sx(e,t){return e.x-t.x}function ax(e,t){if(t=cx(e,t),t){const n=Yu(t,e);Jn(t,t.next),Jn(n,n.next)}}function cx(e,t){let n=t,i=e.x,r=e.y,o=-1/0,s;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>o){if(o=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}s=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!s)return null;if(i===o)return s;let c=s,a=s.x,l=s.y,h=1/0,u;n=s;do i>=n.x&&n.x>=a&&i!==n.x&&fr(r<l?i:o,r,a,l,r<l?o:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),yo(n,e)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&lx(s,n)))&&(s=n,h=u)),n=n.next;while(n!==c);return s}function lx(e,t){return at(e.prev,e,t.prev)<0&&at(t.next,e,e.next)<0}function ux(e,t,n,i){let r=e;do r.z===null&&(r.z=Ac(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,hx(r)}function hx(e){let t,n,i,r,o,s,c,a,l=1;do{for(n=e,e=null,o=null,s=0;n;){for(s++,i=n,c=0,t=0;t<l&&(c++,i=i.nextZ,!!i);t++);for(a=l;c>0||a>0&&i;)c!==0&&(a===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,c--):(r=i,i=i.nextZ,a--),o?o.nextZ=r:e=r,r.prevZ=o,o=r;n=i}o.nextZ=null,l*=2}while(s>1);return e}function Ac(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function fx(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function fr(e,t,n,i,r,o,s,c){return(r-s)*(t-c)-(e-s)*(o-c)>=0&&(e-s)*(i-c)-(n-s)*(t-c)>=0&&(n-s)*(o-c)-(r-s)*(i-c)>=0}function dx(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!px(e,t)&&(yo(e,t)&&yo(t,e)&&mx(e,t)&&(at(e.prev,e,t.prev)||at(e,t.prev,t))||js(e,t)&&at(e.prev,e,e.next)>0&&at(t.prev,t,t.next)>0)}function at(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function js(e,t){return e.x===t.x&&e.y===t.y}function Xu(e,t,n,i){const r=Xs(at(e,t,n)),o=Xs(at(e,t,i)),s=Xs(at(n,i,e)),c=Xs(at(n,i,t));return!!(r!==o&&s!==c||r===0&&qs(e,n,t)||o===0&&qs(e,i,t)||s===0&&qs(n,e,i)||c===0&&qs(n,t,i))}function qs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Xs(e){return e>0?1:e<0?-1:0}function px(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Xu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function yo(e,t){return at(e.prev,e,e.next)<0?at(e,t,e.next)>=0&&at(e,e.prev,t)>=0:at(e,t,e.prev)<0||at(e,e.next,t)<0}function mx(e,t){let n=e,i=!1,r=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Yu(e,t){let n=new Lc(e.i,e.x,e.y),i=new Lc(t.i,t.x,t.y),r=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Ju(e,t,n,i){const r=new Lc(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Lc(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gx(e,t,n,i){let r=0;for(let o=t,s=n-i;o<n;o+=i)r+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return r}const Zn={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return Zn.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];Zu(e),$u(n,e);let o=e.length;t.forEach(Zu);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,$u(n,t[c]);const s=ex.triangulate(n,i);for(let c=0;c<s.length;c+=3)r.push(s.slice(c,c+3));return r}};function Zu(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $u(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function dr(e,t){Ne.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new Rn(e,t)),this.mergeVertices()}dr.prototype=Object.create(Ne.prototype),dr.prototype.constructor=dr,dr.prototype.toJSON=function(){const e=Ne.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Qu(t,n,e)};function Rn(e,t){de.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let s=0,c=e.length;s<c;s++){const a=e[s];o(a)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(s){const c=[],a=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,d=t.bevelSize!==void 0?t.bevelSize:f-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:yx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let m,b=!1,v,w,T,L;y&&(m=y.getSpacedPoints(l),b=!0,u=!1,v=y.computeFrenetFrames(l,!1),w=new M,T=new M,L=new M),u||(x=0,f=0,d=0,p=0);const G=s.extractPoints(a);let C=G.shape;const Y=G.holes;if(!Zn.isClockWise(C)){C=C.reverse();for(let V=0,Z=Y.length;V<Z;V++){const ne=Y[V];Zn.isClockWise(ne)&&(Y[V]=ne.reverse())}}const O=Zn.triangulateShape(C,Y),B=C;for(let V=0,Z=Y.length;V<Z;V++){const ne=Y[V];C=C.concat(ne)}function P(V,Z,ne){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(ne).add(V)}const R=C.length,U=O.length;function q(V,Z,ne){let oe,$,xe;const S=V.x-Z.x,A=V.y-Z.y,ee=ne.x-V.x,X=ne.y-V.y,I=S*S+A*A,ie=S*X-A*ee;if(Math.abs(ie)>Number.EPSILON){const re=Math.sqrt(I),Me=Math.sqrt(ee*ee+X*X),Q=Z.x-A/re,J=Z.y+S/re,_e=ne.x-X/Me,ge=ne.y+ee/Me,he=((_e-Q)*X-(ge-J)*ee)/(S*X-A*ee);oe=Q+S*he-V.x,$=J+A*he-V.y;const ve=oe*oe+$*$;if(ve<=2)return new H(oe,$);xe=Math.sqrt(ve/2)}else{let re=!1;S>Number.EPSILON?ee>Number.EPSILON&&(re=!0):S<-Number.EPSILON?ee<-Number.EPSILON&&(re=!0):Math.sign(A)===Math.sign(X)&&(re=!0),re?(oe=-A,$=S,xe=Math.sqrt(I)):(oe=S,$=A,xe=Math.sqrt(I/2))}return new H(oe/xe,$/xe)}const K=[];for(let V=0,Z=B.length,ne=Z-1,oe=V+1;V<Z;V++,ne++,oe++)ne===Z&&(ne=0),oe===Z&&(oe=0),K[V]=q(B[V],B[ne],B[oe]);const te=[];let pe,ye=K.concat();for(let V=0,Z=Y.length;V<Z;V++){const ne=Y[V];pe=[];for(let oe=0,$=ne.length,xe=$-1,S=oe+1;oe<$;oe++,xe++,S++)xe===$&&(xe=0),S===$&&(S=0),pe[oe]=q(ne[oe],ne[xe],ne[S]);te.push(pe),ye=ye.concat(pe)}for(let V=0;V<x;V++){const Z=V/x,ne=f*Math.cos(Z*Math.PI/2),oe=d*Math.sin(Z*Math.PI/2)+p;for(let $=0,xe=B.length;$<xe;$++){const S=P(B[$],K[$],oe);j(S.x,S.y,-ne)}for(let $=0,xe=Y.length;$<xe;$++){const S=Y[$];pe=te[$];for(let A=0,ee=S.length;A<ee;A++){const X=P(S[A],pe[A],oe);j(X.x,X.y,-ne)}}}const Oe=d+p;for(let V=0;V<R;V++){const Z=u?P(C[V],ye[V],Oe):C[V];b?(T.copy(v.normals[0]).multiplyScalar(Z.x),w.copy(v.binormals[0]).multiplyScalar(Z.y),L.copy(m[0]).add(T).add(w),j(L.x,L.y,L.z)):j(Z.x,Z.y,0)}for(let V=1;V<=l;V++)for(let Z=0;Z<R;Z++){const ne=u?P(C[Z],ye[Z],Oe):C[Z];b?(T.copy(v.normals[V]).multiplyScalar(ne.x),w.copy(v.binormals[V]).multiplyScalar(ne.y),L.copy(m[V]).add(T).add(w),j(L.x,L.y,L.z)):j(ne.x,ne.y,h/l*V)}for(let V=x-1;V>=0;V--){const Z=V/x,ne=f*Math.cos(Z*Math.PI/2),oe=d*Math.sin(Z*Math.PI/2)+p;for(let $=0,xe=B.length;$<xe;$++){const S=P(B[$],K[$],oe);j(S.x,S.y,h+ne)}for(let $=0,xe=Y.length;$<xe;$++){const S=Y[$];pe=te[$];for(let A=0,ee=S.length;A<ee;A++){const X=P(S[A],pe[A],oe);b?j(X.x,X.y+m[l-1].y,m[l-1].x+ne):j(X.x,X.y,h+ne)}}}Ae(),qe();function Ae(){const V=i.length/3;if(u){let Z=0,ne=R*Z;for(let oe=0;oe<U;oe++){const $=O[oe];Ye($[2]+ne,$[1]+ne,$[0]+ne)}Z=l+x*2,ne=R*Z;for(let oe=0;oe<U;oe++){const $=O[oe];Ye($[0]+ne,$[1]+ne,$[2]+ne)}}else{for(let Z=0;Z<U;Z++){const ne=O[Z];Ye(ne[2],ne[1],ne[0])}for(let Z=0;Z<U;Z++){const ne=O[Z];Ye(ne[0]+R*l,ne[1]+R*l,ne[2]+R*l)}}n.addGroup(V,i.length/3-V,0)}function qe(){const V=i.length/3;let Z=0;ze(B,Z),Z+=B.length;for(let ne=0,oe=Y.length;ne<oe;ne++){const $=Y[ne];ze($,Z),Z+=$.length}n.addGroup(V,i.length/3-V,1)}function ze(V,Z){let ne=V.length;for(;--ne>=0;){const oe=ne;let $=ne-1;$<0&&($=V.length-1);for(let xe=0,S=l+x*2;xe<S;xe++){const A=R*xe,ee=R*(xe+1),X=Z+oe+A,I=Z+$+A,ie=Z+$+ee,re=Z+oe+ee;Re(X,I,ie,re)}}}function j(V,Z,ne){c.push(V),c.push(Z),c.push(ne)}function Ye(V,Z,ne){Pe(V),Pe(Z),Pe(ne);const oe=i.length/3,$=g.generateTopUV(n,i,oe-3,oe-2,oe-1);Le($[0]),Le($[1]),Le($[2])}function Re(V,Z,ne,oe){Pe(V),Pe(Z),Pe(oe),Pe(Z),Pe(ne),Pe(oe);const $=i.length/3,xe=g.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Le(xe[0]),Le(xe[1]),Le(xe[3]),Le(xe[1]),Le(xe[2]),Le(xe[3])}function Pe(V){i.push(c[V*3+0]),i.push(c[V*3+1]),i.push(c[V*3+2])}function Le(V){r.push(V.x),r.push(V.y)}}}Rn.prototype=Object.create(de.prototype),Rn.prototype.constructor=Rn,Rn.prototype.toJSON=function(){const e=de.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Qu(t,n,e)};const yx={generateTopUV:function(e,t,n,i,r){const o=t[n*3],s=t[n*3+1],c=t[i*3],a=t[i*3+1],l=t[r*3],h=t[r*3+1];return[new H(o,s),new H(c,a),new H(l,h)]},generateSideWallUV:function(e,t,n,i,r,o){const s=t[n*3],c=t[n*3+1],a=t[n*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[r*3],d=t[r*3+1],p=t[r*3+2],x=t[o*3],y=t[o*3+1],g=t[o*3+2];return Math.abs(c-h)<.01?[new H(s,1-a),new H(l,1-u),new H(f,1-p),new H(x,1-g)]:[new H(c,1-a),new H(h,1-u),new H(d,1-p),new H(y,1-g)]}};function Qu(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const o=e[i];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Ys(e,t){Ne.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new vo(e,t)),this.mergeVertices()}Ys.prototype=Object.create(Ne.prototype),Ys.prototype.constructor=Ys;function vo(e,t){t=t||{};const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ne;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),Rn.call(this,i,t),this.type="TextBufferGeometry"}vo.prototype=Object.create(Rn.prototype),vo.prototype.constructor=vo;function _o(e,t,n,i,r,o,s){Ne.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},this.fromBufferGeometry(new pr(e,t,n,i,r,o,s)),this.mergeVertices()}_o.prototype=Object.create(Ne.prototype),_o.prototype.constructor=_o;function pr(e,t,n,i,r,o,s){de.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},e=e||1,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,o=o!==void 0?o:0,s=s!==void 0?s:Math.PI;const c=Math.min(o+s,Math.PI);let a=0;const l=[],h=new M,u=new M,f=[],d=[],p=[],x=[];for(let y=0;y<=n;y++){const g=[],m=y/n;let b=0;y==0&&o==0?b=.5/t:y==n&&c==Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const w=v/t;h.x=-e*Math.cos(i+w*r)*Math.sin(o+m*s),h.y=e*Math.cos(o+m*s),h.z=e*Math.sin(i+w*r)*Math.sin(o+m*s),d.push(h.x,h.y,h.z),u.copy(h).normalize(),p.push(u.x,u.y,u.z),x.push(w+b,1-m),g.push(a++)}l.push(g)}for(let y=0;y<n;y++)for(let g=0;g<t;g++){const m=l[y][g+1],b=l[y][g],v=l[y+1][g],w=l[y+1][g+1];(y!==0||o>0)&&f.push(m,b,w),(y!==n-1||c<Math.PI)&&f.push(b,v,w)}this.setIndex(f),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(x,2))}pr.prototype=Object.create(de.prototype),pr.prototype.constructor=pr;function Js(e,t,n,i,r,o){Ne.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},this.fromBufferGeometry(new bo(e,t,n,i,r,o)),this.mergeVertices()}Js.prototype=Object.create(Ne.prototype),Js.prototype.constructor=Js;function bo(e,t,n,i,r,o){de.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},e=e||.5,t=t||1,r=r!==void 0?r:0,o=o!==void 0?o:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;const s=[],c=[],a=[],l=[];let h=e;const u=(t-e)/i,f=new M,d=new H;for(let p=0;p<=i;p++){for(let x=0;x<=n;x++){const y=r+x/n*o;f.x=h*Math.cos(y),f.y=h*Math.sin(y),c.push(f.x,f.y,f.z),a.push(0,0,1),d.x=(f.x/t+1)/2,d.y=(f.y/t+1)/2,l.push(d.x,d.y)}h+=u}for(let p=0;p<i;p++){const x=p*(n+1);for(let y=0;y<n;y++){const g=y+x,m=g,b=g+n+1,v=g+n+2,w=g+1;s.push(m,b,w),s.push(b,v,w)}}this.setIndex(s),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}bo.prototype=Object.create(de.prototype),bo.prototype.constructor=bo;function Zs(e,t,n,i){Ne.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new wo(e,t,n,i)),this.mergeVertices()}Zs.prototype=Object.create(Ne.prototype),Zs.prototype.constructor=Zs;function wo(e,t,n,i){de.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=Ue.clamp(i,0,Math.PI*2);const r=[],o=[],s=[],c=1/t,a=new M,l=new H;for(let h=0;h<=t;h++){const u=n+h*c*i,f=Math.sin(u),d=Math.cos(u);for(let p=0;p<=e.length-1;p++)a.x=e[p].x*f,a.y=e[p].y,a.z=e[p].x*d,o.push(a.x,a.y,a.z),l.x=h/t,l.y=p/(e.length-1),s.push(l.x,l.y)}for(let h=0;h<t;h++)for(let u=0;u<e.length-1;u++){const f=u+h*e.length,d=f,p=f+e.length,x=f+e.length+1,y=f+1;r.push(d,p,y),r.push(p,x,y)}if(this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals(),i===Math.PI*2){const h=this.attributes.normal.array,u=new M,f=new M,d=new M,p=t*e.length*3;for(let x=0,y=0;x<e.length;x++,y+=3)u.x=h[y+0],u.y=h[y+1],u.z=h[y+2],f.x=h[p+y+0],f.y=h[p+y+1],f.z=h[p+y+2],d.addVectors(u,f).normalize(),h[y+0]=h[p+y+0]=d.x,h[y+1]=h[p+y+1]=d.y,h[y+2]=h[p+y+2]=d.z}}wo.prototype=Object.create(de.prototype),wo.prototype.constructor=wo;function mr(e,t){Ne.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new gr(e,t)),this.mergeVertices()}mr.prototype=Object.create(Ne.prototype),mr.prototype.constructor=mr,mr.prototype.toJSON=function(){const e=Ne.prototype.toJSON.call(this),t=this.parameters.shapes;return Ku(t,e)};function gr(e,t){de.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;const n=[],i=[],r=[],o=[];let s=0,c=0;if(Array.isArray(e)===!1)a(e);else for(let l=0;l<e.length;l++)a(e[l]),this.addGroup(s,c,l),s+=c,c=0;this.setIndex(n),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function a(l){const h=i.length/3,u=l.extractPoints(t);let f=u.shape;const d=u.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,y=d.length;x<y;x++){const g=d[x];Zn.isClockWise(g)===!0&&(d[x]=g.reverse())}const p=Zn.triangulateShape(f,d);for(let x=0,y=d.length;x<y;x++){const g=d[x];f=f.concat(g)}for(let x=0,y=f.length;x<y;x++){const g=f[x];i.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let x=0,y=p.length;x<y;x++){const g=p[x],m=g[0]+h,b=g[1]+h,v=g[2]+h;n.push(m,b,v),c+=3}}}gr.prototype=Object.create(de.prototype),gr.prototype.constructor=gr,gr.prototype.toJSON=function(){const e=de.prototype.toJSON.call(this),t=this.parameters.shapes;return Ku(t,e)};function Ku(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function $s(e,t){de.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;const n=[],i=Math.cos(Ue.DEG2RAD*t),r=[0,0],o={};let s,c,a;const l=["a","b","c"];let h;e.isBufferGeometry?(h=new Ne,h.fromBufferGeometry(e)):h=e.clone(),h.mergeVertices(),h.computeFaceNormals();const u=h.vertices,f=h.faces;for(let d=0,p=f.length;d<p;d++){const x=f[d];for(let y=0;y<3;y++)s=x[l[y]],c=x[l[(y+1)%3]],r[0]=Math.min(s,c),r[1]=Math.max(s,c),a=r[0]+","+r[1],o[a]===void 0?o[a]={index1:r[0],index2:r[1],face1:d,face2:void 0}:o[a].face2=d}for(a in o){const d=o[a];if(d.face2===void 0||f[d.face1].normal.dot(f[d.face2].normal)<=i){let p=u[d.index1];n.push(p.x,p.y,p.z),p=u[d.index2],n.push(p.x,p.y,p.z)}}this.setAttribute("position",new le(n,3))}$s.prototype=Object.create(de.prototype),$s.prototype.constructor=$s;function yr(e,t,n,i,r,o,s,c){Ne.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:c},this.fromBufferGeometry(new $n(e,t,n,i,r,o,s,c)),this.mergeVertices()}yr.prototype=Object.create(Ne.prototype),yr.prototype.constructor=yr;function $n(e,t,n,i,r,o,s,c){de.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:c};const a=this;e=e!==void 0?e:1,t=t!==void 0?t:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,o=o!==void 0?o:!1,s=s!==void 0?s:0,c=c!==void 0?c:Math.PI*2;const l=[],h=[],u=[],f=[];let d=0;const p=[],x=n/2;let y=0;g(),o===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(l),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function g(){const b=new M,v=new M;let w=0;const T=(t-e)/n;for(let L=0;L<=r;L++){const G=[],C=L/r,Y=C*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,B=O*c+s,P=Math.sin(B),R=Math.cos(B);v.x=Y*P,v.y=-C*n+x,v.z=Y*R,h.push(v.x,v.y,v.z),b.set(P,T,R).normalize(),u.push(b.x,b.y,b.z),f.push(O,1-C),G.push(d++)}p.push(G)}for(let L=0;L<i;L++)for(let G=0;G<r;G++){const C=p[G][L],Y=p[G+1][L],N=p[G+1][L+1],O=p[G][L+1];l.push(C,Y,O),l.push(Y,N,O),w+=6}a.addGroup(y,w,0),y+=w}function m(b){let v,w;const T=new H,L=new M;let G=0;const C=b===!0?e:t,Y=b===!0?1:-1;v=d;for(let N=1;N<=i;N++)h.push(0,x*Y,0),u.push(0,Y,0),f.push(.5,.5),d++;w=d;for(let N=0;N<=i;N++){const B=N/i*c+s,P=Math.cos(B),R=Math.sin(B);L.x=C*R,L.y=x*Y,L.z=C*P,h.push(L.x,L.y,L.z),u.push(0,Y,0),T.x=P*.5+.5,T.y=R*.5*Y+.5,f.push(T.x,T.y),d++}for(let N=0;N<i;N++){const O=v+N,B=w+N;b===!0?l.push(B,B+1,O):l.push(B+1,B,O),G+=3}a.addGroup(y,G,b===!0?1:2),y+=G}}$n.prototype=Object.create(de.prototype),$n.prototype.constructor=$n;function Qs(e,t,n,i,r,o,s){yr.call(this,0,e,t,n,i,r,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Qs.prototype=Object.create(yr.prototype),Qs.prototype.constructor=Qs;function Ks(e,t,n,i,r,o,s){$n.call(this,0,e,t,n,i,r,o,s),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}Ks.prototype=Object.create($n.prototype),Ks.prototype.constructor=Ks;function ea(e,t,n,i){Ne.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new Mo(e,t,n,i)),this.mergeVertices()}ea.prototype=Object.create(Ne.prototype),ea.prototype.constructor=ea;function Mo(e,t,n,i){de.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||1,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;const r=[],o=[],s=[],c=[],a=new M,l=new H;o.push(0,0,0),s.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),s.push(0,0,1),l.x=(o[u]/e+1)/2,l.y=(o[u+1]/e+1)/2,c.push(l.x,l.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(s,3)),this.setAttribute("uv",new le(c,2))}Mo.prototype=Object.create(de.prototype),Mo.prototype.constructor=Mo;var Ct=Object.freeze({__proto__:null,WireframeGeometry:Bs,ParametricGeometry:Os,ParametricBufferGeometry:lo,TetrahedronGeometry:Us,TetrahedronBufferGeometry:uo,OctahedronGeometry:Gs,OctahedronBufferGeometry:ur,IcosahedronGeometry:zs,IcosahedronBufferGeometry:ho,DodecahedronGeometry:ks,DodecahedronBufferGeometry:fo,PolyhedronGeometry:Fs,PolyhedronBufferGeometry:Ft,TubeGeometry:Hs,TubeBufferGeometry:hr,TorusKnotGeometry:Vs,TorusKnotBufferGeometry:po,TorusGeometry:Ws,TorusBufferGeometry:mo,TextGeometry:Ys,TextBufferGeometry:vo,SphereGeometry:_o,SphereBufferGeometry:pr,RingGeometry:Js,RingBufferGeometry:bo,PlaneGeometry:_s,PlaneBufferGeometry:rr,LatheGeometry:Zs,LatheBufferGeometry:wo,ShapeGeometry:mr,ShapeBufferGeometry:gr,ExtrudeGeometry:dr,ExtrudeBufferGeometry:Rn,EdgesGeometry:$s,ConeGeometry:Qs,ConeBufferGeometry:Ks,CylinderGeometry:yr,CylinderBufferGeometry:$n,CircleGeometry:ea,CircleBufferGeometry:Mo,BoxGeometry:Kd,BoxBufferGeometry:xs});function xr(e){De.call(this),this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.setValues(e)}xr.prototype=Object.create(De.prototype),xr.prototype.constructor=xr,xr.prototype.isShadowMaterial=!0,xr.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this};function Qn(e){Dt.call(this,e),this.type="RawShaderMaterial"}Qn.prototype=Object.create(Dt.prototype),Qn.prototype.constructor=Qn,Qn.prototype.isRawShaderMaterial=!0;function Kt(e){De.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}Kt.prototype=Object.create(De.prototype),Kt.prototype.constructor=Kt,Kt.prototype.isMeshStandardMaterial=!0,Kt.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function vi(e){Kt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}vi.prototype=Object.create(Kt.prototype),vi.prototype.constructor=vi,vi.prototype.isMeshPhysicalMaterial=!0,vi.prototype.copy=function(e){return Kt.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new me).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function _i(e){De.call(this),this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}_i.prototype=Object.create(De.prototype),_i.prototype.constructor=_i,_i.prototype.isMeshPhongMaterial=!0,_i.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function vr(e){De.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}vr.prototype=Object.create(De.prototype),vr.prototype.constructor=vr,vr.prototype.isMeshToonMaterial=!0,vr.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function _r(e){De.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}_r.prototype=Object.create(De.prototype),_r.prototype.constructor=_r,_r.prototype.isMeshNormalMaterial=!0,_r.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function br(e){De.call(this),this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}br.prototype=Object.create(De.prototype),br.prototype.constructor=br,br.prototype.isMeshLambertMaterial=!0,br.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function wr(e){De.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}wr.prototype=Object.create(De.prototype),wr.prototype.constructor=wr,wr.prototype.isMeshMatcapMaterial=!0,wr.prototype.copy=function(e){return De.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Mr(e){ut.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Mr.prototype=Object.create(ut.prototype),Mr.prototype.constructor=Mr,Mr.prototype.isLineDashedMaterial=!0,Mr.prototype.copy=function(e){return ut.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var xx=Object.freeze({__proto__:null,ShadowMaterial:xr,SpriteMaterial:yi,RawShaderMaterial:Qn,ShaderMaterial:Dt,PointsMaterial:Yn,MeshPhysicalMaterial:vi,MeshStandardMaterial:Kt,MeshPhongMaterial:_i,MeshToonMaterial:vr,MeshNormalMaterial:_r,MeshLambertMaterial:br,MeshDepthMaterial:di,MeshDistanceMaterial:pi,MeshBasicMaterial:Vt,MeshMatcapMaterial:wr,LineDashedMaterial:Mr,LineBasicMaterial:ut,Material:De});const ct={arraySlice:function(e,t,n){return ct.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,o){return e[r]-e[o]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let o=0,s=0;s!==i;++o){const c=n[o]*t;for(let a=0;a!==t;++a)r[s++]=e[c+a]}return r},flattenJSON:function(e,t,n,i){let r=1,o=e[0];for(;o!==void 0&&o[i]===void 0;)o=e[r++];if(o===void 0)return;let s=o[i];if(s!==void 0)if(Array.isArray(s))do s=o[i],s!==void 0&&(t.push(o.time),n.push.apply(n,s)),o=e[r++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(t.push(o.time),s.toArray(n,n.length)),o=e[r++];while(o!==void 0);else do s=o[i],s!==void 0&&(t.push(o.time),n.push(s)),o=e[r++];while(o!==void 0)},subclip:function(e,t,n,i,r){r=r||30;const o=e.clone();o.name=t;const s=[];for(let a=0;a<o.tracks.length;++a){const l=o.tracks[a],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*r;if(!(p<n||p>=i)){u.push(l.times[d]);for(let x=0;x<h;++x)f.push(l.values[d*h+x])}}u.length!==0&&(l.times=ct.convertArray(u,l.times.constructor),l.values=ct.convertArray(f,l.values.constructor),s.push(l))}o.tracks=s;let c=1/0;for(let a=0;a<o.tracks.length;++a)c>o.tracks[a].times[0]&&(c=o.tracks[a].times[0]);for(let a=0;a<o.tracks.length;++a)o.tracks[a].shift(-1*c);return o.resetDuration(),o},makeClipAdditive:function(e,t,n,i){t===void 0&&(t=0),n===void 0&&(n=e),(i===void 0||i<=0)&&(i=30);const r=e.tracks.length,o=t/i;for(let s=0;s<r;++s){const c=n.tracks[s],a=c.ValueTypeName;if(a==="bool"||a==="string")continue;const l=e.tracks.find(function(p){return p.name===c.name&&p.ValueTypeName===a});if(l===void 0)continue;const h=c.getValueSize(),u=c.times.length-1;let f;if(o<=c.times[0])f=ct.arraySlice(c.values,0,c.valueSize);else if(o>=c.times[u]){const p=u*h;f=ct.arraySlice(c.values,p)}else{const p=c.createInterpolant();p.evaluate(o),f=p.resultBuffer}a==="quaternion"&&new yt(f[0],f[1],f[2],f[3]).normalize().conjugate().toArray(f);const d=l.times.length;for(let p=0;p<d;++p){const x=p*h;if(a==="quaternion")yt.multiplyQuaternionsFlat(l.values,x,f,0,l.values,x);else for(let y=0;y<h;++y)l.values[x+y]-=f[y]}}return e.blendMode=Wl,e}};function Xt(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(Xt.prototype,{evaluate:function(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let s=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===s)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const s=t[1];e<s&&(n=2,r=s);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const s=n+o>>>1;e<t[s]?o=s:n=s+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(Xt.prototype,{beforeStart_:Xt.prototype.copySampleValue_,afterEnd_:Xt.prototype.copySampleValue_});function Cc(e,t,n,i){Xt.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Cc.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Cc,DefaultSettings_:{endingStart:Oi,endingEnd:Oi},intervalChanged_:function(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,s=i[r],c=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case Fi:r=e,s=2*t-n;break;case Ko:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fi:o=e,c=2*n-t;break;case Ko:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const a=(n-t)*.5,l=this.valueSize;this._weightPrev=a/(t-s),this._weightNext=a/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l},interpolate_:function(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,a=c-s,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,d=(n-t)/(i-t),p=d*d,x=p*d,y=-u*x+2*u*p-u*d,g=(1+u)*x+(-1.5-2*u)*p+(-.5+u)*d+1,m=(-1-f)*x+(1.5+f)*p+.5*d,b=f*x-f*p;for(let v=0;v!==s;++v)r[v]=y*o[l+v]+g*o[a+v]+m*o[c+v]+b*o[h+v];return r}});function ta(e,t,n,i){Xt.call(this,e,t,n,i)}ta.prototype=Object.assign(Object.create(Xt.prototype),{constructor:ta,interpolate_:function(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,a=c-s,l=(n-t)/(i-t),h=1-l;for(let u=0;u!==s;++u)r[u]=o[a+u]*h+o[c+u]*l;return r}});function Rc(e,t,n,i){Xt.call(this,e,t,n,i)}Rc.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Rc,interpolate_:function(e){return this.copySampleValue_(e-1)}});function Et(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ct.convertArray(t,this.TimeBufferType),this.values=ct.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(Et,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:ct.convertArray(e.times,Array),values:ct.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}}),Object.assign(Et.prototype,{constructor:Et,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Qo,InterpolantFactoryMethodDiscrete:function(e){return new Rc(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new ta(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Cc(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Oa}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const s=this.getValueSize();this.times=ct.arraySlice(n,r,o),this.values=ct.arraySlice(this.values,r*s,o*s)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==r;s++){const c=n[s];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,c,o),e=!1;break}o=c}if(i!==void 0&&ct.isTypedArray(i))for(let s=0,c=i.length;s!==c;++s){const a=i[s];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,a),e=!1;break}}return e},optimize:function(){const e=ct.arraySlice(this.times),t=ct.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Oa,r=e.length-1;let o=1;for(let s=1;s<r;++s){let c=!1;const a=e[s],l=e[s+1];if(a!==l&&(s!==1||a!==a[0]))if(i)c=!0;else{const h=s*n,u=h-n,f=h+n;for(let d=0;d!==n;++d){const p=t[h+d];if(p!==t[u+d]||p!==t[f+d]){c=!0;break}}}if(c){if(s!==o){e[o]=e[s];const h=s*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let s=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[s+a];++o}return o!==e.length?(this.times=ct.arraySlice(e,0,o),this.values=ct.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this},clone:function(){const e=ct.arraySlice(this.times,0),t=ct.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function Pc(e,t,n){Et.call(this,e,t,n)}Pc.prototype=Object.assign(Object.create(Et.prototype),{constructor:Pc,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:$o,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ic(e,t,n,i){Et.call(this,e,t,n,i)}Ic.prototype=Object.assign(Object.create(Et.prototype),{constructor:Ic,ValueTypeName:"color"});function So(e,t,n,i){Et.call(this,e,t,n,i)}So.prototype=Object.assign(Object.create(Et.prototype),{constructor:So,ValueTypeName:"number"});function Dc(e,t,n,i){Xt.call(this,e,t,n,i)}Dc.prototype=Object.assign(Object.create(Xt.prototype),{constructor:Dc,interpolate_:function(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(n-t)/(i-t);let a=e*s;for(let l=a+s;a!==l;a+=4)yt.slerpFlat(r,0,o,a-s,o,a,c);return r}});function na(e,t,n,i){Et.call(this,e,t,n,i)}na.prototype=Object.assign(Object.create(Et.prototype),{constructor:na,ValueTypeName:"quaternion",DefaultInterpolation:Qo,InterpolantFactoryMethodLinear:function(e){return new Dc(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function Nc(e,t,n,i){Et.call(this,e,t,n,i)}Nc.prototype=Object.assign(Object.create(Et.prototype),{constructor:Nc,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:$o,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Eo(e,t,n,i){Et.call(this,e,t,n,i)}Eo.prototype=Object.assign(Object.create(Et.prototype),{constructor:Eo,ValueTypeName:"vector"});function en(e,t,n,i){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.blendMode=i!==void 0?i:Fa,this.uuid=Ue.generateUUID(),this.duration<0&&this.resetDuration()}function vx(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return So;case"vector":case"vector2":case"vector3":case"vector4":return Eo;case"color":return Ic;case"quaternion":return na;case"bool":case"boolean":return Pc;case"string":return Nc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function _x(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vx(e.type);if(e.times===void 0){const n=[],i=[];ct.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(en,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(_x(n[r]).scale(i));return new en(e.name,e.duration,t,e.blendMode)},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Et.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,o=[];for(let s=0;s<r;s++){let c=[],a=[];c.push((s+r-1)%r,s,(s+1)%r),a.push(0,1,0);const l=ct.getKeyframeOrder(c);c=ct.sortedArray(c,1,l),a=ct.sortedArray(a,1,l),!i&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new So(".morphTargetInfluences["+t[s].name+"]",c,a).scale(1/n))}return new en(e,-1,o)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let s=0,c=e.length;s<c;s++){const a=e[s],l=a.name.match(r);if(l&&l.length>1){const h=l[1];let u=i[h];u||(i[h]=u=[]),u.push(a)}}const o=[];for(const s in i)o.push(en.CreateFromMorphTargetSequence(s,i[s],t,n));return o},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,d,p){if(f.length!==0){const x=[],y=[];ct.flattenJSON(f,x,y,d),x.length!==0&&p.push(new h(u,x,y))}},i=[],r=e.name||"default",o=e.fps||30,s=e.blendMode;let c=e.length||-1;const a=e.hierarchy||[];for(let h=0;h<a.length;h++){const u=a[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let d;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(let p=0;p<u[d].morphTargets.length;p++)f[u[d].morphTargets[p]]=-1;for(const p in f){const x=[],y=[];for(let g=0;g!==u[d].morphTargets.length;++g){const m=u[d];x.push(m.time),y.push(m.morphTarget===p?1:0)}i.push(new So(".morphTargetInfluence["+p+"]",x,y))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Eo,f+".position",u,"pos",i),n(na,f+".quaternion",u,"rot",i),n(Eo,f+".scale",u,"scl",i)}}return i.length===0?null:new en(r,c,i,s)}}),Object.assign(en.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new en(this.name,this.duration,e,this.blendMode)}});const dn={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function eh(e,t,n){const i=this;let r=!1,o=0,s=0,c;const a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){s++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,s),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,h){return a.push(l,h),this},this.removeHandler=function(l){const h=a.indexOf(l);return h!==-1&&a.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=a.length;h<u;h+=2){const f=a[h],d=a[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const bx=new eh;function Xe(e){this.manager=e!==void 0?e:bx,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Xe.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const tn={};function nn(e){Xe.call(this,e)}nn.prototype=Object.assign(Object.create(Xe.prototype),{constructor:nn,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(tn[e]!==void 0){tn[e].push({onLoad:t,onProgress:n,onError:i});return}const s=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(s);let a;if(c){const l=c[1],h=!!c[2];let u=c[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const p=new Uint8Array(u.length);for(let y=0;y<u.length;y++)p[y]=u.charCodeAt(y);d==="blob"?f=new Blob([p.buffer],{type:l}):f=p.buffer;break;case"document":f=new DOMParser().parseFromString(u,l);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{tn[e]=[],tn[e].push({onLoad:t,onProgress:n,onError:i}),a=new XMLHttpRequest,a.open("GET",e,!0),a.addEventListener("load",function(l){const h=this.response,u=tn[e];if(delete tn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),dn.add(e,h);for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(h)}r.manager.itemEnd(e)}else{for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),a.addEventListener("progress",function(l){const h=tn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onProgress&&d.onProgress(l)}},!1),a.addEventListener("error",function(l){const h=tn[e];delete tn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),a.addEventListener("abort",function(l){const h=tn[e];delete tn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(a.responseType=this.responseType),this.withCredentials!==void 0&&(a.withCredentials=this.withCredentials),a.overrideMimeType&&a.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)a.setRequestHeader(l,this.requestHeader[l]);a.send(null)}return r.manager.itemStart(e),a},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function th(e){Xe.call(this,e)}th.prototype=Object.assign(Object.create(Xe.prototype),{constructor:th,load:function(e,t,n,i){const r=this,o=new nn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=en.parse(e[n]);t.push(i)}return t}});function nh(e){Xe.call(this,e)}nh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:nh,load:function(e,t,n,i){const r=this,o=[],s=new co;s.image=o;const c=new nn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader);let a=0;function l(h){c.load(e[h],function(u){const f=r.parse(u,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},a+=1,a===6&&(f.mipmapCount===1&&(s.minFilter=Mt),s.format=f.format,s.needsUpdate=!0,t&&t(s))},n,i)}if(Array.isArray(e))for(let h=0,u=e.length;h<u;++h)l(h);else c.load(e,function(h){const u=r.parse(h,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let d=0;d<f;d++){o[d]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)o[d].mipmaps.push(u.mipmaps[d*u.mipmapCount+p]),o[d].format=u.format,o[d].width=u.width,o[d].height=u.height}}else s.image.width=u.width,s.image.height=u.height,s.mipmaps=u.mipmaps;u.mipmapCount===1&&(s.minFilter=Mt),s.format=u.format,s.needsUpdate=!0,t&&t(s)},n,i);return s}});function ih(e){Xe.call(this,e)}ih.prototype=Object.assign(Object.create(Xe.prototype),{constructor:ih,load:function(e,t,n,i){const r=this,o=new nr,s=new nn(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.load(e,function(c){const a=r.parse(c);a&&(a.image!==void 0?o.image=a.image:a.data!==void 0&&(o.image.width=a.width,o.image.height=a.height,o.image.data=a.data),o.wrapS=a.wrapS!==void 0?a.wrapS:Pt,o.wrapT=a.wrapT!==void 0?a.wrapT:Pt,o.magFilter=a.magFilter!==void 0?a.magFilter:Mt,o.minFilter=a.minFilter!==void 0?a.minFilter:Mt,o.anisotropy=a.anisotropy!==void 0?a.anisotropy:1,a.format!==void 0&&(o.format=a.format),a.type!==void 0&&(o.type=a.type),a.mipmaps!==void 0&&(o.mipmaps=a.mipmaps,o.minFilter=Xo),a.mipmapCount===1&&(o.minFilter=Mt),o.needsUpdate=!0,t&&t(o,a))},n,i),o}});function To(e){Xe.call(this,e)}To.prototype=Object.assign(Object.create(Xe.prototype),{constructor:To,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){s.removeEventListener("load",c,!1),s.removeEventListener("error",a,!1),dn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function a(l){s.removeEventListener("load",c,!1),s.removeEventListener("error",a,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return s.addEventListener("load",c,!1),s.addEventListener("error",a,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}});function Bc(e){Xe.call(this,e)}Bc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Bc,load:function(e,t,n,i){const r=new jn,o=new To(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let s=0;function c(a){o.load(e[a],function(l){r.images[a]=l,s++,s===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let a=0;a<e.length;++a)c(a);return r}});function ia(e){Xe.call(this,e)}ia.prototype=Object.assign(Object.create(Xe.prototype),{constructor:ia,load:function(e,t,n,i){const r=new tt,o=new To(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s;const c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=c?ci:kt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function Te(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Te.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0,r=n.length,o;t?o=t:o=e*n[r-1];let s=0,c=r-1,a;for(;s<=c;)if(i=Math.floor(s+(c-s)/2),a=n[i]-o,a<0)s=i+1;else if(a>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const l=n[i],u=n[i+1]-l,f=(o-l)/u;return(i+f)/(r-1)},getTangent:function(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),s=this.getPoint(r),c=t||(o.isVector2?new H:new M);return c.copy(s).sub(o).normalize(),c},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new M,i=[],r=[],o=[],s=new M,c=new Ge;for(let f=0;f<=e;f++){const d=f/e;i[f]=this.getTangentAt(d,new M),i[f].normalize()}r[0]=new M,o[0]=new M;let a=Number.MAX_VALUE;const l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=a&&(a=l,n.set(1,0,0)),h<=a&&(a=h,n.set(0,1,0)),u<=a&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(i[f-1],i[f]),s.length()>Number.EPSILON){s.normalize();const d=Math.acos(Ue.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(s,d))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ue.clamp(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(f=-f);for(let d=1;d<=e;d++)r[d].applyMatrix4(c.makeRotationAxis(i[d],f*d)),o[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:o}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function Yt(e,t,n,i,r,o,s,c){Te.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=o||2*Math.PI,this.aClockwise=s||!1,this.aRotation=c||0}Yt.prototype=Object.create(Te.prototype),Yt.prototype.constructor=Yt,Yt.prototype.isEllipseCurve=!0,Yt.prototype.getPoint=function(e,t){const n=t||new H,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const s=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(s),a=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,f=a-this.aY;c=u*l-f*h+this.aX,a=u*h+f*l+this.aY}return n.set(c,a)},Yt.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},Yt.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e},Yt.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function Ao(e,t,n,i,r,o){Yt.call(this,e,t,n,n,i,r,o),this.type="ArcCurve"}Ao.prototype=Object.create(Yt.prototype),Ao.prototype.constructor=Ao,Ao.prototype.isArcCurve=!0;function Oc(){let e=0,t=0,n=0,i=0;function r(o,s,c,a){e=o,t=c,n=-3*o+3*s-2*c-a,i=2*o-2*s+c+a}return{initCatmullRom:function(o,s,c,a,l){r(s,c,l*(c-o),l*(a-s))},initNonuniformCatmullRom:function(o,s,c,a,l,h,u){let f=(s-o)/l-(c-o)/(l+h)+(c-s)/h,d=(c-s)/h-(a-s)/(h+u)+(a-c)/u;f*=h,d*=h,r(s,c,f,d)},calc:function(o){const s=o*o,c=s*o;return e+t*o+n*s+i*c}}}const ra=new M,Fc=new Oc,Uc=new Oc,Gc=new Oc;function Ut(e,t,n,i){Te.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}Ut.prototype=Object.create(Te.prototype),Ut.prototype.constructor=Ut,Ut.prototype.isCatmullRomCurve3=!0,Ut.prototype.getPoint=function(e,t){const n=t||new M,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:c===0&&s===r-1&&(s=r-2,c=1);let a,l,h,u;if(this.closed||s>0?a=i[(s-1)%r]:(ra.subVectors(i[0],i[1]).add(i[0]),a=ra),l=i[s%r],h=i[(s+1)%r],this.closed||s+2<r?u=i[(s+2)%r]:(ra.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let d=Math.pow(a.distanceToSquared(l),f),p=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(u),f);p<1e-4&&(p=1),d<1e-4&&(d=p),x<1e-4&&(x=p),Fc.initNonuniformCatmullRom(a.x,l.x,h.x,u.x,d,p,x),Uc.initNonuniformCatmullRom(a.y,l.y,h.y,u.y,d,p,x),Gc.initNonuniformCatmullRom(a.z,l.z,h.z,u.z,d,p,x)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(a.x,l.x,h.x,u.x,this.tension),Uc.initCatmullRom(a.y,l.y,h.y,u.y,this.tension),Gc.initCatmullRom(a.z,l.z,h.z,u.z,this.tension));return n.set(Fc.calc(c),Uc.calc(c),Gc.calc(c)),n},Ut.prototype.copy=function(e){Te.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Ut.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e},Ut.prototype.fromJSON=function(e){Te.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function rh(e,t,n,i,r){const o=(i-t)*.5,s=(r-n)*.5,c=e*e,a=e*c;return(2*n-2*i+o+s)*a+(-3*n+3*i-2*o-s)*c+o*e+n}function wx(e,t){const n=1-e;return n*n*t}function Mx(e,t){return 2*(1-e)*e*t}function Sx(e,t){return e*e*t}function Lo(e,t,n,i){return wx(e,t)+Mx(e,n)+Sx(e,i)}function Ex(e,t){const n=1-e;return n*n*n*t}function Tx(e,t){const n=1-e;return 3*n*n*e*t}function Ax(e,t){return 3*(1-e)*e*e*t}function Lx(e,t){return e*e*e*t}function Co(e,t,n,i,r){return Ex(e,t)+Tx(e,n)+Ax(e,i)+Lx(e,r)}function pn(e,t,n,i){Te.call(this),this.type="CubicBezierCurve",this.v0=e||new H,this.v1=t||new H,this.v2=n||new H,this.v3=i||new H}pn.prototype=Object.create(Te.prototype),pn.prototype.constructor=pn,pn.prototype.isCubicBezierCurve=!0,pn.prototype.getPoint=function(e,t){const n=t||new H,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Co(e,i.x,r.x,o.x,s.x),Co(e,i.y,r.y,o.y,s.y)),n},pn.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},pn.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},pn.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Pn(e,t,n,i){Te.call(this),this.type="CubicBezierCurve3",this.v0=e||new M,this.v1=t||new M,this.v2=n||new M,this.v3=i||new M}Pn.prototype=Object.create(Te.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isCubicBezierCurve3=!0,Pn.prototype.getPoint=function(e,t){const n=t||new M,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(Co(e,i.x,r.x,o.x,s.x),Co(e,i.y,r.y,o.y,s.y),Co(e,i.z,r.z,o.z,s.z)),n},Pn.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Pn.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Pn.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Gt(e,t){Te.call(this),this.type="LineCurve",this.v1=e||new H,this.v2=t||new H}Gt.prototype=Object.create(Te.prototype),Gt.prototype.constructor=Gt,Gt.prototype.isLineCurve=!0,Gt.prototype.getPoint=function(e,t){const n=t||new H;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},Gt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},Gt.prototype.getTangent=function(e,t){const n=t||new H;return n.copy(this.v2).sub(this.v1).normalize(),n},Gt.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Gt.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Gt.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function mn(e,t){Te.call(this),this.type="LineCurve3",this.v1=e||new M,this.v2=t||new M}mn.prototype=Object.create(Te.prototype),mn.prototype.constructor=mn,mn.prototype.isLineCurve3=!0,mn.prototype.getPoint=function(e,t){const n=t||new M;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n},mn.prototype.getPointAt=function(e,t){return this.getPoint(e,t)},mn.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},mn.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},mn.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function gn(e,t,n){Te.call(this),this.type="QuadraticBezierCurve",this.v0=e||new H,this.v1=t||new H,this.v2=n||new H}gn.prototype=Object.create(Te.prototype),gn.prototype.constructor=gn,gn.prototype.isQuadraticBezierCurve=!0,gn.prototype.getPoint=function(e,t){const n=t||new H,i=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,i.x,r.x,o.x),Lo(e,i.y,r.y,o.y)),n},gn.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},gn.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},gn.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function In(e,t,n){Te.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new M,this.v1=t||new M,this.v2=n||new M}In.prototype=Object.create(Te.prototype),In.prototype.constructor=In,In.prototype.isQuadraticBezierCurve3=!0,In.prototype.getPoint=function(e,t){const n=t||new M,i=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,i.x,r.x,o.x),Lo(e,i.y,r.y,o.y),Lo(e,i.z,r.z,o.z)),n},In.prototype.copy=function(e){return Te.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},In.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},In.prototype.fromJSON=function(e){return Te.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function yn(e){Te.call(this),this.type="SplineCurve",this.points=e||[]}yn.prototype=Object.create(Te.prototype),yn.prototype.constructor=yn,yn.prototype.isSplineCurve=!0,yn.prototype.getPoint=function(e,t){const n=t||new H,i=this.points,r=(i.length-1)*e,o=Math.floor(r),s=r-o,c=i[o===0?o:o-1],a=i[o],l=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(rh(s,c.x,a.x,l.x,h.x),rh(s,c.y,a.y,l.y,h.y)),n},yn.prototype.copy=function(e){Te.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this},yn.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e},yn.prototype.fromJSON=function(e){Te.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new H().fromArray(i))}return this};var zc=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:Ut,CubicBezierCurve:pn,CubicBezierCurve3:Pn,EllipseCurve:Yt,LineCurve:Gt,LineCurve3:mn,QuadraticBezierCurve:gn,QuadraticBezierCurve3:In,SplineCurve:yn});function Kn(){Te.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Kn.prototype=Object.assign(Object.create(Te.prototype),{constructor:Kn,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Gt(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,o=this.curves[i],s=o.getLength(),c=s===0?0:1-r/s;return o.getPointAt(c)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],s=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(s);for(let a=0;a<c.length;a++){const l=c[a];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){Te.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=Te.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){Te.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zc[i.type]().fromJSON(i))}return this}});function xn(e){Kn.call(this),this.type="Path",this.currentPoint=new H,e&&this.setFromPoints(e)}xn.prototype=Object.assign(Object.create(Kn.prototype),{constructor:xn,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new Gt(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new gn(this.currentPoint.clone(),new H(e,t),new H(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,o){const s=new pn(this.currentPoint.clone(),new H(e,t),new H(n,i),new H(r,o));return this.curves.push(s),this.currentPoint.set(r,o),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new yn(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,o){const s=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+s,t+c,n,i,r,o),this},absarc:function(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this},ellipse:function(e,t,n,i,r,o,s,c){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+a,t+l,n,i,r,o,s,c),this},absellipse:function(e,t,n,i,r,o,s,c){const a=new Yt(e,t,n,i,r,o,s,c);if(this.curves.length>0){const h=a.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(a);const l=a.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return Kn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=Kn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Kn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function bi(e){xn.call(this,e),this.uuid=Ue.generateUUID(),this.type="Shape",this.holes=[]}bi.prototype=Object.assign(Object.create(xn.prototype),{constructor:bi,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){xn.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=xn.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){xn.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xn().fromJSON(i))}return this}});function rt(e,t){se.call(this),this.type="Light",this.color=new me(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}rt.prototype=Object.assign(Object.create(se.prototype),{constructor:rt,isLight:!0,copy:function(e){return se.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=se.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function kc(e,t,n){rt.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(se.DefaultUp),this.updateMatrix(),this.groundColor=new me(t)}kc.prototype=Object.assign(Object.create(rt.prototype),{constructor:kc,isHemisphereLight:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function Dn(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new H(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}Object.assign(Dn.prototype,{_projScreenMatrix:new Ge,_lightPositionWorld:new M,_lookTarget:new M,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,o=this._lightPositionWorld;o.setFromMatrixPosition(e.matrixWorld),t.position.copy(o),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function Hc(){Dn.call(this,new dt(50,1,.5,500))}Hc.prototype=Object.assign(Object.create(Dn.prototype),{constructor:Hc,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=Ue.RAD2DEG*2*e.angle,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),Dn.prototype.updateMatrices.call(this,e)}});function Vc(e,t,n,i,r,o){rt.call(this,e,t),this.type="SpotLight",this.position.copy(se.DefaultUp),this.updateMatrix(),this.target=new se,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=o!==void 0?o:1,this.shadow=new Hc}Vc.prototype=Object.assign(Object.create(rt.prototype),{constructor:Vc,isSpotLight:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Wc(){Dn.call(this,new dt(90,1,.5,500)),this._frameExtents=new H(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}Wc.prototype=Object.assign(Object.create(Dn.prototype),{constructor:Wc,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,o=this._lookTarget,s=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),o.copy(n.position),o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(o),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),s.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s)}});function jc(e,t,n,i){rt.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new Wc}jc.prototype=Object.assign(Object.create(rt.prototype),{constructor:jc,isPointLight:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Ro(e,t,n,i,r,o){Cn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=o!==void 0?o:2e3,this.updateProjectionMatrix()}Ro.prototype=Object.assign(Object.create(Cn.prototype),{constructor:Ro,isOrthographicCamera:!0,copy:function(e,t){return Cn.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,s-=l*this.view.offsetY,c=s-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=se.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function qc(){Dn.call(this,new Ro(-5,5,5,-5,.5,500))}qc.prototype=Object.assign(Object.create(Dn.prototype),{constructor:qc,isDirectionalLightShadow:!0,updateMatrices:function(e){Dn.prototype.updateMatrices.call(this,e)}});function Xc(e,t){rt.call(this,e,t),this.type="DirectionalLight",this.position.copy(se.DefaultUp),this.updateMatrix(),this.target=new se,this.shadow=new qc}Xc.prototype=Object.assign(Object.create(rt.prototype),{constructor:Xc,isDirectionalLight:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function oa(e,t){rt.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}oa.prototype=Object.assign(Object.create(rt.prototype),{constructor:oa,isAmbientLight:!0});function Yc(e,t,n,i){rt.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Yc.prototype=Object.assign(Object.create(rt.prototype),{constructor:Yc,isRectAreaLight:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=rt.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function Jc(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new M)}Object.assign(Jc.prototype,{isSphericalHarmonics3:!0,set:function(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this},zero:function(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this},getAt:function(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t},getIrradianceAt:function(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t},add:function(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this},addScaledSH:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this},scale:function(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this},lerp:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this},equals:function(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0},copy:function(e){return this.set(e.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(e,t){t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}}),Object.assign(Jc,{getBasisAt:function(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}});function rn(e,t){rt.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Jc}rn.prototype=Object.assign(Object.create(rt.prototype),{constructor:rn,isLightProbe:!0,copy:function(e){return rt.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=rt.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function sa(e){Xe.call(this,e),this.textures={}}sa.prototype=Object.assign(Object.create(Xe.prototype),{constructor:sa,load:function(e,t,n,i){const r=this,o=new nn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new xx[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new me().setHex(e.sheen)),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new me().setHex(o.value);break;case"v2":i.uniforms[r].value=new H().fromArray(o.value);break;case"v3":i.uniforms[r].value=new M().fromArray(o.value);break;case"v4":i.uniforms[r].value=new $e().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Lt().fromArray(o.value);case"m4":i.uniforms[r].value=new Ge().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new H().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const oh={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function aa(){de.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}aa.prototype=Object.assign(Object.create(de.prototype),{constructor:aa,isInstancedBufferGeometry:!0,copy:function(e){return de.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=de.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function Zc(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ee.call(this,e,t,n),this.meshPerAttribute=i||1}Zc.prototype=Object.assign(Object.create(Ee.prototype),{constructor:Zc,isInstancedBufferAttribute:!0,copy:function(e){return Ee.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=Ee.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function $c(e){Xe.call(this,e)}$c.prototype=Object.assign(Object.create(Xe.prototype),{constructor:$c,load:function(e,t,n,i){const r=this,o=new nn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.load(e,function(s){try{t(r.parse(JSON.parse(s)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(f,d){if(t[d]!==void 0)return t[d];const x=f.interleavedBuffers[d],y=r(f,x.buffer),g=new ca[x.type](y),m=new jt(g,x.stride);return m.uuid=x.uuid,t[d]=m,m}function r(f,d){if(n[d]!==void 0)return n[d];const x=f.arrayBuffers[d],y=new Uint32Array(x).buffer;return n[d]=y,y}const o=e.isInstancedBufferGeometry?new aa:new de,s=e.data.index;if(s!==void 0){const f=new ca[s.type](s.array);o.setIndex(new Ee(f,1))}const c=e.data.attributes;for(const f in c){const d=c[f];let p;if(d.isInterleavedBufferAttribute){const x=i(e.data,d.data);p=new gi(x,d.itemSize,d.offset,d.normalized)}else{const x=new ca[d.type](d.array),y=d.isInstancedBufferAttribute?Zc:Ee;p=new y(x,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),o.setAttribute(f,p)}const a=e.data.morphAttributes;if(a)for(const f in a){const d=a[f],p=[];for(let x=0,y=d.length;x<y;x++){const g=d[x];let m;if(g.isInterleavedBufferAttribute){const b=i(e.data,g.data);m=new gi(b,g.itemSize,g.offset,g.normalized)}else{const b=new ca[g.type](g.array);m=new Ee(b,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}o.morphAttributes[f]=p}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,d=h.length;f!==d;++f){const p=h[f];o.addGroup(p.start,p.count,p.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new M;u.center!==void 0&&f.fromArray(u.center),o.boundingSphere=new En(f,u.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}});const ca={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Qc(e){Xe.call(this,e)}Qc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Qc,load:function(e,t,n,i){const r=this,o=this.path===""?oh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const s=new nn(r.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.load(e,function(c){let a=null;try{a=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(a,t)},n,i)},parse:function(e,t){const n=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,n),r=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,r),s=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,s);return e.animations&&(c.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(c),c},parseShape:function(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new bi().fromJSON(e[n]);t[r.uuid]=r}return t},parseGeometries:function(e,t){const n={};let i;if(e!==void 0){const r=new $c;for(let o=0,s=e.length;o<s;o++){let c;const a=e[o];switch(a.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new Ct[a.type](a.width,a.height,a.widthSegments,a.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":c=new Ct[a.type](a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new Ct[a.type](a.radius,a.segments,a.thetaStart,a.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new Ct[a.type](a.radiusTop,a.radiusBottom,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new Ct[a.type](a.radius,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new Ct[a.type](a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new Ct[a.type](a.radius,a.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new Ct[a.type](a.innerRadius,a.outerRadius,a.thetaSegments,a.phiSegments,a.thetaStart,a.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new Ct[a.type](a.radius,a.tube,a.radialSegments,a.tubularSegments,a.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new Ct[a.type](a.radius,a.tube,a.tubularSegments,a.radialSegments,a.p,a.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new Ct[a.type](new zc[a.path.type]().fromJSON(a.path),a.tubularSegments,a.radius,a.radialSegments,a.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new Ct[a.type](a.points,a.segments,a.phiStart,a.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new Ct[a.type](a.vertices,a.indices,a.radius,a.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let h=0,u=a.shapes.length;h<u;h++){const f=t[a.shapes[h]];i.push(f)}c=new Ct[a.type](i,a.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let h=0,u=a.shapes.length;h<u;h++){const f=t[a.shapes[h]];i.push(f)}const l=a.options.extrudePath;l!==void 0&&(a.options.extrudePath=new zc[l.type]().fromJSON(l)),c=new Ct[a.type](i,a.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=r.parse(a);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+a.type+'"');continue}c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),c.isBufferGeometry===!0&&a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}}return n},parseMaterials:function(e,t){const n={},i={};if(e!==void 0){const r=new sa;r.setTextures(t);for(let o=0,s=e.length;o<s;o++){const c=e[o];if(c.type==="MultiMaterial"){const a=[];for(let l=0;l<c.materials.length;l++){const h=c.materials[l];n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),a.push(n[h.uuid])}i[c.uuid]=a}else n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i},parseAnimations:function(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n],r=en.parse(i);i.uuid!==void 0&&(r.uuid=i.uuid),t.push(r)}return t},parseImages:function(e,t){const n=this,i={};let r;function o(s){return n.manager.itemStart(s),r.load(s,function(){n.manager.itemEnd(s)},void 0,function(){n.manager.itemError(s),n.manager.itemEnd(s)})}if(e!==void 0&&e.length>0){const s=new eh(t);r=new To(s),r.setCrossOrigin(this.crossOrigin);for(let c=0,a=e.length;c<a;c++){const l=e[c],h=l.url;if(Array.isArray(h)){i[l.uuid]=[];for(let u=0,f=h.length;u<f;u++){const d=h[u],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(d)?d:n.resourcePath+d;i[l.uuid].push(o(p))}}else{const u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.resourcePath+l.url;i[l.uuid]=o(u)}}}return i},parseTextures:function(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const s=e[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),t[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);let c;Array.isArray(t[s.image])?c=new jn(t[s.image]):c=new tt(t[s.image]),c.needsUpdate=!0,c.uuid=s.uuid,s.name!==void 0&&(c.name=s.name),s.mapping!==void 0&&(c.mapping=n(s.mapping,Cx)),s.offset!==void 0&&c.offset.fromArray(s.offset),s.repeat!==void 0&&c.repeat.fromArray(s.repeat),s.center!==void 0&&c.center.fromArray(s.center),s.rotation!==void 0&&(c.rotation=s.rotation),s.wrap!==void 0&&(c.wrapS=n(s.wrap[0],sh),c.wrapT=n(s.wrap[1],sh)),s.format!==void 0&&(c.format=s.format),s.type!==void 0&&(c.type=s.type),s.encoding!==void 0&&(c.encoding=s.encoding),s.minFilter!==void 0&&(c.minFilter=n(s.minFilter,ah)),s.magFilter!==void 0&&(c.magFilter=n(s.magFilter,ah)),s.anisotropy!==void 0&&(c.anisotropy=s.anisotropy),s.flipY!==void 0&&(c.flipY=s.flipY),s.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=s.premultiplyAlpha),s.unpackAlignment!==void 0&&(c.unpackAlignment=s.unpackAlignment),i[s.uuid]=c}return i},parseObject:function(e,t,n){let i;function r(a){return t[a]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",a),t[a]}function o(a){if(a!==void 0){if(Array.isArray(a)){const l=[];for(let h=0,u=a.length;h<u;h++){const f=a[h];n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),l.push(n[f])}return l}return n[a]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",a),n[a]}}let s,c;switch(e.type){case"Scene":i=new Hr,e.background!==void 0&&Number.isInteger(e.background)&&(i.background=new me(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?i.fog=new xc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(i.fog=new yc(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(i.focus=e.focus),e.zoom!==void 0&&(i.zoom=e.zoom),e.filmGauge!==void 0&&(i.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(i.filmOffset=e.filmOffset),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new Ro(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(i.zoom=e.zoom),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new oa(e.color,e.intensity);break;case"DirectionalLight":i=new Xc(e.color,e.intensity);break;case"PointLight":i=new jc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new Yc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new Vc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new kc(e.color,e.groundColor,e.intensity);break;case"LightProbe":i=new rn().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":s=r(e.geometry),c=o(e.material),i=new et(s,c);break;case"InstancedMesh":s=r(e.geometry),c=o(e.material);const a=e.count,l=e.instanceMatrix;i=new Mc(s,c,a),i.instanceMatrix=new Ee(new Float32Array(l.array),16);break;case"LOD":i=new Es;break;case"Line":i=new qt(r(e.geometry),o(e.material),e.mode);break;case"LineLoop":i=new Sc(r(e.geometry),o(e.material));break;case"LineSegments":i=new pt(r(e.geometry),o(e.material));break;case"PointCloud":case"Points":i=new Ds(r(e.geometry),o(e.material));break;case"Sprite":i=new _c(o(e.material));break;case"Group":i=new Xn;break;default:i=new se}if(i.uuid=e.uuid,e.name!==void 0&&(i.name=e.name),e.matrix!==void 0?(i.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(e.position!==void 0&&i.position.fromArray(e.position),e.rotation!==void 0&&i.rotation.fromArray(e.rotation),e.quaternion!==void 0&&i.quaternion.fromArray(e.quaternion),e.scale!==void 0&&i.scale.fromArray(e.scale)),e.castShadow!==void 0&&(i.castShadow=e.castShadow),e.receiveShadow!==void 0&&(i.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(i.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(i.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(i.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(i.visible=e.visible),e.frustumCulled!==void 0&&(i.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(i.renderOrder=e.renderOrder),e.userData!==void 0&&(i.userData=e.userData),e.layers!==void 0&&(i.layers.mask=e.layers),e.children!==void 0){const a=e.children;for(let l=0;l<a.length;l++)i.add(this.parseObject(a[l],t,n))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(i.autoUpdate=e.autoUpdate);const a=e.levels;for(let l=0;l<a.length;l++){const h=a[l],u=i.getObjectByProperty("uuid",h.object);u!==void 0&&i.addLevel(u,h.distance)}}return i}});const Cx={UVMapping:Ra,CubeReflectionMapping:Pa,CubeRefractionMapping:Ia,EquirectangularReflectionMapping:Il,EquirectangularRefractionMapping:Da,CubeUVReflectionMapping:Or,CubeUVRefractionMapping:Wo},sh={RepeatWrapping:jo,ClampToEdgeWrapping:Pt,MirroredRepeatWrapping:qo},ah={NearestFilter:gt,NearestMipmapNearestFilter:Na,NearestMipmapLinearFilter:Ba,LinearFilter:Mt,LinearMipmapNearestFilter:Dl,LinearMipmapLinearFilter:Xo};function ch(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Xe.call(this,e),this.options={premultiplyAlpha:"none"}}ch.prototype=Object.assign(Object.create(Xe.prototype),{constructor:ch,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;fetch(e).then(function(s){return s.blob()}).then(function(s){return createImageBitmap(s,r.options)}).then(function(s){dn.add(e,s),t&&t(s),r.manager.itemEnd(e)}).catch(function(s){i&&i(s),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function lh(){this.type="ShapePath",this.color=new me,this.subPaths=[],this.currentPath=null}Object.assign(lh.prototype,{moveTo:function(e,t){return this.currentPath=new xn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(g){const m=[];for(let b=0,v=g.length;b<v;b++){const w=g[b],T=new bi;T.curves=w.curves,m.push(T)}return m}function i(g,m){const b=m.length;let v=!1;for(let w=b-1,T=0;T<b;w=T++){let L=m[w],G=m[T],C=G.x-L.x,Y=G.y-L.y;if(Math.abs(Y)>Number.EPSILON){if(Y<0&&(L=m[T],C=-C,G=m[w],Y=-Y),g.y<L.y||g.y>G.y)continue;if(g.y===L.y){if(g.x===L.x)return!0}else{const N=Y*(g.x-L.x)-C*(g.y-L.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(g.y!==L.y)continue;if(G.x<=g.x&&g.x<=L.x||L.x<=g.x&&g.x<=G.x)return!0}}return v}const r=Zn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let s,c,a,l=[];if(o.length===1)return c=o[0],a=new bi,a.curves=c.curves,l.push(a),l;let h=!r(o[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,x;f[p]=void 0,d[p]=[];for(let g=0,m=o.length;g<m;g++)c=o[g],x=c.getPoints(),s=r(x),s=e?!s:s,s?(!h&&f[p]&&p++,f[p]={s:new bi,p:x},f[p].s.curves=c.curves,h&&p++,d[p]=[]):d[p].push({h:c,p:x[0]});if(!f[0])return n(o);if(f.length>1){let g=!1;const m=[];for(let b=0,v=f.length;b<v;b++)u[b]=[];for(let b=0,v=f.length;b<v;b++){const w=d[b];for(let T=0;T<w.length;T++){const L=w[T];let G=!0;for(let C=0;C<f.length;C++)i(L.p,f[C].p)&&(b!==C&&m.push({froms:b,tos:C,hole:T}),G?(G=!1,u[C].push(L)):g=!0);G&&u[b].push(L)}}m.length>0&&(g||(d=u))}let y;for(let g=0,m=f.length;g<m;g++){a=f[g].s,l.push(a),y=d[g];for(let b=0,v=y.length;b<v;b++)a.holes.push(y[b].h)}return l}});function uh(e){this.type="Font",this.data=e}Object.assign(uh.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);const n=[],i=Rx(e,t,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function Rx(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,s=[];let c=0,a=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)c=0,a-=o;else{const u=Px(h,r,c,a,n);c+=u.offsetX,s.push(u.path)}}return s}function Px(e,t,n,i,r){const o=r.glyphs[e]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const s=new lh;let c,a,l,h,u,f,d,p;if(o.o){const x=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let y=0,g=x.length;y<g;)switch(x[y++]){case"m":c=x[y++]*t+n,a=x[y++]*t+i,s.moveTo(c,a);break;case"l":c=x[y++]*t+n,a=x[y++]*t+i,s.lineTo(c,a);break;case"q":l=x[y++]*t+n,h=x[y++]*t+i,u=x[y++]*t+n,f=x[y++]*t+i,s.quadraticCurveTo(u,f,l,h);break;case"b":l=x[y++]*t+n,h=x[y++]*t+i,u=x[y++]*t+n,f=x[y++]*t+i,d=x[y++]*t+n,p=x[y++]*t+i,s.bezierCurveTo(u,f,d,p,l,h);break}}return{offsetX:o.ha*t,path:s}}function hh(e){Xe.call(this,e)}hh.prototype=Object.assign(Object.create(Xe.prototype),{constructor:hh,load:function(e,t,n,i){const r=this,o=new nn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.load(e,function(s){let c;try{c=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(s.substring(65,s.length-2))}const a=r.parse(c);t&&t(a)},n,i)},parse:function(e){return new uh(e)}});let la;const fh={getContext:function(){return la===void 0&&(la=new(window.AudioContext||window.webkitAudioContext)),la},setContext:function(e){la=e}};function Kc(e){Xe.call(this,e)}Kc.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Kc,load:function(e,t,n,i){const r=this,o=new nn(r.manager);o.setResponseType("arraybuffer"),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.load(e,function(s){try{const c=s.slice(0);fh.getContext().decodeAudioData(c,function(l){t(l)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}});function dh(e,t,n){rn.call(this,void 0,n);const i=new me().set(e),r=new me().set(t),o=new M(i.r,i.g,i.b),s=new M(r.r,r.g,r.b),c=Math.sqrt(Math.PI),a=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(s).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(a)}dh.prototype=Object.assign(Object.create(rn.prototype),{constructor:dh,isHemisphereLightProbe:!0,copy:function(e){return rn.prototype.copy.call(this,e),this},toJSON:function(e){return rn.prototype.toJSON.call(this,e)}});function ph(e,t){rn.call(this,void 0,t);const n=new me().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}ph.prototype=Object.assign(Object.create(rn.prototype),{constructor:ph,isAmbientLightProbe:!0,copy:function(e){return rn.prototype.copy.call(this,e),this},toJSON:function(e){return rn.prototype.toJSON.call(this,e)}});const mh=new Ge,gh=new Ge;function Ix(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new dt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new dt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Ix.prototype,{update:function(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,o=r*t.near/t.focus,s=t.near*Math.tan(Ue.DEG2RAD*t.fov*.5)/t.zoom;let c,a;gh.elements[12]=-r,mh.elements[12]=r,c=-s*t.aspect+o,a=s*t.aspect+o,i.elements[0]=2*t.near/(a-c),i.elements[8]=(a+c)/(a-c),this.cameraL.projectionMatrix.copy(i),c=-s*t.aspect-o,a=s*t.aspect-o,i.elements[0]=2*t.near/(a-c),i.elements[8]=(a+c)/(a-c),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(gh),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(mh)}});function yh(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(yh.prototype,{start:function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=(typeof performance>"u"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});const wi=new M,xh=new yt,Dx=new M,Mi=new M;function vh(){se.call(this),this.type="AudioListener",this.context=fh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new yh}vh.prototype=Object.assign(Object.create(se.prototype),{constructor:vh,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(e){se.prototype.updateMatrixWorld.call(this,e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(wi,xh,Dx),Mi.set(0,0,-1).applyQuaternion(xh),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(wi.x,i),t.positionY.linearRampToValueAtTime(wi.y,i),t.positionZ.linearRampToValueAtTime(wi.z,i),t.forwardX.linearRampToValueAtTime(Mi.x,i),t.forwardY.linearRampToValueAtTime(Mi.y,i),t.forwardZ.linearRampToValueAtTime(Mi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(wi.x,wi.y,wi.z),t.setOrientation(Mi.x,Mi.y,Mi.z,n.x,n.y,n.z)}});function Po(e){se.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}Po.prototype=Object.assign(Object.create(se.prototype),{constructor:Po,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setMediaStreamSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(e){return this.loopStart=e,this},setLoopEnd:function(e){return this.loopEnd=e,this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});const Si=new M,_h=new yt,Nx=new M,Ei=new M;function bh(e){Po.call(this,e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}bh.prototype=Object.assign(Object.create(Po.prototype),{constructor:bh,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(e){if(se.prototype.updateMatrixWorld.call(this,e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Si,_h,Nx),Ei.set(0,0,1).applyQuaternion(_h);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Si.x,n),t.positionY.linearRampToValueAtTime(Si.y,n),t.positionZ.linearRampToValueAtTime(Si.z,n),t.orientationX.linearRampToValueAtTime(Ei.x,n),t.orientationY.linearRampToValueAtTime(Ei.y,n),t.orientationZ.linearRampToValueAtTime(Ei.z,n)}else t.setPosition(Si.x,Si.y,Si.z),t.setOrientation(Ei.x,Ei.y,Ei.z)}});function wh(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(wh.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}});function Mh(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Mh.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let s=0;s!==i;++s)n[r+s]=n[s];o=t}else{o+=t;const s=t/o;this._mixBufferRegion(n,r,0,s,i)}this.cumulativeWeight=o},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){s.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]},_slerp:function(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const o=this._workIndex*r;yt.multiplyQuaternionsFlat(e,o,e,t,e,n),yt.slerpFlat(e,t,e,t,e,o,i)},_lerp:function(e,t,n,i,r){const o=1-i;for(let s=0;s!==r;++s){const c=t+s;e[c]=e[c]*o+e[n+s]*i}},_lerpAdditive:function(e,t,n,i,r){for(let o=0;o!==r;++o){const s=t+o;e[s]=e[s]+e[n+o]*i}}});const el="\\[\\]\\.:\\/",Bx=new RegExp("["+el+"]","g"),tl="[^"+el+"]",Ox="[^"+el.replace("\\.","")+"]",Fx=/((?:WC+[\/:])*)/.source.replace("WC",tl),Ux=/(WCOD+)?/.source.replace("WCOD",Ox),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),kx=new RegExp("^"+Fx+Ux+Gx+zx+"$"),Hx=["material","materials","bones"];function Sh(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Sh.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function Rt(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(Rt,{Composite:Sh,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(Bx,"")},parseTrackName:function(e){const t=kx.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const s=r[o];if(s.name===t||s.uuid===t)return s;const c=n(s.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}}),Object.assign(Rt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===a){a=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}const o=e[i];if(o===void 0){const a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+i+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(Rt.prototype,{_getValue_unbound:Rt.prototype.getValue,_setValue_unbound:Rt.prototype.setValue});function Vx(){this.uuid=Ue.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(Vx.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let s,c=e.length,a=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){const u=arguments[l],f=u.uuid;let d=t[f];if(d===void 0){d=c++,t[f]=d,e.push(u);for(let p=0,x=o;p!==x;++p)r[p].push(new Rt(u,n[p],i[p]))}else if(d<a){s=e[d];const p=--a,x=e[p];t[x.uuid]=d,e[d]=x,t[f]=p,e[p]=u;for(let y=0,g=o;y!==g;++y){const m=r[y],b=m[p];let v=m[d];m[d]=b,v===void 0&&(v=new Rt(u,n[y],i[y])),m[p]=v}}else e[d]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=a},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,s=arguments.length;o!==s;++o){const c=arguments[o],a=c.uuid,l=t[a];if(l!==void 0&&l>=r){const h=r++,u=e[h];t[u.uuid]=l,e[l]=u,t[a]=h,e[h]=c;for(let f=0,d=i;f!==d;++f){const p=n[f],x=p[h],y=p[l];p[l]=x,p[h]=y}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let s=0,c=arguments.length;s!==c;++s){const a=arguments[s],l=a.uuid,h=t[l];if(h!==void 0)if(delete t[l],h<r){const u=--r,f=e[u],d=--o,p=e[d];t[f.uuid]=h,e[h]=f,t[p.uuid]=u,e[u]=p,e.pop();for(let x=0,y=i;x!==y;++x){const g=n[x],m=g[u],b=g[d];g[h]=m,g[u]=b,g.pop()}}else{const u=--o,f=e[u];t[f.uuid]=h,e[h]=f,e.pop();for(let d=0,p=i;d!==p;++d){const x=n[d];x[h]=x[u],x.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,s=this._parsedPaths,c=this._objects,a=c.length,l=this.nCachedObjects_,h=new Array(a);i=r.length,n[e]=i,o.push(e),s.push(t),r.push(h);for(let u=l,f=c.length;u!==f;++u){const d=c[u];h[u]=new Rt(d,e,t)}return h},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,s=o.length-1,c=o[s],a=e[s];t[a]=n,o[n]=c,o.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}});function Eh(e,t,n,i){this._mixer=e,this._clip=t,this._localRoot=n||null,this.blendMode=i||t.blendMode;const r=t.tracks,o=r.length,s=new Array(o),c={endingStart:Oi,endingEnd:Oi};for(let a=0;a!==o;++a){const l=r[a].createInterpolant(null);s[a]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=s,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(Eh.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,s=i/r;e.warp(1,o,t),this.warp(s,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);const c=s.parameterPositions,a=s.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this},stopWarping:function(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),s=this._updateWeight(e);if(s>0){const c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case Wl:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(o),a[l].accumulateAdditive(s);break;case Fa:default:for(let l=0,h=c.length;l!==h;++l)c[l].evaluate(o),a[l].accumulate(i,s)}}},_updateWeight:function(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Id;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Rd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const s=Math.floor(i/t);i-=t*s,r+=Math.abs(s);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i},_setEndings:function(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fi,i.endingEnd=Fi):(e?i.endingStart=this.zeroSlopeAtStart?Fi:Oi:i.endingStart=Ko,t?i.endingEnd=this.zeroSlopeAtEnd?Fi:Oi:i.endingEnd=Ko)},_scheduleFading:function(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const s=o.parameterPositions,c=o.sampleValues;return s[0]=r,c[0]=t,s[1]=r+e,c[1]=n,this}});function Th(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Th.prototype=Object.assign(Object.create(wn.prototype),{constructor:Th,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,s=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName;let l=a[c];l===void 0&&(l={},a[c]=l);for(let h=0;h!==r;++h){const u=i[h],f=u.name;let d=l[f];if(d!==void 0)o[h]=d;else{if(d=o[h],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,c,f));continue}const p=t&&t._propertyBindings[h].binding.parsedPath;d=new Mh(Rt.create(n,f,p),u.ValueTypeName,u.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,c,f),o[h]=d}s[h].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const s=o.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,s=o[r],c=s.knownActions,a=c[c.length-1],l=e._byClipCacheIndex;a._byClipCacheIndex=l,c[l]=a,c.pop(),e._byClipCacheIndex=null;const h=s.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,s=o[i],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete s[r],Object.keys(s).length===0&&delete o[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ta(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?en.findByName(i,e):e;const s=o!==null?o.uuid:e;let c=this._actionsByClip[s],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fa),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;const l=new Eh(this,o,t,n);return this._bindAction(l,a),this._addInactiveAction(l,s,r),l},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?en.findByName(n,e):e,o=r?r.uuid:e,s=this._actionsByClip[o];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(i,e,r,o);const s=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)s[a].apply(o);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let s=0,c=o.length;s!==c;++s){const a=o[s];this._deactivateAction(a);const l=a._cacheIndex,h=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,h._cacheIndex=l,t[l]=h,t.pop(),this._removeInactiveBindingsForAction(a)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const s=n[o].actionByRoot,c=s[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const s=r[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function nl(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}nl.prototype.clone=function(){return new nl(this.value.clone===void 0?this.value:this.value.clone())};function Ah(e,t,n){jt.call(this,e,t),this.meshPerAttribute=n||1}Ah.prototype=Object.assign(Object.create(jt.prototype),{constructor:Ah,isInstancedInterleavedBuffer:!0,copy:function(e){return jt.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=jt.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=jt.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Lh(e,t,n,i){this.ray=new qi(e,t),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ch(e,t){return e.distance-t.distance}function il(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let o=0,s=r.length;o<s;o++)il(r[o],t,n,!0)}}Object.assign(Lh.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){const i=n||[];return il(e,this,i,t),i.sort(Ch),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,o=e.length;r<o;r++)il(e[r],this,i,t);return i.sort(Ch),i}});function Wx(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Object.assign(Wx.prototype,{set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}});const Rh=new H;function Ph(e,t){this.min=e!==void 0?e:new H(1/0,1/0),this.max=t!==void 0?t:new H(-1/0,-1/0)}Object.assign(Ph.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=Rh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new H),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new H),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return Rh.copy(e).clamp(this.min,this.max).sub(e).length()},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});const Ih=new M,ua=new M;function Dh(e,t){this.start=e!==void 0?e:new M,this.end=t!==void 0?t:new M}Object.assign(Dh.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new M),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new M),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new M),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(e,t){Ih.subVectors(e,this.start),ua.subVectors(this.end,this.start);const n=ua.dot(ua);let r=ua.dot(Ih)/n;return t&&(r=Ue.clamp(r,0,1)),r},closestPointToPoint:function(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new M),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function ha(e){se.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ha.prototype=Object.create(se.prototype),ha.prototype.constructor=ha,ha.prototype.isImmediateRenderObject=!0;const Nh=new M;function Io(e,t){se.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new de,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,s=1,c=32;o<c;o++,s++){const a=o/c*Math.PI*2,l=s/c*Math.PI*2;i.push(Math.cos(a),Math.sin(a),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new le(i,3));const r=new ut({fog:!1,toneMapped:!1});this.cone=new pt(n,r),this.add(this.cone),this.update()}Io.prototype=Object.create(se.prototype),Io.prototype.constructor=Io,Io.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},Io.prototype.update=function(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};const ei=new M,fa=new Ge,rl=new Ge;function Bh(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Bh(e.children[n]));return t}function Sr(e){const t=Bh(e),n=new de,i=[],r=[],o=new me(0,0,1),s=new me(0,1,0);for(let a=0;a<t.length;a++){const l=t[a];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(s.r,s.g,s.b))}n.setAttribute("position",new le(i,3)),n.setAttribute("color",new le(r,3));const c=new ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});pt.call(this,n,c),this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}Sr.prototype=Object.create(pt.prototype),Sr.prototype.constructor=Sr,Sr.prototype.isSkeletonHelper=!0,Sr.prototype.updateMatrixWorld=function(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");rl.getInverse(this.root.matrixWorld);for(let r=0,o=0;r<t.length;r++){const s=t[r];s.parent&&s.parent.isBone&&(fa.multiplyMatrices(rl,s.matrixWorld),ei.setFromMatrixPosition(fa),i.setXYZ(o,ei.x,ei.y,ei.z),fa.multiplyMatrices(rl,s.parent.matrixWorld),ei.setFromMatrixPosition(fa),i.setXYZ(o+1,ei.x,ei.y,ei.z),o+=2)}n.getAttribute("position").needsUpdate=!0,se.prototype.updateMatrixWorld.call(this,e)};function Do(e,t,n){this.light=e,this.light.updateMatrixWorld(),this.color=n;const i=new pr(t,4,2),r=new Vt({wireframe:!0,fog:!1,toneMapped:!1});et.call(this,i,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Do.prototype=Object.create(et.prototype),Do.prototype.constructor=Do,Do.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},Do.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};const jx=new M,Oh=new me,Fh=new me;function No(e,t,n){se.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new ur(t);i.rotateY(Math.PI*.5),this.material=new Vt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Ee(o,3)),this.add(new et(i,this.material)),this.update()}No.prototype=Object.create(se.prototype),No.prototype.constructor=No,No.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},No.prototype.update=function(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Oh.copy(this.light.color),Fh.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Oh:Fh;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(jx.setFromMatrixPosition(this.light.matrixWorld).negate())};function da(e,t,n,i){e=e||10,t=t||10,n=new me(n!==void 0?n:4473924),i=new me(i!==void 0?i:8947848);const r=t/2,o=e/t,s=e/2,c=[],a=[];for(let u=0,f=0,d=-s;u<=t;u++,d+=o){c.push(-s,0,d,s,0,d),c.push(d,0,-s,d,0,s);const p=u===r?n:i;p.toArray(a,f),f+=3,p.toArray(a,f),f+=3,p.toArray(a,f),f+=3,p.toArray(a,f),f+=3}const l=new de;l.setAttribute("position",new le(c,3)),l.setAttribute("color",new le(a,3));const h=new ut({vertexColors:!0,toneMapped:!1});pt.call(this,l,h),this.type="GridHelper"}da.prototype=Object.create(pt.prototype),da.prototype.constructor=da;function ol(e,t,n,i,r,o){e=e||10,t=t||16,n=n||8,i=i||64,r=new me(r!==void 0?r:4473924),o=new me(o!==void 0?o:8947848);const s=[],c=[];for(let h=0;h<=t;h++){const u=h/t*(Math.PI*2),f=Math.sin(u)*e,d=Math.cos(u)*e;s.push(0,0,0),s.push(f,0,d);const p=h&1?r:o;c.push(p.r,p.g,p.b),c.push(p.r,p.g,p.b)}for(let h=0;h<=n;h++){const u=h&1?r:o,f=e-e/n*h;for(let d=0;d<i;d++){let p=d/i*(Math.PI*2),x=Math.sin(p)*f,y=Math.cos(p)*f;s.push(x,0,y),c.push(u.r,u.g,u.b),p=(d+1)/i*(Math.PI*2),x=Math.sin(p)*f,y=Math.cos(p)*f,s.push(x,0,y),c.push(u.r,u.g,u.b)}}const a=new de;a.setAttribute("position",new le(s,3)),a.setAttribute("color",new le(c,3));const l=new ut({vertexColors:!0,toneMapped:!1});pt.call(this,a,l),this.type="PolarGridHelper"}ol.prototype=Object.create(pt.prototype),ol.prototype.constructor=ol;const Uh=new M,pa=new M,Gh=new M;function Bo(e,t,n){se.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new de;i.setAttribute("position",new le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new ut({fog:!1,toneMapped:!1});this.lightPlane=new qt(i,r),this.add(this.lightPlane),i=new de,i.setAttribute("position",new le([0,0,0,0,0,1],3)),this.targetLine=new qt(i,r),this.add(this.targetLine),this.update()}Bo.prototype=Object.create(se.prototype),Bo.prototype.constructor=Bo,Bo.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},Bo.prototype.update=function(){Uh.setFromMatrixPosition(this.light.matrixWorld),pa.setFromMatrixPosition(this.light.target.matrixWorld),Gh.subVectors(pa,Uh),this.lightPlane.lookAt(pa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(pa),this.targetLine.scale.z=Gh.length()};const ma=new M,ht=new Cn;function ga(e){const t=new de,n=new ut({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},s=new me(16755200),c=new me(16711680),a=new me(43775),l=new me(16777215),h=new me(3355443);u("n1","n2",s),u("n2","n4",s),u("n4","n3",s),u("n3","n1",s),u("f1","f2",s),u("f2","f4",s),u("f4","f3",s),u("f3","f1",s),u("n1","f1",s),u("n2","f2",s),u("n3","f3",s),u("n4","f4",s),u("p","n1",c),u("p","n2",c),u("p","n3",c),u("p","n4",c),u("u1","u2",a),u("u2","u3",a),u("u3","u1",a),u("c","t",l),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(d,p,x){f(d,x),f(p,x)}function f(d,p){i.push(0,0,0),r.push(p.r,p.g,p.b),o[d]===void 0&&(o[d]=[]),o[d].push(i.length/3-1)}t.setAttribute("position",new le(i,3)),t.setAttribute("color",new le(r,3)),pt.call(this,t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}ga.prototype=Object.create(pt.prototype),ga.prototype.constructor=ga,ga.prototype.update=function(){const e=this.geometry,t=this.pointMap,n=1,i=1;ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ft("c",t,e,ht,0,0,-1),ft("t",t,e,ht,0,0,1),ft("n1",t,e,ht,-n,-i,-1),ft("n2",t,e,ht,n,-i,-1),ft("n3",t,e,ht,-n,i,-1),ft("n4",t,e,ht,n,i,-1),ft("f1",t,e,ht,-n,-i,1),ft("f2",t,e,ht,n,-i,1),ft("f3",t,e,ht,-n,i,1),ft("f4",t,e,ht,n,i,1),ft("u1",t,e,ht,n*.7,i*1.1,-1),ft("u2",t,e,ht,-n*.7,i*1.1,-1),ft("u3",t,e,ht,0,i*2,-1),ft("cf1",t,e,ht,-n,0,1),ft("cf2",t,e,ht,n,0,1),ft("cf3",t,e,ht,0,-i,1),ft("cf4",t,e,ht,0,i,1),ft("cn1",t,e,ht,-n,0,-1),ft("cn2",t,e,ht,n,0,-1),ft("cn3",t,e,ht,0,-i,-1),ft("cn4",t,e,ht,0,i,-1),e.getAttribute("position").needsUpdate=!0};function ft(e,t,n,i,r,o,s){ma.set(r,o,s).unproject(i);const c=t[e];if(c!==void 0){const a=n.getAttribute("position");for(let l=0,h=c.length;l<h;l++)a.setXYZ(c[l],ma.x,ma.y,ma.z)}}const ya=new cn;function Er(e,t){this.object=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new de;r.setIndex(new Ee(n,1)),r.setAttribute("position",new Ee(i,3)),pt.call(this,r,new ut({color:t,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}Er.prototype=Object.create(pt.prototype),Er.prototype.constructor=Er,Er.prototype.update=function(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ya.setFromObject(this.object),ya.isEmpty())return;const t=ya.min,n=ya.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()},Er.prototype.setFromObject=function(e){return this.object=e,this.update(),this},Er.prototype.copy=function(e){return pt.prototype.copy.call(this,e),this.object=e.object,this};function xa(e,t){this.type="Box3Helper",this.box=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new de;r.setIndex(new Ee(n,1)),r.setAttribute("position",new le(i,3)),pt.call(this,r,new ut({color:t,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}xa.prototype=Object.create(pt.prototype),xa.prototype.constructor=xa,xa.prototype.updateMatrixWorld=function(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),se.prototype.updateMatrixWorld.call(this,e))};function va(e,t,n){this.plane=e,this.size=t===void 0?1:t;const i=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new de;o.setAttribute("position",new le(r,3)),o.computeBoundingSphere(),qt.call(this,o,new ut({color:i,toneMapped:!1})),this.type="PlaneHelper";const s=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new de;c.setAttribute("position",new le(s,3)),c.computeBoundingSphere(),this.add(new et(c,new Vt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}va.prototype=Object.create(qt.prototype),va.prototype.constructor=va,va.prototype.updateMatrixWorld=function(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?mt:Nr,this.lookAt(this.plane.normal),se.prototype.updateMatrixWorld.call(this,e)};const zh=new M;let _a,sl;function Ti(e,t,n,i,r,o){se.call(this),this.type="ArrowHelper",e===void 0&&(e=new M(0,0,1)),t===void 0&&(t=new M(0,0,0)),n===void 0&&(n=1),i===void 0&&(i=16776960),r===void 0&&(r=.2*n),o===void 0&&(o=.2*r),_a===void 0&&(_a=new de,_a.setAttribute("position",new le([0,0,0,0,1,0],3)),sl=new $n(0,.5,1,5,1),sl.translate(0,-.5,0)),this.position.copy(t),this.line=new qt(_a,new ut({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new et(sl,new Vt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}Ti.prototype=Object.create(se.prototype),Ti.prototype.constructor=Ti,Ti.prototype.setDirection=function(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{zh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(zh,t)}},Ti.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()},Ti.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)},Ti.prototype.copy=function(e){return se.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};function al(e){e=e||1;const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new de;i.setAttribute("position",new le(t,3)),i.setAttribute("color",new le(n,3));const r=new ut({vertexColors:!0,toneMapped:!1});pt.call(this,i,r),this.type="AxesHelper"}al.prototype=Object.create(pt.prototype),al.prototype.constructor=al;const Tr=4,ti=8,vn=Math.pow(2,ti),kh=[.125,.215,.35,.446,.526,.582],Hh=ti-Tr+1+kh.length,Ar=20,_n={[It]:0,[es]:1,[Ga]:2,[jl]:3,[ql]:4,[Xl]:5,[Ua]:6},cl=new Ro,{_lodPlanes:Oo,_sizeLods:Vh,_sigmas:ba}=Xx();let ll=null;const Ai=(1+Math.sqrt(5))/2,Lr=1/Ai,Wh=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Ai,Lr),new M(0,Ai,-Lr),new M(Lr,0,Ai),new M(-Lr,0,Ai),new M(Ai,Lr,0),new M(-Ai,Lr,0)];function jh(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Yx(Ar),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}jh.prototype={constructor:jh,fromScene:function(e,t=0,n=.1,i=100){ll=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(e){return this._fromTexture(e)},fromCubemap:function(e){return this._fromTexture(e)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=Yh(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=Xh(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Oo.length;e++)Oo[e].dispose()},_cleanup:function(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ll),e.scissorTest=!1,wa(e,0,0,e.width,e.height)},_fromTexture:function(e){ll=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t},_allocateTargets:function(e){const t={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Fr,format:Xf,encoding:qx(e)?e.encoding:Ga,depthBuffer:!1,stencilBuffer:!1},n=qh(t);return n.depthBuffer=!e,this._pingPongRenderTarget=qh(t),n},_compileMaterial:function(e){const t=new et(Oo[0],e);this._renderer.compile(t,cl)},_sceneToCubeUV:function(e,t,n,i){const s=new dt(90,1,t,n),c=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,h=l.outputEncoding,u=l.toneMapping,f=l.getClearColor(),d=l.getClearAlpha();l.toneMapping=Ni,l.outputEncoding=It;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();const x=Math.max(p.r,p.g,p.b),y=Math.min(Math.max(Math.ceil(Math.log2(x)),-128),127);p=p.multiplyScalar(Math.pow(2,-y));const g=(y+128)/255;l.setClearColor(p,g),e.background=null}for(let x=0;x<6;x++){const y=x%3;y==0?(s.up.set(0,c[x],0),s.lookAt(a[x],0,0)):y==1?(s.up.set(0,0,c[x]),s.lookAt(0,a[x],0)):(s.up.set(0,c[x],0),s.lookAt(0,0,a[x])),wa(i,y*vn,x>2?vn:0,vn,vn),l.setRenderTarget(i),l.render(e,s)}l.toneMapping=u,l.outputEncoding=h,l.setClearColor(f,d)},_textureToCubeUV:function(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Yh()):this._equirectShader==null&&(this._equirectShader=Xh());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new et(Oo[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=_n[e.encoding],o.outputEncoding.value=_n[t.texture.encoding],wa(t,0,0,3*vn,2*vn),n.setRenderTarget(t),n.render(r,cl)},_applyPMREM:function(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Hh;i++){const r=Math.sqrt(ba[i]*ba[i]-ba[i-1]*ba[i-1]),o=Wh[(i-1)%Wh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n},_blur:function(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)},_halfBlur:function(e,t,n,i,r,o,s){const c=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new et(Oo[i],a),u=a.uniforms,f=Vh[n]-1,d=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ar-1),p=r/d,x=isFinite(r)?1+Math.floor(l*p):Ar;x>Ar&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ar}`);const y=[];let g=0;for(let w=0;w<Ar;++w){const T=w/p,L=Math.exp(-T*T/2);y.push(L),w==0?g+=L:w<x&&(g+=2*L)}for(let w=0;w<y.length;w++)y[w]=y[w]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=y,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s),u.dTheta.value=d,u.mipInt.value=ti-n,u.inputEncoding.value=_n[e.texture.encoding],u.outputEncoding.value=_n[e.texture.encoding];const m=Vh[i],b=3*Math.max(0,vn-2*m),v=(i===0?0:2*vn)+2*m*(i>ti-Tr?i-ti+Tr:0);wa(t,b,v,3*m,2*m),c.setRenderTarget(t),c.render(h,cl)}};function qx(e){return e===void 0||e.type!==Fr?!1:e.encoding===It||e.encoding===es||e.encoding===Ua}function Xx(){const e=[],t=[],n=[];let i=ti;for(let r=0;r<Hh;r++){const o=Math.pow(2,i);t.push(o);let s=1/o;r>ti-Tr?s=kh[r-ti+Tr-1]:r==0&&(s=0),n.push(s);const c=1/(o-1),a=-c/2,l=1+c/2,h=[a,a,l,a,l,l,a,a,l,l,a,l],u=6,f=6,d=3,p=2,x=1,y=new Float32Array(d*f*u),g=new Float32Array(p*f*u),m=new Float32Array(x*f*u);for(let v=0;v<u;v++){const w=v%3*2/3-1,T=v>2?0:-1,L=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(L,d*f*v),g.set(h,p*f*v);const G=[v,v,v,v,v,v];m.set(G,x*f*v)}const b=new de;b.setAttribute("position",new Ee(y,d)),b.setAttribute("uv",new Ee(g,p)),b.setAttribute("faceIndex",new Ee(m,x)),e.push(b),i>Tr&&i--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function qh(e){const t=new Ht(3*vn,3*vn,e);return t.texture.mapping=Or,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function wa(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Yx(e){const t=new Float32Array(e),n=new M(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:_n[It]},outputEncoding:{value:_n[It]}},vertexShader:ul(),fragmentShader:`

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

			${hl()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Xh(){const e=new H(1,1);return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:_n[It]},outputEncoding:{value:_n[It]}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${hl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Yh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:_n[It]},outputEncoding:{value:_n[It]}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${hl()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function hl(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}Te.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(Te.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},Object.assign(Kn.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=new Ne;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.vertices.push(new M(r.x,r.y,r.z||0))}return t}}),Object.assign(xn.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}}),Object.create(Ut.prototype),Object.create(Ut.prototype);function Jh(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Ut.call(this,e),this.type="catmullrom"}Jh.prototype=Object.create(Ut.prototype),Object.assign(Jh.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),da.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Sr.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign(Xe.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),oh.extractUrlBase(e)}}),Xe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(Qc.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}),Object.assign(Ph.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(cn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(En.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),$r.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)},Dh.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)},Object.assign(Ue,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Ue.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Ue.ceilPowerOfTwo(e)}}),Object.assign(Lt.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}}),Object.assign(Ge.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,o){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,o)}}),ln.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)},yt.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},Object.assign(qi.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}}),Object.assign(bt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}}),Object.assign(bt,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),bt.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),bt.getNormal(e,t,n,i)}}),Object.assign(bi.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new dr(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new mr(this,e)}}),Object.assign(H.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(M.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign($e.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Ne.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.assign(se.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(se.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(et.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(et.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Dd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Es.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(wc.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),bc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(Te.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}}),dt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)},Object.defineProperties(rt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}}),Object.defineProperties(Ee.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===zr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(zr)}}}),Object.assign(Ee.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?zr:ts),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(de.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new Ee(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(de.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(aa.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}}),Object.defineProperties(Lh.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}}),Object.defineProperties(jt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===zr},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}}),Object.assign(jt.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?zr:ts),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Rn.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.defineProperties(nl.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(De.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Sl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}}),Object.defineProperties(_i.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(vi.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}}),Object.defineProperties(Dt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}}),Object.assign(io.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(io.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?es:It}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Ru.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Ht.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}}),Object.defineProperties(Po.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Kc().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),wh.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Jr.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)},li.crossOrigin=void 0,li.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new ia;r.setCrossOrigin(this.crossOrigin);const o=r.load(e,n,void 0,i);return t&&(o.mapping=t),o},li.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Bc;r.setCrossOrigin(this.crossOrigin);const o=r.load(e,n,void 0,i);return t&&(o.mapping=t),o},li.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},li.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));const Nn=function(){const[e,t]=arguments;/\/1\/601-tinified/.test(t)&&console.log(...arguments)},Tt={};class Jx extends Xe{constructor(t){super(t)}load(t,n,i,r,o){Nn("load",t),t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=dn.get(t);if(s!==void 0)return Nn("cached",t),this.manager.itemStart(t),setTimeout(()=>{n&&n(s),this.manager.itemEnd(t)},0),s;if(Tt[t]!==void 0){Tt[t].push({onLoad:n,onProgress:i,onError:r}),Nn("return",t,Tt[t]);return}Tt[t]=[],Tt[t].push({onLoad:n,onProgress:i,onError:r}),Nn("push",t,Tt[t]);const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;Nn("started fetch",t),fetch(c,o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Tt[t],f=h.body.getReader(),d=h.headers.get("Content-Length"),p=d?parseInt(d):0,x=p!==0;let y=0;const g=new ReadableStream({start(m){b();function b(){f.read().then(({done:v,value:w})=>{if(v)m.close();else{y+=w.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:p});for(let L=0,G=u.length;L<G;L++){const C=u[L];C.onProgress&&C.onProgress(T)}m.enqueue(w),b()}}).catch(v=>{delete Tt[t]})}}});return new Response(g)}else throw Error(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return h.arrayBuffer().then(x=>p.decode(x))}}}).then(h=>{dn.add(t,h);const u=Tt[t];Nn("then delete",t,Tt[t]),delete Tt[t];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(h)}}).catch(h=>{const u=Tt[t];if(Nn("err delete",t,Tt[t]),delete Tt[t],u===void 0)throw this.manager.itemError(t),h;for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(h)}this.manager.itemError(t)}).finally(()=>{Nn("finally delete",t,Tt[t]),delete Tt[t],this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}const Zx=function(e){const t=dn,{signal:n}=e;t.enabled=!1;const i=new ia,r=new Jx;r.setResponseType("blob");function o(s,c,a,l,h=1){r.load(s,u,a,p=>{console.error("loader err",p),l()},{signal:n});function u(p){if(Nn("cache image called",s,p),p.tagName!="IMG"){const x=URL.createObjectURL(p),y=document.createElementNS("http://www.w3.org/1999/xhtml","img");y.onload=()=>{t.add(s,y),URL.revokeObjectURL(x),document.body.removeChild(y),h==1?f():d(y)},y.src=x,y.style.visibility="hidden",document.body.appendChild(y)}else h==1?f():d(p)}function f(){i.load(s,c,()=>{},l)}function d(p){const x=document.createElement("canvas"),y=x.getContext("2d");x.width=p.width,x.height=p.height,y.filter=`brightness(${h})`,y.drawImage(p,0,0,p.width,p.height);const g=new xi(x);c(g),x.remove()}}return Object.assign({},i,{load:o})},fl=function(){this.logging={enabled:!1,debug:!1};let e=this;this.callbacks={onProgress:function(t){e._onProgress(t)},onAssetAvailable:function(t){e._onAssetAvailable(t)},onError:function(t){e._onError(t)},onLoad:function(t,n){e._onLoad(t,n)}},this.contentRef=null,this.legacyMode=!1,this.materials={},this.materialPerSmoothingGroup=!1,this.useOAsMesh=!1,this.useIndices=!1,this.disregardNormals=!1,this.vertices=[],this.colors=[],this.normals=[],this.uvs=[],this.rawMesh={objectName:"",groupName:"",activeMtlName:"",mtllibName:"",faceType:-1,subGroups:[],subGroupInUse:null,smoothingGroup:{splitMaterials:!1,normalized:-1,real:-1},counts:{doubleIndicesCount:0,faceCount:0,mtlCount:0,smoothingGroupCount:0}},this.inputObjectCount=1,this.outputObjectCount=1,this.globalCounts={vertices:0,faces:0,doubleIndicesCount:0,lineByte:0,currentByte:0,totalBytes:0}};fl.prototype={constructor:fl,_resetRawMesh:function(){this.rawMesh.subGroups=[],this.rawMesh.subGroupInUse=null,this.rawMesh.smoothingGroup.normalized=-1,this.rawMesh.smoothingGroup.real=-1,this._pushSmoothingGroup(1),this.rawMesh.counts.doubleIndicesCount=0,this.rawMesh.counts.faceCount=0,this.rawMesh.counts.mtlCount=0,this.rawMesh.counts.smoothingGroupCount=0},setMaterialPerSmoothingGroup:function(e){return this.materialPerSmoothingGroup=e===!0,this},setUseOAsMesh:function(e){return this.useOAsMesh=e===!0,this},setUseIndices:function(e){return this.useIndices=e===!0,this},setDisregardNormals:function(e){return this.disregardNormals=e===!0,this},setMaterials:function(e){this.materials=Object.assign({},e)},setCallbackOnAssetAvailable:function(e){return e!=null&&e instanceof Function&&(this.callbacks.onAssetAvailable=e),this},setCallbackOnProgress:function(e){return e!=null&&e instanceof Function&&(this.callbacks.onProgress=e),this},setCallbackOnError:function(e){return e!=null&&e instanceof Function&&(this.callbacks.onError=e),this},setCallbackOnLoad:function(e){return e!=null&&e instanceof Function&&(this.callbacks.onLoad=e),this},_onProgress:function(e){let t=e||"";this.logging.enabled&&this.logging.debug&&console.log(t)},_onError:function(e){this.logging.enabled&&this.logging.debug&&console.error(e)},_onAssetAvailable:function(e){let t="OBJLoader2Parser does not provide implementation for onAssetAvailable. Aborting...";throw this.callbacks.onError(t),t},_onLoad:function(e,t){console.log("You reached parser default onLoad callback: "+t)},setLogging:function(e,t){return this.logging.enabled=e===!0,this.logging.debug=t===!0,this},_configure:function(){if(this._pushSmoothingGroup(1),this.logging.enabled){let e=Object.keys(this.materials),n="OBJLoader.Parser configuration:"+(e.length>0?`
	materialNames:
		- `+e.join(`
		- `):`
	materialNames: None`)+`
	materialPerSmoothingGroup: `+this.materialPerSmoothingGroup+`
	useOAsMesh: `+this.useOAsMesh+`
	useIndices: `+this.useIndices+`
	disregardNormals: `+this.disregardNormals;n+=`
	callbacks.onProgress: `+this.callbacks.onProgress.name,n+=`
	callbacks.onAssetAvailable: `+this.callbacks.onAssetAvailable.name,n+=`
	callbacks.onError: `+this.callbacks.onError.name,console.info(n)}},execute:function(e){this.logging.enabled&&console.time("OBJLoader2Parser.execute"),this._configure();let t=new Uint8Array(e);this.contentRef=t;let n=t.byteLength;this.globalCounts.totalBytes=n;let i=new Array(128),r=0,o=0,s="",c=0;for(let a,l=0;l<n;l++)switch(a=t[l],a){case 32:s.length>0&&(i[r++]=s),s="";break;case 47:s.length>0&&(i[r++]=s),o++,s="";break;case 10:this._processLine(i,r,o,s,l),s="",r=0,o=0;break;case 13:break;default:s+=String.fromCharCode(a);break}this._processLine(i,r,o,s,c),this._finalizeParsing(),this.logging.enabled&&console.timeEnd("OBJLoader2Parser.execute")},executeLegacy:function(e){this.logging.enabled&&console.time("OBJLoader2Parser.executeLegacy"),this._configure(),this.legacyMode=!0,this.contentRef=e;let t=e.length;this.globalCounts.totalBytes=t;let n=new Array(128),i=0,r=0,o="",s=0;for(let c;s<t;s++)switch(c=e[s],c){case" ":o.length>0&&(n[i++]=o),o="";break;case"/":o.length>0&&(n[i++]=o),r++,o="";break;case`
`:this._processLine(n,i,r,o,s),o="",i=0,r=0;break;case"\r":break;default:o+=c}this._processLine(n,i,o,r),this._finalizeParsing(),this.logging.enabled&&console.timeEnd("OBJLoader2Parser.executeLegacy")},_processLine:function(e,t,n,i,r){if(this.globalCounts.lineByte=this.globalCounts.currentByte,this.globalCounts.currentByte=r,t<1)return;i.length>0&&(e[t++]=i);let o=function(h,u,f,d){let p="";if(d>f){let x;if(u)for(x=f;x<d;x++)p+=h[x];else for(x=f;x<d;x++)p+=String.fromCharCode(h[x]);p=p.trim()}return p},s,c,a,l;switch(l=e[0],l){case"v":this.vertices.push(parseFloat(e[1])),this.vertices.push(parseFloat(e[2])),this.vertices.push(parseFloat(e[3])),t>4&&(this.colors.push(parseFloat(e[4])),this.colors.push(parseFloat(e[5])),this.colors.push(parseFloat(e[6])));break;case"vt":this.uvs.push(parseFloat(e[1])),this.uvs.push(parseFloat(e[2]));break;case"vn":this.normals.push(parseFloat(e[1])),this.normals.push(parseFloat(e[2])),this.normals.push(parseFloat(e[3]));break;case"f":if(s=t-1,n===0)for(this._checkFaceType(0),a=2,c=s;a<c;a++)this._buildFace(e[1]),this._buildFace(e[a]),this._buildFace(e[a+1]);else if(s===n*2)for(this._checkFaceType(1),a=3,c=s-2;a<c;a+=2)this._buildFace(e[1],e[2]),this._buildFace(e[a],e[a+1]),this._buildFace(e[a+2],e[a+3]);else if(s*2===n*3)for(this._checkFaceType(2),a=4,c=s-3;a<c;a+=3)this._buildFace(e[1],e[2],e[3]),this._buildFace(e[a],e[a+1],e[a+2]),this._buildFace(e[a+3],e[a+4],e[a+5]);else for(this._checkFaceType(3),a=3,c=s-2;a<c;a+=2)this._buildFace(e[1],void 0,e[2]),this._buildFace(e[a],void 0,e[a+1]),this._buildFace(e[a+2],void 0,e[a+3]);break;case"l":case"p":if(s=t-1,s===n*2)for(this._checkFaceType(4),a=1,c=s+1;a<c;a+=2)this._buildFace(e[a],e[a+1]);else for(this._checkFaceType(l==="l"?5:6),a=1,c=s+1;a<c;a++)this._buildFace(e[a]);break;case"s":this._pushSmoothingGroup(e[1]);break;case"g":this._processCompletedMesh(),this.rawMesh.groupName=o(this.contentRef,this.legacyMode,this.globalCounts.lineByte+2,this.globalCounts.currentByte);break;case"o":this.useOAsMesh&&this._processCompletedMesh(),this.rawMesh.objectName=o(this.contentRef,this.legacyMode,this.globalCounts.lineByte+2,this.globalCounts.currentByte);break;case"mtllib":this.rawMesh.mtllibName=o(this.contentRef,this.legacyMode,this.globalCounts.lineByte+7,this.globalCounts.currentByte);break;case"usemtl":let h=o(this.contentRef,this.legacyMode,this.globalCounts.lineByte+7,this.globalCounts.currentByte);h!==""&&this.rawMesh.activeMtlName!==h&&(this.rawMesh.activeMtlName=h,this.rawMesh.counts.mtlCount++,this._checkSubGroup());break}},_pushSmoothingGroup:function(e){let t=parseInt(e);isNaN(t)&&(t=e==="off"?0:1);let n=this.rawMesh.smoothingGroup.normalized;this.rawMesh.smoothingGroup.normalized=this.rawMesh.smoothingGroup.splitMaterials?t:t===0?0:1,this.rawMesh.smoothingGroup.real=t,n!==t&&(this.rawMesh.counts.smoothingGroupCount++,this._checkSubGroup())},_checkFaceType:function(e){this.rawMesh.faceType!==e&&(this._processCompletedMesh(),this.rawMesh.faceType=e,this._checkSubGroup())},_checkSubGroup:function(){let e=this.rawMesh.activeMtlName+"|"+this.rawMesh.smoothingGroup.normalized;this.rawMesh.subGroupInUse=this.rawMesh.subGroups[e],(this.rawMesh.subGroupInUse===void 0||this.rawMesh.subGroupInUse===null)&&(this.rawMesh.subGroupInUse={index:e,objectName:this.rawMesh.objectName,groupName:this.rawMesh.groupName,materialName:this.rawMesh.activeMtlName,smoothingGroup:this.rawMesh.smoothingGroup.normalized,vertices:[],indexMappingsCount:0,indexMappings:[],indices:[],colors:[],uvs:[],normals:[]},this.rawMesh.subGroups[e]=this.rawMesh.subGroupInUse)},_buildFace:function(e,t,n){let i=this.rawMesh.subGroupInUse,r=this,o=function(){let s=parseInt(e),c=3*(s>0?s-1:s+r.vertices.length/3),a=r.colors.length>0?c:null,l=i.vertices;if(l.push(r.vertices[c++]),l.push(r.vertices[c++]),l.push(r.vertices[c]),a!==null){let h=i.colors;h.push(r.colors[a++]),h.push(r.colors[a++]),h.push(r.colors[a])}if(t){let h=parseInt(t),u=2*(h>0?h-1:h+r.uvs.length/2),f=i.uvs;f.push(r.uvs[u++]),f.push(r.uvs[u])}if(n&&!r.disregardNormals){let h=parseInt(n),u=3*(h>0?h-1:h+r.normals.length/3),f=i.normals;f.push(r.normals[u++]),f.push(r.normals[u++]),f.push(r.normals[u])}};if(this.useIndices){this.disregardNormals&&(n=void 0);let s=e+(t?"_"+t:"_n")+(n?"_"+n:"_n"),c=i.indexMappings[s];c==null?(c=this.rawMesh.subGroupInUse.vertices.length/3,o(),i.indexMappings[s]=c,i.indexMappingsCount++):this.rawMesh.counts.doubleIndicesCount++,i.indices.push(c)}else o();this.rawMesh.counts.faceCount++},_createRawMeshReport:function(e){return"Input Object number: "+e+`
	Object name: `+this.rawMesh.objectName+`
	Group name: `+this.rawMesh.groupName+`
	Mtllib name: `+this.rawMesh.mtllibName+`
	Vertex count: `+this.vertices.length/3+`
	Normal count: `+this.normals.length/3+`
	UV count: `+this.uvs.length/2+`
	SmoothingGroup count: `+this.rawMesh.counts.smoothingGroupCount+`
	Material count: `+this.rawMesh.counts.mtlCount+`
	Real MeshOutputGroup count: `+this.rawMesh.subGroups.length},_finalizeRawMesh:function(){let e=[],t,n=0,i=0,r=0,o=0,s=0,c=0,a;for(let h in this.rawMesh.subGroups)if(t=this.rawMesh.subGroups[h],t.vertices.length>0){if(a=t.indices,a.length>0&&i>0)for(let u=0;u<a.length;u++)a[u]=a[u]+i;e.push(t),n+=t.vertices.length,i+=t.indexMappingsCount,r+=t.indices.length,o+=t.colors.length,c+=t.uvs.length,s+=t.normals.length}let l=null;return e.length>0&&(l={name:this.rawMesh.groupName!==""?this.rawMesh.groupName:this.rawMesh.objectName,subGroups:e,absoluteVertexCount:n,absoluteIndexCount:r,absoluteColorCount:o,absoluteNormalCount:s,absoluteUvCount:c,faceCount:this.rawMesh.counts.faceCount,doubleIndicesCount:this.rawMesh.counts.doubleIndicesCount}),l},_processCompletedMesh:function(){let e=this._finalizeRawMesh(),t=e!==null;if(t){this.colors.length>0&&this.colors.length!==this.vertices.length&&this.callbacks.onError("Vertex Colors were detected, but vertex count and color count do not match!"),this.logging.enabled&&this.logging.debug&&console.debug(this._createRawMeshReport(this.inputObjectCount)),this.inputObjectCount++,this._buildMesh(e);let n=this.globalCounts.currentByte/this.globalCounts.totalBytes;this._onProgress("Completed [o: "+this.rawMesh.objectName+" g:"+this.rawMesh.groupName+"] Total progress: "+(n*100).toFixed(2)+"%"),this._resetRawMesh()}return t},_buildMesh:function(e){let t=e.subGroups,n=new Float32Array(e.absoluteVertexCount);this.globalCounts.vertices+=e.absoluteVertexCount/3,this.globalCounts.faces+=e.faceCount,this.globalCounts.doubleIndicesCount+=e.doubleIndicesCount;let i=e.absoluteIndexCount>0?new Uint32Array(e.absoluteIndexCount):null,r=e.absoluteColorCount>0?new Float32Array(e.absoluteColorCount):null,o=e.absoluteNormalCount>0?new Float32Array(e.absoluteNormalCount):null,s=e.absoluteUvCount>0?new Float32Array(e.absoluteUvCount):null,c=r!==null,a,l=[],h=t.length>1,u=0,f=[],d,p,x=[],y=0,g=0,m=0,b=0,v=0,w=0,T=0,L,G,C,Y;for(let N in t)if(t.hasOwnProperty(N)){if(a=t[N],Y=a.materialName,this.rawMesh.faceType<4?C=Y+(c?"_vertexColor":"")+(a.smoothingGroup===0?"_flat":""):C=this.rawMesh.faceType===6?"defaultPointMaterial":"defaultLineMaterial",L=this.materials[Y],G=this.materials[C],L==null&&G==null&&(C=c?"defaultVertexColorMaterial":"defaultMaterial",G=this.materials[C],this.logging.enabled&&console.info('object_group "'+a.objectName+"_"+a.groupName+'" was defined with unresolvable material "'+Y+'"! Assigning "'+C+'".')),G==null){let O={materialNameOrg:Y,materialName:C,materialProperties:{vertexColors:c?2:0,flatShading:a.smoothingGroup===0}},B={cmd:"assetAvailable",type:"material",materials:{materialCloneInstructions:O}};this.callbacks.onAssetAvailable(B);let P=this.materials[C];P==null&&(this.materials[C]=O)}if(h?(d=f[C],d||(d=u,f[C]=u,l.push(C),u++),T=this.useIndices?a.indices.length:a.vertices.length/3,p={start:w,count:T,index:d},x.push(p),w+=T):l.push(C),n.set(a.vertices,y),y+=a.vertices.length,i&&(i.set(a.indices,g),g+=a.indices.length),r&&(r.set(a.colors,m),m+=a.colors.length),o&&(o.set(a.normals,b),b+=a.normals.length),s&&(s.set(a.uvs,v),v+=a.uvs.length),this.logging.enabled&&this.logging.debug){let O="";d&&(O=`
		materialIndex: `+d);let B="	Output Object no.: "+this.outputObjectCount+`
		groupName: `+a.groupName+`
		Index: `+a.index+`
		faceType: `+this.rawMesh.faceType+`
		materialName: `+a.materialName+`
		smoothingGroup: `+a.smoothingGroup+O+`
		objectName: `+a.objectName+`
		#vertices: `+a.vertices.length/3+`
		#indices: `+a.indices.length+`
		#colors: `+a.colors.length/3+`
		#uvs: `+a.uvs.length/2+`
		#normals: `+a.normals.length/3;console.debug(B)}}this.outputObjectCount++,this.callbacks.onAssetAvailable({cmd:"assetAvailable",type:"mesh",progress:{numericalValue:this.globalCounts.currentByte/this.globalCounts.totalBytes},params:{meshName:e.name},materials:{multiMaterial:h,materialNames:l,materialGroups:x},buffers:{vertices:n,indices:i,colors:r,normals:o,uvs:s},geometryType:this.rawMesh.faceType<4?0:this.rawMesh.faceType===6?2:1},[n.buffer],i!==null?[i.buffer]:null,r!==null?[r.buffer]:null,o!==null?[o.buffer]:null,s!==null?[s.buffer]:null)},_finalizeParsing:function(){if(this.logging.enabled&&console.info("Global output object count: "+this.outputObjectCount),this._processCompletedMesh()&&this.logging.enabled){let e=`Overall counts: 
	Vertices: `+this.globalCounts.vertices+`
	Faces: `+this.globalCounts.faces+`
	Multiple definitions: `+this.globalCounts.doubleIndicesCount;console.info(e)}}};const dl=function(e){this.logging={enabled:!1,debug:!1},this.callbacks={onProgress:null,onMeshAlter:null},this.materialHandler=e};dl.prototype={constructor:dl,setLogging:function(e,t){this.logging.enabled=e===!0,this.logging.debug=t===!0},_setCallbacks:function(e,t){e!=null&&e instanceof Function&&(this.callbacks.onProgress=e),t!=null&&t instanceof Function&&(this.callbacks.onMeshAlter=t)},buildMeshes:function(e){let t=e.params.meshName,n=e.buffers,i=new de;n.vertices!==void 0&&n.vertices!==null&&i.setAttribute("position",new Ee(new Float32Array(n.vertices),3)),n.indices!==void 0&&n.indices!==null&&i.setIndex(new Ee(new Uint32Array(n.indices),1)),n.colors!==void 0&&n.colors!==null&&i.setAttribute("color",new Ee(new Float32Array(n.colors),3)),n.normals!==void 0&&n.normals!==null?i.setAttribute("normal",new Ee(new Float32Array(n.normals),3)):i.computeVertexNormals(),n.uvs!==void 0&&n.uvs!==null&&i.setAttribute("uv",new Ee(new Float32Array(n.uvs),2)),n.skinIndex!==void 0&&n.skinIndex!==null&&i.setAttribute("skinIndex",new Ee(new Uint16Array(n.skinIndex),4)),n.skinWeight!==void 0&&n.skinWeight!==null&&i.setAttribute("skinWeight",new Ee(new Float32Array(n.skinWeight),4));let r,o,s,c=e.materials.materialNames,a=e.materials.multiMaterial,l=[];for(s in c)o=c[s],r=this.materialHandler.getMaterial(o),a&&l.push(r);if(a){r=l;let y=e.materials.materialGroups,g;for(s in y)g=y[s],i.addGroup(g.start,g.count,g.index)}let h=[],u,f,d=!0,p=e.geometryType===null?0:e.geometryType;if(this.callbacks.onMeshAlter&&(f=this.callbacks.onMeshAlter({detail:{meshName:t,bufferGeometry:i,material:r,geometryType:p}})),f){if(f.isDisregardMesh())d=!1;else if(f.providesAlteredMeshes()){for(let y in f.meshes)h.push(f.meshes[y]);d=!1}}d&&(e.computeBoundingSphere&&i.computeBoundingSphere(),p===0?u=new et(i,r):p===1?u=new pt(i,r):u=new Ds(i,r),u.name=t,h.push(u));let x=e.params.meshName;if(h.length>0){let y=[];for(let g in h)u=h[g],y[g]=u.name;x+=": Adding mesh(es) ("+y.length+": "+y+") from input mesh: "+t,x+=" ("+(e.progress.numericalValue*100).toFixed(2)+"%)"}else x+=": Not adding mesh: "+t,x+=" ("+(e.progress.numericalValue*100).toFixed(2)+"%)";return this.callbacks.onProgress&&this.callbacks.onProgress("progress",x,e.progress.numericalValue),h}};const Zh=function(e,t){this.disregardMesh=e===!0,this.alteredMesh=t===!0,this.meshes=[]};Zh.prototype={constructor:Zh,addMesh:function(e){this.meshes.push(e),this.alteredMesh=!0},isDisregardMesh:function(){return this.disregardMesh},providesAlteredMeshes:function(){return this.alteredMesh}};const pl=function(){this.logging={enabled:!1,debug:!1},this.callbacks={onLoadMaterials:null},this.materials={}};pl.prototype={constructor:pl,setLogging:function(e,t){this.logging.enabled=e===!0,this.logging.debug=t===!0},_setCallbacks:function(e){e!=null&&e instanceof Function&&(this.callbacks.onLoadMaterials=e)},createDefaultMaterials:function(e){let t=new Kt({color:14479871});t.name="defaultMaterial";let n=new Kt({color:14479871});n.name="defaultVertexColorMaterial",n.vertexColors=!0;let i=new ut;i.name="defaultLineMaterial";let r=new Yn({size:.1});r.name="defaultPointMaterial";let o={};o[t.name]=t,o[n.name]=n,o[i.name]=i,o[r.name]=r,this.addMaterials(o,e)},addPayloadMaterials:function(e){let t,n,i=e.materials.materialCloneInstructions,r={};if(i!=null){let s=i.materialNameOrg;s=s??"";let c=this.materials[s];c?(t=c.clone(),n=i.materialName,t.name=n,Object.assign(t,i.materialProperties),this.materials[n]=t,r[n]=t):this.logging.enabled&&console.info('Requested material "'+s+'" is not available!')}let o=e.materials.serializedMaterials;if(o!=null&&Object.keys(o).length>0){let s=new sa,c;for(n in o)c=o[n],c!=null&&(t=s.parse(c),this.logging.enabled&&console.info('De-serialized material with name "'+n+'" will be added.'),this.materials[n]=t,r[n]=t)}return o=e.materials.runtimeMaterials,r=this.addMaterials(o,!0,r),r},addMaterials:function(e,t,n){if(n==null&&(n={}),e!=null&&Object.keys(e).length>0){let i,r,o;for(let s in e)i=e[s],o=t===!0,o||(r=this.materials[s],o=r==null),o&&(this.materials[s]=i,n[s]=i),this.logging.enabled&&this.logging.debug&&console.info('Material with name "'+s+'" was added.')}return this.callbacks.onLoadMaterials&&this.callbacks.onLoadMaterials(n),n},getMaterials:function(){return this.materials},getMaterial:function(e){return this.materials[e]},getMaterialsJSON:function(){let e={},t;for(let n in this.materials)t=this.materials[n],e[n]=t.toJSON();return e},clearMaterials:function(){this.materials={}}};const Fo=function(e){Xe.call(this,e),this.parser=new fl,this.modelName="",this.instanceNo=0,this.baseObject3d=new se,this.materialHandler=new pl,this.meshReceiver=new dl(this.materialHandler);let t=this,n=function(i){t._onAssetAvailable(i)};this.parser.setCallbackOnAssetAvailable(n)};Fo.OBJLOADER2_VERSION="3.2.0",console.info("Using OBJLoader2 version: "+Fo.OBJLOADER2_VERSION),Fo.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Fo,setLogging:function(e,t){return this.parser.setLogging(e,t),this},setMaterialPerSmoothingGroup:function(e){return this.parser.setMaterialPerSmoothingGroup(e),this},setUseOAsMesh:function(e){return this.parser.setUseOAsMesh(e),this},setUseIndices:function(e){return this.parser.setUseIndices(e),this},setDisregardNormals:function(e){return this.parser.setDisregardNormals(e),this},setModelName:function(e){return this.modelName=e||this.modelName,this},setBaseObject3d:function(e){return this.baseObject3d=e??this.baseObject3d,this},addMaterials:function(e,t){return this.materialHandler.addMaterials(e,t),this},setCallbackOnAssetAvailable:function(e){return this.parser.setCallbackOnAssetAvailable(e),this},setCallbackOnProgress:function(e){return this.parser.setCallbackOnProgress(e),this},setCallbackOnError:function(e){return this.parser.setCallbackOnError(e),this},setCallbackOnLoad:function(e){return this.parser.setCallbackOnLoad(e),this},setCallbackOnMeshAlter:function(e){return this.meshReceiver._setCallbacks(this.parser.callbacks.onProgress,e),this},setCallbackOnLoadMaterials:function(e){return this.materialHandler._setCallbacks(e),this},load:function(e,t,n,i,r){let o=this;if(t==null||!(t instanceof Function)){let u="onLoad is not a function! Aborting...";throw o.parser.callbacks.onError(u),u}else this.parser.setCallbackOnLoad(t);(i==null||!(i instanceof Function))&&(i=function(u){let f=u;u.currentTarget&&u.currentTarget.statusText!==null&&(f=`Error occurred while downloading!
url: `+u.currentTarget.responseURL+`
status: `+u.currentTarget.statusText),o.parser.callbacks.onError(f)}),e||i("An invalid url was provided. Unable to continue!");let s=new URL(e,window.location.href).href,c=s,a=s.split("/");if(a.length>2&&(c=a[a.length-1],this.path=a.slice(0,a.length-1).join("/")+"/"),n==null||!(n instanceof Function)){let u=0,f=0;n=function(d){if(d.lengthComputable&&(f=d.loaded/d.total,f>u)){u=f;let p='Download of "'+e+'": '+(f*100).toFixed(2)+"%";o.parser.callbacks.onProgress("progressLoad",p,f)}}}this.setCallbackOnMeshAlter(r);let l=function(u){o.parser.callbacks.onLoad(o.parse(u),"OBJLoader2#load: Parsing completed")},h=new nn(this.manager);h.setPath(this.path||this.resourcePath),h.setResponseType("arraybuffer"),h.load(c,l,n,i)},parse:function(e){if(e==null)throw"Provided content is not a valid ArrayBuffer or String. Unable to continue parsing";return this.parser.logging.enabled&&console.time("OBJLoader parse: "+this.modelName),this.materialHandler.createDefaultMaterials(!1),this.parser.setMaterials(this.materialHandler.getMaterials()),e instanceof ArrayBuffer||e instanceof Uint8Array?(this.parser.logging.enabled&&console.info("Parsing arrayBuffer..."),this.parser.execute(e)):typeof e=="string"||e instanceof String?(this.parser.logging.enabled&&console.info("Parsing text..."),this.parser.executeLegacy(e)):this.parser.callbacks.onError("Provided content was neither of type String nor Uint8Array! Aborting..."),this.parser.logging.enabled&&console.timeEnd("OBJLoader parse: "+this.modelName),this.baseObject3d},_onAssetAvailable:function(e){if(e.cmd==="assetAvailable")if(e.type==="mesh"){let t=this.meshReceiver.buildMeshes(e);for(let n of t)this.baseObject3d.add(n)}else e.type==="material"&&this.materialHandler.addPayloadMaterials(e)}});const $x=function(){let e={};const t=function(n){delete e[n]};this.add=function(n){const i=performance.now()+"";return e[i]=n,n.then(()=>t(i)),n},this.done=function(n){Promise.all(Object.values(e)).then(()=>{n()})}},on=(e,t={},n="")=>{const i=document.createElement(e);for(let r in t)i.setAttribute(r,t[r]);return i.innerHTML=n,i},Qx=(e,t)=>(document.getElementById(e)||document.getElementsByTagName("head")[0].prepend(on("STYLE",{type:"text/css"},t)),!0),wt=function(e){let t=e,n=[];return function(r,o={}){return arguments.length>0?typeof r=="function"?(o.prepend?n.unshift(r):n.push(r),o.dontCallOnRegistration||r(t),()=>{const s=n.indexOf(r);s!==-1&&n.splice(s,1)}):(t!==r&&JSON.stringify(t)!==JSON.stringify(r)&&(t=r,n.forEach(s=>s(t))),t):t}},Kx={sharpenAmount:.7,saturationBoost:.6,vignetteAmount:3,vignettePower:5,toneMapAmount:.3,forceCpu:!1,autoWhiteBalanceEnabled:!1,whiteBalanceGains:[1,1,1],shadowBoostAmount:0,xRayEnabled:!1,xRayEdgeStrength:.25},ev=.25,tv=4,ni=.299,ii=.587,ri=.114,sn=(e,t,n)=>e<t?t:e>n?n:e,nv=(e,t,n)=>{const i=Number.isFinite(t)?t:e?.width,r=Number.isFinite(n)?n:e?.height;if(!i||!r)throw new Error("Image enhancement requires explicit width and height");return{width:i,height:r}},$h=e=>{if(!e)throw new Error("Image enhancement requires source pixel data");if(e instanceof Uint8ClampedArray)return e;if(ArrayBuffer.isView(e))return new Uint8ClampedArray(e.buffer,e.byteOffset,e.byteLength);if(e.data)return $h(e.data);throw new Error("Unsupported image data type; expected ImageData or Uint8Array")};function Qh(e={}){const t=Array.isArray(e.whiteBalanceGains)?e.whiteBalanceGains:[1,1,1],n=[0,1,2].map(i=>{const r=Number(t[i]);return!Number.isFinite(r)||r<=0?1:sn(r,ev,tv)});return e.autoWhiteBalanceEnabled?n:[1,1,1]}function Kh(e){const t=e&&typeof e.xRayEdgeStrength<"u"?e.xRayEdgeStrength:e,n=Number(t);return Number.isFinite(n)?sn(n,0,1):0}function ml(e={}){const t=Object.assign({},Kx,e);return t.forceCpu=!!t.forceCpu,t}function iv(e,t,n,i={}){const{width:r,height:o}=nv(e,t,n),s=$h(e);if(s.length<r*o*4)throw new Error("Image data does not match expected dimensions");const c=ml(i),a=new Uint8ClampedArray(r*o*4),l=Math.max(c.sharpenAmount,0),h=l*.25,u=1+c.saturationBoost,f=c.vignetteAmount,d=Math.max(c.vignettePower||0,0),p=sn(Number(c.vignetteOffsetX)||0,-.5,.5),x=sn(Number(c.vignetteOffsetY)||0,-.5,.5),y=sn(Number(c.toneMapAmount)||0,0,1),g=Qh(c),m=g[0],b=g[1],v=g[2],w=c.xRayEnabled?1:0,T=sn(Number(c.shadowBoostAmount)||0,0,1),L=Math.max(T,w>0?.85:0),G=Kh(c),C=c.xRayEnabled?G:0,Y=.15+.3*w,N=r/2,O=o/2,B=Math.sqrt(N*N+O*O),P=B>0?1/B:0,R=(U,q)=>(q*r+U)*4;for(let U=0;U<o;U++){const q=U===0?0:U-1,K=U===o-1?o-1:U+1;for(let te=0;te<r;te++){const pe=te===0?0:te-1,ye=te===r-1?r-1:te+1,Oe=R(te,U),Ae=R(pe,U),qe=R(ye,U),ze=R(te,q),j=R(te,K),Ye=R(pe,q),Re=R(ye,q),Pe=R(pe,K),Le=R(ye,K),V=s[Oe],Z=s[Oe+1],ne=s[Oe+2];let oe=V*(1+4*l+4*h)-l*(s[Ae]+s[qe]+s[ze]+s[j])-h*(s[Ye]+s[Re]+s[Pe]+s[Le]),$=Z*(1+4*l+4*h)-l*(s[Ae+1]+s[qe+1]+s[ze+1]+s[j+1])-h*(s[Ye+1]+s[Re+1]+s[Pe+1]+s[Le+1]),xe=ne*(1+4*l+4*h)-l*(s[Ae+2]+s[qe+2]+s[ze+2]+s[j+2])-h*(s[Ye+2]+s[Re+2]+s[Pe+2]+s[Le+2]);if(c.saturationBoost!==0){const J=(oe+$+xe)/3;oe=J+(oe-J)*u,$=J+($-J)*u,xe=J+(xe-J)*u}const S=s[Ae]*ni+s[Ae+1]*ii+s[Ae+2]*ri,A=s[qe]*ni+s[qe+1]*ii+s[qe+2]*ri,ee=s[ze]*ni+s[ze+1]*ii+s[ze+2]*ri,X=s[j]*ni+s[j+1]*ii+s[j+2]*ri,I=s[Ye]*ni+s[Ye+1]*ii+s[Ye+2]*ri,ie=s[Re]*ni+s[Re+1]*ii+s[Re+2]*ri,re=s[Pe]*ni+s[Pe+1]*ii+s[Pe+2]*ri,Me=s[Le]*ni+s[Le+1]*ii+s[Le+2]*ri;let Q=0;if(C>0){const J=(A-S)*.5+(ie-I+Me-re)*.25,_e=(X-ee)*.5+(Me-ie+re-I)*.25,ge=Math.sqrt(J*J+_e*_e)/255;if(ge>0){const he=sn((ge-.02)/.16,0,1);Q=he*he*(3-2*he)*C}}if(c.autoWhiteBalanceEnabled&&(oe*=m,$*=b,xe*=v),L>0){const J=.299*oe+.587*$+.114*xe,ge=Math.pow(sn(1-J/255,0,1),1.4)*L;if(ge>0){const he=Math.pow(Math.max(oe/255,0),.75)*255,ve=Math.pow(Math.max($/255,0),.75)*255,Je=Math.pow(Math.max(xe/255,0),.75)*255;oe=oe+(he-oe)*ge,$=$+(ve-$)*ge,xe=xe+(Je-xe)*ge}}if(w>0){const J=1+2.2*(.5+L*.5),_e=Math.log1p(J);_e>0&&(oe=Math.log1p(oe/255*J)/_e*255,$=Math.log1p($/255*J)/_e*255,xe=Math.log1p(xe/255*J)/_e*255)}if(Q>0){const J=Q*Y*255;oe+=J,$+=J,xe+=J}if(f!==0&&d>0){const J=te-N+.5-p*N*2,_e=U-O+.5-x*O*2,ge=Math.sqrt(J*J+_e*_e)*P,he=1+f*Math.pow(ge,d),ve=Math.max(he,0);oe*=ve,$*=ve,xe*=ve}if(y>0){const J=Math.max(oe,Math.max($,xe)),_e=Math.max(J-255,0);if(_e>0){const ge=_e/255,he=1+y*ge*2;oe/=he,$/=he,xe/=he;const ve=.299*oe+.587*$+.114*xe,Je=Math.min(1,y*ge);oe+=(ve-oe)*Je*.5,$+=(ve-$)*Je*.5,xe+=(ve-xe)*Je*.5}}a[Oe]=sn(oe,0,255),a[Oe+1]=sn($,0,255),a[Oe+2]=sn(xe,0,255),a[Oe+3]=s[Oe+3]}}return{data:a,width:r,height:o}}const ef={vertex:`
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;

    void main() {
      v_texCoord = a_texCoord;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,fragment:`
    precision mediump float;

    uniform sampler2D u_image;
    uniform vec2 u_texelSize;
    uniform float u_sharpen;
    uniform float u_saturation;
    uniform float u_vignette;
    uniform float u_vignettePower;
    uniform vec2 u_vignetteOffset;
    uniform float u_toneMapAmount;
    uniform vec3 u_whiteBalance;
    uniform float u_shadowBoost;
    uniform float u_xRayEdgeStrength;
    uniform float u_xRay;

    varying vec2 v_texCoord;

    vec3 sampleColor(vec2 offset) {
      return texture2D(u_image, v_texCoord + offset * u_texelSize).rgb;
    }

    void main() {
      vec4 centerSample = texture2D(u_image, v_texCoord);
      vec3 center = centerSample.rgb;

      vec3 left = sampleColor(vec2(-1.0, 0.0));
      vec3 right = sampleColor(vec2(1.0, 0.0));
      vec3 up = sampleColor(vec2(0.0, -1.0));
      vec3 down = sampleColor(vec2(0.0, 1.0));
      vec3 upLeft = sampleColor(vec2(-1.0, -1.0));
      vec3 upRight = sampleColor(vec2(1.0, -1.0));
      vec3 downLeft = sampleColor(vec2(-1.0, 1.0));
      vec3 downRight = sampleColor(vec2(1.0, 1.0));

      float sharpen = max(u_sharpen, 0.0);
      float diagSharpen = sharpen * 0.25;

      vec3 color = center * (1.0 + 4.0 * sharpen + 4.0 * diagSharpen);
      color -= sharpen * (left + right + up + down);
      color -= diagSharpen * (upLeft + upRight + downLeft + downRight);

      float saturation = clamp(u_saturation, -0.95, 5.0);
      if (saturation != 0.0) {
        float avg = (color.r + color.g + color.b) / 3.0;
        color = vec3(avg) + (color - vec3(avg)) * (1.0 + saturation);
      }

      color *= u_whiteBalance;

      float shadowBoost = clamp(u_shadowBoost, 0.0, 1.0);
      float xRayStrength = clamp(u_xRay, 0.0, 1.0);
      if (xRayStrength > 0.0) {
        shadowBoost = max(shadowBoost, 0.85);
      }

      const vec3 LUMA = vec3(0.299, 0.587, 0.114);
      float lLeft = dot(left, LUMA);
      float lRight = dot(right, LUMA);
      float lUp = dot(up, LUMA);
      float lDown = dot(down, LUMA);
      float lUpLeft = dot(upLeft, LUMA);
      float lUpRight = dot(upRight, LUMA);
      float lDownLeft = dot(downLeft, LUMA);
      float lDownRight = dot(downRight, LUMA);

      float gradX = (lRight - lLeft) * 0.5 + (lUpRight - lUpLeft + lDownRight - lDownLeft) * 0.25;
      float gradY = (lDown - lUp) * 0.5 + (lDownRight - lUpRight + lDownLeft - lUpLeft) * 0.25;
      float edgeMag = sqrt(gradX * gradX + gradY * gradY);
      float edgeWeight = smoothstep(0.02, 0.18, edgeMag);
      float edgeStrength = clamp(u_xRayEdgeStrength, 0.0, 1.0);
      float edgeBoost = edgeWeight * edgeStrength;

      if (shadowBoost > 0.0) {
        float luminance = dot(color, vec3(0.299, 0.587, 0.114));
        float shadowWeight = pow(clamp(1.0 - luminance, 0.0, 1.0), 1.4);
        vec3 lifted = pow(max(color, vec3(0.0)), vec3(0.75));
        color = mix(color, lifted, shadowWeight * shadowBoost);
      }

      if (xRayStrength > 0.0) {
        float logFactor = 1.0 + 2.0 * xRayStrength;
        color = log2(1.0 + color * logFactor) / log2(1.0 + logFactor);
      }

      if (edgeBoost > 0.0) {
        float overlayScale = mix(0.15, 0.45, xRayStrength);
        color = clamp(color + vec3(edgeBoost * overlayScale), 0.0, 1.0);
      }

      if (u_vignette != 0.0) {
        vec2 offsetCoord = vec2(0.5) + u_vignetteOffset;
        float dist = distance(v_texCoord, offsetCoord);
        float normalized = dist / 0.707106;
        float power = max(u_vignettePower, 0.0);
        float correction = 1.0 + u_vignette * pow(normalized, power);
        color *= max(correction, 0.0);
      }

      float toneAmount = clamp(u_toneMapAmount, 0.0, 1.0);
      if (toneAmount > 0.0) {
        float maxChannel = max(color.r, max(color.g, color.b));
        float highlight = max(maxChannel - 1.0, 0.0);
        if (highlight > 0.0) {
          float compression = 1.0 + toneAmount * highlight * 2.0;
          color /= compression;
          float luminance = dot(color, vec3(0.299, 0.587, 0.114));
          float desat = clamp(toneAmount * highlight, 0.0, 1.0);
          color = mix(color, vec3(luminance), desat * 0.5);
        }
      }

      color = clamp(color, 0.0, 1.0);

      gl_FragColor = vec4(color, centerSample.a);
    }
  `},rv=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),ov=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),tf=e=>e&&typeof e=="object"&&typeof e.length=="number"&&typeof e.BYTES_PER_ELEMENT=="number"&&e.buffer instanceof ArrayBuffer,sv=e=>typeof ImageData<"u"&&e instanceof ImageData;function nf(e,t,n){const i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(i);throw e.deleteShader(i),new Error(`Shader compile failed: ${r}`)}return i}function av(e){const t=nf(e,e.VERTEX_SHADER,ef.vertex),n=nf(e,e.FRAGMENT_SHADER,ef.fragment),i=e.createProgram();if(e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const r=e.getProgramInfoLog(i);throw e.deleteProgram(i),e.deleteShader(t),e.deleteShader(n),new Error(`Program link failed: ${r}`)}return e.deleteShader(t),e.deleteShader(n),i}function cv(e,t,n,i,r=!0){e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),tf(t)?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.UNSIGNED_BYTE,t):sv(t)?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t):t&&typeof t=="object"&&t.data&&tf(t.data)?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n,i,0,e.RGBA,e.UNSIGNED_BYTE,t.data):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}function lv(e,t,n,i,r={},{flipTexture:o=!0,readPixels:s=!1}={}){if(!e)throw new Error("Invalid WebGL context");if(!n||!i)throw new Error("Invalid image dimensions for WebGL enhancement");const c=ml(r),a=av(e);e.viewport(0,0,n,i),e.useProgram(a);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,rv,e.STATIC_DRAW);const h=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,ov,e.STATIC_DRAW);const f=e.getAttribLocation(a,"a_texCoord");e.enableVertexAttribArray(f),e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0);const d=e.createTexture();e.bindTexture(e.TEXTURE_2D,d),cv(e,t,n,i,o);const p=e.getUniformLocation(a,"u_texelSize"),x=e.getUniformLocation(a,"u_sharpen"),y=e.getUniformLocation(a,"u_saturation"),g=e.getUniformLocation(a,"u_vignette"),m=e.getUniformLocation(a,"u_vignettePower"),b=e.getUniformLocation(a,"u_vignetteOffset"),v=e.getUniformLocation(a,"u_toneMapAmount"),w=e.getUniformLocation(a,"u_whiteBalance"),T=e.getUniformLocation(a,"u_shadowBoost"),L=e.getUniformLocation(a,"u_xRayEdgeStrength"),G=e.getUniformLocation(a,"u_xRay");e.uniform2f(p,1/n,1/i);const C=Math.max(-.5,Math.min(.5,Number(c.vignetteOffsetX)||0)),Y=Math.max(-.5,Math.min(.5,Number(c.vignetteOffsetY)||0)),N=Math.max(0,Math.min(1,Number(c.toneMapAmount)||0));e.uniform1f(x,c.sharpenAmount),e.uniform1f(y,c.saturationBoost),e.uniform1f(g,c.vignetteAmount),e.uniform1f(m,Math.max(c.vignettePower||0,0)),e.uniform2f(b,C,Y),e.uniform1f(v,N);const O=Qh(c);e.uniform3f(w,O[0],O[1],O[2]);const B=Math.max(0,Math.min(1,Number(c.shadowBoostAmount)||0));e.uniform1f(T,B);const P=c.xRayEnabled?Kh(c):0;e.uniform1f(L,P);const R=c.xRayEnabled?1:0;e.uniform1f(G,R),e.drawArrays(e.TRIANGLES,0,6),e.finish();let U=null;return s&&(U=new Uint8Array(n*i*4),e.readPixels(0,0,n,i,e.RGBA,e.UNSIGNED_BYTE,U)),e.deleteTexture(d),e.deleteBuffer(l),e.deleteBuffer(u),e.deleteProgram(a),{pixels:U,width:n,height:i}}function uv(e){const t=e.width||e.videoWidth,n=e.height||e.videoHeight;if(!t||!n)throw new Error("Invalid image dimensions for enhancement");if(e instanceof HTMLCanvasElement)return{canvas:e,width:t,height:n};const i=document.createElement("canvas");return i.width=t,i.height=n,i.getContext("2d").drawImage(e,0,0,t,n),{canvas:i,width:t,height:n}}function hv(e,t,n,i){const r=document.createElement("canvas");r.width=t,r.height=n;const o=r.getContext("webgl",{preserveDrawingBuffer:!0})||r.getContext("experimental-webgl",{preserveDrawingBuffer:!0});if(!o)return null;try{return lv(o,e,t,n,i,{flipTexture:!0,readPixels:!1}),r}catch(s){return console.warn("WebGL enhancement failed, falling back to CPU",s),null}}function fv(e,t,n,i){const o=e.getContext("2d").getImageData(0,0,t,n),{data:s}=iv(o,t,n,i),c=document.createElement("canvas");c.width=t,c.height=n;const a=c.getContext("2d"),l=new ImageData(s,t,n);return a.putImageData(l,0,0),c}function dv(e){typeof requestIdleCallback=="function"?requestIdleCallback(e,{timeout:50}):setTimeout(()=>e({didTimeout:!1,timeRemaining:()=>0}),0)}function pv(e,t={}){const n=ml(t);return new Promise((i,r)=>{if(typeof window>"u"){r(new Error("Image enhancement requires a browser environment"));return}const{canvas:o,width:s,height:c}=uv(e);dv(()=>{try{let a=null;if(n.forceCpu||(a=hv(o,s,c,n)),a){i(a);return}const l=fv(o,s,c,n);i(l)}catch(a){r(a)}})})}const Cr=600,Li=8,rf=Math.pow(10,Li/20),mv=2,Ma={exposure_us:[Cr,Cr,Cr],gain_boost:[Li,Li,Li]},of=e=>{const t=Number(e);return Number.isFinite(t)?Math.pow(10,t/20):rf},gl=(e,t)=>{if(Array.isArray(e))return[0,1,2].map(n=>{const i=Number(e[n]);return Number.isFinite(i)&&i>0?i:t});if(typeof e=="number"){const n=Number(e);if(Number.isFinite(n)&&n>0)return[n,n,n]}if(typeof e=="string")try{const n=JSON.parse(e);return gl(n,t)}catch{}return[t,t,t]},yl=e=>{if(!e||typeof e!="object")return{exposure_us:Ma.exposure_us.slice(),gain_boost:Ma.gain_boost.slice(),tags:[]};let t=[];const n=typeof e.tags<"u"?e.tags:e.image_tags;if(Array.isArray(n))t=n.filter(i=>typeof i=="string");else if(typeof n=="string")try{const i=JSON.parse(n);Array.isArray(i)&&(t=i.filter(r=>typeof r=="string"))}catch{}return Object.assign({},e,{exposure_us:gl(e.exposure_us,Cr),gain_boost:gl(e.gain_boost,Li),tags:t})},sf=e=>{const t=e&&e.exposure_us||Ma.exposure_us,n=e&&e.gain_boost||Ma.gain_boost,i=Cr*rf;return[0,1,2].map(r=>{const o=Number(t[r]),s=Number(n[r]),c=Number.isFinite(o)&&o>0?o:Cr,a=Number.isFinite(s)&&s>=Li?s:Li,l=of(a),h=c*l,u=h>0?i/h:1;return u>0?u:1})},gv=(e,t,n=sf(t))=>{const i=Array.isArray(e)?e.slice(0,3):[e,e,e];for(;i.length<3;)i.push(i[0]??1);const r=n.map(c=>{const a=Number(c);return Number.isFinite(a)&&a>0?a:1});let o=1;const s=r.filter(c=>c>0);if(s.length>0){const c=s.reduce((l,h)=>l+Math.log(h),0),a=Math.exp(c/s.length);Number.isFinite(a)&&a>0&&(o=a)}return i.map((c,a)=>{const l=Number(c),h=Number.isFinite(l)&&l>0?l:1,u=o>0?r[a]/o:1,f=Math.max(u,0),d=f>0?Math.pow(f,1/mv):0;return h*d})},yv=e=>!e||!Array.isArray(e.tags)?!1:e.tags.includes("colour_postprocessed"),xv=function(e,t={}){Qx("geocam-viewer",`
    .geocam-viewer {
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .geocam-viewer-hidden {
      display: none;
    }

    .geocam-viewer-control {
      pointer-events: auto;
    }

    .geocam-viewer-control-button {
      background-color: rgba(255,255,255,0.5);
      border-radius: 4px;
      border: 1px solid #666;
      color: rgba(0,0,0,0);
      width: 32px;
      height: 32px;
      display: block;
      padding: 0;
      box-sizing: border-box;
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    .geocam-viewer-controls {
        position: absolute;
        pointer-events: none;
        display: flex;
        left: 16px;
        top: 16px;
        right: 16px;
        bottom: 16px;
        --gap: 16px;
    }

    .geocam-viewer-controls-left, .geocam-viewer-controls-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: 8px;
    }

    .geocam-viewer-controls-left-top, .geocam-viewer-controls-right-top {
      display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--gap);
        row-gap: 8px;
    }

    .geocam-viewer-controls-left-bottom,
    .geocam-viewer-controls-right-bottom {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
      row-gap: 8px;
    }

    .geocam-viewer-controls-left-bottom {
      align-items: flex-start;
    }

    .geocam-viewer-controls-right-bottom {
      align-items: flex-end;
    }

    .geocam-viewer-controls-center {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .geocam-viewer-controls-top,  .geocam-viewer-controls-bottom {
      display: flex;
      justify-content: center;
      gap: var(--gap);
    } 

    .geocam-viewer-controls-mid {
      flex: 1;
    }

    .geocam-enhancement-controls {
      position: absolute;
      top: 0;
      left: 56px;
      background-color: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 12px;
      color: #fff;
      font-size: 12px;
      min-width: 200px;
      max-width: calc(100% - 72px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(6px);
      pointer-events: auto;
      z-index: 5;
    }

    .geocam-enhancement-controls.is-hidden {
      display: none;
    }

    .geocam-enhancement-controls.is-disabled {
      opacity: 0.55;
    }

    .geocam-enhancement-controls h4 {
      margin: 0 0 10px 0;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .geocam-enhancement-controls label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 10px;
    }

    .geocam-enhancement-controls span.value-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .geocam-enhancement-controls .value {
      font-variant-numeric: tabular-nums;
      font-weight: 600;
    }

    .geocam-enhancement-controls input[type="range"] {
      width: 100%;
      accent-color: #4da3ff;
    }

    .geocam-enhancement-controls .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .geocam-enhancement-controls .toggle-row label {
      margin: 0;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    .geocam-enhancement-controls .advanced-toggle {
      margin: 6px 0 4px 0;
    }

    .geocam-enhancement-controls .advanced-toggle label {
      margin: 0;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    .geocam-enhancement-controls .advanced-group {
      display: none;
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }

    .geocam-enhancement-controls.is-advanced .advanced-group {
      display: block;
    }

    .geocam-enhancement-controls .advanced-group .row {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .geocam-enhancement-controls .advanced-group .row:last-child {
      margin-bottom: 0;
    }

    .geocam-enhancement-controls .advanced-group .row span.value-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .geocam-enhancement-controls input[type="checkbox"] {
      accent-color: #4da3ff;
    }

    .geocam-enhancement-toggle,
    .geocam-xray-toggle {
      background-color: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      width: 32px;
      height: 32px;
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.85);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .geocam-enhancement-toggle {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12 2.5l1.7 6.2 6.3 1.8-6.3 1.8-1.7 6.2-1.7-6.2-6.3-1.8 6.3-1.8L12 2.5z' fill='%23ffffff'/%3E%3Cpath d='M5 18.5l.6-1.8 1.8-.6-1.8-.6L5 13.7l-.6 1.8-1.8.6 1.8.6.6 1.8z' fill='%23ffffff'/%3E%3Cpath d='M19 5.5l.4 1.2 1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4.4-1.2z' fill='%23ffffff'/%3E%3C/svg%3E");
      color: transparent;
    }

    .geocam-xray-toggle {
      background-image: none;
    }

    .geocam-enhancement-toggle:hover,
    .geocam-enhancement-toggle.is-open,
    .geocam-xray-toggle:hover,
    .geocam-xray-toggle.is-active {
      background-color: rgba(77, 163, 255, 0.8);
      border-color: rgba(77, 163, 255, 0.9);
      box-shadow: 0 0 12px rgba(77, 163, 255, 0.35);
    }

    .geocam-enhancement-toggle:focus,
    .geocam-xray-toggle:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(77, 163, 255, 0.4);
    }

    .geocam-enhancement-controls input[type="range"]:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `);const i=.5,r={aspect:2,near:.1,fov:35,far:100,scale:1,xOffset:0,yOffset:0,rotationOffsets:[0,0,0],hemispheres:[()=>ye(0),()=>ye(1),()=>ye(2)]},o=t.plugins,s=new $x,c={enabled:!0,sharpenAmount:.7,saturationBoost:.6,vignetteAmount:3,vignettePower:5,toneMapAmount:.3,forceCpu:!1,autoWhiteBalanceEnabled:!0,whiteBalanceGains:[1,1,1],shadowBoostAmount:0,xRayEnabled:!1,xRayEdgeStrength:.25},a=t.enhancement===!1?Object.assign({},c,{enabled:!1}):Object.assign({},c,t.enhancement||{}),l={shot:wt(),capture:wt(),fov:wt(),yaw:wt(0),rotation:wt([]),brightness:wt([]),facing:wt(0),horizon:wt(0),urls:wt([]),visible:wt(!1),hemispheres:wt([]),shotInfo:wt(yl())},h=[wt(1),wt(1),wt(1)],u=wt(window.performance.now());let f=!1,d,p,x,y,g=0,m=0,b=0,v=0,w=[null,null,null],T=null,L=!1,G,C,Y=[],N,O,B,P=JSON.stringify([]),R=JSON.stringify([]),U=null,q=null,K=!1,te=!1;const pe=function(_){return(270-_)*(Math.PI/180)},ye=function(_){const D=new _o(12,32,32,0,2*Math.PI,Math.PI/3*_,Math.PI/3),W=new Vt({}),ae=new et(D,W);return ae.material.side=mt,ae},Oe=function(){y.style.top=g+"px",y.style.left=m+"px",y.style.width=b+"px",y.style.height=v+"px"},Ae=function(_,D=!1){const W=_.domElement,ae=y.parentNode.clientWidth,Se=y.parentNode.clientHeight,we=D||Math.abs(W.clientWidth-ae)>1||Math.abs(W.clientHeight-Se)>1;if(we){y.style.width=ae+"px",y.style.height=Se+"px",_.setSize(ae,Se,!0);const Ie=_.domElement;p.aspect=Ie.clientWidth/Ie.clientHeight,L=!0}return we},qe=_=>{if(!He)return;Ae(be);const D=l.horizon(),W=l.facing();l.facing((360+W)%360),l.horizon(Math.max(-85,Math.min(85,D)));const ae=(90-D)*(Math.PI/180),Se=W*(Math.PI/180),we=10;{const Ie=we*Math.sin(ae)*Math.sin(Se),Ce=-we*Math.cos(ae),We=we*Math.sin(ae)*Math.cos(Se);p.up.set(0,0,1),p.lookAt(Ie,We,Ce)}L&&(p.updateProjectionMatrix(),L=!1),be.render(fe,p),G=requestAnimationFrame(Ie=>qe())},ze=function(_){return new Promise((D,W)=>{typeof _=="function"?D(_()):new Fo().load(_,Se=>{Se.traverse(function(we){we instanceof et&&(we.material.side=2,we.material.flatShading=!0,we.material.transparent=!0,we.rotation.set(0,0,0),D(we))})})})},j=function(_){return console.log("loadMeshes"),s.add(new Promise((D,W)=>{let ae=w.length;_.forEach((Se,we)=>{ze(Se).then(Ie=>{w[we]=Ie,ae-=1,ae<=0&&D()})})}))},Ye=function(){w.forEach(_=>{_&&(_.material&&(_.material.map&&_.material.map.dispose(),_.material.dispose()),_.geometry&&_.geometry.dispose(),T.remove(_))}),fe.remove(T),be.renderLists.dispose(),w=[null,null,null],T=null,ve()},Re=function(){N&&(N(),N=null)},Pe=function(){B&&(B(),B=null)},Le=function(_,...D){return Object.assign(_,...D)},V=function(_){_&&typeof _.dispose=="function"&&_.dispose()},Z=function(_,D){!_||!D||(D.wrapS=_.wrapS,D.wrapT=_.wrapT,D.magFilter=_.magFilter,D.minFilter=_.minFilter,D.anisotropy=_.anisotropy,D.flipY=_.flipY,D.rotation=_.rotation,D.repeat.copy(_.repeat),D.offset.copy(_.offset),D.center&&_.center&&D.center.copy(_.center),"encoding"in _&&(D.encoding=_.encoding),D.generateMipmaps=_.generateMipmaps)},ne=[],oe=function(_){return!_||!_.userData?null:_.userData.enhancedTexture||_.userData.rawTexture||_.material.map},$=function(_,D){if(!_||!_.material)return;const W=oe(_),ae=_.userData.overlayTexture,Se=ne[D];if(!W)return;if(!Se){_.material.map!==W&&(_.material.map=W,_.material.needsUpdate=!0),_.userData.overlayTexture=null,ae&&V(ae);return}const we=W.image;if(!we||!we.width||!we.height)return;const Ie=document.createElement("canvas");Ie.width=we.width,Ie.height=we.height;const Ce=Ie.getContext("2d");Ce.drawImage(we,0,0),Ce.drawImage(Se,0,0,Ie.width,Ie.height);const We=new xi(Ie);Z(W,We),We.needsUpdate=!0,_.material.map=We,_.material.needsUpdate=!0,_.userData.overlayTexture=We,ae&&V(ae)},xe=function(){w.forEach((_,D)=>$(_,D))};let S=0;const A=function(_,D,W,ae){if(!a.enabled||!_||!_.material)return;const Se=D||(_.userData?_.userData.rawTexture:null)||_.material.map,we=ae||Se&&Se.image||D&&D.image;if(!we||!we.width||!we.height)return;const Ie=++S;_.userData.enhancementJob=Ie,_.userData.enhancementUrl=W,_.userData.enhancementOptions={sharpenAmount:a.sharpenAmount,saturationBoost:a.saturationBoost,toneMapAmount:a.toneMapAmount,vignetteAmount:a.vignetteAmount,vignettePower:a.vignettePower,autoWhiteBalanceEnabled:a.autoWhiteBalanceEnabled,whiteBalanceGains:Array.isArray(a.whiteBalanceGains)?a.whiteBalanceGains.slice(0,3):[1,1,1],shadowBoostAmount:a.shadowBoostAmount,xRayEdgeStrength:Math.max(0,Math.min(1,a.xRayEdgeStrength))};const Ce=Object.assign({},a,{whiteBalanceGains:Array.isArray(a.whiteBalanceGains)?a.whiteBalanceGains.slice(0,3):[1,1,1],shadowBoostAmount:a.shadowBoostAmount,xRayEdgeStrength:a.xRayEnabled?Math.max(0,Math.min(1,a.xRayEdgeStrength)):0});Ce.xRayEnabled=!!a.xRayEnabled,Ce.xRayEnabled?(Ce.sharpenAmount=Ce.sharpenAmount+.3,Ce.sharpenAmount=Math.max(0,Ce.sharpenAmount),Ce.toneMapAmount=Math.max(Ce.toneMapAmount,.9),Ce.shadowBoostAmount=Math.max(Ce.shadowBoostAmount,.85),Ce.xRayEdgeStrength=Math.max(0,Math.min(1,Ce.xRayEdgeStrength))):Ce.xRayEdgeStrength=0,pv(we,Ce).then(We=>{if(_.userData.enhancementJob!==Ie||_.userData.currentUrl!==W)return;const ke=new xi(We),je=Se||(_.userData?_.userData.rawTexture:null)||_.material.map;je&&Z(je,ke),ke.needsUpdate=!0;const Be=_.material.map,Ke=_.userData.enhancedTexture;_.userData.enhancedTexture=ke,_.material.map=ke,_.material.needsUpdate=!0,$(_,w.indexOf(_)),Be&&Be!==ke&&Be!==_.userData.rawTexture&&V(Be),Ke&&Ke!==Be&&Ke!==ke&&Ke!==_.userData.rawTexture&&V(Ke)}).catch(We=>{console.warn("Image enhancement failed",{url:W,err:We})})},ee=function(){a.enabled&&w.forEach(_=>{_&&_.material&&_.material.map&&_.userData&&_.userData.originalImage&&_.userData.currentUrl&&A(_,_.userData.rawTexture||_.material.map,_.userData.currentUrl,_.userData.originalImage)})},X=function(){w.forEach(_=>{if(!_||!_.material||!_.userData)return;const D=_.userData.rawTexture,W=_.material.map;D&&W!==D&&(_.material.map=D,_.material.needsUpdate=!0,W&&W!==D&&W!==_.userData.enhancedTexture&&V(W)),_.userData.enhancedTexture&&_.userData.enhancedTexture!==D&&V(_.userData.enhancedTexture),_.userData.enhancedTexture=null,_.userData.enhancementJob=null,_.userData.overlayTexture=null,$(_,w.indexOf(_))})},I=function(){a.enabled&&(q&&clearTimeout(q),q=setTimeout(()=>{q=null,ee()},180))},ie=256,re=.25,Me=4,Q=1e-6;let J=null,_e=null,ge=null;const he=(_,D,W)=>_<D?D:_>W?W:_,ve=function(){J=null,a.whiteBalanceGains=[1,1,1],w.forEach(_=>{_&&_.userData&&(_.userData.whiteBalanceSampled=!1)})},Je=function(){J={sumR:0,sumG:0,sumB:0,count:0},a.whiteBalanceGains=[1,1,1],w.forEach(_=>{_&&_.userData&&(_.userData.whiteBalanceSampled=!1)})},At=function(_,D){return typeof document>"u"||(_e||(_e=document.createElement("canvas"),ge=_e.getContext("2d")),!ge)?null:(_e.width=_,_e.height=D,ge)},Sa=function(_){if(!a.autoWhiteBalanceEnabled||!_)return!1;J||Je();const D=_.width||_.videoWidth||_.naturalWidth||_.bitmapWidth||0,W=_.height||_.videoHeight||_.naturalHeight||_.bitmapHeight||0;if(!D||!W)return!1;const ae=Math.min(ie,D),Se=Math.min(ie,W),we=At(ae,Se);if(!we)return!1;try{we.clearRect(0,0,ae,Se),we.drawImage(_,0,0,ae,Se)}catch{return!1}let Ie;try{Ie=we.getImageData(0,0,ae,Se)}catch{return!1}const Ce=Ie.data,We=Ce.length/4;if(!We)return!1;let ke=0,je=0,Be=0;for(let Jt=0;Jt<Ce.length;Jt+=4)ke+=Ce[Jt],je+=Ce[Jt+1],Be+=Ce[Jt+2];J.sumR+=ke,J.sumG+=je,J.sumB+=Be,J.count+=We;const Ke=J.count;if(Ke<=0)return!1;const vt=J.sumR/Ke||Q,zt=J.sumG/Ke||Q,ai=J.sumB/Ke||Q,Ci=(vt+zt+ai)/3||Q,Rr=[he(Ci/vt,re,Me),he(Ci/zt,re,Me),he(Ci/ai,re,Me)],Pr=a.whiteBalanceGains||[1,1,1],ko=Rr.some((Jt,La)=>Math.abs(Jt-Pr[La])>.01);return ko&&(a.whiteBalanceGains=Rr),ko},Uo=function(){if(!a.autoWhiteBalanceEnabled)return!1;Je();let _=!1;return w.forEach(D=>{if(D&&D.userData&&D.userData.originalImage&&!D.userData.whiteBalanceSampled){const W=Sa(D.userData.originalImage);D.userData.whiteBalanceSampled=!0,_=_||W}else D&&D.userData&&(D.userData.whiteBalanceSampled=!!(D.userData&&D.userData.originalImage))}),_},Bn=_=>(Math.round(_*100)/100).toFixed(2),oi=function(){if(!U)return;const{enableInput:_,forceInput:D,shadowBoostInput:W,xRayEdgeInput:ae,toneMapInput:Se,vignetteInput:we,vignettePowerInput:Ie,autoWhiteBalanceInput:Ce,advancedInput:We,setSlidersDisabled:ke,updateLabels:je,updateAdvancedVisibility:Be,panel:Ke}=U;_&&(_.checked=!!a.enabled),D&&(D.checked=!!a.forceCpu,D.disabled=!a.enabled),Se&&(Se.disabled=!a.enabled),W&&(W.disabled=!a.enabled),ae&&(ae.disabled=!(a.enabled&&a.xRayEnabled)),We&&(We.disabled=!a.enabled),ke&&ke(!a.enabled),Ce&&(Ce.checked=!!a.autoWhiteBalanceEnabled);const vt=a.enabled&&te;we&&(we.disabled=!vt),Ie&&(Ie.disabled=!vt),Ke&&Ke.classList.toggle("is-disabled",!a.enabled),je&&je(),Be&&Be()},Ea=function(){if(!U)return;const{panel:_,toggleButton:D}=U;_&&_.classList.toggle("is-hidden",!K),D&&(D.classList.toggle("is-open",K),D.setAttribute("aria-expanded",K?"true":"false"))},si=function(_,{reprocess:D=!0}={}){const W=!!_,ae=a.enabled!==W;a.enabled=W,q&&(clearTimeout(q),q=null),oi(),W?(ae||D)&&(a.autoWhiteBalanceEnabled&&Uo(),ee()):(ve(),w.forEach(Se=>{Se&&Se.userData&&(Se.userData.enhancementJob=null)}),(ae||D)&&X())},Ta=function(){const _=d.querySelector(".geocam-viewer-controls-left-bottom");if(!_)return;const D=on("BUTTON",{class:"geocam-viewer-control geocam-viewer-control-button geocam-enhancement-toggle",type:"button",title:"Image enhancement"});D.setAttribute("aria-label","Image enhancement"),D.setAttribute("aria-expanded",K?"true":"false"),D.addEventListener("click",()=>{K=!K,Ea()}),_.appendChild(D);const W=on("DIV",{class:"geocam-viewer-control geocam-enhancement-controls"});W.innerHTML=`
      <h4>Image Enhance</h4>
      <div class="toggle-row">
        <label>
          <input type="checkbox" data-role="enabled">
          <span>Enabled</span>
        </label>
        <label>
          <input type="checkbox" data-role="force-cpu">
          <span>Force CPU</span>
        </label>
      </div>
      <label>
        <span class="value-row">
          <span>Sharpen</span>
          <span class="value" data-role="sharpen-value"></span>
        </span>
        <input type="range" min="0" max="1" step="0.05" data-role="sharpen">
      </label>
      <label>
        <span class="value-row">
          <span>Saturation</span>
          <span class="value" data-role="saturation-value"></span>
        </span>
        <input type="range" min="-0.3" max="1" step="0.02" data-role="saturation">
      </label>
      <label>
        <span class="value-row">
          <span>Shadow Boost</span>
          <span class="value" data-role="shadow-boost-value"></span>
        </span>
        <input type="range" min="0" max="1" step="0.05" data-role="shadow-boost">
      </label>
      <label>
        <span class="value-row">
          <span>Highlight Protect</span>
          <span class="value" data-role="tone-map-value"></span>
        </span>
        <input type="range" min="0" max="1" step="0.05" data-role="tone-map-amount">
      </label>
      <label>
        <span class="value-row">
          <span>X-Ray Edge</span>
          <span class="value" data-role="xray-edge-value"></span>
        </span>
        <input type="range" min="0" max="1" step="0.05" data-role="xray-edge-strength">
      </label>
      <div class="advanced-toggle">
        <label>
          <input type="checkbox" data-role="advanced">
          <span>Advanced</span>
        </label>
      </div>
      <div class="advanced-group" data-role="advanced-group">
        <div class="row">
          <span class="value-row">
            <span>Vignette</span>
            <span class="value" data-role="vignette-value"></span>
          </span>
          <input type="range" min="0" max="20" step="0.05" data-role="vignette">
        </div>
        <div class="row">
          <span class="value-row">
            <span>Vignette Power</span>
            <span class="value" data-role="vignette-power-value"></span>
          </span>
          <input type="range" min="1" max="6" step="0.1" data-role="vignette-power">
        </div>
        <div class="row checkbox-row">
          <label>
            <input type="checkbox" data-role="auto-white-balance">
            <span>Auto White Balance</span>
          </label>
        </div>
      </div>
    `,d.appendChild(W);const ae=W.querySelector('[data-role="enabled"]'),Se=W.querySelector('[data-role="force-cpu"]'),we=W.querySelector('[data-role="advanced"]'),Ie=W.querySelector('[data-role="advanced-group"]'),Ce=W.querySelector('[data-role="sharpen"]'),We=W.querySelector('[data-role="saturation"]'),ke=W.querySelector('[data-role="shadow-boost"]'),je=W.querySelector('[data-role="tone-map-amount"]'),Be=W.querySelector('[data-role="xray-edge-strength"]'),Ke=W.querySelector('[data-role="vignette"]'),vt=W.querySelector('[data-role="vignette-power"]'),zt=W.querySelector('[data-role="auto-white-balance"]'),ai=W.querySelector('[data-role="sharpen-value"]'),Ci=W.querySelector('[data-role="saturation-value"]'),Rr=W.querySelector('[data-role="shadow-boost-value"]'),Pr=W.querySelector('[data-role="tone-map-value"]'),ko=W.querySelector('[data-role="xray-edge-value"]'),Jt=W.querySelector('[data-role="vignette-value"]'),La=W.querySelector('[data-role="vignette-power-value"]'),_l=()=>{ai&&(ai.textContent=Bn(a.sharpenAmount)),Ci&&(Ci.textContent=Bn(a.saturationBoost)),Rr&&(Rr.textContent=Bn(a.shadowBoostAmount)),Pr&&(Pr.textContent=Bn(a.toneMapAmount)),ko&&(ko.textContent=Bn(a.xRayEdgeStrength)),Jt&&(Jt.textContent=Bn(a.vignetteAmount)),La&&(La.textContent=Bn(a.vignettePower))},vv=[Ce,We,ke,je,Be].filter(Boolean),_v=Ze=>{vv.forEach(bn=>{bn&&(bn.disabled=Ze)}),W.classList.toggle("is-disabled",Ze)},bl=()=>{const Ze=te&&a.enabled;W.classList.toggle("is-advanced",Ze),we&&(we.checked=te,we.setAttribute("aria-expanded",Ze?"true":"false")),Ie&&Ie.setAttribute("aria-hidden",Ze?"false":"true");const bn=a.enabled&&te;Ke&&(Ke.disabled=!bn),vt&&(vt.disabled=!bn),zt&&(zt.disabled=!bn)};ae.checked=a.enabled,Se.checked=a.forceCpu,we&&(we.checked=te),Ce&&(Ce.value=a.sharpenAmount),We&&(We.value=a.saturationBoost),ke&&(ke.value=a.shadowBoostAmount),je&&(je.value=Math.max(0,Math.min(1,a.toneMapAmount))),Ke&&(Ke.value=a.vignetteAmount),vt&&(vt.value=a.vignettePower),zt&&(zt.checked=a.autoWhiteBalanceEnabled),Be&&(Be.value=a.xRayEdgeStrength),_l(),bl(),ae.addEventListener("change",Ze=>{si(Ze.target.checked)}),Se.addEventListener("change",Ze=>{a.forceCpu=!!Ze.target.checked,a.enabled&&ee()}),we&&we.addEventListener("change",Ze=>{te=!!Ze.target.checked,bl(),oi()}),zt&&zt.addEventListener("change",Ze=>{if(a.autoWhiteBalanceEnabled=!!Ze.target.checked,a.autoWhiteBalanceEnabled){const bn=Uo();a.enabled&&(bn?ee():I())}else ve(),a.enabled&&ee();oi()});const Ri=Ze=>bn=>{const cf=parseFloat(bn.target.value);Ze(Number.isFinite(cf)?cf:0),_l()},Pi=()=>{I()};Ce.addEventListener("input",Ri(Ze=>{a.sharpenAmount=Ze})),Ce.addEventListener("change",Pi),We.addEventListener("input",Ri(Ze=>{a.saturationBoost=Math.max(-.3,Math.min(1,Ze))})),We.addEventListener("change",Pi),ke&&(ke.addEventListener("input",Ri(Ze=>{a.shadowBoostAmount=Math.max(0,Math.min(1,Ze))})),ke.addEventListener("change",Pi)),Be&&(Be.addEventListener("input",Ri(Ze=>{a.xRayEdgeStrength=Math.max(0,Math.min(1,Ze))})),Be.addEventListener("change",Pi)),je&&(je.addEventListener("input",Ri(Ze=>{a.toneMapAmount=Math.max(0,Math.min(1,Ze))})),je.addEventListener("change",Pi)),Ke.addEventListener("input",Ri(Ze=>{a.vignetteAmount=Ze})),Ke.addEventListener("change",Pi),vt.addEventListener("input",Ri(Ze=>{a.vignettePower=Ze})),vt.addEventListener("change",Pi),U={panel:W,toggleButton:D,enableInput:ae,forceInput:Se,toneMapInput:je,shadowBoostInput:ke,advancedInput:we,vignetteInput:Ke,vignettePowerInput:vt,xRayEdgeInput:Be,autoWhiteBalanceInput:zt,setSlidersDisabled:_v,updateLabels:_l,updateAdvancedVisibility:bl},oi(),Ea()},Aa=async function(_){let D;_&&_.length>0&&P!==(D=JSON.stringify(_))&&(P=D,Re(),T&&Ye(),await j(_),T=new Xn,w.forEach((W,ae)=>{T.add(W),W.name=`${ae}`}),fe.add(T),N=l.urls(W=>{const ae=JSON.stringify(W);ae!==R&&W.length>0&&(R=ae,z(W,l.brightness()))}))},Go=async function(_={}){Pe(),Ye(),x=Le(r,_);const D=l.fov()||x.fov;return l.fov(D),p=new dt(D,x.aspect,x.near,x.far),B=l.hemispheres(Aa),Ae(be,!0),this},an=function(){w.forEach((_,D)=>{_&&_.material&&(_.material.opacity=i)}),h.forEach(_=>_(0))},zo=function(_,D,W,ae,Se,we){_.material.opacity=i;const Ie=parseInt(_.name);h[Ie](0),_.userData=_.userData||{};const Ce=(_.userData.requestId||0)+1;_.userData.requestId=Ce,a.autoWhiteBalanceEnabled&&(_.userData.whiteBalanceSampled=!1);const We=_.material.map,ke=_.userData.rawTexture,je=_.userData.enhancedTexture;_.userData.currentUrl=D,_.userData.originalImage=null,_.userData.enhancementJob=null,new Zx(C).load(D,Be=>{if(_.userData.requestId!==Ce){V(Be);return}if(_.material.map&&_.material.map.dispose(),_.userData.overlayTexture=null,_.material.map=Be,_.material.opacity=1,Be.repeat.set(x.scale,x.scale),Be.offset.set(x.yOffset,x.xOffset),Be.rotation=x.rotationOffsets[Ie],_.material.needsUpdate=!0,_.userData.originalImage=Be.image,_.userData.rawTexture=Be,_.userData.enhancedTexture=null,$(_,Ie),a.autoWhiteBalanceEnabled){if(!_.userData.whiteBalanceSampled){const vt=Sa(_.userData.originalImage);_.userData.whiteBalanceSampled=!0,vt&&a.enabled&&I()}}else _.userData&&(_.userData.whiteBalanceSampled=!1);h[Ie](1),We&&We!==Be&&V(We),ke&&ke!==Be&&ke!==We&&V(ke),je&&je!==Be&&je!==We&&V(je),A(_,Be,D,_.userData.originalImage),W&&W(_,D)},Be=>{if(_.userData.requestId!==Ce)return;const Ke=Be.loaded/Be.total;ae&&ae(_,D,Ke)},Be=>{_.userData.requestId===Ce&&console.error("error loading image",Be,Ie,D)},we)},xl=function(_,D,W,ae,Se){const we=ke=>{const je=Number(ke);return Number.isFinite(je)&&je>0?je:1},Ie=function(ke,je,Be,Ke){const vt=parseInt(ke.name);let zt=je.length-Be;const ai=je[Be];zo(ke,ai,()=>{h[vt]((Be+1)/je.length),ae&&zt==je.length,W&&zt<=1&&W(ke,ai),Be+=1,Be<je.length&&Ie(ke,je,Be,Ke)},(Ci,Rr,Pr)=>{h[vt]((Be+Pr)/je.length)},null,Ke)},Ce=parseInt(_.name),We=we(Se);Array.isArray(D)?Ie(_,D,0,We):zo(_,D,()=>{h[Ce](1),W&&W(_,D)},(je,Be,Ke)=>{h[Ce](Ke)},null,We)},vl=function(_){o.push(_),f&&_.init.apply(_,[this])},E=function(){const _=l.rotation();var D=new Ge;_.length==9?D.set(_[0],_[1],_[2],0,_[3],_[4],_[5],0,_[6],_[7],_[8],0,0,0,0,1):D.makeRotationY(pe(l.yaw()-90));{var W=new Ge;W.makeRotationX(Math.PI/2),D.premultiply(W)}T.setRotationFromMatrix(D)},z=async function(_,D=[1,1,1]){C&&C.abort(),C=new AbortController;let W=w.length;w.length;const ae=yl(l.shotInfo?l.shotInfo():null);let Se;Array.isArray(D)?Se=D:typeof D=="number"?Se=[D,D,D]:Se=[1,1,1];const we=sf(ae),Ie=gv(Se,ae,we);a.autoWhiteBalanceEnabled?Je():ve(),console.log("Viewer: applying shot brightness",{shotId:ae.id??null,exposure_us:ae.exposure_us,gain_db:ae.gain_boost,gain_linear:ae.gain_boost.map(of),toneMapAmount:a.toneMapAmount,shadowBoostAmount:a.shadowBoostAmount,xRayEnabled:a.xRayEnabled,xRayEdgeStrength:a.xRayEdgeStrength,autoWhiteBalanceEnabled:a.autoWhiteBalanceEnabled,whiteBalanceGains:a.whiteBalanceGains,physicalFactors:we,baseBrightness:Se,effectiveBrightness:Ie}),w.forEach((Ce,We)=>{const ke=_[We];xl(Ce,ke,(je,Be)=>{if(W-=1,W<=0)return E(),!0},(je,Be)=>{},Ie[We])}),qe()},F=function(_,D,W,ae,Se,we=null){const Ie=Se&&typeof Se=="string"?JSON.parse(Se):Se||[1,1,1],Ce=yl(we);yv(Ce)&&si(!1),l.shotInfo(Ce),W&&W.length>0&&l.hemispheres(W);const We=typeof ae=="string"?JSON.parse(ae):ae;l.rotation(We||[]);const ke=Array.isArray(Ie)?Ie.slice(0,3):[Ie,Ie,Ie];for(;ke.length<3;)ke.push(ke[0]!==void 0?ke[0]:1);l.brightness(ke),l.yaw(parseFloat(D||0)),l.urls(_),l.visible(!0),Ae(be,!0)},k=function(_){const D=l.urls();if(D&&D.length>=w.length){if(_){const W=JSON.parse(_);l.brightness(Array.isArray(W)?W:[W,W,W])}z(D,l.brightness())}Ae(be,!0)},ce=function(){l.visible(!1),l.shot(null)};let He=!1,be=new io({preserveDrawingBuffer:!0});be.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let fe=new Hr,nt=new oa(16777215,1);fe.add(nt);const ot=e.getBoundingClientRect();y=on("DIV",{class:"geocam-viewer"}),d=on("DIV",{class:"geocam-viewer-controls"}),d.append(on("DIV",{class:"geocam-viewer-controls-left"},'<div class="geocam-viewer-controls-left-top"></div><div class="geocam-viewer-controls-left-bottom"></div>'));const Qe=on("DIV",{class:"geocam-viewer-controls-center"},'<div class="geocam-viewer-controls-top"></div><div class="geocam-viewer-controls-mid"></div><div class="geocam-viewer-controls-bottom"></div>');Qe.append(on("DIV")),Qe.append(on("DIV")),Qe.append(on("DIV")),d.append(Qe),d.append(on("DIV",{class:"geocam-viewer-controls-right"},'<div class="geocam-viewer-controls-right-top"></div><div class="geocam-viewer-controls-right-bottom"></div>')),Ta(),y.appendChild(d),b=ot.width,v=ot.height,Oe(),y.appendChild(be.domElement),O=l.visible(_=>{_?y.classList.remove("geocam-viewer-hidden"):y.classList.add("geocam-viewer-hidden"),He=_}),e.appendChild(y),Y.push(l.fov(_=>{p&&_!==null&&(p.fov=_,L=!0)}));const lt=function(){if(G&&(cancelAnimationFrame(G),G=null),He=!1,C&&(C.abort(),C=null),Y.forEach(_=>_()),Y=[],O&&(O(),O=null),Re(),Pe(),o.forEach(_=>{"destroy"in _&&_.destroy.apply(_)}),w&&(w.forEach(_=>{_&&(_.geometry&&_.geometry.dispose(),_.material&&(_.material.map&&_.material.map.dispose(),_.material.dispose()),_.userData&&(_.userData.rawTexture&&_.userData.rawTexture!==_.material.map&&V(_.userData.rawTexture),_.userData.enhancedTexture&&_.userData.enhancedTexture!==_.material.map&&V(_.userData.enhancedTexture),_.userData.rawTexture=null,_.userData.enhancedTexture=null),T&&T.remove(_))}),w=[null,null,null]),T&&(fe.remove(T),T=null),nt&&(fe.remove(nt),nt=null),fe){for(fe.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material.forEach(D=>{D.map&&D.map.dispose(),D.dispose()}):(_.material.map&&_.material.map.dispose(),_.material.dispose()))});fe.children.length>0;)fe.remove(fe.children[0]);fe=null}if(be){be.renderLists.dispose(),be.dispose();const _=be.getContext();if(_&&_.getExtension){const D=_.getExtension("WEBGL_lose_context");D&&D.loseContext()}be.domElement&&y&&y.removeChild(be.domElement),be=null}dn.clear(),y&&e&&(e.removeChild(y),y=null),p=null,d=null,x=null,Object.keys(l).forEach(_=>{if(l[_]&&typeof l[_]=="function")try{l[_](null)}catch{}})},Fe=function(_,D=null){return l[_]||this[_]?(console.info("geocam viewer attempt to add store that already exists",_),l[_]()===null&&D!==null&&l[_](D)):(l[_]=wt(D),this[_]=l[_],u(window.performance.now())),l[_]},st=function(_,D,W={}){const ae=document.getElementsByClassName(`geocam-viewer-controls-${D}`)[0];ae?(_.classList.add("geocam-viewer-control"),W.after?W.after.parentNode.insertBefore(_,W.after.nextSibling):W.prepend?ae.prepend(_):ae.appendChild(_)):console.error("geocam viewer unable to add control no matching location",_,D)};this.setup=Go,this.show=F,this.reload=k,this.hide=ce,this.resetProgress=an,this.plugin=vl,this.destroy=lt,Object.defineProperty(this,"camera",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(this,"meshGroup",{get:function(){return T},enumerable:!0,configurable:!0}),this.renderer=be,this.element=e,this.wrapper=y,this.done=s.done,this.progress=h,this.newstoreadded=u,this.stores=l;for(let _ in l)this[_]=l[_];this.store=Fe,this.addControl=st,this.imageOverlay=function(_,D){ne[_]=D||null,$(w[_],_)},this.clearImageOverlays=function(){ne.length=0,xe()},o.forEach(_=>{"init"in _&&_.init.apply(_,[this])}),Go(t.config),qe(),f=!0};class af extends HTMLElement{static get observedAttributes(){return["fov","facing","horizon","src"]}constructor(){super(),this.viewer=null,console.log("init")}attributeChangedCallback(t,n,i){console.log("attribute changed",t,i);const r=this,o=function(s,c){if(console.log("debouceAttrChange",s,c),r.viewer){if(r.viewer[s])console.log("setting",s,c),r.viewer[s](c);else if(s=="src"){const[a,l]=c.split(".");r.viewer.show([[`${a}/0.${l}`],[`${a}/1.${l}`],[`${a}/2.${l}`]],0,[`${a}/0.obj`,`${a}/1.obj`,`${a}/2.obj`])}}else setTimeout(()=>o(s,c),100)};o(t,i)}connectedCallback(){console.log("connected");const t=this;this.style.display="block",this.viewer=new xv(t,{plugins:[]}),typeof window<"u"&&(window.geocamViewerInstance=this.viewer)}updateViewer(){console.log("updating viewer"),this.viewer.show([["https://image.geocam.xyz/gc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2/0/0000/00002506.jpg?bytes=8431183872-8434173007&container=https%3A%2F%2Fs3proxy.geocam.xyz%2Fgc-raw-surveys-archive%2FNIST%2FBoiseDriving%2FBen_10-27%2Fgc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2_0.tar"],["https://image.geocam.xyz/gc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2/1/0000/00002506.jpg?bytes=8022497792-8025797203&container=https%3A%2F%2Fs3proxy.geocam.xyz%2Fgc-raw-surveys-archive%2FNIST%2FBoiseDriving%2FBen_10-27%2Fgc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2_1.tar"],["https://image.geocam.xyz/gc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2/2/0000/00002506.jpg?bytes=8256700416-8259564683&container=https%3A%2F%2Fs3proxy.geocam.xyz%2Fgc-raw-surveys-archive%2FNIST%2FBoiseDriving%2FBen_10-27%2Fgc2-2022-10-28-5985_s-Boise_driving_v-Ben1027_n-2_2.tar"]],0,["https://manager.geocam.xyz/calibration/717/hemisphere_0.obj","https://manager.geocam.xyz/calibration/717/hemisphere_1.obj","https://manager.geocam.xyz/calibration/717/hemisphere_2.obj"])}disconnectedCallback(){console.log("disconnected"),this.viewer=null}}window.customElements.define("geocam-viewer",af),Ii.GeocamViewer=af,Object.defineProperty(Ii,Symbol.toStringTag,{value:"Module"})}));
