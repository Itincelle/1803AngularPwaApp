import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public getNewsViaRest$(numNews : number) : Observable<object> {
    return of({ id : numNews,                             // le of  sert a envoyé des choses simulé..la on va renvoyé du observabvle, on a pas le temps de programer classe news donc on simule
                title : "titre ......",
                text :"...kjdfsjkkjfds pour voir la differnce avec la 1ere version."});

  }
}
