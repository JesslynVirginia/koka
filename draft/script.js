/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const CAFES=[
  {name:'Brewlab Studio',bg:'ci1',icon:'coffee',rating:4.8,
   pills:[{i:'clock',t:'7AM–11PM'},{i:'map-pin',t:'Batam City'},{i:'wallet',t:'~Rp 35K min'}],
   desc:'A minimalist industrial-style cafe that doubles as a creative studio. Equipped with blazing-fast fiber optic WiFi and outlets at every desk. Lo-fi beats keep you in flow. Popular with developers, designers, and freelancers.',
   amenities:[
     {i:'wifi',l:'WiFi Speed',v:'~150 Mbps fiber'},
     {i:'plug',l:'Power Outlets',v:'Available at all tables'},
     {i:'volume-2',l:'Noise Level',v:'Moderate – background music'},
     {i:'clock',l:'Hours',v:'7:00 AM – 11:00 PM'}
   ],
   reviews:[
     {t:"Best WiFi I've ever had in a cafe. Downloaded a 2GB file in minutes!",n:'Rizky A.'},
     {t:"Love the aesthetic. Great place to grind on a deadline.",n:'Sena W.'}
   ]},
  {name:'The Green Page',bg:'ci2',icon:'leaf',rating:4.5,
   pills:[{i:'clock',t:'8AM–10PM'},{i:'map-pin',t:'Nagoya Hill'},{i:'wallet',t:'~Rp 20K min'}],
   desc:'A botanical-themed cafe surrounded by indoor plants and soft natural lighting. A quiet policy is enforced — making it feel like a cozy reading room. Beloved by students who need deep-focus sessions without distractions.',
   amenities:[
     {i:'coins',l:'Price Range',v:'Rp 15K – 40K per item'},
     {i:'volume-x',l:'Noise Level',v:'Very quiet – library-like'},
     {i:'leaf',l:'Vibe',v:'Botanical, warm, natural light'},
     {i:'clock',l:'Hours',v:'8:00 AM – 10:00 PM'}
   ],
   reviews:[
     {t:"Finally a cafe where I can hear myself think. This is my new office!",n:'Dara L.'},
     {t:"Prices are super fair for the quality. A genuine gem.",n:'Andi T.'}
   ]},
  {name:'Blue Harbor Co.',bg:'ci3',icon:'anchor',rating:4.7,
   pills:[{i:'clock',t:'7AM–12AM'},{i:'map-pin',t:'Harbour Bay'},{i:'wallet',t:'~Rp 25K min'}],
   desc:'Spacious waterfront cafe with panoramic views of the Batam strait. Checks all boxes — strong WiFi, abundant power outlets, and a budget-friendly menu. The high ceilings and open layout make it an all-day work haven.',
   amenities:[
     {i:'wifi',l:'WiFi Speed',v:'~100 Mbps'},
     {i:'plug',l:'Power Outlets',v:'Strip outlets at booth seats'},
     {i:'coins',l:'Price Range',v:'Rp 20K – 55K per item'},
     {i:'waves',l:'View',v:'Waterfront / sea view'}
   ],
   reviews:[
     {t:"The view while working is absolutely unbeatable.",n:'Felix O.'},
     {t:"Can't beat this price for this quality.",n:'Nisa R.'}
   ]},
  {name:'Terracotta Corner',bg:'ci4',icon:'home',rating:4.4,
   pills:[{i:'clock',t:'9AM–10PM'},{i:'map-pin',t:'Batam Centre'},{i:'wallet',t:'~Rp 30K min'}],
   desc:'Warm terracotta interiors with plush seating and thoughtful acoustics. Designated no-phone zones and an impressive ratio of plug points to seats. Perfect for calm, focused writing or tackling big projects.',
   amenities:[
     {i:'plug',l:'Power Outlets',v:'Every seat has a plug'},
     {i:'volume-x',l:'Noise Level',v:'Quiet – no-phone zones'},
     {i:'palette',l:'Interior',v:'Warm terracotta, earthy tones'},
     {i:'clock',l:'Hours',v:'9:00 AM – 10:00 PM'}
   ],
   reviews:[
     {t:"The no-phone zone is a game changer for focus.",n:'Maya K.'},
     {t:"Seats are genuinely comfortable for hours of work.",n:'Bimo P.'}
   ]},
  {name:'Violet Grounds',bg:'ci5',icon:'sparkles',rating:4.3,
   pills:[{i:'clock',t:'10AM–11PM'},{i:'map-pin',t:'Batu Aji'},{i:'wallet',t:'~Rp 18K min'}],
   desc:'Student hotspot with daily promos, loyalty card perks, and consistently strong WiFi. An eclectic aesthetic and a community board for local events. Warm evening vibe suits both social and focused work.',
   amenities:[
     {i:'coins',l:'Price Range',v:'Rp 12K – 35K per item'},
     {i:'wifi',l:'WiFi Speed',v:'~80 Mbps'},
     {i:'gift',l:'Perks',v:'Loyalty card, daily promos'},
     {i:'clock',l:'Hours',v:'10:00 AM – 11:00 PM'}
   ],
   reviews:[
     {t:"Best student budget cafe in the city. Promos every day!",n:'Hana S.'},
     {t:"WiFi held up through 3 hours of Zoom calls.",n:'Wira D.'}
   ]},
  {name:'Mint & Co.',bg:'ci6',icon:'droplets',rating:4.9,
   pills:[{i:'clock',t:'7AM–11PM'},{i:'map-pin',t:'Nongsa Area'},{i:'wallet',t:'~Rp 22K min'}],
   desc:'KOKA\'s all-time top-rated cafe. Combines everything a remote worker could want: near-silence, 200 Mbps fiber WiFi, outlets at every seat, and prices that make sense. Fresh, airy, and calming interior.',
   amenities:[
     {i:'wifi',l:'WiFi Speed',v:'~200 Mbps – fastest on list'},
     {i:'plug',l:'Power Outlets',v:'Every table, multiple ports'},
     {i:'volume-x',l:'Noise Level',v:'Library quiet'},
     {i:'coins',l:'Price Range',v:'Rp 18K – 45K per item'}
   ],
   reviews:[
     {t:"This is THE place. I've been coming here for 6 months straight.",n:'Kevin R.'},
     {t:"Perfect in every way. Quiet, fast WiFi, beautiful, affordable.",n:'Laila N.'}
   ]}
];

