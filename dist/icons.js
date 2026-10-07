'use strict';
// Reuse the world's sprite atlases so controls match the things placed on the map.
const iconCatalog={};
function atlasIcon(key,file,index,columns=4,badge=''){iconCatalog[key]={file,index,columns,badge};}
for(const [key,index] of Object.entries(oreSprites))atlasIcon('ore-'+key,'economy-sprites-v2.png',index);
for(const [key,def] of Object.entries(buildingDefs))atlasIcon('build-'+key,'economy-sprites-v2.png',def.sprite,4,key==='workshop'?'📖':'');
for(const [key,index] of Object.entries({human:4,sheep:6,wolf:7,forest:0,mountain:2,bush:3,wheat:11,fire:12,meteor:13}))atlasIcon(key,'sprites-v2.png',index);
for(const [key,index] of Object.entries({elf:0,dwarf:1,orc:2,temple:3}))atlasIcon(key,'civil-sprites-v2.png',index,2);
atlasIcon('goblin','economy-sprites-v2.png',0);atlasIcon('beastkin','economy-sprites-v2.png',1);
const symbolicIcons={food:'🌾',wood:'🪵',weapon:'⚔️',armor:'🛡️',tool:'⛏️',road:'🛤️',prospect:'🔎'};
function makeControlIcon(key){const data=iconCatalog[key],span=document.createElement('span');span.className='item-picture';span.setAttribute('aria-hidden','true');if(data){span.classList.add('atlas-picture');span.style.backgroundImage='url("assets/'+data.file+'")';span.style.backgroundSize=(data.columns*100)+'% '+(data.columns*100)+'%';span.style.backgroundPosition=((data.index%data.columns)/(data.columns-1)*100)+'% '+(Math.floor(data.index/data.columns)/(data.columns-1)*100)+'%';if(data.badge){const badge=document.createElement('span');badge.className='picture-badge';badge.textContent=data.badge;span.append(badge);}}else span.textContent=symbolicIcons[key]||'✦';return span;}
const renderToolsWithoutPictures=renderTools;
renderTools=function(){renderToolsWithoutPictures();for(const b of $('tool-list').querySelectorAll('[data-tool]')){const key=b.dataset.tool;if(!iconCatalog[key]&&!symbolicIcons[key])continue;const current=b.querySelector('.tool-icon');if(current)current.replaceWith(makeControlIcon(key));}};
const renderEconomyWithoutPictures=renderEconomy;
renderEconomy=function(){renderEconomyWithoutPictures();const content=$('economy-content');for(const box of content.querySelectorAll('.resource-grid>div')){const label=box.querySelector('small')?.textContent;const key=Object.keys({food:'Thức ăn',wood:'Gỗ',...resourceNames}).find(k=>({food:'Thức ăn',wood:'Gỗ',...resourceNames})[k]===label);if(key)box.prepend(makeControlIcon(oreKinds.includes(key)?'ore-'+key:key));}for(const b of content.querySelectorAll('[data-construction]')){b.classList.add('pictured-action');b.prepend(makeControlIcon('build-'+b.dataset.construction));}for(const b of content.querySelectorAll('[data-craft]')){b.classList.add('pictured-action');b.prepend(makeControlIcon(b.dataset.craft));}};
renderTools();
