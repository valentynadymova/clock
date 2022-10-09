// const template = document.createElement("template");
// template.innerHTML=`
// <link rel="stylesheet" href="clock.css"/>
// <div class="clock-box">
            
// <div class="buttons">
// <button type="button"class="button">NEXT DIGIT</button>
// <button type="button"class="button" id="up">UP</button>
// <button type="button"class="button">DOWN</button>
// </div>
// <div class="row counter">

// <div class="clock">
// <div class="number" id="hours" >00</div>
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
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

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


    static get observedAttributes(){
        return ["hours",'mins']
    }

     attributeChangedCallback(prop, oldVal, newVal){
        if (prop==="hours")this.render();
        let btnUp=this.shadow.querySelector('#up');
        btnUp.addEventListener('click',this.inc.bind(this));
        let btnDown=this.shadow.querySelector("#down");
        btnDown.addEventListener("click",this.dec.bind(this));
        // let btnNxtDigit=this.shadow.querySelector("#nxtDigit");
        // btnNxtDigit.addEventListener('click', this.nxtDigit.bind(this));
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

    }

    dec(){
        this.hours-=1;
        if(this.hours<0){
            this.hours=0;
        }

    }

    // nxtDigit(){
    //     this.hours.removeClass('active').eq(++activeItem % qtItems).addClass('active');
    // }

    // $('#setnext').click(function () {
    //     $items.removeClass('active').eq(++activeItem % qtItems).addClass('active');
    //   });

    connectedCallback(){
        this.render();
        let btnUp=this.shadow.querySelector('#up');
        btnUp.addEventListener('click',this.inc.bind(this));
        let btnDown=this.shadow.querySelector("#down");
        btnDown.addEventListener("click",this.dec.bind(this));
        // let btnNxtDigit=this.shadow.querySelector("#nxtDigit");
        // btnNxtDigit.addEventListener('click', this.nxtDigit.bind(this));
        // setInterval(()=>
        // this.getTime(),1000)

    }
    getTime(){};

    render(){
        this.shadow.innerHTML=`
        <link rel="stylesheet" href="clock.css"/>
        <div class="clock-box">
                    
        <div class="buttons">
        <button type="button"class="button" id="nxtDigit">NEXT DIGIT</button>
        <button type="button"class="button" id="up">UP</button>
        <button type="button"class="button" id="down">DOWN</button>
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
        <div class="number" id="secs">00</div>
        <div class="text">SECONDS</div>
        </div>
        </div>
        </div> `
    }
}


export default Clock;