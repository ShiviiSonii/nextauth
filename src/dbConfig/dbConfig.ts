import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected");
    });

    connection.on("error", () => {
      console.log("Error on creating connection to db");
      console.log(error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting to database");
    console.log(error);
  }
}
