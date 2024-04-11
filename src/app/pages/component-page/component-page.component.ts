import {Component, OnInit} from '@angular/core';
import {ComponentsService} from "../../service/components.service";
import {Component_model} from "../../dto/component_model";
import {StoreService} from "../../service/store.service";
import {CategoryService} from "../../service/category.service";
import {Store_model} from "../../dto/store_model";
import {Category_model} from "../../dto/category_model";

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.css']
})
export class ComponentPageComponent implements OnInit{

  componentList: Component_model[] =[] as Component_model[];
  originalComponentList: Component_model[] = [];
  storeList: Store_model[]=[] as Store_model[];
  categoryList: Category_model[] =[] as Category_model[];

  selectedCategories: string[] = [];
  selectedStores: string[] = [];

  constructor(
    private componentService:ComponentsService,
    private storeService:StoreService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.getAllComponents();
    this.getAllStores();
    this.getAllCategories();
  }

  getAllComponents(){
    this.componentService.getAllComponents().subscribe(
      (response:any) =>{
        this.componentList = response['data']['components'];
        this.originalComponentList = [...this.componentList];
        console.log(this.componentList)
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  getAllStores(){
    this.storeService.getAllStores().subscribe(
      (response:any) =>{
        this.storeList = response['data']['stores']
        console.log(this.storeList)
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (response:any) =>{
        this.categoryList = response['data']['categories'];
        console.log(this.categoryList)
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  toggleCategorySelection(categoryName: string) {
    if (this.isSelectedCategory(categoryName)) {
      this.selectedCategories = this.selectedCategories.filter(
        (category) => category !== categoryName
      );
    } else {
      this.selectedCategories.push(categoryName);
    }
    this.filterComponents();
  }

  toggleStoreSelection(storeName: string) {
    if (this.isSelectedStore(storeName)) {
      this.selectedStores = this.selectedStores.filter(
        (store) => store !== storeName
      );
    } else {
      this.selectedStores.push(storeName);
    }
    this.filterComponents();
  }


  isSelectedCategory(categoryName: string): boolean {
    return this.selectedCategories.includes(categoryName);
  }

  isSelectedStore(storeName: string): boolean {
    return this.selectedStores.includes(storeName);
  }

  filterComponents() {
    if (this.selectedCategories.length === 0 && this.selectedStores.length === 0) {
      // If nothing is selected, show all components
      this.componentList = [...this.originalComponentList];
    } else {
      // Filter components based on selected categories and stores
      this.componentList = this.originalComponentList.filter((component) => {
        const matchesCategory = this.selectedCategories.length === 0 || this.intersectArrays(this.selectedCategories, component.category);
        const matchesStore = this.selectedStores.length === 0 || this.intersectArrays(this.selectedStores, component.stores);
        return matchesCategory && matchesStore;
      });
    }
  }
  intersectArrays(array1: string[], array2: string[]): boolean {
    return array1.some((value) => array2.includes(value));
  }

}
