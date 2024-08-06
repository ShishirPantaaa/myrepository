const boxes=document.querySelectorAll(".column");
const btn=document.getElementById("resetbtn");
let win;
let draw,currentplayer;
let winningplayer;
function initilization(){
    win=false;
    currentplayer="X";
    draw=false;
    winningplayer=null;
    boxes.forEach((box)=>{
        box.innerHTML="";
   
        box.addEventListener("click",clickHandel,{
            once:true,
           

        });
    });
}
initilization();
//  console.log(boxes);

let winningpattern=[
    //row
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //column
    [0,3,6],
    [1,4,7],
    [5,8,2],
    //diagonal
    [0,4,8],
    [2,4,6],
];

function clickHandel(){
 this.innerHTML=currentplayer;
 if(currentplayer==="x"){
   currentplayer= this.innerHTML="o";
 }
 else{
   currentplayer= this.innerHTML="x";
 }
 checkwin();
 if (win===true){alert("won by "+winningplayer);}

 else if(win===false && draw===true){alert("THE GAME IS DRAW")};
};
function checkwin(){

    let data=[].fill("");//inner html ko value store garna
     boxes.forEach((box)=>{
           data.push(box.innerText); 
         });
     winningpattern.forEach((patten)=>{
         const[a,b,c]=patten;
            if(data[a]&&data[b]&&data[c])
            {
               if(data[a]===data[b] && data[b]===data[c])
               {
                  win=true;
                  winningplayer=currentplayer;
                  return;
                }
        
            }

        
        });
        if(!data.includes("")){
            draw=true;
            return;
        }
    }
btn.addEventListener("click",initilization);
