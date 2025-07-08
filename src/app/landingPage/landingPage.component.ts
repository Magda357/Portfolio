import { Component } from "@angular/core";

@Component({
       selector: 'app-landinPage',
       imports: [],
       template: `
       <section id="hero">
       <div id="pic-bgr-div">  
       <div id= "pic-bgr" ><img src="img/Property 1=Default.png" class="default" alt="background default" > 
      </div>
       <div id="prof_pic">
        <img src="img/subject 3.png" alt="Me" width="" height="">
       </div>
       </div>
       
       <div id="name"> 


<div id="socbuttons"><img id= "linkedin" src="/img/Linkedin button.png"  alt=""> 
       <img id="github" src="/img/Github button.png" alt="">
       <img  id="email" src="/img/Email button.png" alt="">
 </div>
        <img id="logo" src="img/Logo_M.png" alt="Logo" >
       
        <h1>Magda Danielyan </h1>
    <h2>FRONTEND DEVELOPER  </h2> 

    <img id="arrow" src="img/Arrow down.png" alt="">
    
</div>
       
       </section>`,
       styles: [`
       #hero{
        display:flex;
        height:705px;
        margin-top:41px; 
        margin-left: 114px;
        margin-right: 114px;
        border: 2px solid blue;
       
       }

        #prof_pic {
           position:absolute;
            width:535px;
            height: 683px;
            top: 41px;
            left:114px;
            z-index: 999;

        }

        #pic-bgr-div{
         border:2px solid red; 
         width:650px;
         height:700px; 
           position: relative;

        } 
        #pic-bgr img {


        }
        
        #pic-bgr{
             width:580px;
            height: 616px;
       margin-left:62.23px;
       top:66.3px;
       transform: rotate(45deg);
        border:2px solid green; 
                

        }

        #pic-bgr:hover{
            background-image: url('/img/Property 1=hover.png');

        }
        #name{
            display:flex;
            justify-content:center;
            flex-direction: column;
            margin-left: 220px;
            margin-top:-30px;
            width:700px;
            border: 2px solid yellow;

        }
        #linkedin{
            width: 30px;
            height:30px;
        }
        #github {
            width: 30px;
            height:30px;
        }
          #email{
            width: 30px;
            height:30px;
        }
        #socbuttons{
            display:flex;
            flex-direction:column;
            margin-left:670px;
            padding-bottom: 80px;
            margin-top: -220px;
            gap:10px;
        }

        #logo{
            width:100px;
            height:100px;
            margin-left: 300px;

        }
        #arrow{
            display:flex;
            margin-left:330px;
            margin-top:50px;
            width:38px;
            height:89px;
        }
    
        `]

})

export class LandingPageComponent {

}