import type { Key } from 'node:readline';
import readline from 'node:readline';
import { Console } from './console.js';
import { Direction } from './direction.js';
import { FoodCreator } from './food-creator.js';
import { Frame } from './frame.js';
import { Point } from './point.js';
import { Snake } from './snake.js';

class SnakeGame {
  public static run(): void {
    const width = 72;
    const height = 24;
    const frame = new Frame(width, height, '+');
    const snake = new Snake(new Point(4, 5, '*'), 4, Direction.RIGHT);
    const foodCreator = new FoodCreator(width, height, '$');
    let food = foodCreator.create();

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);

    function exit(): void {
      Console.setCursorPosition(1, height);
      // eslint-disable-next-line n/no-process-exit
      process.exit();
    }

    process.stdin.on('keypress', (_chunk: string | undefined, key: Key) => {
      switch (key.name) {
        case 'up':
          snake.direction = Direction.TOP;
          break;
        case 'right':
          snake.direction = Direction.RIGHT;
          break;
        case 'down':
          snake.direction = Direction.BOTTOM;
          break;
        case 'left':
          snake.direction = Direction.LEFT;
          break;
        case 'c':
          if (key.ctrl) {
            exit();
          }
          break;
        default:
          break;
      }
    });

    frame.draw();
    snake.draw();
    food.draw();

    setInterval(() => {
      if (frame.match(snake.head) || snake.isOuroboros()) {
        exit();
      }

      if (snake.eat(food)) {
        food = foodCreator.create().draw();

        return;
      }

      snake.crawl();
    }, 200);
  }
}

SnakeGame.run();
