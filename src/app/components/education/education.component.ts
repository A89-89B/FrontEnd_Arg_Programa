import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educacion:Educacion[]=[];

  isLogged = false;

  constructor(private educationService:EducationService, private tokenService:TokenService, private router:Router){}

    //Para inicializarlo
    ngOnInit():void{
      this.getEducacion();
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
    
  
    public getEducacion(){
      this.educationService.getEducacion().subscribe(dato=>{
        this.educacion=dato;
      })
    }
  
    saveEducacion(){
      this.router.navigate(['save-education']);      
    }
  
    //Para navegar a otras rutas
    irAOtraRuta(){
      this.router.navigate([''])
    }
  
    onSubmit(){
      this.saveEducacion();
    }
  
    //Tomo su id
    updateEducacion(educacion:Educacion){
      this.router.navigate(['edit-education',educacion.id]);
      //window.location.reload;
      //confirm("¿Querés modificar la información?")
    }
  
    deleteEducacion(educacion:Educacion){
      if(confirm("¿Esta seguro de eliminarlo?")){
        this.educationService.deleteEducacion(educacion).subscribe(()=>(
          this.educacion = this.educacion.filter( (t) => t.id !== educacion.id)
          //console.log(dato);
          //this.getEducacion();
          
        ));
        window.location.reload();
      }
    }

}
