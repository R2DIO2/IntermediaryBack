import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeacherRoutingModule } from "./teacher-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherFormComponent } from "./teacher-form/teacher-form.component";

//add SharedModule em Imports e TeacherForm e TeacherList em declarations
@NgModule({
  declarations: [TeacherFormComponent, TeacherListComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
