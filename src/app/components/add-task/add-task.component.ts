import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../model/Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

    @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>()

    text:string;
    date:string;
    reminder:boolean = false;
    showAddTask: boolean;
    subscription: Subscription;

    constructor(private uiService: UiService) {
        this.subscription = this.uiService.onToggle().subscribe((value)=>
            (this.showAddTask = value));
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if(!this.text){
            alert("please add a task");
            return;
        }

        const newTask = {
            text: this.text,
            date: this.date,
            reminder: this.reminder,
        }

        //@todo - emit event
        this.onAddTask.emit(newTask);

        this.text = "";
        this.date = "";
        this.reminder = false;
    }
}
