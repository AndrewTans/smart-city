import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { routing } from './projects.routes';
import { RatingProjectComponent } from './project-rating/project-rating.component';
import { CommentsProjectComponent } from './project-comments/project-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
import { ProjectMainComponent } from './project-main/main-projects.component';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgxPaginationModule,
    DirectivesModule
  ],
  declarations: [RatingProjectComponent,
    CommentsProjectComponent,
    ProjectsListComponent,
    ProjectComponent,
    ProjectEditComponent,
    ProjectMainComponent
  ]
})
export class ProjectsModule { }