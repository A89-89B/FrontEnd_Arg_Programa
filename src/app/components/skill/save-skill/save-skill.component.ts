import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-save-skill',
  templateUrl: './save-skill.component.html',
  styleUrls: ['./save-skill.component.css']
})
export class SaveSkillComponent {

  form:FormGroup;

  constructor(private skillService:SkillService, 
              private formBuilder:FormBuilder,
              private router:Router){

      this.form=this.formBuilder.group({
        type:['',[Validators.required]],
        name:['',[Validators.required]],
        progress:['',[Validators.required,Validators.max(100)]],
      })
    }

  ngOnInit():void{

  }

  //Propiedad para obtener type(formControlName)
  get Type(){
    return this.form.get('type');
  }

  //Propiedad para obtener name(formControlName)
  get Name(){
    return this.form.get('name');
  }

  //Propiedad para obtener progress(formControlName)
  get Progress(){
    return this.form.get('progress');
  }

  irASkills(){
    this.router.navigate(['skill']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.skillService.saveSkill(this.form.value).subscribe(dato => {
        this.irASkills()
        console.log(dato)
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
