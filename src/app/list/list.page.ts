import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  // ประกาศตัวแปรเก็บ ชื่อ เบอร์โทร รูปภาพ
  public item:Array<{name:string,tel:string,img:string}>=[];
  public allitem:Array<{name:string,tel:string,img:string}>=[];
  constructor() {
    this.item.push({
      name:'จุ่มโจร สาขา ราชภัฏร้อยเอ็ด',
      tel:'0926389989',
      img:'https://lh5.googleusercontent.com/p/AF1QipP1VghxKKMV5rgs5KzZB9QCAOAva1JEfpx9xtXe=w408-h272-k-no'
    });
    this.item.push({
      name:'ชาพะยอม ณ ราชภัฏ 101',
      tel:'09012345677',
      img:'https://lh5.googleusercontent.com/p/AF1QipP1GKC0WrZ4Kg40dQG_VOi7pI5O1pmIgsODrZH-=w408-h306-k-no'
    });
    this.item.push({
      name:'มโนนม',
      tel:'0999999999',
      img:'https://lh5.googleusercontent.com/p/AF1QipPxZqxRsuCw7ybgkqo945Qgr2RP2-xNaJls3Hcw=w408-h306-k-no'
    });
    this.item.push({
      name:'เจี๊ยบลูกชิ้นนึ่ง',
      tel:'0999999999',
      img:'https://lh5.googleusercontent.com/p/AF1QipNh-VSmvdGLMCNkbgPXDVeuMQvg_LDVid5-FBgX=w408-h306-k-no'
    });
    this.item.push({
      name:'คิดฮอด มะพร้าวปั่นนมสด สาขา 3',
      tel:'',
      img:'https://geo3.ggpht.com/cbk?panoid=QGvgbZoEIGIamIWtXCnLKQ&output=thumbnail&cb_client=search.gws-prod.gps&thumb=2&w=408&h=240&yaw=203.39734&pitch=0&thumbfov=100'
    });
    this.item.push({
      name:'เครปมิวอร่อยจังหน้าป้าย',
      tel:'0932768327',
      img:'https://lh5.googleusercontent.com/p/AF1QipNwQXZbYvjuyhNJoJIp4IyL_QnLTKdKUmVZKu6_=w408-h544-k-no'
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