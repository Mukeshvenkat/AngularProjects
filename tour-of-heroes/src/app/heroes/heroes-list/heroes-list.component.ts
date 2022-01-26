import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }
  heroesList: Hero[];

  ngOnInit(): void {
    this.heroesList = this.heroesService.getHeroes();
  }

}
