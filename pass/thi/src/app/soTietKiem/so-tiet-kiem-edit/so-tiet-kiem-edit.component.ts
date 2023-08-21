import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {KhachHangService} from '../../service/khach-hang.service';
import {KhachHang} from '../../model/khach-hang';

@Component({
  selector: 'app-so-tiet-kiem-edit',
  templateUrl: './so-tiet-kiem-edit.component.html',
  styleUrls: ['./so-tiet-kiem-edit.component.css']
})
export class SoTietKiemEditComponent implements OnInit {
  khachHangs: KhachHang[];
  soTietKiemForm: FormGroup = new FormGroup({
    id: new FormControl(),
    maSoSo: new FormControl(),
    maKhachHang: new FormControl(),
    tenKhachHang: new FormControl(),
    ngayMoSo: new FormControl(),
    thoiGianGui: new FormControl(),
    kyHan: new FormControl(),
    soTienGui: new FormControl(),
    laiSuat: new FormControl(),
    uuDai: new FormControl()
  });
  id: number;
  constructor(private soTietKiemService: SoTietKiemService,
              private activecatedRouter: ActivatedRoute,
              private router: Router,
              private khacHangService: KhachHangService) {
    this.activecatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.soTietKiemService.findById(this.id).subscribe(soTietKiem => {
      this.soTietKiemForm = new FormGroup({
        id: new FormControl(soTietKiem.id, [Validators.required]),
        maSoSo: new FormControl(soTietKiem.maSoSo, [Validators.required]),
        maKhachHang: new FormControl(soTietKiem.maKhachHang.maKhachHang, [Validators.required]),
        tenKhachHang: new FormControl(soTietKiem.tenKhachHang, [Validators.required]),
        ngayMoSo: new FormControl(soTietKiem.ngayMoSo, [Validators.required]),
        thoiGianGui: new FormControl(soTietKiem.thoiGianGui, [Validators.required]),
        kyHan: new FormControl(soTietKiem.kyHan, [Validators.required]),
        soTienGui: new FormControl(soTietKiem.soTienGui, [Validators.required]),
        laiSuat: new FormControl(soTietKiem.laiSuat, [Validators.required]),
        uuDai: new FormControl(soTietKiem.uuDai, [Validators.required])
      });
    });
    this.findAllKhachHang();
  }
  updateSoTietKiem(id: number) {
    const soTietKiem = this.soTietKiemForm.value;
    this.khacHangService.findById(soTietKiem.maKhachHang).subscribe(next => {
      soTietKiem.maKhachHang = next;
      this.soTietKiemService.update(id, soTietKiem).subscribe(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Update thành công'  ,
          showConfirmButton: false,
          timer: 1000
        });
        this.router.navigateByUrl('/nganhang/list');
      });
    });
  }
  findAllKhachHang() {
    this.khacHangService.getAllKhachHang().subscribe(data => {
      this.khachHangs = data;
    });
  }
}
