/* ══════════════════════════════
   DATA
══════════════════════════════ */
const CAFES = [
  {
    name: "Brew by Dy's", rating: 4.8,
    pills: [{i:'clock',t:'8AM–10PM'},{i:'map-pin',t:'Pasir Putih'},{i:'wallet',t:'~Rp 44K avg'}],
    desc: 'A warm minimalist-industrial café with a calm atmosphere and blazing-fast 150 Mbps Wi-Fi, making it a comfortable spot for developers, designers, or anyone looking to study and work peacefully.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~150 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 18K – 70K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'Available'},
      {i:'clock',  l:'Hours',         v:'8:00 AM – 10:00 PM'}
    ],
    images: ['cafe/brew1.jpeg','cafe/brew2.jpeg','cafe/brew3.jpeg','cafe/brew4.jpeg'],
    reviews: [
      {t:"The place is cozy, clean and quiet. Very suitable to have friends or business meeting here. ", n:'HT'},
      {t:"The best WFC place. The place is comfortable and cozy. Plenty of outlets, and the coffee and prices are still worth it.", n:'Darwin R.'}
    ]
  },
  {
    name: "Fey Patisserie & Coffee", rating: 4.8,
    pills: [{i:'clock',t:'10AM–10PM'},{i:'map-pin',t:'Teluk Tering'},{i:'wallet',t:'~Rp 29K avg'}],
    desc: 'A cozy small-space patisserie with a warm atmosphere, budget-friendly menu, and reliable Wi-Fi speeds around 50 Mbps that are still fast enough for studying or working comfortably.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~48-52 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 15K – 43K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 10:00 PM'}
    ],
    images: ['cafe/fey1.jpeg', 'cafe/fey2.jpeg', 'cafe/fey3.jpeg', 'cafe/fey4.jpeg'],
    reviews: [
      {t:"It is very nice place for working or just for chilling. Good ambience and lighting. You can work from cage here, the electricity and wifi very well support. ", n:'Khoirul A.'},
      {t:"Coffee shop with cozy & homey vibes. Great place for working, too", n:'Viviyan Y.'}
    ]
  },
  {
    name: 'Goffee Batam', rating: 4.6,
    pills: [{i:'clock',t:'7AM–12AM'},{i:'map-pin',t:'Teluk Tering'},{i:'wallet',t:'~Rp 46,5K avg'}],
    desc: 'A spacious and quiet café with fast Wi-Fi, making it a comfortable and budget-friendly spot for studying or working for long hours.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~42-51 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 18K – 75K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'9:00 AM – 12:00 AM'}
    ],
    images: ['cafe/goffee1.jpeg', 'cafe/goffee2.jpeg', 'cafe/goffee3.jpeg','cafe/goffee4.jpeg'],
    reviews: [
      {t:"They let me to work until mid night. Their Internet connection is good & the servers are nice.", n:'Haritma M.'},
      {t:"Nice cafe to work and chill", n:'Davianto'}
    ]
  },
  {
    name: 'Sharlotte Cafe', rating: 4.7,
    pills: [{i:'clock',t:'10AM–10PM'},{i:'map-pin',t:'Taman Baloi'},{i:'wallet',t:'~Rp 42K avg'}],
    desc: 'An aesthetic and cozy café known for its adorable white-toned interior, cool and calming atmosphere, wide variety of popular desserts, and semi-budget-friendly menu that makes it perfect for hanging out or taking cute photos.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~2-8 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 12K – 72K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'unavailable'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 10:00 PM'}
    ],
    images: ['cafe/sharlotte1.jpeg', 'cafe/sharlotte2.jpeg', 'cafe/sharlotte3.jpeg', 'cafe/sharlotte4.jpeg'],
    reviews: [
      {t:"Cozy environnmet and good desserts. decorations are stunning and it was not crowded on monday.", n:'Alp'},
      {t:"Such a perfect spot for those looking to hang out, chill, and get some work or studying done. It has a super chill ambiance with clean, modern aesthetic. They also offer a wide variety of mouthwatering desserts.", n:'Selly K.H.'}
    ]
  },
  {
    name: 'Kobie Coffee Tiban', rating: 4.8,
    pills: [{i:'clock',t:'10AM–11PM'},{i:'map-pin',t:'Patam Lestari'},{i:'wallet',t:'~Rp 32K avg'}],
    desc: 'An Instagrammable Modern-Retro style café with a calm atmosphere, aesthetic interiors, and semi-budget-friendly prices perfect for relaxing or studying.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~16-21 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 12K – 52K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 11:00 PM'}
    ],
    images: ['cafe/kobie1.jpeg', 'cafe/kobie2.jpeg', 'cafe/kobie3.jpeg', 'cafe/kobie4.jpeg'],
    reviews: [
      {t:"There are power outlets so it's WFC-friendly.", n:'Arum'},
      {t:"The concept of Retro Pop is really unique, there are different photo spots at the cafe. Not just the ambience is great, the food from RUMA was delicious.", n:'Schia'}
    ]
  },
  {
    name: 'Local Cafe', rating: 4.4,
    pills: [{i:'clock',t:'8AM–10.30PM'},{i:'map-pin',t:'Baloi Indah'},{i:'wallet',t:'~Rp 42K avg'}],
    desc: 'A cozy and aesthetic café with a spacious layout, several plug spots, and a lively atmosphere that still feels comfortable for hanging out or getting work done.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~23-28 Mbps'},
      {i:'coins',   l:'Price Range',  v:'Rp 23K – 60K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'8:00 AM – 10:30 PM'}
    ],
    images: ['cafe/local1.jpeg', 'cafe/local2.jpeg', 'cafe/local3.jpeg', 'cafe/local4.jpeg'],
    reviews: [
      {t:"Great food and cozy place. Popular with students since it's near campus. A bit crowded at times, but service is quick.", n:'Oct'},
      {t:"Good and recommended. Crowded but fast serving. Delicious and good taste.", n:'Fitri D.'}
    ]
  }
];

