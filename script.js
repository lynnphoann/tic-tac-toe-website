let boxes = document.querySelectorAll(".grid-box");
let turn = "X";
let isGameOver = false;

boxes.forEach(element => {
    element.innerHTML = "";
    element.addEventListener("click",()=>{
        if(!isGameOver && element.innerHTML === ""){
            element.innerHTML = turn;
            draw();
            winningcheck();
 
            changeTurn();
        }
    })
});

function changeTurn() {
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";

    }else{
        turn = "X";
        document.querySelector(".bg").style.left = "0px";
        
    }
}

function winningcheck(){
    let winCondition = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,4,8],[2,4,6],[0,3,6],
        [1,4,7],[2,5,8]
    ]

    for(let i = 0 ; i < winCondition.length;i++){
        let v0 = boxes[winCondition[i][0]].innerHTML;
        let v1 = boxes[winCondition[i][1]].innerHTML;
        let v2 = boxes[winCondition[i][2]].innerHTML;
        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " Win";
            document.querySelector("#play-again").style.display = "inline";
            for(j = 0 ; j<3;j++){
                boxes[winCondition[i][j]].style.backgroundColor = "aqua";
                boxes[winCondition[i][j]].style.color = "rgba(32, 32, 32, 0.812)";
            }
        }
    }
}

function draw() {
    let isDraw = true;
    if(!isGameOver){
      
        boxes.forEach(e =>{
            if(e.innerHTML === ""){
                isDraw = false
            }
        })
    }
    if(isDraw){
        isGameOver = true;
        document.querySelector("#results").innerHTML = "Draw";
        document.querySelector("#play-again").style.display = "inline";
    }
}

document.querySelector("#play-again").addEventListener("click",()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0px";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "white";
    })
})