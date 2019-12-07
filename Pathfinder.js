
const FOCUS = document.querySelectorAll('.focus');
const FOCUS_ACTIVE = 'focus-active';

const CLASS = document.querySelectorAll('.name_class');
const CLASS_ACTIVE = 'name_class-active';

const CONTAINER_CLASS = document.querySelectorAll('.container_class')
const CONTAINER_CLASS_ACTIVE = 'container_class-active';

const LOVE_WEAPON_WARRIOR = document.querySelectorAll('.love_weapon_warrior');
const LOVE_WEAPON_WARRIOR_ACTIVE = 'love_weapon_warrior-active';

const NEXT_BUTTON = document.querySelector(".next_button");
const CLASS_BLOCK = document.querySelector(".class_block");

// console.log(FOCUS);
// console.log(CLASS);
// console.log(CLASS_ACTIVE);
// console.log(FOCUS_ACTIVE);
// console.log(CONTAINER_CLASS);

function clean_items (a, b) {
        a.forEach(item => {
            if (item.classList.contains(b)) {
                item.classList.remove(b);
            }
        });
    // if (a == "container_class") {
    //     for (let i = 0; i < CONTAINER_CLASS.length; i++) {
    //         if (CONTAINER_CLASS[i].classList.contains(CONTAINER_CLASS_ACTIVE)) {
    //             CONTAINER_CLASS[i].classList.remove(CONTAINER_CLASS_ACTIVE);
    //         }
    //     }
    // }
}
LOVE_WEAPON_WARRIOR.forEach(love => {
    love.addEventListener('click', () => {
        if (!love.classList.contains(LOVE_WEAPON_WARRIOR_ACTIVE)) {
            clean_items(LOVE_WEAPON_WARRIOR, LOVE_WEAPON_WARRIOR_ACTIVE);
            love.classList.add(LOVE_WEAPON_WARRIOR_ACTIVE);
        } else {
            clean_items(LOVE_WEAPON_WARRIOR, LOVE_WEAPON_WARRIOR_ACTIVE)
        }
    });
});

FOCUS.forEach(focus => {
    focus.addEventListener('click', () => {
        if (!focus.classList.contains(FOCUS_ACTIVE)) {
            clean_items(FOCUS, FOCUS_ACTIVE);
            // FOCUS.clean_items();
            focus.classList.add(FOCUS_ACTIVE);
            for (let i = 0; i < FOCUS.length; i++) {
                if (FOCUS[i].classList.contains(FOCUS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            all_data.A.sex = "Ж";
                            all_data.A.race = "Дварф";
                            break;
                        case (1):
                            all_data.A.sex = "М";
                            all_data.A.race = "Дварф";
                            break;
                        case (2):
                            all_data.A.sex = "Ж";
                            all_data.A.race = "Ельф";
                            break;
                        case (3):
                            all_data.A.sex = "М";
                            all_data.A.race = "Ельф";
                            break;
                        case (4):
                            all_data.A.sex = "Ж";
                            all_data.A.race = "Человек";
                            break;
                        case (5):
                            all_data.A.sex = "М";
                            all_data.A.race = "Человек";
                            break;
                    }
                }
            }
            NEXT_BUTTON.disabled = false;
            CLASS_BLOCK.setAttribute("class", "class_block_visible");
            console.log(NEXT_BUTTON.disabled);
            console.log(all_data.A.sex);
            console.log(all_data.A.race);
            // console.log(all_data);
        } else {
            clean_items(FOCUS, FOCUS_ACTIVE);
            // all_data.A.race = undefined;
            // all_data.A.sex = undefined;
            CLASS_BLOCK.setAttribute("class", "class_block");
            NEXT_BUTTON.disabled = true;
            console.log(NEXT_BUTTON.disabled);   
        }
    });
});

CLASS.forEach(classes => {
    classes.addEventListener('click', () => {
        const CONTAINER = classes.parentElement.nextElementSibling;
        if (!classes.classList.contains(CLASS_ACTIVE)) {
            clean_items(CLASS, CLASS_ACTIVE);
            clean_items(CONTAINER_CLASS, CONTAINER_CLASS_ACTIVE);
            CONTAINER.classList.toggle('container_class-active');
            classes.classList.add(CLASS_ACTIVE);
            for (let i = 0; i < CLASS.length; i++) {
                if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            all_data.A.class = "Воин";
                            break;
                        case (1):
                            all_data.A.class = "Волшебник";
                            break;
                        case (2):
                            all_data.A.class = "Плуг";
                            break;
                        case (3):
                            all_data.A.class = "Жрец";
                            break;
                    }
                }
            }
            NEXT_BUTTON.disabled = false;
            console.log(NEXT_BUTTON.disabled);
            console.log(all_data.A.class);
        } else {
            clean_items(CLASS, CLASS_ACTIVE);
            clean_items(CONTAINER_CLASS, CONTAINER_CLASS_ACTIVE);
            // all_data.A.class = undefined;
            NEXT_BUTTON.disabled = true;
            console.log(NEXT_BUTTON.disabled);   
        };
    });
});

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
    event
        .currentTarget
        .style
        .backgroundColor = 'pink';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
 
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  
  dropzone.appendChild(draggableElement);
 
  event
    .dataTransfer
    .clearData();
}

