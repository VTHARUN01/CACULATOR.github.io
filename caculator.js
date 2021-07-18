let btn0 = document.querySelector("#btn0")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let btnClr = document.querySelector("#btnClr")
let btnEql = document.querySelector("#btnEql")
let btnSum = document.querySelector("#btnSum")
let btnSub = document.querySelector("#btnSub")
let btnMul = document.querySelector("#btnMul")
let btnDiv = document.querySelector("#btnDiv")
let res = document.querySelector('#res');
let noob = document.querySelector("#noob");
let bo = document.querySelector('body');
btn0.onclick = () => {
    res.innerText = res.innerText + btn0.value;
}
btn1.onclick = () => {
    res.innerText = res.innerText + btn1.value;
}
btn2.onclick = () => {
    res.innerText = res.innerText + btn2.value;
}
btn3.onclick = () => {
    res.innerText = res.innerText + btn3.value;
}
btn4.onclick = () => {
    res.innerText = res.innerText + btn4.value;
}
btn5.onclick = () => {
    res.innerText = res.innerText + btn5.value;
}
btn6.onclick = () => {
    res.innerText = res.innerText + btn6.value;
}
btn7.onclick = () => {
    res.innerText = res.innerText + btn7.value;
}
btn8.onclick = () => {
    res.innerText = res.innerText + btn8.value;
}
btn9.onclick = () => {
    res.innerText = res.innerText + btn9.value;
}

btnClr.onclick = () => {
    res.innerText = '';
}
btnSum.onclick = () => {
    res.innerText = res.innerText + btnSum.value;
}
btnSub.onclick = () => {
    res.innerText = res.innerText + btnSub.value;
}
btnMul.onclick = () => {
    res.innerText = res.innerText + btnMul.value;
}
btnDiv.onclick = () => {
    res.innerText = res.innerText + btnDiv.value;
}

btnEql.onclick = () => {
    let Value = [...res.innerText];
    let Flag = 0;
    while (true) {
        let h;
        if (Value.length === 1) {
            break;
        }
        else {
            let j, i = 1, k = -1, x = '', y = '';
            if (Value.includes('/')) {
                j = Value.indexOf('/');
                while (/\d/.test(Value[j + i])) {
                    x += Value[j + i];
                    i++;
                }
                while (/\d/.test(Value[j + k])) {
                    y += Value[j + k];
                    k--;
                }
                y = y.split('').reverse().join('');
                h = parseInt(y) / parseInt(x);
            }
            else if (Value.includes('*')) {
                j = Value.indexOf('*');
                while (/\d/.test(Value[j + i])) {
                    x += Value[j + i];
                    i++;
                }
                while (/\d/.test(Value[j + k])) {
                    y += Value[j + k];
                    k--;
                }
                y = y.split('').reverse().join('');
                h = parseInt(y) * parseInt(x);
            }
            else if (Value.includes('+')) {
                j = Value.indexOf('+');
                while (/\d/.test(Value[j + i])) {
                    x += Value[j + i];
                    i++;
                }
                while (/\d/.test(Value[j + k])) {
                    y += Value[j + k];
                    k--;
                }
                y = y.split('').reverse().join('');
                h = parseInt(y) + parseInt(x);
            }
            else if (Value.includes('-')) {
                j = Value.indexOf('-');
                while (/\d/.test(Value[j + i])) {
                    x += Value[j + i];
                    i++;
                }
                while (/\d/.test(Value[j + k])) {
                    y += Value[j + k];
                    k--;
                }
                y = y.split('').reverse().join('');
                h = parseInt(y) - parseInt(x);
            }
            if (x == '' || y == '') {
                Flag = 1;
                break;
            }
            Value.splice(j + k + 1, i - k - 1, `${h}`)

        }
    } if (Flag == 1) {
        res.innerText = '';
        alert("ENTER AGAIN");
    }
    else {
        res.innerText = Value[0];
    }
}
noob.addEventListener('click', () => {
    bo.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1})`;
})

