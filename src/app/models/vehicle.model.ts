import { Category } from './category-enum';

export class VehicleModel {
    id: string;
    name: string;
    url: string;
    tags: string[];
    category: Category;
    selected: boolean = true;
}