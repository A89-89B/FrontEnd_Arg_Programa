import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent {

  form:FormGroup;
  id?:number;
  persona:Persona={
    nombreCompleto:'',
    about:'',
    titulo:'',
    //userImg:'',
    //backImg:'',
     email:''
  };

  constructor(private aboutService:AboutService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
        nombreCompleto:['',[Validators.required]],
        about:['',[Validators.required, Validators.maxLength(2000)]],
        titulo:['',[Validators.required]],
        //email:['',[Validators.required,Validators.email]],
      })
    }

  ngOnInit():void{
    //Añado el id a la variable id
    this.id = this.route.snapshot.params['id'];
    this.aboutService.getPersonaById(this.id).subscribe(dato=>{
      this.persona=dato;
    },error=>console.log(error));
  }

  //Propiedad para obtener nombreCompleto(formControlName)
  get NombreCompleto(){
    return this.form.get('nombreCompleto');
  }

  //Propieda para obtener about(formControlName)
  get About(){
    return this.form.get('about');
  }

  //Propiedad para obtener titulo(formControlName)
  get Titulo(){
    return this.form.get('titulo');
  }

  /*Propiedad para obtener email(formControlName)
  get Email(){
    return this.form.get('email');
  }*/

  irAlaListaDeEmpleados(){
    this.router.navigate(['']);
    //swal('About actualizado',`El about de ${this.persona.nombreCompleto} ha sido actualizado con exito`,`success`);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.aboutService.updatePersona(this.id,this.form.value).subscribe(dato => {
        this.irAlaListaDeEmpleados();
        console.log(dato);
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
