import pg from 'pg'; // Import the entire module as a default import
const { Client } = pg;

export async function getClient(){
    const client = new Client({
        connectionString: "postgresql://root:th9oWk8g99i8IVEdHpKh6njVe2CzXN82@dpg-crhf47d6l47c73c7rfvg-a.oregon-postgres.render.com/demo_app_b9ar",
        ssl: { rejectUnauthorized: false },  // SSL is typically required for cloud databases like Render
      });
    // const client = new Client("postgresql://root:th9oWk8g99i8IVEdHpKh6njVe2CzXN82@dpg-crhf47d6l47c73c7rfvg-a.oregon-postgres.render.com/demo_app_b9ar")
    await client.connect();
    return client
}