## Features

- Get all user tasks
- Remove task

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```


### Install Dependencies

```
npm install
```

### Run

```

# Run backend (:5000)
npm run dev

```

## Build & Deploy

```
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and tasks as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com
123456

josh@email.com
123456
```

---