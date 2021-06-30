// Boolean != boolean`

// ==>  Example 1
const taskCompleted: boolean = true;
const pendingTask: boolean = false;

// ==>  Example 2 
function markCompleted(isCompleted: boolean): string {

    if (!isCompleted) {

        return `Task is still not completed TaskcCompleted: ${isCompleted}`;

    } else {
        return `Task is completed! Congratulations.  TaskcCompleted: ${isCompleted}`;
    }

}

console.log(markCompleted(taskCompleted));