import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories;
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {}

  deletecategory(id){
    this.categoriesService.deleteCategory(id).subscribe(()=>{
      this.categories =  this.categories.filter(t=>t.id != id)
      this.categoriesService.getCategories().subscribe((data:any) => {
        this.categories = data;
      });
     })


  }
}
