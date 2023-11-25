// html'den leeman çağırma
const form = document.querySelector('form');
const main = document.querySelector('main');

fetch(
  'https://demo.sylius.com/api/v2/admin/product-variants?page=1&itemsPerPage=30',
  {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTg4NTIxNzAsImV4cCI6MTY5ODg1NTc3MCwicm9sZXMiOlsiUk9MRV9BRE1JTklTVFJBVElPTl9BQ0NFU1MiLCJST0xFX0FQSV9BQ0NFU1MiXSwidXNlcm5hbWUiOiJhcGkifQ.eS8Uvned7p2Sp2qy5yYUsMZcThoGQVmWX4s6ek3Te1TIbdHY3U3MQWnMjrdAXMFhNmovmb3cP7mJ-77_Vx7ePFgh_8uAH51e3JmBd9raJ8YN4yHrZwFYlBPUie9ArWxuDF-S-tTseIf8oDmGTv5YHkznkLUjGFnddH7asmu7E5Wod1bvkIf3VRb2sjxhH3D7Aywo6EKvmgG7T1mn67qteRBDxqU55qxDEe4U15lQguCvXaSQcdBNMQE3NNA397eg531mgRsOy2Q72e5FIexIryTh1Ry_VzM_5w_lhWlPEvgHCR82GiGl4-Y-5ttxcVjCXLBuLy0UJjqZL5zYpFKC9PVT52vOdrVMr-gUJ3GNjs2wORB-BdHKPsYkXfDlpWwvQj1gq5ykpddHXE234OJVXWP25SStg5jOovDOdAADkSGnfRpgCjw7G6_T8-SF-_Fkgz6sc4MW6TQ94d7roy_Nk_FY8DMf2YzjI0NnofcBJA_aEvHXV717Vn3F_W5jmSUQRA-bFoEPH5KI_5B4uoNNNbk6Zv28IEluK7Szxh1sL3E8oR1A5JBbpuNmdjw4k_DLxVueSEz5FkJoGmluARn0g-qBTpx23HMJ0kgI-mwnM5FQxfFW7JqmKFa2pQDCKpoOqDQQPvo-Gn6YXPl8QaZmW9cs-L1W2xaT4KWwdK_ZAyI',
    },
  }
).then((res) => console.log(res));

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
