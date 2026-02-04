const waifus = [
  {
    id: "rem",
    name: "Rem",
    anime: "re:zero",
    genre: "fantasy",
    img: "img/rem.jpg"
  },
  {
    id: "asuna",
    name: "Asuna Yuuki",
    anime: "sword art online",
    genre: "action",
    img: "img/asuna.jpg"
  },
  {
    id: "mikasa",
    name: "Mikasa Ackerman",
    anime: "attack on titan",
    genre: "action",
    img: "img/mikasa.jpg"
  },
  {
    id: "mai",
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  },
  {
    id: "cocoa",
    name: "Cocoa Hoto",
    anime: "Gochuumon wa Usagi Desu ka?",
    genre: "Slice of life",
    img: "img/Cocoa.jpg"
  },
  {
    id: "momochi",
    name: "Momochi Kiruya",
    anime: "Princess Connect Re:Dive",
    genre: "Fantasy",
    img: "img/kiruya.jpg"
  },
  {
    id: "rika",
    name: "Rikka Takanashi",
    anime: "Chuunibyou demo Koi ga Shitai!",
    genre: "romance",
    img: "img/rika.jpeg"
  },
  {
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  },
  {
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  },
  {
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  },
  {
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  },
  {
    name: "Mai Sakurajima",
    anime: "bunny girl senpai",
    genre: "romance",
    img: "img/Mai-San.jpg"
  }
];

const grid = document.getElementById("waifuGrid");
const chips = document.querySelectorAll(".chip");

function renderWaifus(filter) {
  grid.innerHTML = "";

  waifus
    .filter(w => filter === "all" || w.genre === filter)
    .forEach(w => {
      grid.innerHTML += `
        <div class="card">
          <img src="${w.img}">
          <div class="content">
            <h3>${w.name}</h3>
            <p>${w.anime} • ${w.genre}</p>
          </div>
        </div>
      `;
    });
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderWaifus(chip.dataset.genre);
  });
});

renderWaifus("all");
function renderWaifus(filter) {
  grid.innerHTML = "";

  waifus
    .filter(w => filter === "all" || w.genre === filter)
    .forEach(w => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${w.img}">
        <div class="content">
          <h3>${w.name}</h3>
          <p>${w.anime}</p>
          <span class="badge">${w.genre}</span>
        </div>
      `;

      // INI INTINYA
      card.addEventListener("click", () => {
        window.location.href = `detail.html?id=${w.id}`;
      });

      grid.appendChild(card);
    });
}

// PASTI ADA INI
renderWaifus("all");