import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {

  album:any = {};


  constructor( private _activdatedroute:ActivatedRoute, private _albumService :AlbumsService ) {

    this._activdatedroute.params.subscribe( params => {
      this.album = this._albumService.getAlbum( params ['id']);
    })

   }



}
