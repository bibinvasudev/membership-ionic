import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit, OnDestroy {
    backButtonPressSubscription: Subscription;

    constructor(private platform: Platform) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        this.subscribeToBackButtonPress();
    }
    
    ngOnDestroy(): void {
        this.backButtonPressSubscription.unsubscribe();
    }

    private subscribeToBackButtonPress() {
        this.backButtonPressSubscription = this.platform.backButton.asObservable().subscribe($ => {
            navigator['app'].exitApp();
        });
    }
}
