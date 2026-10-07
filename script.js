/* ==========================================================
   HAUNTED ADOPT
   UPGRADER

   ВАЖНО:

   Деньги используются ТОЛЬКО для покупки предметов.

   Апгрейд использует сам предмет из инвентаря.

   WIN:
   старый предмет удаляется
   новый предмет добавляется

   LOSS:
   старый предмет удаляется
========================================================== */


/* ==========================================================
   ПРЕДМЕТЫ

   МЕНЯТЬ ФОТО И ЦЕНЫ МОЖНО ТОЛЬКО ЗДЕСЬ.

   price = цена в ₽

   image = файл из папки images

   Например:

   image:"images/my-pet.png"
========================================================== */

const ITEMS = {

  pet: [

    {
      id:"ghost-dog",
      name:"Ghost Dog",
      rarity:"COMMON",
      price:82,
      image:"images/ghost-dog.png",
      fallback:"🎃",
      halloween:true
    },

    {
      id:"Turtle",
      name:"Turtle",
      rarity:"LEGENDARY",
      price:781,
      image:"images/turtle.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"kangaroo",
      name:"kangaroo",
      rarity:"LEGENDARY",
      price:610,
      image:"images/kangaroo.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"red-panda",
      name:"Red Panda",
      rarity:"ULTRA-RARE",
      price:480,
      image:"images/pet-red-panda.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"penguin",
      name:"Penguin",
      rarity:"ULTRA-RARE",
      price:550,
      image:"images/pet-penguin.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"dragon",
      name:"Dragon",
      rarity:"LEGENDARY",
      price:620,
      image:"images/pet-dragon.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"evil-chick",
      name:"Evil Chick",
      rarity:"LEGENDARY",
      price:900,
      image:"images/pet-evil-chick.png",
      fallback:"🎃",
      halloween:true
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
      id:"turtle",
      name:"Turtle",
      rarity:"LEGENDARY",
      price:1100,
      image:"images/pet-turtle.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"werewolf",
      name:"Werewolf",
      rarity:"ULTRA-RARE",
      price:1250,
      image:"images/pet-werewolf.png",
      fallback:"🎃",
      halloween:true
    },

    {
      id:"ghost-dragon",
      name:"Ghost Dragon",
      rarity:"LEGENDARY",
      price:1800,
      image:"images/pet-ghost-dragon.png",
      fallback:"🎃",
      halloween:true
    },

    {
      id:"unicorn",
      name:"Unicorn",
      rarity:"LEGENDARY",
      price:1960,
      image:"images/pet-unicorn.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"bat-dragon",
      name:"Bat Dragon",
      rarity:"LEGENDARY",
      price:3000,
      image:"images/pet-bat-dragon.png",
      fallback:"🎃",
      halloween:true
    }

  ],


  potion: [

    {
      id:"speed-potion",
      name:"Speed Potion",
      rarity:"POTION",
      price:180,
      image:"images/potion-speed.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"ride-potion",
      name:"Ride Potion",
      rarity:"POTION",
      price:350,
      image:"images/potion-ride.png",
      fallback:"🎃",
      halloween:false
    },

    {
      id:"fly-potion",
      name:"Fly Potion",
      rarity:"POTION",
      price:620,
      image:"images/potion-fly.png",
      fallback:"🎃",
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
      fallback:"🎃",
      halloween:true
    }

  ]

};


/* ==========================================================
   SETTINGS
========================================================== */

const FAIR_POOL_SIZE = 200;


/* ==========================================================
   VARIABLES
========================================================== */

const fairPools = new Map();


let category = "pet";

let balance = 0;

let attempts = 0;

let wins = 0;

let losses = 0;

let rolling = false;

let selectedChance = 50;

let selectionMode = "source";


/*
   ИНВЕНТАРЬ

   id предмета -> количество
*/

const inventory = new Map();


/*
   SOURCE
*/

let source = {

  id:null,

  name:"Нет предмета",

  rarity:"ИНВЕНТАРЬ ПУСТ",

  price:0,

  image:"",

  fallback:"🎒",

  halloween:false

};


/*
   TARGET

   Стартовая цель
*/

let target = {
  ...ITEMS.pet.find(
    item => item.id === "unicorn"
  )
};


/* ==========================================================
   DOM
========================================================== */

const $ = id =>
  document.getElementById(id);


/* ==========================================================
   MONEY
========================================================== */

