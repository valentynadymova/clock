const startTime = new Date();
function clock() {

    //the time you want to start from
    const myTime = new Date();
    // const h= myTime.setHours(5);
    // const m=myTime.setMinutes(20);
    // const s= myTime.setSeconds(40)

  
    ///calcualte the difference between the start and current time
    const diff = new Date() - startTime;
    // console.log(diff)
  
    //add that difference to the offset time
    myTime.setMilliseconds(myTime.getMilliseconds() + diff);

    //Generate your output
    let seconds = myTime.getSeconds();
    if(seconds<10){
        seconds = "0"+ seconds;
    }
    document.getElementById("seconds").innerHTML=seconds;
    let minutes = myTime.getMinutes();
    if(minutes < 10){
        minutes = "0"+ minutes;
    }
    document.getElementById("minutes").innerHTML=minutes;
    let hours = myTime.getHours();
    if(hours<10){
        hours = "0"+ hours;
    }
    document.getElementById("hours").innerHTML=hours;


    window.localStorage.setItem('time', myTime);

}

setInterval(clock, 1000);
clock();


