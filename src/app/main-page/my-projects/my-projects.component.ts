import { Component} from '@angular/core';
import {SingleComponent} from './single/single.component';
import { TranslateModule } from "@ngx-translate/core";
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-my-projects',
  imports: [SingleComponent,TranslateModule,NgClass],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projectlist = [
  { key: 'POKEDEX',
    img1: "img/Ellipse 8.png",
    right_project_pic:"img/pokedex1.png",
    test_button:"img/skills_img/Button Primary Web.svg" , 
    gitHub_button:"img/skills_img/Button Secondary Web (1).svg",
    live_test:"https://magda-danielyan.developerakademie.net/pokedex/",
    gitHub:"https://github.com/Magda357/pokedex"
  },
    

  { key: 'ELPOLLOLOCO',
    img1: "img/Ellipse 8.png",
    right_project_pic:"img/ElPolloLoco.png",
    test_button:"img/skills_img/Button Primary Web.svg" ,
    gitHub_button:"img/skills_img/Button Secondary Web (1).svg",
    live_test:"https://magda-danielyan.developerakademie.net/ELPolloLoco/",
    gitHub:"https://github.com/Magda357/El-Pollo-Loco"

 },
  {key:'JOIN',
    img1: "img/Ellipse 8.png",
right_project_pic:"img/join.png",
test_button:"img/skills_img/Button Primary Web.svg" ,
gitHub_button:"img/skills_img/Button Secondary Web (1).svg",
live_test:"https://gaetano-leanza.developerakademie.net/",
    gitHub:"https://github.com/Gaetano-Leanza/join"
  },
  
];

selectedProject = this.projectlist[0];
selectedProjectIndex = 0;
 hoveredIndex: number | null = null; 

 selectProject(index: number) {
    this.selectedProject = this.projectlist[index];
    this.selectedProjectIndex = index;
  }
   onProjectHover(index: number) {
    this.hoveredIndex = index;
  }

  onProjectLeave() {
    this.hoveredIndex = null;
  }

  

}


