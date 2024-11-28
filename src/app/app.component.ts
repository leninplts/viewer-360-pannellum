import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    (window as any).pannellum.viewer('panorama', {
      "type": "equirectangular",
      "panorama": "https://stcentenariodemos.blob.core.windows.net/public/360-images/3_ALAMEDA_CENTRAL.jpg",
      "autoLoad": true,
    });
  }
}
