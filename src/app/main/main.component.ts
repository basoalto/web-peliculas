import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  movies: any[] = [];
  series: any[] = [];

  filteredMovies: any[] = [];
  filteredSeries: any[] = [];

  searchText: string = '';
  selectedItem: any = null;

  constructor(private service: AuthService, private router: Router) {}

  async ngOnInit() {
    this.movies = await this.service.peliculasRecientes();
    this.series = await this.service.seriesRecientes();
    this.filteredMovies = this.movies;
    this.filteredSeries = this.series;
    console.log(this.filteredSeries)
    console.log(this.filteredMovies)
  }

  search() {
    this.filteredMovies = this.movies.filter(movie => this.matchSearchText(movie.title, movie.overview));
    this.filteredSeries = this.series.filter(serie => this.matchSearchText(serie.name, serie.overview));
  }

  matchSearchText(title: string, overview: string): boolean {
    const searchText = this.searchText.toLowerCase();
    return title.toLowerCase().includes(searchText) || overview.toLowerCase().includes(searchText);
  }

  showDetails(item: any) {
    this.selectedItem = item;
    this.router.navigate(['detalle'],{
      queryParams: { item:  JSON.stringify(this.selectedItem)}, 
    });
  }
}
