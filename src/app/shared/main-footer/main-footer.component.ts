import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-footer',
    templateUrl: './main-footer.component.html',
    styleUrls: ['./main-footer.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class MainFooterComponent implements OnInit {
    private newDate = new Date();
    public currentYear = this.newDate.getFullYear();
    constructor() {}
    ngOnInit(): void {}
}
