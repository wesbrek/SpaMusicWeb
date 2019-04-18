import { Component, OnInit } from '@angular/core';
import { Album, AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: []
})
export class SearcherComponent implements OnInit {

  albumsFounded: Album[] = [];
  search: string;

  constructor(private _activdatedroute: ActivatedRoute, private _albumsService: AlbumsService) {


  }

  ngOnInit() {
    this._activdatedroute.params.subscribe(params => {
      this.albumsFounded = this._albumsService.searchAlbums(params['string'])
      this.search = params['string'];
    });
  }

}
