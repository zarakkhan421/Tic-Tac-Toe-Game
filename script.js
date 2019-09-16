
var boxMarks=document.getElementsByClassName("box");
var turn=true;
var marks=0
var new_button=document.getElementsByClassName("new-game-button")[0];
var new_game_text=document.getElementsByClassName("new-game")[0];
var win_lose_draw_message=document.getElementsByClassName("win-lose-draw");

new_game();
text_white();
event_listeners();

new_button.addEventListener("click", new_game);

function new_game(){
    boxMarks[0].innerHTML="1";
    boxMarks[1].innerHTML="2";
    boxMarks[2].innerHTML="3";
    boxMarks[3].innerHTML="4";
    boxMarks[4].innerHTML="5";
    boxMarks[5].innerHTML="6";
    boxMarks[6].innerHTML="7";
    boxMarks[7].innerHTML="8";
    boxMarks[8].innerHTML="9";

    win_lose_draw_message[0].style.visibility="hidden";
    win_lose_draw_message[1].style.visibility="hidden";
    new_game_text.style.visibility="hidden";
    
    marks=0;
    turn=true;

    boxMarks[0].style.color="white";
    boxMarks[1].style.color="white";
    boxMarks[2].style.color="white";
    boxMarks[3].style.color="white";
    boxMarks[4].style.color="white";
    boxMarks[5].style.color="white";
    boxMarks[6].style.color="white";
    boxMarks[7].style.color="white";
    boxMarks[8].style.color="white";
    
    event_listeners();

    
}
function event_listeners(){
    boxMarks[0].addEventListener("click",mark);
    boxMarks[1].addEventListener("click",mark);
    boxMarks[2].addEventListener("click",mark);
    boxMarks[3].addEventListener("click",mark);
    boxMarks[4].addEventListener("click",mark);
    boxMarks[5].addEventListener("click",mark);
    boxMarks[6].addEventListener("click",mark);
    boxMarks[7].addEventListener("click",mark);
    boxMarks[8].addEventListener("click",mark);
}
function text_white(){
    boxMarks[0].style.color="white";
    boxMarks[1].style.color="white";
    boxMarks[2].style.color="white";
    boxMarks[3].style.color="white";
    boxMarks[4].style.color="white";
    boxMarks[5].style.color="white";
    boxMarks[6].style.color="white";
    boxMarks[7].style.color="white";
    boxMarks[8].style.color="white";
}
function mark(){

    if(turn){
        this.innerHTML="X";
        this.style.color="blue"
        this.removeEventListener("click", mark)
        turnOf=0;
        win_lose()            
    }else{
        this.innerHTML="O"
        this.style.color="blue"
        this.removeEventListener("click", mark)
        turnOf=1;
        win_lose()  
        turn=true
    }
}
function win_lose(){
    // Winner/Loser
        marks++;

        if(marks===9){
        win_lose_draw_message[0].style.visibility="visible";
        win_lose_draw_message[1].style.visibility="visible";
        win_lose_draw_message[0].innerHTML="Draw"
        win_lose_draw_message[1].innerHTML="Draw"
        new_game_text.style.visibility="visible";
        stop_game();
        }else if(boxMarks[0].innerHTML==boxMarks[1].innerHTML&&boxMarks[0].innerHTML==boxMarks[2].innerHTML){
        visible_text()
        stop_game();
        }else if(boxMarks[3].innerHTML==boxMarks[4].innerHTML&&boxMarks[3].innerHTML==boxMarks[5].innerHTML){
        visible_text()
        stop_game();
        }else if(boxMarks[6].innerHTML==boxMarks[7].innerHTML&&boxMarks[6].innerHTML==boxMarks[8].innerHTML){
        visible_text()
        stop_game();
        }else if(boxMarks[0].innerHTML==boxMarks[3].innerHTML&&boxMarks[0].innerHTML==boxMarks[6].innerHTML){
        visible_text()    
        stop_game();
        }else if(boxMarks[1].innerHTML==boxMarks[4].innerHTML&&boxMarks[1].innerHTML==boxMarks[7].innerHTML){
        visible_text()
        stop_game();
        }else if(boxMarks[2].innerHTML==boxMarks[5].innerHTML&&boxMarks[2].innerHTML==boxMarks[8].innerHTML){
        visible_text()
        stop_game();    
        }else if(boxMarks[0].innerHTML==boxMarks[4].innerHTML&&boxMarks[0].innerHTML==boxMarks[8].innerHTML){
        visible_text()
        stop_game();        
        }else if(boxMarks[2].innerHTML==boxMarks[4].innerHTML&&boxMarks[2].innerHTML==boxMarks[6].innerHTML){
        visible_text()
        stop_game();           
        }else{
            turn=false;
        }
}
function visible_text(){
    win_lose_draw_message[turnOf].style.visibility="visible";
    win_lose_draw_message[turnOf].innerHTML="Winner";
    new_game_text.style.visibility="visible";
}
function stop_game(){
    boxMarks[0].removeEventListener("click",mark);
    boxMarks[1].removeEventListener("click",mark);
    boxMarks[2].removeEventListener("click",mark);
    boxMarks[3].removeEventListener("click",mark);
    boxMarks[4].removeEventListener("click",mark);
    boxMarks[5].removeEventListener("click",mark);
    boxMarks[6].removeEventListener("click",mark);
    boxMarks[7].removeEventListener("click",mark);
    boxMarks[8].removeEventListener("click",mark);   
}

