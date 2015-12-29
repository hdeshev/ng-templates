import {Component} from 'angular2/core';

var __id = 0;

@Component({
    selector: 'child',
    template: `
    <div style="background-color: red; margin: 5px;" (click)="clicks = clicks + 1">
    CHILD {{id}} Clicks: {{clicks}}
    </div>
    `
})
export class ChildComponent {
    public type: string = "ChildComponent";
    public id: number = ++__id;
    public clicks: number = 0;
}
