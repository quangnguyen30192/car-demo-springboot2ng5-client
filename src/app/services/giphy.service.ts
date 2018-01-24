import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

  giphyApi = "//api.giphy.com/v1/gifs/search?api_key=oN19Fj5DhceQevULNCDAZbMOUDtqapII&limit=1&q=";

  constructor(private http: HttpClient) {

  }

  searchImg(keyWord: string): Observable<string> {
    let searchApi = this.giphyApi + keyWord;
    return this.http.get(searchApi).map((response: any) => {
      if (response.data.length > 0) {
        return response.data[0].images.original.url;
      } else {
        return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif';
      }
    });
  }

}
