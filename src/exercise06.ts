export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  public size(): number {
    return this.items.length;
  }
}
