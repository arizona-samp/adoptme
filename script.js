/* ==========================================================
   HAUNTED ADOPT • UPGRADER
========================================================== */


/* ==========================================================
   ССЫЛКА ДЛЯ КНОПКИ "ВОЙТИ"
========================================================== */

const LOGIN_URL =
  "https://example.com/login";


/* ==========================================================
   СОЗДАНИЕ ЦЕН
========================================================== */

function createPrices(
  base,
  custom = {}
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
      Math.round(base * 5),

    "ride-fly-neon-mega-neon":
      Math.round(base * 5.4)

  };


  return {
    ...prices,
    ...custom
  };

}


/* ==========================================================
   ITEMS

   ВАЖНО:

   У ПЕТОВ есть prices.

   У ЗЕЛЕК только normal.

   Поэтому у зелий никаких:
   Ride / Fly / Neon / Mega Neon
   НЕТ.
========================================================== */

const ITEMS = {


  /* ========================================================
     PETS
  ======================================================== */

  pet:[

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
          "ride-fly-neon":270,
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


  /* ========================================================
     POTIONS
  ======================================================== */

  potion:[

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
   SETTINGS
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
  inventoryKey:

  pet-id::variant

  Например:

  turtle::normal
  turtle::ride
  turtle::neon
  turtle::ride-fly-neon
*/

const inventory =
  new Map();


/*
  Выбранные свойства
  магазина.
*/

const shopSelections =
  new Map();


/*
  Выбранные свойства
  окна выбора цели.
*/

const targetSelections =
  new Map();


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

  properties:emptyProperties()

};


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

  properties:emptyProperties()

};


/* ==========================================================
   DOM
========================================================== */

const $ =
  id =>
    document.getElementById(id);


/* ==========================================================
   PROPERTIES
========================================================== */

function emptyProperties(){

  return {

    ride:false,

    fly:false,

    neon:false,

    mega:false

  };

}


function propertiesToKey(
  properties
){

  const result = [];


  if(properties.ride){

    result.push(
      "ride"
    );

  }


  if(properties.fly){

    result.push(
      "fly"
    );

  }


  if(properties.neon){

    result.push(
      "neon"
    );

  }


  if(properties.mega){

    result.push(
      "mega-neon"
    );

  }


  if(!result.length){

    return "normal";

  }


  return result.join(
    "-"
  );

}


function keyToProperties(
  key
){

  const properties =
    emptyProperties();


  if(!key || key === "normal"){

    return properties;

  }


  if(key.includes("ride")){

    properties.ride =
      true;

  }


  if(key.includes("fly")){

    properties.fly =
      true;

  }


  if(
    key.includes("neon")
    &&
    !key.includes("mega-neon")
  ){

    properties.neon =
      true;

  }


  if(
    key.includes("mega-neon")
  ){

    properties.mega =
      true;

  }


  return properties;

}


/* ==========================================================
   VARIANT LABEL
========================================================== */

function propertyLabel(
  properties
){

  const result = [];


  if(properties.ride){

    result.push(
      "Ride"
    );

  }


  if(properties.fly){

    result.push(
      "Fly"
    );

  }


  if(properties.neon){

    result.push(
      "Neon"
    );

  }


  if(properties.mega){

    result.push(
      "Mega Neon"
    );

  }


  if(!result.length){

    return "Обычный";

  }


  return result.join(
    " "
  );

}


/* ==========================================================
   MONEY
========================================================== */

function money(
  value
){

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
   ITEMS
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

  return allItems().find(
    item =>
      item.id === id
  ) || null;

}


function currentItems(){

  return ITEMS[
    category
  ];

}


function currentShopItems(){

  return ITEMS[
    shopCategory
  ];

}


/* ==========================================================
   PRICE
========================================================== */

function getVariantPrice(
  item,
  variantKey
){

  /*
    У зелий только normal.
  */

  if(
    !ITEMS.potion.some(
      potion =>
        potion.id === item.id
    )
  ){

    if(
      item.prices &&
      item.prices[
        variantKey
      ] != null
    ){

      return Number(
        item.prices[
          variantKey
        ]
      );

    }

  }


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


/* ==========================================================
   CREATE VARIANT
========================================================== */

function createVariant(
  item,
  properties
){

  /*
    У зелий свойства
    принудительно отключаем.
  */

  const isPotion =
    ITEMS.potion.some(
      potion =>
        potion.id === item.id
    );


  if(isPotion){

    properties =
      emptyProperties();

  }


  const variantKey =
    propertiesToKey(
      properties
    );


  const price =
    getVariantPrice(
      item,
      variantKey
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

    variantLabel:
      propertyLabel(
        properties
      ),

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


function getTargetSelection(
  itemId
){

  if(
    !targetSelections.has(
      itemId
    )
  ){

    targetSelections.set(
      itemId,
      emptyProperties()
    );

  }


  return targetSelections.get(
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


function inventoryItems(){

  return [

    ...inventory.entries()

  ]

  .map(
    ([inventoryKey,quantity])=>{

      const split =
        inventoryKey.split(
          "::"
        );


      const itemId =
        split[0];


      const variantKey =
        split[1] ||
        "normal";


      const item =
        findItem(
          itemId
        );


      if(!item){

        return null;

      }


      const variant =
        createVariant(
          item,
          keyToProperties(
            variantKey
          )
        );


      return {

        ...variant,

        inventoryKey,

        quantity

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
      3000
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
   IMAGE
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
   UPDATE CARDS
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
        ) === selectedChance

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

    pool.push(
      true
    );

  }


  for(
    let i=winsNeeded;
    i<FAIR_POOL_SIZE;
    i++
  ){

    pool.push(
      false
    );

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

    !fairPools.has(
      key
    )

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
          "Укажи свою ссылку в LOGIN_URL в script.js"
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
              variant=>{

                if(
                  category ===
                  "pet"
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


        if(owned.length){

          source =
            {
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
                (
                  source.price ||
                  0
                )
            );


        if(next){

          target =
            {
              ...next
            };

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

      const isPotion =
        shopCategory ===
        "potion";


      const properties =
        isPotion

          ? emptyProperties()

          : getShopSelection(
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
        isPotion
          ? "grid-item potion-card"
          : "grid-item";


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
            ${money(variant.price)}
          </span>

        </div>


        ${
          isPotion

          ? ""

          : `

            <div class="property-title">
              СВОЙСТВА
            </div>


            <div class="property-grid">

              <button
                class="property-btn ${
                  properties.ride
                    ? "active"
                    : ""
                }"
                data-property="ride"
              >

                <span class="property-letter">
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

                <span class="property-letter">
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

                <span class="property-letter">
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

                <span class="property-letter">
                  M
                </span>

                MEGA

              </button>

            </div>

          `
        }


        <div class="variant-name">
          ${variant.variantLabel}
        </div>


        <div class="variant-price">
          ${money(variant.price)}
        </div>


        <button class="shop-buy-btn">

          КУПИТЬ • ${money(variant.price)}

        </button>

      `;


      loadImage(

        card.querySelector("img"),

        card.querySelector(
          ".grid-item-art span"
        ),

        item

      );


      /*
        Свойства только у PETS.
      */

      if(!isPotion){

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

      }


      /*
        Покупка.
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


      grid.appendChild(
        card
      );

    });

}


/* ==========================================================
   BUY
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


  balance -=
    variant.price;


  addInventory(
    variant
  );


  /*
    Первый предмет
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
        .map(
          item =>
            createVariant(
              item,
              emptyProperties()
            )
        )
        .find(
          item =>
            item.price >
            variant.price
        );


    if(next){

      target =
        {
          ...next
        };

    }

  }


  updateBalance();

  renderInventory();

  updateCards();


  showToast(

    `✓ ${variant.name} • ${variant.variantLabel} куплен за ${money(
      variant.price
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


  const items =
    inventoryItems()
      .filter(
        variant=>{

          return category === "pet"

            ? ITEMS.pet.some(
                item =>
                  item.id ===
                  variant.itemId
              )

            : ITEMS.potion.some(
                item =>
                  item.id ===
                  variant.itemId
              );

        }
      );


  const total =
    items.reduce(
      (sum,item)=>
        sum + item.quantity,
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


        <div class="inventory-item-art">

          <img alt="">

          <span>
            ${variant.fallback || "🐾"}
          </span>

        </div>


        <div class="inventory-item-name">
          ${variant.name}
        </div>


        <div class="inventory-item-meta">
          ${variant.rarity}
        </div>


        ${
          variant.variantLabel !== "Обычный"

          ? `

            <div class="inventory-variant">
              ${variant.variantLabel}
            </div>

          `

          : `

            <div class="inventory-variant">
              Обычный
            </div>

          `
        }


        <div class="inventory-price">
          ${money(variant.price)}
        </div>

      `;


      loadImage(

        card.querySelector("img"),

        card.querySelector(
          ".inventory-item-art span"
        ),

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
   SOURCE / TARGET CARD
========================================================== */

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


$("sourceCard")
  .addEventListener(
    "click",
    ()=>{

      openSelection(
        "source"
      );

    }
  );


$("targetCard")
  .addEventListener(
    "click",
    ()=>{

      openSelection(
        "target"
      );

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

        : "ВЫБЕРИ ЦЕЛЬ ДЛЯ АПГРЕЙДА";


  $("itemSearch")
    .value =
      "";


  renderSelection();


  openModal(
    "selectionModal"
  );

}


/* ==========================================================
   RENDER SELECTION
========================================================== */

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


  /* ========================================================
     SOURCE
  ======================================================== */

  if(
    selectionMode === "source"
  ){

    const owned =
      inventoryItems()
        .filter(
          variant=>{

            const categoryMatch =

              category === "pet"

                ? ITEMS.pet.some(
                    item =>
                      item.id ===
                      variant.itemId
                  )

                : ITEMS.potion.some(
                    item =>
                      item.id ===
                      variant.itemId
                  );


            const searchMatch =

              variant.name
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


          <div class="selection-details">

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


  /* ========================================================
     TARGET
  ======================================================== */

  currentItems()
    .filter(
      item =>
        item.name
          .toLowerCase()
          .includes(q)
    )
    .forEach(
      item=>{

        /*
          Если это зелье,
          никаких свойств.
        */

        const isPotion =
          category === "potion";


        const properties =

          isPotion

            ? emptyProperties()

            : getTargetSelection(
                item.id
              );


        const variant =
          createVariant(
            item,
            properties
          );


        const disabled =
          !source.itemId ||
          variant.price <=
          source.price;


        const wrapper =
          document.createElement(
            "div"
          );


        wrapper.className =
          "target-option";


        wrapper.innerHTML = `

          <div class="target-option-top">

            <div class="target-option-image">

              <img alt="">

              <span>
                ${item.fallback || "🐾"}
              </span>

            </div>


            <div class="target-option-info">

              <b>
                ${item.name}
              </b>

              <span>
                ${item.rarity}
              </span>

            </div>


            <div class="target-option-price">

              ${money(variant.price)}

            </div>

          </div>


          ${
            isPotion

              ? ""

              : `

                <div class="target-properties">

                  <div class="target-properties-title">
                    СВОЙСТВА ЦЕЛИ
                  </div>


                  <div class="target-property-grid">

                    <button
                      class="target-property-btn ${
                        properties.ride
                          ? "active"
                          : ""
                      }"
                      data-property="ride"
                    >
                      RIDE
                    </button>


                    <button
                      class="target-property-btn ${
                        properties.fly
                          ? "active"
                          : ""
                      }"
                      data-property="fly"
                    >
                      FLY
                    </button>


                    <button
                      class="target-property-btn ${
                        properties.neon
                          ? "active"
                          : ""
                      }"
                      data-property="neon"
                    >
                      NEON
                    </button>


                    <button
                      class="target-property-btn ${
                        properties.mega
                          ? "active"
                          : ""
                      }"
                      data-property="mega"
                    >
                      MEGA
                    </button>

                  </div>

                </div>

              `
          }


          <div class="target-option-bottom">

            <div class="target-current-variant">

              ${
                variant.variantLabel === "Обычный"

                  ? "Без свойств"

                  : variant.variantLabel
              }

              • ${money(variant.price)}

            </div>


            <button
              class="target-select-btn"
              ${disabled ? "disabled" : ""}
            >

              ${
                disabled
                  ? "НЕДОСТУПНО"
                  : "ВЫБРАТЬ"
              }

            </button>

          </div>

        `;


        loadImage(

          wrapper.querySelector(
            ".target-option-image img"
          ),

          wrapper.querySelector(
            ".target-option-image span"
          ),

          item

        );


        /*
          Кнопки свойств
        */

        if(!isPotion){

          wrapper
            .querySelectorAll(
              ".target-property-btn"
            )
            .forEach(
              button=>{

                button.addEventListener(
                  "click",
                  event=>{

                    event.stopPropagation();


                    const property =
                      button.dataset.property;


                    properties[property] =
                      !properties[
                        property
                      ];


                    targetSelections.set(

                      item.id,

                      {
                        ...properties
                      }

                    );


                    renderSelection(
                      $("itemSearch")
                        .value
                    );

                  }
                );

              }
            );

        }


        /*
          Выбор цели
        */

        wrapper
          .querySelector(
            ".target-select-btn"
          )
          .addEventListener(
            "click",
            ()=>{

              if(disabled){

                showToast(
                  "Эта цель дешевле или равна вашему предмету"
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


              showToast(

                `Цель: ${target.name} • ${target.variantLabel}`

              );

            }
          );


        list.appendChild(
          wrapper
        );

      }
    );

}


/* ==========================================================
   SEARCH
========================================================== */

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
   CHANCE BUTTONS
========================================================== */

document
  .querySelectorAll(
    ".chance-btn"
  )
  .forEach(
    button=>{

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
            (
              98 /
              chance
            );


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
    button=>{

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

    }
  );


$("depositSubmit")
  .addEventListener(
    "click",
    ()=>{

      const amount =
        Number(
          $("depositAmount")
            .value
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

      ${
        won
          ? "🎃"
          : "💀"
      }

    </span>


    <span class="label">

      ${
        won
          ? "ВЫИГРЫШ"
          : "НЕУДАЧА"
      }

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


  rolling =
    true;


  $("upgradeButton")
    .disabled =
      true;


  attempts++;


  const spentSource =
    {
      ...source
    };


  /*
    SOURCE исчезает
  */

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

        ${
          target.variantLabel !==
          "Обычный"

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
          spentSource.variantLabel !==
          "Обычный"

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


  rolling =
    false;


  $("upgradeButton")
    .disabled =
      false;


  /*
    Выбираем следующий
    предмет из инвентаря.
  */

  const sameCategory =
    inventoryItems()
      .find(
        variant=>{

          if(
            category ===
            "pet"
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


  if(sameCategory){

    source =
      {
        ...sameCategory
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
    Новая обычная цель.
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
   BUTTON
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
        .add(
          "hidden"
        );

    }
  );


/* ==========================================================
   DECOR
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