function money(value){

  return `${Math.round(
    Number(value) || 0
  ).toLocaleString("ru-RU").replace(
    /\u00A0/g,
    " "
  )} ₽`;

}


/* ==========================================================
   ITEMS
========================================================== */

function currentItems(){

  return ITEMS[category];

}


function catalogItem(id){

  return [

    ...ITEMS.pet,

    ...ITEMS.potion

  ].find(
    item => item.id === id
  ) || null;

}


/* ==========================================================
   INVENTORY
========================================================== */

function addInventory(
  item,
  amount = 1
){

  inventory.set(

    item.id,

    (inventory.get(item.id) || 0)
    + amount

  );

}


function removeInventory(
  id,
  amount = 1
){

  const next =
    (inventory.get(id) || 0)
    - amount;


  if(next > 0){

    inventory.set(
      id,
      next
    );

  }else{

    inventory.delete(
      id
    );

  }

}


function inventoryItems(){

  return [

    ...inventory.entries()

  ]

  .map(
    ([id,quantity]) => ({

      item:
        catalogItem(id),

      quantity

    })
  )

  .filter(
    x => x.item
  );

}


/* ==========================================================
   BALANCE
========================================================== */

function updateBalance(){

  $("balanceValue")
    .textContent =
      money(balance);


  $("depositBalance")
    .textContent =
      money(balance);

}


/* ==========================================================
   STATS
========================================================== */

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
   MULTIPLIER
========================================================== */

function multiplier(){

  if(
    !source.price ||
    !target.price
  ){

    return 1;

  }


  return (
    target.price /
    source.price
  );

}


/* ==========================================================
   CHANCE
==========================================================

   98 / multiplier

   Например:

   source = 100 ₽
   target = 196 ₽

   multiplier = 1.96

   chance = 98 / 1.96

   chance = 50%
========================================================== */

function displayedChance(){

  if(
    !source.price ||
    !target.price
  ){

    return 0;

  }


  return Math.max(

    1,

    Math.min(

      98,

      98 / multiplier()

    )

  );

}


/* ==========================================================
   TOAST
========================================================== */

function showToast(message){

  const toast =
    $("toast");


  toast.textContent =
    message;


  toast.classList.remove(
    "hidden"
  );


  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      ()=>{

        toast.classList.add(
          "hidden"
        );

        toast.classList.remove(
          "show"
        );

      },
      2400
    );

}


/* ==========================================================
   MODALS
========================================================== */

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
   IMAGE
========================================================== */

function loadSmallImage(
  imageElement,
  fallbackElement,
  item
){

  imageElement.style.display =
    "none";


  fallbackElement.style.display =
    "block";


  fallbackElement.textContent =
    item.fallback || "🐾";


  if(!item.image){

    return;

  }


  imageElement.src =
    item.image;


  imageElement.onload =
    ()=>{

      imageElement.style.display =
        "block";


      fallbackElement.style.display =
        "none";

    };


  imageElement.onerror =
    ()=>{

      imageElement.style.display =
        "none";


      fallbackElement.style.display =
        "block";

    };

}


/* ==========================================================
   MAIN CARDS
========================================================== */

function updateCards(){

  /*
    SOURCE
  */

  const sourceImage =
    $("sourceImage");


  const sourceFallback =
    $("sourceFallback");


  loadSmallImage(
    sourceImage,
    sourceFallback,
    source
  );


  /*
    TARGET
  */

  const targetImage =
    $("targetImage");


  const targetFallback =
    $("targetFallback");


  loadSmallImage(
    targetImage,
    targetFallback,
    target
  );


  /*
    TEXT
  */

  $("sourceName")
    .textContent =
      source.name;


  $("sourceMeta")
    .textContent =

      source.id

      ? `${source.rarity} • FR`

      : source.rarity;


  $("sourcePrice")
    .textContent =

      source.id

      ? money(source.price)

      : "Купи предмет в магазине";


  $("targetName")
    .textContent =
      target.name;


  $("targetMeta")
    .textContent =
      `${target.rarity} • FR`;


  $("targetPrice")
    .textContent =
      money(target.price);


  $("multiplier")
    .textContent =

      source.price

      ? `x${multiplier().toFixed(2)}`

      : "x—";


  $("chanceText")
    .textContent =

      source.price

      ? `Шанс ${displayedChance().toFixed(1)}%`

      : "Сначала купи предмет";


  document
    .querySelectorAll(
      ".chance-btn"
    )
    .forEach(button=>{

      button.classList.toggle(

        "active",

        Number(
          button.dataset.chance
        ) === selectedChance

      );

    });

}


