import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
   
  ];

  constructor( ) {

    }
    

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        type :marker.type
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<img src= "https://lh5.googleusercontent.com/p/AF1QipP1VghxKKMV5rgs5KzZB9QCAOAva1JEfpx9xtXe=w408-h272-k-no">'+
                              '<p><img src ="data:image/jpeg;base64,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"></p>'+
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                              '<p>Type: ' + marker.type + '</p>' +
                              '<ion-button href="detail">detail</ion-button>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('detail button clicked!');
          // code to navigate using google maps app
          window.open('href=detail' + marker.latitude + ',' + marker.longitude);
        });
      });

    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(16.140838, 103.880857);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
  

}