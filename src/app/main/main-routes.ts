import {Routes} from "@angular/router";
import MainComponent from "./main.component";

export const mainRoutes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            {
                path: "purchase-orders",
                loadComponent: () =>
                    import("../purchase-orders/purchase-orders.component"),
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "purchase-orders",
            },
        ],
    },
];
