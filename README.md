# Express REST API Example

This is a simple example of a RESTful API built with Express.js. The API allows basic CRUD (Create, Read, Update, Delete) operations on a set of resources.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/caeforga/express-rest-api.git
   cd express-rest-api
2. Install dependencies:
   ```sh
   npm install ó
   npm i
## Usage

1. Start the server:
   ```
   npm run dev
2. The API will be running at 'http://localhost:3000'.

## Routes

### Get All Items
- URL: /items
- Method: GET
- Description: Retrieves a list of all items.
- Response
  ```json
  [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description for item 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "Description for item 2"
    }
  ]

### Get Item by ID
- URL: /items/:id
- Method: GET
- Description: Retrieves a specific item by ID.
- Response:

  ```json
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description for item 1"
  }

### Create New Item
- URL: /items
- Method: POST
- Description: Creates a new item.
- Request Body:
  ```json
  {
  "name": "New Item",
  "description": "Description for the new item"
  }
- Response:
  ```json
  {
  "id": 3,
  "name": "New Item",
  "description": "Description for the new item"
  }

### Update Item
- URL: /items/:id
- Method: PUT
- Description: Updates an existing item by ID.
- Request Body:
  ```json
  {
    "name": "Updated Item",
    "description": "Updated description for the item"
  }
- Response:
  ```json
  {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description for the item"
  }

### Delete Item
- URL: /items/:id
- Method: DELETE
- Description: Deletes an item by ID.
- Response:
  ```json
  {
    "message": "Item deleted successfully"
  }
