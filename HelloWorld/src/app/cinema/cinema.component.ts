import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {News} from './news';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  private getNews$: Observable<News[]>;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getNews$ = this.movieService.getData();
  }
}
