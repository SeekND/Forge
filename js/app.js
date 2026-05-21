/* ═══════════════════════════════════════════════
   Forge Crafting Calculator — app.js v10.3
   Patch 4.7: Unlock System + Obtainable Only
   ═══════════════════════════════════════════════ */

// LZ-string (v1.4.4) — MIT licensed, (c) 2013 Pieroxy. Inlined for offline use.
// Only compressToEncodedURIComponent / decompressFromEncodedURIComponent used.
var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},_compress:function(o,n,e){if(null==o)return"";var t,i,s,u={},c={},a="",p="",f="",l=2,h=3,d=2,m=[],v=0,g=0;for(s=0;s<o.length;s+=1)if(a=o.charAt(s),Object.prototype.hasOwnProperty.call(u,a)||(u[a]=h++,c[a]=!0),p=f+a,Object.prototype.hasOwnProperty.call(u,p))f=p;else{if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(t=0;t<d;t++)v<<=1,g==n-1?(g=0,m.push(e(v)),v=0):g++;for(i=f.charCodeAt(0),t=0;t<8;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1}else{for(i=1,t=0;t<d;t++)v=v<<1|i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i=0;for(i=f.charCodeAt(0),t=0;t<16;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[f]}else for(i=u[f],t=0;t<d;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1;0==--l&&(l=Math.pow(2,d),d++),u[p]=h++,f=String(a)}if(""!==f){if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(t=0;t<d;t++)v<<=1,g==n-1?(g=0,m.push(e(v)),v=0):g++;for(i=f.charCodeAt(0),t=0;t<8;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1}else{for(i=1,t=0;t<d;t++)v=v<<1|i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i=0;for(i=f.charCodeAt(0),t=0;t<16;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[f]}else for(i=u[f],t=0;t<d;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(i=2,t=0;t<d;t++)v=v<<1|1&i,g==n-1?(g=0,m.push(e(v)),v=0):g++,i>>=1;for(;;){if(v<<=1,g==n-1){m.push(e(v));break}g++}return m.join("")},_decompress:function(o,n,e){var t,i,s,u,c,a,p,f=[],l=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)f[t]=t;for(s=0,c=Math.pow(2,2),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;switch(s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;p=r(s);break;case 2:return""}for(f[3]=p,i=p,v.push(p);;){if(g.index>o)return"";for(s=0,c=Math.pow(2,d),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;switch(p=s){case 0:for(s=0,c=Math.pow(2,8),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;f[h++]=r(s),p=h-1,l--;break;case 1:for(s=0,c=Math.pow(2,16),a=1;a!=c;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*a,a<<=1;f[h++]=r(s),p=h-1,l--;break;case 2:return v.join("")}if(0==l&&(l=Math.pow(2,d),d++),f[p])m=f[p];else{if(p!==h)return null;m=i+i.charAt(0)}v.push(m),f[h++]=i+m.charAt(0),i=m,0==--l&&(l=Math.pow(2,d),d++)}}};return i}();

let DATA=null, currentTab='home', bpCategory='armor';
let filters={weight:[],role:[],piece:[],wtype:[],dmg:[],wkind:[],shipwtype:[],shipdmg:[],shipwsize:[],comptype:[],shipcsize:[],shipcclass:[],shipcgrade:[],owners:[],unlock:'all'};
let invFilters={status:'all',type:[],weight:[]};

// Inventory: {materialName: [{qty (in cscu), quality}]}
let inventory = {};
// Item inventory (discrete items like gems): {itemName: quantity}
let itemInventory = {};
// Orders: [{id, name, author, items:[{type,key,qty,crafted,deducted, slotQ:{slotName:quality}}]}]
let orders=[], activeOrderId=null;
let plannerSelections={}, savedSets=[], materialUsage={};
let unitMode='cscu';
let oreMode='all'; // 'all' or 'remaining'
let woSelected=new Set();

// Unlocked blueprints (localStorage persisted)
// Key format: "type|name" e.g. "piece|Field Recon Legs"
let unlockedBlueprints = new Set();

// Wishlist — blueprints the user intends to acquire. Same key format.
let wantedBlueprints = new Set();

// Peer-to-peer attribution (4.8.1): other players' names attached to bp keys.
// otherOwners: { "type|name": [playerName, ...] }
// ownerTimestamps: { playerName: unixSecondsOfLatestImport }
// myName is read from adminConfig.playerName.
let otherOwners = {};
let ownerTimestamps = {};

// Canonical item ordering for compact share URLs. Built once at init() time
// from the loaded DATA. Every player loading the same crafting_data.json
// gets the same indices, so a share URL is just `i1,i2,i3,...` in base36.
let ITEM_INDEX = [];                 // [{type, key}, ...]
let KEY_TO_INDEX = new Map();        // 'type|name' -> position in ITEM_INDEX

// Default unlocked blueprints — built dynamically from meta.default_blueprints
// after data loads. Populated by buildDefaultUnlocked().
let DEFAULT_UNLOCKED = [];

// Admin-configurable settings (loaded from localStorage)
let adminConfig = {
  disassembleQuality: 500,  // Quality from disassembling items
  defaultMinQuality: 500,   // Fallback if recipe doesn't specify min_quality
  // Quality tiers (Grade C / B / A) — boundaries must be contiguous
  gradeCLow: 500,    // Grade C: Standard quality (easy to obtain)
  gradeCHigh: 700,
  gradeBLow: 700,    // Grade B: Good quality (some effort)
  gradeBHigh: 850,
  gradeALow: 850,    // Grade A: Premium quality (rare, vault-worthy)
  gradeAHigh: 1000,
  vaultThreshold: 850, // Minimum quality to track in vault inventory
  playerName: '',     // 4.8.1: display name for peer-to-peer sharing
};

// Grade helpers
function getGrade(q){
  if(q>=adminConfig.gradeALow)return {name:'Grade A',color:'#22c55e',cls:'grade-a'};
  if(q>=adminConfig.gradeBLow)return {name:'Grade B',color:'#60a5fa',cls:'grade-b'};
  if(q>=adminConfig.gradeCLow)return {name:'Grade C',color:'#facc15',cls:'grade-c'};
  return {name:'Below Min',color:'#ef4444',cls:'grade-x'};
}
function gradeLabel(q){return getGrade(q).name;}
function gradeRange(q){
  if(q>=adminConfig.gradeALow)return `Q${adminConfig.gradeALow}-${adminConfig.gradeAHigh}`;
  if(q>=adminConfig.gradeBLow)return `Q${adminConfig.gradeBLow}-${adminConfig.gradeBHigh}`;
  if(q>=adminConfig.gradeCLow)return `Q${adminConfig.gradeCLow}-${adminConfig.gradeCHigh}`;
  return `Below Q${adminConfig.gradeCLow}`;
}

// Shared quality picker — used by toggleWOItem, addToRequest, importWOFromHash, addPlannerToWO
function pickQualityForSlot(mat, requested){
  const batches=getBatches(mat).filter(b=>b.qty>0).sort((a,b)=>b.quality-a.quality);
  if(!batches.length)return requested;
  if(requested>=adminConfig.gradeALow){
    // Grade A request — pick best batch in Grade A range
    const match=batches.find(b=>b.quality>=adminConfig.gradeALow&&b.quality<=adminConfig.gradeAHigh);
    return match?match.quality:requested;
  }else if(requested>=adminConfig.gradeBLow){
    // Grade B request — pick best batch in Grade B range
    const match=batches.find(b=>b.quality>=adminConfig.gradeBLow&&b.quality<=adminConfig.gradeBHigh);
    return match?match.quality:requested;
  }else if(requested<=adminConfig.defaultMinQuality){
    // Grade C request — pick best batch in Grade C range, fallback to lowest above requested
    const inZone=batches.find(b=>b.quality>=adminConfig.gradeCLow&&b.quality<=adminConfig.gradeCHigh);
    if(inZone)return inZone.quality;
    const above=batches.filter(b=>b.quality>=requested).sort((a,b)=>a.quality-b.quality);
    return above.length?above[0].quality:requested;
  }
  return requested;
}

const SLOT_STATS={
  'Stock':'Recoil Control','Barrel':'Rate of Fire','Lenses':'Weapon Impact','Frame':'Structural Integrity',
  'Grip':'Handling','Cabling':'Power Efficiency','Conduit':'Power Transfer','Wiring':'Signal Integrity',
  'Armored Carapace':'Armor Protection','Insulative Liner':'Temperature Range','Protective Sheathing':'Damage Resistance',
  'Plating':'Impact Resistance','Shell':'Outer Durability','Casing':'Component Protection',
  'Segment Paneling':'Coverage','Suit Underlay':'Base Protection',
  'Filter':'Environmental Filtering','Power Regulator':'Power Stability','Stabilizer':'Weapon Stability',
  'Precision Parts':'Accuracy',
};

// Mining type labels for item cost chips (4.7)
const MINING_LABELS={hand:'Hand',roc:'ROC',ship:'Ship',fps_mission:'Mission',unknown:'?'};

const ROLE_LABELS={combat:'Combat',cosmonaut:'Cosmonaut',engineer:'Engineer',environment:'Environment',salvager:'Salvager',stealth:'Stealth'};
const WTYPE_LABELS={lmg:'LMG',pistol:'Pistol',rifle:'Rifle',shotgun:'Shotgun',smg:'SMG',sniper:'Sniper'};
const SHIP_WTYPE_LABELS={cannon:'Cannon',repeater:'Repeater',gatling:'Gatling',scatter:'Scatter',massdriver:'Mass Driver',weapon:'Other'};
const SHIP_CLASS_LABELS={Mil:'Military',Cmp:'Competition',Sth:'Stealth',Civ:'Civilian',Ind:'Industrial'};
const COMP_LABELS={cooler:'Cooler',powerplant:'Power Plant',shield:'Shield',radar:'Radar',quantumdrive:'Quantum Drive',tractorbeam:'Tractor Beam',mininglaser:'Mining Laser',salvage:'Salvage',refuelling:'Refuelling'};
const PIECE_LABELS={set:'Set',arms:'Arms',core:'Core',helmet:'Helmet',legs:'Legs',backpack:'Backpack',suit:'Suit'};
const WEIGHT_ORDER={light:0,medium:1,heavy:2};

const CHANGELOG=[
  {ver:'1.0.1',date:'2026-03-08',items:['Inventory respects minQuality — only materials at required quality count toward crafting','Admin panel — configure disassemble quality and other settings','Individual armor pieces can be added to work orders','Fixed batch deletion when only one batch exists']},
  {ver:'1.0',date:'2026-03-07',items:['Patch 4.7 — minQuality requirements shown on recipe slots','Item costs — discrete items (gems/ores) shown as quantity × name','Quality requirement badges color-coded by tier']},
  {ver:'0.9',date:'2026-02-22',items:['Batch inventory — multiple qty+quality batches per material','Work Order slot assignment — set quality per slot, auto-assigns best from inventory','Inline have/need display per slot in work orders','Mark Crafted confirms & deducts from specific inventory batches','Slot → stat mapping shown on work order slots']},
  {ver:'0.7',date:'2026-02-22',items:['Selective export — check items in Work Orders to share just those','Global unit toggle (cSCU ↔ SCU) everywhere']},
  {ver:'0.6',date:'2026-02-22',items:['Multiple named work orders — create, switch, share independently','Material Reference shows common uses per material']},
  {ver:'0.5',date:'2026-02-22',items:['Work Orders with quantities, time estimates, shareable links','Landing page with crafting pipeline overview and changelog']},
  {ver:'0.4',date:'2026-02-22',items:['Per-item Mark Crafted with inventory deduction','Inventory badges and dynamic filters']},
  {ver:'0.3',date:'2026-02-22',items:['Fixed Field Recon helmet, environment suits, Stirling classification','Filtered unknown items, separated undersuit helmets']},
  {ver:'0.2',date:'2026-02-22',items:['Multi-select filters, Set Planner with save/load, Inventory tracking']},
  {ver:'0.1',date:'2026-02-22',items:['Initial release — armor sets, weapons, materials, blueprint browser']},
];

// ════════════════════════════════════════════
// WIKI IMAGES (starcitizen.tools)
// ════════════════════════════════════════════
const WIKI_API='https://starcitizen.tools/api.php';
const WIKI_THUMB_SIZE=300;

// Normalize item/material names for mining URLs (strip Gem, (Ore) etc.)
function miningOreName(name){
  return name.replace(/\s*\(Ore\)\s*$/i,'').replace(/\s+Gem\s*$/i,'').toUpperCase();
}
const wikiCache={}; // name -> {thumb:url|null, page:url}
let wikiFetchQueue=new Set();
let wikiFetchTimer=null;

function wikiPageUrl(name){
  return 'https://starcitizen.tools/'+encodeURIComponent(name.replace(/ /g,'_')).replace(/%28/g,'(').replace(/%29/g,')');
}

// Returns placeholder HTML for a wiki thumbnail + link
function wikiThumbHtml(name){
  if(!name)return '';
  const page=wikiPageUrl(name);
  return `<div class="wiki-thumb" data-wiki="${esc(name)}"><a href="${page}" target="_blank" rel="noopener" title="View on Star Citizen Wiki"><img class="wiki-img" alt="" loading="lazy"><span class="wiki-link">Wiki ↗</span></a></div>`;
}

// Returns just the wiki link icon (for inline use in piece rows)
function wikiImgHtml(name){
  if(!name)return '';
  const page=wikiPageUrl(name);
  return `<span class="wiki-piece-thumb" data-wiki="${esc(name)}"><a href="${page}" target="_blank" rel="noopener" title="View on Star Citizen Wiki"><img class="wiki-piece-img" alt="" loading="lazy"></a></span>`;
}

// Queue names for batch fetch
function queueWikiImages(names){
  names.forEach(n=>{if(n&&!wikiCache[n])wikiFetchQueue.add(n);});
  if(wikiFetchTimer)clearTimeout(wikiFetchTimer);
  wikiFetchTimer=setTimeout(flushWikiQueue,50);
}

async function flushWikiQueue(){
  if(!wikiFetchQueue.size)return;
  const batch=[...wikiFetchQueue];wikiFetchQueue.clear();
  // MediaWiki API supports up to 50 titles per request
  for(let i=0;i<batch.length;i+=50){
    const chunk=batch.slice(i,i+50);
    await fetchWikiBatch(chunk);
  }
  applyWikiImages();
}

async function fetchWikiBatch(names){
  const titles=names.map(n=>n.replace(/ /g,'_')).join('|');
  try{
    const url=`${WIKI_API}?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages&format=json&pithumbsize=${WIKI_THUMB_SIZE}&origin=*`;
    const resp=await fetch(url);
    const data=await resp.json();
    // Build a normalized-title -> original-name map
    const normMap={};
    (data.query?.normalized||[]).forEach(n=>{normMap[n.to]=n.from;});
    // Process pages
    const pages=data.query?.pages||{};
    Object.values(pages).forEach(pg=>{
      // Resolve back to original name (may have been normalized)
      let origTitle=pg.title;
      const fromNorm=normMap[pg.title];
      if(fromNorm)origTitle=fromNorm.replace(/_/g,' ');
      else origTitle=pg.title;
      // Find matching name from our batch (case-insensitive match with underscores)
      const match=names.find(n=>n===origTitle||n.replace(/ /g,'_')===origTitle.replace(/ /g,'_'));
      const key=match||origTitle;
      wikiCache[key]={
        thumb:pg.thumbnail?.source||null,
        page:wikiPageUrl(key)
      };
    });
    // Mark missing pages (no result returned)
    names.forEach(n=>{if(!wikiCache[n])wikiCache[n]={thumb:null,page:wikiPageUrl(n)};});
  }catch(e){
    // On error, mark all as no-image so we don't retry
    names.forEach(n=>{if(!wikiCache[n])wikiCache[n]={thumb:null,page:wikiPageUrl(n)};});
  }
}

function applyWikiImages(){
  document.querySelectorAll('[data-wiki]').forEach(el=>{
    const name=el.dataset.wiki;
    const cached=wikiCache[name];
    if(!cached)return;
    const img=el.querySelector('img');
    if(img&&cached.thumb){
      img.src=cached.thumb;
      el.classList.add('loaded');
    }else if(!cached.thumb){
      el.classList.add('no-image');
    }
  });
}

// Scan rendered cards and queue wiki fetches for visible items
function hydrateWikiImages(){
  const els=document.querySelectorAll('[data-wiki]');
  const names=new Set();
  els.forEach(el=>{
    const n=el.dataset.wiki;
    if(n&&!wikiCache[n])names.add(n);
    else if(wikiCache[n])applyWikiSingle(el,n);
  });
  if(names.size)queueWikiImages([...names]);
}

function applyWikiSingle(el,name){
  const cached=wikiCache[name];if(!cached)return;
  const img=el.querySelector('img');
  if(img&&cached.thumb){img.src=cached.thumb;el.classList.add('loaded');}
  else if(!cached.thumb)el.classList.add('no-image');
}

// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════
async function init(){
  try{const r=await fetch('data/crafting_data.json');DATA=await r.json();}
  catch(e){document.getElementById('main').innerHTML='<div style="padding:40px;text-align:center;color:#64748b"><p>Failed to load data</p></div>';return;}
  DATA.armor_sets=DATA.armor_sets.filter(s=>!s.set_name.includes('[Unknown'));
  if(DATA.armor_pieces)DATA.armor_pieces=DATA.armor_pieces.filter(p=>!p.name.includes('[Unknown')&&!p.set_name.includes('[Unknown'));
  DATA.weapons=DATA.weapons.filter(w=>!w.name.includes('[Unknown'));
  DATA.undersuits=DATA.undersuits.filter(u=>!u.name.includes('[Unknown'));
  DATA.flightsuits=DATA.flightsuits.filter(f=>!f.name.includes('[Unknown'));
  DATA.backpacks=DATA.backpacks.filter(b=>!b.name.includes('[Unknown'));
  // Ship items (4.8): default to empty so older data files still load
  DATA.ship_weapons=(DATA.ship_weapons||[]).filter(w=>!w.name.includes('[Unknown'));
  DATA.ship_components=(DATA.ship_components||[]).filter(c=>!c.name.includes('[Unknown')&&!c.name.includes('PLACEHOLDER'));
  const cR=arr=>arr.forEach(item=>{item.pieces?item.pieces.forEach(p=>{p.recipe=p.recipe.filter(r=>!String(r.material||'').includes('[Unknown'));}):item.recipe=(item.recipe||[]).filter(r=>!String(r.material||'').includes('[Unknown'));});
  cR(DATA.armor_sets);cR(DATA.armor_pieces||[]);cR(DATA.weapons);cR(DATA.undersuits);cR(DATA.flightsuits);cR(DATA.backpacks);cR(DATA.ship_weapons);cR(DATA.ship_components);
  DATA.undersuit_helmets=DATA.undersuits.filter(u=>u.piece_type==='helmet');
  DATA.undersuits=DATA.undersuits.filter(u=>u.piece_type!=='helmet');
  DATA.flightsuit_helmets=DATA.flightsuits.filter(f=>f.piece_type==='helmet');
  DATA.flightsuits=DATA.flightsuits.filter(f=>f.piece_type!=='helmet');

  // Filter to obtainable only (unless show_all is set in JSON)
  if(!DATA.meta?.show_all){
    DATA.armor_sets=DATA.armor_sets.filter(s=>s.is_obtainable!==false);
    if(DATA.armor_pieces)DATA.armor_pieces=DATA.armor_pieces.filter(p=>p.is_obtainable!==false);
    DATA.weapons=DATA.weapons.filter(w=>w.is_obtainable!==false);
    DATA.undersuits=DATA.undersuits.filter(u=>u.is_obtainable!==false);
    DATA.flightsuits=DATA.flightsuits.filter(f=>f.is_obtainable!==false);
    DATA.backpacks=DATA.backpacks.filter(b=>b.is_obtainable!==false);
    DATA.undersuit_helmets=(DATA.undersuit_helmets||[]).filter(h=>h.is_obtainable!==false);
    DATA.flightsuit_helmets=(DATA.flightsuit_helmets||[]).filter(h=>h.is_obtainable!==false);
    DATA.ship_weapons=DATA.ship_weapons.filter(w=>w.is_obtainable!==false);
    DATA.ship_components=DATA.ship_components.filter(c=>c.is_obtainable!==false);
  }

  // Build the canonical item index — used by share/import to translate
  // between bp keys and tiny base36 numbers. Must run BEFORE any hash import.
  buildItemIndex();

  buildDefaultUnlocked();
  buildMaterialUsage();loadState();updUnitBtn();

  // Sync set unlocks - if all pieces of a set are unlocked, unlock the set too
  syncSetUnlocks();

  // Peer-share auto-import from URL hash (#bp=...)
  if(window.location.hash.startsWith('#bp=')){
    const payload=window.location.hash.slice(4);
    const r=applySharePayload(payload);
    history.replaceState(null,'',window.location.pathname);
    setTimeout(()=>{
      if(r.ok){
        const warn=r.schemaWarn?' (catalog mismatch — some items may be off)':'';
        showToast(`Imported ${r.count} attributions from ${r.name}${warn}`);
      }else{
        showToast(r.error);
      }
    },200);
  }

  if(window.location.hash.startsWith('#wo=')){
    const hashData=window.location.hash.slice(4);
    // Check for OREREQUEST flag — redirect to mining site with ore list
    if(hashData.includes('~OREREQUEST')||hashData.includes('&OREREQUEST')){
      const cleanHash=hashData.replace(/[~&]OREREQUEST$/,'');
      const oreNames=extractOreNamesFromHash(cleanHash);
      if(oreNames.length){
        window.location.href=`https://seeknd.github.io/Strata/?ores=${oreNames.join(',')}`;
        return; // Redirect — don't load the app
      }
    }
    importWOFromHash(hashData);history.replaceState(null,'',window.location.pathname);currentTab='workorder';
  }

  updateCategoryCounts();

  buildChangelog();buildFilters();buildInventoryInputs();buildInventoryFilters();buildPlannerSlots();buildMaterialsRef();
  if(!orders.length)createNewOrder(true);
  if(!activeOrderId&&orders.length)activeOrderId=orders[0].id;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===currentTab));
  document.querySelectorAll('.tab-content').forEach(s=>s.classList.toggle('active',s.id==='tab-'+currentTab));
  filterBlueprints();if(currentTab==='workorder')renderWO();if(currentTab==='inventory')updateInventoryResults();
  updateWOBadge();renderSavedSets();
}

// Build DEFAULT_UNLOCKED from meta.default_blueprints (filenames -> type|name keys)
function buildDefaultUnlocked(){
  const files=new Set((DATA.meta?.default_blueprints||[]).map(f=>f.toLowerCase()));
  if(!files.size)return;
  // Match filenames to armor pieces
  (DATA.armor_pieces||[]).forEach(p=>{
    if(files.has((p.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('piece|'+p.name);
  });
  // Match filenames to weapons (includes magazines)
  DATA.weapons.forEach(w=>{
    if(files.has((w.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('weapon|'+w.name);
  });
  // Match filenames to backpacks, undersuits, flightsuits
  DATA.backpacks.forEach(b=>{if(files.has((b.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('backpack|'+b.name);});
  DATA.undersuits.forEach(u=>{if(files.has((u.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('undersuit|'+u.name);});
  DATA.flightsuits.forEach(f=>{if(files.has((f.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('flightsuit|'+f.name);});
  (DATA.undersuit_helmets||[]).forEach(h=>{if(files.has((h.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('undersuit|'+h.name);});
  (DATA.flightsuit_helmets||[]).forEach(h=>{if(files.has((h.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('flightsuit|'+h.name);});
  (DATA.ship_weapons||[]).forEach(w=>{if(files.has((w.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('ship_weapon|'+w.name);});
  (DATA.ship_components||[]).forEach(c=>{if(files.has((c.blueprint_file||'').toLowerCase()))DEFAULT_UNLOCKED.push('ship_component|'+c.name);});
}

// Sync set unlocks - if all pieces of a set are unlocked, mark the set as unlocked too
function syncSetUnlocks(){
  DATA.armor_sets.forEach(set=>{
    const allPiecesUnlocked=set.pieces.every(p=>isUnlocked('piece',p.name));
    if(allPiecesUnlocked&&!isUnlocked('set',set.set_name)){
      unlockedBlueprints.add('set|'+set.set_name);
    }
  });
}

function updateCategoryCounts(){
  const armorPieces=DATA.armor_pieces||[];
  const armorUnlocked=DATA.armor_sets.filter(s=>isUnlocked('set',s.set_name)).length;
  const pieceUnlocked=armorPieces.filter(p=>isUnlocked('piece',p.name)).length;
  const bpUnlocked=DATA.backpacks.filter(b=>isUnlocked('backpack',b.name)).length;
  const weaponUnlocked=DATA.weapons.filter(w=>isUnlocked('weapon',w.name)).length;
  
  document.getElementById('subtitle').textContent=`Star Citizen · Patch ${DATA.meta.current_patch} · ${DATA.armor_sets.length} sets · ${DATA.weapons.length} weapons`;
  document.getElementById('cc-armor').innerHTML=`${DATA.armor_sets.length} sets · ${DATA.backpacks.length} bp · ${armorPieces.length} pieces<br><span class="cc-unlocked">${armorUnlocked+pieceUnlocked+bpUnlocked} unlocked</span>`;
  document.getElementById('cc-weapons').innerHTML=`${DATA.weapons.length} weapons<br><span class="cc-unlocked">${weaponUnlocked} unlocked</span>`;
  const st=DATA.undersuits.length+(DATA.undersuit_helmets||[]).length+DATA.flightsuits.length+(DATA.flightsuit_helmets||[]).length;
  const allSuits=[...DATA.undersuits,...(DATA.undersuit_helmets||[]),...DATA.flightsuits,...(DATA.flightsuit_helmets||[])];
  const suitUnlocked=allSuits.filter(s=>{
    const type=DATA.undersuits.includes(s)?'undersuit':(DATA.undersuit_helmets||[]).includes(s)?'undersuit_helmet':DATA.flightsuits.includes(s)?'flightsuit':'flightsuit_helmet';
    return isUnlocked(type,s.name);
  }).length;
  document.getElementById('cc-undersuits').innerHTML=`${st} items<br><span class="cc-unlocked">${suitUnlocked} unlocked</span>`;
  const sw=DATA.ship_weapons||[],sc=DATA.ship_components||[];
  const swUnlocked=sw.filter(w=>isUnlocked('ship_weapon',w.name)).length;
  const scUnlocked=sc.filter(c=>isUnlocked('ship_component',c.name)).length;
  const ccSw=document.getElementById('cc-ship-weapons');if(ccSw)ccSw.innerHTML=`${sw.length} weapons<br><span class="cc-unlocked">${swUnlocked} unlocked</span>`;
  const ccSc=document.getElementById('cc-ship-components');if(ccSc)ccSc.innerHTML=`${sc.length} components<br><span class="cc-unlocked">${scUnlocked} unlocked</span>`;
  const hcBp=document.getElementById('hc-bp');if(hcBp)hcBp.textContent=`${DATA.armor_sets.length} armor sets · ${DATA.weapons.length} weapons · ${st} suits${sw.length||sc.length?` · ${sw.length} ship weapons · ${sc.length} ship components`:''}`;
  
  // Set Planner stat
  const savedSetsData=JSON.parse(localStorage.getItem(LS+'sets')||'[]');
  const hcSets=document.getElementById('hc-sets');if(hcSets)hcSets.textContent=savedSetsData.length?`${savedSetsData.length} saved set${savedSetsData.length>1?'s':''}`:`No saved sets yet`;
  
  // Inventory stat
  const invData=JSON.parse(localStorage.getItem(LS+'inv')||'{}');
  let totalCscu=0;let matsFilled=0;
  Object.values(invData).forEach(entries=>{if(Array.isArray(entries)){entries.forEach(e=>{totalCscu+=e.qty||0;});if(entries.some(e=>e.qty>0))matsFilled++;}});
  const hcInv=document.getElementById('hc-inv');
  if(hcInv)hcInv.textContent=totalCscu>0?`${matsFilled} material${matsFilled>1?'s':''} · ${uFmt(totalCscu)} total`:`No materials tracked yet`;
  
  // Work Orders stat
  const woOrders=JSON.parse(localStorage.getItem(LS+'orders')||'[]');
  let woItemTotal=0;woOrders.forEach(o=>(o.items||[]).forEach(i=>{woItemTotal+=(i.qty||1);}));
  const hcWo=document.getElementById('hc-wo');
  if(hcWo)hcWo.textContent=woOrders.length?`${woOrders.length} order${woOrders.length>1?'s':''} · ${woItemTotal} item${woItemTotal!==1?'s':''} to craft`:`No orders yet — start one`;
  
  // Materials stat
  const matCount=Object.keys(DATA.materials).length;
  const hcMat=document.getElementById('hc-mat');if(hcMat)hcMat.textContent=`${matCount} materials · ${Object.keys(DATA.slot_types||{}).length} crafting slots`;
}

// ════════════════════════════════════════════
// MATERIAL USAGE
// ════════════════════════════════════════════
function buildMaterialUsage(){
  materialUsage={};Object.keys(DATA.materials).forEach(m=>{materialUsage[m]=new Set();});
  const scan=(arr,cat)=>arr.forEach(item=>{const recs=item.pieces?item.pieces.flatMap(p=>p.recipe):(item.recipe||[]);recs.forEach(r=>{if(r.material&&r.amount_cscu>0&&materialUsage[r.material])materialUsage[r.material].add(cat);});});
  scan(DATA.armor_sets,'armor');scan(DATA.weapons,'weapons');
  scan(DATA.undersuits.concat(DATA.undersuit_helmets||[],DATA.flightsuits||[],DATA.flightsuit_helmets||[]),'undersuits');
  scan(DATA.backpacks,'backpacks');
  scan(DATA.ship_weapons||[],'ship_weapons');
  scan(DATA.ship_components||[],'ship_components');
  Object.keys(materialUsage).forEach(m=>{materialUsage[m]=[...materialUsage[m]];});
}

// ════════════════════════════════════════════
// STATE — inventory is now {mat: [{qty, quality}]}
// ════════════════════════════════════════════
const LS='rc9_';
function saveState(){
  try{
    localStorage.setItem(LS+'inv',JSON.stringify(inventory));
    localStorage.setItem(LS+'itemInv',JSON.stringify(itemInventory));
    localStorage.setItem(LS+'orders',JSON.stringify(orders.map(o=>({id:o.id,name:o.name,author:o.author,
      items:o.items.map(w=>({type:w.type,key:w.key,qty:w.qty,crafted:!!w.crafted,deducted:w.deducted||null,slotQ:w.slotQ||{}}))
    }))));
    localStorage.setItem(LS+'activeOrd',activeOrderId||'');
    localStorage.setItem(LS+'sets',JSON.stringify(savedSets));
    localStorage.setItem(LS+'planner',JSON.stringify(plannerSelections));
    localStorage.setItem(LS+'unit',unitMode);
    localStorage.setItem(LS+'unlocked',JSON.stringify([...unlockedBlueprints]));
    localStorage.setItem(LS+'wanted',JSON.stringify([...wantedBlueprints]));
    localStorage.setItem(LS+'otherOwners',JSON.stringify(otherOwners));
    localStorage.setItem(LS+'ownerTs',JSON.stringify(ownerTimestamps));
  }catch(e){}
}
function loadState(){
  try{
    // Load admin config
    const ac=localStorage.getItem(LS+'adminConfig');
    if(ac){const parsed=JSON.parse(ac);Object.assign(adminConfig,parsed);}
    
    const inv=localStorage.getItem(LS+'inv');
    if(inv){
      const parsed=JSON.parse(inv);
      // migrate from old flat format
      if(parsed&&typeof parsed==='object'){
        for(const k of Object.keys(parsed)){
          if(Array.isArray(parsed[k]))inventory[k]=parsed[k];
          else if(typeof parsed[k]==='number'&&parsed[k]>0)inventory[k]=[{qty:parsed[k],quality:500}];
          else inventory[k]=[];
        }
      }
    }
    const ss=localStorage.getItem(LS+'sets');if(ss)savedSets=JSON.parse(ss);
    const ii=localStorage.getItem(LS+'itemInv');if(ii)itemInventory=JSON.parse(ii)||{};
    const pl=localStorage.getItem(LS+'planner');if(pl)plannerSelections=JSON.parse(pl);
    const um=localStorage.getItem(LS+'unit');if(um)unitMode=um;
    const od=localStorage.getItem(LS+'orders');
    if(od){orders=JSON.parse(od).map(o=>({...o,items:o.items.map(w=>({...w,qty:w.qty||1,item:findItem(w.type,w.key),deducted:w.deducted||null,slotQ:w.slotQ||{}})).filter(w=>w.item)}));}
    const ao=localStorage.getItem(LS+'activeOrd');if(ao)activeOrderId=ao;
    
    // Load unlocked blueprints
    const ul=localStorage.getItem(LS+'unlocked');
    if(ul){unlockedBlueprints=new Set(JSON.parse(ul));}
    // Always apply default unlocks
    DEFAULT_UNLOCKED.forEach(k=>unlockedBlueprints.add(k));
    // Load wishlist
    const wl=localStorage.getItem(LS+'wanted');
    if(wl){wantedBlueprints=new Set(JSON.parse(wl));}
    // Load peer attribution
    const oo=localStorage.getItem(LS+'otherOwners');
    if(oo){try{const p=JSON.parse(oo);if(p&&typeof p==='object')otherOwners=p;}catch(e){}}
    const ots=localStorage.getItem(LS+'ownerTs');
    if(ots){try{const p=JSON.parse(ots);if(p&&typeof p==='object')ownerTimestamps=p;}catch(e){}}
  }catch(e){}
}

// Save admin config (called from admin panel)
function saveAdminConfig(){
  try{localStorage.setItem(LS+'adminConfig',JSON.stringify(adminConfig));}catch(e){}
}

// ════════════════════════════════════════════
// INVENTORY HELPERS — batch system
// ════════════════════════════════════════════
function getBatches(mat){if(!inventory[mat])inventory[mat]=[];return inventory[mat];}
function totalQty(mat){return getBatches(mat).reduce((s,b)=>s+b.qty,0);}
function bestQuality(mat){const b=getBatches(mat);if(!b.length)return 0;return Math.max(...b.map(x=>x.quality));}
function availableAtQuality(mat,q){return getBatches(mat).filter(b=>b.quality>=q).reduce((s,b)=>s+b.qty,0);}
function deductFromInventory(mat,cscu,minQ){
  // Deduct cscu amount from batches at >= minQ, prefer lowest quality first to preserve best
  let remaining=cscu;const batches=getBatches(mat).filter(b=>b.quality>=minQ).sort((a,b)=>a.quality-b.quality);
  const deducted=[];
  for(const b of batches){
    if(remaining<=0)break;
    const take=Math.min(b.qty,remaining);
    b.qty=round(b.qty-take);remaining=round(remaining-take);
    deducted.push({quality:b.quality,qty:take});
  }
  // Clean empty batches
  inventory[mat]=getBatches(mat).filter(b=>b.qty>0);
  return deducted;
}
function restoreBatches(mat,deductedArr){
  if(!deductedArr)return;
  deductedArr.forEach(d=>{
    const existing=getBatches(mat).find(b=>b.quality===d.quality);
    if(existing)existing.qty=round(existing.qty+d.qty);
    else getBatches(mat).push({qty:d.qty,quality:d.quality});
  });
  // Sort descending by quality
  inventory[mat]=(inventory[mat]||[]).sort((a,b)=>b.quality-a.quality);
}

// ── Item Inventory (discrete items) ──
function getItemStock(name){return itemInventory[name]||0;}
function setItemStock(name,qty){itemInventory[name]=Math.max(0,Math.round(qty));saveState();}

// ════════════════════════════════════════════
// TABS
// ════════════════════════════════════════════
function switchTab(tab){
  currentTab=tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.querySelectorAll('.tab-content').forEach(s=>s.classList.toggle('active',s.id==='tab-'+tab));
  if(tab==='home')updateCategoryCounts();if(tab==='inventory')updateInventoryResults();if(tab==='workorder')renderWO();if(tab==='blueprints')filterBlueprints();
}

// ════════════════════════════════════════════
// CHANGELOG
// ════════════════════════════════════════════
function buildChangelog(){const el=document.getElementById('cl-entries');if(!el)return;el.innerHTML=CHANGELOG.map(c=>`<div class="cl-entry"><span class="cl-ver">v${c.ver}</span><span class="cl-date">${c.date}</span><div class="cl-body"><ul>${c.items.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>`).join('');}

// ════════════════════════════════════════════
// BLUEPRINTS
// ════════════════════════════════════════════
function setBpCategory(cat){bpCategory=cat;document.querySelectorAll('.cat-btn').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));document.getElementById('armor-filters').style.display=cat==='armor'?'':'none';document.getElementById('weapon-filters').style.display=cat==='weapons'?'':'none';document.getElementById('ship-weapon-filters').style.display=cat==='ship_weapons'?'':'none';document.getElementById('ship-component-filters').style.display=cat==='ship_components'?'':'none';filterBlueprints();}
function buildFilters(){
  const roles=[...new Set(DATA.armor_sets.map(s=>s.role))].sort();
  const wtypes=[...new Set(DATA.weapons.map(w=>w.weapon_type))].sort();
  const shipWtypes=[...new Set((DATA.ship_weapons||[]).map(w=>w.weapon_type))].sort();
  const shipDmg=[...new Set((DATA.ship_weapons||[]).map(w=>w.damage_type).filter(Boolean))].sort();
  const shipWsizes=[...new Set((DATA.ship_weapons||[]).map(w=>w.size).filter(s=>s>0))].sort((a,b)=>a-b);
  const compTypes=[...new Set((DATA.ship_components||[]).map(c=>c.component_type))].sort();
  const compSizes=[...new Set((DATA.ship_components||[]).map(c=>c.size).filter(s=>s>=0&&s!==undefined&&s!==null))].sort((a,b)=>a-b);
  const compClasses=[...new Set((DATA.ship_components||[]).map(c=>c.class_code).filter(Boolean))].sort();
  const compGrades=[...new Set((DATA.ship_components||[]).map(c=>c.grade).filter(Boolean))].sort();
  bldChips('f-weight',['light','medium','heavy'],v=>v.charAt(0).toUpperCase()+v.slice(1),'weight');
  bldChips('f-role',roles,v=>ROLE_LABELS[v]||v,'role');
  bldChips('f-piece',['set','arms','core','helmet','legs','backpack'],v=>PIECE_LABELS[v]||v,'piece');
  bldChips('f-wtype',wtypes,v=>WTYPE_LABELS[v]||v,'wtype');
  bldChips('f-dmg',['ballistic','energy'],v=>v.charAt(0).toUpperCase()+v.slice(1),'dmg');
  bldChips('f-wkind',['gun','ammo'],v=>v==='gun'?'Guns':'Ammo','wkind');
  bldChips('f-shipwtype',shipWtypes,v=>SHIP_WTYPE_LABELS[v]||v,'shipwtype');
  bldChips('f-shipdmg',shipDmg,v=>v.charAt(0).toUpperCase()+v.slice(1),'shipdmg');
  bldChips('f-shipwsize',shipWsizes,v=>'S'+v,'shipwsize');
  bldChips('f-comptype',compTypes,v=>COMP_LABELS[v]||v,'comptype');
  bldChips('f-shipcsize',compSizes,v=>'S'+v,'shipcsize');
  bldChips('f-shipcclass',compClasses,v=>(SHIP_CLASS_LABELS[v]||v)+(' ('+v+')'),'shipcclass');
  bldChips('f-shipcgrade',compGrades,v=>'Grade '+v,'shipcgrade');
  buildUnlockFilter();
  buildOwnerFilter();
}
function buildOwnerFilter(){
  const known=getAllKnownNames();
  const group=document.getElementById('f-owner-group');
  const sep=document.getElementById('f-owner-sep');
  if(!group)return;
  // Hide the whole row when there are no known names yet
  const show=known.length>0;
  group.style.display=show?'':'none';
  if(sep)sep.style.display=show?'':'none';
  if(!show){filters.owners=[];return;}
  const me=getMyName();
  bldChips('f-owner',known,v=>v===me?(esc(v)+' (you)'):esc(v),'owners');
  // Drop stale entries from filters.owners (in case a name disappeared after a reset)
  filters.owners=filters.owners.filter(n=>known.includes(n));
}
function buildUnlockFilter(){
  const el=document.getElementById('f-unlock');if(!el)return;
  const labels={all:'All',unlocked:'Unlocked',locked:'Locked',partial:'In Progress',wanted:'Wishlist'};
  const titles={partial:'Armor sets where you have some but not all blueprints',wanted:'Blueprints you have marked as want-to-get'};
  el.innerHTML=['all','unlocked','locked','partial','wanted'].map(v=>`<button class="fp-chip${filters.unlock===v?' active':''}" data-fk="unlock" data-fv="${v}" onclick="setUnlockFilter('${v}')" title="${titles[v]||''}">${labels[v]}</button>`).join('');
}
function setUnlockFilter(v){filters.unlock=v;buildUnlockFilter();filterBlueprints();}

// ════════════════════════════════════════════
// UNLOCK HELPERS
// ════════════════════════════════════════════
function isUnlocked(type, key){return unlockedBlueprints.has(type+'|'+key);}
function isWanted(type, key){return wantedBlueprints.has(type+'|'+key);}
function toggleWanted(type, key){
  const k=type+'|'+key;
  if(wantedBlueprints.has(k))wantedBlueprints.delete(k);
  else wantedBlueprints.add(k);
  saveState();filterBlueprints();updateCategoryCounts();
}

// ════════════════════════════════════════════
// OWNER ATTRIBUTION (peer-to-peer sharing)
// ════════════════════════════════════════════
// myName: current player's display name (from adminConfig).
// Owners of a BP = (myName if I have it unlocked) + everyone else in otherOwners.
function getMyName(){return (adminConfig.playerName||'').trim();}
function getOwners(type, key){
  const k=type+'|'+key;
  const others=otherOwners[k]||[];
  const me=getMyName();
  if(me && isUnlocked(type,key)){
    // Put me first, dedup
    return [me, ...others.filter(n=>n!==me)];
  }
  return [...others];
}
// Set-level owners: union of owners across all pieces of the set
function getSetOwners(set){
  if(!set || !set.pieces)return [];
  const seen=new Set();
  set.pieces.forEach(p=>getOwners('piece',p.name).forEach(n=>seen.add(n)));
  // Also include set-level explicit attribution
  getOwners('set',set.set_name).forEach(n=>seen.add(n));
  return [...seen];
}
function getAllKnownNames(){
  const names=new Set();
  const me=getMyName();
  if(me && unlockedBlueprints.size>0)names.add(me);
  Object.values(otherOwners).forEach(arr=>arr.forEach(n=>names.add(n)));
  return [...names].sort((a,b)=>a.localeCompare(b));
}

// Tiny stable hash for schema fingerprinting (DJB2 → 4 hex chars).
function hash32(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return ((h>>>0)%65536).toString(16).padStart(4,'0');}

function buildItemIndex(){
  ITEM_INDEX.length=0;
  KEY_TO_INDEX.clear();
  const arrays=[
    ['set',           DATA.armor_sets||[],            'set_name'],
    ['piece',         DATA.armor_pieces||[],          'name'],
    ['backpack',      DATA.backpacks||[],             'name'],
    ['weapon',        DATA.weapons||[],               'name'],
    ['undersuit',     DATA.undersuits||[],            'name'],
    ['undersuit_helmet', DATA.undersuit_helmets||[], 'name'],
    ['flightsuit',    DATA.flightsuits||[],           'name'],
    ['flightsuit_helmet', DATA.flightsuit_helmets||[], 'name'],
    ['ship_weapon',   DATA.ship_weapons||[],          'name'],
    ['ship_component',DATA.ship_components||[],       'name'],
  ];
  arrays.forEach(([type,arr,nf])=>{
    [...arr].sort((a,b)=>(a[nf]||'').localeCompare(b[nf]||''))
      .forEach(item=>{
        const k=item[nf]; if(!k)return;
        ITEM_INDEX.push({type,key:k});
        KEY_TO_INDEX.set(type+'|'+k, ITEM_INDEX.length-1);
      });
  });
}
function schemaHash(){
  return hash32(ITEM_INDEX.map(o=>o.type+'|'+o.key).join('\n'));
}

// Build a share payload (compressed URL-safe blob) of MY unlocked BPs.
// Format (pre-compression): v3|name|tsSec|patch|schemaHash|i1,i2,i3,...  (indices in base36)
function buildSharePayload(){
  const me=getMyName();
  if(!me)return {ok:false,error:'Set your name in Admin first.'};
  const indices=[];
  for(const k of unlockedBlueprints){
    const i=KEY_TO_INDEX.get(k);
    if(i!==undefined)indices.push(i);
  }
  if(!indices.length)return {ok:false,error:'You have no unlocked blueprints to share.'};
  indices.sort((a,b)=>a-b);
  const ts=Math.floor(Date.now()/1000);
  const patch=(DATA?.meta?.current_patch)||'?';
  const hash=schemaHash();
  const raw=`v3|${me.replace(/\|/g,'')}|${ts}|${patch}|${hash}|${indices.map(i=>i.toString(36)).join(',')}`;
  const encoded=LZString.compressToEncodedURIComponent(raw);
  return {ok:true,encoded,rawLen:raw.length,encLen:encoded.length,count:indices.length,name:me,ts};
}

// Decode + apply a share payload (snapshot-replace per name).
function applySharePayload(encoded){
  if(!encoded)return {ok:false,error:'Empty share data.'};
  // Trim common prefixes if user pasted the URL
  encoded=encoded.replace(/^.*[#?]bp=/,'').replace(/^BP1:/,'').trim();
  let raw;
  try{raw=LZString.decompressFromEncodedURIComponent(encoded);}catch(e){return {ok:false,error:'Could not decompress share data.'};}
  if(!raw)return {ok:false,error:'Could not decompress share data.'};
  if(!raw.startsWith('v3|'))return {ok:false,error:'Unsupported share format (expected v3).'};
  const parts=raw.split('|');
  if(parts.length<6)return {ok:false,error:'Malformed share payload.'};
  const [_,name,tsStr,patch,hash,idxStr]=parts;
  const ts=parseInt(tsStr,10)||0;
  if(!name)return {ok:false,error:'Share has no sender name.'};
  if(name===getMyName())return {ok:false,error:"That's your own share."};
  // Reject if we already have a newer share from this name
  if(ownerTimestamps[name] && ownerTimestamps[name]>=ts){
    return {ok:false,error:`You already have a newer share from ${name}.`};
  }
  // Schema check (warn, don't block — different patch may still mostly work)
  const myHash=schemaHash();
  const schemaWarn=hash!==myHash;
  // Parse indices
  const indices=(idxStr||'').split(',').filter(Boolean).map(x=>parseInt(x,36)).filter(n=>Number.isFinite(n));
  const newKeys=[];
  for(const i of indices){
    const item=ITEM_INDEX[i];
    if(item)newKeys.push(item.type+'|'+item.key);
  }
  // Snapshot-replace: wipe this name from all keys, then add to the new set.
  for(const k of Object.keys(otherOwners)){
    const idx=otherOwners[k].indexOf(name);
    if(idx>=0){
      otherOwners[k].splice(idx,1);
      if(otherOwners[k].length===0)delete otherOwners[k];
    }
  }
  for(const k of newKeys){
    if(!otherOwners[k])otherOwners[k]=[];
    if(!otherOwners[k].includes(name))otherOwners[k].push(name);
  }
  ownerTimestamps[name]=ts;
  saveState();
  return {ok:true,name,count:newKeys.length,patch,schemaWarn};
}

// Forget all imported attribution (keep my own state).
function clearAllAttribution(){
  otherOwners={};
  ownerTimestamps={};
  saveState();
  filterBlueprints();
}

// Build a Discord-friendly Markdown report of every owned BP across the
// known network (me + everyone I've imported). One section per category,
// each line is "Item Name: Owner1, Owner2, ...". Only items with ≥1
// owner appear; items with zero attribution are skipped.
function buildOrgReport(){
  const known=getAllKnownNames();
  const patch=DATA?.meta?.current_patch||'?';
  const today=new Date().toISOString().slice(0,10);
  const lines=[
    `**Forge Crafting — Org Inventory** (Patch ${patch} · ${today})`,
    `**Known players (${known.length}):** ${known.join(', ')||'(none)'}`,
    ''
  ];
  // Map each section to its data array + how to render an item line
  const sections=[
    {label:'Armor Sets', items:(DATA.armor_sets||[]),
      render:s=>{
        const owners=getSetOwners(s);
        if(!owners.length)return null;
        return `• ${s.set_name}: ${owners.join(', ')}`;
      }},
    {label:'Backpacks', items:(DATA.backpacks||[]),
      render:b=>{
        const o=getOwners('backpack',b.name);
        if(!o.length)return null;
        return `• ${b.name}: ${o.join(', ')}`;
      }},
    {label:'Weapons', items:(DATA.weapons||[]),
      render:w=>{
        const o=getOwners('weapon',w.name);
        if(!o.length)return null;
        return `• ${w.name}: ${o.join(', ')}`;
      }},
    {label:'Undersuits', items:(DATA.undersuits||[]).concat(DATA.undersuit_helmets||[]),
      render:s=>{
        const t=(DATA.undersuit_helmets||[]).includes(s)?'undersuit_helmet':'undersuit';
        const o=getOwners(t,s.name);
        if(!o.length)return null;
        return `• ${s.name}: ${o.join(', ')}`;
      }},
    {label:'Flightsuits', items:(DATA.flightsuits||[]).concat(DATA.flightsuit_helmets||[]),
      render:s=>{
        const t=(DATA.flightsuit_helmets||[]).includes(s)?'flightsuit_helmet':'flightsuit';
        const o=getOwners(t,s.name);
        if(!o.length)return null;
        return `• ${s.name}: ${o.join(', ')}`;
      }},
    {label:'Ship Weapons', items:(DATA.ship_weapons||[]),
      render:w=>{
        const o=getOwners('ship_weapon',w.name);
        if(!o.length)return null;
        const sz=w.size?` (S${w.size})`:'';
        return `• ${w.name}${sz}: ${o.join(', ')}`;
      }},
    {label:'Ship Components', items:(DATA.ship_components||[]),
      render:c=>{
        const o=getOwners('ship_component',c.name);
        if(!o.length)return null;
        const meta=[];
        if(c.size!==undefined&&c.size!==null)meta.push('S'+c.size);
        if(c.class_code)meta.push(c.class_code+(c.grade?'/'+c.grade:''));
        const tag=meta.length?` (${meta.join(', ')})`:'';
        return `• ${c.name}${tag}: ${o.join(', ')}`;
      }},
  ];
  let totalLines=0;
  sections.forEach(sec=>{
    const sortedItems=[...sec.items].sort((a,b)=>{
      const an=a.set_name||a.name||'';
      const bn=b.set_name||b.name||'';
      return an.localeCompare(bn);
    });
    const ls=sortedItems.map(sec.render).filter(Boolean);
    if(!ls.length)return;
    lines.push(`__**${sec.label}** (${ls.length})__`);
    lines.push(...ls);
    lines.push('');
    totalLines+=ls.length;
  });
  if(totalLines===0){
    lines.push('*No owned blueprints yet. Unlock some or import a friend\'s share.*');
  }
  return lines.join('\n');
}

function copyOrgReport(){
  const text=buildOrgReport();
  navigator.clipboard.writeText(text).then(
    ()=>showToast(`Org report copied (${text.length.toLocaleString()} chars)`),
    ()=>showToast('Clipboard copy failed')
  );
}

// Check if a set is fully unlocked (all its pieces are unlocked)
function isSetFullyUnlocked(setName){
  const set=DATA.armor_sets.find(s=>s.set_name===setName);
  if(!set)return false;
  return set.pieces.every(p=>isUnlocked('piece',p.name));
}

// Get piece names for a set
function getSetPieceNames(setName){
  const set=DATA.armor_sets.find(s=>s.set_name===setName);
  return set?set.pieces.map(p=>p.name):[];
}

// Get set name for a piece (if any)
function getSetForPiece(pieceName){
  const piece=(DATA.armor_pieces||[]).find(p=>p.name===pieceName);
  if(!piece)return null;
  return piece.set_name;
}

function toggleUnlock(type, key, event){
  if(event)event.stopPropagation();
  const k=type+'|'+key;
  const unlocking=!unlockedBlueprints.has(k);
  
  if(type==='set'){
    // Unlocking/locking a set affects all its pieces
    const pieceNames=getSetPieceNames(key);
    if(unlocking){
      unlockedBlueprints.add(k);
      pieceNames.forEach(pn=>unlockedBlueprints.add('piece|'+pn));
    }else{
      unlockedBlueprints.delete(k);
      pieceNames.forEach(pn=>unlockedBlueprints.delete('piece|'+pn));
    }
  }else if(type==='piece'){
    // Unlocking/locking a piece may affect the set
    if(unlocking){
      unlockedBlueprints.add(k);
      // Check if all pieces of the set are now unlocked
      const setName=getSetForPiece(key);
      if(setName&&isSetFullyUnlocked(setName)){
        unlockedBlueprints.add('set|'+setName);
      }
    }else{
      unlockedBlueprints.delete(k);
      // If locking a piece, also lock the set
      const setName=getSetForPiece(key);
      if(setName)unlockedBlueprints.delete('set|'+setName);
    }
  }else{
    // Other types (weapons, backpacks, undersuits, etc)
    if(unlocking)unlockedBlueprints.add(k);
    else unlockedBlueprints.delete(k);
  }

  // Auto-clear wishlist marks when something gets unlocked — once you have
  // the blueprint, the wishlist intent is fulfilled.
  if(unlocking){
    wantedBlueprints.delete(k);
    if(type==='set'){
      getSetPieceNames(key).forEach(pn=>wantedBlueprints.delete('piece|'+pn));
    }else if(type==='piece'){
      // If the parent set is now fully unlocked, drop its wishlist mark too
      const setName=getSetForPiece(key);
      if(setName&&isSetFullyUnlocked(setName))wantedBlueprints.delete('set|'+setName);
    }
  }

  saveState();filterBlueprints();updateCategoryCounts();
}

function passesUnlockFilter(type, key){
  if(filters.unlock==='all')return true;
  if(filters.unlock==='partial'){
    // "In Progress" = sets you've started but not finished (some pieces unlocked, not all).
    // For non-set types we treat partial as "show everything that's part of a partial set"
    // — for plain pieces show pieces that belong to a partial set.
    if(type==='set'){const s=DATA.armor_sets.find(x=>x.set_name===key);return !!s&&setUnlockCount(s).partial;}
    if(type==='piece'){const p=(DATA.armor_pieces||[]).find(x=>x.name===key);if(!p)return false;const s=DATA.armor_sets.find(x=>x.set_name===p.set_name);return !!s&&setUnlockCount(s).partial;}
    // Other types don't have "partial" semantics — don't hide them
    return true;
  }
  if(filters.unlock==='wanted'){
    // Direct hit on this item, OR (for sets) any piece of the set is wanted
    if(isWanted(type,key))return true;
    if(type==='set'){const s=DATA.armor_sets.find(x=>x.set_name===key);return !!s&&s.pieces.some(p=>isWanted('piece',p.name));}
    return false;
  }
  const unlocked=isUnlocked(type,key);
  if(filters.unlock==='unlocked')return unlocked;
  if(filters.unlock==='locked')return !unlocked;
  return true;
}

// Compute unlock state for a set: how many pieces unlocked, partial flag
function setUnlockCount(set){
  const total=set.pieces.length;
  const unlocked=set.pieces.filter(p=>isUnlocked('piece',p.name)).length;
  return {unlocked,total,partial:unlocked>0&&unlocked<total,complete:unlocked===total};
}

// Cross-category Owner filter — passes if no selection OR item has any
// selected owner among its (piece-union for sets) owners.
function passesOwnerFilter(type,key){
  if(!filters.owners.length)return true;
  const owners=type==='set'
    ? getSetOwners((DATA.armor_sets||[]).find(s=>s.set_name===key))
    : getOwners(type,key);
  return filters.owners.some(n=>owners.includes(n));
}

function bldChips(id,vals,lbl,key){document.getElementById(id).innerHTML=vals.map(v=>`<button class="fp-chip" data-fk="${key}" data-fv="${v}" onclick="toggleFilter('${key}','${v}')">${lbl(v)}</button>`).join('');}
function toggleFilter(k,v){const a=filters[k],i=a.indexOf(v);i>=0?a.splice(i,1):a.push(v);document.querySelectorAll(`[data-fk="${k}"]`).forEach(b=>b.classList.toggle('active',filters[k].includes(b.dataset.fv)));updClear();filterBlueprints();}
function clearFilters(p){const keys=p==='armor'?['weight','role','piece']:p==='weapons'?['wtype','dmg','wkind']:p==='ship_weapons'?['shipwtype','shipdmg','shipwsize']:p==='ship_components'?['comptype','shipcsize','shipcclass','shipcgrade']:[];keys.forEach(k=>{filters[k]=[];document.querySelectorAll(`[data-fk="${k}"]`).forEach(b=>b.classList.remove('active'));});updClear();filterBlueprints();}
function updClear(){document.getElementById('armor-clear').style.display=(filters.weight.length+filters.role.length+filters.piece.length)?'':'none';document.getElementById('weapon-clear').style.display=(filters.wtype.length+filters.dmg.length+filters.wkind.length)?'':'none';const swc=document.getElementById('ship-weapon-clear');if(swc)swc.style.display=(filters.shipwtype.length+filters.shipdmg.length+filters.shipwsize.length)?'':'none';const scc=document.getElementById('ship-component-clear');if(scc)scc.style.display=(filters.comptype.length+filters.shipcsize.length+filters.shipcclass.length+filters.shipcgrade.length)?'':'none';}
function fM(a,v){return a.length===0||a.includes(v);}

function filterBlueprints(){
  buildOwnerFilter(); // refresh owner chip list — names can change after imports/unlocks
  const q=(document.getElementById('bp-search').value||'').toLowerCase(),grid=document.getElementById('bp-grid');
  let html='',count=0;
  if(bpCategory==='armor'){
    grid.classList.remove('two-col');
    
    // Parse piece filter selections
    const showSet=filters.piece.length===0||filters.piece.includes('set');
    const showBp=filters.piece.length===0||filters.piece.includes('backpack');
    const pieceTypes=filters.piece.filter(p=>p!=='backpack'&&p!=='set');
    const showPieces=pieceTypes.length>0&&DATA.armor_pieces&&DATA.armor_pieces.length>0;
    
    // Special case for "Unlocked" filter: show sets where all pieces unlocked, plus orphan pieces
    const unlockMode=filters.unlock==='unlocked';
    
    // Collect sets to show
    let setsToShow=[];
    let piecesToShow=[];
    let shownPieceNames=new Set();
    
    if(showSet){
      setsToShow=DATA.armor_sets.filter(s=>{
        if(!fM(filters.weight,s.weight))return false;
        if(!fM(filters.role,s.role))return false;
        if(!passesUnlockFilter('set',s.set_name))return false;
        if(!passesOwnerFilter('set',s.set_name))return false;
        if(q){const itemNames=s.pieces.flatMap(p=>(p.recipe||[]).filter(r=>r.cost_type==='item').map(r=>r.item_name)).join(' ');const h=`${s.set_name} ${s.manufacturer} ${s.weight} ${s.role} ${s.pieces.map(p=>p.name).join(' ')} ${Object.keys(s.material_totals).join(' ')} ${itemNames}`.toLowerCase();if(!h.includes(q))return false;}
        return true;
      });
      // Track which pieces are shown via sets
      setsToShow.forEach(s=>s.pieces.forEach(p=>shownPieceNames.add(p.name)));
    }
    
    if(showPieces){
      // Filter pieces
      piecesToShow=(DATA.armor_pieces||[]).filter(p=>{
        if(!pieceTypes.includes(p.piece_type))return false;
        if(!fM(filters.weight,p.weight))return false;
        if(!fM(filters.role,p.role))return false;
        if(!passesUnlockFilter('piece',p.name))return false;
        if(!passesOwnerFilter('piece',p.name))return false;
        if(q){const h=`${p.name} ${p.set_name} ${p.manufacturer||''} ${p.weight} ${p.role} ${(p.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase();if(!h.includes(q))return false;}
        return true;
      });
    }else if(unlockMode&&showSet){
      // In unlock mode with sets shown, also show orphan unlocked pieces not part of an unlocked set
      piecesToShow=(DATA.armor_pieces||[]).filter(p=>{
        if(shownPieceNames.has(p.name))return false; // Already shown in a set
        if(!isUnlocked('piece',p.name))return false;
        if(!fM(filters.weight,p.weight))return false;
        if(!fM(filters.role,p.role))return false;
        if(q){const h=`${p.name} ${p.set_name} ${p.manufacturer||''} ${p.weight} ${p.role} ${(p.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase();if(!h.includes(q))return false;}
        return true;
      });
    }
    
    // Sort sets: unlocked first, then by weight, then by name
    setsToShow.sort((a,b)=>{
      const ua=isUnlocked('set',a.set_name)?0:1, ub=isUnlocked('set',b.set_name)?0:1;
      if(ua!==ub)return ua-ub;
      return (WEIGHT_ORDER[a.weight]||0)-(WEIGHT_ORDER[b.weight]||0)||a.set_name.localeCompare(b.set_name);
    });
    
    // Sort pieces: unlocked first, then by weight, then by name
    piecesToShow.sort((a,b)=>{
      const ua=isUnlocked('piece',a.name)?0:1, ub=isUnlocked('piece',b.name)?0:1;
      if(ua!==ub)return ua-ub;
      return (WEIGHT_ORDER[a.weight]||0)-(WEIGHT_ORDER[b.weight]||0)||a.name.localeCompare(b.name);
    });
    
    // Render sets
    if(setsToShow.length){
      setsToShow.forEach(s=>{html+=renderSetCard(s);count++;});
    }
    
    // Render pieces (with header if we also showed sets)
    if(piecesToShow.length){
      grid.classList.add('two-col');
      if(setsToShow.length){
        html+=`<div style="grid-column:1/-1;margin-top:16px;padding:8px 0;border-top:1px solid #1e293b;color:#94a3b8;font-size:13px;font-weight:700">INDIVIDUAL PIECES (${piecesToShow.length})</div>`;
      }
      piecesToShow.forEach(p=>{html+=renderPieceCard(p);count++;});
    }
    
    // Backpacks
    if(showBp){
      const bps=DATA.backpacks.filter(b=>{
        if(!fM(filters.weight,b.weight))return false;
        if(!passesUnlockFilter('backpack',b.name))return false;
        if(!passesOwnerFilter('backpack',b.name))return false;
        if(q&&!`${b.name} ${b.manufacturer} ${(b.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase().includes(q))return false;
        return true;
      });
      bps.sort((a,b)=>{
        const ua=isUnlocked('backpack',a.name)?0:1, ub=isUnlocked('backpack',b.name)?0:1;
        return ua-ub||a.name.localeCompare(b.name);
      });
      if(bps.length){html+=`<div style="grid-column:1/-1;margin-top:16px;padding:8px 0;border-top:1px solid #1e293b;color:#94a3b8;font-size:13px;font-weight:700">BACKPACKS (${bps.length})</div>`;bps.forEach(b=>{html+=renderBpCard(b);count++;});}
    }
  }else if(bpCategory==='weapons'){
    grid.classList.add('two-col');
    const weapons=DATA.weapons.filter(w=>{
      if(!fM(filters.wtype,w.weapon_type))return false;
      if(!fM(filters.dmg,w.damage_type))return false;
      if(filters.wkind.length){const isMag=/magazine|battery/i.test(w.name);const kind=isMag?'ammo':'gun';if(!filters.wkind.includes(kind))return false;}
      if(!passesUnlockFilter('weapon',w.name))return false;
      if(!passesOwnerFilter('weapon',w.name))return false;
      if(q&&!`${w.name} ${w.manufacturer} ${w.weapon_type} ${w.damage_type} ${(w.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase().includes(q))return false;
      return true;
    });
    // Sort: unlocked first
    weapons.sort((a,b)=>{
      const ua=isUnlocked('weapon',a.name)?0:1, ub=isUnlocked('weapon',b.name)?0:1;
      return ua-ub||a.name.localeCompare(b.name);
    });
    weapons.forEach(w=>{html+=renderWepCard(w);count++;});
  }else if(bpCategory==='ship_weapons'){
    grid.classList.add('two-col');
    const items=(DATA.ship_weapons||[]).filter(w=>{
      if(!fM(filters.shipwtype,w.weapon_type))return false;
      if(!fM(filters.shipdmg,w.damage_type))return false;
      if(filters.shipwsize.length&&!filters.shipwsize.includes(String(w.size||0)))return false;
      if(!passesUnlockFilter('ship_weapon',w.name))return false;
      if(!passesOwnerFilter('ship_weapon',w.name))return false;
      if(q&&!`${w.name} ${w.manufacturer||''} ${w.weapon_type||''} ${w.damage_type||''} S${w.size||''} ${(w.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase().includes(q))return false;
      return true;
    });
    items.sort((a,b)=>{const ua=isUnlocked('ship_weapon',a.name)?0:1,ub=isUnlocked('ship_weapon',b.name)?0:1;return ua-ub||a.name.localeCompare(b.name);});
    items.forEach(w=>{html+=renderShipWepCard(w);count++;});
  }else if(bpCategory==='ship_components'){
    grid.classList.add('two-col');
    const mkSec=(title,type,items)=>{
      const f=items.filter(c=>{
        if(filters.shipcsize.length&&!filters.shipcsize.includes(String(c.size||0)))return false;
        if(filters.shipcclass.length&&!filters.shipcclass.includes(c.class_code||''))return false;
        if(filters.shipcgrade.length&&!filters.shipcgrade.includes(c.grade||''))return false;
        if(!passesUnlockFilter('ship_component',c.name))return false;
        if(!passesOwnerFilter('ship_component',c.name))return false;
        if(q&&!`${c.name} ${c.manufacturer||''} ${c.component_type||''} ${c.class_code||''} ${c.class_label||''} ${c.grade||''} S${c.size||''} ${(c.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase().includes(q))return false;
        return true;
      });
      if(!f.length)return;
      f.sort((a,b)=>{const ua=isUnlocked('ship_component',a.name)?0:1,ub=isUnlocked('ship_component',b.name)?0:1;return ua-ub||a.name.localeCompare(b.name);});
      html+=`<div style="grid-column:1/-1;color:#f8fafc;font-weight:700;font-size:15px;margin-top:${count?'12':'0'}px">${title} (${f.length})</div>`;
      f.forEach(c=>{html+=renderShipCompCard(c);count++;});
    };
    // Group by component_type so users can browse by category
    const byType={};
    (DATA.ship_components||[]).forEach(c=>{(byType[c.component_type]=byType[c.component_type]||[]).push(c);});
    const showTypes=filters.comptype.length?filters.comptype:Object.keys(byType).sort();
    showTypes.forEach(t=>{if(byType[t])mkSec(COMP_LABELS[t]||t,t,byType[t]);});
  }else{
    grid.classList.add('two-col');
    const mkSec=(title,items,type)=>{
      const f=items.filter(s=>{
        if(!passesUnlockFilter(type,s.name))return false;
        if(!passesOwnerFilter(type,s.name))return false;
        if(q&&!`${s.name} ${s.manufacturer||''} ${(s.recipe||[]).map(r=>r.material||r.item_name||'').join(' ')}`.toLowerCase().includes(q))return false;
        return true;
      });
      if(!f.length)return;
      // Sort: unlocked first
      f.sort((a,b)=>{
        const ua=isUnlocked(type,a.name)?0:1, ub=isUnlocked(type,b.name)?0:1;
        return ua-ub||a.name.localeCompare(b.name);
      });
      html+=`<div style="grid-column:1/-1;color:#f8fafc;font-weight:700;font-size:15px;margin-top:${count?'12':'0'}px">${title} (${f.length})</div>`;
      f.forEach(s=>{html+=renderSuitCard(s,type);count++;});
    };
    mkSec('Undersuits',DATA.undersuits,'undersuit');
    mkSec('Undersuit Helmets',DATA.undersuit_helmets,'undersuit_helmet');
    mkSec('Flightsuits',DATA.flightsuits,'flightsuit');
    mkSec('Flightsuit Helmets',DATA.flightsuit_helmets,'flightsuit_helmet');
  }
  grid.innerHTML=html;document.getElementById('bp-results-info').textContent=`${count} items`;
  hydrateWikiImages();
  updateShareBar();
}

// ════════════════════════════════════════════
// CARD RENDERING
// ════════════════════════════════════════════
// Quality badge for minQuality requirements (4.7)
function qBadge(minQ){if(!minQ||minQ<=0)return '';const qc=qColor(minQ);return `<span class="min-q-badge" style="background:${qc}20;color:${qc};border:1px solid ${qc}40">Q${minQ}+</span>`;}
// Recipe chip - handles resource costs, item costs, and catalysts (4.7)
function recipeChip(r){
  if(r.is_catalyst)return `<span class="chip catalyst">${esc(r.slot)}</span>`;
  if(r.cost_type==='item'&&r.item_name&&r.item_quantity>0){
    const minQ=r.min_quality||adminConfig.defaultMinQuality;
    return `<span class="chip item-cost"><span class="qty">${r.item_quantity}×</span> <span class="item-name">${esc(r.item_name)}</span>${qBadge(minQ)}</span>`;
  }
  if(r.material&&r.amount_cscu>0){
    const minQ=r.min_quality||adminConfig.defaultMinQuality;
    return `<span class="chip"><span class="qty">${uFmt(r.amount_cscu)}</span> ${esc(r.material)}${qBadge(minQ)}</span>`;
  }
  return '';
}
function chip(m,cscu){return m?`<span class="chip"><span class="qty">${uFmt(cscu)}</span> ${esc(m)}</span>`:'';}
function recipeHtml(r){
  const slots=r.filter(x=>(x.material&&x.amount_cscu>0)||(x.cost_type==='item'&&x.item_quantity>0)||x.is_catalyst);
  return `<div style="display:flex;flex-wrap:wrap;gap:3px">${slots.map(x=>recipeChip(x)).join('')}</div>`;
}
function slotStatsHtml(r){
  const slotted=r.filter(x=>x.slot&&((x.material&&x.amount_cscu>0)||(x.cost_type==='item'&&x.item_quantity>0))&&SLOT_STATS[x.slot]);
  if(!slotted.length)return '';
  const seen=new Set();
  return `<div class="bp-slot-stats">${slotted.filter(x=>{const k=(x.material||x.item_name)+x.slot;if(seen.has(k))return false;seen.add(k);return true;}).map(x=>`<span class="bp-slot-stat"><span class="bp-ss-mat">${esc(x.material||x.item_name)}</span><span class="bp-ss-arrow">→</span><span class="bp-ss-stat">${SLOT_STATS[x.slot]}</span></span>`).join('')}</div>`;
}
function ctime(s){if(!s)return '';const m=Math.floor(s/60),sc=s%60;return `<span style="color:#64748b;font-size:11px">${m}m${sc>0?sc+'s':''}</span>`;}
function ctimeFull(s){if(!s)return '0s';const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60;let r='';if(h)r+=h+'h ';if(m)r+=m+'m ';if(sc&&!h)r+=sc+'s';return r.trim()||'0s';}
function wBadge(w){return `<span class="badge badge-${w}">${w}</span>`;}
function rBadge(r){return `<span class="badge badge-role">${ROLE_LABELS[r]||r}</span>`;}

function getActiveOrder(){return orders.find(o=>o.id===activeOrderId)||null;}
function inWO(t,k){const o=getActiveOrder();return o?o.items.some(w=>w.type===t&&w.key===k&&!w.crafted):false;}
function inRequest(t,k){return orders.some(o=>o.isRequest&&o.items.some(w=>w.type===t&&w.key===k));}
function woBtn(t,k){
  const unlocked=isUnlocked(t,k);
  const inOrder=inWO(t,k);
  const inReq=inRequest(t,k);
  const wanted=isWanted(t,k);

  let html='<div class="wo-btn-row">';
  // Request Build button (always available)
  html+=`<button class="btn-request${inReq?' in-req':''}" onclick="event.stopPropagation();addToRequest('${t}','${escAttr(k)}')" title="Request someone to craft this">${inReq?'✓ REQUESTED':'REQUEST BUILD'}</button>`;

  if(unlocked){
    // Add to Work Order button
    html+=`<button class="btn-wo${inOrder?' in-wo':''}" onclick="event.stopPropagation();toggleWOItem('${t}','${escAttr(k)}')">${inOrder?'✓ IN ORDER':'ADD TO ORDER'}</button>`;
    // Re-lock button
    html+=`<button class="btn-relock" onclick="event.stopPropagation();toggleUnlock('${t}','${escAttr(k)}')" title="Re-lock this blueprint">🔒</button>`;
  }else{
    // Unlock button + wishlist toggle
    html+=`<button class="btn-unlock" onclick="event.stopPropagation();toggleUnlock('${t}','${escAttr(k)}')">Unlock</button>`;
    html+=`<button class="btn-want${wanted?' is-wanted':''}" onclick="event.stopPropagation();toggleWanted('${t}','${escAttr(k)}')" title="${wanted?'Remove from wishlist':'Mark as want-to-get'}">${wanted?'★ WANTED':'☆ Want'}</button>`;
  }
  html+='</div>';
  return html;
}
function lockBadge(t,k){
  const unlocked=isUnlocked(t,k);
  if(unlocked)return '<span class="badge-unlocked">✓</span>';
  const wanted=isWanted(t,k);
  const star=wanted?'<span class="badge-wanted" title="On your wishlist">★</span>':'';
  return '<span class="badge-locked">🔒</span>'+star;
}

// Owner chips — shows who owns this BP (you + imported peers).
// `type` is the storage type, e.g. 'set', 'piece', 'weapon', 'ship_component'.
// For sets the union of all piece owners is shown (handled by getSetOwners).
function ownerChips(type,key,max){
  max=max||3;
  let owners;
  if(type==='set'){
    const set=(DATA.armor_sets||[]).find(s=>s.set_name===key);
    owners=set?getSetOwners(set):[];
  }else{
    owners=getOwners(type,key);
  }
  if(!owners.length)return '';
  const me=getMyName();
  const visible=owners.slice(0,max);
  const hidden=owners.length>max?owners.slice(max):[];
  let html='';
  for(const n of visible){
    const isMe=n===me;
    html+=`<span class="owner-chip${isMe?' me':''}" title="${esc(n)}${isMe?' (you)':''}">👤 ${esc(n)}</span>`;
  }
  if(hidden.length){
    html+=`<span class="owner-chip more" title="Also: ${hidden.map(esc).join(', ')}">+${hidden.length}</span>`;
  }
  return html;
}

// Sources info icon with popover
function sourcesIcon(sources){
  if(!sources||!sources.length)return '';
  // Deduplicate (some game data has duplicate entries)
  const seen=new Set();const deduped=[];
  for(const s of sources){
    const key=s.mission+'|'+s.type+'|'+(s.probability||'');
    if(!seen.has(key)){seen.add(key);deduped.push(s);}
  }
  const lines=deduped.map(s=>{
    if(s.type==='DEFAULT')return '<div class="src-line src-default">★ Starter Blueprint</div>';
    const prob=s.probability?`<span class="src-prob">${s.probability}%</span>`:'';
    return `<div class="src-line"><span class="src-mission">${esc(s.mission)}</span>${prob}</div>`;
  }).join('');
  return `<span class="sources-wrap" onclick="event.stopPropagation()"><span class="sources-icon" tabindex="0">ℹ</span><div class="sources-pop">${lines}</div></span>`;
}

// Add to request order — opens modal for quality selection
function addToRequest(t,k){
  let reqOrder=orders.find(o=>o.isRequest);
  if(!reqOrder){
    reqOrder={id:'req_'+Date.now(),name:'My Requests',author:'',items:[],isRequest:true};
    orders.push(reqOrder);
  }
  const exists=reqOrder.items.find(w=>w.type===t&&w.key===k);
  if(exists){
    // Remove if already in request
    reqOrder.items=reqOrder.items.filter(w=>!(w.type===t&&w.key===k));
    saveState();filterBlueprints();updateWOBadge();
    return;
  }
  const item=findItem(t,k);
  if(!item)return;
  
  // Collect all material slots for this item
  const slots=[];
  if(item.pieces){
    item.pieces.forEach(p=>{
      (p.recipe||[]).filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0))).forEach(r=>{
        const mName=r.cost_type==='item'?r.item_name:r.material;
        const amt=r.cost_type==='item'?r.item_quantity+'×':uFmt(r.amount_cscu);
        slots.push({sqKey:p.piece_type+'|'+r.slot, slot:r.slot, material:mName, piece:PIECE_LABELS[p.piece_type]||p.piece_type, amountLabel:amt});
      });
    });
  }else{
    getSlottedRec(item).forEach(r=>{
      const mName=r.cost_type==='item'?r.item_name:r.material;
      const amt=r.cost_type==='item'?r.item_quantity+'×':uFmt(r.amount_cscu);
      slots.push({sqKey:r.slot, slot:r.slot, material:mName, piece:null, amountLabel:amt});
    });
  }
  
  if(!slots.length){
    // No material slots — just add with empty slotQ
    reqOrder.items.push({type:t,key:k,qty:1,crafted:false,deducted:null,slotQ:{},item});
    saveState();filterBlueprints();updateWOBadge();return;
  }
  
  // Show modal
  showRequestModal(t, k, item, slots, reqOrder);
}

function showRequestModal(t, k, item, slots, reqOrder){
  const name=t==='set'?item.set_name:item.name;
  // Group slots by piece for armor sets
  let slotRows='';
  let currentPiece='';
  slots.forEach((s,i)=>{
    if(s.piece&&s.piece!==currentPiece){
      currentPiece=s.piece;
      slotRows+=`<div class="rqm-piece-header">${esc(currentPiece)}</div>`;
    }
    const stat=SLOT_STATS[s.slot]||'';
    slotRows+=`<div class="rqm-slot">
      <div class="rqm-slot-info">
        <span class="rqm-slot-name">${esc(s.slot)}</span>
        <span class="rqm-slot-mat">${esc(s.material)} · ${s.amountLabel}</span>
        ${stat?`<span class="rqm-slot-stat">→ ${stat}</span>`:''}
      </div>
      <select class="rqm-grade-sel" id="rqm-slot-${i}">
        <option value="${adminConfig.gradeALow}" selected>Grade A (Q${adminConfig.gradeALow}-${adminConfig.gradeAHigh})</option>
        <option value="${adminConfig.gradeBLow}">Grade B (Q${adminConfig.gradeBLow}-${adminConfig.gradeBHigh})</option>
        <option value="${adminConfig.gradeCLow}">Grade C (Q${adminConfig.gradeCLow}-${adminConfig.gradeCHigh})</option>
      </select>
    </div>`;
  });
  
  // Set All dropdown
  const setAllHtml=`<div class="rqm-set-all">
    <span class="rqm-set-all-label">Set all to:</span>
    <select class="rqm-grade-sel" onchange="rqmSetAll(this.value)">
      <option value="${adminConfig.gradeALow}">Grade A</option>
      <option value="${adminConfig.gradeBLow}">Grade B</option>
      <option value="${adminConfig.gradeCLow}">Grade C</option>
    </select>
  </div>`;
  
  const modal=document.getElementById('request-modal');
  modal.innerHTML=`<div class="rqm-overlay" onclick="closeRequestModal()"></div>
    <div class="rqm-dialog">
      <div class="rqm-header">
        <h3>Request Build: ${esc(name)}</h3>
        <button class="rqm-close" onclick="closeRequestModal()">×</button>
      </div>
      <div class="rqm-body">
        <p class="rqm-desc">Select quality grade for each material slot. Higher grades take longer to source.</p>
        ${setAllHtml}
        <div class="rqm-slots">${slotRows}</div>
      </div>
      <div class="rqm-footer">
        <button class="btn-secondary" onclick="closeRequestModal()">Cancel</button>
        <button class="btn-primary" onclick="confirmRequestModal()">Add Request</button>
      </div>
    </div>`;
  modal.style.display='flex';
  
  // Store context for confirm
  modal._ctx={t,k,item,slots,reqOrder};
}

function rqmSetAll(val){
  const modal=document.getElementById('request-modal');
  if(!modal._ctx)return;
  modal._ctx.slots.forEach((_,i)=>{
    const sel=document.getElementById('rqm-slot-'+i);
    if(sel)sel.value=val;
  });
}

function confirmRequestModal(){
  const modal=document.getElementById('request-modal');
  const ctx=modal._ctx;if(!ctx)return;
  
  const slotQ={};
  ctx.slots.forEach((s,i)=>{
    const sel=document.getElementById('rqm-slot-'+i);
    slotQ[s.sqKey]=parseInt(sel?.value)||adminConfig.gradeALow;
  });
  
  ctx.reqOrder.items.push({type:ctx.t,key:ctx.k,qty:1,crafted:false,deducted:null,slotQ,item:ctx.item});
  saveState();filterBlueprints();updateWOBadge();
  closeRequestModal();
}

function closeRequestModal(){
  const modal=document.getElementById('request-modal');
  modal.style.display='none';modal.innerHTML='';modal._ctx=null;
}

// ════════════════════════════════════════════
// SHARE / IMPORT MODAL
// ════════════════════════════════════════════
function openShareModal(){
  const modal=document.getElementById('share-modal');
  if(!modal)return;
  const me=getMyName();
  const myCount=unlockedBlueprints.size;
  const known=Object.entries(ownerTimestamps).sort((a,b)=>b[1]-a[1]);
  let nameWarn='';
  let shareSection='';
  if(!me){
    nameWarn=`<div class="missing-warn" style="margin-bottom:12px">Set your <strong>Name</strong> in <a href="admin/admin.html" style="color:var(--accent)">Admin Settings</a> before sharing.</div>`;
    shareSection=`<button class="btn-primary" disabled style="opacity:.5;cursor:not-allowed">Generate share</button>`;
  }else if(myCount===0){
    nameWarn=`<div class="dim" style="margin-bottom:12px">You have no unlocked blueprints to share yet.</div>`;
    shareSection=`<button class="btn-primary" disabled style="opacity:.5;cursor:not-allowed">Generate share</button>`;
  }else{
    shareSection=`<button class="btn-primary" onclick="generateShare()">Generate share for <strong>${esc(me)}</strong> (${myCount} BPs)</button>
      <div id="share-output" style="display:none;margin-top:12px">
        <div style="margin-bottom:8px"><label class="dim" style="font-size:11px;text-transform:uppercase;letter-spacing:.05em">Shareable URL <span id="share-url-len" style="float:right"></span></label>
          <div style="display:flex;gap:6px;margin-top:4px"><input type="text" id="share-url-out" readonly style="flex:1;background:var(--bg-deep);border:1px solid var(--border-light);color:var(--text);padding:8px 10px;border-radius:4px;font-size:11px;font-family:monospace"><button class="btn-secondary" onclick="copyShareField('share-url-out')">Copy URL</button></div>
        </div>
        <div><label class="dim" style="font-size:11px;text-transform:uppercase;letter-spacing:.05em">Or paste text (for Discord etc.)</label>
          <div style="display:flex;gap:6px;margin-top:4px"><input type="text" id="share-text-out" readonly style="flex:1;background:var(--bg-deep);border:1px solid var(--border-light);color:var(--text);padding:8px 10px;border-radius:4px;font-size:11px;font-family:monospace"><button class="btn-secondary" onclick="copyShareField('share-text-out')">Copy Text</button></div>
        </div>
      </div>`;
  }
  const knownList=known.length
    ? `<div class="dim" style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Currently tracking ${known.length} ${known.length===1?'person':'people'}</div>
       <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px">
       ${known.map(([n,ts])=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--bg-deep);border-radius:4px;font-size:12px"><span style="flex:1"><strong>${esc(n)}</strong> <span class="dim">— imported ${new Date(ts*1000).toLocaleDateString()}</span></span><button class="btn-secondary" style="padding:2px 8px;font-size:11px" onclick="forgetOwner('${escAttr(n)}')">Forget</button></div>`).join('')}
       </div>`
    : `<div class="dim" style="margin-bottom:12px">No friends imported yet. Paste a share below to add one.</div>`;
  modal.innerHTML=`
    <div class="rqm-overlay" onclick="closeShareModal()"></div>
    <div class="rqm-dialog" style="max-width:640px">
      <div class="rqm-header"><h3>🔗 Share &amp; Import Blueprints</h3><button class="rqm-close" onclick="closeShareModal()">×</button></div>
      <div class="rqm-body">
        ${nameWarn}
        <div style="margin-bottom:18px">
          <div style="font-weight:700;font-size:14px;color:#f8fafc;margin-bottom:8px">Share my collection</div>
          ${shareSection}
        </div>
        <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
        <div>
          <div style="font-weight:700;font-size:14px;color:#f8fafc;margin-bottom:8px">Import from a friend</div>
          <textarea id="share-import-in" placeholder="Paste a share URL or text block here..." style="width:100%;min-height:60px;background:var(--bg-deep);border:1px solid var(--border-light);color:var(--text);padding:8px 10px;border-radius:4px;font-size:11px;font-family:monospace;resize:vertical"></textarea>
          <div style="margin-top:8px"><button class="btn-primary" onclick="doApplyImport()">Apply Import</button></div>
        </div>
        <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
        <div style="margin-bottom:18px">
          <div style="font-weight:700;font-size:14px;color:#f8fafc;margin-bottom:8px">Org Report</div>
          <p class="dim" style="font-size:12px;margin-bottom:8px">Discord-friendly Markdown report listing every owned blueprint across everyone you've imported (plus your own unlocks). Use this to share an org-wide inventory in a channel.</p>
          <button class="btn-secondary" onclick="copyOrgReport()">📋 Copy Org Report</button>
        </div>
        <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
        ${knownList}
        ${known.length?'<button class="btn-secondary" onclick="if(confirm(\'Forget all imported attributions? Your own unlocks are not affected.\'))doClearAllAttribution()">Forget All Imports</button>':''}
      </div>
    </div>`;
  modal.style.display='flex';
}
function closeShareModal(){
  const modal=document.getElementById('share-modal');
  if(!modal)return;
  modal.style.display='none';modal.innerHTML='';
}
function generateShare(){
  const r=buildSharePayload();
  if(!r.ok){showToast(r.error);return;}
  const url=window.location.origin+window.location.pathname+'#bp='+r.encoded;
  const txt='BP1:'+r.encoded;
  document.getElementById('share-output').style.display='block';
  document.getElementById('share-url-out').value=url;
  document.getElementById('share-text-out').value=txt;
  document.getElementById('share-url-len').textContent=url.length+' chars'+(url.length>6000?' (large — text fallback recommended)':'');
}
function copyShareField(id){
  const el=document.getElementById(id);if(!el)return;
  el.select();
  navigator.clipboard.writeText(el.value).then(()=>showToast('Copied'));
}
function doApplyImport(){
  const v=(document.getElementById('share-import-in')?.value||'').trim();
  if(!v){showToast('Paste a share first');return;}
  const r=applySharePayload(v);
  if(!r.ok){showToast(r.error);return;}
  const warn=r.schemaWarn?' (catalog mismatch — some items may be off)':'';
  showToast(`Imported ${r.count} attributions from ${r.name}${warn}`);
  filterBlueprints();
  // Re-render the modal to show the new entry
  openShareModal();
}
function forgetOwner(name){
  if(!confirm(`Forget all blueprints attributed to ${name}?`))return;
  for(const k of Object.keys(otherOwners)){
    const idx=otherOwners[k].indexOf(name);
    if(idx>=0){
      otherOwners[k].splice(idx,1);
      if(otherOwners[k].length===0)delete otherOwners[k];
    }
  }
  delete ownerTimestamps[name];
  saveState();
  filterBlueprints();
  openShareModal();
  showToast(`Forgot ${name}'s attribution`);
}
function doClearAllAttribution(){
  clearAllAttribution();
  openShareModal();
  showToast('Cleared all imported attributions');
}

function renderSetCard(set){
  const id='s-'+set.set_name.replace(/[^a-z0-9]/gi,'_');
  const mats=Object.entries(set.material_totals).map(([m,a])=>chip(m,a)).join('');
  const compat=DATA.backpacks.filter(b=>b.weight===set.weight);
  // Per-piece unlock annotation
  const unlockState=setUnlockCount(set);
  let pcs=set.pieces.map(p=>{
    const pUnlocked=isUnlocked('piece',p.name);
    const rowCls='piece-row'+(pUnlocked?' piece-row-unlocked':' piece-row-locked');
    const pIcon=pUnlocked?'<span class="piece-lock unlocked" title="Blueprint unlocked">✓</span>':'<span class="piece-lock locked" title="Blueprint not yet unlocked">🔒</span>';
    return `<div class="${rowCls}">${wikiImgHtml(p.name)}<div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:6px">${pIcon}<span class="piece-type">${p.piece_type}</span><span class="piece-name">${esc(p.name)}</span>${sourcesIcon(p.sources)}</div><div class="piece-recipe">${recipeHtml(p.recipe)}</div>${slotStatsHtml(p.recipe)}</div><div class="piece-stats"><div class="cscu">${uFmt(p.total_cscu)}</div><div class="time">${ctime(p.craft_time_seconds)}</div></div></div>`;
  }).join('');
  let bpP='';
  if(compat.length&&!set.is_environment_suit)bpP=`<div class="bp-picker"><div class="bp-picker-label">+ ${set.weight.toUpperCase()} BACKPACK</div><div class="bp-picker-btns">${compat.map(b=>`<button class="bp-pick-btn" onclick="event.stopPropagation()">${esc(b.name)} (${uFmt(b.total_cscu)})</button>`).join('')}</div></div>`;
  const miss=!set.complete?`<div class="missing-warn">Missing: ${set.missing.join(', ')}</div>`:'';
  // Missing-pieces summary (only when set is partially unlocked)
  let missingBp='';
  if(unlockState.partial){
    const lockedPieces=set.pieces.filter(p=>!isUnlocked('piece',p.name));
    missingBp=`<div class="missing-bp">Need ${lockedPieces.length} more blueprint${lockedPieces.length>1?'s':''}: ${lockedPieces.map(p=>`<span class="missing-bp-name">${PIECE_LABELS[p.piece_type]||p.piece_type}</span>`).join(', ')}</div>`;
  }
  const locked=!isUnlocked('set',set.set_name);
  // Progress counter: shown when partial (some pieces unlocked but not all)
  const progBadge=unlockState.partial?`<span class="badge-progress" title="${unlockState.unlocked} of ${unlockState.total} piece blueprints unlocked">${unlockState.unlocked}/${unlockState.total}</span>`:'';
  return `<div class="item-card${inWO('set',set.set_name)?' in-wo':''}${locked?' locked':''}${unlockState.partial?' partial-set':''}" id="${id}"><div class="card-header" onclick="toggleCard('${id}')"><div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span class="card-title">${esc(set.set_name)}</span>${lockBadge('set',set.set_name)}${progBadge}${sourcesIcon(set.sources)}${wBadge(set.weight)} ${rBadge(set.role)}${set.is_environment_suit?' <span class="badge-env">ENV</span>':''}${!set.complete?' <span class="badge-partial">PARTIAL</span>':''}${ownerChips('set',set.set_name)}</div><div class="card-meta"><span style="color:#64748b">${esc(set.manufacturer)}</span><span style="color:#475569">·</span><span style="color:#94a3b8">${set.piece_count}pc · ${uFmt(set.total_cscu)}</span></div>${missingBp}<div class="card-chips">${mats}</div></div><span class="card-arrow">▼</span></div><div class="card-body">${pcs}${bpP}${miss}${woBtn('set',set.set_name)}</div></div>`;
}
function renderBpCard(bp){
  const locked=!isUnlocked('backpack',bp.name);
  return `<div class="item-card has-wiki-thumb${inWO('backpack',bp.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(bp.name)}<div class="card-content"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(bp.name)}</span>${lockBadge('backpack',bp.name)}${sourcesIcon(bp.sources)}${wBadge(bp.weight)}<span class="badge badge-role">Backpack</span>${ownerChips('backpack',bp.name)}</div><span style="color:#94a3b8;font-size:12px">${uFmt(bp.total_cscu)}</span></div><div style="display:flex;gap:6px;margin-bottom:6px"><span style="color:#64748b;font-size:12px">${esc(bp.manufacturer||'')}</span>${ctime(bp.craft_time_seconds)}</div>${recipeHtml(bp.recipe)}${slotStatsHtml(bp.recipe)}${woBtn('backpack',bp.name)}</div></div>`;
}
function renderWepCard(w){
  const locked=!isUnlocked('weapon',w.name);
  return `<div class="item-card has-wiki-thumb${inWO('weapon',w.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(w.name)}<div class="card-content"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(w.name)}</span>${lockBadge('weapon',w.name)}${sourcesIcon(w.sources)}<span class="badge badge-wtype">${WTYPE_LABELS[w.weapon_type]||w.weapon_type}</span><span class="badge badge-${w.damage_type}">${w.damage_type}</span>${ownerChips('weapon',w.name)}</div><div style="display:flex;gap:6px;margin-bottom:6px"><span style="color:#64748b;font-size:12px">${esc(w.manufacturer)}</span><span style="color:#94a3b8;font-size:12px">${uFmt(w.total_cscu)}</span>${ctime(w.craft_time_seconds)}</div>${recipeHtml(w.recipe)}${slotStatsHtml(w.recipe)}${woBtn('weapon',w.name)}</div></div>`;
}
function renderShipWepCard(w){
  const locked=!isUnlocked('ship_weapon',w.name);
  const sizeBadge=w.size?`<span class="badge badge-size">S${w.size}</span>`:'';
  return `<div class="item-card has-wiki-thumb${inWO('ship_weapon',w.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(w.name)}<div class="card-content"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(w.name)}</span>${lockBadge('ship_weapon',w.name)}${sourcesIcon(w.sources)}${sizeBadge}<span class="badge badge-wtype">${SHIP_WTYPE_LABELS[w.weapon_type]||w.weapon_type}</span><span class="badge badge-${w.damage_type}">${w.damage_type}</span>${ownerChips('ship_weapon',w.name)}</div><div style="display:flex;gap:6px;margin-bottom:6px"><span style="color:#64748b;font-size:12px">${esc(w.manufacturer||'')}</span><span style="color:#94a3b8;font-size:12px">${uFmt(w.total_cscu)}</span>${ctime(w.craft_time_seconds)}</div>${recipeHtml(w.recipe)}${slotStatsHtml(w.recipe)}${woBtn('ship_weapon',w.name)}</div></div>`;
}
function renderShipCompCard(c){
  const locked=!isUnlocked('ship_component',c.name);
  const sizeBadge=c.size?`<span class="badge badge-size">S${c.size}</span>`:'';
  const classBadge=c.class_code?`<span class="badge badge-class badge-class-${c.class_code}" title="${esc(c.class_label||c.class_code)}${c.grade?', Grade '+c.grade:''}">${c.class_code}${c.grade?'/'+c.grade:''}</span>`:'';
  return `<div class="item-card has-wiki-thumb${inWO('ship_component',c.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(c.name)}<div class="card-content"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(c.name)}</span>${lockBadge('ship_component',c.name)}${sourcesIcon(c.sources)}${sizeBadge}${classBadge}<span class="badge badge-component">${COMP_LABELS[c.component_type]||c.component_type}</span>${ownerChips('ship_component',c.name)}</div><div style="display:flex;gap:6px;margin-bottom:6px"><span style="color:#64748b;font-size:12px">${esc(c.manufacturer||'')}</span><span style="color:#94a3b8;font-size:12px">${uFmt(c.total_cscu)}</span>${ctime(c.craft_time_seconds)}</div>${recipeHtml(c.recipe)}${slotStatsHtml(c.recipe)}${woBtn('ship_component',c.name)}</div></div>`;
}
function renderSuitCard(s,type){
  const locked=!isUnlocked(type,s.name);
  return `<div class="item-card has-wiki-thumb${inWO(type,s.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(s.name)}<div class="card-content"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(s.name)}</span>${lockBadge(type,s.name)}${sourcesIcon(s.sources)}${ownerChips(type,s.name)}</div><span style="color:#94a3b8;font-size:12px">${uFmt(s.total_cscu)}</span></div><div style="display:flex;gap:6px;margin-bottom:6px">${s.manufacturer?`<span style="color:#64748b;font-size:12px">${esc(s.manufacturer)}</span>`:''}${ctime(s.craft_time_seconds)}</div>${recipeHtml(s.recipe)}${slotStatsHtml(s.recipe)}${woBtn(type,s.name)}</div></div>`;
}
function renderPieceCard(p){
  const pLabel=PIECE_LABELS[p.piece_type]||p.piece_type;
  const locked=!isUnlocked('piece',p.name);
  return `<div class="item-card has-wiki-thumb${inWO('piece',p.name)?' in-wo':''}${locked?' locked':''}" style="padding:12px 14px">${wikiThumbHtml(p.name)}<div class="card-content"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(p.name)}</span>${lockBadge('piece',p.name)}${sourcesIcon(p.sources)}${wBadge(p.weight)} ${rBadge(p.role)} <span class="badge badge-set">${pLabel}</span>${ownerChips('piece',p.name)}</div><span style="color:#94a3b8;font-size:12px">${uFmt(p.total_cscu)}</span></div><div style="display:flex;gap:6px;margin-bottom:6px"><span style="color:#64748b;font-size:12px">${esc(p.manufacturer||'')}</span><span style="color:#475569;font-size:12px">·</span><span style="color:#64748b;font-size:12px">${esc(p.set_name)}</span>${ctime(p.craft_time_seconds)}</div>${recipeHtml(p.recipe)}${slotStatsHtml(p.recipe)}${woBtn('piece',p.name)}</div></div>`;
}
function toggleCard(id){document.getElementById(id)?.classList.toggle('expanded');}

// ════════════════════════════════════════════
// ITEM LOOKUP
// ════════════════════════════════════════════
function findItem(t,k){
  if(t==='set')return DATA.armor_sets.find(s=>s.set_name===k);
  if(t==='backpack')return DATA.backpacks.find(b=>b.name===k);
  if(t==='weapon')return DATA.weapons.find(w=>w.name===k);
  if(t==='piece')return (DATA.armor_pieces||[]).find(p=>p.name===k);
  if(t==='undersuit')return DATA.undersuits.find(s=>s.name===k);
  if(t==='undersuit_helmet')return(DATA.undersuit_helmets||[]).find(s=>s.name===k);
  if(t==='flightsuit')return DATA.flightsuits.find(s=>s.name===k);
  if(t==='flightsuit_helmet')return(DATA.flightsuit_helmets||[]).find(s=>s.name===k);
  if(t==='ship_weapon')return(DATA.ship_weapons||[]).find(w=>w.name===k);
  if(t==='ship_component')return(DATA.ship_components||[]).find(c=>c.name===k);
  return null;
}
function getRec(item){return item?(item.pieces?item.pieces.flatMap(p=>p.recipe):item.recipe||[]):[];}
function getSlottedRec(item){return getRec(item).filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0)));}
function itemCscu(item){return item?(item.total_cscu||0):0;}
function itemTime(item){if(!item)return 0;if(item.pieces)return item.pieces.reduce((s,p)=>s+(p.craft_time_seconds||0),0);return item.craft_time_seconds||0;}
function itemBadges(type,item){
  if(type==='set')return `${wBadge(item.weight)} ${rBadge(item.role)}`;
  if(type==='piece')return `${wBadge(item.weight)} ${rBadge(item.role)} <span class="badge badge-set">${PIECE_LABELS[item.piece_type]||item.piece_type}</span>`;
  if(type==='backpack')return `${wBadge(item.weight)} <span class="badge badge-role">Backpack</span>`;
  if(type==='weapon')return `<span class="badge badge-wtype">${WTYPE_LABELS[item.weapon_type]||item.weapon_type}</span> <span class="badge badge-${item.damage_type}">${item.damage_type}</span>`;
  if(type==='undersuit')return '<span class="badge badge-set">Undersuit</span>';
  if(type==='undersuit_helmet')return '<span class="badge badge-set">Undersuit Helmet</span>';
  if(type==='flightsuit')return '<span class="badge badge-set">Flightsuit</span>';
  if(type==='flightsuit_helmet')return '<span class="badge badge-set">Flightsuit Helmet</span>';
  if(type==='ship_weapon'){const sz=item.size?`<span class="badge badge-size">S${item.size}</span> `:'';return `${sz}<span class="badge badge-wtype">${SHIP_WTYPE_LABELS[item.weapon_type]||item.weapon_type}</span> <span class="badge badge-${item.damage_type}">${item.damage_type}</span>`;}
  if(type==='ship_component'){const sz=item.size?`<span class="badge badge-size">S${item.size}</span> `:'';const cls=item.class_code?`<span class="badge badge-class badge-class-${item.class_code}">${item.class_code}${item.grade?'/'+item.grade:''}</span> `:'';return `${sz}${cls}<span class="badge badge-component">${COMP_LABELS[item.component_type]||item.component_type}</span>`;}
  return '';
}
function itemName(type,item){return type==='set'?item.set_name:item.name;}

// ════════════════════════════════════════════
// WORK ORDERS
// ════════════════════════════════════════════
function genId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function createNewOrder(silent){
  const name=silent?'My Order':(prompt('Order name:','New Order')||'').trim();if(!name)return;
  const author=silent?'':(prompt('Your name (optional):','')||'').trim();
  const id=genId();orders.push({id,name,author,items:[]});activeOrderId=id;saveState();if(!silent)renderWO();updateWOBadge();
}
function selectOrder(id){activeOrderId=id;saveState();renderWO();filterBlueprints();}
function deleteCurrentOrder(){deleteOrder(activeOrderId);}
function deleteOrder(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  if(!confirm(`Delete order "${o.name}"?`))return;
  orders=orders.filter(x=>x.id!==id);
  if(activeOrderId===id)activeOrderId=orders.length?orders[0].id:null;
  if(!orders.length)createNewOrder(true);
  saveState();renderWO();updateWOBadge();filterBlueprints();
}
function renameOrder(id){
  const o=orders.find(x=>x.id===id);if(!o)return;
  const newName=(prompt('Rename order:',o.name)||'').trim();
  if(newName&&newName!==o.name){o.name=newName;saveState();renderWO();}
}
function moveWOItem(itemIdx,targetOrderId){
  const src=getActiveOrder();if(!src)return;
  const tgt=orders.find(o=>o.id===targetOrderId);if(!tgt||tgt.id===src.id)return;
  const item=src.items[itemIdx];if(!item)return;
  src.items.splice(itemIdx,1);
  tgt.items.push(item);
  saveState();renderWO();updateWOBadge();
}

function toggleWOItem(t,k){
  let o=getActiveOrder();if(!o){createNewOrder(true);o=getActiveOrder();}
  const idx=o.items.findIndex(w=>w.type===t&&w.key===k);
  if(idx>=0)o.items.splice(idx,1);
  else{const item=findItem(t,k);if(item){
    // Build slotQ — crafter picks quality themselves, start unset (0)
    const slotQ={};
    if(item.pieces){item.pieces.forEach(p=>{(p.recipe||[]).filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0))).forEach(r=>{slotQ[p.piece_type+'|'+r.slot]=0;});});}
    else{getSlottedRec(item).forEach(r=>{slotQ[r.slot]=0;});}
    o.items.push({type:t,key:k,qty:1,item,crafted:false,deducted:null,slotQ});
  }}
  saveState();updateWOBadge();filterBlueprints();if(currentTab==='workorder')renderWO();if(currentTab==='inventory')updateInventoryResults();
}

function updateWOBadge(){const total=orders.reduce((s,o)=>s+o.items.filter(w=>!w.crafted).length,0);document.getElementById('wo-badge').textContent=total>0?total:'';}
function setWOQty(i,delta){const o=getActiveOrder();if(!o)return;o.items[i].qty=Math.max(1,o.items[i].qty+delta);saveState();renderWO();}
function setWOSlotQ(i,slot,val){const o=getActiveOrder();if(!o)return;o.items[i].slotQ=o.items[i].slotQ||{};
  // val is prefixed: p1000 (preset) or i700 (inventory batch)
  const num=parseInt(String(val).replace(/^[pi]/,''))||0;
  o.items[i].slotQ[slot]=Math.max(0,Math.min(1000,num));saveState();renderWO();}

function renderWO(){
  woSelected=new Set();
  const tabsEl=document.getElementById('wo-order-tabs');
  tabsEl.innerHTML=orders.map(o=>{
    const cnt=o.items.filter(w=>!w.crafted).length;
    const reqCls=o.isRequest?' request':'';
    const icon=o.isRequest?'📋 ':'';
    return `<div class="wo-otab-wrap${o.id===activeOrderId?' active':''}${reqCls}">
      <button class="wo-otab-main" onclick="selectOrder('${o.id}')">${icon}${esc(o.name)}${cnt?`<span class="wo-otab-count">${cnt}</span>`:''}</button>
      <button class="wo-otab-edit" onclick="event.stopPropagation();renameOrder('${o.id}')" title="Rename">✏️</button>
      <button class="wo-otab-del" onclick="event.stopPropagation();deleteOrder('${o.id}')" title="Delete">🗑️</button>
    </div>`;
  }).join('');

  const o=getActiveOrder(),el=document.getElementById('wo-items'),btns=document.getElementById('wo-btns');
  if(!o||!o.items.length){
    el.innerHTML=`<div class="dim">${o?'This order is empty. Add items from Blueprints, Set Planner, or Inventory.':'Select or create a work order above.'}</div>`;
    btns.style.display='none';document.getElementById('wo-time-panel').style.display='none';document.getElementById('wo-materials').innerHTML='';return;
  }
  btns.style.display='flex';
  updateDiscordBtn();

  const selBar=`<div class="wo-sel-bar"><label class="toggle-label"><input type="checkbox" id="wo-sel-all" onchange="toggleWOSelectAll(this.checked)"> Select for export</label><span class="wo-sel-count" id="wo-sel-count"></span></div>`;

  el.innerHTML=selBar+o.items.map((wo,i)=>{
    const item=wo.item,name=itemName(wo.type,item),badges=itemBadges(wo.type,item);
    const totalCost=uFmt(itemCscu(item)*wo.qty),totalTime=ctimeFull(itemTime(item)*wo.qty);
    const craftedCls=wo.crafted?' crafted':'';
    const craftBtn=wo.crafted
      ?`<button class="btn-craft done" onclick="uncraftWO(${i})">✓ Crafted</button>`
      :`<button class="btn-craft" onclick="craftWO(${i})">Mark Crafted</button>`;
    const chk=wo.crafted?'':`<input type="checkbox" class="wo-sel-chk" data-idx="${i}" onchange="toggleWOSelect(${i},this.checked)">`;

    // Per-piece slot assignment
    let slotsHtml='';
    if(item.pieces){
      // Armor set — group by piece
      slotsHtml='<div class="wo-pieces">'+item.pieces.map(p=>{
        const pSlots=(p.recipe||[]).filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0)));
        if(!pSlots.length)return '';
        const pTime=ctime(p.craft_time_seconds);
        const rows=pSlots.map(r=>{
          const sqKey=p.piece_type+'|'+r.slot;
          const sq=wo.slotQ?.[sqKey]??500;
          const need=r.cost_type==='item'?r.item_quantity*wo.qty:round(r.amount_cscu*wo.qty);
          return renderSlotRow(r,sq,sqKey,need,i);
        }).join('');
        return `<div class="wo-piece"><div class="wo-piece-header"><span class="wo-piece-name">${PIECE_LABELS[p.piece_type]||p.piece_type}</span><span class="wo-piece-meta">${uFmt(p.total_cscu*wo.qty)} · ${pTime}</span></div>${rows}</div>`;
      }).join('')+'</div>';
    }else{
      // Weapon / single item — flat slots
      const slots=getSlottedRec(item);
      if(slots.length)slotsHtml='<div class="wo-slots">'+slots.map(r=>{
        const sq=wo.slotQ?.[r.slot]??500;
        const need=r.cost_type==='item'?r.item_quantity*wo.qty:round(r.amount_cscu*wo.qty);
        return renderSlotRow(r,sq,r.slot,need,i);
      }).join('')+'</div>';
    }

    // Build move dropdown (other orders only)
    const otherOrders=orders.filter(x=>x.id!==o.id);
    const moveSel=otherOrders.length?`<select class="wo-move-sel" onchange="if(this.value)moveWOItem(${i},this.value);this.value=''"><option value="">Move to...</option>${otherOrders.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('')}</select>`:'';

    // Blueprint unlock status
    const unlocked=isUnlocked(wo.type,wo.key);
    const isRequest=o.isRequest;
    let bpStatus;
    if(unlocked){
      bpStatus='<span class="wo-bp-status unlocked" title="Blueprint unlocked">✓ BP</span>';
    }else if(isRequest){
      bpStatus=`<span class="wo-bp-status locked">${sourcesIcon(item.sources||[])}🔒 BP</span>`;
    }else{
      bpStatus=`<span class="wo-bp-status locked clickable" onclick="event.stopPropagation();unlockFromWO('${esc(wo.type)}','${escAttr(wo.key)}')" title="Click to unlock this blueprint">${sourcesIcon(item.sources||[])}🔒 Unlock BP</span>`;
    }

    return `<div class="wo-item${craftedCls}"><div class="wo-item-top"><div class="wo-item-info"><div style="display:flex;align-items:center;gap:6px">${chk}<span class="wo-item-name">${esc(name)}</span>${bpStatus}</div><div class="wo-item-badges">${badges}</div></div><div class="wo-item-right"><div class="wo-item-cost">${totalCost}</div><div class="wo-item-time">${totalTime}</div></div></div>${slotsHtml}<div class="wo-item-bottom"><div class="wo-qty"><button onclick="setWOQty(${i},-1)">−</button><div class="wo-qty-val">${wo.qty}x</div><button onclick="setWOQty(${i},1)">+</button></div><div class="wo-item-actions">${craftBtn}${moveSel}<button class="btn-remove" onclick="removeWOItem(${i})">Remove</button></div></div></div>`;
  }).join('');
  renderWOTotals();renderWOTime();
}

function renderSlotRow(r,sq,sqKey,needCscu,woIdx){
  // Unify: item costs use item_name as the effective material name
  const isItemCost=r.cost_type==='item';
  const matName=isItemCost?r.item_name:r.material;
  const needLabel=isItemCost?needCscu+'×':uFmt(needCscu);

  const haveTotal=totalQty(matName);
  const stat=SLOT_STATS[r.slot]||'';
  const isUnset=sq===0||sq===undefined||sq===null;
  const qc=isUnset?'#475569':qColor(sq);
  const batches=getBatches(matName).filter(b=>b.qty>0).sort((a,b)=>b.quality-a.quality);
  
  // Check if selected quality matches an actual inventory batch
  const matchedBatch=!isUnset&&batches.find(b=>b.quality===sq);
  const isFromInventory=!!matchedBatch;
  
  // Build dropdown: grade presets + inventory batches
  const minQ=r.min_quality||adminConfig.defaultMinQuality;
  const PRESETS=[
    {v:adminConfig.gradeALow,label:`Grade A (Q${adminConfig.gradeALow}-${adminConfig.gradeAHigh})`},
    {v:adminConfig.gradeBLow,label:`Grade B (Q${adminConfig.gradeBLow}-${adminConfig.gradeBHigh})`},
    {v:adminConfig.gradeCLow,label:`Grade C (Q${adminConfig.gradeCLow}-${adminConfig.gradeCHigh})`},
  ];
  let opts='';
  if(isUnset){
    opts+=`<option value="p0" selected>— Select quality —</option>`;
  }
  opts+='<optgroup label="Quality Request">';
  PRESETS.forEach(p=>{opts+=`<option value="p${p.v}"${!isUnset&&!isFromInventory&&sq===p.v?' selected':''}>${p.label}</option>`;});
  opts+='</optgroup>';
  if(batches.length){
    opts+='<optgroup label="Your Inventory">';
    batches.forEach(b=>{opts+=`<option value="i${b.quality}"${isFromInventory&&sq===b.quality?' selected':''}>Q${b.quality} — ${uFmt(b.qty)} available</option>`;});
    opts+='</optgroup>';
  }
  if(!isUnset){
    const presetVals=PRESETS.map(p=>p.v);
    const batchVals=batches.map(b=>b.quality);
    if(!presetVals.includes(sq)&&!batchVals.includes(sq)){
      opts=`<option value="p${sq}" selected>Q${sq} (custom)</option>`+opts;
    }
  }
  
  const itemTag=isItemCost?' <span class="item-tag">item</span>':'';
  const minQBadge=minQ?qBadge(minQ):'';
  const dropdown=`<select class="wo-slot-qsel" onchange="setWOSlotQ(${woIdx},'${esc(sqKey)}',this.value)" style="border-left:3px solid ${qc}">${opts}</select>`;
  const qWarn=!isUnset&&minQ&&sq<minQ?'<span class="wo-slot-qwarn" title="Quality below minimum requirement">⚠️</span>':'';
  const statHtml=stat?`<span class="wo-slot-stat">→ ${stat}</span>`:'';

  if(isUnset){
    return `<div class="wo-slot unset">
      <span class="wo-slot-name">${esc(r.slot)}</span>
      ${minQBadge}
      <span class="wo-slot-mat">${esc(matName)}${itemTag}</span>
      <span class="wo-slot-need">${needLabel}</span>
      <span class="wo-slot-reqtag" style="color:#64748b">Select:</span>
      ${dropdown}
      ${statHtml}
    </div>`;
  }else if(!isFromInventory){
    return `<div class="wo-slot">
      <span class="wo-slot-name">${esc(r.slot)}</span>
      ${minQBadge}
      <span class="wo-slot-mat">${esc(matName)}${itemTag}</span>
      <span class="wo-slot-need">${needLabel}</span>
      <span class="wo-slot-reqtag">Requested:</span>
      ${dropdown}
      ${qWarn}
      ${statHtml}
    </div>`;
  }else{
    const haveAtQ=availableAtQuality(matName,sq);
    const haveOk=haveAtQ>=needCscu;
    const haveLabel=haveOk
      ?`<span class="wo-slot-label ok">Have:</span>`
      :`<span class="wo-slot-label no">Have (need ${isItemCost?(needCscu-haveAtQ)+'×':uFmt(Math.max(0,needCscu-haveAtQ))} more):</span>`;
    let reqTag='';
    const g=getGrade(sq);
    reqTag=`<span class="wo-slot-reqtag ${g.cls}" style="color:${g.color}">${g.name} Requested</span>`;
    return `<div class="wo-slot has-inv">
      <span class="wo-slot-name">${esc(r.slot)}</span>
      ${minQBadge}
      <span class="wo-slot-mat">${esc(matName)}${itemTag}</span>
      <span class="wo-slot-need">${needLabel}</span>
      ${reqTag}
      ${haveLabel}
      ${dropdown}
      ${qWarn}
      ${statHtml}
    </div>`;
  }
}

function renderWOTotals(){
  const o=getActiveOrder();if(!o)return;
  const uncrafted=o.items.filter(w=>!w.crafted),m={},items={};
  uncrafted.forEach(wo=>{getRec(wo.item).forEach(r=>{
    if(r.cost_type==='item'&&r.item_quantity>0){items[r.item_name]=(items[r.item_name]||0)+r.item_quantity*wo.qty;}
    else if(r.material&&r.amount_cscu>0){m[r.material]=(m[r.material]||0)+r.amount_cscu*wo.qty;}
  });});
  let html=Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{
    const have=totalQty(k);
    return `<div style="display:flex;justify-content:space-between;padding:3px 0;gap:8px"><span style="color:#e2e8f0;font-size:13px;flex:1">${k}</span><span style="font-size:12px;color:${have>=v?'#059669':'#64748b'}">${uFmt(have)} inv</span><span style="color:#38bdf8;font-size:13px;font-weight:700">${uFmt(v)}</span></div>`;
  }).join('');
  if(Object.keys(items).length){
    html+=`<div style="margin-top:8px;padding-top:6px;border-top:1px solid #1e293b;color:#94a3b8;font-size:11px;font-weight:600">ITEMS</div>`;
    html+=Object.entries(items).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{
      const have=getItemStock(k);
      return `<div style="display:flex;justify-content:space-between;padding:3px 0;gap:8px"><span style="color:#c4b5fd;font-size:13px;flex:1">${k}</span><span style="font-size:12px;color:${have>=v?'#059669':'#64748b'}">${have}× inv</span><span style="color:#a78bfa;font-size:13px;font-weight:700">${v}×</span></div>`;
    }).join('');
  }
  document.getElementById('wo-materials').innerHTML=html||'<div class="dim">All items crafted!</div>';
}

function renderWOTime(){
  const o=getActiveOrder();if(!o)return;const uncrafted=o.items.filter(w=>!w.crafted);
  let totalSec=0,totalPieces=0;
  uncrafted.forEach(wo=>{
    if(wo.item.pieces){wo.item.pieces.forEach(p=>{totalSec+=(p.craft_time_seconds||0)*wo.qty;totalPieces+=wo.qty;});}
    else{totalSec+=itemTime(wo.item)*wo.qty;totalPieces+=wo.qty;}
  });
  const panel=document.getElementById('wo-time-panel');
  if(totalSec>0){
    // Smart label: count sets vs individual items
    const setCount=uncrafted.filter(w=>w.item.pieces).reduce((s,w)=>s+w.qty,0);
    const indivCount=uncrafted.filter(w=>!w.item.pieces).reduce((s,w)=>s+w.qty,0);
    const parts=[];if(setCount)parts.push(`${setCount} set${setCount>1?'s':''}`);if(indivCount)parts.push(`${indivCount} item${indivCount>1?'s':''}`);
    panel.style.display='';document.getElementById('wo-time').innerHTML=`<div style="font-size:22px;font-weight:800;color:#f8fafc">${ctimeFull(totalSec)}</div><div style="font-size:11px;color:#64748b;margin-top:4px">${totalPieces} pieces · ${parts.join(', ')}</div>`;
  }
  else panel.style.display='none';
}

function craftWO(i){
  const o=getActiveOrder();if(!o)return;const wo=o.items[i];if(!wo||wo.crafted)return;
  const hasInv=Object.keys(inventory).some(k=>totalQty(k)>0);
  if(!hasInv){
    if(!confirm('You have no inventory loaded.\n\nMark as crafted anyway? (No materials will be deducted)\n\nTip: If you\'re just a requester, you can remove this item instead.'))return;
    wo.crafted=true;wo.deducted={};saveState();renderWO();buildInventoryInputs();updateWOBadge();return;
  }
  if(!confirm('Mark as crafted?\n\nThis will deduct the assigned materials from your inventory at the selected quality levels.'))return;
  const deducted={};
  if(wo.item.pieces){
    wo.item.pieces.forEach(p=>{(p.recipe||[]).filter(r=>r.material&&r.slot&&r.amount_cscu>0).forEach(r=>{
      const sqKey=p.piece_type+'|'+r.slot;const sq=wo.slotQ?.[sqKey]??500;
      const d=deductFromInventory(r.material,r.amount_cscu*wo.qty,sq);
      if(d.length)deducted[sqKey+'@'+r.material]=d;
    });});
  }else{
    getSlottedRec(wo.item).forEach(r=>{const sq=wo.slotQ?.[r.slot]??500;
      const d=deductFromInventory(r.material,r.amount_cscu*wo.qty,sq);
      if(d.length)deducted[r.slot+'@'+r.material]=d;
    });
  }
  wo.crafted=true;wo.deducted=deducted;
  saveState();renderWO();buildInventoryInputs();updateWOBadge();
}

function uncraftWO(i){
  const o=getActiveOrder();if(!o)return;const wo=o.items[i];if(!wo||!wo.crafted)return;
  if(wo.deducted){Object.entries(wo.deducted).forEach(([key,arr])=>{const mat=key.split('@').pop();restoreBatches(mat,arr);});}
  wo.crafted=false;wo.deducted=null;saveState();renderWO();buildInventoryInputs();updateWOBadge();
}

function removeWOItem(i){const o=getActiveOrder();if(!o)return;o.items.splice(i,1);saveState();renderWO();updateWOBadge();filterBlueprints();}

function unlockFromWO(type,key){
  toggleUnlock(type,key);
  renderWO();
}

// ── Selection ──
function toggleWOSelect(i,c){if(c)woSelected.add(i);else woSelected.delete(i);updSelCount();}
function toggleWOSelectAll(c){const o=getActiveOrder();if(!o)return;woSelected=new Set();if(c)o.items.forEach((w,i)=>{if(!w.crafted)woSelected.add(i);});document.querySelectorAll('.wo-sel-chk').forEach(ch=>{ch.checked=c;});updSelCount();}
function updSelCount(){const el=document.getElementById('wo-sel-count');if(el)el.textContent=woSelected.size?`${woSelected.size} selected`:'';}
function getExportItems(){const o=getActiveOrder();if(!o)return[];if(woSelected.size)return[...woSelected].map(i=>o.items[i]).filter(w=>w&&!w.crafted);return o.items.filter(w=>!w.crafted);}

// Helper: quality note for clipboard export
function qNote(q){
  if(!q||q===0)return ' (No grade set)';
  return ` (${gradeLabel(q)} · ${gradeRange(q)})`;
}

// ── Export ──
function copyWOText(){
  const o=getActiveOrder();if(!o)return;
  // Prompt for requester/order name
  const defaultName=o.author?`${o.name} — ${o.author}`:o.name;
  const hdr=prompt('Order / Requester name for this request:',defaultName);
  if(hdr===null)return; // Cancelled
  const finalHdr=hdr.trim()||defaultName;
  
  // Update the order name to match
  if(finalHdr!==defaultName){
    // Parse "Name — Author" format
    const dashIdx=finalHdr.indexOf(' — ');
    if(dashIdx>=0){o.name=finalHdr.slice(0,dashIdx);o.author=finalHdr.slice(dashIdx+3);}
    else{o.name=finalHdr;o.author='';}
    saveState();renderWO();
  }
  
  const items=getExportItems(),m={},itemCosts={};
  items.forEach(wo=>{getRec(wo.item).forEach(r=>{
    if(r.cost_type==='item'&&r.item_quantity>0)itemCosts[r.item_name]=(itemCosts[r.item_name]||0)+r.item_quantity*wo.qty;
    else if(r.material&&r.amount_cscu>0)m[r.material]=(m[r.material]||0)+r.amount_cscu*wo.qty;
  });});
  const totalTime=items.reduce((s,wo)=>s+itemTime(wo.item)*wo.qty,0);
  const selNote=woSelected.size?` (${woSelected.size} selected)`:'';
  const lines=[`═══ ${finalHdr}${selNote} ═══`,''];
  items.forEach(wo=>{
    lines.push(`  ${wo.qty}x ${itemName(wo.type,wo.item)} (${uFmt(itemCscu(wo.item)*wo.qty)})`);
    if(wo.item.pieces){
      wo.item.pieces.forEach(p=>{
        const pSlots=(p.recipe||[]).filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0)));
        if(!pSlots.length)return;
        lines.push(`    ${(PIECE_LABELS[p.piece_type]||p.piece_type).toUpperCase()}`);
        pSlots.forEach(r=>{
          const sqKey=p.piece_type+'|'+r.slot;
          const sq=wo.slotQ?.[sqKey]??500;
          if(r.cost_type==='item'){
            lines.push(`      ${r.slot}: ${r.item_quantity*wo.qty}× ${r.item_name}`);
          }else{
            lines.push(`      ${r.slot}: ${uFmt(r.amount_cscu*wo.qty)} ${r.material} @ Q${sq}${qNote(sq)}`);
          }
        });
      });
    }else{
      getSlottedRec(wo.item).forEach(r=>{
        const sq=wo.slotQ?.[r.slot]??500;
        if(r.cost_type==='item'){
          lines.push(`    ${r.slot}: ${r.item_quantity*wo.qty}× ${r.item_name}`);
        }else{
          lines.push(`    ${r.slot}: ${uFmt(r.amount_cscu*wo.qty)} ${r.material} @ Q${sq}${qNote(sq)}`);
        }
      });
    }
  });
  lines.push('','─── Materials ───');
  Object.entries(m).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>{if(v>0)lines.push(`  ${uFmt(v)} ${k}`);});
  if(Object.keys(itemCosts).length){
    lines.push('','─── Items ───');
    Object.entries(itemCosts).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>{if(v>0)lines.push(`  ${v}× ${k}`);});
  }
  lines.push('',`Craft time: ${ctimeFull(totalTime)}`);
  // Append share link
  const enc=encodeWO();
  if(enc){
    const url=window.location.origin+window.location.pathname+'#wo='+enc;
    lines.push('',`Order link: ${url}`);
  }
  navigator.clipboard.writeText(lines.join('\n')).then(()=>showToast('Order copied to clipboard'));
}

function setOreMode(mode){
  oreMode=mode;
  document.querySelectorAll('.ore-mode').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);});
}

function copyOreRequest(){
  const o=getActiveOrder();if(!o)return;const items=getExportItems();
  if(!items.length){showToast('No items in order');return;}
  // Gather materials grouped by material name, then by quality
  // Each entry: {material, cscu, quality, fromInventory, minQuality, isItem}
  const entries=[];
  items.forEach(wo=>{
    const addSlots=(recipe,keyPrefix)=>{
      recipe.filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0))).forEach(r=>{
        const sqKey=keyPrefix?keyPrefix+'|'+r.slot:r.slot;
        const sq=wo.slotQ?.[sqKey]??500;
        const isItem=r.cost_type==='item';
        const matName=isItem?r.item_name:r.material;
        const qty=isItem?r.item_quantity*wo.qty:r.amount_cscu*wo.qty;
        const fromInv=!!getBatches(matName).find(b=>b.quality===sq);
        entries.push({material:matName,cscu:qty,quality:sq,fromInventory:fromInv,minQuality:r.min_quality||0,isItem});
      });
    };
    if(wo.item.pieces){
      wo.item.pieces.forEach(p=>{
        addSlots((p.recipe||[]),p.piece_type);
      });
    }else{
      addSlots(getSlottedRec(wo.item),'');
    }
  });
  if(!entries.length){showToast('No materials in order');return;}
  // Group by material -> quality -> {cscu, fromInventory}
  const grouped={};
  entries.forEach(e=>{
    if(!grouped[e.material])grouped[e.material]={total:0,qualities:{},minQuality:0,isItem:e.isItem};
    grouped[e.material].total+=e.cscu;
    // Track highest min_quality seen for this material
    if(e.minQuality>grouped[e.material].minQuality)grouped[e.material].minQuality=e.minQuality;
    const qk=e.quality+'|'+(e.fromInventory?'inv':'req');
    if(!grouped[e.material].qualities[qk])grouped[e.material].qualities[qk]={cscu:0,quality:e.quality,fromInventory:e.fromInventory};
    grouped[e.material].qualities[qk].cscu+=e.cscu;
  });

  // In 'remaining' mode, subtract inventory from each quality tier
  if(oreMode==='remaining'){
    for(const[mat,info]of Object.entries(grouped)){
      // For each quality tier, subtract what's available at that quality or above
      const qs=Object.values(info.qualities).sort((a,b)=>b.quality-a.quality);
      // Track how much inventory we've already allocated (avoid double-counting)
      let invUsed=0;
      const invTotal=totalQty(mat);
      qs.forEach(q=>{
        const invRemaining=Math.max(0,invTotal-invUsed);
        const deduct=Math.min(q.cscu,invRemaining);
        q.cscu=round(q.cscu-deduct);
        invUsed+=deduct;
      });
      // Recalculate total
      info.total=Object.values(info.qualities).reduce((s,q)=>s+q.cscu,0);
    }
  }

  // Build output (always SCU for miners)
  const isRemaining=oreMode==='remaining';
  const hasInv=Object.keys(inventory).some(k=>totalQty(k)>0);
  const header=isRemaining&&hasInv?'─── Remaining Materials ───':'─── Materials Needed ───';
  const lines=[header];
  const oreNames=[];
  // Helper: describe quality for miners
  const qLabel=(quality,fromInventory,minQ)=>{
    if(!quality||quality===0)return '@ any quality';
    if(fromInventory)return `@ Q${quality} or above`;
    const g=gradeLabel(quality);
    const r=gradeRange(quality);
    return `@ ${g} (${r})`;
  };
  let anyMaterial=false;
  Object.entries(grouped).sort((a,b)=>b[1].total-a[1].total).forEach(([mat,info])=>{
    if(info.total<=0)return; // Skip fully covered materials
    anyMaterial=true;
    oreNames.push(miningOreName(mat));
    const qs=Object.values(info.qualities).filter(q=>q.cscu>0).sort((a,b)=>b.quality-a.quality);
    // Determine effective min quality for this material from recipes
    const matMinQ=info.minQuality||adminConfig.defaultMinQuality;
    const fmtQty=v=>info.isItem?`${v}×`:`${roundScu(v/100)} SCU`;
    if(qs.length===1){
      const q=qs[0];
      lines.push(`  ${fmtQty(info.total)} ${mat} ${qLabel(q.quality,q.fromInventory,matMinQ)}`);
    }else if(qs.length>1){
      lines.push(`  ${fmtQty(info.total)} ${mat}`);
      qs.forEach(q=>{
        lines.push(`    ${fmtQty(q.cscu)} ${qLabel(q.quality,q.fromInventory,matMinQ)}`);
      });
    }
  });
  if(!anyMaterial){showToast('Inventory covers all materials!');return;}
  // Mining site link
  const miningUrl=`https://seeknd.github.io/Strata/?ores=${[...new Set(oreNames)].join(',')}`;
  lines.push('',`Miner link: ${miningUrl}`);
  navigator.clipboard.writeText(lines.join('\n')).then(()=>showToast(isRemaining?'Remaining ore request copied':'Ore request copied to clipboard'));
}

// Extract ore names from a WO hash for OREREQUEST redirect (before full data load)
function extractOreNamesFromHash(hash){
  try{
    hash=decodeURIComponent(hash);
    const parts=hash.split('~');if(parts.length<3)return[];
    const itemStr=parts.slice(2).join('~');
    const oreSet=new Set();
    itemStr.split('|').forEach(p=>{
      const segs=p.split(':');if(segs.length<3)return;
      const tc=segs[0],key=segs[1];
      const type=TYPE_LONG[tc]||tc;const item=findItem(type,key);
      if(!item)return;
      getRec(item).forEach(r=>{
        if(r.material&&r.amount_cscu>0)oreSet.add(miningOreName(r.material));
        if(r.cost_type==='item'&&r.item_quantity>0)oreSet.add(miningOreName(r.item_name));
      });
    });
    return[...oreSet];
  }catch(e){return[];}
}

// ── URL Sharing ──
const TYPE_SHORT={set:'s',backpack:'b',weapon:'w',undersuit:'u',undersuit_helmet:'uh',flightsuit:'f',flightsuit_helmet:'fh',piece:'p',ship_weapon:'sw',ship_component:'sc'};
const TYPE_LONG={s:'set',b:'backpack',w:'weapon',u:'undersuit',uh:'undersuit_helmet',f:'flightsuit',fh:'flightsuit_helmet',p:'piece',sw:'ship_weapon',sc:'ship_component'};

function encodeWO(){
  const o=getActiveOrder();if(!o)return '';const items=getExportItems();
  const encoded=items.map(w=>{const tc=TYPE_SHORT[w.type]||w.type;
    // Include slot qualities: tc:key:qty:slot1=q1,slot2=q2
    const sqs=Object.entries(w.slotQ||{}).map(([s,q])=>`${encodeURIComponent(s)}=${q}`).join(',');
    return `${tc}:${encodeURIComponent(w.key)}:${w.qty}${sqs?':'+sqs:''}`;
  }).join('|');
  return `${encodeURIComponent(o.name)}~${encodeURIComponent(o.author||'')}~${encoded}`;
}

function importWOFromHash(hash){
  try{
    // Decode the hash first — some browsers encode | as %7C
    hash=decodeURIComponent(hash);
    const parts=hash.split('~');if(parts.length<3)return;
    const name=parts[0]||'Shared Order';
    const author=parts[1]||'';
    const itemStr=parts.slice(2).join('~');
    const imported=[];
    itemStr.split('|').forEach(p=>{
      const segs=p.split(':');if(segs.length<3)return;
      const tc=segs[0],key=segs[1],qty=parseInt(segs[2])||1;
      const type=TYPE_LONG[tc]||tc;const item=findItem(type,key);
      if(!item)return;
      // Parse shared slot qualities
      const sharedQ={};
      if(segs[3]){segs[3].split(',').forEach(sq=>{const[s,q]=sq.split('=');if(s&&q)sharedQ[s]=parseInt(q)||1000;});}
      // Auto-assign quality using shared zone-aware picker
      const slotQ={};
      const assignSlot=(sqKey,mat)=>{slotQ[sqKey]=pickQualityForSlot(mat,sharedQ[sqKey]??1000);};
      if(item.pieces){item.pieces.forEach(pp=>{(pp.recipe||[]).filter(rr=>rr.slot&&((rr.material&&rr.amount_cscu>0)||(rr.cost_type==='item'&&rr.item_quantity>0))).forEach(rr=>{const mN=rr.cost_type==='item'?rr.item_name:rr.material;assignSlot(pp.piece_type+'|'+rr.slot,mN);});});}
      else{getSlottedRec(item).forEach(rr=>{const mN=rr.cost_type==='item'?rr.item_name:rr.material;assignSlot(rr.slot,mN);});}
      imported.push({type,key,qty,item,crafted:false,deducted:null,slotQ});
    });
    if(imported.length){const id=genId();orders.push({id,name,author,items:imported});activeOrderId=id;saveState();}
  }catch(e){console.error('Import failed:',e);}
}

// ════════════════════════════════════════════
// DISCORD INTEGRATION
// ════════════════════════════════════════════
function hasDiscordConfig(){
  return !!(adminConfig.discordWebhookId&&adminConfig.discordWebhookToken);
}

function updateDiscordBtn(){
  const grp=document.getElementById('wo-discord-group');
  if(grp)grp.style.display=hasDiscordConfig()?'':'none';
}

let dcType='crafting'; // 'crafting' or 'mining'

function showDiscordModal(){
  const o=getActiveOrder();if(!o)return;
  const items=getExportItems();if(!items.length){showToast('No items in order');return;}
  dcType='crafting';
  
  const defaultLoc=adminConfig.discordDefaultLocation||'';
  const defaultName=o.author?`${o.name} — ${o.author}`:o.name;
  const modal=document.getElementById('discord-modal');
  modal.innerHTML=`<div class="rqm-overlay" onclick="closeDiscordModal()"></div>
    <div class="rqm-dialog">
      <div class="rqm-header">
        <h3>Send to Discord</h3>
        <button class="rqm-close" onclick="closeDiscordModal()">×</button>
      </div>
      <div class="rqm-body">
        <p class="rqm-desc">Post this order to your Discord channel. Choose the request type based on what you need.</p>
        <div class="dc-type-toggle">
          <button class="dc-type active" data-type="crafting" onclick="setDcType('crafting')">⬡ Crafting Request</button>
          <button class="dc-type" data-type="mining" onclick="setDcType('mining')">⛏ Mining Request</button>
        </div>
        <div class="dc-type-hint" id="dc-type-hint">Someone crafts the items for you — full blueprint + materials breakdown.</div>
        <div class="rqm-field">
          <label class="rqm-field-label">Order / Requester Name *</label>
          <input type="text" id="dc-ordername" class="rqm-input" value="${esc(defaultName)}" placeholder="e.g. Carlito's Guns">
        </div>
        <div class="rqm-field">
          <label class="rqm-field-label">Delivery Location *</label>
          <input type="text" id="dc-location" class="rqm-input" value="${esc(defaultLoc)}" placeholder="e.g. Arccorp, Seraphim Station">
        </div>
        <div class="rqm-field">
          <label class="rqm-field-label">Payment (aUEC) *</label>
          <input type="text" id="dc-payment" class="rqm-input" value="" placeholder="e.g. 500K, 1M">
        </div>
        <div class="rqm-field">
          <label class="rqm-field-label">Additional Notes</label>
          <input type="text" id="dc-notes" class="rqm-input" value="" placeholder="Optional">
        </div>
        <div class="rqm-preview">
          <div class="rqm-preview-label">Preview</div>
          <div class="rqm-preview-body" id="dc-preview"></div>
        </div>
      </div>
      <div class="rqm-footer">
        <span id="dc-status" style="flex:1;font-size:12px;color:var(--text-muted)"></span>
        <button class="btn-secondary" onclick="closeDiscordModal()">Cancel</button>
        <button class="btn-discord" id="dc-send-btn" onclick="sendToDiscord()">Send to Discord</button>
      </div>
    </div>`;
  modal.style.display='flex';
  updateDiscordPreview();
  ['dc-ordername','dc-location','dc-payment','dc-notes'].forEach(id=>{
    document.getElementById(id)?.addEventListener('input',updateDiscordPreview);
  });
}

function setDcType(type){
  dcType=type;
  document.querySelectorAll('.dc-type').forEach(b=>b.classList.toggle('active',b.dataset.type===type));
  const hint=document.getElementById('dc-type-hint');
  if(hint)hint.textContent=type==='crafting'
    ?'Someone crafts the items for you — full blueprint + materials breakdown.'
    :'You have the blueprint — just need the raw ores and items delivered.';
  updateDiscordPreview();
}

function updateDiscordPreview(){
  const prev=document.getElementById('dc-preview');if(!prev)return;
  const o=getActiveOrder();if(!o)return;
  const items=getExportItems();
  const orderName=document.getElementById('dc-ordername')?.value||o.name;
  const loc=document.getElementById('dc-location')?.value||'?';
  const pay=document.getElementById('dc-payment')?.value||'?';
  const notes=document.getElementById('dc-notes')?.value||'';
  
  const isMining=dcType==='mining';
  const typeLabel=isMining?'Mining':'Crafting';
  const icon=isMining?'⛏':'⬡';
  
  let summary='';
  if(isMining){
    const mats=buildMaterialSummary(items);
    summary=`${mats.lines.length} material${mats.lines.length!==1?'s':''}`;
  }else{
    summary=`${items.length} item${items.length!==1?'s':''}`;
  }
  
  prev.innerHTML=`<div style="color:#94a3b8;font-size:11px">${icon} Type: <b style="color:#e2e8f0">${typeLabel}</b></div>
    <div style="color:#94a3b8;font-size:11px">Order: <b style="color:#e2e8f0">${esc(orderName)}</b> — ${summary}</div>
    <div style="color:#94a3b8;font-size:11px">Location: <b style="color:#e2e8f0">${esc(loc)}</b></div>
    <div style="color:#94a3b8;font-size:11px">Payment: <b style="color:#e2e8f0">${esc(pay)} aUEC</b></div>
    ${notes?`<div style="color:#94a3b8;font-size:11px">Notes: <b style="color:#e2e8f0">${esc(notes)}</b></div>`:''}`;
}

// Shared helper: gather materials + item costs from work order items
function buildMaterialSummary(items){
  const m={},ic={};
  items.forEach(wo=>{
    const addSlots=(recipe,keyPrefix)=>{
      recipe.filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0))).forEach(r=>{
        const sqKey=keyPrefix?keyPrefix+'|'+r.slot:r.slot;
        const sq=wo.slotQ?.[sqKey]??0;
        const isItem=r.cost_type==='item';
        const matName=isItem?r.item_name:r.material;
        const qty=isItem?r.item_quantity*wo.qty:r.amount_cscu*wo.qty;
        if(!m[matName])m[matName]={total:0,isItem,qualities:{}};
        m[matName].total+=qty;
        const qk=sq||'unset';
        m[matName].qualities[qk]=(m[matName].qualities[qk]||0)+qty;
      });
    };
    if(wo.item.pieces){
      wo.item.pieces.forEach(p=>addSlots(p.recipe||[],p.piece_type));
    }else{
      addSlots(getSlottedRec(wo.item),'');
    }
  });
  
  const lines=[];
  const oreNames=[];
  Object.entries(m).sort((a,b)=>b[1].total-a[1].total).forEach(([mat,info])=>{
    if(info.total<=0)return;
    oreNames.push(miningOreName(mat));
    const fmtQty=v=>info.isItem?`${v}×`:`${roundScu(v/100)} SCU`;
    // Quality breakdown
    const qs=Object.entries(info.qualities).filter(([_,v])=>v>0).sort((a,b)=>parseInt(b[0])||0-parseInt(a[0])||0);
    if(qs.length===1){
      const[qVal]=qs[0];
      const qStr=qVal==='unset'?'':(parseInt(qVal)?` @ ${gradeLabel(parseInt(qVal))} (${gradeRange(parseInt(qVal))})`:'');
      lines.push(`${fmtQty(info.total)} ${mat}${qStr}`);
    }else{
      lines.push(`${fmtQty(info.total)} ${mat}`);
      qs.forEach(([qVal,qty])=>{
        const qStr=qVal==='unset'?'@ any quality':`@ ${gradeLabel(parseInt(qVal))} (${gradeRange(parseInt(qVal))})`;
        lines.push(`  ${fmtQty(qty)} ${qStr}`);
      });
    }
  });
  return {lines,oreNames:[...new Set(oreNames)],matMap:m};
}

async function sendToDiscord(){
  const o=getActiveOrder();if(!o)return;
  const items=getExportItems();
  const orderNameInput=(document.getElementById('dc-ordername')?.value||'').trim();
  const loc=(document.getElementById('dc-location')?.value||'').trim();
  const pay=(document.getElementById('dc-payment')?.value||'').trim();
  const notes=(document.getElementById('dc-notes')?.value||'').trim();
  const statusEl=document.getElementById('dc-status');
  const sendBtn=document.getElementById('dc-send-btn');
  
  if(!orderNameInput){statusEl.textContent='\u26a0\ufe0f Order name is required';statusEl.style.color='#f97316';return;}
  if(!loc){statusEl.textContent='\u26a0\ufe0f Delivery location is required';statusEl.style.color='#f97316';return;}
  if(!pay){statusEl.textContent='\u26a0\ufe0f Payment amount is required';statusEl.style.color='#f97316';return;}
  
  const defaultName=o.author?`${o.name} \u2014 ${o.author}`:o.name;
  if(orderNameInput!==defaultName){
    const dashIdx=orderNameInput.indexOf(' \u2014 ');
    if(dashIdx>=0){o.name=orderNameInput.slice(0,dashIdx);o.author=orderNameInput.slice(dashIdx+3);}
    else{o.name=orderNameInput;o.author='';}
    saveState();renderWO();
  }
  
  const isMining=dcType==='mining';
  const userId=adminConfig.discordUserId||'';
  const mention=userId?`<@${userId}>`:'Unknown';
  const typeTag=isMining?'MINING':'CRAFTING';
  const typeLabel=isMining?'Mining':'Crafting';
  const embedColor=isMining?0xf97316:0x1d4ed8;
  const enc=encodeWO();
  const shareUrl=enc?window.location.origin+window.location.pathname+'#wo='+enc:'';
  const matData=buildMaterialSummary(items);
  const totalTime=items.reduce((s,wo)=>s+itemTime(wo.item)*wo.qty,0);
  
  // ── Build content parts ──
  // Header (always included)
  const header=`[${typeTag}] ${mention} has created a new contract.\n\n**Type of contract**\n${typeLabel}\n\n**Origin/Destination**\n${loc}\n\n**Amount ( scu/items/etc... )**`;
  
  // Footer builder (ore link optional)
  function buildFooter(includeOreLink){
    const fp=[];
    if(notes&&notes.toLowerCase()!=='none')fp.push(`**Additional notes**\n${notes}`);
    if(shareUrl){
      if(isMining){
        // Mining: ore link IS the main link
        fp.push(`**Ore request link**\n${shareUrl}&OREREQUEST`);
      }else{
        fp.push(`**Order link**\n${shareUrl}`);
        if(includeOreLink)fp.push(`**Ore request link**\n${shareUrl}&OREREQUEST`);
      }
    }
    fp.push(`**Payment in aUEC**\n${pay}`);
    return fp.join('\n\n');
  }
  
  // Level 1: Full detail — items with slot breakdowns + materials (no SCU per item)
  function buildFull(){
    const lines=[];
    lines.push(`\u2550\u2550\u2550 ${orderNameInput} \u2550\u2550\u2550`);
    lines.push('');
    items.forEach(wo=>{
      const name=itemName(wo.type,wo.item);
      lines.push(`${wo.qty}x ${name}`);
      const addSlots=(recipe,keyPrefix)=>{
        recipe.filter(r=>r.slot&&((r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0))).forEach(r=>{
          const sqKey=keyPrefix?keyPrefix+'|'+r.slot:r.slot;
          const sq=wo.slotQ?.[sqKey]??0;
          const isIt=r.cost_type==='item';
          const mN=isIt?r.item_name:r.material;
          const amt=isIt?(r.item_quantity*wo.qty)+'\u00d7':uFmt(r.amount_cscu*wo.qty);
          lines.push(`${r.slot}: ${amt} ${mN}${sq?` @ Q${sq} (${gradeLabel(sq)} \u00b7 ${gradeRange(sq)})`:''}`);
        });
      };
      if(wo.item.pieces)wo.item.pieces.forEach(p=>addSlots(p.recipe||[],p.piece_type));
      else addSlots(getSlottedRec(wo.item),'');
    });
    lines.push('');
    lines.push('\u2500\u2500\u2500 Materials \u2500\u2500\u2500');
    matData.lines.forEach(l=>lines.push(l));
    lines.push('');
    lines.push(`Craft time: ${ctimeFull(totalTime)}`);
    return lines.join('\n');
  }
  
  // Level 2: Items without slot detail + materials
  function buildCompact(){
    const lines=[];
    lines.push(`\u2550\u2550\u2550 ${orderNameInput} \u2550\u2550\u2550`);
    lines.push('');
    items.forEach(wo=>{
      lines.push(`${wo.qty}x ${itemName(wo.type,wo.item)}`);
    });
    lines.push('');
    lines.push('\u2500\u2500\u2500 Materials \u2500\u2500\u2500');
    matData.lines.forEach(l=>lines.push(l));
    lines.push('');
    lines.push(`Craft time: ${ctimeFull(totalTime)}`);
    return lines.join('\n');
  }
  
  // Level 3: Materials + link only
  function buildMinimal(){
    const lines=[];
    lines.push(`${orderNameInput} (${items.length} items)`);
    lines.push('');
    lines.push('\u2500\u2500\u2500 Materials \u2500\u2500\u2500');
    matData.lines.forEach(l=>lines.push(l));
    return lines.join('\n');
  }
  
  // Mining uses its own format
  function buildMiningContent(){
    const lines=[];
    const itemList=items.map(wo=>`${wo.qty}x ${itemName(wo.type,wo.item)}`).join(', ');
    lines.push(`Ores for: ${itemList}`);
    lines.push('');
    matData.lines.forEach(l=>lines.push(l));
    if(matData.oreNames.length)lines.push(`\nMining link: https://seeknd.github.io/Strata/?ores=${matData.oreNames.join(',')}`);
    return lines.join('\n');
  }
  
  // Assemble with progressive fallback
  const assemble=(body,oreLink)=>header+'\n'+body+'\n\n'+buildFooter(oreLink);
  
  let finalContent;
  if(isMining){
    finalContent=assemble(buildMiningContent(),false);
  }else{
    // Try levels in order, progressively stripping detail
    finalContent=assemble(buildFull(),true);                          // L1: full + ore link
    if(finalContent.length>2000)finalContent=assemble(buildCompact(),true);   // L2: no slots + ore link
    if(finalContent.length>2000)finalContent=assemble(buildCompact(),false);  // L2.5: no slots, no ore link
    if(finalContent.length>2000)finalContent=assemble(buildMinimal(),false);  // L3: materials + link only
  }
  
  if(finalContent.length>2000){
    statusEl.textContent='\u26a0\ufe0f Order too large for Discord (2000 char limit). Try fewer items or shorter notes.';
    statusEl.style.color='#f97316';
    sendBtn.disabled=false;sendBtn.textContent='Send to Discord';
    return;
  }
  
  // Embed: instructions only (gets deleted on reaction)
  const embedIcon=isMining?'\u26cf\ufe0f':'\ud83d\udd28';
  const embed={
    description:`\n\ud83d\udc47 **React with any emoji to accept this contract**\n\n> This message will be deleted automatically.\n> A contract thread will be created with the details above.\n`,
    color:embedColor,
    footer:{text:`Forge \u00b7 ${typeLabel} Request \u00b7 Awaiting confirmation`},
  };
  
  sendBtn.disabled=true;sendBtn.textContent='Sending...';
  statusEl.textContent='';
  
  try{
    const url=`https://discord.com/api/webhooks/${adminConfig.discordWebhookId}/${adminConfig.discordWebhookToken}`;
    const resp=await fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({content:finalContent,embeds:[embed]}),
    });
    if(resp.ok||resp.status===204){
      statusEl.textContent='\u2705 Sent!';statusEl.style.color='#059669';
      setTimeout(closeDiscordModal,1500);
    }else{
      const err=await resp.text();
      statusEl.textContent=`\u274c Error ${resp.status}`;statusEl.style.color='#ef4444';
      console.error('Discord webhook error:',err);
    }
  }catch(e){
    statusEl.textContent=`\u274c ${e.message}`;statusEl.style.color='#ef4444';
  }
  sendBtn.disabled=false;sendBtn.textContent='Send to Discord';
}

function closeDiscordModal(){
  const modal=document.getElementById('discord-modal');
  modal.style.display='none';modal.innerHTML='';
}

// ── Share Unlocked to Discord ──
function updateShareBar(){
  const bar=document.getElementById('bp-share-bar');if(!bar)return;
  const cat=bpCategory;
  const summary=buildUnlockedSummary();
  let count=0,label='';
  if(cat==='armor'){
    count=summary.armorLines.length+summary.bpLines.length;
    label=`${count} unlocked armor/backpack blueprints`;
  }else if(cat==='weapons'){
    count=summary.weaponLines.length;
    label=`${count} unlocked weapon blueprints`;
  }else if(cat==='undersuits'){
    count=summary.suitLines.length;
    label=`${count} unlocked suit blueprints`;
  }else if(cat==='ship_weapons'){
    count=summary.shipWeaponLines.length;
    label=`${count} unlocked ship weapon blueprints`;
  }else if(cat==='ship_components'){
    count=summary.shipCompLines.length;
    label=`${count} unlocked ship component blueprints`;
  }

  bar.style.display=count>0?'flex':'none';
  document.getElementById('bp-share-count').textContent=label;
  // Hide the Discord button when no webhook is configured (Copy button stays)
  const dcBtn=document.getElementById('bp-share-discord-btn');
  if(dcBtn)dcBtn.style.display=hasDiscordConfig()?'':'none';
}

function buildUnlockedSummary(){
  // Armor: group by set, show (Set) if all pieces unlocked, else abbreviate pieces
  const PIECE_ABBR={arms:'A',core:'C',helmet:'H',legs:'L'};
  const armorLines=[];
  DATA.armor_sets.forEach(set=>{
    if(isUnlocked('set',set.set_name)){
      armorLines.push(`${set.set_name} (Set)`);
    }else{
      const unlocked=set.pieces.filter(p=>isUnlocked('piece',p.name));
      if(unlocked.length){
        const abbrs=unlocked.map(p=>PIECE_ABBR[p.piece_type]||p.piece_type.charAt(0).toUpperCase()).join(',');
        armorLines.push(`${set.set_name} (${abbrs})`);
      }
    }
  });
  // Backpacks
  const bpLines=DATA.backpacks.filter(b=>isUnlocked('backpack',b.name)).map(b=>b.name);
  
  // Weapons: group guns with their ammo
  const gunNames=new Set();const ammoFor={};
  DATA.weapons.forEach(w=>{
    if(!isUnlocked('weapon',w.name))return;
    if(/magazine|battery/i.test(w.name)){
      const base=w.name.replace(/\s*(Magazine|Battery)\s*\(.*\)/i,'').trim();
      ammoFor[base]=true;
    }else{
      gunNames.add(w.name);
    }
  });
  const weaponLines=[...gunNames].map(n=>ammoFor[n]?`${n} (w/ammo)`:n);
  
  // Suits
  const suitLines=[];
  DATA.undersuits.filter(s=>isUnlocked('undersuit',s.name)).forEach(s=>suitLines.push(s.name));
  (DATA.undersuit_helmets||[]).filter(s=>isUnlocked('undersuit_helmet',s.name)).forEach(s=>suitLines.push(s.name));
  DATA.flightsuits.filter(s=>isUnlocked('flightsuit',s.name)).forEach(s=>suitLines.push(s.name));
  (DATA.flightsuit_helmets||[]).filter(s=>isUnlocked('flightsuit_helmet',s.name)).forEach(s=>suitLines.push(s.name));

  // Ship weapons (with size suffix)
  const shipWeaponLines=(DATA.ship_weapons||[]).filter(w=>isUnlocked('ship_weapon',w.name)).map(w=>
    w.name+(w.size?` (S${w.size})`:'')
  );
  // Ship components (with size and class/grade)
  const shipCompLines=(DATA.ship_components||[]).filter(c=>isUnlocked('ship_component',c.name)).map(c=>{
    const meta=[];
    if(c.size!==undefined&&c.size!==null)meta.push('S'+c.size);
    if(c.class_code)meta.push(c.class_code+(c.grade?'/'+c.grade:''));
    return c.name+(meta.length?` (${meta.join(', ')})`:'');
  });

  return{armorLines,bpLines,weaponLines,suitLines,shipWeaponLines,shipCompLines};
}

// Helper: returns [[label, lines[]], ...] for the current category.
// Used by both Discord share and clipboard copy so they stay in sync.
function getShareGroupsForCategory(cat){
  const s=buildUnlockedSummary();
  if(cat==='armor')return [['Armor',s.armorLines],['Backpacks',s.bpLines]];
  if(cat==='weapons')return [['Weapons',s.weaponLines]];
  if(cat==='undersuits')return [['Suits',s.suitLines]];
  if(cat==='ship_weapons')return [['Ship Weapons',s.shipWeaponLines]];
  if(cat==='ship_components')return [['Ship Components',s.shipCompLines]];
  return [];
}
function categoryDisplayName(cat){
  return cat==='armor'?'Armor':cat==='weapons'?'Weapons':cat==='undersuits'?'Suits':cat==='ship_weapons'?'Ship Weapons':cat==='ship_components'?'Ship Components':cat;
}

async function shareUnlockedToDiscord(){
  if(!hasDiscordConfig()){showToast('Configure Discord in Admin first');return;}
  const userId=adminConfig.discordUserId||'';
  const mention=userId?`<@${userId}>`:'Someone';
  const cat=bpCategory;
  const groups=getShareGroupsForCategory(cat);
  const total=groups.reduce((n,[,lines])=>n+lines.length,0);
  if(!total){showToast('Nothing unlocked in this category');return;}
  const fields=[];
  groups.forEach(([label,lines])=>{
    if(!lines.length)return;
    const text=lines.join(', ');
    fields.push({name:`${label} (${lines.length})`,value:text.slice(0,1024)});
    if(text.length>1024)fields.push({name:`${label} (continued)`,value:text.slice(1024,2048)});
  });
  const catName=categoryDisplayName(cat);
  const url=`https://discord.com/api/webhooks/${adminConfig.discordWebhookId}/${adminConfig.discordWebhookToken}`;
  try{
    const resp=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({content:`[BLUEPRINTS] ${mention}'s unlocked ${catName.toLowerCase()} blueprints:`,embeds:[{
        title:`📦 Unlocked ${catName} Blueprints`,description:`${mention}'s collection`,color:0x1d4ed8,fields,
        footer:{text:`Forge · ${total} unlocked`},timestamp:new Date().toISOString()}]})});
    if(resp.ok||resp.status===204)showToast(`Shared ${total} ${catName.toLowerCase()} blueprints to Discord!`);
    else showToast('Failed to send');
  }catch(e){showToast('Discord error: '+e.message);}
}

