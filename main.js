// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".time div");



const startTimer = () => {
    const currentTime = new Date().getTime();
    let startTime = setInterval(seconds, 10);

    function seconds() {
        let newTime = new Date().getTime();
        // const stopwatchTime = newTime - currentTime;

        let seconds = Math.floor((newTime / 1000) - (currentTime / 1000));

        let hundreths = Math.floor((newTime) - (currentTime));
        time.textContent = `${seconds}:${hundreths}`;

        console.log(hundreths);
    }


//ZROBIC KOLEJNĄ FUNKCJĘ, KTÓRA BĘDZIE ODPOWIADAŁA ZA SETNE SEKUNDY, USTAWIĆ INTERWAŁ, PRZEKAZANIE DANYCH DO TIME.TEXTCONTENT ORAZ ZROBIĆ ZATRZYMANIE INTERWAŁU



    if (startBtn.textContent === "Start") {
        startBtn.textContent = "Stop"

    } else if (startBtn.textContent === "Stop") {
        startBtn.textContent = "Start";

    }

}

const resetTimer = () => {
    time.textContent = "---"
}


startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);