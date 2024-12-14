import dotenv from 'dotenv';
dotenv.config();

export const URLBASE = {
URLIBERIA:process.env.URLIBERIA
}
export const FLIGHT ={
    ORIGIN:process.env.ORIGIN,
    DESTINATION:process.env.DESTINATION,
    DEPERTUREDATE:process.env.DEPERTUREDATE,
    RETURNDATE:process.env.RETURNDATE
}