// Clipboard-copy equivalent of the per-category Discord share.
// Mirrors the same content in plain Markdown that pastes cleanly anywhere.
function copyUnlockedToClipboard(){
  const cat=bpCategory;
  const groups=getShareGroupsForCategory(cat);
  const total=groups.reduce((n,[,lines])=>n+lines.length,0);
  if(!total){showToast('Nothing unlocked in this category');return;}
  const catName=categoryDisplayName(cat);
  const patch=DATA?.meta?.current_patch||'?';
  const owner=getMyName()?`${getMyName()}'s`:'Your';
  const lines=[`**Forge Crafting — ${owner} Unlocked ${catName}** (Patch ${patch})`];
  groups.forEach(([label,ls])=>{
    if(ls.length)lines.push(`*${label} (${ls.length}):* ${ls.join(', ')}`);
  });
  navigator.clipboard.writeText(lines.join('\n')).then(
    ()=>showToast(`Copied ${total} ${catName.toLowerCase()} blueprint${total===1?'':'s'} to clipboard`),
    ()=>showToast('Clipboard copy failed')
  );
}

function showToast(msg){const el=document.createElement('div');el.textContent=msg;el.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1d4ed8;color:#fff;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:700;z-index:999;opacity:0;transition:opacity .3s';document.body.appendChild(el);requestAnimationFrame(()=>{el.style.opacity='1';});setTimeout(()=>{el.style.opacity='0';setTimeout(()=>el.remove(),300);},2000);}

// ════════════════════════════════════════════
// SET PLANNER
// ════════════════════════════════════════════
function buildPlannerSlots(){
  const slots=['helmet','core','arms','legs','backpack','undersuit'];
  document.getElementById('planner-slots').innerHTML=slots.map(slot=>{
    let opts='<option value="">— Select —</option>';
    if(slot==='backpack'){DATA.backpacks.forEach(b=>{opts+=`<option value="bp:${b.name}">${b.name} (${b.weight}, ${uFmt(b.total_cscu)})</option>`;});}
    else if(slot==='undersuit'){DATA.undersuits.forEach(u=>{opts+=`<option value="us:${u.name}">${u.name} (${uFmt(u.total_cscu)})</option>`;});DATA.flightsuits.forEach(f=>{opts+=`<option value="fs:${f.name}">${f.name} (${uFmt(f.total_cscu)})</option>`;});}
    else{const all=[];DATA.armor_sets.forEach(set=>{set.pieces.forEach(p=>{if(p.piece_type===slot)all.push({piece:p,set});});});all.sort((a,b)=>a.piece.name.localeCompare(b.piece.name));all.forEach(({piece,set})=>{opts+=`<option value="pc:${set.set_name}:${piece.name}">${piece.name} (${set.weight} ${ROLE_LABELS[set.role]||set.role}, ${uFmt(piece.total_cscu)})</option>`;});}
    return `<div class="planner-slot"><div class="planner-slot-label">${PIECE_LABELS[slot]||slot}</div><select id="ps-${slot}" onchange="updPlanner('${slot}',this.value)">${opts}</select><div id="pr-${slot}"></div></div>`;
  }).join('');
  Object.entries(plannerSelections).forEach(([slot,val])=>{const sel=document.getElementById(`ps-${slot}`);if(sel&&val){sel.value=val;updPlanner(slot,val);}});
}
function updPlanner(slot,val){plannerSelections[slot]=val;saveState();const el=document.getElementById(`pr-${slot}`),it=resPI(val);el.innerHTML=it?recipeHtml(it.recipe||[]):'';updPlannerSum();}
function resPI(v){if(!v)return null;if(v.startsWith('bp:'))return DATA.backpacks.find(b=>b.name===v.slice(3));if(v.startsWith('us:'))return DATA.undersuits.find(u=>u.name===v.slice(3));if(v.startsWith('fs:'))return DATA.flightsuits.find(f=>f.name===v.slice(3));if(v.startsWith('pc:')){const[,sn,pn]=v.split(':');const s=DATA.armor_sets.find(x=>x.set_name===sn);return s?.pieces.find(p=>p.name===pn);}return null;}
function updPlannerSum(){const m={};let tot=0,any=false;Object.values(plannerSelections).forEach(v=>{const it=resPI(v);if(!it)return;any=true;(it.recipe||[]).forEach(r=>{if(r.material&&r.amount_cscu>0){m[r.material]=(m[r.material]||0)+r.amount_cscu;tot+=r.amount_cscu;}});});const el=document.getElementById('planner-materials'),act=document.getElementById('planner-actions');if(!any){el.innerHTML='<div class="dim">Select pieces to see totals</div>';act.style.display='none';return;}el.innerHTML=Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div style="display:flex;justify-content:space-between;padding:3px 0"><span style="color:#e2e8f0;font-size:13px">${k}</span><span style="color:#38bdf8;font-size:13px;font-weight:700">${uFmt(v)}</span></div>`).join('')+`<div style="border-top:1px solid #334155;margin-top:8px;padding-top:8px;display:flex;justify-content:space-between"><span style="color:#94a3b8;font-weight:700;font-size:13px">TOTAL</span><span style="color:#f8fafc;font-weight:700;font-size:15px">${uFmt(tot)}</span></div>`;act.style.display='flex';}
function addPlannerToWO(){let o=getActiveOrder();if(!o){createNewOrder(true);o=getActiveOrder();}Object.entries(plannerSelections).forEach(([slot,val])=>{if(!val)return;const it=resPI(val);if(!it)return;const k=it.name||val;if(!o.items.some(w=>w.key===k)){const slotQ={};(it.recipe||[]).filter(r=>r.material&&r.slot).forEach(r=>{slotQ[r.slot]=0;});o.items.push({type:'piece',key:k,qty:1,item:it,crafted:false,deducted:null,slotQ});}});saveState();updateWOBadge();switchTab('workorder');renderWO();}
function copyPlannerText(){const lines=['═══ Forge Set ═══'],m={};Object.entries(plannerSelections).forEach(([slot,val])=>{const it=resPI(val);if(!it)return;lines.push(`${PIECE_LABELS[slot]||slot}: ${it.name} (${uFmt(it.total_cscu)})`);(it.recipe||[]).forEach(r=>{if(r.material&&r.amount_cscu>0)m[r.material]=(m[r.material]||0)+r.amount_cscu;});});lines.push('','Materials:');Object.entries(m).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>lines.push(`  ${uFmt(v)} ${k}`));navigator.clipboard.writeText(lines.join('\n')).then(()=>showToast('Copied to clipboard'));}
function savePlannerSet(){const n=prompt('Name:');if(!n)return;savedSets.push({name:n,selections:{...plannerSelections}});saveState();renderSavedSets();}
function loadSavedSet(i){const s=savedSets[i];if(!s)return;plannerSelections={...s.selections};['helmet','core','arms','legs','backpack','undersuit'].forEach(slot=>{const sel=document.getElementById(`ps-${slot}`);if(sel){sel.value=plannerSelections[slot]||'';updPlanner(slot,plannerSelections[slot]||'');}});}
function deleteSavedSet(i){savedSets.splice(i,1);saveState();renderSavedSets();}
function renderSavedSets(){const el=document.getElementById('saved-sets');if(!savedSets.length){el.innerHTML='';return;}el.innerHTML='<div style="color:#94a3b8;font-size:12px;font-weight:700;margin-bottom:6px">SAVED SETS</div>'+savedSets.map((s,i)=>`<div class="saved-set"><span class="saved-set-name" onclick="loadSavedSet(${i})">${esc(s.name)}</span><button class="btn-remove" onclick="deleteSavedSet(${i})">×</button></div>`).join('');}

// ════════════════════════════════════════════
// INVENTORY — Batch System
// ════════════════════════════════════════════
function buildInventoryInputs(){
  const mats=Object.entries(DATA.materials).sort((a,b)=>a[0].localeCompare(b[0]));
  const vt=adminConfig.vaultThreshold;
  
  // Build items section (discrete items like gems)
  const items=DATA.items?Object.entries(DATA.items).sort((a,b)=>a[0].localeCompare(b[0])):[];
  let itemsHtml='';
  if(items.length){
    itemsHtml=`<div class="vault-section-header">Discrete Items</div>`+items.map(([name,info])=>{
      const stock=getItemStock(name);
      const mType=info.mining_type?` <span class="vault-mining-type">${MINING_LABELS[info.mining_type]||info.mining_type}</span>`:'';
      return `<div class="inv-mat-group${stock>0?' has-vault':''}">
        <div class="inv-mat-header"><span class="inv-mat-name">${name}${mType}</span>${stock>0?`<span class="inv-mat-total">${stock}×</span>`:''}</div>
        <div class="inv-batch item-batch">
          <input type="number" min="0" step="1" value="${stock}" onchange="setItemStock('${esc(name)}',parseInt(this.value)||0);buildInventoryInputs();if(currentTab==='inventory')updateInventoryResults();" title="Quantity on hand">
          <span class="unit-label">qty</span>
        </div>
      </div>`;
    }).join('');
  }
  
  document.getElementById('inventory-inputs').innerHTML=`
    <div class="vault-header">
      <span class="vault-title">Grade A Materials (>${'Q'}${vt})</span>
      <span class="vault-hint dim">Add rare materials here. Common materials don't need tracking.</span>
    </div>
  `+mats.map(([name])=>{
    const batches=getBatches(name);
    const tot=totalQty(name);
    // Only show batches that meet vault threshold
    const vaultBatches=batches.filter(b=>b.quality>=vt);
    const vaultTotal=vaultBatches.reduce((s,b)=>s+b.qty,0);
    const batchRows=vaultBatches.map((b,bi)=>{
      // Find actual index in full batches array for editing
      const realIdx=batches.indexOf(b);
      const qc=qColor(b.quality);
      return `<div class="inv-batch">
        <input type="number" min="0" step="0.0001" value="${roundScu(b.qty/100)}" onchange="setVaultBatch('${name}',${realIdx},this.value)" title="Amount in SCU">
        <span class="unit-label">SCU</span>
        <span style="color:${qc};font-size:11px;font-weight:600">Q${b.quality}</span>
        <span class="q-bar-sm"><span class="q-fill" style="width:${b.quality/10}%;background:${qc}"></span></span>
        <button class="inv-rm-batch" onclick="rmInvBatch('${name}',${realIdx})">×</button>
      </div>`;
    }).join('');
    const hasVault=vaultBatches.length>0;
    return `<div class="inv-mat-group${hasVault?' has-vault':''}">
      <div class="inv-mat-header"><span class="inv-mat-name">${name}</span>${vaultTotal>0?`<span class="inv-mat-total">${scuFmt(vaultTotal)}</span>`:''}</div>
      ${batchRows}
      <button class="inv-add-batch" onclick="addVaultBatch('${name}')">+ add</button>
    </div>`;
  }).join('')+itemsHtml;
}

function setVaultBatch(mat,bi,val){
  const batches=getBatches(mat);if(!batches[bi])return;
  const scu=parseFloat(val)||0;
  batches[bi].qty=Math.round(scu*10000)/100; // SCU to cSCU with precision
  saveState();
  if(currentTab==='inventory')updateInventoryResults();
}
function addVaultBatch(mat){
  getBatches(mat).push({qty:0,quality:adminConfig.vaultThreshold});
  saveState();buildInventoryInputs();
}
function rmInvBatch(mat,bi){const b=getBatches(mat);b.splice(bi,1);saveState();buildInventoryInputs();}

function buildInventoryFilters(){}
function setInvFilter(g,v){updateInventoryResults();}
function togInvF(k,v){updateInventoryResults();}

// Calculate completion % respecting minQuality requirements
function calcComp(item){
  const ms=getRec(item).filter(r=>(r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0));
  if(!ms.length)return 1;
  let n=0,h=0;
  ms.forEach(r=>{
    const minQ=r.min_quality||adminConfig.defaultMinQuality;
    if(r.cost_type==='item'){
      // Item costs - check itemInventory
      n+=r.item_quantity;
      h+=Math.min(getItemStock(r.item_name),r.item_quantity);
    }else{
      n+=r.amount_cscu;
      // Only count batches at or above minQuality
      const validQty=getBatches(r.material).filter(b=>b.quality>=minQ).reduce((s,b)=>s+b.qty,0);
      h+=Math.min(validQty,r.amount_cscu);
    }
  });
  return n>0?h/n:0;
}

function updateInventoryResults(){
  const grid=document.getElementById('inv-grid');grid.classList.remove('two-col');
  const items=[];
  DATA.armor_sets.forEach(s=>items.push({type:'set',key:s.set_name,item:s,name:s.set_name,weight:s.weight}));
  DATA.weapons.forEach(w=>items.push({type:'weapon',key:w.name,item:w,name:w.name}));
  items.forEach(e=>{e.pct=calcComp(e.item);e.unlocked=isUnlocked(e.type,e.key);});items.sort((a,b)=>b.pct-a.pct);
  const filtered=items.filter(e=>{
    // Craftable/Partial filters require unlocked
    if(invFilters.status==='craftable'&&(e.pct<1||!e.unlocked))return false;
    if(invFilters.status==='partial'&&((e.pct<=0||e.pct>=1)||!e.unlocked))return false;
    // All shows everything but sort unlocked first
    if(invFilters.type.length&&!invFilters.type.includes(e.type))return false;
    if(invFilters.weight.length&&e.type==='set'&&!invFilters.weight.includes(e.weight))return false;
    return true;
  });
  // Sort: unlocked first for 'all' status
  if(invFilters.status==='all'){
    filtered.sort((a,b)=>{
      if(a.unlocked!==b.unlocked)return a.unlocked?-1:1;
      return b.pct-a.pct;
    });
  }
  grid.innerHTML=filtered.map(e=>{
    const pct=Math.round(e.pct*100);const barColor=pct>=100?'#059669':pct>50?'#facc15':pct>0?'#f97316':'#475569';
    const mats=getRec(e.item).filter(r=>(r.material&&r.amount_cscu>0)||(r.cost_type==='item'&&r.item_quantity>0));
    const chipHtml=mats.map(r=>{
      const minQ=r.min_quality||adminConfig.defaultMinQuality;
      if(r.cost_type==='item'){
        // Item costs - check itemInventory
        const have=getItemStock(r.item_name);
        const ok=have>=r.item_quantity;
        return `<span class="chip item-cost${ok?' green':''}" style="border-color:${ok?'':'#7c3aed66'}"><span class="qty">${r.item_quantity}×</span> ${esc(r.item_name)} (${have})</span>`;
      }
      // Only count inventory at or above minQuality
      const validQty=getBatches(r.material).filter(b=>b.quality>=minQ).reduce((s,b)=>s+b.qty,0);
      const ok=validQty>=r.amount_cscu;
      const minQBadge=minQ>0?` <span style="color:${qColor(minQ)};font-size:9px">Q${minQ}+</span>`:'';
      return `<span class="chip${ok?' green':''}" style="${!ok?'border-color:#f9731666':''}"><span class="qty">${uFmt(r.amount_cscu)}</span> ${esc(r.material)}${minQBadge} ${ok?'✓':`(${uVal(Math.min(validQty,r.amount_cscu))})`}</span>`;
    }).join('');
    const badges=itemBadges(e.type,e.item);const ins=inWO(e.type,e.key);
    const lockIcon=e.unlocked?'':'<span class="badge-locked" style="margin-left:4px">🔒</span>';
    const woBtnHtml=e.unlocked
      ?`<button class="btn-wo btn-sm${ins?' in-wo':''}" onclick="toggleWOItem('${e.type}','${escAttr(e.key)}')">${ins?'✓ In Order':'+ Work Order'}</button>`
      :`<button class="btn-request btn-sm" onclick="addToRequest('${e.type}','${escAttr(e.key)}')">Request Build</button>`;
    return `<div class="item-card${e.unlocked?'':' locked'}" style="padding:12px 14px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px"><span style="color:#f8fafc;font-weight:700;font-size:14px">${esc(e.name)}${lockIcon}</span><span class="inv-pct" style="color:${barColor}">${pct}%</span></div><div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px">${badges}</div><div style="display:flex;flex-wrap:wrap;gap:3px">${chipHtml}</div><div class="inv-progress"><div class="inv-progress-bar" style="width:${pct}%;background:${barColor}"></div></div><div class="inv-actions">${woBtnHtml}</div></div>`;
  }).join('');
}

