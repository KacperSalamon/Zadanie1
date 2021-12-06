const result = [];

const number = {
    even : [],
    odds : []
}

const column1 = document.getElementById("column1")
const column2 = document.getElementById("column2")

const draw = function () {
    if(result.length === 25) return;

    const resultOfDraw = Math.floor(Math.random()*99 + 1);
    

    if(resultOfDraw % 2 === 0) {
        number.even.push(resultOfDraw);
        number.even.sort((a,b) => a -b)
        
        
    }else{
        number.odds.push(resultOfDraw);
        number.odds.sort((a,b) => a -b)
    }
    
    for(let i=0; i<result.length; i++) {
        if(resultOfDraw === result[i]) {
            return draw();
        }
    }

    

    const numbers = document.createElement("div");
    
    numbers.textContent = resultOfDraw;

    result.push(resultOfDraw);

    

    console.log(column1)

    column1.innerHTML = number.even;
    column2.innerHTML = number.odds;

    

}

const button = document.querySelector("button");

button.addEventListener("click", draw);