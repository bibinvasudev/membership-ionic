import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../tab3/Member';

@Injectable({
    providedIn: 'root'
})
export class MessengerService {
    groupListChanged: BehaviorSubject<void> = null;

    constructor() {
        this.groupListChanged = new BehaviorSubject(undefined);
        let tstMember: Member = new Member();
        // tstMember.id = '5da45a2be638272d2760836b'
        //this.tst1 = new BehaviorSubject()
    }

    tellAllComponentsThatGroupListChanged() {
        this.groupListChanged.next();
    }

    tst1: BehaviorSubject<Member> = null;
}