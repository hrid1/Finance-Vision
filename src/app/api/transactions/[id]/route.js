import connectDB from "@/lib/db";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";

// 1. Get single transaction
export async function GET(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    console.log("Id is", id);
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return NextResponse.json(
        { error: "Transaction not found!" },
        { status: 404 }
      );
    }
    // return if transaction exits
    return NextResponse.json(transaction);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch transaction" },
      { status: 501 }
    );
  }
}

// 2.Update transaction

export async function PUT(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const body = await req.json();
    const transaction = await Transaction.findByIdAndUpdate(id, body, {
      new: true,
    });
    // if transaction not found
    if (!transaction) {
      return NextResponse.json(
        {
          error: "Transacction not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({data:transaction, message: "Transaction Update Suceessfully"}, );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch transaction" },
      { status: 501 }
    );
  }
}

// 3. Delete Transaction
export async function DELETE(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const transaction = await Transaction.findOneAndDelete(id);
    if (!transaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }
    // after succesfully delete
    return NextResponse.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete transaction" },
      { status: 500 }
    );
  }
}
