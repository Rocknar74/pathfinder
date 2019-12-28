
const FOCUS = document.querySelectorAll('.focus');
const FOCUS_ACTIVE = 'focus-active';

const CLASS = document.querySelectorAll('.name_class');
const CLASS_ACTIVE = 'name_class-active';

const CONTAINER_CLASS = document.querySelectorAll('.container_class');
const CONTAINER_CLASS_ACTIVE = 'container_class-active';

const LOVE_WEAPON_WARRIOR = document.querySelectorAll('.love_weapon_warrior');
const LOVE_WEAPON_WARRIOR_ACTIVE = 'love_weapon_warrior-active';

const LOVE_WEAPON_WIZARD = document.querySelectorAll('.love_weapon_wizard');
const LOVE_WEAPON_WIZARD_ACTIVE = 'love_weapon_wizard-active';

const NEXT_BUTTON = document.querySelector(".next_button");
const CLASS_BLOCK = document.querySelector(".class_block");

// console.log(FOCUS);
// console.log(CLASS);
// console.log(CLASS_ACTIVE);
// console.log(FOCUS_ACTIVE);
// console.log(CONTAINER_CLASS);
function button_toggle(button) {
    switch(button) { 
        case (false): //кнопка выключается
            NEXT_BUTTON.disabled = true;
            console.log("Кнопка неактивна");
            break;
        case (true):  //кнопка включается
            NEXT_BUTTON.disabled = false;
            console.log("Кнопка активна");
            break;
    };
};

function clean_OR_add_items (a, b, c) {
    if (c.classList.contains(b)){
        c.classList.remove(b);
        button_toggle(false);
        return false;
    } else {
        a.forEach(item => {
            item.classList.remove(b);
        });
        c.classList.add(b);
        tolerance_check(c);
        return true;
    };
};

function tolerance_check(c) {
    switch (c.innerHTML) {
        case("Воин"):
        case("Волшебник"):
            button_toggle(false);
            break;
        default:
            button_toggle(true);
            break;
    };
};

NEXT_BUTTON.addEventListener('click', () => {
    CLASS_BLOCK.setAttribute("class", "class_block_visible");
    NEXT_BUTTON.disabled = true;
});

FOCUS.forEach(focus => {
    focus.addEventListener('click', () => {
        if (clean_OR_add_items(FOCUS, FOCUS_ACTIVE, focus)) {
            for (let i = 0; i < FOCUS.length; i++) {
                if (FOCUS[i].classList.contains(FOCUS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            character.A.sex = "Ж";
                            character.A.race = "Дварф";
                            break;
                        case (1):
                            character.A.sex = "М";
                            character.A.race = "Дварф";
                            break;
                        case (2):
                            character.A.sex = "Ж";
                            character.A.race = "Ельф";
                            break;
                        case (3):
                            character.A.sex = "М";
                            character.A.race = "Ельф";
                            break;
                        case (4):
                            character.A.sex = "Ж";
                            character.A.race = "Человек";
                            break;
                        case (5):
                            character.A.sex = "М";
                            character.A.race = "Человек";
                            break;
                    }
                }
            }
            console.log(character.A.race);
        } else {
            CLASS_BLOCK.setAttribute("class", "class_block");
        }
    });
});

LOVE_WEAPON_WIZARD.forEach(love => {
    love.addEventListener('click', () => {
        clean_OR_add_items(LOVE_WEAPON_WIZARD, LOVE_WEAPON_WIZARD_ACTIVE, love);
    });
});

LOVE_WEAPON_WARRIOR.forEach(love => {
    love.addEventListener('click', () => {
        if (clean_OR_add_items(LOVE_WEAPON_WARRIOR, LOVE_WEAPON_WARRIOR_ACTIVE, love)) {
            warrior.I.feats.warrior_weapon = "Увер. вл. ор. - " + love.innerHTML;
            console.log(warrior.I.feats.warrior_weapon);
        };
    });
});