// ════════════════════════════════════════════
// MATERIALS REFERENCE
// ════════════════════════════════════════════
function buildMaterialsRef(){
  const USE_LABELS={armor:'Armor',weapons:'Weapons',undersuits:'Undersuits',backpacks:'Backpacks',ship_weapons:'Ship Weapons',ship_components:'Ship Components'};
  const USE_CLS={armor:'badge-use-armor',weapons:'badge-use-weapons',undersuits:'badge-use-undersuits',backpacks:'badge-use-backpacks',ship_weapons:'badge-use-ship-weapons',ship_components:'badge-use-ship-components'};
  const matSlots={};
  const scanSlots=arr=>arr.forEach(item=>{const recs=item.pieces?item.pieces.flatMap(p=>p.recipe):(item.recipe||[]);recs.forEach(r=>{if(r.material&&r.slot){matSlots[r.material]=matSlots[r.material]||new Set();matSlots[r.material].add(r.slot);}});});
  scanSlots(DATA.armor_sets);scanSlots(DATA.weapons);
  scanSlots(DATA.undersuits.concat(DATA.undersuit_helmets||[],DATA.flightsuits||[],DATA.flightsuit_helmets||[]));
  scanSlots(DATA.backpacks);
  scanSlots(DATA.ship_weapons||[]);scanSlots(DATA.ship_components||[]);
  document.getElementById('materials-grid').innerHTML=Object.entries(DATA.materials).sort((a,b)=>a[0].localeCompare(b[0])).map(([n,i])=>{
    const uses=(materialUsage[n]||[]).map(u=>`<span class="badge-use ${USE_CLS[u]||''}">${USE_LABELS[u]||u}</span>`).join('');
    const slots=[...(matSlots[n]||[])].map(sl=>{const stat=SLOT_STATS[sl]||'Unknown';return `<div class="mat-slot-stat"><span class="mat-slot-name">${sl}</span><span class="mat-stat-arrow">→</span><span class="mat-stat-name">${stat}</span></div>`;}).join('');
    const inv=totalQty(n);const invStr=inv>0?`<span style="color:var(--green);font-weight:700">${uFmt(inv)} in inventory</span>`:'';
    return `<div class="mat-card"><div class="mat-top"><div class="mat-name">${n}</div><div class="mat-bp-count">${i.blueprint_count} blueprints</div></div><div class="mat-details"><div class="mat-detail"><span class="mat-detail-label">Raw Ore</span>${i.raw_ore}</div><div class="mat-detail"><span class="mat-detail-label">Crafting Slots</span>${i.slots_used_in}</div>${invStr?`<div class="mat-detail">${invStr}</div>`:''}</div>${slots?`<div class="mat-slots-stats">${slots}</div>`:''}<div class="mat-uses">${uses}</div></div>`;
  }).join('');
}

