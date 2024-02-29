import { Component, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: Item;

  constructor(private itemService: ItemsService, private router: Router) {}

  onViewItem() {
    this.router.navigateByUrl(`items/${this.item.id_modele}`);
  }
}
