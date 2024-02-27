import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss'],
    standalone: true,
    imports: [RouterModule, CommonModule],
})
export class MainHeaderComponent {
    public showSlideMenu: boolean = false;

    toggleMenu() {
        this.showSlideMenu = !this.showSlideMenu;
    }
}
