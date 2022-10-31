//// VARIABLES

var RN = (MAX)=>{
    return Math.floor(Math.random()*MAX)+1;
}



const PUZZLELENGTH = 11;
var PUZZLENUMBER = 0;
var SCORE = 0;

var PUZZLELIST = [];



/// on load 

RandomPictures(RN(PUZZLELENGTH));
SHOWORNOT(1,33,"none");

///





function RandomPictures(PN){
    console.log(PUZZLELIST.includes(PN) == false && PUZZLELIST.length+1 != PUZZLELENGTH)
    if(PUZZLELIST.includes(PN) == false && PUZZLELIST.length+1 != PUZZLELENGTH){
        PUZZLELIST.push(PN);
    PUZZLENUMBER = PN
    document.getElementById("PUZZ").innerHTML = "Puzzle: "+PUZZLENUMBER;
    var OPEN = "";
    for(let i =1;i<=9;i++){
        do {
            var RND = RN(9);
        }while(OPEN.includes(RND) == true);
        var FILELOCATION = "/Puzzle"+PN+"/image_part_00"+RND+".jpg"
        document.getElementById("IMG"+i).src = FILELOCATION;
        document.getElementById("IMG"+i).classList.add("MOVEMENT"+RN(4));
        OPEN=OPEN+RND;
    }
}else{
    if(PUZZLELIST.length+1 == PUZZLELENGTH){
        PUZZLELIST = [];
        console.log(PUZZLELIST)
    }else{
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
SHOWORNOT(1,33,"none");
}



function SWITICH(CURRENT,SWITCHTOO){
var A = document.getElementById("IMG"+CURRENT);
var B = document.getElementById("IMG"+SWITCHTOO);
var ACLASS = A.className;
var BCLASS = B.className;
A.className = BCLASS;
B.className = ACLASS;
var TEMP = A.src;
A.src = B.src;
B.src=TEMP;
SHOWORNOT(1,33,"none");
}


document.getElementById("IMG1").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(1,3,"")});
document.getElementById("IMG2").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(4,7,"")});
document.getElementById("IMG3").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(8,10,"")});
document.getElementById("IMG4").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(11,14,"")});
document.getElementById("IMG5").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(15,19,"")});
document.getElementById("IMG6").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(20,23,"")});
document.getElementById("IMG7").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(24,26,"")});
document.getElementById("IMG8").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(27,30,"")});
document.getElementById("IMG9").addEventListener("click",()=>{SHOWORNOT(1,33,"none");SHOWORNOT(31,33,"")});

function SHOWORNOT(START,END,VALUE){
  for(let i = START;i<END+1;i++){
    document.getElementById("IMG-OB"+i).style.display = VALUE;
  }
}



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
