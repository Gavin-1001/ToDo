import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() text: string; //allows data to be passed between components
    @Input() color: string;

    //is an event emitter to output the event
    @Output() btnClick = new EventEmitter();


    constructor() {
    }

    ngOnInit(): void {
    }


    onClick() {
        this.btnClick.emit(); //be default it won't do anything, it is called in the header component
    }
}
