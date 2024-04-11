import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {resourcePath} from "../dto/resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor(
    private http:HttpClient
  ) { }

  getAllComponents(){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_ALL_COMPONENTS
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }

  getComponentById(componentId: string){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_COMPONENT_ID+ componentId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }
}
