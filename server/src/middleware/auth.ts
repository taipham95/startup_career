import express from 'express';

const jwt =require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const {token} = req.query;
    if(token){
        next();
    }else {
        return res.status(401).json({
            msg: "token is not valid",
        })
    }};
module.exports = authMiddleware