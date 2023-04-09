import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PurchaseOrdersDataService {
    purchaseOrdersData$ = inject(HttpClient).get<Record<string, any>>(
        "assets/data/purchase-orders.json"
    );
}
