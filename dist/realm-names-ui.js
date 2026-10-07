'use strict';
// NEW v11.1: migrate only legacy template names; preserve player-written names.
const realmNamesOld={newWorld,restore,foundSettlement,renderKingdoms,updateStats};
function initializeRealmNames(){const changes=[];for(const k of kingdoms){const capital=villages.find(v=>v.kingdom===k.id);if(!capital)continue;if(!k.selfNamed&&/^Vương quốc (?:Lá|Nắng|Mây|Khu định cư.*|Con người \d+|Tiên rừng \d+|Người lùn \d+|Orc \d+|Goblin \d+|Tộc Thú \d+|Suối|Gió|Hoa|Đồi|Sao)$/.test(k.name)){const oldName=k.name;nameRealm(k,capital);changes.push([oldName,k.name]);}else if(!k.selfNamed){k.selfNamed=true;k.namingCulture=realmCulture(capital);k.namedBy=k.king||null;}}
 syncRealmSettlements();for(const [before,after] of changes){for(const e of history)e.text=e.text.split(before).join(after);for(const e of divine.memories)e.text=e.text.split(before).join(after);}for(const c of convoyPool)if(c.active){const a=villages.find(v=>v.id===c.from),b=villages.find(v=>v.id===c.to);if(a&&b)c.label=a.name+' → '+b.name;}}
function updateRealmLegend(){const legend=document.querySelector('.legend');if(!legend)return;legend.replaceChildren();for(const k of kingdoms.filter(k=>members(k.id).length).slice(0,3)){const span=document.createElement('span'),i=document.createElement('i');i.style.background=k.color;span.append(i,document.createTextNode(k.name));legend.append(span);}}
newWorld=function(...args){realmNamesOld.newWorld(...args);initializeRealmNames();updateRealmLegend();renderEvents();};
restore=function(...args){realmNamesOld.restore(...args);initializeRealmNames();updateRealmLegend();renderEvents();};
foundSettlement=function(...args){const v=realmNamesOld.foundSettlement(...args);if(v){syncRealmSettlements();updateRealmLegend();}return v;};
renderKingdoms=function(){realmNamesOld.renderKingdoms();for(const k of kingdoms){if(!members(k.id).length)continue;const founder=entities.find(e=>e.id===k.namedBy),p=document.createElement('p');p.className='kingdom-detail';p.textContent='Tên do '+(raceNames[k.namingCulture]||'cư dân')+' chọn khi lập quốc'+(founder?' · Người lập quốc: '+founder.name:'');$('kingdom-list').append(p);}};
updateStats=function(){realmNamesOld.updateStats();$('villages').textContent=activeKingdomIds().size;};
initializeRealmNames();updateRealmLegend();renderEvents();
window.mamWorld={...window.mamWorld,newWorld:(...a)=>newWorld(...a),restore:d=>restore(d),getRealmNames:()=>kingdoms.map(k=>({id:k.id,name:k.name,culture:k.namingCulture,founder:k.namedBy,selfNamed:!!k.selfNamed}))};
