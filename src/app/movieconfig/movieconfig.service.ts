import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire} from 'angularfire2';

@Injectable()
export class MovieConfigService {
	private _url = "http://jsonplaceholder.typicode.com/users";
	  
	constructor(private _af: AngularFire){
		//this.trailers = _af.database.object('/trailers');
	}
    
    addMovieConfig(movieInfo){
        alert(JSON.stringify(movieInfo));
		const itemObservable = this._af.database.object('/trailers');
		itemObservable.update({ "4": movieInfo });
	}   
    
}