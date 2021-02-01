import { CategoryDto } from './../category/dto/category-dto';
import { CategoryService } from './../category/category.service';
import { CourseDto } from './dto/course-dto.model';

import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar/';
import { CourseNewDto } from './dto/course-new-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = "http://localhost:8080/api/courses";

  categories: CategoryDto[];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private categoryService: CategoryService) {
      this.categoryService.findAll().subscribe(categoryDtos => {
        this.categories=categoryDtos;
      });
    }

  findAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.baseUrl).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  findById(id: string): Observable<CourseDto> {
    return this.http.get<CourseDto>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  search(str: string): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(`${this.baseUrl}/search/${str}`).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  create(courseNewDto: CourseNewDto): Observable<CourseDto> {
    return this.http.post<CourseDto>(this.baseUrl, courseNewDto).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  update(courseNewDto: CourseNewDto): Observable<CourseDto> {
    return this.http.put<CourseDto>(`${this.baseUrl}/${courseNewDto.id}`, courseNewDto).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  delete(course: CourseDto): Observable<CourseDto> {
    return this.http.delete<CourseDto>(`${this.baseUrl}/${course.id}`).pipe(
      map((obj) => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Erro ao salvar! Verifique os campos e datas preenchidas ou se o servidor está inddisponivel.', true);
    return EMPTY;
  }

}
