export class Console {
  /** @tutorial https://stackoverflow.com/a/10830168 */
  public static setCursorPosition(left: number, top: number): void {
    process.stdout.write(`\x1b[${top};${left}H`);
  }

  public static write(str: string): void {
    process.stdout.write(str);
  }
}
