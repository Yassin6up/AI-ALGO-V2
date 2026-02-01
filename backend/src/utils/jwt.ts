import jwt from 'jsonwebtoken';
import env from '../config/env';

export interface JwtPayload {
  sub: string;
  role: string;
}

export const signAccessToken = (payload: JwtPayload) =>
  jwt.sign(payload, env.jwtSecret, { expiresIn: env.accessTokenTtl });

export const signRefreshToken = (payload: JwtPayload) =>
  jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: env.refreshTokenTtl });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, env.jwtSecret) as JwtPayload;

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, env.jwtRefreshSecret) as JwtPayload;
