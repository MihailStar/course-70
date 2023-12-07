import { getRandomInt } from './get-random-int.js';
import { Point } from './point.js';

export class FoodCreator {
  private mapWidth: number;
  private mapHeight: number;
  private symbol: string;

  public constructor(width: number, height: number, symbol: string) {
    this.mapWidth = width;
    this.mapHeight = height;
    this.symbol = symbol;
  }

  public create(): Point {
    const x = getRandomInt(2, this.mapWidth - 1);
    const y = getRandomInt(2, this.mapHeight - 1);
    const newFood = new Point(x, y, this.symbol);

    return newFood;
  }
}
