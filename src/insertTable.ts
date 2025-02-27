import { getClient } from "./utils.js"

export const insertTable = async() => {
    const client = await getClient();

    try{
        const insertText = `
        INSERT INTO users (id, email, password) values($1, $2, $3) RETURNING id
        `
        const insertValues = ["2", "test2@gmail.com", "Test@123"];
        const response = await client.query(insertText, insertValues);
        console.log(response.rows);
        console.log("Inserted User in db")

        const insertTodo = `INSERT INTO todos (title, description, user_id) values($1, $2, $3) RETURNING id`;
        const insertTodoVal = ["Jeju Island", "Must Visit", response.rows[0].id];
        const response2 = await client.query(insertTodo, insertTodoVal);
        console.log(response2.rows)
    }catch(err){
        console.log("Err: ", err.message);
    }finally{
        await client.end();
        console.log("Database connection closed.")
    }
}

insertTable();