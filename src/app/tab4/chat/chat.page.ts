import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import appconfig from '../../app.config';
import { Member } from 'src/app/tab3/Member';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  title: string;
  messages: Message[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get(`${appconfig.apidomain}/groups/${id}`).subscribe(
      console.log, console.error
    )

    this.title = 'Lewis Hamilton'
    this._tst_fillMessages();
  }

  isMessageSentByMe(memberId: number): boolean {
    return memberId === 1
  }

  private _tst_fillMessages() {
    let _messages: Message[] = new Array<Message>();
    _messages.push(this._tst_getDummymessage(1, 'nicola', 'tesla', 'Yay ..! I made time machine..'));
    _messages.push(this._tst_getDummymessage(11, 'nick', 'fury', 'Mr. Nicola, we need to talk.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    _messages.push(this._tst_getDummymessage(21, 'tony', 'stark', 'I need to upgrade my suit.'));
    this.messages = _messages;
  }

  private _tst_getDummymessage(senderId: number, ...names): Message {
    const msg = new Message
    msg.sender = new Member
    msg.sender.firstName = names[0] || `Nicola${senderId}`
    msg.sender.lastName = names[1] || `Tesla${senderId}`
    //msg.sender.id = senderId
    msg.content = names[2] || 'Hey ..!'
    return msg
  }
}

class Committee {
  id: number
  title: string
}

class Message {
  sender: Member
  content: string
}