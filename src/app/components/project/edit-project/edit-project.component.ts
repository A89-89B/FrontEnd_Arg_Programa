import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

  form:FormGroup;
  id?:number;

  constructor(private projectService:ProjectService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
      name:['',[Validators.required]],
      //img:['',[Validators.required]],
      description:['',[Validators.required]],
      url:['',[Validators.required]],
      })
  }

  ngOnInit():void{
    //Añado el id a la variable id
    this.id = this.route.snapshot.params['id'];
  }

  //Propiedad para obtener name(formControlName)
  get Name(){
  return this.form.get('name');
  }

  /*Propieda para obtener img(formControlName)
  get Img(){
  return this.form.get('img');
  }*/

  //Propiedad para obtener description(formControlName)
  get Description(){
  return this.form.get('description');
  }

  //Propiedad para obtener url(formControlName)
  get Url(){
  return this.form.get('url');
  }

  irAProyecto(){
  this.router.navigate(['project']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.projectService.updateProyecto(this.id,this.form.value).subscribe(dato => {
        this.irAProyecto();
        console.log(dato);
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
