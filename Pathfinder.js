// var race = undefined;
// var allData.sex = undefined;

const FOCUS = document.querySelectorAll('.focus');
const FOCUS_ACTIVE = 'focus_active';

const CLASS = document.querySelectorAll('.name_class');
const CLASS_ACTIVE = 'name_class_active';

const CONTAINER_CLASS = document.querySelectorAll(".container_class")
const CONTAINER_CLASS_ACTIVE = 'container_class-active';

const NEXT_BUTTON = document.querySelector(".next_button");
const CLASS_BLOCK = document.querySelector(".class_block");



console.log(FOCUS);
console.log(CLASS);
console.log(CLASS_ACTIVE);
console.log(FOCUS_ACTIVE);
console.log(CONTAINER_CLASS);

function clean_items(a) {
    if (a == "focus") {
        for (let i = 0; i < FOCUS.length; i++) {
            if (FOCUS[i].classList.contains(FOCUS_ACTIVE)) {
                FOCUS[i].classList.remove(FOCUS_ACTIVE);
            }
        }
    }
    if (a == "class") {
        for (let i = 0; i < CLASS.length; i++) {
            if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
                CLASS[i].classList.remove(CLASS_ACTIVE);
            }
            // if (CONTAINER_CLASS[i].classList.contains(CONTAINER_CLASS_ACTIVE)) {
            //     CONTAINER_CLASS[i].classList.remove(CONTAINER_CLASS_ACTIVE);
            // }
        }
    }
    if (a == "container_class") {
        for (let i = 0; i < CONTAINER_CLASS.length; i++) {
            if (CONTAINER_CLASS[i].classList.contains(CONTAINER_CLASS_ACTIVE)) {
                CONTAINER_CLASS[i].classList.remove(CONTAINER_CLASS_ACTIVE);
            }
        }
    }
}

FOCUS.forEach(focus => {
    focus.addEventListener('click', () => {
        if (!focus.classList.contains(FOCUS_ACTIVE)) {
            clean_items("focus");
            focus.classList.add(FOCUS_ACTIVE);
            for (let i = 0; i < FOCUS.length; i++) {
                if (FOCUS[i].classList.contains(FOCUS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            allData.sex = "f";
                            allData.race = "dwarf";
                            break;
                        case (1):
                            allData.sex = "m";
                            allData.race = "dwarf";
                            break;
                        case (2):
                            allData.sex = "f";
                            allData.race = "elf";
                            break;
                        case (3):
                            allData.sex = "m";
                            allData.race = "elf";
                            break;
                        case (4):
                            allData.sex = "f";
                            allData.race = "human";
                            break;
                        case (5):
                            allData.sex = "m";
                            allData.race = "human";
                            break;
                    }
                }
            }
            NEXT_BUTTON.disabled = false;
            CLASS_BLOCK.setAttribute("class", "class_block_visible");
            console.log(NEXT_BUTTON.disabled);
            console.log(allData.sex);
            console.log(allData.race);
            console.log(allData);
        } else {
            clean_items("focus");
            allData.race = undefined;
            allData.sex = undefined;
            CLASS_BLOCK.setAttribute("class", "class_block");
            NEXT_BUTTON.disabled = true;
            console.log(NEXT_BUTTON.disabled);   
        }
    });
});



// CLASS.forEach(classes => {
//     classes.addEventListener('click', () => {
        
//         if (!classes.classList.contains(CLASS_ACTIVE)) {
//             clean_items("class");
//             classes.classList.add(CLASS_ACTIVE);
//             for (let i = 0; i < CLASS.length; i++) {
//                 if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
//                     switch(i) {
//                         case (0):
//                             allData.class = "warrior"
//                             break;
//                         case (1):
//                             allData.class = "wizard"
//                             break;
//                         case (2):
//                             allData.class = "rogue"
//                             break;
//                         case (3):
//                             allData.class = "priest"
//                             break;
//                     }
//                 }
//             }
//             NEXT_BUTTON.disabled = false;
//             console.log(NEXT_BUTTON.disabled);
//             console.log(allData.class);
//         } else {
//             clean_items("class");
//             allData.class = undefined;
//             NEXT_BUTTON.disabled = true;
//             console.log(NEXT_BUTTON.disabled);   
//         }
//         // const CONTAINER = classes.parentElement.nextElementSibling;
//         CONTAINER_CLASS.forEach(container => {
//             if (!container.classList.contains(CONTAINER_CLASS_ACTIVE)) {
//                 clean_items("container_class");
//                 container.classList.add(CONTAINER_CLASS_ACTIVE);
//             } else {
//                 clean_items("container_class"); 
//             }
            
