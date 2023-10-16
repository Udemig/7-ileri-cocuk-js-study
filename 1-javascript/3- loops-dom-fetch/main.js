//! switch case:
// bir değişkenin alabileceği farklı değerlere
//  göre işlemler yapmay yarar
var day = 3;

// switch (day) {
//   case 1:
//     alert('Bugün pazartesi');
//     break;
//   case 2:
//     alert('Bugün salı');
//     break;
//   case 3:
//     alert('Bugün çarşamba');
//     break;
//   case 4:
//     alert('Bugün perşembe');
//     break;
//   case 5:
//     alert('Bugün cuma');
//     break;
//   case 6:
//     alert('Bugün cumartesi');
//     break;
//   case 7:
//     alert('Bugün pazar');
//     break;
//   // defaul değeri eğerki izldeidğimiz değişken
//   // yukarıdaki değerlerden birine sahip olmazsa çalışır
//   default:
//     alert('Gün bulunamadı');
// }

//! Döngüler
// Bir işlemi bir çok kez tekrar ediyorsak
// javascript de en iyi çözüm döngülerdir

//!For
// for (var i = 0; i < 1000; i++) {
//   // her döngüde çalışıcak kodlar
//   document.write('Döngü çalıştı ' + i + '<br>');
// }

// for'un diziler ile kullanımı
// var kullanici = ['ahmet', 'mehmet', 'ali', 'ebubekir', 'fevzi'];

// for (var i = 0; i < kullanici.length; i++) {
//   document.write(kullanici[i] + '<br>');
// }

// //! while döngüsü

// // while(kosul){
// //      çalışacak işlemler
// // }
// // do{
// //     çalışacak işlemler
// // }while(kosul)

// // 1- yöntem
// var sayac = 0;
// while (sayac < 55) {
//   // ekran rastgele sayı yazar
//   document.write(Math.random() * 10000 + '<br>');
//   // her işlemin ardında sayacı bir arttır
//   sayac++;
// }

// // 2- yöntem
// var sayac2 = 0;
// do {
//   // ekran rastgele sayı yazar
//   document.write(Math.random() * 10000 + '<br>');
//   // her işlemin ardında sayacı bir arttır
//   sayac++;
// } while (sayac < 55);

//! DOM (Document Object Model)
// javasript tarfından html'e müdahale etmeye yarıyor

//? Seçiciler
// Html'deki elemanlara js'den erişmemizi sağlar
// document.getElementById() > id'sine göre seçer
// document.getElementsByClassName() > aynı class'a sahip hepsini seçer
// document.getElementsByTagName() > aynı etiket'3 sahip hepsini seçer
// document.querySelector() > css seçicisine göre  seçer

console.log(document.getElementById('parag'));

console.log(document.getElementsByClassName('form'));

console.log(document.getElementsByTagName('ul'));

console.log(document.querySelector('#parag'));

// elemanın yazı içerğine müdahale etme
var baslik = document.querySelector('h1');

baslik.innerText = 'Toyata Supra';
baslik.innerHTML = '<i>Toyata Supra</i>';

// elemanın stillerini değiştirme
baslik.style.backgroundColor = 'red';
baslik.style.color = 'white';
baslik.style.borderRadius = '5px';
baslik.style.padding = '10px';

// class üzerinde oynmama yapma
var parag = document.querySelector('p');

// kaldırma
parag.classList.remove('blue');
// yeni ekleme
parag.classList.add('green');
parag.classList.add('border');

//! Olay izleyicileri
const btn = document.querySelector('#btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// 1- hangi olayı izleyecek
// 2- olay gerçekleşince hangi fonksyon çalışacak
btn.addEventListener('click', ekranaYaz);

function ekranaYaz() {
  // html'e eleman gönderme
  ul.innerHTML += `<li>${input.value}</li>`;
}
