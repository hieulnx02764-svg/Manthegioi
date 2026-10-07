'use strict';
// Small native pixel silhouettes fit the existing map without external assets.
const ancientPatterns={stego:[
'...........o........','....o..o..ooo.......','...ooo.ooooooo......','..gggggggggggggg....','gggggggggggggggggg..','.ggggggggggggggggo..','..ggggggggggggggggg.','...gggggggggggg.....','....gg..gg...gg.....','....gg..gg...gg.....'],triceratops:[
'............gg......','...........gggg.h.h.','..gggggggggggggghh..','.gggggggggggggggggg.','ggggggggggggggggggk.','.ggggggggggggggggg..','..ggggggggggggg.....','...gg...gg..gg......','...gg...gg..gg......'],mammoth:[
'..............ggg...','.....ggggggggggggg..','...ggggggggggggggog.','..gggggggggggggggggg','.gggggggggggggggg.gg','.gggggggggggggggg.gg','..gggggggggggggg.hhg','...gggggggggggg.hhhg','...ggg..ggg..gg.h..g','...ggg..ggg..gg....g'],raptor:[
'..............gggg..','.............gggggo.','............gggggggg','...........gggggg...','........ggggggg.....','gggggggggggggg.hh...','..gggggggggggg......','.....ggggggg........','........gg.gg.......','.......gg...gg......','......hh.....hh.....'],saber:[
'....................','..............gggg..','..gggggggggggggggog.','.ggggggggggggggggggg','ggggggggggggggggg.hh','..gggggggggggggg..hh','...gg..gg...ggg.....','...gg..gg...ggg.....','...hh..hh...hhh.....']};
const drawOrdinaryCreature=drawCreature;
function paintAncientPixels(target,species,x,y,pixel){const def=ancientDefs[species],pattern=ancientPatterns[species==='allosaur'?'raptor':species];if(!def||!pattern)return;const palette={g:def.color,o:'#263b39',h:'#f4e8ca',k:'#44636a'};for(let row=0;row<pattern.length;row++)for(let col=0;col<pattern[row].length;col++){const key=pattern[row][col];if(key==='.')continue;target.fillStyle=palette[key];target.fillRect(x+col*pixel,y+row*pixel,pixel+.002,pixel+.002);}}
drawCreature=function(e,bob){if(!e.species){drawOrdinaryCreature(e,bob);return;}ctx.save();ctx.translate(e.x,e.y+bob);ctx.scale(motionFor(e).facing||1,1);const pixel=e.species==='mammoth'?.17:e.species==='stego'||e.species==='triceratops'?.15:.12;paintAncientPixels(ctx,e.species,-10*pixel,-9*pixel,pixel);ctx.restore();};
