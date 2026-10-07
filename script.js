/* ==========================================================
   ADOPT ME • HAUNTED UPGRADER V3
   Currency: RUB (₽)
   Upgrade is ITEM -> ITEM. Money is used only for purchases.

   Change every pet/potion's price and image in ITEMS below.
========================================================== */

const ITEMS = {
  pet: [
    {id:"dog",name:"Dog",rarity:"COMMON",price:100,image:"images/pet-dog.png",fallback:"🐶",halloween:false},
    {id:"cat",name:"Cat",rarity:"COMMON",price:120,image:"images/pet-cat.png",fallback:"🐱",halloween:false},
    {id:"bunny",name:"Bunny",rarity:"UNCOMMON",price:220,image:"images/pet-bunny.png",fallback:"🐰",halloween:false},
    {id:"red-panda",name:"Red Panda",rarity:"ULTRA-RARE",price:480,image:"images/pet-red-panda.png",fallback:"🦊",halloween:false},
    {id:"penguin",name:"Penguin",rarity:"ULTRA-RARE",price:550,image:"images/pet-penguin.png",fallback:"🐧",halloween:false},
    {id:"dragon",name:"Dragon",rarity:"LEGENDARY",price:620,image:"images/pet-dragon.png",fallback:"🐲",halloween:false},
    {id:"turtle",name:"Turtle",rarity:"LEGENDARY",price:1100,image:"images/pet-turtle.png",fallback:"🐢",halloween:false},
    {id:"ghost-dragon",name:"Ghost Dragon",rarity:"LEGENDARY",price:1800,image:"images/pet-ghost-dragon.png",fallback:"🐉",halloween:true},
    {id:"unicorn",name:"Unicorn",rarity:"LEGENDARY",price:1960,image:"images/pet-unicorn.png",fallback:"🦄",halloween:false},
    {id:"scarecrow-cat",name:"Scarecrow Cat",rarity:"ULTRA-RARE",price:950,image:"images/pet-scarecrow-cat.png",fallback:"🎃",halloween:true},
    {id:"werewolf",name:"Werewolf",rarity:"ULTRA-RARE",price:1250,image:"images/pet-werewolf.png",fallback:"🐺",halloween:true},
    {id:"bat-dragon",name:"Bat Dragon",rarity:"LEGENDARY",price:3000,image:"images/pet-bat-dragon.png",fallback:"🦇",halloween:true},
    {id:"evil-chick",name:"Evil Chick",rarity:"LEGENDARY",price:900,image:"images/pet-evil-chick.png",fallback:"🐣",halloween:true}
  ],
  potion: [
    {id:"ride-potion",name:"Ride Potion",rarity:"POTION",price:350,image:"images/potion-ride.png",fallback:"🧪",halloween:false},
    {id:"fly-potion",name:"Fly Potion",rarity:"POTION",price:620,image:"images/potion-fly.png",fallback:"🧪",halloween:false},
    {id:"speed-potion",name:"Speed Potion",rarity:"POTION",price:180,image:"images/potion-speed.png",fallback:"⚡",halloween:false},
    {id:"halloween-potion",name:"Halloween Potion",rarity:"LIMITED",price:800,image:"images/potion-halloween.png",fallback:"🎃",halloween:true},
    {id:"shadow-potion",name:"Shadow Potion",rarity:"LIMITED",price:1250,image:"images/potion-shadow.png",fallback:"🖤",halloween:true}
  ]
};

const FAIR_POOL_SIZE = 200;
const fairPools = new Map();

let category = "pet";
let storeCategory = "pet";
let balance = 0;
let attempts = 0;
let wins = 0;
let losses = 0;
let rolling = false;
let selectedChance = 50;
let selectionMode = "source";

// itemId -> quantity
const inventory = new Map();

let source = {
  id:null,
  name:"Нет предмета",
  rarity:"ИНВЕНТАРЬ ПУСТ",
  price:0,
  image:"",
  fallback:"🎒",
  halloween:false
};

let target = {...ITEMS.pet.find(x=>x.id==="unicorn")};

const $ = id => document.getElementById(id);

