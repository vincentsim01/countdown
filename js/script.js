var theDay=document.getElementById("theDay");
var theHour=document.getElementById("theHour");
var theMinute=document.getElementById("theMinute");
var theSecond=document.getElementById("theSecond");
var theButton=document.getElementById("startButton");
var theStopButton=document.getElementById("stopButton");
var theResetButton=document.getElementById("resetButton");
var selectDays=document.getElementById("selectDays");


var hours;
var days;
var minutes;
var seconds;
var Interval;



selectDays.onchange=function getOption(){
    var selectedSelect=selectDays.value;
    var targetTime= new Date().getTime()+(selectedSelect*24*3600*1000);
    
    var Interval;

    theButton.onclick=function(){
        clearInterval(Interval);
        var selectedSelect=selectDays.value;
        var targetTime= new Date().getTime()+(selectedSelect*24*3600*1000);

        Interval=setInterval(countdownStart,1000);
}

theStopButton.onclick=function(){
    clearInterval(Interval);
}

theResetButton.onclick=function(){
    clearInterval(Interval);
    theDay.innerHTML="00";
    theHour.innerHTML="00";
    theMinute.innerHTML="00";
    theSecond.innerHTML="00";
}



    function countdownStart(){



        var currentTime=new Date().getTime();
        var secondsLeft=(targetTime-currentTime)/1000;

        var days=Math.floor(secondsLeft/86400);
        secondsLeft=secondsLeft%86400;

        var hours=Math.floor(secondsLeft/3600);
        secondsLeft=secondsLeft%3600;

        var minutes=Math.floor(secondsLeft/60);
        secondsLeft=Math.floor(secondsLeft%60);

        theDay.innerHTML=days;
        theHour.innerHTML=hours;
        theMinute.innerHTML=minutes;
        theSecond.innerHTML=secondsLeft;
}


}




/*
selectDays.onchange="getOption()"
//var dayprompt=prompt("How Many Days?")

function getOption(){
    var selectDay=document.getElementById("selectDays");
    //var value = selectDay.options[selectDay.selectedIndex].value;
    //var text = selectDay.options[selectDay.selectedIndex].text;
    return value;

}
*/


/*
selectDays.onchange=function(){
    var targetTime= new Date().getTime()+(this.value*24*3600*1000);
    return targetTime;
}
*/





// var selectedSelect=selectDays.value;
// var targetTime= new Date().getTime()+(selectedSelect*24*3600*1000);


// var Interval;

// theButton.onclick=function(){
//     clearInterval(Interval);
//     var selectedSelect=selectDays.value;
//     var targetTime= new Date().getTime()+(selectedSelect*24*3600*1000);

//     Interval=setInterval(countdownStart,1000);
// }

// theStopButton.onclick=function(){
//     clearInterval(Interval);
// }

// theResetButton.onclick=function(){
//     clearInterval(Interval);
//     theDay.innerHTML="00";
//     theHour.innerHTML="00";
//     theMinute.innerHTML="00";
//     theSecond.innerHTML="00";
// }

// function countdownStart(){



//     var currentTime=new Date().getTime();
//     var secondsLeft=(targetTime-currentTime)/1000;

//     var days=Math.floor(secondsLeft/86400);
//     secondsLeft=secondsLeft%86400;

//     var hours=Math.floor(secondsLeft/3600);
//     secondsLeft=secondsLeft%3600;

//     var minutes=Math.floor(secondsLeft/60);
//     secondsLeft=Math.floor(secondsLeft%60);

//     theDay.innerHTML=days;
//     theHour.innerHTML=hours;
//     theMinute.innerHTML=minutes;
//     theSecond.innerHTML=secondsLeft;
// }


