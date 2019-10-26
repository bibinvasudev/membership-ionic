import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import appconfig from '.././../app.config';
import { Observable } from 'rxjs';
import { Member } from '../../tab3/Member';
import { HttpService } from '../../common/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcommittee',
  templateUrl: './addcommittee.page.html',
  styleUrls: ['./addcommittee.page.scss'],
})
export class AddcommitteePage implements OnInit {
  committee: Committee = new Committee;
  levels: CommitteeLevel[] = null;
  levels$: Observable<CommitteeLevel[]> = null;
  membersAddedByMe$: Observable<Member[]> = null;

  get committeePayload(): any {
    return {
      title: this.committee.name,
      level_id: this.committee.level
    }
  }

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.populateLevels();
    this.populateMembersAddedByMe();
    // setInterval(() => console.log(this.committeePayload), 2000)
  }

  populateLevels() {
    let { apidomain } = appconfig;
    this.levels$ = this.http.get<CommitteeLevel[]>(`${apidomain}/levels`)
  }

  populateMembersAddedByMe() {
    this.membersAddedByMe$ = this.httpService.membersAddedByMe("5da43b5de638272b4ff374c8")
  }
  
  addCommittee(): void {
    let { apidomain } = appconfig;
    this.http.post(`${apidomain}/groups`, this.committeePayload).subscribe(
      (res: any) => {
        this.openSnackBar("Committee added successfully.");
      },
      console.log
    )
  }

  private openSnackBar(message: string) {
    let openedSnackBar = this.snackbar.open(message);
    setTimeout(() => {
      openedSnackBar.dismiss();
    }, 2 * 1000);
  }
}

class Committee {
  name: string;
  level: number;
  memberIds: number[]
}

class CommitteeLevel {
  id: string
  title: string
  level_no: number
}