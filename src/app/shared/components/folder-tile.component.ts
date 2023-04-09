import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "efi-folder-tile",
    standalone: true,
    imports: [CommonModule],
    template: `
    <i class="pi {{ icon }}"></i>
    <dt>{{ label }}</dt>
    <dd>{{ value | number }}</dd>
  `,
    styles: [
        `
      :host {
        display: grid;
        grid-template-columns: auto 1fr;
        background-color: rgba(var(--card-rgb), 0.1);
        box-shadow: 0px 0px 0px 1px rgb(var(--card-rgb, currentColor));
        padding: 4px;
        line-height: 1.4;
        border-radius: var(--border-radius);

        i {
          grid-row: span 2;
          align-self: center;
          color: rgb(var(--icon-color, var(--card-rgb)));
          font-size: 1.6em;
          font-weight: 900;
          padding-inline: 0.5rem;
        }

        dd {
          grid-column-start: 2;
          font-size: 1.2em;
          font-weight: 500;
        }
      }
    `,
    ],
})
export class FolderTileComponent {
    @Input() icon!: string;
    @Input() label!: string;
    @Input() value!: number;
}
