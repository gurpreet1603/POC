import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchPipe } from 'src/app/search.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchPipe
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    FormsModule,


  ]
})
export class DashboardModule { }
