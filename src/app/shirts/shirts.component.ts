import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss'],
})
export class ShirtsComponent{
  items!: Item[];

  constructor(private itemsService: ItemsService) {
    let ItemsObservable: Observable<Item[]>;
    ItemsObservable = this.itemsService.getAllItems();

    ItemsObservable.subscribe((serverItems)=> {
      this.items = serverItems;
     })
  }

  }