//         });
//     });
// });

CLASS.forEach(classes => {
    classes.addEventListener('click', () => {
        const CONTAINER = classes.parentElement.nextElementSibling;
        

        if (!classes.classList.contains(CLASS_ACTIVE)) {
            clean_items("class");
            clean_items("container_class");
            CONTAINER.classList.toggle('container_class-active');
            classes.classList.add(CLASS_ACTIVE);
            for (let i = 0; i < CLASS.length; i++) {
                if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
                    switch(i) {
                        case (0):
                            allData.class = "warrior"
                            break;
                        case (1):
                            allData.class = "wizard"
                            break;
                        case (2):
                            allData.class = "rogue"
                            break;
                        case (3):
                            allData.class = "priest"
                            break;
                    }
                }
            }
            NEXT_BUTTON.disabled = false;
            // CLASS_BLOCK.setAttribute("id", "class_block_visible");
            console.log(NEXT_BUTTON.disabled);
            console.log(allData.class);
        } else {
            clean_items("class");
            clean_items("container_class");
            allData.class = undefined;
            // CLASS_BLOCK.setAttribute("id", "class_block");
            NEXT_BUTTON.disabled = true;
            console.log(NEXT_BUTTON.disabled);   
        }

        
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
    let p = 0;
    for (let i = 0; i < 6; i++) {
        stats[i] = Math.round(Math.random() * 15 + 3);
        if (stats[i] > p) {
            p=stats[i]
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
        // if (stats[i] < 10) {
        //     if (stats[i] < 8) {
        //         if (stats[i] < 6) {
        //             if (stats[i] < 4) {
        //                 if (stats[i] < 2) {
        //                     sumStats += -5; continue;
        //                 } else {sumStats += -4; continue;}
        //             } else {sumStats += -3; continue;}
        //         } else {sumStats += -2; continue;}
        //     } else {sumStats += -1; continue;}
        // } else if (stats[i] > 11) {
        //     if (stats[i] > 13) {
        //         if (stats[i] > 15) {
        //             if (stats[i] > 17) {
        //                 if (stats[i] > 19) {
        //                     sumStats += 5; continue;
        //                 } else {sumStats += 4; continue;}
        //             } else {sumStats += 3; continue;}
        //         } else {sumStats += 2; continue;}
        //     } else {sumStats += 1; continue;}
        // }
    }
    if (sumStats > 3 && p > 13) {
        reroll = false;
    } else {reroll = true;}
    console.log("stats =     " + stats);
    console.log("p =         " + p);
    console.log("sumStats =  " + sumStats);
    console.log("reroll =    " + reroll);
}
random_stats()


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
    strong: "+1 к попаданию по гоблинам и оркам",
    night_vision: "60 футов. Вы видите в темноте.",
    hatred: "+2 к испытаниям ядами, магией, а также уникальными способностями чудовищ.",
    weapon_race: "Можете использовать боевой молот и топор"    
}

var elf = {
    dexterity: 2,
    constitution: -2,
    intelligence: 2,
    attencion: 2,
    speed: "30 фут.",
    speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
    twilight_vision: "При низком уровне освещённости вы видите вдвое дальше.",
    sleep_resist: "Вы невосприимчивы к усыпляющим магическим атакам.",
    weapon_race: "Можете использовать: короткий и длинный луки, длинные мечи и рапиры"
}

var human = {
    traits: 1,
    skill: 1,
    bonus_stats: 2,
    speed: "30 фут.",
    speed_specificity: "При ношении средней или тяжёлой брони ваша скорость падает до 20 футов в раунд.",
    bonus_skill: "Каждый уровень, включая первый, вы получаете дополнительный пункт навыка." 
}

var allData = {
    race: undefined,
    sex: undefined,
    class: undefined,
    strenght: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    acrobatics: 0,
    bluff: 0,
    climb: 0,
    diplomacy: 0,
    heal: 0,
    attencion: 0,
    insight: 0,
    traits: 0,
    skill: 0,
    bonus_stats: 0,
    speed: undefined,
    speed_specificity: undefined,
}


for (let key in dwarf) {
    if (allData[key] == undefined) {
         allData[key] = dwarf[key];
    } else {
    allData[key] += dwarf[key];
    }
}

console.log(dwarf);
console.log(allData);