/* ═══════════════════════════════════════
   PAGE NAVIGATION
═══════════════════════════════════════ */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.getElementById('nav-'+id).classList.add('active');
  window.scrollTo(0,0);
  setTimeout(()=>{lucide.createIcons();initReveal();},60);
}

/* ═══════════════════════════════════════
   MULTIPLE FILTER
═══════════════════════════════════════ */
const activeF=new Set();
function toggleFilter(tag,btn){
  if(tag==='all'){
    activeF.clear();
    document.querySelectorAll('.f-btn').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
  } else {
    document.getElementById('f-all').classList.remove('on');
    if(activeF.has(tag)){activeF.delete(tag);btn.classList.remove('on');}
    else{activeF.add(tag);btn.classList.add('on');}
    if(activeF.size===0)document.getElementById('f-all').classList.add('on');
  }
  applyFilter();
}
function applyFilter(){
  const cards=document.querySelectorAll('.cafe-card');
  let vis=0;
  cards.forEach(c=>{
    const tags=c.dataset.tags.split(',');
    const show=activeF.size===0||[...activeF].every(f=>tags.includes(f));
    c.classList.toggle('gone',!show);
    if(show)vis++;
  });
  const el=document.getElementById('filterCount');
  if(el)el.textContent=`Showing ${vis} cafe${vis!==1?'s':''}`;
}

