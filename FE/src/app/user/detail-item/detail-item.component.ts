import { ValidateService } from './../../shared/services/helpers/validate.service';
import { CallApiService } from './../../shared/services/call-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  data;
  id;
  formDetails: FormGroup;
  formErrors = {
    title: '',
    description: ''
  };
  errMess = {
    title: { required: 'You Must Enter This Field' },
    description: { required: 'You Must Enter This Field' }
  };
  constructor(
    private route: ActivatedRoute,
    private callApi: CallApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.params['value'].id;
    this.callApi.getDetail(this.id).subscribe(res => {
      this.data = res;
      this.setValue(res);
    }, err => {
      alert(err.message);
    });
    this.createForm();
  }

  setValue(data) {
    this.formDetails.get('title').setValue(data.title);
    this.formDetails.get('description').setValue(data.description);
  }

  createForm() {
    this.formDetails = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.formDetails.valueChanges.subscribe(() => {
      this.validateService.getValidate(
        this.formDetails, this.errMess, this.formErrors
      );
    });
  }

  back() {
    this.router.navigate(['']);
  }

  update() {
    const body = {
      title: this.formDetails.value.title,
      description: this.formDetails.value.description,
    };
    this.callApi.editData(this.id, body).subscribe(res => {
      alert(`Edit Complete.
        Title: ${res['title']},
        Description: ${res['description']}
      `);
      location.reload();
    }, err => {
      alert(err.message);
    });
  }

}
