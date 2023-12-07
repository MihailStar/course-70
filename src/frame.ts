import { HorizontalLine } from './horizontal-line.js';
import type { Point } from './point.js';
import { VerticalLine } from './vertical-line.js';

export class Frame {
  /** top, right, bottom, left */
  private lines: [HorizontalLine, VerticalLine, HorizontalLine, VerticalLine];

  public constructor(width: number, height: number, symbol: string) {
    this.lines = [
      new HorizontalLine(1, width, 1, symbol),
      new VerticalLine(1, height, width, symbol),
      new HorizontalLine(1, width, height, symbol),
      new VerticalLine(1, height, 1, symbol),
    ];
  }

  public draw(): this {
    for (let index = 0; index < this.lines.length; index += 1) {
      const line = this.lines[index];

      line.draw();
    }

    return this;
  }

  public match(point: Point): boolean {
    for (let index = 0; index < this.lines.length; index += 1) {
      const line = this.lines[index];
      const isMatch = line.match(point);

      if (isMatch) {
        return true;
      }
    }

    return false;
  }
}
