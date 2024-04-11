import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComponentsService} from "../../../service/components.service";
import {StoreService} from "../../../service/store.service";
import {CategoryService} from "../../../service/category.service";
import {CustomerReviewService} from "../../../service/customer-review.service";

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit{

  componentDetails:{
    componentName: string,
    componentImage: string,
    componentConnectImage: string,
    componentDescription:string,
    storeURL: string[],
    componentFeatures: string[],
    componentConnect: string[],
    componentCategory: string[],
    componentStat: string[],
    componentTheory: string[]
  } = {
    componentName:'',
    componentImage: '',
    componentConnectImage:'',
    componentDescription: '',
    storeURL: [],
    componentFeatures: [],
    componentConnect: [],
    componentCategory: [],
    componentStat: [],
    componentTheory: []
  }

  isDetails: boolean = false;

  constructor( private route: ActivatedRoute,
               private componentService: ComponentsService,
               private storeService: StoreService,
               private categoryService: CategoryService,
               private reviewService: CustomerReviewService
               ) {
  }

  ngOnInit() {
    if(this.route.snapshot.params.hasOwnProperty('componentId')){
      this.getComponentById(this.route.snapshot.params['componentId'])
    }
    console.log(this.componentDetails)
  }

  getComponentById(componentId: string){
    this.componentService.getComponentById(componentId).subscribe(
      (response: any) =>{
        this.componentDetails.componentName = response['data']['component']['name'];
        this.componentDetails.componentDescription = response['data']['component']['description'];
        this.componentDetails.componentImage = response['data']['component']['imageUrl'];
        this.componentDetails.componentConnectImage = response['data']['component']['imageUrl2'];
        this.componentDetails.componentFeatures =  response['data']['component']['features'];
        this.componentDetails.componentConnect = response['data']['component']['connect'];
        this.componentDetails.componentTheory = response['data']['component']['theory'];
        this.componentDetails.componentStat = response['data']['component']['statistics'];
      },
      error => {
        console.log(error)
      }
    );
  }

  getAllComponents(){

  }

  changeTab(item:number){
    this.isDetails = item === 1;
  }
}