/* ==========================================================
   FAIR RESULT
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


  /*
    WIN
  */

  for(
    let i=0;
    i<winsNeeded;
    i++
  ){

    pool.push(true);

  }


  /*
    LOSS
  */

  for(
    let i=winsNeeded;
    i<FAIR_POOL_SIZE;
    i++
  ){

    pool.push(false);

  }


  /*
    SHUFFLE
  */

  for(
    let i=pool.length-1;
    i>0;
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

    !fairPools.has(key)

    ||

    fairPools
      .get(key)
      .length === 0

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
   CATEGORY
========================================================== */

document
  .querySelectorAll(
    ".mode-btn"
  )
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        if(rolling){
          return;
        }


        category =
          button.dataset.category;


        document
          .querySelectorAll(
            ".mode-btn"
          )
          .forEach(item=>{

            item.classList.toggle(
              "active",
              item === button
            );

          });


        $("modeLabel")
          .textContent =

            category === "pet"

            ? "ПЕТЫ"

            : "ЗЕЛЬЕ";


        /*
          Смотрим, есть ли
          купленные предметы
          этой категории.
        */

        const owned =
          inventoryItems()
            .filter(
              ({item})=>{

                return category === "pet"

                  ? ITEMS.pet.some(
                      x =>
                        x.id === item.id
                    )

                  : ITEMS.potion.some(
                      x =>
                        x.id === item.id
                    );

              }
            );


        /*
          Первый предмет
          этой категории.
        */

        if(owned.length){

          source =
            {
              ...owned[0].item
            };

        }else{

          source = {

            id:null,

            name:"Нет предмета",

            rarity:
              "ИНВЕНТАРЬ ПУСТ",

            price:0,

            image:"",

            fallback:"🎒",

            halloween:false

          };

        }


        /*
          Ставим ближайшую
          более дорогую цель.
        */

        const next =
          currentItems()
            .find(
              x =>
                x.price >
                (source.price || 0)
            );


        if(next){

          target = {
            ...next
          };

        }else{

          target = {
            ...currentItems()[0]
          };

        }


        selectedChance = 50;


        renderShop();

        renderInventory();

        updateCards();

      }
    );

  });


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

      ? "ВЫБЕРИ ПРЕДМЕТ ИЗ ИНВЕНТАРЯ"

      : "ВЫБЕРИ ЦЕЛЬ";


  $("itemSearch")
    .value = "";


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


  /*
    SOURCE
  */

  if(
    selectionMode === "source"
  ){

    const owned =
      inventoryItems()
        .filter(
          ({item})=>{

            const categoryMatch =

              category === "pet"

              ? ITEMS.pet.some(
                  x =>
                    x.id === item.id
                )

              : ITEMS.potion.some(
                  x =>
                    x.id === item.id
                );


            const searchMatch =
              item.name
                .toLowerCase()
                .includes(q);


            return (
              categoryMatch &&
              searchMatch
            );

          }
        );


    if(!owned.length){

      list.innerHTML = `

        <div class="inventory-empty">

          <b>
            🎒 ИНВЕНТАРЬ ПУСТ
          </b>

          Сначала купи предмет
          в магазине.

        </div>

      `;

      return;

    }


    owned.forEach(
      ({item,quantity})=>{

        const row =
          document.createElement(
            "button"
          );


        row.className =
          "selection-row";


        row.type =
          "button";


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
              ${item.rarity}
              • ИНВЕНТАРЬ ×${quantity}
            </span>

            <strong>
              ${money(item.price)}
            </strong>

          </div>


          <span class="selection-type">
            ВЗЯТЬ
          </span>

        `;


        const image =
          row.querySelector("img");


        const fallback =
          row.querySelector(
            ".selection-art span"
          );


        loadSmallImage(
          image,
          fallback,
          item
        );


        row.addEventListener(
          "click",
          ()=>{

            source = {
              ...item
            };


            closeModal(
              "selectionModal"
            );


            updateCards();

          }
        );


        list.appendChild(row);

      }
    );


    return;

  }


  /*
    TARGET
  */

  currentItems()

    .filter(
      item =>
        item.name
          .toLowerCase()
          .includes(q)
    )

    .forEach(item=>{

      const disabled =

        !source.id ||

        item.price <=
        source.price;


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
            ${item.rarity}

            ${
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
            disabled
            ? "НИЖЕ"
            : "ЦЕЛЬ"
          }

        </span>

      `;


      if(disabled){

        row.style.opacity =
          ".42";

      }


      const image =
        row.querySelector(
          "img"
        );


      const fallback =
        row.querySelector(
          ".selection-art span"
        );


      loadSmallImage(
        image,
        fallback,
        item
      );


      row.addEventListener(
        "click",
        ()=>{

          if(disabled){

            showToast(
              "Цель должна быть дороже твоего предмета"
            );

            return;

          }


          target = {
            ...item
          };


          closeModal(
            "selectionModal"
          );


          updateCards();

        }
      );


      list.appendChild(row);

    });

}