/* ══════════════════════════════
   PAGE NAVIGATION
   - Sembunyikan semua halaman dulu
   - Lalu tampilkan halaman yang dipilih
══════════════════════════════ */
function showPage(id) {

  // Ambil semua elemen dengan class "page"
  const semuaHalaman = document.querySelectorAll('.page');

  // Sembunyikan semua halaman satu per satu
  for (let i = 0; i < semuaHalaman.length; i++) {
    semuaHalaman[i].classList.remove('active');
  }

  // Ambil semua link di navbar
  const semuaLink = document.querySelectorAll('.nav-links a');

  // Hapus style aktif dari semua link navbar
  for (let i = 0; i < semuaLink.length; i++) {
    semuaLink[i].classList.remove('active');
  }

  // Tampilkan halaman yang dipilih
  document.getElementById('page-' + id).classList.add('active');

  // Beri style aktif ke link navbar yang sesuai
  document.getElementById('nav-' + id).classList.add('active');

  // Scroll balik ke atas halaman
  window.scrollTo(0, 0);

  // Render ulang icon Lucide di halaman baru
  lucide.createIcons();
}


/* ══════════════════════════════
   FILTER CAFE
   - activeFilters = daftar filter yang sedang aktif
   - Bisa pilih lebih dari satu filter sekaligus
══════════════════════════════ */

// Array untuk menyimpan filter yang aktif
// Contoh isinya: ['wifi', 'quiet']
let activeFilters = [];

function toggleFilter(tag, btn) {

  // Kalau yang diklik tombol "All Cafes"
  if (tag === 'all') {

    // Kosongkan semua filter
    activeFilters = [];

    // Hapus style aktif dari semua tombol filter
    const semuaTombol = document.querySelectorAll('.f-btn');
    for (let i = 0; i < semuaTombol.length; i++) {
      semuaTombol[i].classList.remove('on');
    }

    // Kasih style aktif ke tombol "All"
    btn.classList.add('on');

  } else {

    // Hapus style aktif dari tombol "All"
    document.getElementById('f-all').classList.remove('on');

    // Cek apakah filter ini sudah ada di dalam array
    const posisi = activeFilters.indexOf(tag);

    if (posisi !== -1) {
      // Sudah ada → hapus dari array (toggle off)
      activeFilters.splice(posisi, 1);
      btn.classList.remove('on');
    } else {
      // Belum ada → tambahkan ke array (toggle on)
      activeFilters.push(tag);
      btn.classList.add('on');
    }

    // Kalau tidak ada filter aktif, aktifkan kembali tombol "All"
    if (activeFilters.length === 0) {
      document.getElementById('f-all').classList.add('on');
    }
  }

  // Terapkan filter ke kartu cafe
  applyFilter();
}

function applyFilter() {

  // Hitung berapa cafe yang terlihat
  let jumlahTerlihat = 0;

  // Ambil semua kartu cafe
  const semuaCard = document.querySelectorAll('.cafe-card');

  for (let i = 0; i < semuaCard.length; i++) {

    const card = semuaCard[i];

    // Ambil tags dari attribute data-tags di HTML
    // Contoh: data-tags="wifi,plug" → ['wifi', 'plug']
    const cardTags = card.dataset.tags.split(',');

    // Tentukan apakah card ini harus ditampilkan
    let tampilkan = true;

    // Kalau tidak ada filter aktif → tampilkan semua
    if (activeFilters.length === 0) {
      tampilkan = true;
    } else {
      // Cek apakah card ini punya SEMUA filter yang aktif
      for (let j = 0; j < activeFilters.length; j++) {
        if (cardTags.indexOf(activeFilters[j]) === -1) {
          // Filter ini tidak ada di card → sembunyikan
          tampilkan = false;
          break;
        }
      }
    }

    // Tampilkan atau sembunyikan card
    if (tampilkan) {
      card.classList.remove('gone');
      jumlahTerlihat++;
    } else {
      card.classList.add('gone');
    }
  }

  // Update tulisan "Showing X cafes"
  const tulisanJumlah = document.getElementById('filterCount');
  if (tulisanJumlah) {
    if (jumlahTerlihat === 1) {
      tulisanJumlah.textContent = 'Showing 1 cafe';
    } else {
      tulisanJumlah.textContent = 'Showing ' + jumlahTerlihat + ' cafes';
    }
  }
}


