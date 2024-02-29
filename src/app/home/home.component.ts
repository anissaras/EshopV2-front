import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: Item[];

  constructor(
    private itemsService: ItemsService,
     activatedRoute:ActivatedRoute) {

    let ItemsObservable: Observable<Item[]>
    activatedRoute.params.subscribe((params) =>{
      if(params['searchTerm'])
      ItemsObservable = this.itemsService.getAllItemBySearchTerm(params['searchTerm']);
      else
      ItemsObservable = this.itemsService.getAllItems() ;

      ItemsObservable.subscribe((serverItems)=> {
        this.items = serverItems;
       })
    });
  }
  ngOnInit(): void {
  }
}
