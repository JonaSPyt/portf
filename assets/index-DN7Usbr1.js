const __vite__fileDeps=["assets/Connector-CJ89nVeW.js","assets/CanvasUtils-BZOcXyex.js","assets/index-DtFVoY3W.js","assets/index-DScOe8p6.css","assets/ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./index-DtFVoY3W.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-CJ89nVeW.js"),__vite__mapDeps([0,1,2,3,4]));return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
