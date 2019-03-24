import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { appStoreProviders } from './store/store';

import * as Init from './services/appload.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorrelationInterceptor } from './services/corrleation.interceptor';
import { WebsocketConnectComponent } from './components/websocket-connect/websocket-connect.component';
import { EditItemDailogComponent } from './components/dialogs/editItemDailog/editItemDailog.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';

import { Material } from './imports/material';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent,
        WebsocketConnectComponent,
        EditItemDailogComponent,
        MatTableComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        DxDataGridModule,

        ...Material
    ],
    providers: [
        appStoreProviders,
        Init.AppLoadService,
        Init.AppConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: Init.get_settings,
            deps: [Init.AppLoadService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CorrelationInterceptor,
            multi: true
        }
    ],
    entryComponents: [EditItemDailogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
