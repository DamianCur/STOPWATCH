// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".time div");















const resetTimer = () => {
    time.textContent = "---"
}



resetBtn.addEventListener("click", resetTimer);