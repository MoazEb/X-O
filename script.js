const btn = document.querySelectorAll('.button-option');
const popup = document.querySelector('.popup');
const new_game = document.querySelector('.new-game');
const restart = document.querySelector('.restart');
const message = document.querySelector('.message');
let xTurn = true,
    count = 0;

let WininngPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let buttons = [new_game, restart];

buttons.forEach((element) => {
    element.addEventListener('click', () => {
        popup.style.display = 'none';
        btn.forEach(element => {
            element.innerText = '';
            element.disabled = false;
            count = 0;
        });
    })
})

const winnerFunction = (winner) => {
    btn.forEach((element) => element.disabled = true);
    popup.style.display = 'flex';
    if (winner === '9') {
        message.innerText = "Draw -----> No One Win";
    } else {
        message.innerText = `Gratulation's ${winner} Won`;
    }
    count = 0;
}
const winChecker = () => {
    for (let i of WininngPattern) {
        let [element1, element2, element3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText
        ]
        if (element1 !== '' && element2 !== '' && element3 != '')
            if (element1 === element2 && element2 === element3)
                winnerFunction(element1);
    }
}

btn.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn === true) {
            xTurn = false;
            element.innerText = 'X';
            element.disabled = true;
            element.classList.add('x-color');
        } else {
            xTurn = true;
            element.innerText = 'O';
            element.disabled = true;
            element.classList.add('o-color');
        }
        count++;
        winChecker();
        if (count === 9) {
            winnerFunction('9');
        }
    })
})