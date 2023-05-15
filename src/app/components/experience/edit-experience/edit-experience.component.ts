import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {

  form:FormGroup;
  id?:number;

  constructor(private experienceService:ExperienceService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
      company:['',[Validators.required]],
      position:['',[Validators.required]],
      description:['',[Validators.maxLength(1000)]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      })
  }

  ngOnInit():void{
    //Añado el id a la variable id
    this.id = this.route.snapshot.params['id'];
  }

  //Propiedad para obtener company(formControlName)
  get Company(){
  return this.form.get('company');
  }

  //Propieda para obtener position(formControlName)
  get Position(){
  return this.form.get('position');
  }

  //Propiedad para obtener description(formControlName)
  get Description(){
    return this.form.get('description');
  }

  //Propiedad para obtener start(formControlName)
  get Start(){
  return this.form.get('start');
  }

  //Propiedad para obtener end(formControlName)
  get End(){
  return this.form.get('end');
  }

  irAExperiencia(){
  this.router.navigate(['experience']);
  //swal('About actualizado',`El about de ${this.persona.nombreCompleto} ha sido actualizado con exito`,`success`);
  }

  onSubmit(event:Event){
  //Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault;
  if(this.form.valid){
  this.experienceService.updateExperiencia(this.id,this.form.value).subscribe(dato => {
  this.irAExperiencia();
  console.log(dato);
  },error => console.log(error));
  }else{
  //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
  this.form.markAllAsTouched();
  }
  }
}
