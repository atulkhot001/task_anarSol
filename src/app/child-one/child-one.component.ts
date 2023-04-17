import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy {
  $Obs = new Subject()
  constructor(private dataServ: DataServiceService) { }
  dataArr: any = [];
  ngOnInit(): void {
    this.dataServ.getData().pipe(takeUntil(this.$Obs)).subscribe(
      {
        next: ((data) => {
          this.dataArr = data;
          // console.log(data)
        }),
        error: ((err: any) => {
          console.log(err.message.message)
        })
      }
    )
  }
  onClick(data: any) {
    let status = this.dataArr[data.id - 1]
    status.completed = !status.completed ? true : false;
  }
  ngOnDestroy() {
    this.$Obs.next('');
    this.$Obs.complete();
  }
}