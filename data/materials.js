// ---------- Материалы для браги и огорода ----------
const MATERIALS = {
  seeds_beet:   { name: "Семена свёклы",        icon: "🌱", img: "img/materials/seeds_beet.svg",   price: 50,  desc: "Покупается при посадке на грядку" },
  seeds_potato: { name: "Семена картофеля",     icon: "🥔", img: "img/materials/seeds_potato.svg", price: 70,  desc: "Посадка открыта с 10 репутации" },
  sugar:        { name: "Сахар (мешок, 10 кг)", icon: "🧺", img: "img/materials/sugar.svg",        price: 300, desc: "Сырьё для сахарной браги" },
  yeast:        { name: "Дрожжи",               icon: "🫙", img: "img/materials/yeast.svg",        price: 100, desc: "Брожение быстрее на один день" },
  fertilizer:   { name: "Удобрение",            icon: "💩", img: "img/materials/fertilizer.svg",   price: 150, desc: "+5 кг к следующему урожаю" },
  bottles:      { name: "Бутылка",              icon: "🍾", img: "img/materials/bottle.svg",       price: 40,  desc: "Без тары самогон не продать" }
};

// Культуры для грядок
const CROPS = {
  beet:   { name: "Свёкла",    icon: "🍠", img: "img/crops/beet.svg",   yield: 12, rep: 0  },
  potato: { name: "Картофель", icon: "🥔", img: "img/crops/potato.svg", yield: 15, rep: 10