function money(value){
  return `${Math.round(Number(value)||0).toLocaleString("ru-RU").replace(/\u00A0/g," ")} ₽`;
}

function currentItems(){return ITEMS[category];}
function storeItems(){return ITEMS[storeCategory];}

function catalogItem(id){
  return [...ITEMS.pet,...ITEMS.potion].find(x=>x.id===id) || null;
}

function addInventory(item,qty=1){
  inventory.set(item.id,(inventory.get(item.id)||0)+qty);
}

function removeInventory(id,qty=1){
  const next=(inventory.get(id)||0)-qty;
  if(next>0) inventory.set(id,next);
  else inventory.delete(id);
}

function inventoryItems(){
  return [...inventory.entries()]
    .map(([id,qty])=>({item:catalogItem(id),qty}))
    .filter(x=>x.item);
}

function updateBalance(){
  $("balanceValue").textContent=money(balance);
  $("depositBalance").textContent=money(balance);
  $("storeBalance").textContent=money(balance);
}

function updateStats(){
  $("attempts").textContent=attempts;
  $("wins").textContent=wins;
  $("losses").textContent=losses;
  $("winrate").textContent=`${attempts?Math.round(wins/attempts*100):0}%`;
}

function multiplier(){
  return source.price>0 ? target.price/source.price : 1;
}

// Chance is based only on source price vs target price.
function displayedChance(){
  if(!source.price || !target.price) return 0;
  return Math.max(1,Math.min(98,98/multiplier()));
}

function showToast(message){
  const node=$("toast");
  node.textContent=message;
  node.classList.remove("hidden");
  node.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer=setTimeout(()=>{
    node.classList.add("hidden");
    node.classList.remove("show");
  },2400);
}

function openModal(id){$(id).classList.remove("hidden");}
function closeModal(id){$(id).classList.add("hidden");}

function bindImage(imgId,fallbackId,item){
  const img=$(imgId);
  const fallback=$(fallbackId);
  img.style.display="none";
  fallback.style.display="block";
  fallback.textContent=item.fallback||"🐾";
  img.src=item.image||"";
  if(!item.image)return;
  img.onload=()=>{img.style.display="block";fallback.style.display="none";};
  img.onerror=()=>{img.style.display="none";fallback.style.display="block";};
}

function updateCards(){
  bindImage("sourceImage","sourceFallback",source);
  bindImage("targetImage","targetFallback",target);

  $("sourceName").textContent=source.name;
  $("sourceMeta").textContent=source.id?`${source.rarity} • FR`:source.rarity;
  $("sourcePrice").textContent=source.id?money(source.price):"Купи предмет в магазине";

  $("targetName").textContent=target.name;
  $("targetMeta").textContent=`${target.rarity} • FR`;
  $("targetPrice").textContent=money(target.price);

  $("multiplier").textContent=source.price?`x${multiplier().toFixed(2)}`:"x—";
  $("chanceText").textContent=source.price?`Шанс ${displayedChance().toFixed(1)}%`:"Сначала купи предмет";

  document.querySelectorAll(".chance-btn").forEach(button=>{
    button.classList.toggle("active",Number(button.dataset.chance)===selectedChance);
  });
}

/* ---------------- FAIR LONG-RUN RESULTS ---------------- */

function buildFairPool(chance){
  const winsNeeded=Math.round(chance*FAIR_POOL_SIZE/100);
  const pool=[];

  for(let i=0;i<winsNeeded;i++)pool.push(true);
  for(let i=winsNeeded;i<FAIR_POOL_SIZE;i++)pool.push(false);

  for(let i=pool.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [pool[i],pool[j]]=[pool[j],pool[i]];
  }

  return pool;
}

function fairOutcome(chance){
  const key=Number(chance).toFixed(1);

  if(!fairPools.has(key)||fairPools.get(key).length===0){
    fairPools.set(key,buildFairPool(chance));
  }

  return fairPools.get(key).pop();
}

/* ---------------- CATEGORY ---------------- */

