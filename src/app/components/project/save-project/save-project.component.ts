import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent {

  form:FormGroup;

  constructor(private projectService:ProjectService, 
              private formBuilder:FormBuilder,
              private router:Router){

      this.form=this.formBuilder.group({
        name:['',[Validators.required]],
        //img:['',[Validators.required]],
        description:['',[Validators.required]],
        url:['',[Validators.required]],
      })
    }

  ngOnInit():void{

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

  irAProyectos(){
    this.router.navigate(['project']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.projectService.saveProyecto(this.form.value).subscribe(dato => {
        this.irAProyectos()
        console.log(dato)
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
