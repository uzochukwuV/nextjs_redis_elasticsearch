import {Client, Entity, Schema, Repository, EntityId, } from 'redis-om';

import {createClient} from 'redis';


const client = createClient({
    password: 'nhZvhIdEfgM787h6xjpypKoaip4jt8c3',
    socket: {
        host: 'redis-10539.c326.us-east-1-3.ec2.cloud.redislabs.com',
        port: 10539
    }
});

async function connect() {
    if(!client.isOpen){
        await client.connect()
    }
}


let schema = new Schema(
    'bella',
    {
        make:{type: 'string'},
        model: {type: 'string'},
        image: {type: 'string'},
        description: {type: 'string'},

    },
    {
        dataStructure: 'JSON',
    }
)

type CarType = Entity &  {
    make:String,
    model: String,
    image: String,
    description: String,
    id? : String,
}



async function createCar(data:CarType): Promise<Entity> {
    await connect();
    const repository = new Repository(schema, client);
    const car = repository.save(data)
    return car;


}

async function createIndex(){
    
}


export {createCar, client, connect}