/* ══════════════════════════════
   IMAGE GALLERY
   - currentImg = foto yang sedang ditampilkan (nomor urut)
   - totalImgs  = total jumlah foto
══════════════════════════════ */
let currentImg = 0;
let totalImgs  = 0;

function setGalleryImg(nomorFoto) {

  // Pastikan nomor tidak keluar batas (muter)
  if (nomorFoto < 0) {
    nomorFoto = totalImgs - 1; // balik ke foto terakhir
  }
  if (nomorFoto >= totalImgs) {
    nomorFoto = 0; // balik ke foto pertama
  }

  currentImg = nomorFoto;

  // Sembunyikan semua slide foto
  const semuaSlide = document.querySelectorAll('.gallery-main-img');
  for (let i = 0; i < semuaSlide.length; i++) {
    semuaSlide[i].classList.add('hidden');
  }

  // Tampilkan hanya slide yang dipilih
  semuaSlide[currentImg].classList.remove('hidden');

  // Update thumbnail — hapus aktif dari semua, kasih ke yang dipilih
  const semuaThumb = document.querySelectorAll('.gallery-thumb');
  for (let i = 0; i < semuaThumb.length; i++) {
    semuaThumb[i].classList.remove('active');
  }
  semuaThumb[currentImg].classList.add('active');
}

// Tombol panah kiri → foto sebelumnya
function galleryPrev() {
  setGalleryImg(currentImg - 1);
}

// Tombol panah kanan → foto berikutnya
function galleryNext() {
  setGalleryImg(currentImg + 1);
}


