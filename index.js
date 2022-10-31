//// VARIABLES

var RN = (MAX)=>{
    return Math.floor(Math.random()*MAX)+1;
}
///// CREATES RANDOM


const PUZZLELENGTH = 11;
var PUZZLENUMBER = 0;
var SCORE = 0;
var PUZZLELIST = [];
var PICTUREID1 = "";
var PICTUREID2 = "";


/// on load 

RandomPictures(RN(PUZZLELENGTH));
REMOVEOB(1,9,"none");

///





function RandomPictures(PN){
    if(PUZZLELIST.includes(PN) == false && PUZZLELIST.length != PUZZLELENGTH){
        PUZZLELIST.push(PN);
    PUZZLENUMBER = PN;
    document.getElementById("PUZZ").innerHTML = "Puzzle: "+PUZZLENUMBER;
    var OPEN = "";
    for(let i =1;i<=9;i++){
        do {
            var RND = RN(9);
        }while(OPEN.includes(RND) == true);
        var FILELOCATION = "./Puzzle"+PN+"/image_part_00"+RND+".jpg"
        document.getElementById("IMG"+i).src = FILELOCATION;
        document.getElementById("IMG"+i).classList.add("MOVEMENT"+RN(4));
        OPEN=OPEN+RND;
    }
}else{
    if(PUZZLELIST.length+1 == PUZZLELENGTH){
        PUZZLELIST = [];
        RandomPictures(RN(PUZZLELENGTH));
    }
}
}
function ROTATE(PICTURE){
var CP = document.getElementById("IMG"+PICTURE);
if(CP.classList.contains("MOVEMENT1") == true){
    CP.classList.remove("MOVEMENT1");
    CP.classList.add("MOVEMENT2");
}else if(CP.classList.contains("MOVEMENT2") == true){
    CP.classList.remove("MOVEMENT2");
    CP.classList.add("MOVEMENT3");
}
else if(CP.classList.contains("MOVEMENT3") == true){
    CP.classList.remove("MOVEMENT3");
    CP.classList.add("MOVEMENT4");
}
else if(CP.classList.contains("MOVEMENT4") == true){
    CP.classList.remove("MOVEMENT4");
    CP.classList.add("MOVEMENT1");
}
REMOVEOB(1,9,"none");
}
document.getElementById("IMG1").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(1,1,"");});
document.getElementById("IMG2").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(2,2,"");});
document.getElementById("IMG3").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(3,3,"");});
document.getElementById("IMG4").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(4,4,"");});
document.getElementById("IMG5").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(5,5,"");});
document.getElementById("IMG6").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(6,6,"");});
document.getElementById("IMG7").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(7,7,"");});
document.getElementById("IMG8").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(8,8,"");});
document.getElementById("IMG9").addEventListener("click",(e)=>{REMOVEOB(1,9,"none");REMOVEOB(9,9,"");});
document.getElementById('COMPLETE').addEventListener("click",()=>{
     var CHECK = 0;
 for(let i = 1;i<10;i++){
    var ORIGIN = document.getElementById("IMG"+i)
    var NORMAL = ORIGIN.src;
     if(i == NORMAL.substring(NORMAL.length-5,NORMAL.length-4) && ORIGIN.className =="MOVEMENT4"){
        CHECK++;
     }   
 }
 if(CHECK == 9){
    SCORE++;
    for(let j = 1;j<10;j++){
            document.getElementById("IMG"+j).className = "WINNER";      
    }
    setTimeout(()=>{
        for(let h = 1;h<10;h++){
            document.getElementById("IMG"+h).className = "";      
    }
    RandomPictures(RN(PUZZLELENGTH));
    },1000)
 }
document.getElementById("SCORE").innerHTML = "Score: "+SCORE;
})

document.getElementById("RESET").addEventListener("click",()=>{
    RandomPictures(RN(PUZZLELENGTH));
})


document.getElementById("NEW").addEventListener("click",()=>{
    RandomPictures(RN(PUZZLELENGTH));
})
function REMOVEOB(MIN,MAX,ITEM){
for(let i = MIN;i<MAX+1;i++){
document.getElementById("IMG-OB"+i).style.display = ITEM;
}
}
function ONDRAG(event){
    PICTUREID1 = event.target.id;
}
function DROP(e){ 
PICTUREID2 = e.target.id;
SWITCHPICTURES()
}
function allowDrop(event) {
  event.preventDefault();
}
function SWITCHPICTURES(){
REMOVEOB(1,9,"none");
var ELEM1 =document.getElementById(PICTUREID1);
var ELEM2 =document.getElementById(PICTUREID2);
var A = ELEM1.src
var B = ELEM2.src
var TEMP = A;
A = B;
B = TEMP;
var ACLASS = ELEM1.className;
var BCLASS = ELEM2.className;
var TEMPCLASS = ACLASS;
ACLASS = BCLASS
BCLASS = TEMPCLASS 
document.getElementById(PICTUREID1).src = A;
document.getElementById(PICTUREID2).src = B;
document.getElementById(PICTUREID2).className = ACLASS;
document.getElementById(PICTUREID2).className = BCLASS;
}
