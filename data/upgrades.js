// ---------- Улучшения ----------
// Аппараты II и III требуют расчистки сарая (см. buildings.js: maxApp)
const UPGRADES = {
  autopoliv: { name: "Автополив",           icon: "💧", img: "img/upgrades/autopoliv.svg", price: 1500,   rep: 20, desc: "Грядки поливаются сами" },
  app2:      { name: "Аппарат II ступени",  icon: "⚗",  img: "img/upgrades/app2.svg",      price: 5000,   rep: 20, desc: "+10% выхода спирта. Нужен сарай ур. 1" },
  floor2:    { name: "Второй этаж",         icon: "🏠", img: "img/upgrades/floor2.svg",    price: 8000,   rep: 30, desc: "Склад: 200 кг сахара вместо 50" },
  mark:      { name: "Знак качества",       icon: "🎖", img: "img/upgrades/mark.svg",      price: 6000,   rep: 60, desc: "+15% к цене продажи" },
  app3:      { name: "Аппарат III ступени", icon: "⚗",  img: "img/upgrades/app3.svg",      price: 12000,  rep: 60, desc: "+20% выхода спирта. Нужен сарай ур. 2" },
  license:   { name: "Лицензия",            icon: "📜", img: "img/upgrades/license.svg",   price: 100000, rep: 0,  desc: "Жара больше не растёт, участковый не страшен" },
  pech:      { name: "Печь-голландка",      icon: "🔥", price: 1200,   rep: 0,  desc: "Печь сама жжёт дрова и держит тепло в доме" }
};
