import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieConfigService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http){
	}
    
    addMovieConfig(movieInfo){
        alert(JSON.stringify(movieInfo));
		return this._http.post(this._url, JSON.stringify(movieInfo))
			.map(res => res.json());
	}   
    
}