const __vite__fileDeps=["assets/Linker-BaNwWhJ-.js","assets/Ranges-BmaAEQED.js","assets/index-DKJ3zC53.js","assets/index-DScOe8p6.css","assets/index-DWiqXX-u.js","assets/OptionsColor-DRr_b1Yv.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DKJ3zC53.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-BaNwWhJ-.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};