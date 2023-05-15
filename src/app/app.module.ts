import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { RedComponent } from './components/red/red.component';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { SaveEducationComponent } from './components/education/save-education/save-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { SaveExperienceComponent } from './components/experience/save-experience/save-experience.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { SaveProjectComponent } from './components/project/save-project/save-project.component';
import { EditRedComponent } from './components/red/edit-red/edit-red.component';
import { SaveRedComponent } from './components/red/save-red/save-red.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { SaveSkillComponent } from './components/skill/save-skill/save-skill.component';
import { ImgAboutComponent } from './components/about/img-about/img-about.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
//import { interceptorProvider } from './service/InterceptorService'; //no me funciona, da problemas

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    RedComponent,
    ProjectComponent,
    EditAboutComponent,
    EditEducationComponent,
    SaveEducationComponent,
    EditExperienceComponent,
    SaveExperienceComponent,
    EditProjectComponent,
    SaveProjectComponent,
    EditRedComponent,
    SaveRedComponent,
    EditSkillComponent,
    SaveSkillComponent,
    ImgAboutComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Lo importo para las peticiones
    FormsModule, //Para utilizar los formularios
    ReactiveFormsModule, //Formularios reactivos sincrónicos
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],//interceptorProvider no me funciona, da problemas
  bootstrap: [AppComponent]
})
export class AppModule { }
