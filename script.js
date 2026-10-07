/*
  ==========================================================
  ADOPT ME HALLOWEEN UPGRADER
  ==========================================================

  ВАЖНО:
  Все питомцы и зелья находятся в массиве ITEMS ниже.

  Чтобы добавить свою картинку и свою цену,
  меняй только:

    image: "images/my-pet.png"
    price: 1250

  Примеры путей:

    "images/dog.png"
    "images/unicorn.webp"
    "https://site.com/pet.png"

  Для GitHub Pages удобнее всего:

    1. создать папку images
    2. загрузить туда свои картинки
    3. в image указать:
       "images/filename.png"
*/


const ITEMS = {

  pet: [

    {
      id: "dog",
      name: "Dog",
      rarity: "COMMON",
      price: 100,
      image: "images/pet-dog.png",
      fallback: "🐶",
      halloween: false
    },

    {
      id: "cat",
      name: "Cat",
      rarity: "COMMON",
      price: 120,
      image: "images/pet-cat.png",
      fallback: "🐱",
      halloween: false
    },

    {
      id: "bunny",
      name: "Bunny",
      rarity: "UNCOMMON",
      price: 220,
      image: "images/pet-bunny.png",
      fallback: "🐰",
      halloween: false
    },

    {
      id: "red-panda",
      name: "Red Panda",
      rarity: "ULTRA-RARE",
      price: 480,
      image: "images/pet-red-panda.png",
      fallback: "🦊",
      halloween: false
    },

    {
      id: "penguin",
      name: "Penguin",
      rarity: "ULTRA-RARE",
      price: 550,
      image: "images/pet-penguin.png",
      fallback: "🐧",
      halloween: false
    },

    {
      id: "unicorn",
      name: "Unicorn",
      rarity: "LEGENDARY",
      price: 1960,
      image: "images/pet-unicorn.png",
      fallback: "🦄",
      halloween: false
    },

    {
      id: "dragon",
      name: "Dragon",
      rarity: "LEGENDARY",
      price: 620,
      image: "images/pet-dragon.png",
      fallback: "🐲",
      halloween: false
    },

    {
      id: "turtle",
      name: "Turtle",
      rarity: "LEGENDARY",
      price: 1100,
      image: "images/pet-turtle.png",
      fallback: "🐢",
      halloween: false
    },

    {
      id: "ghost-dragon",
      name: "Ghost Dragon",
      rarity: "LEGENDARY",
      price: 1800,
      image: "images/pet-ghost-dragon.png",
      fallback: "🐉",
      halloween: true
    },

    {
      id: "scarecrow-cat",
      name: "Scarecrow Cat",
      rarity: "ULTRA-RARE",
      price: 950,
      image: "images/pet-scarecrow-cat.png",
      fallback: "🎃",
      halloween: true
    },

    {
      id: "werewolf",
      name: "Werewolf",
      rarity: "ULTRA-RARE",
      price: 1250,
      image: "images/pet-werewolf.png",
      fallback: "🐺",
      halloween: true
    },

    {
      id: "bat-dragon",
      name: "Bat Dragon",
      rarity: "LEGENDARY",
      price: 3000,
      image: "images/pet-bat-dragon.png",
      fallback: "🦇",
      halloween: true
    },

    {
      id: "evil-chick",
      name: "Evil Chick",
      rarity: "LEGENDARY",
      price: 900,
      image: "images/pet-evil-chick.png",
      fallback: "🐣",
      halloween: true
    }

  ],


  potion: [

    {
      id: "ride-potion",
      name: "Ride Potion",
      rarity: "POTION",
      price: 350,
      image: "images/potion-ride.png",
      fallback: "🧪",
      halloween: false
    },

    {
      id: "fly-potion",
      name: "Fly Potion",
      rarity: "POTION",
      price: 620,
      image: "images/potion-fly.png",
      fallback: "🧪",
      halloween: false
    },

    {
      id: "speed-potion",
      name: "Speed Potion",
      rarity: "POTION",
      price: 180,
      image: "images/potion-speed.png",
      fallback: "⚡",
      halloween: false
    },

    {
      id: "halloween-potion",
      name: "Halloween Potion",
      rarity: "LIMITED",
      price: 800,
      image: "images/potion-halloween.png",
      fallback: "🎃",
      halloween: true
    },

    {
      id: "shadow-potion",
      name: "Shadow Potion",
      rarity: "LIMITED",
      price: 1250,
      image: "images/potion-shadow.png",
      fallback: "🖤",
      halloween: true
    }

  ]

};


