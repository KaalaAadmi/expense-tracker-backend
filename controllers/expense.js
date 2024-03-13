import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Expense from "./../models/Expense.js";
dotenv.config();

export const addExpense = async (req, res) => {
  try {
    const newExpense = new Expense({
      expenseType: req.body.expenseType,
      expenseAmount: req.body.expenseAmount,
      expenseAmountCurrency: req.body.expenseAmountCurrency,
      otherDetails: req.body.otherDetails,
      userId: req.body.userId,
      group: req.body.group,
    });
    const savedExpense = await newExpense.save();
    return res.status(201).json({
      success: true,
      savedExpense,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "An error occurred.",
    });
  }
};

export const getAllExpense = async (req, res) => {
  try {
    const userId = req.body.userId;
    const allExpense = await Expense.find({ userId: userId });
    if (allExpense.length === 0) {
      res.status(200).json({
        message: "No expenses",
      });
    } else {
      res.status(200).json({
        allExpense,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "An error occurred.",
    });
  }
};
