import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export async function connect() {
    const url = process.env.ATLAS_URL;
    // console.log(url);
    const client = new MongoClient(url);

    let conn 
    try {
        conn = await client.connect();
        console.log('Conectado com sucesso!')
    } catch (error) {
        console.log(error)
    }
    
    let db = conn.db('wallet');
    return db;

}

export async function disconnectDb() {
    await client.close();
}