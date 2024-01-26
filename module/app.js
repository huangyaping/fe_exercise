import { TodoItem } from "./TodoItem.js"

const tl = [
    new TodoItem('write requirement document'),
    new TodoItem('isolate nouns'),
];

for (const item of tl) {
    console.log(item);
}