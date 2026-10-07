'use strict';
const GAME_DAY_SECONDS=20*60,GAME_YEAR_SECONDS=365*GAME_DAY_SECONDS;
let calendarTime=simTime;
function seasonForTime(seconds){const day=Math.floor(seconds/GAME_DAY_SECONDS)%365;return day<91?0:day<183?1:day<274?2:3;}
function gameYear(){return Math.floor(calendarTime/GAME_YEAR_SECONDS)+1;}
function readCalendar(){const minutes=Math.min(1439,Math.floor((calendarTime%GAME_DAY_SECONDS)/GAME_DAY_SECONDS*1440+1e-8));return{year:gameYear(),day:Math.floor(calendarTime/GAME_DAY_SECONDS)%365+1,hour:Math.floor(minutes/60),minute:minutes%60,season:seasonNames[seasonForTime(calendarTime)],secondsPerDay:GAME_DAY_SECONDS,speed,paused};}
const clockOld={newWorld,simulate,updateStats,snapshot,restore,renderClimatePanel};
function renderCalendar(){const c=readCalendar(),text='Năm '+c.year+' · Ngày '+c.day+' · '+String(c.hour).padStart(2,'0')+':'+String(c.minute).padStart(2,'0')+' · '+c.season.replace('Mùa ','');if($('year').textContent!==text)$('year').textContent=text;}
updateStats=function(){clockOld.updateStats();renderCalendar();};
simulate=function(dt){calendarTime+=dt;clockOld.simulate(dt);renderCalendar();};
newWorld=function(...args){calendarTime=0;clockOld.newWorld(...args);renderCalendar();};
renderClimatePanel=function(){clockOld.renderClimatePanel();const c=readCalendar();$('climate-description').textContent=c.season+' · Năm '+c.year+', ngày '+c.day+'. 1 ngày = 20 phút ngoài đời ở 1×; một năm có 365 ngày, mỗi mùa dài 91–92 ngày. 2×/5× tua nhanh cả đồng hồ; tạm dừng dừng thời gian. Thời tiết đổi sau vài giờ trong game. Mưa dập lửa/tăng sinh trưởng, đông cây cỏ phát triển chậm. Tắt luật Thiên tai để ngăn tác hại của thời tiết và sét.';};
snapshot=function(){return{...clockOld.snapshot(),version:5,calendarSeconds:calendarTime};};
restore=function(input){const d=JSON.parse(JSON.stringify(input));if(!d||![1,2,3,4,5].includes(d.version))throw Error('Phiên bản không hỗ trợ.');const v=d.version,previous=calendarTime;if(v===5&&(typeof d.calendarSeconds!=='number'||!Number.isFinite(d.calendarSeconds)||d.calendarSeconds<0||d.calendarSeconds>1e13))throw Error('Đồng hồ thế giới không hợp lệ.');if(v===5)d.version=4;calendarTime=v===5?d.calendarSeconds:d.simTime/20*GAME_YEAR_SECONDS;try{clockOld.restore(d);}catch(e){calendarTime=previous;throw e;}if(v<5){climate.season=seasonForTime(calendarTime);climate.remaining=100+random()*200;if(v===4)for(const f of climate.fronts)f.drift/=60;}renderCalendar();renderClimateHud();};
climate.season=seasonForTime(calendarTime);climate.remaining=100+random()*200;for(const f of climate.fronts)f.drift/=60;
const previousClockState=window.mamWorld.getState;
window.mamWorld={...window.mamWorld,newWorld:(...a)=>newWorld(...a),simulate:dt=>simulate(dt),snapshot:()=>snapshot(),restore:d=>restore(d),getCalendar:readCalendar,getState:()=>({...previousClockState(),year:gameYear(),calendar:readCalendar()})};
renderCalendar();
if(document.modelContext?.registerTool)try{Promise.resolve(document.modelContext.registerTool({name:'read_world_calendar',description:'Read world day, year, time, season and playback speed. One day lasts 20 real minutes at 1x.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:readCalendar})).catch(()=>{});}catch{}
