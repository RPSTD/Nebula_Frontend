import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {resourcePath} from "../dto/resource-path";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerReviewService {

  constructor(
    private http:HttpClient
  ) { }

  getAllCustomerReview(){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_ALL_REVIEW
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }
  getCustomerReviewById(customerReviewId: string){
    return this.http.get(
      resourcePath.BACK_END + resourcePath.GET_REVIEW_ID + customerReviewId
    ).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        throw new Error();
      })
    )
  }}
