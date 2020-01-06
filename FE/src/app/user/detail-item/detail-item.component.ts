import { CallApiService } from './../../shared/services/call-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  data;
  constructor(
    private route: ActivatedRoute,
    private callApi: CallApiService,
    private router: Router
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id = this.route.params['value'].id;
    this.callApi.getDetail(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  back() {
    this.router.navigate(['']);
  }

}
