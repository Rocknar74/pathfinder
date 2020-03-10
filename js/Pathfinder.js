// function scroll(event) {
//     console.log(event.deltaY)
// }
// const BODY = document.querySelector('body');
// BODY.onwheel = scroll;
// document.addEventListener('wheel', () => {
//         console.log(BODY.deltaY);
// });
const FLAG_TABLE = document.querySelector(".flag_table");
function createDOM() {
    //создаёт контейнеры с любимым оружием воина
    CONT_LOVE_WEAPON_WAR = document.querySelector('.weapon_selector_warrior');
    arr_love_weapon_war = [
        'Метательный топор',
        'Удар без оружия',
        'Двуручный топор',
        'Тяжёлый арбалет',
        'Короткое копьё',
        'Тяжёлая булава',
        'Лёгкий араблет',
        'Двуручный меч',
        'Лёгкая булава',
        'Короткий лук',
        'Боевой молот',
        'Короткий меч',
        'Боевой топор',
        'Лёгкий молот',
        'Длинный меч',
        'Длинный лук',
        'Нож-звезда',
        'Скимитар',
        'Дубина',
        'Рапира',
        'Дротик',
        'Кинжал',
        'Пилум',
        'Посох',
        'Праща',
        'Копьё']
    for (i = 0; i < arr_love_weapon_war.length; i++){
        CONT_LOVE_WEAPON_WAR.innerHTML += `<div class="love_weapon_warrior">${arr_love_weapon_war[i]}</div>`
    };

    //создаёт контейнеры под плашки со значениями характеристик
    for (let i = 0; i < 6; i++) {
        FLAG_TABLE.innerHTML += `
        <div class="stone_number" draggable="true">
            <input class="radio_characteristics" id="number${i}" type="radio" name="human_bonus">
            <label class="number" for="number${i}"></label>
        </div>`
    };
};
createDOM();

// RACE AND CLASS BLOCK LIGIC 
//===============================================================================
const HOVER_RACE = document.querySelectorAll('.focus');
const HOVER_RACE_ACTIVE = 'focus-active';

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
const SELECT_STATS_BLOCK = document.querySelector(".select_stats_block");

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

function clean_items (obj, newClassObj, thisObj) {
    if (thisObj.classList.contains(newClassObj)){
        thisObj.classList.remove(newClassObj);
        button_toggle(false);
        return false;
    } else {
        add_items (obj, newClassObj, thisObj);
        return true;
    };
};
function add_items (obj, newClassObj, thisObj) {
    obj.forEach(item => {
        item.classList.remove(newClassObj);
    });
    thisObj.classList.add(newClassObj);
    tolerance_check(thisObj);
};
function tolerance_check(thisObj) {
    switch (thisObj.innerHTML) {
        case("Воин"):
        case("Волшебник"):
            button_toggle(false);
            break;
        default:
            button_toggle(true);
            break;
    };
};

HOVER_RACE.forEach(item => {
    item.addEventListener('click', () => {
        if (clean_items(HOVER_RACE, HOVER_RACE_ACTIVE, item)) {
            for (let i = 0; i < HOVER_RACE.length; i++) {
                if (HOVER_RACE[i].classList.contains(HOVER_RACE_ACTIVE)) {
                    switch(i) {
                        case (0):
                            character.A.sex = "Ж";
                            character.A.race = "Дварф";
                            character.bonus_ability_human = false;
                            break;
                        case (1):
                            character.A.sex = "М";
                            character.A.race = "Дварф";
                            character.bonus_ability_human = false;
                            break;
                        case (2):
                            character.A.sex = "Ж";
                            character.A.race = "Ельф";
                            character.bonus_ability_human = false;
                            break;
                        case (3):
                            character.A.sex = "М";
                            character.A.race = "Ельф";
                            character.bonus_ability_human = false;
                            break;
                        case (4):
                            character.A.sex = "Ж";
                            character.A.race = "Человек";
                            character.bonus_ability_human = true;
                            break;
                        case (5):
                            character.A.sex = "М";
                            character.A.race = "Человек";
                            character.bonus_ability_human = true;
                            break;
                    }
                }
            }
            console.log(character.A.race);
            console.log(character.A.sex);
        } else {
            CLASS_BLOCK.setAttribute("class", "class_block");
            SELECT_STATS_BLOCK.classList.remove("select_stats_block-visible");
        }
    });
});

LOVE_WEAPON_WIZARD.forEach(item => {
    item.addEventListener('click', () => {
        clean_items(LOVE_WEAPON_WIZARD, LOVE_WEAPON_WIZARD_ACTIVE, item);
    });
});

LOVE_WEAPON_WARRIOR.forEach(item => {
    item.addEventListener('click', () => {
        if (clean_items(LOVE_WEAPON_WARRIOR, LOVE_WEAPON_WARRIOR_ACTIVE, item)) {
            warrior.I.feats.warrior_weapon = "Увер. вл. ор. - " + item.innerHTML;
            console.log(warrior.I.feats.warrior_weapon);
        };
    });
});
CLASS.forEach(item => {
    item.addEventListener('click', () => {
        const SELECTED_CONTAINER = item.parentElement.nextElementSibling;
        if (clean_items(CLASS, CLASS_ACTIVE, item)) {
            CONTAINER_CLASS.forEach(elem => {
                elem.classList.remove(CONTAINER_CLASS_ACTIVE);
            });
            SELECTED_CONTAINER.classList.toggle('container_class-active');
            for (let i = 0; i < CLASS.length; i++) {
                if (CLASS[i].classList.contains(CLASS_ACTIVE)) {
                    character.A.class = `${CLASS[i].innerHTML}`;
                }
            };
            console.log(character.A.class);
        } else {
            SELECTED_CONTAINER.classList.remove(CONTAINER_CLASS_ACTIVE);
        }
    });
});


