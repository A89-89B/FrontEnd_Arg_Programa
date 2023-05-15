import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-save-education',
  templateUrl: './save-education.component.html',
  styleUrls: ['./save-education.component.css']
})
export class SaveEducationComponent {
  form:FormGroup;

  constructor(private educationService:EducationService, 
              private formBuilder:FormBuilder,
              private router:Router){

      this.form=this.formBuilder.group({
        institution:['',[Validators.required]],
        nameCurso:['',[Validators.required]],
        start:['',[Validators.required]],
        end:['',[Validators.required]],
      })
    }

  ngOnInit():void{

  }

  //Propiedad para obtener institution(formControlName)
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
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.educationService.saveEducacion(this.form.value).subscribe(dato => {
        this.irAEducacion()
        console.log(dato)
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }

}
