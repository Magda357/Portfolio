import { Component } from "@angular/core";

@Component({
       selector: 'app-landinPage',
       standalone: true,
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
        <h1>Magda Danielyan </h1>
    <h2>FRONTEND DEVELOPER  </h2> 
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
        h1{
    color:#F8F5EC;
 font-weight:400;
    font-size: 88px;
    font-family:'Anta';
}
        `]

})

export class LandingPageComponent {

}