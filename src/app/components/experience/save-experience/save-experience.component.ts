import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-save-experience',
  templateUrl: './save-experience.component.html',
  styleUrls: ['./save-experience.component.css']
})
export class SaveExperienceComponent {

  form:FormGroup;

  constructor(private experienceService:ExperienceService, 
              private formBuilder:FormBuilder,
              private router:Router){

      this.form=this.formBuilder.group({
        company:['',[Validators.required]],
        position:['',[Validators.required]],
        description:['',[Validators.maxLength(1000)]],
        start:['',[Validators.required]],
        end:['',[Validators.required]],
      })
    }

  ngOnInit():void{

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
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.experienceService.saveExperiencia(this.form.value).subscribe(dato => {
        this.irAExperiencia()
        console.log(dato)
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
