import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.scss'],
})
export class JacketsComponent implements OnInit {
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
