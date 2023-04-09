import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";

@Component({
    selector: "efi-purchase-orders-data-table",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TableModule,
        TagModule,
        InputTextModule,
        ButtonModule,
        DividerModule,
    ],
    template: `
    <p-table
      #dt
      [value]="orders"
      [(selection)]="selectedOrders"
      dataKey="serialNumber"
      styleClass="p-datatable-sm"
      class="mt-5"
      [rowHover]="true"
      [rows]="20"
      [showCurrentPageReport]="true"
      [rowsPerPageOptions]="[10, 25, 50]"
      [paginator]="true"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      [filterDelay]="0"
      [scrollable]="true"
      scrollHeight="flex"
      [globalFilterFields]="[
        'serialNumber',
        'supplierCode',
        'createdAt',
        'callOff',
        'status',
        'supplierReference'
      ]"
    >
      <ng-template pTemplate="caption">
        <section class="flex items-center gap-4">
          <p-button
            icon="pi pi-user"
            label="Authorize"
            styleClass="p-button-secondary p-button-sm"
          ></p-button>
          <p-button
            class="ml-auto"
            styleClass="p-button-rounded p-button-text p-button-raised p-button-sm"
            icon="pi pi-key"
          ></p-button>
          <p-button
            styleClass="p-button-rounded p-button-text p-button-raised p-button-sm"
            icon="pi pi-sync"
          ></p-button>
          <p-button
            styleClass="p-button-rounded p-button-text p-button-raised p-button-sm"
            icon="pi pi-upload"
          >
          </p-button>
          <p-divider layout="vertical" class="-mx-[12px]"></p-divider>
          <p-button
            styleClass="p-button-rounded p-button-text p-button-raised p-button-sm"
            icon="pi pi-sliders-h"
          >
          </p-button>
        </section>
      </ng-template>
      <ng-template pTemplate="header">
        <tr>
          <th style="width: 4rem">
            <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
          </th>
          <th pSortableColumn="serialNumber" style="min-width: 14rem">
            <div class="flex justify-content-between align-items-center">
              Purchase Order
              <p-sortIcon field="serialNumber"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="supplierCode" style="min-width: 14rem">
            <div class="flex justify-content-between align-items-center">
              Supplier Code
              <p-sortIcon field="supplierCode"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="createdAt" style="min-width: 14rem">
            <div class="flex justify-content-between align-items-center">
              Order date
              <p-sortIcon field="createdAt"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="callOff" style="min-width: 10rem">
            <div class="flex justify-content-between align-items-center">
              Call off
              <p-sortIcon field="callOff"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="currencyCode" style="min-width: 10rem">
            <div class="flex justify-content-between align-items-center">
              Currency Code
              <p-sortIcon field="currencyCode"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="status" style="min-width: 10rem">
            <div class="flex justify-content-between align-items-center">
              Status
              <p-sortIcon field="status"></p-sortIcon>
            </div>
          </th>
          <th pSortableColumn="supplierReference" style="min-width: 10rem">
            <div class="flex justify-content-between align-items-center">
              Supplier Ref
              <p-sortIcon field="supplierReference"></p-sortIcon>
            </div>
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-order>
        <tr class="p-selectable-row">
          <td>
            <p-tableCheckbox [value]="order"></p-tableCheckbox>
          </td>
          <td>
            <span class="p-column-title">Purchase Order</span>
            {{ order.serialNumber }}
          </td>
          <td>
            <span class="p-column-title">Supplier Code</span>
            <span class="ml-1 vertical-align-middle">{{
              order.supplierCode
            }}</span>
          </td>
          <td>
            <span class="p-column-title">Order date</span>
            <span class="ml-1 vertical-align-middle">{{
              order.createdAt | date : "MM/dd/yyyy"
            }}</span>
          </td>
          <td>
            <span class="p-column-title">Call off</span>
            {{ order.callOff }}
          </td>
          <td>
            <span class="p-column-title">Currency Code</span>
            {{ order.currencyCode }}
          </td>
          <td>
            <span class="p-column-title">Status</span>
            <p-tag
              [value]="order.status"
              [severity]="severityMap[order.status]"
            ></p-tag>
          </td>
          <td>
            <span class="p-column-title">Supplier Ref</span>
            {{ order.supplierReference }}
          </td>
        </tr>
      </ng-template>
      <ng-template pTemplate="emptymessage">
        <tr>
          <td colspan="8">No orders found.</td>
        </tr>
      </ng-template>
    </p-table>
  `,
    styles: [
        `
      :host {
        flex: 1;
        height: 0;
      }

      p-table ::ng-deep {
        .p-datatable .p-datatable-header {
          border-width: 0;
          background: inherit;
        }
      }
    `,
    ],
})
export class PurchaseOrdersDataTableComponent {
    @Input() orders = [];

    selectedOrders = [];

    severityMap: Record<string, string> = {
        cancelled: "danger",
        completed: "success",
        authorised: "info",
        onHold: "warning",
    };
}
