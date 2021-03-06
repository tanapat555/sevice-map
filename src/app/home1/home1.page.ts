import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore  } from '@angular/fire/firestore';
declare var google: any;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page {

  map: any;
  latLng;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  

  //ดึงจาก firebase
  markers: any = [];

  constructor(private router:Router, private db: AngularFirestore ) {


    return;
}  

    

  ionViewDidEnter() {
    this.getMarkers()
    //this.showMap();
  }
  
  async getMarkers(){
    this.db.collection("MyApp").snapshotChanges().subscribe(res => 
      res.forEach(x => { 
            console.log("Data ", x.payload.doc.data())
            this.markers.push(x.payload.doc.data());
            this.showMap();
      }
      )
      );
  }


  addMarkersToMap(markers) {
    for (let marker of markers) {
      let mapMarker = new google.maps.Marker({
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: this.map,
        title: marker.title,
        address:marker.address,
        opentime:marker.opentime,
        type :marker.type
      });
      this.addInfoWindowToMarker(mapMarker);
    }
    
  }

  addInfoWindowToMarker(marker) {
    console.log(marker)
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Address: ' + marker.address + '</p>' +
                              '<p>Opentime: ' + marker.opentime + '</p>' +
                              '<img src="' + marker.image +'" ></p>'+
                              '<p>Latitude: ' + marker.lat + '</p>' +
                              '<p>Longitude: ' + marker.lng + '</p>' +
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

    console.log("Markers ", this.markers)
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

  
    
    });


  }
  
  

}