// app module.ts
// angular 自己的模組系統，


// 引入的程式碼
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';


// 裝飾器（Decorator)
// 傳入裝飾器裡的物件，在 Angular 裡稱作中繼資料 （MetaData），用來告訴 Angular 要怎麼樣處理接下來的的類別。
@NgModule({

  //Component
  // Directive 指令
  // Pipe
  // --> 與顯示相關的程式類別都只能存在於一個模組之中，如果存在多個模組中時，編譯程式時就會發生錯誤
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  // 此 NgModule 需要使用、依賴的其他 NgModule 皆放置於此（好像有點饒舌）。
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  // 在此設置的是應用程式通常稱之為 Root Component （根元件）
  // 而且只有 Root Module 才要設置此屬性。
  bootstrap: [AppComponent]
})



// 每個檔案都會有一個要 export 給別人使用的類別，
// 像上述範例的就是要將 AppModule 這個類別 export 出去讓其他人使用 
// （Root Module 實際上也只會被 main.ts 引用） 。
export class AppModule { }
