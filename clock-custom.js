const startTime = new Date();
const h=document.getElementById('hours').value;
console.log(h);

function clock() {

    //the time you want to start from
    const myTime = new Date();
    let hours = myTime.setHours(5);
    let minutes=myTime.setMinutes(20);
    let seconds= myTime.setSeconds(40)

  
    ///calcualte the difference between the start and current time
    const diff = new Date() - startTime;
    // console.log(diff)
  
    //add that difference to the offset time
    myTime.setMilliseconds(myTime.getMilliseconds() + diff);

    //Generate your output
     seconds = myTime.getSeconds();
    if(seconds<10){
        seconds = "0"+ seconds;
    }
    document.getElementById("seconds").innerHTML=seconds;
     minutes = myTime.getMinutes();
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    document.getElementById("minutes").innerHTML=minutes;
    hours = myTime.getHours();
    if(hours<10){
        hours = "0"+ hours;
    }
    document.getElementById("hours").innerHTML=hours;


    window.localStorage.setItem('time', myTime);

}

setInterval(clock, 1000);
clock();


