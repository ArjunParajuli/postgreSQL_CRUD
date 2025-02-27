import { getClient } from "./utils.js"


export const queries = async() =>{
    const client = await getClient();
    try{
        const getAllUsers = `SELECT * FROM users`; 
        const res1 = await client.query(getAllUsers);
        console.log(res1.rows);

        const getUserText = `SELECT * FROM users WHERE id=$1`;
        const getUserVal = ["1"];
        const res2 = await client.query(getUserText, getUserVal);
        console.log(res2.rows);

        const getAllTodos = `SELECT * FROM todos WHERE user_id=$1`;
        const getAllTodosVal = ["2"];
        const res3 = await client.query(getAllTodos, getAllTodosVal);
        console.log(res3.rows);

        // join
        const getEmailAndTodo = `SELECT users.email, todos.title FROM users
        LEFT JOIN todos 
        ON users.id = todos.user_id`;
        const response = await client.query(getEmailAndTodo);
        console.log(response.rows)  
    }catch(err){
        console.log("Err: ", err.message)
    }finally{
        await client.end();
    }
}

queries();