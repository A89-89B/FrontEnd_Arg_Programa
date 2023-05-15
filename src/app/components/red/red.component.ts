import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Red } from 'src/app/models/Red';
import { RedService } from 'src/app/service/red.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent {

  redes:Red[]=[];

  isLogged = false;

  constructor(private redService:RedService, private tokenService:TokenService, private router:Router){}

    //Para inicializarlo
    ngOnInit():void{
      this.getRed();
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
    
  
    public getRed(){
      this.redService.getRed().subscribe(dato=>{
        this.redes=dato;
      })
    }
  
    saveRed(){
      this.router.navigate(['save-red']);      
    }
  
    //Para navegar a otras rutas
    irAOtraRuta(){
      this.router.navigate([''])
    }
  
    onSubmit(){
      this.saveRed();
    }
  
    //Tomo su id
    updateRed(red:Red){
      this.router.navigate(['edit-red',red.id]);
    }
  
    deleteRed(red:Red){
      if(confirm("¿Esta seguro de eliminarlo?")){
        this.redService.deleteRed(red).subscribe(()=>(
          this.redes = this.redes.filter( (t) => t.id !== red.id)
        ));
        window.location.reload();
      }
    }
}
