
let userRock = document.getElementById("btn-rock");
let userPaper = document.getElementById("btn-paper");
let userScissors = document.getElementById("btn-scissors");
let imgSelected = document.getElementById('img-selected');
let pcSelected = document.getElementById('cpu-selected');
let userPoints = document.getElementById('user-points');
let pcPoints = document.getElementById('cpu-points');
let gameResult = document.getElementById('h3-result');
    
let userSelect = 0;
let pcSelect = 0;

let userPoint = 0;
let pcPoint = 0;
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    userRock.addEventListener('click', ()=> {
        imgSelected.src = "./depositphotos_27171377-stock-illustration-fist-silhouette.jpg";
        userSelect = 1;
        turnpc();
        calculatePoints();
        finalScore();   
      });
      userPaper.addEventListener('click', ()=> {
        imgSelected.src = "./061.jpg";
        userSelect = 2;
        turnpc();
        calculatePoints();
        finalScore();   
      });
      userScissors.addEventListener('click', ()=> {
        imgSelected.src = "./66323363-signo-de-victoria-el-gesto-de-la-mano-dos-dedos-levantados-ilustración-del-vector.jpg";
        userSelect = 3;
        turnpc();
        calculatePoints();
        finalScore();   
      });

      pcSelected.addEventListener('click', ()=> {
        imgSelected.src = "assets/scissors.jpeg";
        pcSelect = 0;
        turnpc();
        calculatePoints();
        finalScore();   
      });

     
      function turnpc() {
        let turn = random(1,3);
        if (turn === 1) {
          pcSelected.src = "./depositphotos_27171377-stock-illustration-fist-silhouette.jpg";
          pcSelect = 1;
        } else if (turn === 2) {
          pcSelected.src = "./061.jpg";
          pcSelect = 2;
        } else {
          pcSelected.src = "./66323363-signo-de-victoria-el-gesto-de-la-mano-dos-dedos-levantados-ilustración-del-vector.jpg";  
          pcSelect = 3;
        } 
      }
      function calculatePoints() {
  if (userSelect === pcSelect) {
    gameResult.textContent = "Players tie!";    
  } else if( (userSelect === 1 && pcSelect === 3) || (userSelect === 2 && pcSelect === 1) || (userSelect === 3 && pcSelect === 2)) {
    gameResult.textContent = "User Winner!";    
    userPoint++;
    userPoints.textContent = userPoint;
  } else {
    gameResult.textContent = "PC Winner";    
    pcPoint++;
    pcPoints.textContent = pcPoint;
  } 
}
function finalScore() {
    if (userPoint === 3) {
     alert('User is the winner!');  
     window.location.reload()
     return;
   } else if(pcPoint === 3) {
      alert('pc is the winner!')   
      window.location.reload();
      return;

    }
   }