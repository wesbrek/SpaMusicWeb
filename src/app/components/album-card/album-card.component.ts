import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html'
})
export class AlbumCardComponent implements OnInit {

  @Input() album: any = {};
  @Input() index: number;

  @Output() albumSelected: EventEmitter<number>;

  constructor(private _router: Router) {
      this.albumSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  
  verAlbum(){
    this._router.navigate( ['/album', this.index] )
     // this.albumSelected.emit( this.index );
    }

}
