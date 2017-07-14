import { Component, OnInit, ViewContainerRef, ElementRef} from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.scss']
})
export class MapGoogleComponent implements OnInit {

  constructor(private _elem: ElementRef) { }

  ngOnInit() {
    console.log(google);
    const map = new google.maps.Map(this._elem.nativeElement.querySelector('#container'));
    map.setOptions({
      center: {lat: 40, lng: 116},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      zoom: 13
    });
  }
}
