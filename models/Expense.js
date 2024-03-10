import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    expenseType: {
      type: String,
      required: true,
    },
    expenseAmount: {
      type: Number,
      required: true,
    },
    expenseAmountCurrency: {
      type: String,
      required: true,
    },
    otherDetails: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Expense", ExpenseSchema);
