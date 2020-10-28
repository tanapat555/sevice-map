import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage {
  // ประกาศตัวแปรเก็บ ชื่อ เบอร์โทร รูปภาพ
  public item:Array<{name:string,tel:string,img:string}>=[];
  public allitem:Array<{name:string,tel:string,img:string}>=[];
  constructor() {
    this.item.push({
      name:'ยิ้มแฉ่ง 99',
      tel:'0981895301',
      img:'https://lh5.googleusercontent.com/p/AF1QipPGzS1LjVxMaTX0iCns537OncZjGHlvrjTHhxAU=w427-h240-k-no'
    });
    this.item.push({
      name:'ร้านตระการมินิมาร์ท',
      tel:'0844528693',
      img:'https://lh5.googleusercontent.com/p/AF1QipNChNSGY1Ak5eSf18MZ-GDgMDKL1X4K0FhmuMMw=w570-h240-k-no'
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