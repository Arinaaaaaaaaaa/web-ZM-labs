function showDate () {
    let out = document.getElementById('current-date');
    let out_2 = document.getElementById('current-date_2');
    let out_3 = document.getElementById('current-date_3');
    let out_4 = document.getElementById('current-date_4');
    let out_5 = document.getElementById('current-date_5');
    let out_6 = document.getElementById('current-date_6');

    let today = new Date();

    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out_2.innerHTML = 'Дата и время для локали Мальдив: ' + today.toLocaleString('dv-MV');
    out_3.innerHTML = 'Дата и время для локали Перу: ' + today.toLocaleString('es-PE');
    out_4.innerHTML = 'Дата и время для канадской локали: ' + today.toLocaleString('fr-CA');
    out_5.innerHTML = 'Дата и время для локали Германии: ' + today.toLocaleString('de-DE');
    out_6.innerHTML = 'Дата и время для локали Морокко: ' + today.toLocaleString('ar-MA');
}
function showDaysCount() {
    let birth = document.getElementById('date_birthday');
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    birth.innerHTML = 'Количество дней с даты рождения:' + daysCount;
}

function hideDaysCount() {
    document.getElementById('date_birthday').innerHTML = "";
    document.getElementById('data').value = "";   
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);
