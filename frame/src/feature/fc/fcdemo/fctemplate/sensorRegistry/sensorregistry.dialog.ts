
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
@Component({
  selector: 'sys-sensorregistry',
  templateUrl: './sensorregistry.dialog.html',
  styles: [`
  ::ng-deep .registrysensor-dialog-wrap .ant-modal-body{
    padding: 16px 0 0;
  }
  ::ng-deep .registrysensor-dialog .edituser-dialog-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 16px 10px 10px;
    text-align: right;
    border-radius: 0 0 4px 4px;
  }
  `]
})
export class FcRegistrySensorComponent implements OnInit {
  //
  validateForm: FormGroup;
  @Input()
  tableName: string;
  @Input()
  sensorName: string;
  @Input()
  function: string;
  @Input()
  type: string;
  @Input()
  description: string;
  // 用户信息
  userInfo: any;

  constructor(private fb: FormBuilder, private subject: NzModalRef,
  ) { }
  ngOnInit(): void {
    // 表单验证
    this.validateForm = this.fb.group({
      tableName :  [null, [Validators.required]],
      sensorName:  [null, [Validators.required]],
      function:  [null, [Validators.required]],
      type:  [null, [Validators.required]],
    });
  }
  getFormControl(name) {
    return this.validateForm.controls[name];
  }
  handleOk() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    //提交请求
  }
  handleCancel() {
    this.subject.destroy('onCancel');
  }

}
