'use strict';
// Prepare each atlas once: filtered reduction avoids noisy single-pixel sampling.
const preparedArt=new WeakMap();
const ancientSprite=new Image();let ancientSpriteReady=false;ancientSprite.onload=()=>{ancientSpriteReady=true;mapDirty=true;if(tab==='epochs')renderTools();};ancientSprite.src='assets/ancient-sprites-v2.png';
function prepareAtlas(img,columns){if(!img.width||!img.height)return null;let prepared=preparedArt.get(img);if(prepared)return prepared;const sourceCell=img.width/columns,rows=Math.round(img.height/sourceCell),cell=64;const sheet=document.createElement('canvas');sheet.width=columns*cell;sheet.height=rows*cell;const c=sheet.getContext('2d');c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';const geometry=typeof artGeometry==='undefined'?null:artGeometry[String(img.src).split('/').pop().split('?')[0]];
 for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){const n=row*columns+col,box=geometry?.boxes[n],clip=geometry?.clips[n];if(!box||!clip){c.drawImage(img,col*sourceCell,row*sourceCell,sourceCell,sourceCell,col*cell,row*cell,cell,cell);continue;}const [x0,y0,x1,y1]=box,scale=54/Math.max(x1-x0,y1-y0),dx=col*cell+(cell-(x1-x0)*scale)/2,dy=row*cell+58-(y1-y0)*scale;const sx=img.width/geometry.maskWidth,sy=img.height/geometry.maskHeight;c.save();c.beginPath();for(let j=0;j<clip.length;j+=3)c.rect(dx+(clip[j+1]*sx-x0)*scale,dy+(clip[j]*sy-y0)*scale,(clip[j+2]-clip[j+1])*sx*scale,sy*scale+.01);c.clip();c.drawImage(img,x0,y0,x1-x0,y1-y0,dx,dy,(x1-x0)*scale,(y1-y0)*scale);c.restore();}
 prepared={sheet,cell,rows};preparedArt.set(img,prepared);return prepared;}
atlasTo=function(target,img,n,columns,x,y,size){const art=prepareAtlas(img,columns);if(!art||n<0||n>=columns*art.rows)return;target.save();target.imageSmoothingEnabled=true;target.imageSmoothingQuality='high';target.drawImage(art.sheet,n%columns*art.cell,Math.floor(n/columns)*art.cell,art.cell,art.cell,x-size/2,y-size*.72,size,size);target.restore();};
drawSprite=function(n,x,y,size){if(spriteReady)atlasTo(ctx,sprite,n,4,x,y,size);};drawCivilSprite=function(n,x,y,size){if(civilSpriteReady)atlasTo(ctx,civilSprite,n,2,x,y,size);};drawEconomySprite=function(n,x,y,size){if(economySpriteReady)atlasTo(ctx,economySprite,n,4,x,y,size);};
const ancientAssetIndex={stego:0,allosaur:1,triceratops:2,raptor:3,mammoth:4,saber:5};
const fallbackAncientPixels=paintAncientPixels;
paintAncientPixels=function(target,species,x,y,pixel){if(!ancientSpriteReady){fallbackAncientPixels(target,species,x,y,pixel);return;}const art=prepareAtlas(ancientSprite,4),n=ancientAssetIndex[species];if(n===undefined||!art)return;const width=20*pixel;target.save();target.imageSmoothingEnabled=true;target.drawImage(art.sheet,n%4*64,Math.floor(n/4)*64,64,64,x,y-6*pixel,width,width);target.restore();};
const fallbackBiomeArt=paintBiomeObject;
paintBiomeObject=function(target,x,y,t){if(![0,1].includes(t.obj))return false;const biome=biomeAt(x,y);if(ancientSpriteReady&&((biome==='jungle'&&geology.current!=='holocene')||biome==='desert')){atlasTo(target,ancientSprite,biome==='desert'?7:6,4,x+.5,y+.65,biome==='desert'?1.75:2.25);return true;}if(spriteReady){atlasTo(target,sprite,['taiga','tundra'].includes(biome)?1:t.obj,4,x+.5,y+.65,2.25);return true;}return fallbackBiomeArt(target,x,y,t);};
mapDirty=true;
const oldArtIcon=typeof makeControlIcon==='function'?makeControlIcon:null;
if(oldArtIcon){
makeControlIcon=function(key){const span=oldArtIcon(key),data=iconCatalog[key];if(!data)return span;const img={'sprites-v2.png':sprite,'civil-sprites-v2.png':civilSprite,'economy-sprites-v2.png':economySprite}[data.file];if(img?.width){const art=prepareAtlas(img,data.columns);if(art){art.url??=art.sheet.toDataURL();span.style.backgroundImage='url("'+art.url+'")';}}return span;};
}
for(const img of [sprite,civilSprite,economySprite])img.addEventListener?.('load',()=>{mapDirty=true;renderTools();});renderTools();
