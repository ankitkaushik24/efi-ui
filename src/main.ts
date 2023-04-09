import {importProvidersFrom} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {AppRoutingModule} from "./app/app-routing.module";
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule,} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        importProvidersFrom(
            BrowserModule,
            BrowserAnimationsModule,
            AppRoutingModule
        ),
    ],
}).catch((err) => console.error(err));
