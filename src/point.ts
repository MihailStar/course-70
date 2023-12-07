import { Console } from './console.js';
import { Direction } from './direction.js';

export class Point {
  public x: number;
  public y: number;
  private symbol: string;

  public constructor(x: number, y: number, symbol: string) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
  }

  public static clone(point: Point): Point {
    const newPoint = new this(point.x, point.y, point.symbol);

    return newPoint;
  }

  public clear(): this {
    this.symbol = ' ';
    this.draw();

    return this;
  }

  public draw(): this {
    Console.setCursorPosition(this.x, this.y);
    Console.write(this.symbol);

    return this;
  }

  public match(point: Point): boolean {
    const isMatch = this.x === point.x && this.y === point.y;

    return isMatch;
  }

  /** @throws {RangeError} */
  public move(offset: number, direction: Direction): this {
    switch (direction) {
      case Direction.TOP:
        this.y -= offset;
        break;
      case Direction.RIGHT:
        this.x += offset;
        break;
      case Direction.BOTTOM:
        this.y += offset;
        break;
      case Direction.LEFT:
        this.x -= offset;
        break;
      default:
        throw new RangeError();
    }

    return this;
  }
}