var reroll;
var stats = [];
function random_stats() {
    stats = [];
    let highestStat = 0;
    for (let i = 0; i < 6; i++) {
        stats[i] = Math.round(Math.random() * 15 + 3);
        if (stats[i] > highestStat) {
            highestStat = stats[i];
        }
    }
    let sumStats = 0;
    for (let i = 0; i < 6; i++) {
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
            case (1):
                sumStats -= 5;
                break;
        }
    }
    if (sumStats > 3 && highestStat > 13) {
        reroll = false;
    } else {reroll = true;}
    console.log("stats =        " + stats);
    console.log("highest stat = " + highestStat);
    console.log("sumStats =     " + sumStats);
    console.log("reroll =       " + reroll);
}
random_stats();


function delete_stat() {
    for ( let i = 0; i < stats.length; i++) {
        stats[i] = stats[i + 1];  //смещение знаечений всех элементов после удаляемого влево на 1
    }
    arr.pop(); // удаление последнего элемента
    return stats;
}

// console.log(stats);
var dwarf = {
    constitution: 2,
    wisdom: 2,
    charisma: -2,  
    speed: "20 фут.",
    speed_specificity: "Вас не замедляет вес вашей брони и снаряжения.",
    racial_traits: {
        strong: "+1 к попаданию по гоблинам и оркам",
        night_vision: "60 футов. Вы видите в темноте.",
        hatred: "+2 к испытаниям ядами, магией, а также уникальными способностями чудовищ.",
        weapon_race: "Можете использовать боевой молот и топор",
    },    
};

var elf = {
    dexterity: 2,
    constitution: -2,
    intelligence: 2,
    attencion: 2,
    speed: "30 фут.",
    speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
    racial_traits: {
        twilight_vision: "При низком уровне освещённости вы видите вдвое дальше.",
        sleep_resist: "Вы невосприимчивы к усыпляющим магическим атакам.",
        weapon_race: "Можете использовать: короткий и длинный луки, длинные мечи и рапиры",
    }       
};

var human = {
    skill: 1,
    bonus_ability_human: true,
    speed: "30 фут.",
    speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
    racial_traits: {
        bonus_skill: "Каждый уровень, включая первый, вы получаете дополнительный пункт навыка.", 
    }
};

var warrior = {
    A: {
        // class: "warrior",
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
            warrior_weapon: undefined,
            love_weapon_war: "Ув. вл. ор.-",
        },
    }
};

var wizard = {

};

var all_data = {
    bonus_ability_human: false,

    A: {
        name: undefined,
        race: undefined,
        sex: undefined,
        class: undefined,
    },
    
    B: {
        strenght: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },

    V: {
        speed: undefined,
        speed_specificity: undefined,
        racial_traits: [], 
    },

    G: {
        acrobatics: 0,
        bluff: 0,
        ride: 0,
        attencion: 0,
        diplomacy: 0,
        knowleadge: {
            geography: 0,  //география
            history: 0, //история
            local: 0, //краеведение
            dungeoneering: 0,  //подземелья
            nature: 0, //природа
            religion: 0, //религия
            arcana: 0, //магия
        },
        spellcraft: 0,
        climb: 0,
        heal: 0,
        mechanics: 0,
        swim: 0,
        insight: 0,
        stealth: 0,
    },
    
    D: {
        shields: false,
        light_armor: false,
        medium_armor: false,
        heavy_armor: false,
        simple_weapon: false,
        martial_weapon: false,
        special_weapon: [],
    },

    E: {
        hp: 0,
        fortitude: 0,
        reflex: 0,
        will: 0,
        attack_bonus: 0,
        skill: 0,
    },

    J: {
        initiative: 0,
        melee_attack: 0,
        ranged_attack: 0,
        weapon_1: undefined,
        weapon_2: undefined,
    },

    Z: {
        armor_class: 10,
    },

    I: {
        feats: {},
    },

    L: {
        spells: [],
    },
};


// for (let key in dwarf) {
//     if (all_data[key] == undefined) {
//          all_data[key] = dwarf[key];
//     } else {
//     all_data[key] += dwarf[key];
//     }
// }

// console.log(dwarf);
// console.log(all_data);

