import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import appconfig from '../app.config';
import { MessengerService } from '../common/messenger.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
    committees: Committee[];

    constructor(
        private router: Router,
        private http: HttpClient,
        private msngr: MessengerService
    ) { }

    ngOnInit(): void {
        this.msngr.groupListChanged.subscribe(_ => this.populateCommittees())
    }

    ngOnDestroy(): void {
        this.committees = undefined
    }

    private populateCommittees() {
        this.http.get(`${appconfig.apidomain}/groups`).subscribe(
            ($response: Committee[]) => this.committees = $response
            ,
            ($error: any) => {
                console.error('GET /groups failed')
            }
        );
    }

    addCommittee(): void {
        this.router.navigate(['tabs/addcommitte'])
    }

    committeeDetail(committeeId: string): void {
        this.router.navigate([`tabs/committee/${committeeId}`])
    }
}

class Committee {
    id: string
    title: string
    level_title: string
    members_count: {
        total: number
        active: number
        inactive: number
    }
    hierarchy: any
}