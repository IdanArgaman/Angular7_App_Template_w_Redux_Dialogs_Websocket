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

    customers = [{
        'ID': 1,
        'CompanyName': 'Super Mart of the West',
        'Address': '702 SW 8th Street',
        'City': 'Bentonville',
        'State': 'Arkansas',
        'Zipcode': 72716,
        'Phone': '(800) 555-2797',
        'Fax': '(800) 555-2171',
        'Website': 'http://www.nowebsitesupermart.com'
    }, {
        'ID': 2,
        'CompanyName': 'Electronics Depot',
        'Address': '2455 Paces Ferry Road NW',
        'City': 'Atlanta',
        'State': 'Georgia',
        'Zipcode': 30339,
        'Phone': '(800) 595-3232',
        'Fax': '(800) 595-3231',
        'Website': 'http://www.nowebsitedepot.com'
    }];

    constructor(private store: AppStore) {

    }

    get state() {
        return this.store.getState();
    }
}
