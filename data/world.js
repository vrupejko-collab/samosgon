// ---------- Покупатели и сбыт ----------
const BUYERS = {
  neighbor: {
    name: "Сосед Михалыч", icon: "🧢", rep: 0, buysBraga: true, buysSpirit: true,
    mult: 1.0, heat: 2, minQ: 0,
    desc: "Берёт и свежую брагу, и самогон. Платит скромно, зато без лишнего шума."
  },
  market: {
    name: "Перекуп на рынке", icon: "🏪", rep: 5, buysBraga: true, buysSpirit: true,
    mult: 1.2, heat: 6, minQ: 40,
    desc: "Скупает всё подряд по хорошей цене, но привлекает внимание участкового."
  },
  tavern: {
    name: "Трактирщик «Кабачок»", icon: "🍻", rep: 25, buysBraga: false, buysSpirit: true,
    mult: 1.45, heat: 4, minQ: 60,
    desc: "Берёт только качественный самогон (от 60). Победитель по цене."
  }
};

// ---------- Сезоны и погода ----------
const SEASONS = [
  { id: "spring", name: "Весна", icon: "🌱", outTemp: 8,  canPlant: true,  desc: "Оттепель, тает снег. Пора вскапывать первые грядки." },
  { id: "summer", name: "Лето",  icon: "☀️", outTemp: 22, canPlant: true,  desc: "Тёплые дни. Урожай растёт быстро, но почва сохнет." },
  { id: "autumn", name: "Осень", icon: "🍂", outTemp: 5,  canPlant: true,  desc: "Частые дожди. Время собирать урожай и запасать дрова." },
  { id: "winter", name: "Зима",  icon: "❄️", outTemp: -14,canPlant: false, desc: "Лютые морозы. Огород под снегом — топи печь и гони из запасов." }
];

const WEATHERS = [
  { id: "clear", name: "Ясно",     icon: "🌤", tempMod: 3,  rain: false, heatMult: 1.0 },
  { id: "rain",  name: "Дождь",    icon: "🌧", tempMod: -2, rain: true,  heatMult: 0.6 },
  { id: "wind",  name: "Ветрено",  icon: "💨", tempMod: -4, rain: false, heatMult: 0.9 },
  { id: "frost", name: "Непогода", icon: "⛈", tempMod: -7, rain: true,  heatMult: 0.4 }
];

// ---------- Случайные события ----------
const EVENTS = [
  { id: "inspector", title: "Обход участкового", cond: s => s.heat >= 45 && !s.license,
    run: s => {
      if (s.spirit > 0 || s.mash > 0) {
        const lostS = Math.ceil(s.spirit * 0.5);
        s.spirit -= lostS; s.heat = Math.max(0, s.heat - 25);
        return `Участковый нагрянул с проверкой! Конфисковано ${lostS} л самогона.`;
      }
      s.heat = Math.max(0, s.heat - 15);
      return "Участковый заглянул во двор, но ничего не нашёл и ушёл.";
    }
  },
  { id: "traveler", title: "Заезжий путник", cond: s => s.spirit >= 2,
    run: s => {
      s.spirit -= 2; const pay = 420; s.money += pay; s.rep += 2;
      return `У дороги сломалась машина у туриста. Купил 2 л на растирку за ${pay} ₽ (+2 реп.).`;
    }
  },
  { id: "wood_gift", title: "Помощь соседа", cond: s => s.rep >= 10,
    run: s => {
      s.firewood += 2;
      return "Сосед Михалыч подкинул 2 охапки сухих берёзовых дров по старой дружбе.";
    }
  },
  { id: "draft", title: "Холодный ветер в щели", cond: s => s.houseLvl === 0 && s.houseTemp > 10,
    run: s => {
      s.houseTemp = Math.max(5, s.houseTemp - 8);
      return "Ночью поднялся ветер — через старые рамы выдуло 8° тепла из избы.";
    }
  }
];