CLASS.forEach(classes => {
    classes.addEventListener('click', () => {
        const SELECTED_CONTAINER = classes.parentElement.nextElementSibling;
        if (clean_OR_add_items(CLASS, CLASS_ACTIVE, classes)) {
            CONTAINER_CLASS.forEach(item => {
                item.classList.remove(CONTAINER_CLASS_ACTIVE);
            });
            SELECTED_CONTAINER.classList.toggle('container_class-active');
            for (let i = 0; i < CLASS.length; i++) {
                if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            character.A.class = "Warrior";
                            break;
                        case (1):
                            character.A.class = "Wizard";
                            break;
                        case (2):
                            character.A.class = "Rogue";
                            break;
                        case (3):
                            character.A.class = "Priest";
                            break;
                    }
                }
            };
        } else {
            SELECTED_CONTAINER.classList.remove(CONTAINER_CLASS_ACTIVE);
        }
    });
});


// function onDragStart(event) {
//     event
//         .dataTransfer
//         .setData('text/plain', event.target.id);
//     event
//         .currentTarget
//         .style
//         .backgroundColor = 'pink';
// }

// function onDragOver(event) {
//   event.preventDefault();
// }

// function onDrop(event) {
//   const id = event
//     .dataTransfer
//     .getData('text');
 
//   const draggableElement = document.getElementById(id);
//   const dropzone = event.target;
  
//   dropzone.appendChild(draggableElement);
 
//   event
//     .dataTransfer
//     .clearData();
// }

var reroll; //Возмоно ли переопределить случайные характеристики
var stats = []; //Массив со случаынми характеристиками
function random_stats() {  //Получение случайных характеристик
    stats = [];
    let highestStat = 0;
    for (let i = 0; i < 6; i++) {
        stats[i] = Math.round(Math.random() * 15 + 3);
        if (stats[i] > highestStat) {
            highestStat = stats[i];
        };
    };
    let sumStats = 0;
    for (let i = 0; i < stats.length; i++) {
        switch (stats[i]) {
            case (10):
            case (11):
                sumStats += 0;
                break;
            case (12):
            case (13):
                sumStats += 1;
                break;
            case (14):   
            case (15):
                sumStats += 2;
                break;
            case (16):
            case (17):
                sumStats += 3;
                break;
            case (18):
            case (19):
                sumStats += 4;
                break;
            case (20):
                sumStats += 5;
                break;
            case (8):
            case (9):
                sumStats -= 1;
                break;
            case (6):
            case (7):
                sumStats -= 2;
                break;
            case (4):
            case (5):
                sumStats -= 3;
                break;
            case (2):
            case (3):
                sumStats -= 4;
                break;
            case (0):
            case (1):
                sumStats -= 5;
                break;
            default:
                sumStats = NaN;
                console.log("Что-то пошло не так, sumStats = NaN");
                break;
        }
    };
    if (sumStats > 3 && highestStat > 13) {
        reroll = false;
    } else {
        reroll = true;
    };
    console.log("stats =        " + stats);
    console.log("highest stat = " + highestStat);
    console.log("sumStats =     " + sumStats);
    console.log("reroll =       " + reroll);
}
random_stats();

function delete_stat() { //Удаление одной характеристики из массива
    for (let i = 0; i < stats.length; i++) {
        stats[i] = stats[i++];  //смещение знаечений всех элементов после удаляемого влево на 1
    };
    arr.pop(); // удаление последнего элемента
    return stats;
}

// console.log(stats);

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

//////////////////НА БУДУЮЩЕЕ//////////////////////////

// modGen: function(stat) {
//     switch (stat) {
//         case (10):
//         case (11):
//             return 0;
//         case (12):
//         case (13):
//             return 1;
//         case (14):   
//         case (15):
//             return 2;
//         case (16):
//         case (17):
//             return 3;
//         case (18):
//         case (19):
//             return 4;
//         case (20):
//             return 5;
//         case (8):
//         case (9):
//             return -1;
//         case (6):
//         case (7):
//             return -2;
//         case (4):
//         case (5):
//             return -3;
//         case (2):
//         case (3):
//             return -4;
//         case (0):
//         case (1):
//             return -5;
//         default:
//             console.log("Что-то пошло не так, modGen выдал NaN");
//             return NaN;
//     }   
// },
// strength_mod: this.modGen(this.strength),
// dexterity_mod: this.modGen,
// endurance_mod: this.modGen,
// intelligence_mod: this.modGen,
// wisdom_mod: this.modGen,
// charisma_mod: this.modGen,