document.querySelectorAll(".mode-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    if(rolling)return;

    category=button.dataset.category;

    document.querySelectorAll(".mode-btn")
      .forEach(x=>x.classList.toggle("active",x===button));

    $("modeLabel").textContent=category==="pet"?"ПЕТЫ":"ЗЕЛЬЕ";

    const owned=inventoryItems().filter(({item})=>
      category==="pet"
        ? ITEMS.pet.some(i=>i.id===item.id)
        : ITEMS.potion.some(i=>i.id===item.id)
    );

    source=owned.length
      ? {...owned[0].item}
      : {
          id:null,
          name:"Нет предмета",
          rarity:"ИНВЕНТАРЬ ПУСТ",
          price:0,
          image:"",
          fallback:"🎒",
          halloween:false
        };

    const next=currentItems().find(x=>x.price>(source.price||0))||currentItems()[0];

    if(next)target={...next};

    selectedChance=50;

    renderCollection();
    renderInventory();
    updateCards();
  });
});

/* ---------------- SELECTION ---------------- */

function openSelection(mode){
  selectionMode=mode;

  $("selectionTitle").textContent=
    mode==="source"
      ?"ВЫБЕРИ ПРЕДМЕТ ИЗ ИНВЕНТАРЯ"
      :"ВЫБЕРИ ЦЕЛЬ";

  $("itemSearch").value="";

  renderSelection();
  openModal("selectionModal");
}

function renderSelection(query=""){
  const q=query.trim().toLowerCase();
  const list=$("selectionList");

  list.innerHTML="";

  if(selectionMode==="source"){
    const owned=inventoryItems().filter(({item})=>{
      const matchCat=
        category==="pet"
          ? ITEMS.pet.some(i=>i.id===item.id)
          : ITEMS.potion.some(i=>i.id===item.id);

      return matchCat&&item.name.toLowerCase().includes(q);
    });

    if(!owned.length){
      list.innerHTML=
        `<div class="inventory-empty"><b>🎒 ИНВЕНТАРЬ ПУСТ</b>Сначала купи предмет в магазине.</div>`;
      return;
    }

    owned.forEach(({item,qty})=>{
      const row=document.createElement("button");
      row.type="button";
      row.className="selection-row";

      row.innerHTML=`
        <div class="selection-art">
          <img alt="">
          <span>${item.fallback||"🐾"}</span>
        </div>
        <div class="selection-details">
          <b>${item.name}</b>
          <span>${item.rarity} • В ИНВЕНТАРЕ ×${qty}</span>
          <strong>${money(item.price)}</strong>
        </div>
        <span class="selection-type">ВЗЯТЬ</span>
      `;

      const img=row.querySelector("img");
      const fallback=row.querySelector(".selection-art span");

      if(item.image){
        img.src=item.image;
        img.onload=()=>{
          img.style.display="block";
          fallback.style.display="none";
        };
      }

      row.addEventListener("click",()=>{
        source={...item};
        closeModal("selectionModal");
        updateCards();
      });

      list.appendChild(row);
    });

    return;
  }

  currentItems()
    .filter(item=>item.name.toLowerCase().includes(q))
    .forEach(item=>{
      const disabled=!source.id||item.price<=source.price;

      const row=document.createElement("button");
      row.type="button";
      row.className="selection-row";

      row.innerHTML=`
        <div class="selection-art">
          <img alt="">
          <span>${item.fallback||"🐾"}</span>
        </div>
        <div class="selection-details">
          <b>${item.name}</b>
          <span>${item.rarity}${item.halloween?" • HALLOWEEN":""}</span>
          <strong>${money(item.price)}</strong>
        </div>
        <span class="selection-type">${disabled?"НИЖЕ":"ЦЕЛЬ"}</span>
      `;

      if(disabled)row.style.opacity=".43";

      const img=row.querySelector("img");
      const fallback=row.querySelector(".selection-art span");

      if(item.image){
        img.src=item.image;
        img.onload=()=>{
          img.style.display="block";
          fallback.style.display="none";
        };
      }

      row.addEventListener("click",()=>{
        if(disabled){
          showToast("Цель должна быть дороже твоего предмета");
          return;
        }

        target={...item};

        closeModal("selectionModal");
        updateCards();
      });

      list.appendChild(row);
    });
}

