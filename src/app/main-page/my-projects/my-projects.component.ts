import { Component} from '@angular/core';
import {SingleComponent} from './single/single.component'

@Component({
  selector: 'app-my-projects',
  imports: [SingleComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  
  projectlist= [

{
img1: "/img/Ellipse 8.png",
par1: "About the project ",
description1:" Duration: 2 Weeks",
text1: "This App is a Slack Clone App.It revolutionizes team communication and collaboration with its intuitive interface,real-time messaging, and robust channel organization.",
par2: "How I have organised my work process",
description2: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
par3: "My group work experience",
description3:"How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
right_paar:"Technologies",
right_project_pic:"/img/pokedex.png",
live_test:"/img/skills_img/Button Primary Web.svg" ,
gitHub:"/img/skills_img/Button Secondary Web (1).svg",
},

{
img1: "/img/Ellipse 8.png",
par1: "About the project2 ",
description1:" Duration: 4 Weeks",
text1: "This App is a Slack Clone App.It revolutionizes team communication and collaboration with its intuitive interface,real-time messaging, and robust channel organization.",
par2: "How I have organised my work process2",
description2: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
par3: "My group work experience2",
description3:"How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
right_paar:"Technologies2",
right_project_pic:"/img/ElPolloLoco.png",
live_test:"/img/skills_img/Button Primary Web.svg" ,
gitHub:"/img/skills_img/Button Secondary Web (1).svg",
},
{
img1: "/img/Ellipse 8.png",
par1: "About the project3 ",
description1:" Duration: 3 Weeks",
text1: "This App is a Slack Clone App.It revolutionizes team communication and collaboration with its intuitive interface,real-time messaging, and robust channel organization.",
par2: "How I have organised my work process3",
description2: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
par3: "My group work experience3",
description3:"How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
right_paar:"Technologies3",
right_project_pic:"/img/daBubble.png",
live_test:"/img/skills_img/Button Primary Web.svg" ,
gitHub:"/img/skills_img/Button Secondary Web (1).svg",
},
{
img1: "/img/Ellipse 8.png",
par1: "About the project4 ",
description1:" Duration: 5 Weeks",
text1: "This App is a Slack Clone App.It revolutionizes team communication and collaboration with its intuitive interface,real-time messaging, and robust channel organization.",
par2: "How I have organised my work process4",
description2: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
par3: "My group work experience4",
description3:"How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.",
right_paar:"Technologies4",
right_project_pic:"/img/join.png",
live_test:"/img/skills_img/Button Primary Web.svg" ,
gitHub:"/img/skills_img/Button Secondary Web (1).svg",
},
  ]

selectedProject = this.projectlist[0];
 selectProject(index: number) {
    this.selectedProject = this.projectlist[index];
  }

}


