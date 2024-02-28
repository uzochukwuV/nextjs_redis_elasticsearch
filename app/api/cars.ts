import {createCar} from '../lib/redis'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const id = await createCar(req.body);
    res.status(200).json({id})
}