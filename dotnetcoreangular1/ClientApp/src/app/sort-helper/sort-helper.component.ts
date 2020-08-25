import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-sorting-helper',
  template: `<span class="pull-right">
              <i *ngIf="sortColumn != currentColumn" class="fa fa-fw fa-sort"></i>
              <i *ngIf="sortColumn==currentColumn && sortOrder==true" class="fa fa-fw fa-sort-up"></i>
              <i *ngIf="sortColumn==currentColumn && sortOrder==false" class="fa fa-fw fa-sort-down"></i>
            </span>`,
})

export class SortHelperComponent {
  @Input() sortColumn: string;
  @Input() sortOrder: boolean;
  @Input() currentColumn: string;
}
