FOCUS = document.querySelectorAll('.focus');
FOCUS_ACTIVE = 'focus_active';

function clean_items() {
    for (let i = 0; i < FOCUS.length; i++)
        if (FOCUS[i].classList.contains(FOCUS_ACTIVE))
        FOCUS[i].classList.remove(FOCUS_ACTIVE);
}
FOCUS.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains(FOCUS_ACTIVE)) {
            clean_items();
            item.classList.add(FOCUS_ACTIVE);
        }
        else clean_items();
    });
});

// function poehali(){
//     var elem = document.getElementById("stadia_1")
//     var pos = 0;
//     var id = setInterval(frame, 10);
// }
// var stats=[];
// var i=0;
// console.log(stats);
// function random_stats() {
//     for (; i < 6; i++) {
//         stats[i] = Math.round(Math.random() * (18 - 3) + 3);
//     }
//     return stats;
// }
// console.log(stats);

// stats=[18,13,8,16,11,10]; //сюда прилетает массив
// i=0; //сюда прилетает индекс удаляемого элемента
// console.log(stats);


// function delete_stat() {
//     for (; i < stats.length; i++) {
//         stats[i] = stats[i + 1];  //смещение знаечений всех элементов после удаляемого влево на 1
// }
// arr.pop(); // удаление последнего элемента
// return stats;
// }

// console.log(stats);

