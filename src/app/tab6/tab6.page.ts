import { Component, OnInit } from '@angular/core';
import { Member } from '../tab3/Member';
import { Router } from '@angular/router';
import { HttpService } from '../common/http.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  member: Member = new Member;

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.populateMyDetail();
  }

  populateMyDetail(): void {
    this.httpService.getMyDetail().toPromise()
      .then(b => {
        this.member.firstName = b.name.first
        this.member.lastName = b.name.last
        this.member.dateOfBirth = b.dob
        this.member.mobile = <string><unknown>b.mobile_no
        this.member.gender = b.gender
        this.member.qualification = b.qualification
        this.member.bloodgroup = b.blood_group
        this.member.job = b.job
        this.member.email = b.email
        this.member.address = b.address
      })
  }

  showEditPage(): void {
    this.router.navigate(['tabs/tab5'])
  }
}
