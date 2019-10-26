import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Member } from '../Member';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import appconfig from '../../app.config'

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.page.html',
  styleUrls: ['./addmember.page.scss'],
})
export class AddmemberPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private camera: Camera) { }

  member: Member = new Member;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ngOnInit() {
    // setInterval(() => {console.log(this.member)}, 1000);
  }

  ionViewDidLeave () {
    this.member = new Member
  }
  
  submitMemberData() {
    
    console.log(this.member)
    let payload //= new MemberPayload(this.member);

    const number = 7
    const firstname = "tst" + number;
    const mobileno = "213";
    payload = { "first_name": firstname, "last_name": firstname, "mobile_no": mobileno, "dob": "1/1/2001", "gender": "male" }
    this.http.post(`${appconfig.apidomain}/members`, payload).subscribe(
      console.log
      ,
      console.error
    )
  }

  takePhoto(): void {
    this.camera.getPicture(this.options).then(picture => {

    })
  }
}

class MemberPayload {
  first_name: string
  last_name: string
  mobile_no: string
  gender: string

  constructor(member: Member) {
    this.first_name = member.firstName
    this.last_name = member.lastName
    this.mobile_no = member.mobile
    this.gender = member.gender
  }
}