// html'den gelenler
const menuList = document.querySelector('.menu-area');

// sayfanın yğklenme anını izleme
document.addEventListener('DOMContentLoaded', getMenu);

// ürünler verisine bütün fonksiyonlar eşebilecek
var menu = [];

//! fetch
// veritabanlarına istek atmamızı sağlar
// try-catch > hata ayıklama
async function getMenu() {
  try {
    // api'a istek atma
    var res = await fetch('db.json');
    // json formatındaki veriliri js objesine çevir
    var data = await res.json();
    // ürünler verisini güncelle
    menu = data.menu;
    // api'den gelen ürünleri ekrana bas
    renderMenu(data.menu);
  } catch (err) {
    // try kısmındaki kodda hata olursa çalışır
    console.log('Veriitabanı ile iletişime geçilirken hata oluştu');
  }
}

// ürünleri ekena basıcak
function renderMenu(data) {
  // diziyi dönüyoruz
  var menuHtml = data.map(function (item) {
    // herbir dizi elemanı için html kardı oluştur
    return `
     <div id="card">
        <img src="${item.img}" />
        <div class="card-info">
          <div class="name">
            <h3>${item.title}</h3>
            <p>$ ${item.price}</p>
          </div>
          <p class="desc">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
  });

  //   diziyi stringe çevirme
  menuHtml = menuHtml.join(' ');

  //   oluşan kartları html'e gönderme
  menuList.innerHTML = menuHtml;
}

// bütüb butonları çağırma
var buttons = document.querySelectorAll('.filter-btn');

// hepsine tıklanma anaını izle
buttons.forEach(function (btn) {
  btn.addEventListener('click', filterCategory);
});

// ürünleri filtreleler
function filterCategory(e) {
  // seçilen kategori
  var selected = e.target.dataset.category;

  // seçilen kategoriyle eşeleşen bütün ürünleri al
  var filtred = menu.filter(function (item) {
    return item.category === selected;
  });

  if (selected == 'all') {
    // hepsi seçilirse bütün ürünleri nas
    renderMenu(menu);
  } else {
    // filtrelenmiş ürünleri bas
    renderMenu(filtred);
  }
}

//  OOP (Object Orianted Programming)

// ilkel değerler
var bos;

var yazi = 'selam';

var sayi = 10;

var ehliyet = true;

// nesneler
var nesne = {
  name: 'Ahmet',
};

var liste = ['selam', 'naber', 'nasılsın'];

var tarih = new Date();

console.log(typeof bos);
console.log(typeof yazi);
console.log(typeof sayi);
console.log(typeof ehliyet);
console.log(typeof nesne);
console.log(typeof liste);
console.log(typeof tarih);
console.log(typeof function () {});