$("sourceButton").addEventListener("click",()=>openSelection("source"));
$("targetButton").addEventListener("click",()=>openSelection("target"));
$("itemSearch").addEventListener("input",e=>renderSelection(e.target.value));

document.querySelectorAll("[data-close]").forEach(btn=>
  btn.addEventListener("click",()=>closeModal(btn.dataset.close))
);

/* ---------------- PRICE-BASED PRESETS ---------------- */

document.querySelectorAll(".chance-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    if(!source.id){
      showToast("Сначала купи предмет в магазине");
      return;
    }

    const chance=Number(button.dataset.chance);

    selectedChance=chance;

    const wanted=source.price*(98/chance);

    const candidate=currentItems()
      .filter(item=>item.id!==source.id&&item.price>source.price)
      .sort(
        (a,b)=>
          Math.abs(a.price-wanted)-Math.abs(b.price-wanted)
      )[0];

    if(candidate)target={...candidate};

    updateCards();
  });
});

/* ---------------- COLLECTION / CATALOG ---------------- */

function renderCollection(){
  const grid=$("itemGrid");

  grid.innerHTML="";

  currentItems().forEach(item=>{
    const card=document.createElement("button");

    card.type="button";
    card.className="grid-item";

    card.innerHTML=`
      ${item.halloween?'<span class="event-tag">🎃 EVENT</span>':""}
      <div class="grid-item-art">
        <img alt="">
        <span>${item.fallback||"🐾"}</span>
      </div>
      <div class="grid-item-name">${item.name}</div>
      <div class="grid-meta">
        <span>${item.rarity}</span>
        <span class="grid-price">${money(item.price)}</span>
      </div>
    `;

    const img=card.querySelector("img");
    const fallback=card.querySelector(".grid-item-art span");

    if(item.image){
      img.src=item.image;

      img.onload=()=>{
        img.style.display="block";
        fallback.style.display="none";
      };
    }

    card.addEventListener("click",()=>{
      target={...item};

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

      updateCards();
    });

    grid.appendChild(card);
  });
}

/* ---------------- INVENTORY ---------------- */

function renderInventory(){
  const grid=$("inventoryGrid");

  grid.innerHTML="";

  const owned=inventoryItems().filter(({item})=>
    category==="pet"
      ? ITEMS.pet.some(i=>i.id===item.id)
      : ITEMS.potion.some(i=>i.id===item.id)
  );

  const total=owned.reduce((sum,x)=>sum+x.qty,0);

  $("inventoryCount").textContent=`${total} предметов`;

  if(!owned.length){
    grid.innerHTML=`
      <div class="inventory-empty">
        <b>🎒 ИНВЕНТАРЬ ПОКА ПУСТ</b>
        Открой магазин, купи первый предмет за ₽ и начинай апгрейд.
      </div>
    `;
    return;
  }

  owned.forEach(({item,qty})=>{
    const card=document.createElement("button");

    card.type="button";
    card.className="inventory-item";

    card.innerHTML=`
      <span class="inventory-badge">×${qty}</span>
      <div class="inventory-item-art">
        <img alt="">
        <span>${item.fallback||"🐾"}</span>
      </div>
      <div class="inventory-item-name">${item.name}</div>
      <div class="inventory-item-meta">
        <span>${item.rarity}</span>
        <span>${money(item.price)}</span>
      </div>
    `;

    const img=card.querySelector("img");
    const fallback=card.querySelector(".inventory-item-art span");

    if(item.image){
      img.src=item.image;

      img.onload=()=>{
        img.style.display="block";
        fallback.style.display="none";
      };
    }

    card.addEventListener("click",()=>{
      source={...item};

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

      updateCards();

      showToast(`${item.name} выбран для апгрейда`);
    });

    grid.appendChild(card);
  });
}

/* ---------------- STORE ---------------- */

function openStore(){
  storeCategory=category;
  $("storeSearch").value="";

  document.querySelectorAll(".store-tab").forEach(x=>
    x.classList.toggle(
      "active",
      x.dataset.storeCategory===storeCategory
    )
  );

  renderStore();
  openModal("storeModal");
}

