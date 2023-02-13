import {Injectable} from '@angular/core';
import {Task} from "../model/Task"

import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TASKS} from "../mock-task";


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    addTaskUrl: string;
    getTaskUrl: string;
    updateTaskUrl: string;

    private baseUrl = 'http://localhost:8080/api/task';


    constructor(private httpClient: HttpClient) {

    }

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(`${this.baseUrl}/getAllTasks`);
        //the issue I was having was I needed to add /getAllTasks at the end of the get
    }
}
