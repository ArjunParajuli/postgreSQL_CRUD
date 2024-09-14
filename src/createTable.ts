import { getClient } from "./utils.js";

async function createTable(){
  
    const client = await getClient();
    // console.log(client)
    
    try{
        const createUserTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `;

    // Execute the 'users' table creation query
    await client.query(createUserTableQuery);
    console.log("Table 'users' created successfully.");

    // Query to create the 'todos' table
    const createTodosTableQuery = `
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title TEXT,
        description TEXT,
        user_id INTEGER REFERENCES users(id)
      );
    `;

    // Execute the 'todos' table creation query
    await client.query(createTodosTableQuery);
    console.log("Table 'todos' created successfully.");
    }catch(err){
        console.log(err)
    }finally {
      await client.end();
      console.log("Database connection closed.");
    }
}

createTable();

