'use strict';
// NEW v11.1: cultures name their own realms at founding, without advancing RNG.
const realmWords={
 human:[['An','Hải','Thiên','Minh','Vân','Bình','Long','Đông'],['Lạc','Sơn','Hưng','Thành','Giang','Phong','Hoa','Châu']],
 elf:[['Syl','Ael','Lun','Eli','Fael','Ily','Thael','Vel'],['vara','doria','rion','syl','thien','wyn','nara','lora']],
 dwarf:[['Khaz','Dur','Brom','Thar','Grom','Kaz','Bar','Dun'],['gar','hold','din','heim','drum','rak','dorn','grim']],
 orc:[['Gor','Krug','Morg','Ur','Ruk','Zog','Grash','Drog'],['mar','gash','thar','rok','dun','kran','gor','zug']],
 goblin:[['Giz','Zik','Grib','Nok','Taz','Kip','Zag','Vik'],['nak','zik','mok','bur','taz','rik','nar','gaz']],
 beastkin:[['Aru','Kora','Naru','Tala','Rava','Sora','Maku','Yara'],['kai','tara','runi','nara','vora','mari','luna','sari']]
};
function realmHash(text){let h=2166136261;for(let i=0;i<text.length;i++)h=Math.imul(h^text.charCodeAt(i),16777619);return h>>>0;}
function realmFounder(v){if(typeof entities==='undefined')return null;const people=entities.filter(e=>e.kind==='human'&&e.village===v.id&&e.hp>0);return people.filter(e=>e.age>=16).sort((a,b)=>Number(b.traits?.includes('wise'))-Number(a.traits?.includes('wise'))||b.age-a.age||a.id-b.id)[0]||people[0]||null;}
function realmCulture(v){if(Object.hasOwn(realmWords,v.culture))return v.culture;const founder=realmFounder(v);return Object.hasOwn(realmWords,founder?.race)?founder.race:'human';}
function chooseRealmName(v,excludeId=null){const culture=realmCulture(v),founder=realmFounder(v),words=realmWords[culture],used=new Set(typeof kingdoms==='undefined'?[]:kingdoms.filter(k=>k.id!==excludeId).map(k=>k.name));const hash=realmHash((typeof seed==='undefined'?'world':seed)+'|'+culture+'|'+(founder?.name||'')+'|'+(founder?.id||v.id)+'|'+v.x.toFixed(2)+'|'+v.y.toFixed(2));
 for(let attempt=0;attempt<256;attempt++){const n=realmHash(hash+':'+attempt),a=words[0][n%words[0].length],b=words[1][(n>>>8)%words[1].length],suffix=attempt>=64?' '+(attempt-62):'',name='Vương quốc '+a+(culture==='human'?' ':'')+b+suffix;if(!used.has(name))return{name,culture,founder:founder?.id||null};}
 return{name:'Vương quốc '+words[0][hash%8]+v.id,culture,founder:founder?.id||null};}
function nameRealm(k,v){const chosen=chooseRealmName(v,k.id);k.name=chosen.name;k.namingCulture=chosen.culture;k.namedBy=chosen.founder;k.selfNamed=true;return k.name;}
function syncRealmSettlements(){if(typeof kingdoms==='undefined')return;for(const k of kingdoms){const lands=villages.filter(v=>v.kingdom===k.id);for(let i=0;i<lands.length;i++)lands[i].name=k.name+(i?' · Khu '+(i+1):'');}}
