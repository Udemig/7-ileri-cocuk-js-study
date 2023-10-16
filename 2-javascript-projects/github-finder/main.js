// html'den leeman çağırma
const form = document.querySelector('form');
const main = document.querySelector('main');

// formun gönderilme olayını izleme
form.addEventListener('submit', getInput);

//!ekrana sonuöaları basan fonksiyon
function renderProfile(user) {
  main.innerHTML = `
    <section id="left">
        <img
          src="${user.avatar_url}"
        />
        <a href="${user.html_url}" target="_blank">Profili Göster</a>
      </section>

      <section id="right">
        <div>
          <span>Açık Repolar: ${user.public_repos}</span>
          <span>Açık Gistler: ${user.public_gists}</span>
          <span>Takipçiler: ${user.followers}</span>
          <span>Takip Edilenler: ${user.following}</span>
        </div>
        <ul>
          <li>Hakkında: ${user.bio}</li>
          <li>Şirket: ${user.company}</li>
          <li>Website: ${user.blog}</li>
          <li>Konum: ${user.location}</li>
          <li>Hesap Oluşturma: ${user.created_at}</li>
        </ul>
      </section>
    `;
}

//! kullanıcı adına göre veriatabınına istek atar
function getInput(event) {
  event.preventDefault();
  // formdan kullanıcı ismine erişme
  const username = event.target[0].value;

  //  veritabanında kullanıcı için istek atma
  fetch(`https://api.github.com/users/${username}`)
    //  gelen cevabı işle
    .then((res) => res.json())
    // veriyi ekrana yaz
    .then((data) => renderProfile(data));
}
