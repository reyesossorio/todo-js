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

- GET /task — list all todos

- GET /task/:id — get a single todo

- POST /task — create a new todo

- PATCH /task/:id — update an existing todo

- DELETE /task/:id — remove a todo

# Model

```
Task
├── id (integer, primary key)
├── title (string)
├── description (string, optional)
├── status (enum or string: 'pending', 'done')
└── created_at (timestamp)
```
