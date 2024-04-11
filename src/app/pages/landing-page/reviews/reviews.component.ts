import {Component, Input, OnInit} from '@angular/core';
import {Customer_review_model} from "../../../dto/customer_review_model";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() customerReview: Customer_review_model = {} as Customer_review_model;

  customerReviewDetails = {
    productComment:'',
    productName:'',
    productRating:0
  }
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.customerReviewDetails.productComment = this.customerReview.review;
        this.customerReviewDetails.productName = this.customerReview.customerName;
        this.customerReviewDetails.productRating = this.customerReview.rating;
      }
      , 1000);


    console.log(this.customerReviewDetails)
  }

}