$("sourceButton")
  .addEventListener(
    "click",
    ()=>{
      openSelection("source");
    }
  );


$("targetButton")
  .addEventListener(
    "click",
    ()=>{
      openSelection("target");
    }
  );


$("itemSearch")
  .addEventListener(
    "input",
    event=>{
      renderSelection(
        event.target.value
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
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        if(!source.id){

          showToast(
            "Сначала купи предмет в магазине"
          );

          return;

        }


        const chance =
          Number(
            button.dataset.chance
          );


        selectedChance =
          chance;


        /*
          Ищем цену цели.

          target =
          source × (98/chance)
        */

        const wantedPrice =

          source.price *
          (98 / chance);


        const candidates =

          currentItems()

            .filter(
              item =>

                item.id !== source.id &&

                item.price >
                source.price

            );


        if(!candidates.length){

          updateCards();

          return;

        }


        candidates.sort(
          (a,b)=>{

            return (

              Math.abs(
                a.price -
                wantedPrice
              )

              -

              Math.abs(
                b.price -
                wantedPrice
              )

            );

          }
        );


        target = {
          ...candidates[0]
        };


        updateCards();

      }
    );

  });


/* ==========================================================
   SHOP
========================================================== */

function renderShop(){

  const grid =
    $("itemGrid");


  grid.innerHTML =
    "";


  currentItems()
    .forEach(item=>{

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "grid-item";


      card.innerHTML = `

        ${
          item.halloween

          ? `
            <span class="event-tag">
              🎃 EVENT
            </span>
          `

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


        <button
          class="shop-buy-btn"
          data-buy-id="${item.id}"
        >
          КУПИТЬ
        </button>

      `;


      const image =
        card.querySelector(
          "img"
        );


      const fallback =
        card.querySelector(
          ".grid-item-art span"
        );


      loadSmallImage(
        image,
        fallback,
        item
      );


      /*
        Саму карточку можно нажать,
        чтобы выбрать её целью.
      */

      card.addEventListener(
        "click",
        event=>{

          if(
            event.target.closest(
              ".shop-buy-btn"
            )
          ){

            return;

          }


          if(
            source.id &&
            item.price <= source.price
          ){

            showToast(
              "Этот предмет дешевле твоего"
            );

            return;

          }


          target = {
            ...item
          };


          window.scrollTo({

            top:0,

            behavior:"smooth"

          });


          updateCards();

        }
      );


      /*
        BUY
      */

      card
        .querySelector(
          ".shop-buy-btn"
        )
        .addEventListener(
          "click",
          event=>{

            event.stopPropagation();

            purchaseItem(item);

          }
        );


      grid.appendChild(
        card
      );

    });

}


/* ==========================================================
   PURCHASE
========================================================== */

function purchaseItem(
  item
){

  if(
    balance <
    item.price
  ){

    showToast(

      `Недостаточно средств. Нужно ${money(
        item.price
      )}`

    );

    return;

  }


  /*
    Деньги тратятся
    только здесь.
  */

  balance -=
    item.price;


  /*
    Добавляем предмет
    в инвентарь.
  */

  addInventory(
    item
  );


  /*
    Если это первый предмет,
    делаем его source.
  */

  if(!source.id){

    source = {
      ...item
    };


    const next =
      currentItems()
        .find(
          x =>
            x.price >
            item.price
        );


    if(next){

      target = {
        ...next
      };

    }

  }


  updateBalance();

  renderShop();

  renderInventory();

  updateCards();


  showToast(
    `${item.name} куплен за ${money(
      item.price
    )}`
  );

}


/* ==========================================================
   INVENTORY
========================================================== */

