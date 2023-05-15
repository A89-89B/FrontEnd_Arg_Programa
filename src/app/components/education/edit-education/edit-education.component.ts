import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {

  form:FormGroup;
  id?:number;

  constructor(private educationService:EducationService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
      institution:['',[Validators.required]],
      nameCurso:['',[Validators.required]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      })
  }

  ngOnInit():void{
    //Añado el id a la variable id
    this.id = this.route.snapshot.params['id'];
  }

  //Propiedad para obtener intitution(formControlName)
  get Institution(){
  return this.form.get('institution');
  }

  //Propieda para obtener nameCurso(formControlName)
  get NameCurso(){
  return this.form.get('nameCurso');
  }

  //Propiedad para obtener start(formControlName)
  get Start(){
  return this.form.get('start');
  }

  //Propiedad para obtener end(formControlName)
  get End(){
  return this.form.get('end');
  }

  irAEducacion(){
  this.router.navigate(['education']);
  //swal('About actualizado',`El about de ${this.persona.nombreCompleto} ha sido actualizado con exito`,`success`);
  }

  onSubmit(event:Event){
  //Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault;
  if(this.form.valid){
  this.educationService.updateEducacion(this.id,this.form.value).subscribe(dato => {
  this.irAEducacion();
  console.log(dato);
  },error => console.log(error));
  }else{
  //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
  this.form.markAllAsTouched();
  }
  }
}
