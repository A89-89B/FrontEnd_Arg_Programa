import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { AboutService } from 'src/app/service/about.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //public loading:boolean;
  //public previsualizacion:String;
  public files:any =[];
  personas:Persona[]=[];
  persona:Persona={
    nombreCompleto:'',
    about:'',
    titulo:'',
    //userImg:'',
    //backImg:'',
     email:''
  };
  img:any;

  isLogged = false;

  constructor(private aboutService:AboutService, private router:Router, private tokenService:TokenService, private sanitizer: DomSanitizer){}

  //Para inicializarlo
  ngOnInit():void{
    this.getPersonas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login():void {
    this.router.navigate(['login']);
  }

  public getPersonas(){
    this.aboutService.getPersonas().subscribe(dato=>{
      this.personas=dato;
    })
  }

  savePersona(){
    
    this.aboutService.savePersona(this.persona).subscribe(dato=>{
      console.log(dato);
      this.personas.push(dato);
      this.irAOtraRuta();
    },error=>console.log(error));
  }

  //Para navegar a otras rutas
  irAOtraRuta(){
    this.router.navigate([''])
  }

  onSubmit(){
    this.savePersona();
  }

  //Tomo su id
  updatePersona(persona:Persona){
    
      this.router.navigate(['edit-about',persona.id]);
      //this.aboutService.updatePersona(persona).subscribe(dato=>{
      //  this.personas.push(dato);
      //},error=>console.log(error));
      //window.location.reload;
      //confirm("¿Querés modificar la información?")
    
  }

  deletePersona(persona:Persona){
    if(confirm("¿Esta seguro de eliminarlo?")){
      this.aboutService.deletePersona(persona).subscribe(dato=>{
        console.log(dato);
        this.getPersonas();

      });
    }
  }

  //capturefile(event:any){
  //  const capturedFile = event.target.files[0];
  //  this.extractBase64(capturedFile).then(image:any =>{  //por ser promesa se puede hacer esto(then)
  //    this.previsualizacion = image.base;
  //    console.log(image)
  //  })
  //  this.files.push(capturedFile);
  //  //console.log(event.target.files);
  //}
//
  //extractBase64 = async ($event:any) => new Promise((resolve,reject) => {
  //  try {
  //    const unsafeImg = window.URL.createObjectURL($event);
  //    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //    const reader = new FileReader();
  //    reader.readAsDataURL($event);
  //    reader.onload = () => {
  //      resolve({
  //        base: reader.result,
  //        
  //      });
  //      
  //    };
  //    reader.onerror = error => {
  //      resolve({
  //        base: null
  //      });
  //    };
  //  } catch (e) {
  //    return null;
  //  }
  //})
//
  //subirArchivo(): any {
  //  try {
  //    this.loading = true;
  //    const formularioDeDatos = new FormData();
  //    this.files.forEach(archivo => {
  //      console.log(archivo);
  //      formularioDeDatos.append('files', archivo)
  //    })
  //    this.rest.post('http://localhost:3001/upload', formularioDeDatos).subscribe(res =>{
  //      this.loading = false;
  //      console.log('Respuesta del servidor', res);
  //    })
  //  } catch (e) {
  //    this.loading = false;
  //    console.log('ERROR', e);
  //  }
  //}

  showFoto(input:any) {
    let file = input.files[0];//tomamos el nombre del archivo y se lo asignamos a la variable
    //alert(`File name: ${file.name}`);
    //alert(`Last modifield: ${file.lastModifield}`);
    let url;
    let reader = new FileReader();//FileReader es un tipo de objeto que lo vere en los mudulos dicen
    reader.readAsDataURL(file);
    reader.onload = function() { //aca se carga el contenido del documento
      console.log(reader.result);
      //this.persona.userImg =reader.result;
    }
    reader.onerror = function() {
      console.log(reader.error);
    };
    //this.img=reader.result
    //return this.img=reader.result;
    //return this.img.getElementById("foto").src=reader.result;
    
  }
  
}
