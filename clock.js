// const template = document.createElement("template");
// template.innerHTML=`
// <link rel="stylesheet" href="clock.css"/>
// <div class="clock-box">
            
// <div class="buttons">
// <button type="button"class="button" id="nxtDigit">NEXT DIGIT</button>
// <button type="button"class="button" id="up">UP</button>
// <button type="button"class="button" id="down">DOWN</button>
// </div>
// <div class="row counter">

// <div class="clock">
// <div class="number active" id="hours"></div>
// <div class="text">HOURS</div>
// </div>

// <div class="clock">
// <div class="number" id="mins">00</div>
// <div class="text">MINUTES</div>
// </div>

// <div class="clock">
// <div class="number" id="secs">00</div>
// <div class="text">SECONDS</div>
// </div>
// </div>
// </div>
// `;


class Clock extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:"open"});
  

    }

    get hours(){
        return this.getAttribute('hours');
    }

    set hours(val){
        this.setAttribute("hours", val);
        
    }

    get mins(){
        return this.getAttribute('mins');
    }

    set mins(val){
        this.setAttribute("mins",val);
    }

    get secs(){
        return this.getAttribute('secs');
    }

    set secs(val){
        this.setAttribute("secs",val);
    }


    static get observedAttributes(){
        return ["hours",'mins',"secs"]
    }
    
    attributeChangedCallback(name, oldVal, newVal){
        this.render();  
        let btnUp=this.shadow.querySelector('#up');
        btnUp.addEventListener('click',this.inc.bind(this));
        let btnDown=this.shadow.querySelector("#down");
        btnDown.addEventListener("click",this.dec.bind(this)); 
        let btnStart=this.shadow.querySelector("#start");
        btnStart.addEventListener("click",this.timer.bind(this));
    };

    connectedCallback(){
        this.render();
        let btnUp=this.shadow.querySelector('#up');
        btnUp.addEventListener('click',this.inc.bind(this));
        let btnDown=this.shadow.querySelector("#down");
        btnDown.addEventListener("click",this.dec.bind(this));
        let btnStart=this.shadow.querySelector("#start");
        btnStart.addEventListener("click",this.timer.bind(this));
    }

    inc(){
        this.hours++;
        if(this.hours>23){
            this.hours=0;
        }
        if(this.hours<10){
            this.hours="0"+this.hours;
        }
        this.mins++;
        if(this.mins>59){
            this.mins=0
        }
        if(this.mins<10){
            this.mins="0"+this.mins;
        }
        this.secs++;
        if(this.secs>59){
            this.secs=0
        }
        if(this.secs<10){
            this.secs="0"+this.secs;
        }


    }

    dec(){
        this.hours-=1;
        if(this.hours<0){
            this.hours=0;
        }
        this.mins-=1;
        if(this.mins<0){
            this.mins=0;
        }
        this.secs-=1;
        if(this.secs<0){
            this.secs=0;
        }
    };

    getTime(){};

    timer(){        
        setInterval(()=>{
            this.secs++;
            if(this.secs>59){
                this.secs=0;
                this.mins++;

            if(this.mins>59){
                this.mins=0;
                this.hours++;
                }
            }
        },1000);

        let currentTime=this.hours+this.mins+this.secs;
        localStorage.setItem("userTime", currentTime);
    };

    render(){
        this.shadow.innerHTML=`
        <link rel="stylesheet" href="clock.css"/>
        <div class="clock-box">
                    
        <div class="buttons">
        <button type="button"class="button" id="nxtDigit">NEXT DIGIT</button>
        <button type="button"class="button" id="up">UP</button>
        <button type="button"class="button" id="down">DOWN</button>
        <button type="button" class="button" id="start">START</button>
        </div>
        <div class="row counter">

        <div class="clock">
        <div class="number active" id="hours" >${this.hours}</div>
        <div class="text">HOURS</div>
        </div>

        <div class="clock">
        <div class="number" id="mins">${this.mins}</div>
        <div class="text">MINUTES</div>
        </div>

        <div class="clock">
        <div class="number" id="secs">${this.secs}</div>
        <div class="text">SECONDS</div>
        </div>
        </div>
        </div> `
    }
}


export default Clock;