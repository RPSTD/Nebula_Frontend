import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {resourcePath} from "../dto/resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient
  ) { }

  getAllCategories(){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_ALL_CATEGORY
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }

  getCategoryById(categoryId: string){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_COMPONENT_ID+ categoryId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }
}
