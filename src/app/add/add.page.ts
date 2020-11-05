import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
//import {Home1Page} from '../home1/home1.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  title: string;
  type: string;
  address: string;
  opentime: string;
  key:string;
  lng: string
  lat: string;
  constructor(
              private db: AngularFirestore,
              private router: ActivatedRoute 
  ) {
    this.lat = this.router.snapshot.paramMap.get('lat');
    this.lng = this.router.snapshot.paramMap.get('lng');
   }

  ngOnInit() {
  }

  submit()
  {
    // console.log(this.title, this.type, this.address, this.opentime);
    this.db.collection('MyApp').doc(this.key).set({
     title: this.title,
     type: this.type,
     address: this.address,
     opentime: this.opentime,
     log: this.lng,
     lat: this.lat
    })
  }
  
}
