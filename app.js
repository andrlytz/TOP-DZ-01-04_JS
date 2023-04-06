function f1() {
    let km = $('#kilometers').val();
    let t = $('#time').val();
    let result = km / (t / 60);
    $('#time-text').text('Шевелись со скоростью: '+result+' км. в час')
}

$('#but1').click(f1)

function f2() {
    let result = Math.floor($('#money').val() / $('#price').val());
    $('#choco-text').text('На свою ЗП ты сможешь купить '+result+' шоколадок')
}

$('#but2').click(f2)

function f3() {
    let result = $('#dollar').val() / 1.09;
    $('#cur-text').text('Получается '+result+' евро')
}

$('#but3').click(f3)