import { Routes } from '@angular/router';
import{MainPageComponent } from './main-page/main-page.component';
import{ImprintComponent} from './imprint/imprint.component';
import{DatenschutzComponent} from './datenschutz/datenschutz.component';
/*import{MySkillsComponent} from './main-page/my-skills/my-skills.component';*/

export const routes: Routes = [
    
    {path: '', component: MainPageComponent }, 
    {path: 'imprint', component: ImprintComponent },
     {path: 'privacy-policy', component: DatenschutzComponent},
/*{path: 'my-skills',component:MySkillsComponent}*/
   
];
