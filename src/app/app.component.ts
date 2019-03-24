import {
    Component,
} from '@angular/core';
import { AppStore } from './store/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'StoreApp';

    constructor(private store: AppStore) {

    }

    get state() {
        return this.store.getState();
    }
}
