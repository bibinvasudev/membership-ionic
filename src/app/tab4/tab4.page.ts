import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import appconfig from '../app.config';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  tab: string = 'CHAT';
  chats: Chat[];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.populateChats();
  }

  populateChats() {
    this.http.get(`${appconfig.apidomain}/chats/myId`).subscribe(
      ($chats: Chat[]) =>
        this.chats = $chats
      ,
      ($error) => {
        console.log($error);
        let _tst_chatArr: Chat[] = [];
        _tst_chatArr.push(this._tst_getChat('Lewis Hamilton', 'Unit Secratary'));
        _tst_chatArr.push(this._tst_getChat('Micheal Schumacker', 'District Secratary'));
        _tst_chatArr.push(this._tst_getChat('Nikki Lauda', 'Unit Secratary'));
        _tst_chatArr.push(this._tst_getChat('Ayrton Senna', 'State Secratary'));
        this.chats = _tst_chatArr
      }
    )
  }

  _tst_getChat(arg0: string, arg1: string) {
    let c = new Chat
    c.name = arg0,
      c.designation = arg1
    return c
  }

  changeTab(tabName: string) {
    this.tab = tabName
  }

  showChat(chat: Chat): void {
    this.router.navigate(['tabs/chat'])
  }
}

class Circular {
  title: string
  publisher: number
  content: string
  actions: []
}

class Chat {
  name: string
  designation: string
}