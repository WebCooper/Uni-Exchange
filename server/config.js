import 'dotenv/config'

export const PORT = process.env.PORT || 4003;
export const mongoDB = process.env.mongoDB;
export const CORS_ORIGINS = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',') 
    : ['http://localhost:5173', 'https://uniexchange.internalbuildtools.online'];