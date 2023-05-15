import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiencias:Experiencia[]=[];

  isLogged = false;

  constructor(private experienceService:ExperienceService, private tokenService:TokenService, private router:Router){}

    //Para inicializarlo
    ngOnInit():void{
      this.getExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }
  
    onLogOut():void {
      this.tokenService.logOut();
      window.location.reload();
    }
  
    login():void {
      this.router.navigate(['login']);
    }
    
  
    public getExperiencia(){
      this.experienceService.getExperiencia().subscribe(dato=>{
        this.experiencias=dato;
      })
    }
  
    saveExperiencia(){
      this.router.navigate(['save-experience']);      
    }
  
    //Para navegar a otras rutas
    irAOtraRuta(){
      this.router.navigate([''])
    }
  
    onSubmit(){
      this.saveExperiencia();
    }
  
    //Tomo su id
    updateExperiencia(experiencia:Experiencia){
      this.router.navigate(['edit-experience',experiencia.id]);
    }
  
    deleteExperiencia(experiencia:Experiencia){
      if(confirm("¿Esta seguro de eliminarlo?")){
        this.experienceService.deleteExperiencia(experiencia).subscribe(()=>(
          this.experiencias = this.experiencias.filter( (t) => t.id !== experiencia.id)
        ));
        window.location.reload();
      }
    }
}
