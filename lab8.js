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