import {Component, OnInit} from '@angular/core';
import {ComponentsService} from "../../service/components.service";
import {CustomerReviewService} from "../../service/customer-review.service";
import {Customer_review_model} from "../../dto/customer_review_model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  componentList: any[]=[];
  reviewList: any[]=[];
  reviewById = {} as Customer_review_model
  constructor(
    private componentService:ComponentsService,
    private customerReviewService:CustomerReviewService
  ) {}

  ngOnInit() {
    this.getAllComponents();
    this.getAllCustomerReview();

    setTimeout(() => {
      this.getRandomProductReview();
    }, 500);
  }

  getAllComponents(){
    this.componentService.getAllComponents().subscribe(
      (response:any) =>{
        this.componentList = response['data']['components']
        console.log(this.componentList)
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  getAllCustomerReview(){
    this.customerReviewService.getAllCustomerReview().subscribe(
      (response:any) => {
        this.reviewList = response['data']['customer_reviews']
        console.log(this.reviewList)
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  getRandomProductReview() {
    const randomProductId = Math.floor(Math.random() * this.reviewList.length);
    console.log("R000" + Number(randomProductId+1));

    this.getReviewByID(("R000" + Number(randomProductId+1)));
  }

  getReviewByID(reviewId:string){
    this.customerReviewService.getCustomerReviewById(reviewId).subscribe(
      (response:any) => {
        this.reviewById = response['data']['customer_review']
        console.log(this.reviewById)
      },
      (error) =>{
        console.log(error);
      }
    );

  }

}
