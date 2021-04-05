function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authoautrization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    
    res.json({
      message : 'you are note allowed to ....'
    })
  }
}

module.exports = verifyToken;