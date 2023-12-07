import { Figure } from './figure.js';
import { Point } from './point.js';

export class HorizontalLine extends Figure {
  public constructor(xLeft: number, xRight: number, y: number, symbol: string) {
    super();

    for (let x = xLeft; x <= xRight; x += 1) {
      const newPoint = new Point(x, y, symbol);

      this.points.push(newPoint);
    }
  }
}
