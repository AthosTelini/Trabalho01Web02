
function operacao(op) {
    let num = document.getElementById('txtn').value;
    let lim = document.getElementById('txtl').value;
    let tab = document.getElementById('seltab');

    if (num.length === 0 || lim.length === 0) {
        window.alert('Por favor, digite um número e um limite!');
    } else {
        num = Number(num);
        lim = Number(lim);
        tab.innerHTML = '';

        for (let c = 1; c <= lim; c++) {
            let resultado;
            if (op === '+') {
                resultado = num + c;
            } else if (op === '-') {
                resultado = num - c;
            } else if (op === 'x') {
                resultado = num * c;
            } else if (op === '/') {
                resultado = num / c;
            }

            let item = document.createElement('option');
            item.text = `${num} ${op} ${c} = ${resultado}`;
            tab.appendChild(item);
        }
    }
}
