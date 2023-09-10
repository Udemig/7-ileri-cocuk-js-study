// number
// var oyuncu_puan = 1000;

// // string
// var oyuncu_ismi = 'ahmet';

// // boolean
// var oyunu_bitirdimi = true;

// // array
// var seviyeler = [1, 2, 3, 4, 6, 7, 8, 9];

// // object
// var dusman = {
//   isim: 'Greg',
//   can: 960,
//   hasar: 120,
//   boss: false,
//   saldir: function () {
//     document.write('Kılıcını savurdu');
//   },
// };

// //  Operatöreler
// // + - / * %

// var sayi1 = 40;
// var sayi2 = 10;

// // toplama
// document.write(sayi1 + sayi2 + '<br>');

// // cıkarma
// document.write(sayi1 - sayi2 + '<br>');

// // carpma
// document.write(sayi2 * sayi2 + '<br>');

// // bolme
// document.write(sayi1 / sayi2 + '<br>');

// // mod(bölümden kalan)
// document.write((sayi1 % sayi2) + '<br>');

// // atama operatörleri
// var koyun = 30;

// // 1 arttırma
// koyun++;
// document.write('++', koyun + '<br>');

// // 1 azaltma
// koyun--;
// document.write('--', koyun + '<br>');

// // istedğimi değeri ekleme
// koyun += 10;
// document.write('+=', koyun + '<br>');

// // istedğimi değeri azaltma
// koyun -= 20;
// document.write('-=', koyun + '<br>');

// // istedğimi değeri çarpma
// koyun *= 3;
// document.write('*=', koyun + '<br>');

// // istedğimi değeri bölme
// koyun /= 4;
// document.write('/=', koyun + '<br>');

// // Karşılaştırma operatörleri
// // <
// // >
// // <=
// // >=
// // ==

// /*
//  ! Koşullar
//  * bir durumu kontrol etmeye yarar
//  * ve durumun sonucuna göre
//  * işlemler gerçekleştirmek için kullanılır
//  ? if(kosul){çalışıcak kodlar}
// */

// var yas = 32;

// if (yas > 18) {
//   // yukarıdaki koşuldan geçese burası çalışır
//   document.write('Yaş 18 den büyüktür' + '<br>');
// } else {
//   // değilse bu kodlar çalışır
//   document.write('Yaşı 18 den küçüktür');
// }

// var sayi = -1;

// if (sayi > 0) {
//   // sayı 0 dan büyükse çalılşır
//   document.write('Sayı pozitiftir' + '<br>');
// } else if (sayi == 0) {
//   // sayı 0 a eşitse
//   document.write('Sayı 0dır ' + '<br>');
// } else {
//   // sayı hem 0 dan büyük değil hemde 0 a eşit değilse
//   document.write('SAYI Negatiftir' + '<br');
// }

/*
 * Fonksiyon
 * belirli bir görevi yerine getiren
 * yeniden kullanılabilen kod blokları
 * function anahatar kelmeisinin yanına fonksiyonuna adını yazarız
 * adı: görevi tanımalayan bir resim
 */

// fonksiyon tanımlama
function ekranaYaz() {
  // fonksiyon çağrılınca çalışıcak kodlar
  document.write('Fonksiyon tetiklendi....' + '<br>');
}

// fonksiyonu çağırma
ekranaYaz();
ekranaYaz();
ekranaYaz();

/*
 * Fonksiyon Parametreleri:
 ? fonksiyonu yeniden kullanılabilir yapar
 * fonksiyonun çalışırken dışarıdan veri alamasını sağlar
 * pramtreler () alınır ve gönderilir
 */

function ekranaYazV2(metin) {
  document.write(metin, '<br>');
}

// fonksiyonu çağırırkne parametre gönderme
ekranaYazV2('Bu metni parametre ile gönderdim');
ekranaYazV2('Yeni paragraf alanı');
ekranaYazV2('Merhaba nbasılsın ? ');

// iki sayıyı parametre olarak alıp
// büyük olanı ekran yazan bir fonksiyon yazınız
// ve fonksiyonu çalıştırp 2 sayı gönderiniz

//! Objeler
// bir eleman hakkında birden falza bilgiyi depolamak için kullanır
var car = {
  // anahtar:değer,
  marka: 'Nissan',
  model: 'GT-R',
  renk: 'siyah',
  km: 92000,
  kazalı_mı: false,
  hizlan: function () {
    document.write('Nissan hızlanıyor....' + '<br>');
  },
  vites_degistir: function (vites) {
    document.write(vites + ' vitese geçildi');
  },
};

// objenin değerlerine erişme
console.log(car.marka);
console.log(car.model);
console.log(car.km);

car.hizlan();
car.vites_degistir(4);

//! metinler üzründe kullanılan metinler
var metin = 'Selam, bugün hava çok bulutlu gözküyor..';
var metin2 = 'Dışarıya çıklaım mı???';

console.log('Krakter:' + metin.length);

// merindeki kelime kaçıncı sırada
console.log(metin.indexOf('çok'));

// metinde bir parçayı kesme
console.log(metin.slice(0, 17));

// merinden bir kelimeye değiştirme
console.log(metin.replace('bulutlu', 'güneşli'));

// bütün harfleri büyük yazma
console.log(metin.toUpperCase());

// bütün harfleri KÜÇÜK yazma
console.log(metin.toLowerCase());

// İKİ METNİ BİLEŞTİRME
console.log(metin.concat(metin2));
