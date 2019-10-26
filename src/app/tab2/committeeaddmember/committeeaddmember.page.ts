import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/http.service';
import { Observable } from 'rxjs';
import { Member } from 'src/app/tab3/Member';

@Component({
  selector: 'app-committeeaddmember',
  templateUrl: './committeeaddmember.page.html',
  styleUrls: ['./committeeaddmember.page.scss'],
})
export class CommitteeaddmemberPage implements OnInit {
  membersAddedByMe$: Observable<Member[]> = null;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.populateMembersAddedByMe();
  }

  populateMembersAddedByMe() {
    this.membersAddedByMe$ = this.httpService.membersAddedByMe("5da43b5de638272b4ff374c8")
  }
}
