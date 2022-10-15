# Nodejs ClickUp
Node ClickUp is a Node.js Wrapper for ClickUp API

---

# Functions / Exports
- [createTask](#createTask)
- [deleteTask](#deleteTask)
- [commentOnTask](#commentOnTask)
- [updateTask](#updateTask)

---

# createTask
Creates a task in a list.
```js
    const ClickUp = require('node-clickup');
    const client = new ClickUp('<YOUR_TOKEN_HERE>');

    let data = await client.createTask('<LIST_ID_HERE>', {
      name: 'Task Name Here',
      description: 'Task Description Here'
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Create Task](https://clickup.com/api/clickupreference/operation/CreateTask/)

# deleteTask
Delete a task in a list.
```js
    const ClickUp = require('node-clickup');
    const client = new ClickUp('<YOUR_TOKEN_HERE>');

    let data = await client.deleteTask('<TASK_ID_HERE>');

    console.log(data)
```

# commentOnTask
Comment on a task.
```js
    const ClickUp = require('node-clickup');
    const client = new ClickUp('<YOUR_TOKEN_HERE>');

    let data = await client.commentOnTask('<TASK_ID_HERE>', {
        comment_text: 'Task comment coasdntent'
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Create Task Comment](https://clickup.com/api/clickupreference/operation/CreateTaskComment/)


# updateTask
Update a task.
```js
    const ClickUp = require('node-clickup');
    const client = new ClickUp('<YOUR_TOKEN_HERE>');

    let data = await client.updateTask('<TASK_ID_HERE>', {
        name: 'Updated Task Name',
        description: 'Updated Task Description'
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Update Task](https://clickup.com/api/clickupreference/operation/UpdateTask/)

---

More coming soon!