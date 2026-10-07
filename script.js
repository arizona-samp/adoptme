/*
  ADOPT ME • HAUNTED UPGRADER

  Редактируй предметы только здесь:

    price: 5000,
    image: "images/my-pet.png"

  Картинки можно положить в папку images.
*/


const ITEMS = {

  pet: [

    {
      id:"dog",
      name:"Dog",
      rarity:"COMMON",
      price:100,
      image:"images/pet-dog.png",
      fallback:"🐶",
      halloween:false
    },

    {
      id:"cat",
      name:"Cat",
      rarity:"COMMON",
      price:120,
      image:"images/pet-cat.png",
      fallback:"🐱",
      halloween:false
    },

    {
      id:"bunny",
      name:"Bunny",
      rarity:"UNCOMMON",
      price:220,
      image:"images/pet-bunny.png",
      fallback:"🐰",
      halloween:false
    },

    {
      id:"red-panda",
      name:"Red Panda",
      rarity:"ULTRA-RARE",
      price:480,
      image:"images/pet-red-panda.png",
      fallback:"🦊",
      halloween:false
    },

    {
      id:"penguin",
      name:"Penguin",
      rarity:"ULTRA-RARE",
      price:550,
      image:"images/pet-penguin.png",
      fallback:"🐧",
      halloween:false
    },

    {
      id:"dragon",
      name:"Dragon",
      rarity:"LEGENDARY",
      price:620,
      image:"images/pet-dragon.png",
      fallback:"🐲",
      halloween:false
    },

    {
      id:"turtle",
      name:"Turtle",
      rarity:"LEGENDARY",
      price:1100,
      image:"images/pet-turtle.png",
      fallback:"🐢",
      halloween:false
    },

    {
      id:"ghost-dragon",
      name:"Ghost Dragon",
      rarity:"LEGENDARY",
      price:1800,
      image:"images/pet-ghost-dragon.png",
      fallback:"🐉",
      halloween:true
    },

    {
      id:"unicorn",
      name:"Unicorn",
      rarity:"LEGENDARY",
      price:1960,
      image:"images/pet-unicorn.png",
      fallback:"🦄",
      halloween:false
    },

    {
      id:"scarecrow-cat",
      name:"Scarecrow Cat",
      rarity:"ULTRA-RARE",
      price:950,
      image:"images/pet-scarecrow-cat.png",
      fallback:"🎃",
      halloween:true
    },

    {
      id:"werewolf",
      name:"Werewolf",
      rarity:"ULTRA-RARE",
      price:1250,
      image:"images/pet-werewolf.png",
      fallback:"🐺",
      halloween:true
    },

    {
      id:"bat-dragon",
      name:"Bat Dragon",
      rarity:"LEGENDARY",
      price:3000,
      image:"images/pet-bat-dragon.png",
      fallback:"🦇",
      halloween:true
    },

    {
      id:"evil-chick",
      name:"Evil Chick",
      rarity:"LEGENDARY",
      price:900,
      image:"images/pet-evil-chick.png",
      fallback:"🐣",
      halloween:true
    }

  ],


  potion: [

    {
      id:"ride-potion",
      name:"Ride Potion",
      rarity:"POTION",
      price:350,
      image:"images/potion-ride.png",
      fallback:"🧪",
      halloween:false
    },

    {
      id:"fly-potion",
      name:"Fly Potion",
      rarity:"POTION",
      price:620,
      image:"images/potion-fly.png",
      fallback:"🧪",
      halloween:false
    },

    {
      id:"speed-potion",
      name:"Speed Potion",
      rarity:"POTION",
      price:180,
      image:"images/potion-speed.png",
      fallback:"⚡",
      halloween:false
    },

    {
      id:"halloween-potion",
      name:"Halloween Potion",
      rarity:"LIMITED",
      price:800,
      image:"images/potion-halloween.png",
      fallback:"🎃",
      halloween:true
    },

    {
      id:"shadow-potion",
      name:"Shadow Potion",
      rarity:"LIMITED",
      price:1250,
      image:"images/potion-shadow.png",
      fallback:"🖤",
      halloween:true
    }

  ]

};


