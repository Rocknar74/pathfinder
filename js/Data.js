
//Объекты рас
var dwarf = {
  A: {
      race: "Дварф",
  },

  B: {
      endurance: 2,
      wisdom: 2,
      charisma: -2,
  },

  V: {  
      speed: "20 фут.",
      speed_specificity: "Вас не замедляет вес вашей брони и снаряжения.",
      racial_traits: {
          strong: "+1 к попаданию по гоблинам и оркам",
          night_vision: "60 футов. Вы видите в темноте.",
          hatred: "+2 к испытаниям ядами, магией, а также уникальными способностями чудовищ.",
          weapon_race: "Можете использовать боевой молот и топор",
      }, 
  },  
};
var elf = {
  A: {
      race: "Эльф",
  },

  B: {
      dexterity: 2,
      endurance: -2,
      intelligence: 2,
  },

  V: {
      speed: "30 фут.",
      speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
      racial_traits: {
          twilight_vision: "При низком уровне освещённости вы видите вдвое дальше.",
          sleep_resist: "Вы невосприимчивы к усыпляющим магическим атакам.",
          weapon_race: "Можете использовать: короткий и длинный луки, длинные мечи и рапиры",
      } 
  },
  
  G: {
      attencion: 2,
  },     
};
var human = {
  bonus_ability_human: true,

  A: {
      race: "Человек",
  },

  V: {
      speed: "30 фут.",
      speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
      racial_traits: {
          bonus_skill: "Каждый уровень, включая первый, вы получаете дополнительный пункт навыка.", 
      },
  },

  E: {
      skill: 1,
  },
};

//Объекты классов
var warrior = {
  A: {
      class: "Воин",
  },

  D: {
      shields: true,
      light_armor: true,
      medium_armor: true,
      heavy_armor: true,
      simple_weapon: true,
      martial_weapon: true,
  },

  E: {
      hp: 10,
      fortitude: 2,
      reflex: 0,
      will: 0,
      attack_bonus: 1,
      skill: 2,
  },

  I: {
      feats: {
          warrior_weapon: "",
      },
  }
};
var wizard = {

};
var rogue = {

};
var priest = {

};



//Итоговый объект персонажа
var character = {
  bonus_ability_human: false,
  A: {
      name: "", //имя
      race: "", //раса
      sex: "", //пол персонажа
      class: "", //класс
      ideology: "", //мировоззрение
      level: 1, //уровень
  },
  
  B: {
      strength: 0, //сила
      dexterity: 0, //ловкость
      endurance: 0, //выносливость
      intelligence: 0, //интеллект
      wisdom: 0, //мудрость
      charisma: 0, //харизма
      strength_mod: 0,
      dexterity_mod: 0,
      endurance_mod: 0,
      intelligence_mod: 0,
      wisdom_mod: 0,
      charisma_mod: 0,
  },

  V: {
      speed: "", //скорость
      speed_specificity: "", //особенность скорости
      racial_traits: {}, //рассовые особенности
  },

  G: {
      acrobatics: 0, //акробатика
      bluff: 0, //блеф
      ride: 0, //верховая езда
      attencion: 0, //внимательность
      diplomacy: 0, //дипломатия
      knowleadge: { //знания
          geography: 0,  //география
          history: 0, //история
          local: 0, //краеведение
          dungeoneering: 0,  //подземелья
          nature: 0, //природа
          religion: 0, //религия
          arcana: 0, //магия
      },
      spellcraft: 0, //колдовство
      climb: 0, //лазание
      heal: 0, //лечение
      mechanics: 0, //механника
      swim: 0, //плавание
      insight: 0, //проницательность
      stealth: 0, //скрытность
  },
  
  D: {
      shields: false, //щиты
      light_armor: false, //лёгкая броня
      medium_armor: false, //средняя броня
      heavy_armor: false, //тяжёлая броня
      simple_weapon: false, //простое оружие
      martial_weapon: false, //военное оружие
      special_weapon: [], //разное оружие
  },

  E: {
      hp: 0, //здоровье
      fortitude: 0, //стойкость
      reflex: 0, //рефлексы
      will: 0, //воля
      attack_bonus: 0, //мод. атаки
      skill: 0, //пункты навыков
  },

  J: {
      initiative: 0,
      melee_attack: 0,
      ranged_attack: 0,
      weapon_1: "",
      weapon_2: "",
  },

  Z: {
      armor_class: 10, // КБ(класс брони)
  },

  I: {
      feats: {},
  },

  L: {
      spells: [],
  },
};

// for (let key in dwarf) {
//     if (character[key] == undefined) {
//          character[key] = dwarf[key];
//     } else {
//     character[key] += dwarf[key];
//     }
// }

// console.log(dwarf);
// console.log(character);