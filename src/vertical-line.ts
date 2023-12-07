import { Figure } from './figure.js';
import { Point } from './point.js';

export class VerticalLine extends Figure {
  public constructor(yTop: number, yBottom: number, x: number, symbol: string) {
    super();

    for (let y = yTop; y <= yBottom; y += 1) {
      const newPoint = new Point(x, y, symbol);

      this.points.push(newPoint);
    }
  }
}
