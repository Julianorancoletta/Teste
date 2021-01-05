import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../Pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../Pages/user-profile/user-profile.component';
import { TableListComponent } from '../Pages/table-list/table-list.component';
import { TypographyComponent } from '../Pages/typography/typography.component';
import { IconsComponent } from '../Pages/icons/icons.component';
import { MapsComponent } from '../Pages/maps/maps.component';
import { NotificationsComponent } from '../Pages/notifications/notifications.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../Pages/upgrade/upgrade.component';
import { CateforyComponent } from '../Pages/cadastro/catefory/catefory.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ChartsModule,
    NgbModule,
    ComponentsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CateforyComponent
  ]
})

export class AdminLayoutModule {}
