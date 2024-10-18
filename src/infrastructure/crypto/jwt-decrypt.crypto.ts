import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '@src/core/application/interfaces/exceptions';
import { Decrypt } from '@src/core/application/interfaces/crypto/decrypt';

export const buildJwtDecrypter = 
    (secret: string): Decrypt => async (token) => {
        if(!token) return [null, new UnauthorizedError()];
        console.log(token);
        try {
            const value = jwt.verify(token, secret, { complete: true});
            if (typeof value.payload === 'string'){
                return [null, new UnauthorizedError()];
            }
            const user = {
                id: value.payload.id,
                scopes: value.payload.scopes,
                isAuthenticated: true
             }
             return [user, null];
        } catch (e) {
            console.error(e)
            return [null, new UnauthorizedError()];
        }
    }