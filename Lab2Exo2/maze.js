









var startButton = document.getElementById("start");
var endButton  = document.getElementById("end");
var mazeZone  = document.getElementById("maze");
var status  = document.getElementById("status")






    let active = false;

startButton.addEventListener('mouseenter', () => {
    if(active === false){
        active = true;
        setBackgroundColor("#eeeeee");
        winCase();
        moveOverZone();
        movingZone();
    }

});



function movingZone(){
    mazeZone.addEventListener('mouseenter', () => {
        if(active === false){

            winCase();
            moveOverZone();
        }

    });
}




function winCase(){
    var status = document.getElementById("status"); // Assuming `status` is an element displaying game status

    if(active ===true){
    endButton.addEventListener('mouseenter',() => {
        status.innerHTML = "Great You win!";

        setBackgroundColor('#9BF09D');
        active = false;

    })

}}
function setBackgroundColor ( backgroundColor){
    var wallCollection =document.getElementsByClassName("boundary");
    for(let i=0;i<wallCollection.length;i++){
        wallCollection[i].style.backgroundColor = backgroundColor;
    }
}


function moveOverZone() {
    var status = document.getElementById("status");
    var wallCollection = document.getElementsByClassName("boundary");
    Array.from(wallCollection).forEach(wall => {
        if (active) {
            wall.addEventListener("mouseenter", () => {
                active = false;
                status.innerHTML = "You Failed, Try Again";
                Array.from(wallCollection).forEach(wall => {
                    wall.style.backgroundColor = "red";
                });
            });
        }
    });
}

