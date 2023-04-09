import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TagModule} from "primeng/tag";
import {getOrderTags} from "./order-tags";
import {ButtonModule} from "primeng/button";
import {getStatsConfig} from "./stats-config";
import {PurchaseOrdersDataService} from "./purchase-orders-data.service";
import {PurchaseOrdersDataTableComponent} from "./purchase-orders-data-table.component";
import {FolderTileComponent} from "../shared/components/folder-tile.component";
import {CardModule} from "primeng/card";

@Component({
    selector: "efi-purchase-orders",
    standalone: true,
    templateUrl: "purchase-orders.component.html",
    styleUrls: ["purchase-orders.component.scss"],
    providers: [PurchaseOrdersDataService],
    imports: [
        CommonModule,
        TagModule,
        ButtonModule,
        PurchaseOrdersDataTableComponent,
        FolderTileComponent,
        CardModule,
    ],
})
export default class PurchaseOrdersComponent {
    orderTags = getOrderTags();
    statCards = getStatsConfig();

    purchaseOrdersData$ = inject(PurchaseOrdersDataService).purchaseOrdersData$;
}
