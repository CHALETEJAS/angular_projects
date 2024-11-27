import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title = "myPost";
  message: string = "My message";

  @Input() fromParent!: string;

  msgPostli = "My post msg as a parent";
  // childMessage:string = "from child component";

  outputChildMessage: string = "Message from child component via output ";
  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage(){
    console.log('clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }

  outPutMyname:string = "Jane from child component via o/p";
  @Output() event1 = new EventEmitter<string>();

  sendMessage1(){
    this.event1.emit(this.outPutMyname);
  }

}
