import { Injectable } from "@angular/core";
import { Hero } from "./hero.model";

@Injectable()
export class HeroesService {
    heroes: Hero[] = [
        new Hero(11, 'Dr Nice'),
        new Hero(12, 'Narco'),
        new Hero(13, 'Bombasto'),
        new Hero(14, 'Celeritas'),
        new Hero(15, 'Magneta'),
        new Hero(16, 'RubberMan'),
        new Hero(17, 'Dynama'),
        new Hero(18, 'Dr IQ'),
        new Hero(19, 'Magma'),
        new Hero(20, 'Tornado')
    ];

    getHeroes() {
        return this.heroes.slice();
    }

    getTopHeroes() {
        const topHeroes = this.heroes.slice();
        return topHeroes.splice(0, 4);
    }

    getHero(index: number) {
        return this.heroes[index];
    }
}