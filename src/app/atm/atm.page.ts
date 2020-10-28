import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.page.html',
  styleUrls: ['./atm.page.scss'],
})
export class AtmPage {
  // ประกาศตัวแปรเก็บ ชื่อ เบอร์โทร รูปภาพ
  public item:Array<{name:string,type:string,img:string}>=[];
  public allitem:Array<{name:string,type:string,img:string}>=[];
  constructor() {
    this.item.push({
      name:'ATM ออมสิน มหาวิทยาลัยราชภัฎร้อยเอ็ด',
      type:'ตู้ ATM',
      img:'https://maps.gstatic.com/tactile/pane/default_geocode-2x.pngo'
    });
    this.item.push({
      name:'ATM ธนาคารกรุงไทย',
      type:'ตู้ ATM',
      img:'https://geo3.ggpht.com/cbk?panoid=HEiKE8AN7x2gevvBg5mIYQ&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=306.8273&pitch=0&thumbfov=100'
    });
    this.item.push({
      name:'ATM ออมสิน ร้านนางประไพ ศรีศุวรรณ',
      type:'ตู้ ATM',
      img:'https://geo3.ggpht.com/cbk?panoid=5KVafaRw7GLCbgnSgLMxSg&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=117.9516&pitch=0&thumbfov=100'
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