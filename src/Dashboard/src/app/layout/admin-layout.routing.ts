import { Routes } from '@angular/router';

import { DashboardComponent } from '../Pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../Pages/user-profile/user-profile.component';
import { TableListComponent } from '../Pages/table-list/table-list.component';
import { TypographyComponent } from '../Pages/typography/typography.component';
import { IconsComponent } from '../Pages/icons/icons.component';
import { MapsComponent } from '../Pages/maps/maps.component';
import { NotificationsComponent } from '../Pages/notifications/notifications.component';
import { UpgradeComponent } from '../Pages/upgrade/upgrade.component';
import { CateforyComponent } from '../pages/cadastro/catefory/catefory.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'categoria', component: CateforyComponent },
];