const FAIR_POOL_SIZE = 200;

const fairPools = new Map();


let category = "pet";

let source = {
  ...ITEMS.pet[0]
};

let target = {
  ...ITEMS.pet.find(
    x => x.id === "unicorn"
  )
};

let balance = 0;

let attempts = 0;

let wins = 0;

let losses = 0;

let selectedChance = 50;

let selectionMode = "source";

let rolling = false;


const $ =
  id =>
    document.getElementById(id);


/* ==========================================================
   HELPERS
========================================================== */

function money(value){

  return `${Math.round(
    Number(value) || 0
  )
    .toLocaleString("ru-RU")
    .replace(/\u00A0/g," ")} 🎃`;

}


function allItems(){

  return [
    ...ITEMS.pet,
    ...ITEMS.potion
  ];

}


function currentItems(){

  return ITEMS[
    category
  ];

}


function multiplier(){

  return source.price > 0
    ? target.price /
      source.price
    : 1;

}


function displayedChance(){

  return Math.max(
    1,
    Math.min(
      98,
      98 /
      multiplier()
    )
  );

}


function toast(message){

  const node =
    $("toast");


  node.textContent =
    message;


  node.classList
    .remove("hidden");

  node.classList
    .add("show");


  clearTimeout(
    toast.timer
  );


  toast.timer =
    setTimeout(
      () => {

        node.classList
          .add("hidden");

        node.classList
          .remove("show");

      },
      2400
    );

}


function updateBalance(){

  $("balanceValue")
    .textContent =
    money(balance);


  $("depositBalance")
    .textContent =
    money(balance);

}


function updateStats(){

  $("attempts")
    .textContent =
    attempts;


  $("wins")
    .textContent =
    wins;


  $("losses")
    .textContent =
    losses;


  $("winrate")
    .textContent =
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
   IMAGE
========================================================== */

function bindImage(
  imgId,
  fallbackId,
  item
){

  const img =
    $(imgId);

  const fallback =
    $(fallbackId);


  img.style.display =
    "none";

  fallback.style.display =
    "block";


  fallback.textContent =
    item.fallback ||
    "🐾";


  img.src =
    item.image ||
    "";


  if(!item.image){

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
        "block";

    };

}


/* ==========================================================
   CARDS
========================================================== */

function updateCards(){

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


  $("sourceName")
    .textContent =
    source.name;


  $("sourceMeta")
    .textContent =
    `${source.rarity} • FR`;


  $("sourcePrice")
    .textContent =
    money(
      source.price
    );


  $("targetName")
    .textContent =
    target.name;


  $("targetMeta")
    .textContent =
    `${target.rarity} • FR`;


  $("targetPrice")
    .textContent =
    money(
      target.price
    );


  $("multiplier")
    .textContent =
    `x${multiplier().toFixed(2)}`;


  $("chanceText")
    .textContent =
    `Шанс ${displayedChance().toFixed(1)}%`;


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


function openModal(id){

  $(id)
    .classList
    .remove("hidden");

}


function closeModal(id){

  $(id)
    .classList
    .add("hidden");

}


/* ==========================================================
   ЧЕСТНЫЙ ПУЛ
========================================================== */

function buildFairPool(
  chance
){

  const winsNeeded =
    Math.round(
      chance *
      FAIR_POOL_SIZE /
      100
    );


  const pool = [];


  for(
    let i = 0;
    i < winsNeeded;
    i++
  ){

    pool.push(true);

  }


  for(
    let i = winsNeeded;
    i < FAIR_POOL_SIZE;
    i++
  ){

    pool.push(false);

  }


  for(
    let i = pool.length - 1;
    i > 0;
    i--
  ){

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      pool[i],
      pool[j]
    ] = [
      pool[j],
      pool[i]
    ];

  }


  return pool;

}


function fairOutcome(
  chance
){

  const key =
    Number(chance)
      .toFixed(1);


  if(
    !fairPools.has(key) ||
    fairPools.get(key).length === 0
  ){

    fairPools.set(
      key,
      buildFairPool(
        chance
      )
    );

  }


  return fairPools
    .get(key)
    .pop();

}


/* ==========================================================
   ШАНС
========================================================== */

function applyChance(
  chance
){

  selectedChance =
    chance;


  const wanted =
    source.price *
    (
      98 /
      chance
    );


  const list =
    currentItems()
      .filter(
        item =>
          item.id !==
            source.id &&
          item.price >=
            source.price
      );


  const best =
    [
      ...list
    ]
      .sort(
        (
          a,
          b
        ) =>
          Math.abs(
            a.price -
            wanted
          ) -
          Math.abs(
            b.price -
            wanted
          )
      )[0] ||
      currentItems()[0];


  target =
    {
      ...best
    };


  updateCards();

}


/* ==========================================================
   CATEGORY
========================================================== */

document
  .querySelectorAll(
    ".mode-btn"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          if(rolling){

            return;

          }


          category =
            button.dataset.category;


          document
            .querySelectorAll(
              ".mode-btn"
            )
            .forEach(
              x =>
                x.classList.toggle(
                  "active",
                  x === button
                )
            );


          $("modeLabel")
            .textContent =
              category === "pet"
                ? "ПЕТЫ"
                : "ЗЕЛЬЕ";


          source =
            {
              ...currentItems()[0]
            };


          const next =
            currentItems().find(
              x =>
                x.price >
                source.price
            ) ||
            currentItems()[0];


          target =
            {
              ...next
            };


          selectedChance =
            50;


          renderCollection();

          updateCards();

        }
      );

    }
  );


