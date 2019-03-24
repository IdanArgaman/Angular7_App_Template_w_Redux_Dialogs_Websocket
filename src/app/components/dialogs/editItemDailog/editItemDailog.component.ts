import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';


export interface DialogData {
  material: string;
}

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './editItemDailog.component.html',
  styleUrls: ['./editItemDailog.component.css']
})
export class EditItemDailogComponent implements OnInit {

  clone = null;

  constructor(public dialogRef: MatDialogRef < EditItemDailogComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.clone = JSON.parse(JSON.stringify(data));
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
