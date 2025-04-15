import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "plz provide an amount"],
  },
  description: {
    type: String,
    required: [true, "plz provide a description"],
  },
  date: {
    type: Date,
    required: [true, "plz provide a date"],
  },
  category: {
    type: String,
    required: [true, "Uncategorized"],
  },
});

export default mongoose.models.Trasaction ||
  mongoose.model("Transaction", TransactionSchema);
