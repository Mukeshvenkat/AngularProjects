import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingredient: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredient = ingredient;
    }
}