/* ==========================================================
   STATE
========================================================== */

let category = "pet";

let balance = 0;

let attempts = 0;

let wins = 0;

let losses = 0;

let selectedChance = 50;

let rolling = false;

let selectionMode = "source";


let source = {
  ...ITEMS.pet[0]
};


let target = {
  ...ITEMS.pet.find(
    item =>
      item.id === "unicorn"
  )
};


const $ =
  id =>
    document.getElementById(id);


/* ==========================================================
   HELPERS
========================================================== */

function money(value) {

  return Math.round(
    Number(value) || 0
  )
    .toLocaleString("ru-RU")
    .replace(/\u00A0/g, " ")
    + " 🐾";

}


function multiplier() {

  return source.price > 0
    ? target.price /
      source.price
    : 1;

}


function chanceFromMultiplier() {

  return Math.max(
    1,
    Math.min(
      98,
      98 /
      multiplier()
    )
  );

}


function showToast(message) {

  $("toast").textContent =
    message;

  $("toast")
    .classList
    .remove("hidden");

  $("toast")
    .classList
    .add("show");


  window.clearTimeout(
    showToast.timer
  );


  showToast.timer =
    window.setTimeout(
      () => {

        $("toast")
          .classList
          .add("hidden");

        $("toast")
          .classList
          .remove("show");

      },
      2500
    );

}


function openModal(id) {

  $(id)
    .classList
    .remove("hidden");

}


function closeModal(id) {

  $(id)
    .classList
    .add("hidden");

}


function allItems() {

  return [
    ...ITEMS.pet,
    ...ITEMS.potion
  ];

}


function currentItems() {

  return ITEMS[
    category
  ];

}


/* ==========================================================
   IMAGE HELPER
========================================================== */

function bindImage(
  imgId,
  fallbackId,
  item
) {

  const img =
    $(imgId);

  const fallback =
    $(fallbackId);


  img.src =
    item.image || "";


  fallback.textContent =
    item.fallback || "🐾";


  if (!item.image) {

    img.style.display =
      "none";

    fallback.style.display =
      "grid";

    return;

  }


  img.onload =
    () => {

      img.style.display =
        "block";

      fallback.style.display =
        "none";

    };


  img.onerror =
    () => {

      img.style.display =
        "none";

      fallback.style.display =
        "grid";

    };

}


/* ==========================================================
   UI UPDATE
========================================================== */

function updateCards() {

  bindImage(
    "sourceImage",
    "sourceFallback",
    source
  );


  bindImage(
    "targetImage",
    "targetFallback",
    target
  );


  $("sourceName").textContent =
    source.name;


  $("sourceMeta").textContent =
    `${source.rarity} • FR`;


  $("sourcePrice").textContent =
    money(source.price);


  $("targetName").textContent =
    target.name;


  $("targetMeta").textContent =
    `${target.rarity} • FR`;


  $("targetPrice").textContent =
    money(target.price);


  $("multiplier").textContent =
    `x${multiplier().toFixed(2)}`;


  $("chanceText").textContent =
    `Шанс ${chanceFromMultiplier().toFixed(1)}%`;


  document
    .querySelectorAll(
      ".chance-btn"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          Number(
            button.dataset.chance
          ) ===
          selectedChance
        );

      }
    );

}


