import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {TaskService} from "../../services/task.service";


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
        this.taskService.getTasks();
    }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) =>(
            this.tasks = tasks));
    }

    deleteTask(task: Task){
        this.taskService.deleteTask(task).subscribe(()=> (
            this.tasks = this.tasks.filter((t) => t.id !== task.id)
        ));
    }

}
