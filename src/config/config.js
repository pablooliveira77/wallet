import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let collection;
let db;

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
    
    db = conn.db('wallet');
    // Criar índice único para o campo 'email'

    collection = db.collection('users');
    await collection.createIndex({ email: 1 }, { unique: true });
    return db;

}

export async function find(query, colection) {
    collection = db.collection(colection);
    return collection.find(query).toArray();
}

export async function insertOne(data, colection) {
    collection = db.collection(colection);
    return collection.insertOne(data);
}

export async function disconnectDb() {
    await client.close();
}