import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

interface CustomError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let error = { ...err };
  error.message = err.message;

  console.error("Error:", err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = "Resource not found";
    error = { name: "CastError", message, statusCode: 404 } as CustomError;
  }

  // Mongoose duplicate key
  if ((err as any).code === 11000) {
    const field = Object.keys((err as any).keyValue)[0];
    const message = `Duplicate value for ${field}. Please use another value.`;
    error = { name: "DuplicateError", message, statusCode: 400 } as CustomError;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values((err as any).errors)
      .map((val: any) => val.message)
      .join(", ");
    error = {
      name: "ValidationError",
      message,
      statusCode: 400,
    } as CustomError;
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token";
    error = {
      name: "JsonWebTokenError",
      message,
      statusCode: 401,
    } as CustomError;
  }

  if (err.name === "TokenExpiredError") {
    const message = "Token expired";
    error = {
      name: "TokenExpiredError",
      message,
      statusCode: 401,
    } as CustomError;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
