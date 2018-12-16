import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features = [];

  constructor(private _dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this._dataSharingService.currentMessage.subscribe(features => {
      this.features = features;
    });
  }

}
