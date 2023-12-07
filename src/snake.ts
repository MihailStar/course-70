import type { Direction } from './direction.js';
import { Figure } from './figure.js';
import { Point } from './point.js';

export class Snake extends Figure {
  public direction: Direction;

  public constructor(tail: Point, length: number, direction: Direction) {
    super();

    for (let index = 0; index < length; index += 1) {
      const newHead = Point.clone(tail).move(index, direction);

      this.points.push(newHead);
    }

    this.direction = direction;
  }

  public get head(): Point {
    const head = this.points[this.points.length - 1];

    return head;
  }

  public crawl(): this {
    this.points.shift()!.clear();
    this.points.push(this.getNextHead().draw());

    return this;
  }

  public eat(food: Point): boolean {
    const nextHead = this.getNextHead();

    if (nextHead.match(food)) {
      this.points.push(nextHead.draw());

      return true;
    }

    return false;
  }

  public isOuroboros(): boolean {
    for (let index = 0; index < this.points.length - 1; index += 1) {
      const point = this.points[index];
      const isMatch = point.match(this.head);

      if (isMatch) {
        return true;
      }
    }

    return false;
  }

  private getNextHead(): Point {
    const nextHead = Point.clone(this.head).move(1, this.direction);

    return nextHead;
  }
}