function renderStore(query=""){
  const q=query.trim().toLowerCase();
  const list=$("storeList");

  list.innerHTML="";

  $("storeBalance").textContent=money(balance);

  const items=storeItems()
    .filter(item=>item.name.toLowerCase().includes(q));

  if(!items.length){
    list.innerHTML=`<div class="shop-no-items">Ничего не найдено.</div>`;
    return;
  }

  items.forEach(item=>{
    const owned=inventory.get(item.id)||0;
    const canBuy=balance>=item.price;

    const row=document.createElement("div");
    row.className="store-row";

    row.innerHTML=`
      <div class="store-row-art">
        <img alt="">
        <span>${item.fallback||"🐾"}</span>
      </div>

      <div class="store-row-info">
        <b>${item.name}</b>
        <span>${item.rarity}${item.halloween?" • HALLOWEEN":""}</span>
        <strong>
          ${money(item.price)}
          ${owned?` • В инв. ×${owned}`:""}
        </strong>
      </div>

      <button class="buy-item-btn" ${canBuy?"":"disabled"}>
        КУПИТЬ
      </button>
    `;

    const img=row.querySelector("img");
    const fallback=row.querySelector(".store-row-art span");

    if(item.image){
      img.src=item.image;

      img.onload=()=>{
        img.style.display="block";
        fallback.style.display="none";
      };
    }

    row.querySelector(".buy-item-btn")
      .addEventListener("click",()=>purchaseItem(item));

    list.appendChild(row);
  });
}

function purchaseItem(item){
  if(balance<item.price){
    showToast(`Недостаточно средств. Нужно ${money(item.price)}`);
    return;
  }

  balance-=item.price;

  addInventory(item);

  updateBalance();
  renderInventory();
  renderStore($("storeSearch").value);

  if(!source.id){
    source={...item};

    const next=currentItems().find(x=>x.price>item.price)||currentItems()[0];

    if(next)target={...next};

    updateCards();
  }

  showToast(`${item.name} куплен за ${money(item.price)}`);
}

$("storeButton").addEventListener("click",openStore);
$("inventoryShopButton").addEventListener("click",openStore);

$("storeSearch").addEventListener(
  "input",
  e=>renderStore(e.target.value)
);

document.querySelectorAll(".store-tab").forEach(btn=>
  btn.addEventListener("click",()=>{
    storeCategory=btn.dataset.storeCategory;

    document.querySelectorAll(".store-tab").forEach(x=>
      x.classList.toggle("active",x===btn)
    );

    renderStore($("storeSearch").value);
  })
);

/* ---------------- DEPOSIT / RUB ---------------- */

$("depositButton").addEventListener("click",()=>{
  updateBalance();
  $("depositAmount").value="";
  openModal("depositModal");
});

document.querySelectorAll(".quick-deposit button")
  .forEach(button=>
    button.addEventListener("click",()=>{
      const amount=Number(button.dataset.add);

      balance+=amount;

      updateBalance();
      renderStore($("storeSearch").value);

      showToast(`Баланс пополнен на ${money(amount)}`);
    })
  );

$("depositSubmit").addEventListener("click",()=>{
  const amount=Number($("depositAmount").value);

  if(!Number.isFinite(amount)||amount<=0){
    showToast("Введи корректную сумму");
    return;
  }

  balance+=Math.floor(amount);

  updateBalance();
  renderStore($("storeSearch").value);
  closeModal("depositModal");

  showToast(`Баланс пополнен на ${money(amount)}`);
});

/* ---------------- ROBUX ---------------- */

$("robuxButton").addEventListener(
  "click",
  ()=>openModal("robuxModal")
);

$("rubButton").addEventListener(
  "click",
  ()=>showToast("Технические работы — покупка будет доступна совсем скоро")
);

$("uahButton").addEventListener(
  "click",
  ()=>showToast("Технические работы — покупка будет доступна совсем скоро")
);

/* ---------------- ROLL ---------------- */

function createRollCard(won){
  const card=document.createElement("div");

  card.className="roll-card";

  card.innerHTML=`
    <span class="emoji">${won?"🎃":"💀"}</span>
    <span class="label">${won?"ВЫИГРЫШ":"НЕУДАЧА"}</span>
  `;

  return card;
}

