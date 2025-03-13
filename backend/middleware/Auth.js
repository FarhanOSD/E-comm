import jwt from "jsonwebtoken"

const authUser = async (req,res,next) => {
  const { token } = req.headers
  if (!token) {
    return res.status(401).json({ message: "No Authorized Login Again",success: false})
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id
    next()
  } catch (error) {
    
    console.error(error)
    return res.status(403).json({ message: "Token is not valid", success: false})
  }
}

export default authUser;