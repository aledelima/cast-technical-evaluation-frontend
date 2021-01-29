import { CourseService } from './../course.service';
import { CourseDto } from './../dto/course-dto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  course: CourseDto = {
    id: '',
    description: '',
    begin: '',
    end: '',
    studentsQtd: '',
    categoryId: '',
    categoryDescription: ''
  };

  constructor(private courseService: CourseService, 
    private router: Router,
    private route: ActivatedRoute) {
      this.courseService.findById(this.route.snapshot.paramMap.get('id')).subscribe(courseDto => {
        this.course=courseDto;
      });  
  }

  ngOnInit(): void {
    
  }

  delete() {
    this.courseService.delete(this.course).subscribe(() => {
      this.courseService.showMessage("Curso excluido com sucesso!");
      this.router.navigate(['/courses'])
    })
  }

}
