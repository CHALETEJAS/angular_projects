import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBingingComponent } from './components/data-binging/data-binging.component';
import { StructuralDirComponent } from './directive/structural-dir/structural-dir.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { PostComponent } from "./post/post.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBingingComponent, StructuralDirComponent, NavbarComponent, PostComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj_01';
  parentMessage:string = "Message coming from parent component";

  bool:boolean =  true;
  message:string = "Hello World";
  myimgUrl:string = 'https://picsum.photos/seed/picsum/200/300';
  userName!:string;
  textValue:string = "one way data binding";
  
  buttonClick(){
    console.log("got clicked");
  }

  onKeyUp(){
    // console.log($event.target.value);
    console.log(this.textValue);
  }


}
