let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `${num.value}`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor já está na lista ou é inválido');
    }
    num.value = '';
    num.focus();
}

function mostrarResultado(texto) {
    res.innerHTML = `<p>${texto}</p>`;
}

function mostrarTotal() {
    let tot = valores.length;
    mostrarResultado(`Ao todo, temos ${tot} números adicionados`);
}

function mostrarMaior() {
    let maior = valores[0];
    for (let pos in valores) {
        if (valores[pos] > maior) {
            maior = valores[pos];
        }
    }
    mostrarResultado(`Maior valor foi ${maior}`);
}

function mostrarMenor() {
    let menor = valores[0];
    for (let pos in valores) {
        if (valores[pos] < menor) {
            menor = valores[pos];
        }
    }
    mostrarResultado(`Menor valor foi ${menor}`);
}

function mostrarSoma() {
    let soma = 0;
    for (let pos in valores) {
        soma += valores[pos];
    }
    mostrarResultado(`A soma de todos é ${soma}`);
}

function mostrarMedia() {
    let tot = valores.length;
    let soma = 0;
    for (let pos in valores) {
        soma += valores[pos];
    }
    let media = soma / tot;
    mostrarResultado(`Média dos valores é ${media}`);
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Valor inválido ou já encontrado na lista.');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        media = soma / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números adicionados</p>`;
        res.innerHTML += `<p>Maior valor foi ${maior} </p>`;
        res.innerHTML += `<p>Menor valor foi ${menor}</p>`;
        res.innerHTML += `<p>A soma de todos é ${soma}</p>`;
        res.innerHTML += `<p>Média dos valores é ${media}</p>`;
    }
}
