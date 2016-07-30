import {Component, OnInit} from '@angular/core';
 import { bootstrap } from '@angular/platform-browser-dynamic';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {CanDeactivate, Router, RouteParams} from '@angular/router-deprecated';

import {BasicValidators} from '../shared/basicValidators';
import {MovieInfo} from './movieInfo';
import {MovieConfigService} from './movieconfig.service';

@Component({
  moduleId: module.id,
  selector: 'movie-config-app',
  templateUrl: 'movieconfig.component.html',  
  providers: [MovieConfigService]
})
export class MovieConfigComponent implements OnInit, CanDeactivate {
	form: ControlGroup;
    title: string;
    MovieInfo = new MovieInfo();

     constructor(
          fb: FormBuilder,
         private _service: MovieConfigService){
            this.form = fb.group({
			title: ['', Validators.required],
			year: ['', Validators.required],
		    youtubeId: ['', Validators.required],
			youtubeUrl: ['', Validators.required], 
            trailerrating : ['', Validators.required],
            synposis: ['', Validators.required],
			casts: ['', Validators.required],
            directors: ['', Validators.required],
			trailerReleaseDate: ['', Validators.required],
            movieReleaseDate: ['', Validators.required],
			packshotPosterUrl: ['', Validators.required],
            landscapePosterUrl: ['', Validators.required],
		});
	}
 
    
    ngOnInit(){
        this.title = 'Movie Details';
    }
    
    routerCanDeactivate(){
		if (this.form.dirty)
			return confirm('You have unsaved changes. Are you sure you want to navigate away?');

		return true; 
	}
    save(){
        var result;
        alert(this.title);
       result = this._service.addMovieConfig(this.MovieInfo);
        
	}
     
}