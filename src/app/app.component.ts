import { Component, OnInit } from '@angular/core';
import { AppServicesService } from './services/app-services.service';
import { CapacityOrder } from './models/CapacityOrder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JsonConverter';

  dataList: CapacityOrder[] = [];
  constructor(private appServices: AppServicesService) { }

  ngOnInit(): void {
    this.appServices.getData().subscribe({
      next: (data) => {
        this.dataList = data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }

  getKeys(obj: CapacityOrder): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
