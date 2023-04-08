// authController.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a TypeScript interface for the user object returned by the JWT token
interface User {
  id: string;
  role: string;
}

// Middleware function to authenticate the JWT token
function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  // Get the authorization header from the request
  const authHeader = req.headers['authorization'];
  // Extract the JWT token from the authorization header
  const token = authHeader && authHeader.split(' ')[1];
  // If there is no token, return a 401 Unauthorized status code
  if (token == null) {
    return res.sendStatus(401);
  }
  // Verify the JWT token using the secret key
  jwt.verify(token, 'secret', (err: jwt.VerifyErrors | null, decoded: any) => {
    // If there is an error verifying the token, return a 403 Forbidden status code
    if (err) {
      return res.sendStatus(403);
    }
    // Set the user object on the request object to be used in subsequent middleware functions
    req.user = { id: decoded.id, role: decoded.role };
    // Call the next middleware function in the stack
    next();
  });
}

// Middleware function to check if the user is an admin
function isAdmin(req: Request, res: Response, next: NextFunction): void {
  // Get the user object from the request
  const user = req.user as User;
  // If the user is not an admin, return a 403 Forbidden status code
  if (user.role !== 'admin') {
    return res.sendStatus(403);
  }
  // Call the next middleware function in the stack
  next();
}

// Route handler function to handle user login
function loginUser(req: Request, res: Response): void {
  // ...
}

// Route handler function to handle user registration
function registerUser(req: Request, res: Response): void {
  // ...
}

// Export the middleware and route handler functions
export { authenticateToken, isAdmin, loginUser, registerUser };
