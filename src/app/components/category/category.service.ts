import { Observable } from 'rxjs';
import { CategoryDto } from './dto/category-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localHost:8080/categories';

  constructor(private http: HttpClient) { }

  dtosToCategories(categoryDtos: CategoryDto[]): Category[] {
    var categories: Array<Category>;
    categoryDtos.forEach(categoryDto => console.log(categoryDto));
    return categories;
  }

  dtoToCategory(categoryDto: CategoryDto): Category {
    var category: Category;
    category.id = Number(categoryDto.id);
    category.description = categoryDto.description;
    return category;
  }

  findAll(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.baseUrl);
  }

}
