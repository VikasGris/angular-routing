import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { PreloadingStrategy } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class CustomePreloader implements PreloadingStrategy{
  preload(route:Route , load:() => Observable<any>):Observable<any>{
    if(route.data && route.data.preload){
      return load();
    }
    else{
      return of(null);
    }
  }
}