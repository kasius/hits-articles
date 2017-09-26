import { Component, OnInit } from '@angular/core';

// Services
import { HitsService } from './services/hits.service';

// Models
import { Hit } from './model/hit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // variables
  title = 'app';
  public dataHits: Hit[];

  constructor(
    private _hitsService: HitsService
  ) { }

  ngOnInit() {
    this._hitsService.getAllHits()
      .subscribe(
      response => {
        this.dataHits = response.json().hits;
      },
      err => {
        console.log(err);
      }
      );
  }

  public openUrl(url: string): void {
    window.open(url, '_blank');
  }

  public deleteHit(objectId: number): void {
    this.dataHits = this.dataHits.filter(h => h.objectID !== objectId);
  }
}

