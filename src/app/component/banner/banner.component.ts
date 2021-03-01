import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() id: number = 1;

  constructor(
    private DataService: DataService
  ) { }

    card: {id: number, title: string, description: string};

  ngOnInit() {
    let id = this.id;

    this.DataService.getCard(id).subscribe(
      (res: any) => {
        this.card = res;
        console.log(this.card)
      },
      err => console.log(err)
    )


  }

}