// CHARACTERISTIC BLOCK LOGIC
//===========================================================================
const STONE_NUMBER = document.querySelectorAll(".stone_number");
const STONE_NUMBER_HOVER = 'stone_number-focus';
const RADIO_CHARACTERISTICS = document.querySelectorAll('.radio_characteristics');
const PERSONAL_CONTAINER_NUMBER = document.querySelectorAll(".number");
const CONTAINER_STONE_NUMBER = document.querySelectorAll(".containerDrag-number");
const REROLL_BUTTON = document.querySelector(".rerollDice");
const REROLL_BUTTON_HOVER = document.querySelector(".rerollDice-focus");
// const CHARCTERISTIC_MODIF = 'characteristic_modif';
var current_stone;
var checked_radio;
var current_number;
var previous_number;

RADIO_CHARACTERISTICS.forEach(item => {
    item.addEventListener('change', () => {
        if (character.bonus_ability_human) {
            if (checked_radio) {
                checked_radio.value = +checked_radio.value - 2;
                // checked_radio.nextElementSibling.classList.remove(CHARCTERISTIC_MODIF);
            };
            item.value = +item.value + 2;
            // item.nextElementSibling.classList.add(CHARCTERISTIC_MODIF);
            checked_radio = item;
            console.log(3);
        };
    });
});

STONE_NUMBER.forEach(item => {
    item.addEventListener('dragstart', () => {
        current_stone = item;
    });
});

PERSONAL_CONTAINER_NUMBER.forEach(item => {
    item.addEventListener('click', () => {
        if (character.bonus_ability_human) {
            if (!item.previousElementSibling.checked) {
                if (current_number) {
                    previous_number.innerHTML = `<img src="images/characteristics/numbers/${+previous_number.firstChild.alt - 2}.png" alt="${+previous_number.firstChild.alt - 2}" draggable="false">`;
                };
                current_number = item.firstChild;
                item.innerHTML = `<img src="images/characteristics/numbers/${+current_number.alt + 2}.png" alt="${+current_number.alt + 2}" draggable="false">`;
                previous_number = item;
            }; 
        };
    });
});
CONTAINER_STONE_NUMBER.forEach(item => {
    item.addEventListener("drop", () => {
        if (item.innerHTML) {
            current_stone.parentElement.appendChild(item.firstChild);
        };
        item.appendChild(current_stone);
        if (FLAG_TABLE.firstElementChild === null) {
            button_toggle(true)
        };
    });
    item.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
});

FLAG_TABLE.addEventListener("drop", () => {
    this.appendChild(current_stone); 
    button_toggle(false);
});

FLAG_TABLE.addEventListener("dragover", (event) => {
    event.preventDefault();
});

var reroll = true; //Возмоно ли переопределить случайные характеристики
var stats = []; //Массив со случаынми характеристиками

function random_stats() { //Получение случайных характеристик
    stats = [];
    let highestStat = 0;
    let i = 0;
    let currentStat;

    PERSONAL_CONTAINER_NUMBER.forEach(item => {
        stats[i] = Math.round(Math.random() * 15 + 3);
        currentStat = stats[i];

        item.innerHTML = `<img src="images/characteristics/numbers/${currentStat}.png" alt="${currentStat}" draggable="false">`; // изображение с нужным числом

        item.previousElementSibling.value = currentStat;

        if (stats[i] > highestStat) {
            highestStat = stats[i];
        };
        i++;
    });
    
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

    if (!reroll) {
        REROLL_BUTTON.classList.add("rerollDice-notactive");
        REROLL_BUTTON_HOVER.classList.add("rerollDice-focus-notactive");
    };
};
function clear_characteristic_block() {
    PERSONAL_CONTAINER_NUMBER.forEach(item => {
        if (item.previousElementSibling.checked) {
            item.previousElementSibling.checked = false;
            // item.classList.remove(CHARCTERISTIC_MODIF);
            item.innerHTML = `<img src="images/characteristics/numbers/${+item.firstChild.alt - 2}.png" alt="${+item.firstChild.alt - 2}" draggable="false">`;
            current_number = undefined;
            previous_number = undefined;
        };
    });
};
REROLL_BUTTON.addEventListener("click", () => {
    if (reroll) {
        clear_characteristic_block();
        random_stats();     
    };
});

NEXT_BUTTON.addEventListener('click', () => {
    CLASS_BLOCK.classList.add("class_block-visible");
    SELECT_STATS_BLOCK.classList.add("select_stats_block-visible");
    if (SELECT_STATS_BLOCK.classList.contains("select_stats_block-visible")) {
        random_stats();
    }
    button_toggle(false);
});