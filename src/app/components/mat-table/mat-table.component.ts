import { Component, OnInit, ViewChild,
    ChangeDetectorRef, Input } from '@angular/core';

import { MatTableDataSource, MatPaginator,
    MatSort, MatDialog } from '@angular/material';

import { EditItemDailogComponent } from '../dialogs/editItemDailog/editItemDailog.component';
import { IMaterialData } from '../../model/material.model';
import { AppStore } from '../../store/store';
import { MaterialActions } from '../../api/material.actions';

@Component({
    selector: 'app-mat-table',
    templateUrl: './mat-table.component.html',
    styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
    dataSource: MatTableDataSource < IMaterialData > ;

    @Input('data') set setData(v) {
        this.dataSource = new MatTableDataSource(v);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cd.detectChanges();
    }

    constructor(public dialog: MatDialog,
        private cd: ChangeDetectorRef,
        private store: AppStore) {}

    ngOnInit() {

    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(e) {
        const dialogRef = this.dialog.open(EditItemDailogComponent, {
            width: '250px',
            data: {
                material: {
                    name: e.name,
                    animal: e.weight
                }
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            this.store.dispatch({
                type: MaterialActions.SET_DATA,
                payload: { position: e.position, ...result }
            });
        });
    }
}
