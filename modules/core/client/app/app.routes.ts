import { ModuleWithProviders } from '@angular/core';
import { AppComponent }  from './components/app.component';
import { UserComponent }  from './components/user.component';
import {UIRouterModule} from "ui-router-ng2";
export const AppRoutes = [
    { name: 'xyz', url: '/xyz',  component: UserComponent },
    { name: 'about', url: '/about',  component: UserComponent  }
];
export const routing: ModuleWithProviders = UIRouterModule.forRoot({ states: [ AppRoutes ], useHash: false })
