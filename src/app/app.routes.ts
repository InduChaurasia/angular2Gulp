import { AddMemberComponent }      from './add.member.component';
import { AppComponent } from './app.component';
import {Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'addMember',
        component: AddMemberComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