function updateStats() {

  $("balanceValue").textContent =
    money(balance);


  $("attempts").textContent =
    attempts;


  $("wins").textContent =
    wins;


  $("losses").textContent =
    losses;


  $("winrate").textContent =
    `${
      attempts
        ? Math.round(
            wins /
            attempts *
            100
          )
        : 0
    }%`;

}


/* ==========================================================
   CATEGORY
========================================================== */

document
  .querySelectorAll(
    ".category-tab"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          if (rolling) {
            return;
          }


          category =
            button.dataset.category;


          document
            .querySelectorAll(
              ".category-tab"
            )
            .forEach(
              tab => {

                tab.classList.toggle(
                  "active",
                  tab === button
                );

              }
            );


          source =
            {
              ...ITEMS[
                category
              ][0]
            };


          const bestTarget =
            ITEMS[
              category
            ].find(
              item =>
                item.price >
                source.price
            );


          target =
            {
              ...(bestTarget ||
                ITEMS[
                  category
                ][0])
            };


          selectedChance =
            50;


          applyChance(50);


          renderCollection();

          updateCards();

        }
      );

    }
  );


/* ==========================================================
   CHANCE
========================================================== */

function applyChance(
  chance
) {

  selectedChance =
    chance;


  const targetPrice =
    Math.max(
      1,
      source.price *
      (
        98 /
        chance
      )
    );


  const sameCategory =
    currentItems();


  let matchingTarget =
    sameCategory.find(
      item => {

        return (
          Math.abs(
            item.price -
            targetPrice
          ) /
          Math.max(
            targetPrice,
            1
          ) <
          0.1
        ) &&
        item.id !==
        source.id;

      }
    );


  if (!matchingTarget) {

    const higher =
      sameCategory
        .filter(
          item =>
            item.price >
              source.price &&
            item.id !==
              source.id
        )
        .sort(
          (
            a,
            b
          ) =>
            a.price -
            b.price
        );


    matchingTarget =
      higher[0] ||
      sameCategory[0];

  }


  if (matchingTarget) {

    target =
      {
        ...matchingTarget
      };

  } else {

    target =
      {
        ...target,
        price:
          Math.round(
            targetPrice
          ),
        name:
          `${source.name} Upgrade`
      };

  }


  updateCards();

}


document
  .querySelectorAll(
    ".chance-btn"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          applyChance(
            Number(
              button.dataset.chance
            )
          );

        }
      );

    }
  );


/* ==========================================================
   SELECTION MODAL
========================================================== */

function openSelection(
  mode
) {

  selectionMode =
    mode;


  $("selectionTitle")
    .textContent =
      mode === "source"
        ? "ВЫБЕРИТЕ СТАВКУ"
        : "ВЫБЕРИТЕ ЦЕЛЬ";


  $("itemSearch").value =
    "";


  renderSelectionList();


  openModal(
    "selectionModal"
  );

}


function renderSelectionList(
  query = ""
) {

  const list =
    $("selectionList");


  const q =
    query
      .trim()
      .toLowerCase();


  list.innerHTML =
    "";


  currentItems()
    .filter(
      item =>
        item.name
          .toLowerCase()
          .includes(q)
    )
    .forEach(
      item => {

        const row =
          document.createElement(
            "button"
          );


        row.className =
          "selection-item";


        row.type =
          "button";


        row.innerHTML = `
          <div class="selection-art">

            <img alt="">

            <span class="selection-fallback">
              ${item.fallback || "🐾"}
            </span>

          </div>

          <div class="selection-copy">

            <b>
              ${item.name}
            </b>

            <span>
              ${item.rarity}${
                item.halloween
                  ? " • HALLOWEEN"
                  : ""
              }
            </span>

            <strong>
              ${money(item.price)}
            </strong>

          </div>

          <span class="item-kind">
            ${
              category ===
              "pet"
                ? "PET"
                : "POTION"
            }
          </span>
        `;


        const img =
          row.querySelector(
            "img"
          );


        const fallback =
          row.querySelector(
            ".selection-fallback"
          );


        if (item.image) {

          img.src =
            item.image;


          img.onload =
            () => {

              img.style.display =
                "block";

              fallback.style.display =
                "none";

            };

        }


        row.addEventListener(
          "click",
          () => {

            if (
              selectionMode ===
              "source"
            ) {

              source =
                {
                  ...item
                };

            } else {

              target =
                {
                  ...item
                };

            }


            closeModal(
              "selectionModal"
            );


            updateCards();

          }
        );


        list.appendChild(
          row
        );

      }
    );

}


