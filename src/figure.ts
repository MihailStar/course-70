import { Point } from './point.js';

export abstract class Figure {
  protected points: Point[];

  public constructor() {
    this.points = [];
  }

  public draw(): this {
    for (let index = 0; index < this.points.length; index += 1) {
      const point = this.points[index];

      point.draw();
    }

    return this;
  }

  public match(point: Point): boolean;
  public match(figure: Figure): boolean;
  public match(pointOrFigure: Point | Figure): boolean {
    if (pointOrFigure instanceof Point) {
      for (let index = 0; index < this.points.length; index += 1) {
        const point = this.points[index];
        const isMatch = point.match(pointOrFigure);

        if (isMatch) {
          return true;
        }
      }

      return false;
    }

    for (let index = 0; index < pointOrFigure.points.length; index += 1) {
      const isMatch = this.match(pointOrFigure.points[index]);

      if (isMatch) {
        return true;
      }
    }

    return false;
  }
}
