import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public numNews : number;
  public news : object;
  public onGetNews(event : any) {
    this.newsService.getNewsViaRest$(this.numNews)
    .subscribe((news)=>{this.news=news;},
                 (err)=>{console.log(err);});               //la on a appellé le service

  /*  this.news = {                    //ces données la juste pour simuler avant d utiliser un service web node js ou java qui nous fourni des données ..on la utilisé avant le coder le serviec
      id : this.numNews ,
      title : "news.....",
      text : "texte news"
    };
  }

  constructor() { } */

}

 constructor(private newsService : NewsService) { }          //la on a injecté le service  donc modifie le constructor

  ngOnInit() {
  }

}
