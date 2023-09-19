const jwt = require("jsonwebtoken");

const secret = "thereisaplace";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    console.log(`Token data stuff`);
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    console.log(`Token data 1: ${token}`);
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log(`Token data 2: ${JSON.stringify(data)}`);

    } catch {
      console.log("Invalid Token");
    }
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
