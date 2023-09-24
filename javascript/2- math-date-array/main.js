// //! Math Nesnesi
// // sayılar üzerinde hesaplamalar yapmamıza
// // yarayan method ve değişkenler içeren
// // yerleşik bir js objesi

// document.write('math.pi: ' + Math.PI + '<br>');
// document.write('math.e: ' + Math.E + '<br>');

// var deger = 9.14565243;

// document.write('değer: ' + deger + '<br>');

// // .dan sonra kaç basamak olucağını belirler
// document.write('deger.tofixed: ' + deger.toFixed(2) + '<br>');

// // en yakın basamağa yuvarlar
// document.write('math.round: ' + Math.round(deger) + '<br>');

// // bir üst basama yuvarlar
// document.write('math.ceil: ' + Math.ceil(3.1) + '<br>');

// // bir alt basama yuvarlar
// document.write('math.floor: ' + Math.floor(3.99) + '<br>');

// // pow: sayının üssünü alma
// document.write('math.pow: ' + Math.pow(2, 10) + '<br>');

// // max: verilen sayılardan en büyüğünü getirir
// document.write('math.max: ' + Math.max(6, 102, 83, 193, 65) + '<br>');

// // min: verilen sayılardan en küçğünü getirir
// document.write('math.min: ' + Math.min(6, 102, 83, 193, 65) + '<br>');

// // random: 0 ile 1 arasında rastgele bir sayı üreten
// document.write('math.random: ' + Math.round(Math.random() * 100));

// //! Dizi
// bir grup elemanı bir arada tutmak
// dizi methodları ile yönetmemizi sağlayan
// bir kavascript liste yapısı

const arabalar = ['Nissan', 'Toyota', 'Porsche', 'BMW'];

document.write('Arabalar: ' + arabalar + '<br>');

// dizi uzunluğuna erişme
document.write('length: ' + arabalar.length + '<br>');

// isteğimiz sıradaki elemana erişme
document.write('arabalar[3]: ' + arabalar[3] + '<br>');

// diznin sonuna eleman eekler
arabalar.push('Mercedes');
document.write('.push(): ' + arabalar + '<br>');

// dizinin başına eleman ekleme
arabalar.unshift('Ferrari');
document.write('.unshift(): ' + arabalar + '<br>');

// dizinin sonunda eleman çıkarara
arabalar.pop();
document.write('.pop(): ' + arabalar + '<br>');

// dizinin sonunda eleman çıkarara
arabalar.shift();
document.write('.shift(): ' + arabalar + '<br>');

// Gelişmiş diziyi dönen methodlar
const sayilar = [1, 5, 87, 93, 12, 42];

//!foeach
// dizideki herbir eleman için fonksiyon çalıştırma
sayilar.forEach(ekranaYaz);

function ekranaYaz(sayi) {
  document.write(sayi + ' tespit edildi' + '<br>');
}

//! map
// diziyi dönmeye yarar
// foreachten farkı
// izideki elemanları değiştitriri
var yeniSayilar = sayilar.map(function (sayi) {
  return sayi * 2;
});

document.write('yeniSayılar: ' + yeniSayilar + '<br>');

// ! filter
// diziyi dnüp istedğimiz koşula uyan
// elamanları yeni bir diziye aktarır
var filtreliSayilar = sayilar.filter(kosulFonk);

function kosulFonk(sayi) {
  return sayi < 80;
}

document.write('filtreliSayilar: ' + filtreliSayilar + '<br>');

//! sort
// diyi alfabetik veya sayısal olartak sırlamaya yarar
document.write('sort: ' + arabalar.sort() + '<br>');

// sayılarda sort
sayilar.sort(function (a, b) {
  return a - b;
});

document.write('sort: ' + sayilar + '<br>');

//! reverse
// diziyi ters çevirir
document.write('reverse: ' + arabalar.reverse() + '<br>');

//! JS Date nesnesi
// tarih ile alakalı methodlar içeren bir obje

var tarih = new Date();

document.write(tarih + '<br>');

// tarihin formatını değiştirme methodları
document.write(tarih.toLocaleDateString() + '<br>');
document.write(tarih.toLocaleString() + '<br>');
document.write(tarih.toDateString() + '<br>');
document.write(tarih.toISOString() + '<br>');
document.write(tarih.toLocaleTimeString() + '<br>');

// tarihteki belirli kısmı almaya yarayan
// saniye cinsinden zamanı beliler
document.write('.getTime ' + tarih.getTime() + '<br>');

// anlık saatin saniyesini  verir
document.write('.getSeconds ' + tarih.getSeconds() + '<br>');

document.write('.getTime ' + tarih.getTime() + '<br>');

document.write('.getMinutes ' + tarih.getMinutes() + '<br>');

document.write('.getHours ' + tarih.getHours() + '<br>');

document.write('.getDay ' + tarih.getDay() + '<br>');

document.write('.getMonth ' + (tarih.getMonth() + 1) + '<br>');

// zamanı değiştirme
tarih.setMonth(1);
tarih.setFullYear(2090);
tarih.setHours(8);

document.write('.setFullYear ' + tarih + '<br>');
document.write('.setHours ' + tarih + '<br>');