function renderInventory(){

  const grid =
    $("inventoryGrid");


  grid.innerHTML =
    "";


  const owned =
    inventoryItems()
      .filter(
        ({item})=>{

          return category === "pet"

            ? ITEMS.pet.some(
                x =>
                  x.id === item.id
              )

            : ITEMS.potion.some(
                x =>
                  x.id === item.id
              );

        }
      );


  const total =
    owned.reduce(
      (sum,x)=>
        sum + x.quantity,
      0
    );


  $("inventoryCount")
    .textContent =
      `${total} предметов`;


  if(!owned.length){

    grid.innerHTML = `

      <div class="inventory-empty">

        <b>
          🎒 ИНВЕНТАРЬ ПОКА ПУСТ
        </b>

        Купи свой первый предмет
        в магазине выше.

      </div>

    `;

    return;

  }


  owned.forEach(
    ({item,quantity})=>{

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "inventory-item";


      card.innerHTML = `

        <span class="inventory-badge">
          ×${quantity}
        </span>


        <div class="inventory-item-art">

          <img alt="">

          <span>
            ${item.fallback || "🐾"}
          </span>

        </div>


        <div class="inventory-item-name">
          ${item.name}
        </div>


        <div class="inventory-item-meta">

          <span>
            ${item.rarity}
          </span>

          <span>
            ${money(item.price)}
          </span>

        </div>

      `;


      const image =
        card.querySelector(
          "img"
        );


      const fallback =
        card.querySelector(
          ".inventory-item-art span"
        );


      loadSmallImage(
        image,
        fallback,
        item
      );


      card.addEventListener(
        "click",
        ()=>{

          source = {
            ...item
          };


          updateCards();


          showToast(
            `${item.name} выбран для апгрейда`
          );


          window.scrollTo({

            top:0,

            behavior:"smooth"

          });

        }
      );


      grid.appendChild(
        card
      );

    }
  );

}


/* ==========================================================
   SHOP / INVENTORY TABS
========================================================== */

const marketTabShop =
  $("marketTabShop");


const marketTabInventory =
  $("marketTabInventory");


const shopPanel =
  $("shopPanel");


const inventoryPanel =
  $("inventoryPanel");


marketTabShop.addEventListener(
  "click",
  ()=>{

    marketTabShop
      .classList
      .add("active");


    marketTabInventory
      .classList
      .remove("active");


    shopPanel
      .classList
      .remove("hidden");


    inventoryPanel
      .classList
      .add("hidden");

  }
);


marketTabInventory.addEventListener(
  "click",
  ()=>{

    marketTabInventory
      .classList
      .add("active");


    marketTabShop
      .classList
      .remove("active");


    inventoryPanel
      .classList
      .remove("hidden");


    shopPanel
      .classList
      .add("hidden");


    renderInventory();

  }
);


/* ==========================================================
   DEPOSIT
========================================================== */

$("depositButton")
  .addEventListener(
    "click",
    ()=>{

      updateBalance();

      $("depositAmount")
        .value = "";

      openModal(
        "depositModal"
      );

    }
  );


document
  .querySelectorAll(
    ".quick-deposit button"
  )
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        const amount =
          Number(
            button.dataset.add
          );


        balance +=
          amount;


        updateBalance();


        showToast(
          `Баланс пополнен на ${money(
            amount
          )}`
        );

      }
    );

  });


$("depositSubmit")
  .addEventListener(
    "click",
    ()=>{

      const amount =
        Number(
          $("depositAmount").value
        );


      if(
        !Number.isFinite(amount) ||
        amount <= 0
      ){

        showToast(
          "Введи корректную сумму"
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


      showToast(
        `Баланс пополнен на ${money(
          amount
        )}`
      );

    }
  );


/* ==========================================================
   ROBUX
========================================================== */

$("robuxButton")
  .addEventListener(
    "click",
    ()=>{

      openModal(
        "robuxModal"
      );

    }
  );


$("rubButton")
  .addEventListener(
    "click",
    ()=>{

      showToast(
        "Технические работы — покупка будет доступна совсем скоро"
      );

    }
  );


$("uahButton")
  .addEventListener(
    "click",
    ()=>{

      showToast(
        "Технические работы — покупка будет доступна совсем скоро"
      );

    }
  );


/* ==========================================================
   CLOSE MODALS
========================================================== */

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        closeModal(
          button.dataset.close
        );

      }
    );

  });


/* ==========================================================
   ROLL CARD
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


/* ==========================================================
   ROLL ANIMATION
========================================================== */

