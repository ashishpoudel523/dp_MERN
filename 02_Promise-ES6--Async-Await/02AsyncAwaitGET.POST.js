// const express = require("express");
// const bodyParser = require("body-parser");
// const axios = require("axios");


// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// // Create a new user
// app.post("/api/users", async (req, res) => {
//   try {
//     const response = await axios.post(API_URL, req.body);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });


// // Read all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const response = await axios.get(API_URL);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Read a single user
// app.get("/api/users/:id", async (req, res) => {
//   try {
//     const response = await axios.get(`${API_URL}/${req.params.id}`);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Update a user
// app.put("/api/users/:id", async (req, res) => {
//   try {
//     const response = await axios.put(`${API_URL}/${req.params.id}`, req.body);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Delete a user
// app.delete("/api/users/:id", async (req, res) => {
//   try {
//     await axios.delete(`${API_URL}/${req.params.id}`);
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//
//
//
//
//
//
//
//
//
//

//
///
///
//
////
///
///
///Backend API
// Create a new contact
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post("/api/contacts", async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const query =
      "INSERT INTO contacts (name, phoneNumber, email) VALUES (?, ?, ?)";
    const results = await queryAsync(query, [name, phoneNumber, email]);
    res.status(201).json({ id: results.insertId, name, phoneNumber, email });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//

//

//

//client side sample
1. POST 
async function createContact() {
  try {
    // Replace with your API URL
    const response = await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com",
      }),
    });

    // Check if the response is OK (status code 200-299)
    if (response.ok) {
      // Parse the JSON response
      const data = await response.json();
      console.log("Contact created:", data);
    }
    throw new Error("Network response was not ok");
  } catch (error) {
    console.error("Error:", error);
  }
}
// Call the function to create a contact
createContact();



2. GET Request (Read Contact by ID)
To fetch a contact by ID and check if the response is successful:


async function getContact(id) {
  try {
    const response = await fetch(`http://localhost:5000/api/contacts/${id}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Contact fetched:', data);
    }
    throw new Error('Failed to fetch contact');
  } catch (error) {
    console.error('Error:', error);
  }
}   
getContact(1); // Replace with the actual ID you want to fetch



3. PUT Request (Update Contact)
To update an existing contact by ID and check if the response is successful:


async function updateContact(id) {
  try {
    const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe Updated',
        phoneNumber: '987-654-3210',
        email: 'john.doe.updated@example.com'
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Contact updated:', data);
    }
    throw new Error('Failed to update contact');
  } catch (error) {
    console.error('Error:', error);
  }
}

updateContact(1); // Replace with the actual ID you want to update




4. DELETE Request (Delete Contact)
To delete a contact by ID and check if the response is successful:

async function deleteContact(id) {
  try {
    const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Contact deleted successfully');
    } else {
    } catch (error) {
    throw new Error('Failed to delete contact');
  }

  }  
    console.error('Error:', error);
  }  
deleteContact(1); // Replace with the actual ID you want to delete












//

//

//

//


