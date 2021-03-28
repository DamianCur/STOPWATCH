// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".time div");

const startTimer = () => {
    const currentTime = new Date().getTime();


    if (startBtn.textContent === "Stop") {
        startBtn.textContent = "Start";
        clearInterval(startTime);
        

    } else if (startBtn.textContent === "Start") {
        startBtn.textContent = "Stop";
        startTime = setInterval(timer, 10);
        
    }




    function timer() {
        
        let newTime = new Date().getTime();
        // const stopwatchTime = newTime - currentTime;

        seconds = Math.floor((newTime / 1000) - (currentTime / 1000));

        hundreths = Math.floor((newTime / 10) - (currentTime / 10)) % 100;

    

        if (hundreths < 10) {
            hundreths = `0${hundreths}`;
        }

        time.textContent = `${seconds}:${hundreths}`; 
    }


    //ZROBIC KOLEJNĄ FUNKCJĘ, KTÓRA BĘDZIE ODPOWIADAŁA ZA SETNE SEKUNDY, USTAWIĆ INTERWAŁ, PRZEKAZANIE DANYCH DO TIME.TEXTCONTENT ORAZ ZROBIĆ ZATRZYMANIE INTERWAŁU





}

const resetTimer = () => {
    time.textContent = "---"
}


startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);