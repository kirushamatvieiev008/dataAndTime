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

setInterval(() => {
    const birthday = new Date(2026, 8, 30);
    const currentTimme = Date.now();
    const time = (birthday - currentTimme);

    const day = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor(time / (60 * 60 * 1000)) - (day * 24) > 10 ? Math.floor(time / (60 * 60 * 1000)) - (day * 24) : `0${Math.floor(time / (60 * 60 * 1000)) - (day * 24)}`;
    const minutes = Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60) > 10 ? Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60) : `0${Math.floor(time / (60 * 1000)) - ((day * 24 * 60) + hours * 60)}`;
    const seconds = Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60))) > 10 ? Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60))) : `0${Math.floor(time / (1000)) - (((day * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60)))}`;
    const miliseconds = time - ((day * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000))
    // console.log(seconds);



    timeSpan.textContent = `${day}:${hours}:${minutes}:${seconds}:${miliseconds}`;
}, 10)


// console.log(time / 86400000);
// console.log(Math.floor(time / (1000 * 60 * 60 * 24)))
