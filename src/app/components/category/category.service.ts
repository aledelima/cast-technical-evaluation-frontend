import { Observable } from 'rxjs';
import { CategoryDto } from './dto/category-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localHost:8080/api/categories';

  constructor(private http: HttpClient) { }


  findAll(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.baseUrl);
  }

}
