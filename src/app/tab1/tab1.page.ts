import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/http.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  safeImage: SafeHtml = null;
  constructor(
    private httpService: HttpService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.httpService.bannerImage().subscribe(
      (image: { data: string }) => 
        this.safeImage = this.domSanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64, ${image.data}`)
      ,
      console.log
    )
  }

}