$("sourceButton")
  .addEventListener(
    "click",
    () =>
      openSelection(
        "source"
      )
  );


$("targetButton")
  .addEventListener(
    "click",
    () =>
      openSelection(
        "target"
      )
  );


$("itemSearch")
  .addEventListener(
    "input",
    event => {

      renderSelectionList(
        event.target.value
      );

    }
  );


document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          closeModal(
            button.dataset.close
          );

        }
      );

    }
  );


/* ==========================================================
   COLLECTION
========================================================== */

function renderCollection() {

  const grid =
    $("itemGrid");


  grid.innerHTML =
    "";


  const items =
    currentItems();


  $("collectionCount")
    .textContent =
      `${items.length} предметов`;


  items.forEach(
    item => {

      const card =
        document.createElement(
          "button"
        );


      card.type =
        "button";


      card.className =
        "grid-item";


      card.innerHTML = `
        ${
          item.halloween
            ? '<span class="halloween-tag">🎃 EVENT</span>'
            : ""
        }

        <div class="grid-item-img">

          <img alt="">

          <span class="grid-fallback">
            ${item.fallback || "🐾"}
          </span>

        </div>

        <div class="grid-item-name">
          ${item.name}
        </div>

        <div class="grid-meta">

          <span>
            ${item.rarity}
          </span>

          <span class="grid-price">
            ${money(item.price)}
          </span>

        </div>
      `;


      const img =
        card.querySelector(
          "img"
        );


      const fallback =
        card.querySelector(
          ".grid-fallback"
        );


      if (item.image) {

        img.src =
          item.image;


        img.onload =
          () => {

            img.style.display =
              "block";

            fallback.style.display =
              "none";

          };

      }


      card.addEventListener(
        "click",
        () => {

          target =
            {
              ...item
            };


          updateCards();


          window.scrollTo(
            {
              top:0,
              behavior:"smooth"
            }
          );

        }
      );


      grid.appendChild(
        card
      );

    }
  );

}


/* ==========================================================
   ROBUX MODAL
========================================================== */

$("robuxButton")
  .addEventListener(
    "click",
    () => {

      $("maintenanceMessage")
        .classList
        .remove(
          "hidden"
        );


      openModal(
        "robuxModal"
      );

    }
  );


$("rubButton")
  .addEventListener(
    "click",
    () => {

      $("maintenanceMessage")
        .classList
        .remove(
          "hidden"
        );

    }
  );


$("uahButton")
  .addEventListener(
    "click",
    () => {

      $("maintenanceMessage")
        .classList
        .remove(
          "hidden"
        );

    }
  );


/* ==========================================================
   ROLL
========================================================== */

function createRollCard(
  win
) {

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "roll-card";


  card.innerHTML = `
    <span class="emoji">
      ${win ? "🎃" : "💀"}
    </span>

    <span class="label">
      ${win ? "ВЫИГРЫШ" : "НЕУДАЧА"}
    </span>
  `;


  return card;

}


