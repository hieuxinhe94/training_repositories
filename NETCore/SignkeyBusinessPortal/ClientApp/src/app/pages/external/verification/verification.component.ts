import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'sk-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  transactionId: string;
  uId: string;
  email: string;
  constructor(private profileService: ProfileService, private route: ActivatedRoute) {
    this.transactionId = this.route.snapshot.queryParams.transactionId;
    this.uId = this.route.snapshot.queryParams.uid;
    this.email = this.route.snapshot.queryParams.email;
  }

  ngOnInit(): void {
      this.profileService.VerifedEmail(this.transactionId, this.uId, this.email).subscribe();
  }

}
