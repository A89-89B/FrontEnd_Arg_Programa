import { Component } from '@angular/core';

@Component({
  selector: 'app-img-about',
  templateUrl: './img-about.component.html',
  styleUrls: ['./img-about.component.css']
})
export class ImgAboutComponent {

  constructor(){}
/*  
  ngOnInit(){
    for(let imagen of img){
      this.extractBase64(imagen.img);
    }
  }

  capturefile(event:any){
    const capturedFile = event.target.files[0];
    this.extractBase64(capturedFile);
    this.previsualizacion = image.base;
    console.log(image);
    
    this.files.push(capturedFile);
    //console.log(event.target.files);
  }

  extractBase64(input:any) {
    try {
      let url;
      let file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){
        console.log(reader.result);
        url = reader.result;
      }
      reader.onerror = function(){ 
        console.log(reader.error);
      }
      return url;
      
    } catch (e) {
      return null;
    }
  }

  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.files.forEach(archivo => {
        console.log(archivo);
        formularioDeDatos.append('files', archivo)
      })
      this.rest.post('http://localhost:3001/upload', formularioDeDatos).subscribe(res =>{
        this.loading = false;
        console.log('Respuesta del servidor', res);
      })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }*/
}
