import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
// import { routes } from './app/app.routes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})

export class AppComponent{
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

};

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     importProvidersFrom(IonicModule.forRoot({}), HttpClientModule),
//     provideRouter(routes),
//   ],
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

// if (environment.production) {
//   enableProdMode();
// }

