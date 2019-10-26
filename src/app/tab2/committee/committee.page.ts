import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import appconfig from '../../app.config';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/tab3/Member';
import { Observable } from 'rxjs';
import { Committee } from './Committee';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.page.html',
  styleUrls: ['./committee.page.scss'],
})
export class CommitteePage implements OnInit {
  committeeMembers$: Observable<Member[]> = null;
  committee: Committee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let committeeId = <string>this.activatedRoute.snapshot.paramMap.get('id')
    this.populateCommitteeData(committeeId)
    this.populateMembersOfCommittee(committeeId);
    // setInterval(() => console.log(this.committee), 2000)    
  }

  populateMembersOfCommittee(committeeId: string) {
    this.committeeMembers$ =
      this.http.get<Member[]>(`${appconfig.apidomain}/members?group_id=${committeeId}`)
  }

  populateCommitteeData(committeeId: string) {
    this.http.get(`${appconfig.apidomain}/groups/${committeeId}`).subscribe(
      ($response: Committee) =>
        this.committee = $response
      ,
      console.log
    )
  }

  showCommitteeAddMemberPage(): void {
    this.router.navigate([`tabs/committeeaddmember/${this.committee.id}`])
  }

  showEditCommitteePage(): void {
    this.router.navigate([`tabs/editcommittee/${this.committee.id}`])
  }
}