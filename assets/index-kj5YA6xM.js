const __vite__fileDeps=["assets/LifeUpdater-C9jkPSlU.js","assets/ValueWithRandom-DYiARkXv.js","assets/index-DtFVoY3W.js","assets/index-DScOe8p6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DtFVoY3W.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C9jkPSlU.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
