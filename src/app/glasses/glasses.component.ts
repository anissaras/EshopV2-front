import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss'],
})
export class GlassesComponent {
  items!: Item[];
  constructor(private itemsService: ItemsService) {
    let ItemsObservable: Observable<Item[]>
    ItemsObservable = this.itemsService.getAllItems();

    ItemsObservable.subscribe((serverFoods)=> {
      this.items = serverFoods;
     })
  }
}
