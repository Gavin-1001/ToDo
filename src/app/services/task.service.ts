import {Injectable} from '@angular/core';
import {Task} from "../model/Task"

import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
    header: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}


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

    deleteTask(task: Task){
        return this.httpClient.delete<Task>(`${this.baseUrl}/deleteTask/${task.id}`);
    }

    updateTaskReminder(task:Task):Observable<Task>{
        const url = `${this.baseUrl}/updateTask/${task.id}`;
        return this.httpClient.put<Task>(`${this.baseUrl}/updateTask/${task.id}`, task);
    }

    addTask(task:Task):Observable<Task>{
        return this.httpClient.post<Task>(`${this.baseUrl}/createTask`, task);
    }

}
