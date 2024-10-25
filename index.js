class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
    }

    this.length = this.items.length;

    if (this.length < 3) {
      this.items.push(item);
    }
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items[0];
  }

  sum() {
    const sum = this.items.reduce((acc, curr) => acc + curr, 0);
    if (this.items.length === 0) {
      return 0;
    } else return sum;
  }

  avg() {
    const sum = this.items.reduce((acc, curr) => acc + curr, 0);

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.round(sum / this.items.length);
  }
}

module.exports = SortedList;
