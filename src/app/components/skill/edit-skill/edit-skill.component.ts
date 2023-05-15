import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {

  form:FormGroup;
  id?:number;

  constructor(private skillService:SkillService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
      type:['',[Validators.required]],
      name:['',[Validators.required]],
      progress:['',[Validators.required, Validators.max(100)]],
      })
  }

  ngOnInit():void{
    //Añado el id a la variable id
    this.id = this.route.snapshot.params['id'];
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

  irASkill(){
  this.router.navigate(['skill']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.skillService.updateSkill(this.id,this.form.value).subscribe(dato => {
        this.irASkill();
        console.log(dato);
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
