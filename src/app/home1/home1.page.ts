import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];

  //ดึงจาก firebase
  markers: any = [
    {
     
  },
    
  ];

  constructor(private router:Router ) {

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
        addres:marker.address,
        opentime:marker.opentime,
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
                              '<p>Address: ' + marker.address + '</p>' +
                              '<p>Opentime: ' + marker.opentime + '</p>' +
                              '<img src="' + marker.image +'" ></p>'+
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

    this.map.addListener("click", (event) => {
      console.log("lat ", event.latLng.lat())
      console.log("long ", event.latLng.lng())
      this.router.navigate(['/add', {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }])
    
    
    // สร้างฟอร์มเพื่อดึงข้อมูลชื่อร้าน ประเภท รูปภาพ แล้วเมื่อกด Submit จะเรียกใช้ฟังก์ชัน addMarker(newmarker)

    let newmarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: event.latLng,
        latitude:event.latLng.lat(),
        longtitude:event.latLng.lng(),
        title: "ดึงจากผู้ใช้",
        type:"ดึงจากผู้ใช้",
        image:""
      });
    
    });


  }
  
  

}