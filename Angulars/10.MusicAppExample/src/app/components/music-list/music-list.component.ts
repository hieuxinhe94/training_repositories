import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  data: any;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.initRecent();
  }

  // binding recent songs
  initRecent() {
    this.musicService.getRecentSongs('Ha Noi')
      // chuyển obversable về promise.
      .toPromise()
      // Thành công
      .then((res) => {
        debugger;
        this.data = res.main;
        console.log(this.data);
      })
      // Có lỗi gì đó xãy ra
      .catch((err) => {
        console.log(err);
      })
      // Cuối cùng thì làm gì
      .finally(() => {
        console.log('Request has closed.');
      });
  }

}
