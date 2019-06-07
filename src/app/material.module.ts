import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSelectModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSelectModule
    ]
})
export class MaterialModule {}
