"use strict";
// Boolean != boolean`
// ==>  Example 1
const taskCompleted = true;
const pendingTask = false;
// ==>  Example 2 
function markCompleted(isCompleted) {
    if (!isCompleted) {
        return `Task is still not completed TaskcCompleted: ${isCompleted}`;
    }
    else {
        return `Task is completed! Congratulations.  TaskcCompleted: ${isCompleted}`;
    }
}
console.log(markCompleted(taskCompleted));
