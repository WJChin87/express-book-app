import { auth } from 'express-oauth2-jwt-bearer';

const checkJwt = auth({
    audience: 'https://book-store-api', // e.g. https://book-store-api
    issuerBaseURL: `https://dev-g2j588skdfh05npj.us.auth0.com/`,
});

export default checkJwt;