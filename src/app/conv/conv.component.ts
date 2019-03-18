import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  public montantEuro : number;
  public montantFranc : number;

  public onConversion(event:any){
    this.montantFranc =6.5597 * Number(this.montantEuro);  // obligé de rajouter number ici sinon il va pas savoir que c'est un number...psk le typscript va etre converte en js et le number va disparaitre donc ça peut nous poser de sprb....// remarque dans angular pas besoin d aller chercher dans la zone la valeur..c'est le html qui va le faire
  }

  constructor() { }

  ngOnInit() {
  }

}
