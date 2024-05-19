## Features

- Get all user tasks
- Remove task
- Mark task as completed

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```


### Install Dependencies

```
npm install
```

### Run

```

# Run backend (:8080)
npm run dev

```

## Build & Deploy

```
npm run build
```


```
Sample User Logins

admin@email.com
123456

josh@email.com
123456
```

---