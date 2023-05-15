import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RedService } from 'src/app/service/red.service';

@Component({
  selector: 'app-save-red',
  templateUrl: './save-red.component.html',
  styleUrls: ['./save-red.component.css']
})
export class SaveRedComponent {

  form:FormGroup;

  constructor(private redService:RedService, 
              private formBuilder:FormBuilder,
              private router:Router){

      this.form=this.formBuilder.group({
        name:['',[Validators.required]],//Validators.pattern("[a-z0-9!#$%&/()@¿?¡_-]+")
        url:['',[Validators.required]],
      })
    }

  ngOnInit():void{

  }

  //Propiedad para obtener name(formControlName)
  get Name(){
    return this.form.get('name');
  }

  //Propiedad para obtener url(formControlName)
  get Url(){
    return this.form.get('url');
  }

  irARedes(){
    this.router.navigate(['']);
  }

  onSubmit(event:Event){
    //Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if(this.form.valid){
      this.redService.saveRed(this.form.value).subscribe(dato => {
        window.location.reload();
        this.irARedes()
        console.log(dato)
      },error => console.log(error));
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
