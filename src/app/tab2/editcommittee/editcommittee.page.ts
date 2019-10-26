import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import appconfig from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Committee } from '../committee/Committee';
import { MessengerService } from 'src/app/common/messenger.service';

@Component({
  selector: 'app-editcommittee',
  templateUrl: './editcommittee.page.html',
  styleUrls: ['./editcommittee.page.scss'],
})
export class EditcommitteePage implements OnInit {
  committee: Committee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private messenger: MessengerService
    // private
  ) { }

  ngOnInit() {
    let committeeId = <string>this.activatedRoute.snapshot.paramMap.get('id')
    this.populateCommitteeData(committeeId);
  }

  populateCommitteeData(committeeId: string) {
    this.http.get(`${appconfig.apidomain}/groups/${committeeId}`).subscribe(
      ($response: Committee) =>
        this.committee = $response
      ,
      console.log
    )
  }

  confirmCommitteeDelete() {
    let isUserSure = window.confirm('Are you sure ?')
    if (isUserSure)
      this.http.delete(`${appconfig.apidomain}/groups/${this.committee.id}`).subscribe(
        _ => this.messenger.tellAllComponentsThatGroupListChanged()
      )
  }
}
