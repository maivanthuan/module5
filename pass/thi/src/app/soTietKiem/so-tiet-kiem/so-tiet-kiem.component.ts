import { Component, OnInit } from '@angular/core';
import {SoTietKiem} from '../../model/soTietKiem';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-so-tiet-kiem',
  templateUrl: './so-tiet-kiem.component.html',
  styleUrls: ['./so-tiet-kiem.component.css']
})
export class SoTietKiemComponent implements OnInit {
  soTietKiems: SoTietKiem[] = [];
  soTietKiem: SoTietKiem;
  p = 1;
  mgs = false;


  constructor(private soTietKiemService: SoTietKiemService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllSoTietKiem();
  }
  getAllSoTietKiem() {
    this.soTietKiemService.findAll().subscribe(data => {
      this.soTietKiems = data;
    });
  }

  getSoTietKiem(id: number) {
    this.soTietKiemService.findById(id).subscribe(data => {
      this.soTietKiem = data;
    });
  }

  removeSoTietKiem(id: number | undefined) {
    this.soTietKiemService.deleteById(this.soTietKiem.id).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.getAllSoTietKiem();
    });
  }
  search(inputSearch: HTMLInputElement) {
    if (inputSearch.value === '') {
      Swal.fire('Vui lòng nhập từ khóa cần tìm kiếm');
    } else {
      this.soTietKiemService.search(inputSearch.value).subscribe(next => {
        this.soTietKiems = next;
        if (this.soTietKiems.length === 0) {
          this.mgs = true;
        } else {
          this.mgs = false;
        }
      });
    }
  }
  reload(navLink: string) {
    const  currentUrl = this.router.url;
    if (currentUrl === navLink) {
      this.router.navigateByUrl('', {skipLocationChange: true}).then(() => this.router.navigateByUrl(currentUrl));
    }
  }
}
