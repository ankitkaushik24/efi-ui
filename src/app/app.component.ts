import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {DialogModule} from "primeng/dialog";

@Component({
    selector: "efi-root",
    template: `
        <router-outlet></router-outlet>
        <p-dialog
                header="Hey pretty Human!"
                [(visible)]="visibleDisclaimer"
                [modal]="true"
                position="top"
                [style]="{ width: '300px' }"
                [draggable]="false"
                [resizable]="false"
        >
            <p class="m-0 text-lg">
                My Greetings, I'm sure you are looking on the brighter side of things.
                In this application I used
                <strong>Angular 15.2, Tailwind, PrimeNG</strong>.<br/>
                You could find me at
                <a href="https://www.linkedin.com/in/ankit-kaushik24/"
                >linkedIn/ankit-kaushik24</a
                >
                and tech blogs at
                <a href="https://ankit-kaushik.medium.com/"
                >https://ankit-kaushik.medium.com/</a
                >
            </p>
        </p-dialog>
    `,
    styles: [],
    standalone: true,
    imports: [RouterOutlet, DialogModule],
})
export class AppComponent {
    visibleDisclaimer = true;
}
