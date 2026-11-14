// ---------- Материалы для браги и огорода ----------
const MATERIALS = {
  seeds_beet:   { name: "Семена свёклы",        price: 50,  desc: "Покупается при посадке на грядку" },
  seeds_potato: { name: "Семена картофеля",     price: 70,  desc: "Посадка открыта с 10 репутации" },
  sugar:        { name: "Сахар (мешок, 10 кг)", price: 300, desc: "Сырьё для сахарной браги" },
  yeast:        { name: "Дрожжи",               price: 100, desc: "Брожение быстрее на один день" },
  fertilizer:   { name: "Удобрение",            price: 150, desc: "+5 кг к следующему урожаю" },
  bottles:      { name: "Бутылка",              price: 40,  desc: "Без тары самогон не продать" }
};

// Культуры для грядок
const CROPS = {
  beet:   { name: "Свёкла",    yield: 12, rep: 0  },
  potato: { name: "Картофель", yield: 15, rep: 10 }
};

const UNITS = { sugar: "кг", beet: "кг", potato: "кг" };
