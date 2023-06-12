import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RedService } from 'src/app/service/red.service';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent {

  form:FormGroup;
  id?:number;

  constructor(private redService:RedService, 
              private formBuilder:FormBuilder,
              private router:Router,
              private route:ActivatedRoute){

      this.form=this.formBuilder.group({
      name:['',[Validators.required]],
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

  //Propiedad para obtener url(formControlName)
  get Url(){
  return this.form.get('url');
  }

  irARed(){
  this.router.navigate(['']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.redService.updateRed(this.id,this.form.value).subscribe(dato => {
        window.location.reload();
        this.irARed();
        console.log(dato);
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
