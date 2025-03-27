export class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }

  add(value: number): void {
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  length(): number {
    return 1 + (this.left?.length() || 0) + (this.right?.length() || 0);
  }
}
