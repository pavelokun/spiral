const { jws } = require('jsrsasign');

const getJWT = (payload, secret) => {
  const header = {
    typ: 'JWT',
    alg: 'HS256',
  };

  return jws.JWS.sign(
    'HS256',
    JSON.stringify(header),
    JSON.stringify(payload),
    secret,
  );
};

module.exports = {
  getJWT,
};
