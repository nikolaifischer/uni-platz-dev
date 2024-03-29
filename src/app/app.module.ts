import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UniApp } from './app.component';
import { BuildingDetailsPage } from '../pages/building-details/building-details';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RoomListPage} from "../pages/room-list/room-list";
import {RoomDetailsPage} from "../pages/room-details/room-details";
import { IonicStorageModule } from '@ionic/storage';
import {FavoritesPage} from "../pages/favorites/favorites";
import {HelpPage} from "../pages/help/help";
import {AboutPage} from "../pages/about/about";
import {LicencesPage} from "../pages/about/licences";
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    UniApp,
    BuildingDetailsPage,
    ListPage,
    RoomListPage,
    RoomDetailsPage,
    FavoritesPage,
    HelpPage,
    AboutPage,
    LicencesPage
  ],
  imports: [
    IonicModule.forRoot(UniApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UniApp,
    ListPage,
    BuildingDetailsPage,
    RoomListPage,
    RoomDetailsPage,
    FavoritesPage,
    HelpPage,
    AboutPage,
    LicencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
