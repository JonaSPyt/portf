const __vite__fileDeps=["assets/ColorUpdater-COJU66QZ.js","assets/index-3UHWr5PJ.js","assets/index-DScOe8p6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-3UHWr5PJ.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-COJU66QZ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};