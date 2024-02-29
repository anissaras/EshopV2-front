import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss'],
})
export class WatchesComponent {
  items!: Item[];

  constructor(private itemsService: ItemsService) {
    let ItemsObservable: Observable<Item[]>;
    ItemsObservable = this.itemsService.getAllItems();

    ItemsObservable.subscribe((serverItems)=> {
      this.items = serverItems;
     })
  }
}
