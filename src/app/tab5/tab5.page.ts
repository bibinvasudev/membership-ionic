import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DyfiauthService } from '../login/dyfiauth.service';
import { Member } from '../tab3/Member';
import { HttpService } from '../common/http.service';

@Component({
    selector: 'app-tab5',
    templateUrl: './tab5.page.html',
    styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
    member: Member = new Member;

    constructor(
        private router: Router,
        private httpService: HttpService,
        private authService: DyfiauthService
    ) { }

    ngOnInit() {
        this.populateMyDetail();
    }

    ionViewDidLeave() {
        this.member = new Member
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

    logout(): void {
        this.authService.logout()
        this.router.navigate(['login'])
    }
}