function animateRoll(
  won
) {

  return new Promise(
    resolve => {

      const screen =
        $("rollScreen");


      const track =
        $("rollTrack");


      const total =
        46;


      const finalIndex =
        34;


      track.innerHTML =
        "";


      track.style.transition =
        "none";


      track.style.transform =
        "translateX(0)";


      for (
        let i = 0;
        i < total;
        i++
      ) {

        track.appendChild(
          createRollCard(
            i === finalIndex
              ? won
              : Math.random() < .5
          )
        );

      }


      screen
        .classList
        .remove(
          "hidden"
        );


      requestAnimationFrame(
        () => {

          requestAnimationFrame(
            () => {

              const card =
                track.children[
                  finalIndex
                ];


              const width =
                document
                  .querySelector(
                    ".roll-window"
                  )
                  .getBoundingClientRect()
                  .width;


              const targetOffset =
                width /
                2 -
                (
                  card.offsetLeft +
                  card.offsetWidth /
                  2
                );


              track.style.transition =
                "transform 3.6s cubic-bezier(.08,.72,.12,1)";


              track.style.transform =
                `translateX(${targetOffset}px)`;


              window.setTimeout(
                () => {

                  screen
                    .classList
                    .add(
                      "hidden"
                    );


                  resolve();

                },
                3800
              );

            }
          );

        }
      );

    }
  );

}


/* ==========================================================
   UPGRADE
========================================================== */

async function upgrade() {

  if (rolling) {
    return;
  }


  if (
    balance <
    source.price
  ) {

    showToast(
      `Недостаточно средств. Нужно ${money(source.price)}.`
    );

    return;
  }


  const displayedChance =
    chanceFromMultiplier();


  const won =
    Math.random() *
    100 <
    displayedChance;


  rolling =
    true;


  $("upgradeButton")
    .disabled =
      true;


  attempts++;


  balance -=
    source.price;


  if (won) {

    wins++;


    balance +=
      target.price;

  } else {

    losses++;

  }


  updateStats();


  await animateRoll(
    won
  );


  $("resultEmoji")
    .textContent =
      won
        ? "🎃"
        : "💀";


  $("resultTitle")
    .textContent =
      won
        ? "ВЫИГРЫШ"
        : "ПРОИГРЫШ";


  $("resultInfo")
    .innerHTML =
      won
        ? `
          <span>
            Шанс:
            <b>
              ${displayedChance.toFixed(1)}%
            </b>
          </span>

          <span class="green">
            +${money(target.price)}
          </span>

          <span>
            Баланс:
            <b>
              ${money(balance)}
            </b>
          </span>
        `
        : `
          <span>
            Шанс:
            <b>
              ${displayedChance.toFixed(1)}%
            </b>
          </span>

          <span class="red">
            −${money(source.price)}
          </span>

          <span>
            Баланс:
            <b>
              ${money(balance)}
            </b>
          </span>
        `;


  $("resultScreen")
    .classList
    .remove(
      "hidden"
    );


  rolling =
    false;


  $("upgradeButton")
    .disabled =
      false;

}


$("upgradeButton")
  .addEventListener(
    "click",
    upgrade
  );


$("closeResult")
  .addEventListener(
    "click",
    () => {

      $("resultScreen")
        .classList
        .add("hidden");

    }
  );


/* ==========================================================
   FALLING HALLOWEEN DECOR
========================================================== */

function spawnPumpkins() {

  const root =
    $("pumpkins");


  const icons =
    [
      "🎃",
      "🍂",
      "🕸️",
      "🦇"
    ];


  for (
    let i = 0;
    i < 18;
    i++
  ) {

    const node =
      document.createElement(
        "span"
      );


    node.className =
      "pumpkin";


    node.textContent =
      icons[
        Math.floor(
          Math.random() *
          icons.length
        )
      ];


    node.style.left =
      `${Math.random() * 100}%`;


    node.style.fontSize =
      `${10 + Math.random() * 12}px`;


    node.style.animationDelay =
      `${-Math.random() * 14}s`;


    node.style.animationDuration =
      `${9 + Math.random() * 9}s`;


    root.appendChild(
      node
    );

  }

}


/* ==========================================================
   INIT
========================================================== */

renderCollection();

updateCards();

updateStats();

spawnPumpkins();
