import { Component, OnInit } from '@angular/core';
import {Pet} from './pet';

@Component({
  selector: 'app-thong-tin-thu-nuoi',
  templateUrl: './thong-tin-thu-nuoi.component.html',
  styleUrls: ['./thong-tin-thu-nuoi.component.css']
})
export class ThongTinThuNuoiComponent implements OnInit {
    pet: Pet = {
      name: 'Sóc',
      // tslint:disable-next-line:max-line-length
      image: `https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/346137224_1690814868024552_7353539975566043005_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Uroi8_cd2YQAX-pqHvj&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdStWMUiZWAT0vmWwDLT1TDBSQbJ1yCfkJqQ8NQIoIjLUg&oe=648C6418`

    };
  constructor() { }

  ngOnInit(): void {
  }

}