function animateRoll(won){
  return new Promise(resolve=>{
    const screen=$("rollScreen");
    const track=$("rollTrack");

    const total=52;
    const finalIndex=38;

    track.innerHTML="";
    track.style.transition="none";
    track.style.transform="translateX(0)";

    for(let i=0;i<total;i++){
      track.appendChild(
        createRollCard(
          i===finalIndex
            ? won
            : Math.random()<.5
        )
      );
    }

    screen.classList.remove("hidden");

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        const card=track.children[finalIndex];

        const width=
          document
            .querySelector(".roll-window")
            .getBoundingClientRect()
            .width;

        const offset=
          width/2-
          (card.offsetLeft+card.offsetWidth/2);

        track.style.transition=
          "transform 3.8s cubic-bezier(.08,.72,.12,1)";

        track.style.transform=
          `translateX(${offset}px)`;

        setTimeout(()=>{
          screen.classList.add("hidden");
          resolve();
        },4000);
      });
    });
  });
}

/* ---------------- ITEM UPGRADE ---------------- */

async function upgrade(){
  if(rolling)return;

  if(!source.id||!inventory.has(source.id)){
    showToast("Сначала купи предмет и выбери его из инвентаря");
    return;
  }

  if(!target.id||target.price<=source.price){
    showToast("Цель должна быть дороже твоего предмета");
    return;
  }

  const chance=displayedChance();
  const won=fairOutcome(chance);

  rolling=true;
  $("upgradeButton").disabled=true;

  attempts++;

  // Upgrade spends the ITEM, not the money balance.
  const spentSource={...source};

  removeInventory(source.id,1);

  if(won){
    wins++;
    addInventory(target,1);
  }else{
    losses++;
  }

  renderInventory();
  updateStats();

  await animateRoll(won);

  $("resultEmoji").textContent=won?"🎃":"💀";
  $("resultTitle").textContent=won?"ВЫИГРЫШ":"ПРОИГРЫШ";

  $("resultInfo").innerHTML=won?`
    <span>Шанс: <b>${chance.toFixed(1)}%</b></span>
    <span class="green">+ ${target.name}</span>
    <span>Предмет добавлен в инвентарь</span>
  `:`
    <span>Шанс: <b>${chance.toFixed(1)}%</b></span>
    <span class="red">− ${spentSource.name}</span>
    <span>Предмет потерян</span>
  `;

  $("resultScreen").classList.remove("hidden");

  rolling=false;
  $("upgradeButton").disabled=false;

  const owned=inventoryItems().find(({item})=>
    category==="pet"
      ? ITEMS.pet.some(i=>i.id===item.id)
      : ITEMS.potion.some(i=>i.id===item.id)
  );

  source=owned
    ? {...owned.item}
    : {
        id:null,
        name:"Нет предмета",
        rarity:"ИНВЕНТАРЬ ПУСТ",
        price:0,
        image:"",
        fallback:"🎒",
        halloween:false
      };

  if(source.id){
    const next=
      currentItems().find(x=>x.price>source.price)
      || currentItems()[0];

    if(next)target={...next};
  }

  updateCards();
}

$("upgradeButton").addEventListener("click",upgrade);

$("closeResult").addEventListener(
  "click",
  ()=>$("resultScreen").classList.add("hidden")
);

/* ---------------- DECOR ---------------- */

function spawnDecor(){
  const root=$("fallingDecor");
  const icons=["🎃","🍂","🕸️","🦇"];

  for(let i=0;i<22;i++){
    const node=document.createElement("span");

    node.className="fall";
    node.textContent=
      icons[Math.floor(Math.random()*icons.length)];

    node.style.left=`${Math.random()*100}%`;
    node.style.fontSize=`${9+Math.random()*12}px`;
    node.style.animationDelay=`${-Math.random()*15}s`;
    node.style.animationDuration=`${8+Math.random()*9}s`;

    root.appendChild(node);
  }
}

/* ---------------- INIT ---------------- */

renderCollection();
renderInventory();
updateCards();
updateBalance();
updateStats();
spawnDecor();
