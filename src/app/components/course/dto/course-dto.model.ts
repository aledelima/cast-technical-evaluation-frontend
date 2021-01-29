export interface CourseDto {
    id: string;
    description: string;
    begin: string;
    end: string;
    studentsQtd?: string
    categoryId: string;
    categoryDescription: string;
}