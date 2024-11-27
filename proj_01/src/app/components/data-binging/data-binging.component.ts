import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binging',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binging.component.html',
  styleUrl: './data-binging.component.css'
})
export class DataBingingComponent {

  // string, number, boolean, date
  courseName: string = "Angular 18";
  stateName: string = "Gujarat";
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "bg-primary";

  inputType = "checkbox";

  firstName = signal("Tejas");

  constructor(){
    // this.courseName = ""
  }

  showAlert(message: string){
    alert(message)
  }
  changeCourseName(){
    this.courseName = "React Js";
    this.firstName.set("Arjun");
  }
}
