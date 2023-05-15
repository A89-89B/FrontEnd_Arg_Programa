import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  proyectos:Proyecto[]=[];

  isLogged = false;

  constructor(private projectService:ProjectService, private tokenService:TokenService, private router:Router){}

    //Para inicializarlo
    ngOnInit():void{
      this.getProyecto();
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
    
  
    public getProyecto(){
      this.projectService.getProyecto().subscribe(dato=>{
        this.proyectos=dato;
      })
    }
  
    saveProyecto(){
      this.router.navigate(['save-project']);      
    }
  
    //Para navegar a otras rutas
    irAOtraRuta(){
      this.router.navigate([''])
    }
  
    onSubmit(){
      this.saveProyecto();
    }
  
    //Tomo su id
    updateProyecto(proyecto:Proyecto){
      this.router.navigate(['edit-project',proyecto.id]);
    }
  
    deleteProyecto(proyecto:Proyecto){
      if(confirm("¿Esta seguro de eliminarlo?")){
        this.projectService.deleteProyecto(proyecto).subscribe(()=>(
          this.proyectos = this.proyectos.filter( (t) => t.id !== proyecto.id)
        ));
        window.location.reload();
      }
    }
}
