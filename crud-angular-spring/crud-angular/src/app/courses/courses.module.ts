import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';


@NgModule({
  declarations: [
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CoursesModule { }
