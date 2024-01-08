# Ghotok Web App
Built with Express, Typescript and MongoDB. We tried to implement OOP concepts to build this.

## Server API
| Function | Route | Method | Payload |
| ---------|----------|----------|--- |
| Sign up | `http://localhost:300/v1/api/auth/signup` | POST | `{ "email", "username", "password", "contact_no", "gender" }` |
| Login | `http://localhost:3000/v1/api/auth/login` | POST | `{"email", "password"}` |
| Update User | `http://localhost:3000/v1/api/user` | PUT |
| Delete User | `http://localhost:3000/v1/api/user` | DELETE |
| Search User | `http://localhost:3000/v1/api/search` | GET |
