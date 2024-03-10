import express from "express";
import {addExpense,getAllExpense} from './../controllers/expense.js'

const router = express.Router();

// Add Expense
router.post("/add",addExpense)

// Get All Expense For a User
router.post("/getAllExpense",getAllExpense)

export default router;
