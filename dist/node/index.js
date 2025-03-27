export class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    add(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            }
            else {
                this.left = new Node(value);
            }
        }
        else {
            if (this.right) {
                this.right.add(value);
            }
            else {
                this.right = new Node(value);
            }
        }
    }
    length() {
        var _a, _b;
        return 1 + (((_a = this.left) === null || _a === void 0 ? void 0 : _a.length()) || 0) + (((_b = this.right) === null || _b === void 0 ? void 0 : _b.length()) || 0);
    }
}
