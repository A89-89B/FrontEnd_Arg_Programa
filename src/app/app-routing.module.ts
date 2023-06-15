import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { SaveEducationComponent } from './components/education/save-education/save-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { SaveExperienceComponent } from './components/experience/save-experience/save-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { SaveProjectComponent } from './components/project/save-project/save-project.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { SaveRedComponent } from './components/red/save-red/save-red.component';
import { EditRedComponent } from './components/red/edit-red/edit-red.component';
import { SaveSkillComponent } from './components/skill/save-skill/save-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { RedComponent } from './components/red/red.component';
import { SkillComponent } from './components/skill/skill.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'',redirectTo:'',pathMatch:'full'},//redirect la ruta completa
  {path:'edit-about/:id', component:EditAboutComponent, canActivate:[GuardGuard]},//pone el id
  {path:'education', component:EducationComponent},
  {path:'save-education', component:SaveEducationComponent, canActivate:[GuardGuard]},
  {path:'edit-education/:id', component:EditEducationComponent,canActivate:[GuardGuard]},
  {path:'experience', component:ExperienceComponent},
  {path:'save-experience', component:SaveExperienceComponent, canActivate:[GuardGuard]},
  {path:'edit-experience/:id', component:EditExperienceComponent, canActivate:[GuardGuard]},
  {path:'project', component:ProjectComponent},
  {path:'save-project', component:SaveProjectComponent, canActivate:[GuardGuard]},
  {path:'edit-project/:id', component:EditProjectComponent, canActivate:[GuardGuard]},
  {path:'red', component:RedComponent},
  {path:'save-red', component:SaveRedComponent, canActivate:[GuardGuard]},
  {path:'edit-red/:id', component:EditRedComponent, canActivate:[GuardGuard]},
  {path:'skill', component:SkillComponent},
  {path:'save-skill', component:SaveSkillComponent, canActivate:[GuardGuard]},
  {path:'edit-skill/:id', component:EditSkillComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'**',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
