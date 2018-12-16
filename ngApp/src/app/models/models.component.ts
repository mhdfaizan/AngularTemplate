import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import { ServiceInvokerComponent } from '../service-invoker/service-invoker.component';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  models = [];
  message: string;

  constructor(private _serviceInvoker: ServiceInvokerComponent, private _router: Router,
    private _dataSharingService: DataSharingService) { }

  ngOnInit() {
    this._serviceInvoker.getAllModels()
      .subscribe(
        res => this.models = res,
        error => console.log(error)
      );
  }

  announce(features){
    this._dataSharingService.changeMessage(features);
    this._dataSharingService.currentMessage.subscribe(mes => console.log(mes));
    this._router.navigate(["/features"]);
  }
}
