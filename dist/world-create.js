'use strict';
// Keep pending dialog choices separate from the running world's map type.
let pendingMapType=mapType,creatingWorld=false;
const worldLabels={islands:'Quần đảo',continent:'Lục địa',empty:'Đại dương'};
const worldCreateError=document.createElement('p');worldCreateError.id='world-create-error';worldCreateError.setAttribute('role','alert');worldCreateError.hidden=true;$('create').before(worldCreateError);
function syncMapChoices(){for(const b of document.querySelectorAll('[data-map]')){const active=b.dataset.map===pendingMapType;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));}}
function renderWorldIdentity(){const title=document.querySelector('.world-top>span');if(title){const dot=document.createElement('i');dot.className='live-dot';title.replaceChildren(dot,document.createTextNode(worldLabels[mapType]+' · '+seed));title.title='Hạt giống: '+seed;}}
function openWorldCreator(){pendingMapType=Object.hasOwn(worldLabels,mapType)?mapType:'islands';$('seed').value=seed;$('new-era').value=geology.current;worldCreateError.hidden=true;syncMapChoices();if(!$('new-dialog').open)$('new-dialog').showModal();}
function createWorldFromDialog(){if(creatingWorld)return;const button=$('create'),s=$('seed').value.trim()||'dao-'+Date.now().toString(36);if(!Object.hasOwn(worldLabels,pendingMapType)){worldCreateError.textContent='Hãy chọn kiểu bản đồ.';worldCreateError.hidden=false;return;}let prior;const wasPaused=paused;creatingWorld=true;button.disabled=true;worldCreateError.hidden=true;try{prior=snapshot();newWorld(s,pendingMapType);renderWorldIdentity();$('new-dialog').close();toast('Đã tạo '+worldLabels[mapType].toLowerCase()+' · '+seed);}catch(error){if(prior)try{restore(prior);paused=wasPaused;updatePause();renderWorldIdentity();}catch(recovery){console.error('World creation recovery failed',recovery);}worldCreateError.textContent='Không tạo được thế giới. Thử hạt giống khác hoặc tải lại game; bản lưu trên thiết bị vẫn còn.';worldCreateError.hidden=false;console.error('World creation failed',error);}finally{creatingWorld=false;button.disabled=false;}}
$('new').onclick=openWorldCreator;
for(const b of document.querySelectorAll('[data-map]'))b.onclick=()=>{pendingMapType=b.dataset.map;syncMapChoices();};
$('create').onclick=createWorldFromDialog;
$('seed').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.isComposing){event.preventDefault();createWorldFromDialog();}});
const creationRestore=restore;restore=function(...args){creationRestore(...args);renderWorldIdentity();};
const creationNewWorld=newWorld;newWorld=function(...args){creationNewWorld(...args);renderWorldIdentity();};
window.mamWorld={...window.mamWorld,newWorld:(...args)=>newWorld(...args),restore:(...args)=>restore(...args)};
renderWorldIdentity();
