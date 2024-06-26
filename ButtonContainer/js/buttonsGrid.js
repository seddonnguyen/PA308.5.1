document.addEventListener('DOMContentLoaded', function() {
    const btn5 = document.getElementById('btn5');
    const buttons = [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3'),
        document.getElementById('btn6'),
        document.getElementById('btn9'),
        document.getElementById('btn8'),
        document.getElementById('btn7'),
        document.getElementById('btn4')
    ];

    btn5.addEventListener('click', function () {
        const lastButtonValue = buttons[buttons.length - 1].textContent;
        for (let i = buttons.length - 1; i > 0; i--) {
            buttons[i].textContent = buttons[i - 1].textContent;
        }
        buttons[0].textContent = lastButtonValue;
    });
});