import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../common/http.service';
import { Member } from './Member';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  membersAddedByMe$: Observable<Member[]> = null;
  myDetails: any;

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.populateMembersAddedByMe();
  }

  populateMembersAddedByMe() {
    this.httpService.getMyDetail().toPromise().then(
      res =>
        this.membersAddedByMe$ = this.httpService.membersAddedByMe(res.id)
    )
  }

  showProfile(id: string) {

  }

  showAddMemberPage(): void {
    this.router.navigate(['tabs/addmember'])
  }
}

