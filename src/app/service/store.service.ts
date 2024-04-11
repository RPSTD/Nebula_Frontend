import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {resourcePath} from "../dto/resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStores(){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_ALL_STORE
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }

  getStoreById(storeId: string){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_STORE_ID + storeId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }
}
