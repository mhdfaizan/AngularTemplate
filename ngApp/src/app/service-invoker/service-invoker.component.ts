import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { ModelsService } from '../services/models.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-service-invoker',
  template: `
    <p>
      service-invoker works!
    </p>
  `,
  styles: []
})
export class ServiceInvokerComponent implements OnInit {

  private _getAllProfilesUrl= "http://localhost:31603/profile/getallprofiles";
  private _getAllModelsUrl= "http://localhost:31603/profile/getmodelswithfeatures";

  constructor(private _profileService: ProfilesService, private _modelService: ModelsService) { }

  ngOnInit() {

  }

  getAllProfiles(){
    return this._profileService.getAllProfiles(this._getAllProfilesUrl);
  }

  getAllModels(){
    return this._modelService.getAllModels(this._getAllModelsUrl);
  }
}
