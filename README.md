## API Design Table

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | /api/assignments      | Get list of all assignments          |
| GET    | /api/assignments/{id} | Get details of a specific assignment |
| POST   | /api/assignments      | Add a new assignment                 |
| PUT    | /api/assignments/{id} | Update an existing assignment        |
| DELETE | /api/assignments/{id} | Delete an assignment                 |

## Example Assignment Object

```json
{
  "id": 1,
  "title": "Math homework",
  "subject": "Math",
  "dueDate": "2026-03-10"
}