var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;
let words = [ "PAMUK", "ASLAN", "BALIK", "KAPAK", "MAKAS",
  "KAZAN", "YALAN", "KUMAS", "KAYAK", "LAMBA",
  "BASMA", "SABAN", "FIRIN", "KABUK", "BARDA",
  "DURAK", "KASIK", "SABIR", "KURAL", "SANAT",
  "DOLAP", "SEVGI", "AKSAM", "YEMEK", "KARAR",
  "TARLA", "YAZMA", "SARKI", "KAMER", "KUPON",
  "ZEYNO", "KAMUS", "YAZAR", "KASET", "KARTO",
  "MANTI", "SEHPA", "MOTOR", "SIFIR", "KISIR",
  "KABAN", "LAMBA", "GOLGE", "FIRCA", "DOLGU",
  "BASKI", "KASAP", "HAVLU", "YAZIK", "DURUM"];
let word = words[Math.floor(Math.random() * words.length)];
window.onload = function() {
    starter();
}

function starter() {
    for(let i=0;i<height;i++) {
        for(let j=0;j<width;j++) {

            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    document.addEventListener("keyup", (e) =>{
        if(gameOver) return;
        if("KeyA" <= e.code && e.code <= "KeyZ") {
            if(col < width) {
                let currTile = document.getElementById(row.toString() + "-" + col.toString());
                if(currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col++;
                }
            }
        }
        else if(e.code == "Backspace") {
            if(0 < col && col <= width) {
                col--;
            }
            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            currTile.innerText = "";
        }
        else if(e.code == "Enter") {
            update();
            row++;
            col = 0;
        }

        if(!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = "Game Over! The word was: " + word; }
    } );

}

function update() {
    let correct = 0;
    for(let k = 0; k < width; k++) {
        let currTile = document.getElementById(row + "-" + k);
        let letter = currTile.innerText;

        if(word[k] === letter) {
            currTile.classList.add("correct");
            correct++;
        } else if(word.includes(letter)) {
            currTile.classList.add("present");
        } else {
            currTile.classList.add("absent");
        }
    }

    if(correct === width) {
        gameOver = true;
        document.getElementById("answer").innerText = "Congratulations! You found the word: " + word;
    }
}