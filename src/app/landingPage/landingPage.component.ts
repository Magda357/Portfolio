import { Component } from "@angular/core";

@Component({
       selector: 'app-landinPage',
       imports: [],
       template: `
       <section id="hero">
       <div id="left-container">  
       <div id= "bg-shape" ><img src="img/Property 1=Default.png" class="default" alt="background default" > 
      </div>
       <div id="prof_pic">
        <img src="img/subject 3.png" alt="Me" width="" height="">
       </div>
       </div>

       <div id="right-conainer"> 

<div id="socmedia"><img id= "linkedin" src="/img/Linkedin button.png"  alt=""> 
       <img id="github" src="img/Github button.png" alt="">
       <img  id="email" src="img/Email button.png" alt="">  </div>
 

     <img id="logo" src="img/logoMD.png" alt="Logo" >
     <h1>Magda Danielyan </h1>
     <h2>FRONTEND DEVELOPER  </h2>  
    <img id="arrow" src="img/Arrow down.png" alt="">
    
</div>
       </section>`,
       styles: [`
       #hero{
        display:flex;
        height:705px;
        width:1214px;
        margin-top:82px; 
        margin-left: 62px;
        border: 2px solid blue;
       }

        #prof_pic {
           position:absolute;
            width:535px;
            height: 683px;
            top: 25px;
            left: 114px;
        
        }

        #left-container{
         width:50%;
         height:700px; 
        position: relative;

        } 
       
    
        #bg-shape{
       width:580px;
       height: 616px;
       margin-left:62px;
       top:66px;
       transform: rotate(45deg);
        border:2px solid green; 
                

        }

        #bg-shape:hover{
            background-image: url('/img/Property 1=hover.png');


        }

#right-conainer{
    width:100%;
    margin-left:110px;
    border:2px solid red;
}
       
          #socmedia{
            display:flex;
            flex-direction:column;
            margin-left:670px;
            margin-top:10px;
            gap:15px;
        }

       
        #linkedin{
            width: 30px;
            height:30px;
        }
        #linkedin:hover{
        background-image: url("/img/Property 1=hover blue.png");
        }

        #github {
            width: 30px;
            height:30px;
        }

        #github:hover{
          background-image: url("/img/Element 6 2 (1).png"); 
        }
          #email{
            width: 30px;
            height:30px;
        }
        #email:hover{
        background-image:url("/img/mail blue (1).svg");
        }
      
        #logo{
            width:150px;
            height:150px;
            margin-left: 250px;

        }
        #arrow{
            display:flex;
            margin-left:330px;
            margin-top:100px;
            width:38px;
            height:89px;
        }


        #arrow:hover{
            background-image:url("/img/Property 1=Hover (2).png");


        }
    
        `]

})

export class LandingPageComponent {

}