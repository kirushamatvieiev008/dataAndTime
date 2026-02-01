const date = new Date();

const month = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень',];

console.log(month[date.getMonth()]);

const daysOfWeek = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П’ятниця",
    "Субота",
];

console.log(daysOfWeek[date.getDay()]);

const timeSpan = document.querySelector('.timeSpan');




console.log(date.getTime());


// console.log(slashDay);

// setInterval(() => {
//     const day = Math.floor(time / (24 * 60 * 60 * 1000));
//     const hours = Math.floor(time / (60 * 60 * 1000)) - (day * 24)
//     const minutes = Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60)
//     const miliseconds = time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000))

//  > 10 ? Math.floor(time / (60 * 60 * 1000)) - (day * 24) : `0${Math.floor(time / (60 * 60 * 1000)) - (day * 24)}`;
//  > 10 ? Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60) : `0${Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60)}`;
//     const seconds = Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60))) > 10 ? Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60))) : `0${Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60)))}`;
//  > 100 ? time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)) 
//     let miliseconds = 0;
//     if (((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)) > 100) {
//         miliseconds = time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
//         console.log(1);

//     } else if (((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)) > 10 && ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)) < 100) {
//         miliseconds = `0${time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000))}`;
//         console.log(2);

//     } else if (((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)) < 10) {
//         miliseconds = `00${time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000))}`;
//         console.log(3);

//     }
//     // console.log(miliseconds);

//     // console.log(seconds);



//     timeSpan.textContent = `${day}:${hours}:${minutes}:${seconds}:${miliseconds}`;
// }, 1);

/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
*/
const birthday = new Date(2026, 1, 1, 14, 55);
const id = setInterval(() => {
    const currentTimme = Date.now();
    const time = (birthday - currentTimme);
    console.log(time);


    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    timeSpan.textContent = `${days}:${hours}:${mins}:${secs}`
    if (time <= 0) {
        alert('happy end');
        clearInterval(id);
        timeSpan.textContent = `00:00:00:00`;


    } else {
        console.log(time);

    }



}, 1000)






// console.log(time / 86400000);
// console.log(Math.floor(time / (1000 * 60 * 60 * 24)))
