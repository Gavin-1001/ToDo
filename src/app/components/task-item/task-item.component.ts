import { Component, Input } from '@angular/core';
import {Task} from "../../model/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

    @Input() task: Task;


}
