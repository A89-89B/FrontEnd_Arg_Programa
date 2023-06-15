import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skills:Skill[]=[];
  soft:Skill[]=[];
  hard:Skill[]=[];

  isLogged = false;

  constructor(private skillService:SkillService, private tokenService:TokenService, private router:Router){}

    //Para inicializarlo
    ngOnInit():void{
      this.getSkill();
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
    
  
    public getSkill(){
      this.skillService.getSkill().subscribe(dato=>{
        this.skills=dato;
        for(let skill of dato){
          if(skill.type=="hard"){
            this.hard.push(skill);
          }else{
            this.soft.push(skill);
          }
        }
      })
    }
  
    saveSkill(){
      this.router.navigate(['save-skill']);      
    }
  
    //Para navegar a otras rutas
    irAOtraRuta(){
      this.router.navigate([''])
    }
  
    onSubmit(){
      this.saveSkill();
    }
  
    //Tomo su id
    updateSkill(skill:Skill){
      this.router.navigate(['edit-skill',skill.id]);
    }
  
    deleteSkill(skill:Skill){
      if(confirm("¿Esta seguro de eliminarlo?")){
        this.skillService.deleteSkill(skill).subscribe(()=>(
          this.skills = this.skills.filter( (t) => t.id !== skill.id)
        ));
        window.location.reload();
      }
    }

    alert(){
      alert("funciona");
    }
}
