
/* ══════════════════════════════
   DATA
══════════════════════════════ */
const CAFES = [
  {
    name: "Brew by Dy's", bg: 'ci1', icon: 'coffee', rating: 4.8,
    pills: [{i:'clock',t:'8AM–10PM'},{i:'map-pin',t:'Pasir Putih'},{i:'wallet',t:'~Rp 35K avg'}],
    desc: 'A minimalist industrial-style cafe that doubles as a creative studio. Equipped with blazing-fast fiber optic WiFi and outlets at every desk. Lo-fi beats keep you in flow. Popular with developers, designers, and freelancers.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~150 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 18K – 70K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'8:00 AM – 10:00 PM'}
    ],
    images: ['cafe/brew1.jpeg','cafe/brew2.jpeg','cafe/brew3.jpeg','cafe/brew4.jpeg'],
    reviews: [
      {t:"Best WiFi I've ever had in a cafe. Downloaded a 2GB file in minutes!", n:'Rizky A.'},
      {t:"Love the aesthetic. Great place to grind on a deadline.", n:'Sena W.'}
    ]
  },
  {
    name: "Fey's Patisserie", bg: 'ci2', icon: 'leaf', rating: 4.8,
    pills: [{i:'clock',t:'10AM–10PM'},{i:'map-pin',t:'Nagoya Hill'},{i:'wallet',t:'~Rp 20K min'}],
    desc: 'A botanical-themed cafe surrounded by indoor plants and soft natural lighting. A quiet policy is enforced — making it feel like a cozy reading room. Beloved by students who need deep-focus sessions.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~48-52 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 15K – 43K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 10:00 PM'}
    ],
    images: ['cafe/fey1.jpeg', 'cafe/fey2.jpeg', 'cafe/fey3.jpeg', 'cafe/fey4.jpeg'],
    reviews: [
      {t:"Finally a cafe where I can hear myself think. This is my new office!", n:'Dara L.'},
      {t:"Prices are super fair for the quality. A genuine gem.", n:'Andi T.'}
    ]
  },
  {
    name: 'Goffee Batam', bg: 'ci3', icon: 'anchor', rating: 4.6,
    pills: [{i:'clock',t:'7AM–12AM'},{i:'map-pin',t:'Harbour Bay'},{i:'wallet',t:'~Rp 25K min'}],
    desc: 'Spacious waterfront cafe with panoramic views of the Batam strait. Checks all boxes — strong WiFi, abundant power outlets, and a budget-friendly menu. High ceilings and open layout make it an all-day work haven.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~42-51 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 18K – 75K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'9:00 AM – 12:00 AM'}
    ],
    images: ['cafe/goffee1.jpeg', 'cafe/goffee2.jpeg', 'cafe/goffee3.jpeg','cafe/goffee4.jpeg'],
    reviews: [
      {t:"The view while working is absolutely unbeatable.", n:'Felix O.'},
      {t:"Can't beat this price for this quality.", n:'Nisa R.'}
    ]
  },
  {
    name: 'Sharlotte Cafe', bg: 'ci4', icon: 'home', rating: 4.7,
    pills: [{i:'clock',t:'9AM–10PM'},{i:'map-pin',t:'Batam Centre'},{i:'wallet',t:'~Rp 30K min'}],
    desc: 'Warm terracotta interiors with plush seating and thoughtful acoustics. Designated no-phone zones and an impressive ratio of plug points to seats. Perfect for calm, focused writing or tackling big projects.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~2-8 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 12K – 72K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'unavailable'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 10:00 AM'}
    ],
    images: ['cafe/sharlotte1.jpeg', 'cafe/sharlotte2.jpeg', 'cafe/sharlotte3.jpeg', 'cafe/sharlotte4.jpeg'],
    reviews: [
      {t:"The no-phone zone is a game changer for focus.", n:'Maya K.'},
      {t:"Seats are genuinely comfortable for hours of work.", n:'Bimo P.'}
    ]
  },
  {
    name: 'Kobie Coffee Tiban', bg: 'ci5', icon: 'sparkles', rating: 4.8,
    pills: [{i:'clock',t:'10AM–11PM'},{i:'map-pin',t:'Batu Aji'},{i:'wallet',t:'~Rp 18K min'}],
    desc: 'Student hotspot with daily promos, loyalty card perks, and consistently strong WiFi. An eclectic aesthetic and a community board for local events. Warm evening vibe suits both social and focused work.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~16-21 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 12K – 52K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'10:00 AM – 11:00 AM'}
    ],
    images: ['cafe/kobie1.jpeg', 'cafe/kobie2.jpeg', 'cafe/kobie3.jpeg', 'cafe/kobie4.jpeg'],
    reviews: [
      {t:"Best student budget cafe in the city. Promos every day!", n:'Hana S.'},
      {t:"WiFi held up through 3 hours of Zoom calls.", n:'Wira D.'}
    ]
  },
  {
    name: 'Local Cafe', bg: 'ci6', icon: 'droplets', rating: 4.4,
    pills: [{i:'clock',t:'7AM–11PM'},{i:'map-pin',t:'Nongsa Area'},{i:'wallet',t:'~Rp 22K min'}],
    desc: 'KOKA\'s all-time top-rated cafe. Combines everything a remote worker could want: near-silence, 200 Mbps fiber WiFi, outlets at every seat, and prices that make sense. Fresh, airy, and calming interior.',
    amenities: [
      {i:'wifi',   l:'WiFi Speed',    v:'~23-28 Mbps fiber'},
      {i:'coins',   l:'Price Range',  v:'Rp 23K – 60K per item'},
      {i:'leaf',    l:'Outdoor area',         v:'available'},
      {i:'clock',  l:'Hours',         v:'9:00 AM – 10:30 AM'}
    ],
    images: ['cafe/local1.jpeg', 'cafe/local2.jpeg', 'cafe/local3.jpeg', 'cafe/local4.jpeg'],
    reviews: [
      {t:"This is THE place. I've been coming here for 6 months straight.", n:'Kevin R.'},
      {t:"Perfect in every way. Quiet, fast WiFi, beautiful, affordable.", n:'Laila N.'}
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
  var semuaHalaman = document.querySelectorAll('.page');

  // Sembunyikan semua halaman satu per satu
  for (var i = 0; i < semuaHalaman.length; i++) {
    semuaHalaman[i].classList.remove('active');
  }

  // Ambil semua link di navbar
  var semuaLink = document.querySelectorAll('.nav-links a');

  // Hapus style aktif dari semua link navbar
  for (var i = 0; i < semuaLink.length; i++) {
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
var activeFilters = [];

function toggleFilter(tag, btn) {

  // Kalau yang diklik tombol "All Cafes"
  if (tag === 'all') {

    // Kosongkan semua filter
    activeFilters = [];

    // Hapus style aktif dari semua tombol filter
    var semuaTombol = document.querySelectorAll('.f-btn');
    for (var i = 0; i < semuaTombol.length; i++) {
      semuaTombol[i].classList.remove('on');
    }

    // Kasih style aktif ke tombol "All"
    btn.classList.add('on');

  } else {

    // Hapus style aktif dari tombol "All"
    document.getElementById('f-all').classList.remove('on');

    // Cek apakah filter ini sudah ada di dalam array
    var posisi = activeFilters.indexOf(tag);

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
  var jumlahTerlihat = 0;

  // Ambil semua kartu cafe
  var semuaCard = document.querySelectorAll('.cafe-card');

  for (var i = 0; i < semuaCard.length; i++) {

    var card = semuaCard[i];

    // Ambil tags dari attribute data-tags di HTML
    // Contoh: data-tags="wifi,plug" → ['wifi', 'plug']
    var cardTags = card.dataset.tags.split(',');

    // Tentukan apakah card ini harus ditampilkan
    var tampilkan = true;

    // Kalau tidak ada filter aktif → tampilkan semua
    if (activeFilters.length === 0) {
      tampilkan = true;
    } else {
      // Cek apakah card ini punya SEMUA filter yang aktif
      for (var j = 0; j < activeFilters.length; j++) {
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
  var tulisanJumlah = document.getElementById('filterCount');
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
var currentImg = 0;
var totalImgs  = 0;

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
  var semuaSlide = document.querySelectorAll('.gallery-main-img');
  for (var i = 0; i < semuaSlide.length; i++) {
    semuaSlide[i].classList.add('hidden');
  }

  // Tampilkan hanya slide yang dipilih
  semuaSlide[currentImg].classList.remove('hidden');

  // Update thumbnail — hapus aktif dari semua, kasih ke yang dipilih
  var semuaThumb = document.querySelectorAll('.gallery-thumb');
  for (var i = 0; i < semuaThumb.length; i++) {
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
  var cafe = CAFES[idx];

  // Set ulang gallery ke foto pertama
  totalImgs  = cafe.images.length;
  currentImg = 0;

  // Buat bintang rating
  // Contoh rating 4.5 → '★★★★½'
  var bintang = '';
  for (var i = 0; i < Math.floor(cafe.rating); i++) {
    bintang = bintang + '★';
  }
  if (cafe.rating % 1 >= 0.5) {
    bintang = bintang + '½';
  }

  // Buat HTML untuk info pills (jam, lokasi, harga)
  var pillsHTML = '';
  for (var i = 0; i < cafe.pills.length; i++) {
    var pill = cafe.pills[i];
    pillsHTML = pillsHTML + '<span class="info-pill"><i data-lucide="' + pill.i + '"></i>' + pill.t + '</span>';
  }

  // Buat HTML untuk daftar amenities (WiFi, Outlets, dll)
  var amenHTML = '';
  for (var i = 0; i < cafe.amenities.length; i++) {
    var amen = cafe.amenities[i];
    amenHTML = amenHTML +
      '<li class="amen-item">' +
        '<div class="amen-ico"><i data-lucide="' + amen.i + '"></i></div>' +
        '<span>' + amen.l + '</span>' +
        '<span class="amen-val">' + amen.v + '</span>' +
      '</li>';
  }

  // Buat HTML untuk review
  var revHTML = '';
  for (var i = 0; i < cafe.reviews.length; i++) {
    var rev = cafe.reviews[i];
    revHTML = revHTML +
      '<div class="rev-card">' +
        '<p class="rev-text">"' + rev.t + '"</p>' +
        '<div class="rev-name">— ' + rev.n + '</div>' +
      '</div>';
  }

  // Buat HTML untuk slide foto gallery
  var slidesHTML = '';
  for (var i = 0; i < cafe.images.length; i++) {
    var kelasTersembunyi = (i !== 0) ? 'hidden' : '';

    slidesHTML = slidesHTML +
      '<div class="gallery-main-img ' + kelasTersembunyi + '">' +
        '<img src="' + cafe.images[i] + '" alt="' + cafe.name + '">' +
      '</div>';
  }

  // Buat HTML untuk thumbnail foto
  var thumbsHTML = '';
  for (var i = 0; i < cafe.images.length; i++) {
    var kelasAktif = (i === 0) ? 'active' : '';

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
            '<div class="gallery-mascot-ph">mascot</div>' +
            '<!-- <img src="mascot.png" alt=""> -->' +
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
        '<button class="maps-btn" onclick="openMaps(\'' + cafe.name + '\')">' +
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
  var urlMaps = 'https://www.google.com/maps/search/' + encodeURIComponent(namaCafe + ' Batam');
  window.open(urlMaps, '_blank');
}


/* ══════════════════════════════
   FORM CONTACT
══════════════════════════════ */
function submitForm() {

  // Ambil isi setiap kolom form
  var nama  = document.getElementById('cName').value.trim();
  var email = document.getElementById('cEmail').value.trim();
  var tipe  = document.getElementById('cType').value;
  var pesan = document.getElementById('cMsg').value.trim();

  // Cek apakah ada yang kosong
  if (nama === '' || email === '' || tipe === '' || pesan === '') {
    alert('Please fill in all required fields.');
    return; // berhenti, jangan lanjut
  }

  // Cek format email — harus ada @ dan titik
  // Contoh valid: hello@koka.cafe
  // Contoh tidak valid: hellokoka, hello@, @koka
  var emailValid = email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
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
  var pesanSukses = document.getElementById('formOk');
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
  var navbar = document.getElementById('mainNav');

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

