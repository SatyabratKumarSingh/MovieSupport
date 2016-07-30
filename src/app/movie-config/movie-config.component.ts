import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {CanDeactivate, Router, RouteParams} from '@angular/router-deprecated';

import {BasicValidators} from '../shared/basicValidators';
import {MovieInfo} from './movie-config';
import {MovieConfigService} from './movie-config.service';

@Component({
    selector: 'movie-config-app',
    templateUrl: 'app/movie-config/movie-config.component.html',    
    providers: [MovieConfigService],
    directives: [RouterLink]
     
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