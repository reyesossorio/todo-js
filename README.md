# Another simple ToDo App

The purporse of this simple task is to teach myself node.js and express.js in the most simple way known to developers.

# Tech stack

- Runtime: node.js
- Framework: express.js
- Database: in-memory

# Configuration and folder structure

```
/project-root
├── src/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── utils/
├── package.json
└── .env
```

# API endpoints

- GET /todos — list all todos

- GET /todos/:id — get a single todo

- POST /todos — create a new todo

- PUT /todos/:id — update an existing todo

- DELETE /todos/:id — remove a todo

# Model

```
Task
├── id (integer, primary key)
├── title (string)
├── description (string, optional)
├── status (enum or string: 'pending', 'done')
└── created_at (timestamp)
```