// ════════════════════════════════════════════
// UTILS
// ════════════════════════════════════════════
function esc(s){return s?s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'):'';}
function escAttr(s){return esc(s).replace(/'/g,'\\&#39;');}
function round(n){return Math.round(n*100)/100;}
function roundScu(n){return Math.round(n*10000)/10000;}
function uVal(cscu){return unitMode==='scu'?roundScu(cscu/100):round(cscu);}
function uLabel(){return unitMode==='scu'?'SCU':'cSCU';}
function uFmt(cscu){return `${uVal(cscu)} ${uLabel()}`;}
function scuFmt(cscu){return `${roundScu(cscu/100)} SCU`;}
function toggleUnit(){unitMode=unitMode==='cscu'?'scu':'cscu';try{localStorage.setItem(LS+'unit',unitMode);}catch(e){}updUnitBtn();refreshAll();}
function updUnitBtn(){const el=document.getElementById('unit-toggle');if(el){el.textContent=unitMode==='scu'?'SCU':'cSCU';el.classList.toggle('active',unitMode==='scu');}}
function refreshAll(){filterBlueprints();if(currentTab==='workorder')renderWO();if(currentTab==='inventory'){buildInventoryInputs();updateInventoryResults();}if(currentTab==='sets'){buildPlannerSlots();updPlannerSum();}buildMaterialsRef();}
function qColor(q){if(q>=adminConfig.gradeALow)return '#22c55e';if(q>=adminConfig.gradeBLow)return '#60a5fa';if(q>=adminConfig.gradeCLow)return '#facc15';return '#ef4444';}

document.addEventListener('DOMContentLoaded',init);
