import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.scss'],
})
export class TrousersComponent implements OnInit{
  items!: Item[];

  constructor(private itemsService: ItemsService) {
    let ItemsObservable: Observable<Item[]>;
    ItemsObservable = this.itemsService.getAllItems();

    ItemsObservable.subscribe((serverItems)=> {
      this.items = serverItems;
     })
  }

  ngOnInit(): void {

  }
}
