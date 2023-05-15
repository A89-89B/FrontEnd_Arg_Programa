import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;

  isLogged = false;
  isLoginFail=false;
  loginUser!:Login;
  username!:string;
  password!:string;
  role:string[]=[];
  errorMsj!:string;

  constructor(private tokenService:TokenService, 
              private formBuilder:FormBuilder, 
              private authService:AuthService, 
              private router:Router){
    this.form=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required ]],//, Validators.minLength(8)
    })
  }

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
    }
  }

  //Propiedad para obtener username(formControlName)
  get Username(){
    return this.form.get('username');
  }

  //Propiedad para obtener password(formControlName)
  get Password(){
    return this.form.get('password');
  }

  onLogin(event:Event):void{
    event.preventDefault;
    //this.loginUser=new Login(this.username,this.password);
    if(this.form.valid){//this.loginUser
      this.authService.login(this.form.value).subscribe(data=>{
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        window.location.reload();
        this.router.navigate(['']);
      }, err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj);
        this.form.markAllAsTouched();
      })
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    } 
    
  }
}
