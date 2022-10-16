# Nodejs ClickUp
Node ClickUp is a Node.js Wrapper for ClickUp API

---

# Functions / Exports
- [createTask](#createTask)
- [deleteTask](#deleteTask)
- [commentOnTask](#commentOnTask)
- [updateTask](#updateTask)
- [getTask](#getTask)
- [getTasks](#getTasks)

---

Initialise Package:
```js
    const ClickUp = require('node-clickup');
    const client = new ClickUp('<YOUR_TOKEN_HERE>');
```
To get your token look [here](#getting-clickup-token).

---

# createTask
Creates a task in a list.
```js
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
    let data = await client.deleteTask('<TASK_ID_HERE>');

    console.log(data)
```

# commentOnTask
Comment on a task.
```js
    let data = await client.commentOnTask('<TASK_ID_HERE>', {
        comment_text: 'Task comment coasdntent'
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Create Task Comment](https://clickup.com/api/clickupreference/operation/CreateTaskComment/)


# updateTask
Update a task.
```js
    let data = await client.updateTask('<TASK_ID_HERE>', {
        name: 'Updated Task Name',
        description: 'Updated Task Description'
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Update Task](https://clickup.com/api/clickupreference/operation/UpdateTask/)

# getTask
Get a task by task id.
```js
    let data = await client.getTask('<TASK_ID_HERE>', <include_subtasks?>);

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Get Task](https://clickup.com/api/clickupreference/operation/GetTask/)

# getTasks
get tasks from list id.
```js
    let data = await client.updateTask('<LIST_ID_HERE>', {
        <INSERT_FILTERS_HERE>
    });

    console.log(data)
```
For more info on what you can pass into the second param, head to this site => [ClickUp API Refrence - Get Tasks](https://clickup.com/api/clickupreference/operation/GetTasks/)

---

# Knowledge Base

#### Getting ClickUp Token

- Open the ClickUp dashboard.
- Click on your profile icon in the bottom left.
- Click on Apps under your user profile.
- Copy your API token it should start with *pk*
![API TOKEN PICTURE](https://cdn.shawnengmann.com/shawn/LdsOJJ.png)

---

More coming soon!