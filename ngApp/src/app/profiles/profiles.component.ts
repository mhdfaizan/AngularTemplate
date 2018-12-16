import { Component, OnInit } from '@angular/core';
import { ServiceInvokerComponent } from '../service-invoker/service-invoker.component';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  
  profiles = [];
  constructor(private _serviceInvoker: ServiceInvokerComponent) { }

  ngOnInit() {
    this._serviceInvoker.getAllProfiles()
      .subscribe(
        res => this.profiles = res,
        error => console.log(error)
      );
  }

}
