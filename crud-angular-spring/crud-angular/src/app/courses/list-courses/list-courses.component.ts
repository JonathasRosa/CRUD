import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  
  courses = []

  constructor(){};
  ngOnInit(): void {

  };
}
