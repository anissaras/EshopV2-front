import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  items!: Item[];

  constructor(private itemsService: ItemsService) {
    let ItemsObservable: Observable<Item[]>
    ItemsObservable = this.itemsService.getAllItems();

    ItemsObservable.subscribe((serverItems)=> {
      this.items = serverItems;
     })
  }

  ngOnInit(): void {

  }
}
