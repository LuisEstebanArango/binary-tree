class Node {
  constructor(content) {
    this._content = content
  }

  get content() {
    return this._second
  }

  set content(content) {
    this._content = content
  }

  get left() {
    return this.left
  }

  set left(left) {
    this._left = left
  }

  get right() {
    return this.right
  }

  set right(right) {
    this._right = right
  }

  add(newContent) {
    if (this._content >=  newContent) {
      if (this._left) {
        this._left.add(newContent)
      } else {
        this._left = new Node(newContent)
      }
    } else {
      if (this._right) {
        this._right.add(newContent)
      } else {
        this._right = new Node(newContent)
      }
    }
  }
}

export { Node }