/* ══════════════════════════════
   BUKA DETAIL CAFE
══════════════════════════════ */
function openDetail(idx) {

  // Ambil data cafe berdasarkan nomor urut (idx)
  const cafe = CAFES[idx];
  const safeName = cafe.name.replace(/'/g, "\\'");

  // Set ulang gallery ke foto pertama
  totalImgs  = cafe.images.length;
  currentImg = 0;

  // Buat bintang rating
  // Contoh rating 4.5 → '★★★★½'
  let bintang = '';
  for (let i = 0; i < Math.floor(cafe.rating); i++) {
    bintang = bintang + '★';
  }
  if (cafe.rating % 1 >= 0.5) {
    bintang = bintang + '½';
  }

  // Buat HTML untuk info pills (jam, lokasi, harga)
  let pillsHTML = '';
  for (let i = 0; i < cafe.pills.length; i++) {
    const pill = cafe.pills[i];
    pillsHTML = pillsHTML + '<span class="info-pill"><i data-lucide="' + pill.i + '"></i>' + pill.t + '</span>';
  }

  // Buat HTML untuk daftar amenities (WiFi, Outlets, dll)
  let amenHTML = '';
  for (let i = 0; i < cafe.amenities.length; i++) {
    const amen = cafe.amenities[i];
    amenHTML = amenHTML +
      '<li class="amen-item">' +
        '<div class="amen-ico"><i data-lucide="' + amen.i + '"></i></div>' +
        '<span>' + amen.l + '</span>' +
        '<span class="amen-val">' + amen.v + '</span>' +
      '</li>';
  }

  // Buat HTML untuk review
  let revHTML = '';
  for (let i = 0; i < cafe.reviews.length; i++) {
    const rev = cafe.reviews[i];
    revHTML = revHTML +
      '<div class="rev-card">' +
        '<p class="rev-text">"' + rev.t + '"</p>' +
        '<div class="rev-name">— ' + rev.n + '</div>' +
      '</div>';
  }

  // Buat HTML untuk slide foto gallery
  let slidesHTML = '';
  for (let i = 0; i < cafe.images.length; i++) {
    const kelasTersembunyi = (i !== 0) ? 'hidden' : '';

    slidesHTML = slidesHTML +
      '<div class="gallery-main-img ' + kelasTersembunyi + '">' +
        '<img src="' + cafe.images[i] + '" alt="' + cafe.name + '">' +
      '</div>';
  }

  // Buat HTML untuk thumbnail foto
  let thumbsHTML = '';
  for (let i = 0; i < cafe.images.length; i++) {
    const kelasAktif = (i === 0) ? 'active' : '';

    thumbsHTML = thumbsHTML +
      '<div class="gallery-thumb ' + kelasAktif + '" onclick="setGalleryImg(' + i + ')">' +
        '<img src="' + cafe.images[i] + '" alt="' + cafe.name + '">' +
    '</div>';
}

  // Masukkan semua HTML ke dalam panel detail
  document.getElementById('dpanelBody').innerHTML =
    '<div class="dpanel-top">' +
      '<div class="gallery">' +
        '<div class="gallery-main">' +
          slidesHTML +
          '<div class="gallery-mascot">' +
            '<img src="mascotpeek.png" alt="koka">' +
          '</div>' +
          '<div class="gallery-arrows">' +
            '<button class="gallery-arrow" onclick="galleryPrev()">' +
              '<i data-lucide="chevron-left"></i>' +
            '</button>' +
            '<button class="gallery-arrow" onclick="galleryNext()">' +
              '<i data-lucide="chevron-right"></i>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="gallery-thumbs">' + thumbsHTML + '</div>' +
      '</div>' +
      '<div class="dpanel-info">' +
        '<h2>' + cafe.name + '</h2>' +
        '<div class="stars-row">' +
          '<span class="stars">' + bintang + '</span>' +
          '<span class="stars-num">' + cafe.rating + ' / 5</span>' +
        '</div>' +
        '<div class="info-pills">' + pillsHTML + '</div>' +
        '<p class="dpanel-desc">' + cafe.desc + '</p>' +
        '<ul class="amen-list">' + amenHTML + '</ul>' +
        '<button class="maps-btn" onclick="openMaps(\'' + safeName + '\')">' +
          '<i data-lucide="map-pin"></i> Open in Google Maps' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="rev-sec">' +
      '<h4>What People Say</h4>' +
      '<div class="rev-grid">' + revHTML + '</div>' +
    '</div>';

  // Tampilkan overlay
  document.getElementById('overlay').classList.add('open');

  // Matikan scroll halaman di belakang
  document.body.style.overflow = 'hidden';

  // Render icon Lucide yang baru dibuat
  lucide.createIcons();
}

// Tutup detail panel
function closeDetail() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Klik area gelap di luar panel → tutup
document.getElementById('overlay').addEventListener('click', function(e) {
  // e.target = elemen yang diklik
  // this = overlay itu sendiri
  // Kalau yang diklik adalah overlay-nya (bukan panel) → tutup
  if (e.target === this) {
    closeDetail();
  }
});


/* ══════════════════════════════
   BUKA GOOGLE MAPS
══════════════════════════════ */
function openMaps(namaCafe) {
  // encodeURIComponent → ubah spasi & karakter khusus jadi URL-safe
  // Contoh: "Mint & Co. Batam" → "Mint%20%26%20Co.%20Batam"
  const urlMaps = 'https://www.google.com/maps/search/' + encodeURIComponent(namaCafe + ' Batam');
  window.open(urlMaps, '_blank');
}


/* ══════════════════════════════
   FORM CONTACT
══════════════════════════════ */
function submitForm() {

  // Ambil isi setiap kolom form
  const nama  = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const tipe  = document.getElementById('cType').value;
  const pesan = document.getElementById('cMsg').value.trim();

  // Cek apakah ada yang kosong
  if (nama === '' || email === '' || tipe === '' || pesan === '') {
    alert('Please fill in all required fields.');
    return; // berhenti, jangan lanjut
  }

  // Cek format email — harus ada @ dan titik
  // Contoh valid: hello@koka.cafe
  // Contoh tidak valid: hellokoka, hello@, @koka
  const emailValid = email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
  if (!emailValid) {
    alert('Please enter a valid email address.');
    return;
  }

  // Kosongkan semua kolom form setelah berhasil
  document.getElementById('cName').value  = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cType').value  = '';
  document.getElementById('cMsg').value   = '';

  // Tampilkan pesan sukses
  const pesanSukses = document.getElementById('formOk');
  pesanSukses.classList.add('show');

  // Sembunyikan pesan sukses otomatis setelah 6 detik (6000 ms)
  setTimeout(function() {
    pesanSukses.classList.remove('show');
  }, 6000);
}


/* ══════════════════════════════
   BAYANGAN NAVBAR SAAT SCROLL
══════════════════════════════ */
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');

  // Kalau sudah scroll lebih dari 8px → tambah bayangan
  if (window.scrollY > 8) {
    navbar.classList.add('raised');
  } else {
    navbar.classList.remove('raised');
  }
});


/* ══════════════════════════════
   TEKAN ESC → TUTUP DETAIL
══════════════════════════════ */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeDetail();
  }
});


/* ══════════════════════════════
   INISIALISASI
   Jalankan saat halaman selesai dimuat
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
});
