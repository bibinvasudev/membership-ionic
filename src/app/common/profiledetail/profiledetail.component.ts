import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/tab3/Member';

@Component({
  selector: 'profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.scss'],
})
export class ProfiledetailComponent implements OnInit {

  @Input('member-data') member: Member;
  @Input('show-submit-button') isSubmitButtonVisible: boolean;
  // @Input('allow-edit') isEditAllowed: boolean;
  @Input('allow-edit') set _isEditAllowed(value: any) {
    console.log(value)
    console.log(this.isEditAllowed)
    this.isEditAllowed = value
    console.log(this.isEditAllowed)
  }
  isEditAllowed: boolean;
  profileDetailForm: any;

  constructor() { }

  ngOnInit() { }

  submitForm() {

  }
}
