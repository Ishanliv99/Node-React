import jwt from 'jsonwebtoken';
import Boom from 'boom';

export function generateTokens(data) {
  return {
    accessToken: generateAccessToken(data),
    refreshToken: generateRefreshToken(data)
  };
}

export function generateAccessToken(data) {
  return jwt.sign({ encryptedData: data }, 'ACCESS_TOKEN_KEY', {
    expiresIn: 10000
  });
}

export function generateRefreshToken(data) {
  return jwt.sign(
    {
      encryptedData: data
    },
    'REFRESH_TOKEN_KEY',
    {
      expiresIn: 800000
    }
  );
}

export function verifyAccessToken(token) {
  return jwt.verify(token, 'ACCESS_TOKEN_KEY', (err, decode) => {
    if (!err) {
      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Access Token Unauthorized'));
    }
  });
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, 'REFRESH_TOKEN_KEY', (err, decode) => {
    if (!err) {
      return decode;
    } else {
      throw Boom.unauthorized('Refresh Token Unauthorized');
    }
  });
}