/* ═══════════════════════════════════════
   DETAIL PANEL
═══════════════════════════════════════ */
const MASCOT_MINI=`<svg width="48" height="54" viewBox="0 0 160 180" fill="none"><rect x="28" y="72" width="104" height="80" rx="16" fill="white" stroke="#1C1008" stroke-width="3"/><ellipse cx="80" cy="115" rx="36" ry="28" fill="#1C1008"/><ellipse cx="68" cy="110" rx="5" ry="6" fill="white"/><ellipse cx="92" cy="110" rx="5" ry="6" fill="white"/><circle cx="69" cy="111" r="2.5" fill="#1C1008"/><circle cx="93" cy="111" r="2.5" fill="#1C1008"/><path d="M68 122 Q80 130 92 122" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`;

function openDetail(idx){
  const c=CAFES[idx];
  const stars='★'.repeat(Math.floor(c.rating))+(c.rating%1>=.5?'½':'');
  const pills=c.pills.map(p=>`<span class="info-pill"><i data-lucide="${p.i}"></i>${p.t}</span>`).join('');
  const amens=c.amenities.map(a=>`<li class="amen-item"><div class="amen-ico"><i data-lucide="${a.i}"></i></div><span>${a.l}</span><span class="amen-val">${a.v}</span></li>`).join('');
  const revs=c.reviews.map(r=>`<div class="rev-card"><p class="rev-text">"${r.t}"</p><div class="rev-name">— ${r.n}</div></div>`).join('');
  const thumbIcons=['image','image','image','image'];

  document.getElementById('dpanelBody').innerHTML=`
    <div class="dpanel-top">
      <div class="dpanel-imgs">
        <div class="dpanel-main-img ${c.bg}">
          <i data-lucide="${c.icon}"></i>
        </div>
        <div class="dpanel-thumbs">
          ${thumbIcons.map(()=>`<div class="dpanel-thumb ${c.bg}"><i data-lucide="${c.icon}"></i></div>`).join('')}
        </div>
      </div>
      <div class="dpanel-info">
        <h2>${c.name}</h2>
        <div class="stars-row">
          <span class="stars">${stars}</span>
          <span class="stars-num">${c.rating} / 5</span>
        </div>
        <div class="info-pills">${pills}</div>
        <p class="dpanel-desc">${c.desc}</p>
        <ul class="amen-list">${amens}</ul>
        <button class="maps-btn" onclick="openMaps('${c.name}')">
          <i data-lucide="map-pin"></i> Open in Google Maps
        </button>
      </div>
    </div>
    <div class="rev-sec">
      <h4>What People Say</h4>
      <div class="rev-grid">${revs}</div>
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow='hidden';
  lucide.createIcons();
}
function closeDetail(){
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('overlay').addEventListener('click',function(e){if(e.target===this)closeDetail();});

/* ═══════════════════════════════════════
   MAPS
═══════════════════════════════════════ */
function openMaps(n){window.open('https://www.google.com/maps/search/'+encodeURIComponent(n+' Batam'),'_blank');}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
function submitForm(){
  const n=document.getElementById('cName').value.trim();
  const e=document.getElementById('cEmail').value.trim();
  const t=document.getElementById('cType').value;
  const m=document.getElementById('cMsg').value.trim();
  if(!n||!e||!t||!m){alert('Please fill in all required fields.');return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){alert('Please enter a valid email address.');return;}
  ['cName','cEmail','cType','cMsg'].forEach(id=>document.getElementById(id).value='');
  const ok=document.getElementById('formOk');
  ok.classList.add('show');
  setTimeout(()=>ok.classList.remove('show'),6000);
}

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
function initReveal(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.1});
  document.querySelectorAll('.page.active .reveal:not(.in), .page.active .reveal-scale:not(.in)').forEach(el=>io.observe(el));
}

/* ═══════════════════════════════════════
   NAV SHADOW ON SCROLL
═══════════════════════════════════════ */
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('raised',window.scrollY>8);
});

/* ═══════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════ */
const dot=document.getElementById('curDot');
const ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){
  dot.style.left=mx+'px';dot.style.top=my+'px';
  rx+=(mx-rx)*.14;ry+=(my-ry)*.14;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(tick);
})();

/* ═══════════════════════════════════════
   ESC KEY
═══════════════════════════════════════ */
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail();});

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{lucide.createIcons();initReveal();});
