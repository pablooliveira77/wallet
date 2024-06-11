import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let collection;

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
    collection = db.collection('users');
    // Criar índice único para o campo 'email'
    await collection.createIndex({ email: 1 }, { unique: true });
    return db;

}

export async function find(query) {
    return collection.find(query).toArray();
}

export async function insertOne(data) {
    return collection.insertOne(data);
}

export async function disconnectDb() {
    await client.close();
}