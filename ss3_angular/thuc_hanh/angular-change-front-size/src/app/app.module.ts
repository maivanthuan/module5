import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './ss3_angular/thuc_hanh/font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { ThongTinThuNuoiComponent } from './ss3_angular/thuc_hanh/thong-tin-thu-nuoi/thong-tin-thu-nuoi.component';
import { ProductComponent } from './ss3_angular/thuc_hanh/product/product.component';
import { CalculatorComponent } from './ss3_angular/bai_tap/calculator/calculator.component';
import { ColorComponent } from './ss3_angular/bai_tap/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    ThongTinThuNuoiComponent,
    ProductComponent,
    CalculatorComponent,
    ColorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
