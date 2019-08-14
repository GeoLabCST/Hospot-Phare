import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      const notificationOpenedCallback = (jsonData) => {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window['plugins'].OneSignal
        .startInit('c2732646-0e7a-4ea3-a53c-9409d2cfda7d', 'project-543437587024')
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
