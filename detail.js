const params = new URLSearchParams(location.search);
const id = params.get("id");

const infoboxEl = document.getElementById("infobox");
const titleEl = document.getElementById("title");
const sectionsEl = document.getElementById("sections");
const tocEl = document.getElementById("toc");

if (!window.characters) {
  titleEl.textContent = "ERROR";
  infoboxEl.innerHTML = "<p>data.js tidak kebaca</p>";
  tocEl.style.display = "none";
  sectionsEl.innerHTML = "<p>cek urutan script di detail.html</p>";
} else {
  const char = characters.find(c => c.id === id);

  if (!char) {
    titleEl.textContent = "Character not found";
    infoboxEl.innerHTML = "<p>data tidak ditemukan</p>";
    tocEl.style.display = "none";
    sectionsEl.innerHTML = "";
  } else {
    titleEl.textContent = char.name;

    infoboxEl.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h2>${char.name}</h2>
      <table>
        <tr><td>Anime</td><td>${char.anime || "-"}</td></tr>
        <tr><td>Birthday</td><td>${char.birthday || "-"}</td></tr>
        <tr><td>Age</td><td>${char.age || "-"}</td></tr>
        <tr><td>Height</td><td>${char.height || "-"}</td></tr>
        <tr><td>Status</td><td>${char.status || "-"}</td></tr>
        <tr><td>Job</td><td>${char.job || "-"}</td></tr>
        <tr><td>Affiliation</td><td>${char.affiliation || "-"}</td></tr>
        <tr><td>Relationship</td><td>${char.relationship || "-"}</td></tr>
        <tr><td>School Year</td><td>${char.schoolYear || "-"}</td></tr>
        <tr><td>Voice</td><td>${char.voice || "-"}</td></tr>
        <tr><td>Seiyuu</td><td>${char.seiyuu || "-"}</td></tr>
      </table>
    `;

    const sectionOrder = [
      "bio",
      "appearance",
      "personality",
      "history",
      "relationships",
      "etymology",
      "quotes",
      "music",
      "trivia",
      "gallery",
      "references",
      "categories"
    ];

    const tocLinks = [];
    const sectionHTML = [];

    sectionOrder.forEach(key => {
      const value = char[key];
      if (!value) return;

      const title = key.charAt(0).toUpperCase() + key.slice(1);

      tocLinks.push(`<a href="#${key}">${title}</a>`);

      if (Array.isArray(value)) {
        if (key === "quotes") {
          sectionHTML.push(`
            <section class="section" id="${key}">
              <h3>${title}</h3>
              <ul class="quote-list">
                ${value.map(q => `<li>"${q}"</li>`).join("")}
              </ul>
            </section>
          `);
        }
        else if (key === "gallery") {
          sectionHTML.push(`
            <section class="section" id="${key}">
              <h3>${title}</h3>
              <div class="gallery">
                ${value.map(img => `<img src="${img}" alt="gallery">`).join("")}
              </div>
            </section>
          `);
        }
        else if (key === "categories") {
          sectionHTML.push(`
            <section class="section" id="${key}">
              <h3>${title}</h3>
              <div class="categories">
                ${value.map(c => `<span class="category">${c}</span>`).join("")}
              </div>
            </section>
          `);
        }
        else {
          sectionHTML.push(`
            <section class="section" id="${key}">
              <h3>${title}</h3>
              <ul>
                ${value.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </section>
          `);
        }
      } else {
        sectionHTML.push(`
          <section class="section" id="${key}">
            <h3>${title}</h3>
            <p>${value}</p>
          </section>
        `);
      }
    });

    tocEl.innerHTML = `
      <div class="toc-title">Contents</div>
      ${tocLinks.join("")}
    `;

    sectionsEl.innerHTML = sectionHTML.join("");
  }
}