function animateRoll(
  won
){

  return new Promise(
    resolve=>{

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
        let i=0;
        i<total;
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
        .remove("hidden");


      requestAnimationFrame(()=>{

        requestAnimationFrame(()=>{

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

            width / 2
            -
            (
              card.offsetLeft
              +
              card.offsetWidth / 2
            );


          track.style.transition =
            "transform 3.8s cubic-bezier(.08,.72,.12,1)";


          track.style.transform =
            `translateX(${offset}px)`;


          setTimeout(
            ()=>{

              screen
                .classList
                .add("hidden");


              resolve();

            },
            4000
          );

        });

      });

    }
  );

}


/* ==========================================================
   UPGRADE
========================================================== */

async function upgrade(){

  if(rolling){
    return;
  }


  /*
    Проверяем предмет.
  */

  if(
    !source.id ||
    !inventory.has(
      source.id
    )
  ){

    showToast(
      "Сначала купи предмет в магазине"
    );

    return;

  }


  /*
    Проверяем цель.
  */

  if(
    !target.id ||
    target.price <= source.price
  ){

    showToast(
      "Цель должна быть дороже твоего предмета"
    );

    return;

  }


  /*
    Chance.
  */

  const chance =
    displayedChance();


  /*
    Результат.
  */

  const won =
    fairOutcome(
      chance
    );


  rolling = true;


  $("upgradeButton")
    .disabled = true;


  attempts++;


  /*
    Сохраняем предмет,
    чтобы показать его
    в проигрыше.
  */

  const spentSource = {
    ...source
  };


  /*
    ЗАБИРАЕМ ПРЕДМЕТ
  */

  removeInventory(
    source.id,
    1
  );


  /*
    WIN
  */

  if(won){

    wins++;


    addInventory(
      target,
      1
    );

  }


  /*
    LOSS
  */

  else{

    losses++;

  }


  renderInventory();

  updateStats();


  /*
    РУЛЕТКА
  */

  await animateRoll(
    won
  );


  /*
    RESULT
  */

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


  if(won){

    $("resultInfo").innerHTML = `

      <span>
        Шанс:
        <b>
          ${chance.toFixed(1)}%
        </b>
      </span>

      <span class="green">
        + ${target.name}
      </span>

      <span>
        Предмет добавлен
        в инвентарь
      </span>

    `;

  }else{

    $("resultInfo").innerHTML = `

      <span>
        Шанс:
        <b>
          ${chance.toFixed(1)}%
        </b>
      </span>

      <span class="red">
        − ${spentSource.name}
      </span>

      <span>
        Предмет потерян
      </span>

    `;

  }


  $("resultScreen")
    .classList
    .remove("hidden");


  rolling = false;


  $("upgradeButton")
    .disabled = false;


  /*
    После результата
    ищем предмет в инвентаре.
  */

  const owned =
    inventoryItems()
      .find(
        ({item})=>{

          return category === "pet"

            ? ITEMS.pet.some(
                x =>
                  x.id === item.id
              )

            : ITEMS.potion.some(
                x =>
                  x.id === item.id
              );

        }
      );


  if(owned){

    source = {
      ...owned.item
    };

  }else{

    source = {

      id:null,

      name:"Нет предмета",

      rarity:"ИНВЕНТАРЬ ПУСТ",

      price:0,

      image:"",

      fallback:"🎒",

      halloween:false

    };

  }


  /*
    Выбираем новую цель.
  */

  if(source.id){

    const next =
      currentItems()
        .find(
          item =>
            item.price >
            source.price
        );


    if(next){

      target = {
        ...next
      };

    }

  }


  updateCards();


  renderInventory();

}


/* ==========================================================
   UPGRADE BUTTON
========================================================== */

$("upgradeButton")
  .addEventListener(
    "click",
    upgrade
  );


/* ==========================================================
   RESULT CLOSE
========================================================== */

$("closeResult")
  .addEventListener(
    "click",
    ()=>{

      $("resultScreen")
        .classList
        .add("hidden");

    }
  );


/* ==========================================================
   HALLOWEEN DECOR
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
    let i=0;
    i<22;
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
      `${Math.random()*100}%`;


    node.style.fontSize =
      `${9 + Math.random()*12}px`;


    node.style.animationDelay =
      `${-Math.random()*15}s`;


    node.style.animationDuration =
      `${8 + Math.random()*9}s`;


    root.appendChild(
      node
    );

  }

}


/* ==========================================================
   INIT
========================================================== */

renderShop();

renderInventory();

updateCards();

updateBalance();

updateStats();

spawnDecor();
