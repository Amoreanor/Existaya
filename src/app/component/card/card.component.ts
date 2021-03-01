import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards = [];

  constructor(
    private DataService: DataService
  ) { }

  ngOnInit() {
    this.DataService.getCards().subscribe(
      (res: any) => {
        this.cards = res;
      },
      err => console.log(err)
    )
  }

  selectedCard(id: number) {
    
  }

}
