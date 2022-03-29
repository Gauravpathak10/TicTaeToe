
let music = new Audio("Kalimba.mp3")
let audio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Yourturn = "X"
const changeTurn = () => {
    if (Yourturn === 'X') {
        return "0"
    }
    else {
        return "X"
    }
}


const BoxContainer = document.getElementsByClassName('box')
const winnings = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6,],
]
const winGame = () => {
    winnings.forEach((e) => {
        if ((BoxContainer[e[0]].innerText === BoxContainer[e[1]].innerText) && (BoxContainer[e[2]].innerText === BoxContainer[e[1]].innerText) && (BoxContainer[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = BoxContainer[e[0]].innerText + ` Won`
            music.pause()
            gameover.play()
        }
    })
}
Array.from(BoxContainer).forEach((e) => {
    e.addEventListener('click', () => {
        music.play()
        e.innerText = Yourturn;
        Yourturn = changeTurn()
        audio.play()
        document.getElementsByClassName("info")[0].innerText = "Turn for " + Yourturn;
        winGame()
    })
})


const reset = () => {
    Array.from(BoxContainer).forEach((e) => {
        e.innerHTML = ''
        document.getElementsByClassName("info")[0].innerText = "Start Game"
        music.pause()
    })
}