/* ==========================================================
   CHANCE BUTTONS
========================================================== */

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
   SELECTION
========================================================== */

function openSelection(
  mode
){

  selectionMode =
    mode;


  $("selectionTitle")
    .textContent =
      mode === "source"
        ? "ВЫБЕРИ ПРЕДМЕТ"
        : "ВЫБЕРИ ЦЕЛЬ";


  $("itemSearch")
    .value =
    "";


  renderSelection();


  openModal(
    "selectionModal"
  );

}


function renderSelection(
  query = ""
){

  const q =
    query
      .trim()
      .toLowerCase();


  const list =
    $("selectionList");


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


        row.type =
          "button";


        row.className =
          "selection-row";


        row.innerHTML = `
          <div class="selection-art">

            <img alt="">

            <span>
              ${item.fallback || "🐾"}
            </span>

          </div>

          <div class="selection-details">

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

          <span class="selection-type">
            ${
              category === "pet"
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
            ".selection-art span"
          );


        if(item.image){

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

            if(
              selectionMode ===
              "source"
            ){

              source =
                {
                  ...item
                };

            }else{

              target =
                {
                  ...item
                };

            }


            updateCards();


            closeModal(
              "selectionModal"
            );

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
    event =>
      renderSelection(
        event.target.value
      )
  );


document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () =>
          closeModal(
            button.dataset.close
          )
      );

    }
  );


/* ==========================================================
   COLLECTION
========================================================== */

function renderCollection(){

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
            ? '<span class="event-tag">🎃 EVENT</span>'
            : ""
        }

        <div class="grid-item-art">

          <img alt="">

          <span>
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
          ".grid-item-art span"
        );


      if(item.image){

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
   ПОПОЛНЕНИЕ
========================================================== */

$("depositButton")
  .addEventListener(
    "click",
    () => {

      updateBalance();

      $("depositAmount")
        .value =
        "";

      openModal(
        "depositModal"
      );

    }
  );


document
  .querySelectorAll(
    ".quick-deposit button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const amount =
            Number(
              button.dataset.add
            );


          balance +=
            amount;


          updateBalance();


          toast(
            `Баланс пополнен на ${money(amount)}`
          );

        }
      );

    }
  );


$("depositSubmit")
  .addEventListener(
    "click",
    () => {

      const amount =
        Number(
          $("depositAmount").value
        );


      if(
        !Number.isFinite(
          amount
        ) ||
        amount <= 0
      ){

        toast(
          "Введи корректную сумму пополнения"
        );

        return;

      }


      balance +=
        Math.floor(
          amount
        );


      updateBalance();


      closeModal(
        "depositModal"
      );


      toast(
        `Баланс пополнен на ${money(amount)}`
      );

    }
  );


/* ==========================================================
   ROBUX
========================================================== */

$("robuxButton")
  .addEventListener(
    "click",
    () =>
      openModal(
        "robuxModal"
      )
  );


$("rubButton")
  .addEventListener(
    "click",
    () =>
      toast(
        "Технические работы — покупка будет доступна совсем скоро"
      )
  );


$("uahButton")
  .addEventListener(
    "click",
    () =>
      toast(
        "Технические работы — покупка будет доступна совсем скоро"
      )
  );


/* ==========================================================
   ROLL
========================================================== */

function createRollCard(
  won
){

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "roll-card";


  card.innerHTML = `
    <span class="emoji">
      ${won ? "🎃" : "💀"}
    </span>

    <span class="label">
      ${won ? "ВЫИГРЫШ" : "НЕУДАЧА"}
    </span>
  `;


  return card;

}


function animateRoll(
  won
){

  return new Promise(
    resolve => {

      const screen =
        $("rollScreen");


      const track =
        $("rollTrack");


      const total =
        52;


      const finalIndex =
        38;


      track.innerHTML =
        "";


      track.style.transition =
        "none";


      track.style.transform =
        "translateX(0)";


      for(
        let i = 0;
        i < total;
        i++
      ){

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
        () =>
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


              const offset =
                width / 2 -
                (
                  card.offsetLeft +
                  card.offsetWidth / 2
                );


              track.style.transition =
                "transform 3.8s cubic-bezier(.08,.72,.12,1)";


              track.style.transform =
                `translateX(${offset}px)`;


              setTimeout(
                () => {

                  screen
                    .classList
                    .add(
                      "hidden"
                    );


                  resolve();

                },
                4000
              );

            }
          )
      );

    }
  );

}


/* ==========================================================
   UPGRADE
========================================================== */

async function upgrade(){

  if(
    rolling
  ){

    return;

  }


  if(
    balance <
    source.price
  ){

    toast(
      `Недостаточно средств. Нужно ${money(source.price)}.`
    );

    return;

  }


  if(
    source.id ===
      target.id &&
    source.price ===
      target.price
  ){

    toast(
      "Выбери другую цель для апгрейда"
    );

    return;

  }


  const chance =
    displayedChance();


  const won =
    fairOutcome(
      chance
    );


  rolling =
    true;


  $("upgradeButton")
    .disabled =
      true;


  attempts++;


  balance -=
    source.price;


  if(won){

    wins++;


    balance +=
      target.price;

  }else{

    losses++;

  }


  updateBalance();

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
              ${chance.toFixed(1)}%
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
              ${chance.toFixed(1)}%
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
    () =>
      $("resultScreen")
        .classList
        .add(
          "hidden"
        )
  );


/* ==========================================================
   FALLING HALLOWEEN DECOR
========================================================== */

function spawnDecor(){

  const root =
    $("fallingDecor");


  const icons = [
    "🎃",
    "🍂",
    "🕸️",
    "🦇"
  ];


  for(
    let i = 0;
    i < 22;
    i++
  ){

    const node =
      document.createElement(
        "span"
      );


    node.className =
      "fall";


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
      `${9 + Math.random() * 12}px`;


    node.style.animationDelay =
      `${-Math.random() * 15}s`;


    node.style.animationDuration =
      `${8 + Math.random() * 9}s`;


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

updateBalance();

updateStats();

spawnDecor();
