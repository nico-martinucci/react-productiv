import sample from "lodash/sample";

function getTopTodo(todos) {
    let highestPriority = [];

    for (let p of [1, 2, 3]) {
        highestPriority = todos.filter(t => t.priority === p);
        if (highestPriority.length > 0) break;
    }

    return sample(highestPriority);
}

export { getTopTodo };