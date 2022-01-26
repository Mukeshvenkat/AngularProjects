import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroes = this.heroesService.getTopHeroes();
  }
}
