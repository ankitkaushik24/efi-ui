import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {getNavItems} from "../nav-items";
import {DockModule} from "primeng/dock";

@Component({
    selector: 'efi-main',
    standalone: true,
    imports: [RouterOutlet, ButtonModule, InputTextModule, CommonModule, RouterLink, RouterLinkActive, DockModule],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
    navItems = getNavItems();
}
