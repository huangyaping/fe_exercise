function TodoItem(name) {
    this.name = name;
    this.isdone = false;
}

TodoItem.prototype.done = function() {
    this.isdone = true;
}

export {TodoItem};

export function sum(a, b) {
    return a+b;
}