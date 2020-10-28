import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage {
  // ประกาศตัวแปรเก็บ ชื่อ เบอร์โทร รูปภาพ
  public item:Array<{name:string,type:string,img:string}>=[];
  public allitem:Array<{name:string,type:string,img:string}>=[];
  constructor() {
    this.item.push({
      name:'ร้านซ่อมรถมอไซต์สี่แยกไฟแดงหน้ามอราชภัฏร้อยเอ็ด',
      type:'ร้านซ่อมรถมอไซต์',
      img:''
    });
    this.item.push({
      name:'ร้านซ่อมรถมอไซต์สี่แยกไฟแดงหน้ามอราชภัฏร้อยเอ็ด',
      type:'ร้านซ่อมรถมอไซต์',
      img:''
    });
    this.item.push({
      name:'ร้านซ่อมรถมอไซต์สี่แยกไฟแดงหน้ามอราชภัฏร้อยเอ็ด',
      type:'ร้านซ่อมรถมอไซต์',
      img:''
    });
   this.allitem=this.item;
  }
//เข้าสู่ฟังชั่นค้นหา
  onSearch(ev: CustomEvent){
    this.item=this.allitem;
    //นำค่าจากกล่อง search bar มาเก็บที่ตัวแปร val
    const val=ev.detail.value;
    //ถ้ากล่องค้นหามีพิมพ์ค่าเข้ามาโดยไม่มีช่องว่าง
    if(val!=='' && val.trim()!==''){
    //ทำการค้นหาด้วยคำสั่ง filter
       this.item=this.item.filter(
         //ระบุขอบเขตการค้นหาด้วย term ให้ชื่อทั้งหมดเป็นตัวพิมพ์เล็กและค้นหา
         term=>{
           return term.name.toLowerCase()
           .indexOf(val.trim().toLowerCase())>-1
         }
       );
    }
  }
 
}