import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'sk-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  close = false;

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  openProfileSetup() {
    const modal =  this.modalService.create({
      nzTitle: '',
      nzContent: EditProfileComponent,
      nzWidth: 600
    });
  }
}
