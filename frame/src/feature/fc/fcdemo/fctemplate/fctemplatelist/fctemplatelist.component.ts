

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SyseditpasswordComponent } from '../../../../../app/components/dialog/syseditpassword.dialog';
import { NzModalService } from 'ng-zorro-antd';
import { FcRegistrySensorComponent } from '../sensorRegistry/sensorregistry.dialog';

@Component({
    selector: 'fc-templatelist',
    templateUrl: './fctemplatelist.component.html',
    styles: [
        `
        .fc-searchbar-item {
            display: flex;
            flex-direction: row;
        }
        .fc-searchbar-label {
            width: 25%;
            text-align: right;
            padding-right: 10px;
            line-height: 32px;
        }
        .fc-searchbar-control {
            width: 75%;
        }
    `
    ]
})
export class FctemplatelistComponent implements OnInit {
    listOfData: any[] = [];
    validateForm: FormGroup;
    controlArray: any[] = [];
    isCollapse = true;
    searchObj = {
      name: '',
      img: '',
      type: '',
      description:''
    }
    constructor(public router: Router, public activedRoute: ActivatedRoute, public modalService: NzModalService,
    ) { }
    //数据绑定循环添加测试数据
    ngOnInit(): void {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King ${i}`,
                img: 32,
                type: `London, Park Lane no. ${i}`,
                description:'123123'
            });
        }
    }

  sensorRegistry() {
    const modal = this.modalService.create({
      nzTitle: '注册传感器',
      nzContent: FcRegistrySensorComponent,
      nzWrapClassName: 'registrysensor-dialog-wrap',
      nzComponentParams: {
        tableName: 'tableName',
        sensorName: 'sensorName',
        function: 'function',
        type: 'type',
        description: 'description',
      },
      nzFooter: null
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
    setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.function = 'passWord is changed';
    }, 2000);
  }
}
