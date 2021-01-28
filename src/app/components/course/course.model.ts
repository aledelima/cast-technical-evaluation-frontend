import { Category } from './../category/category.model';

export interface Course {
    id?: number
    description: string
    begin: Date
    end: Date
    studentsQtd?: number
    category: Category
}