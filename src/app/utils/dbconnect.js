import mongoose from "mongoose";

let connection = null;

export async function connectDb() {
  try {
    console.log("MONGODB_URI =>", process.env.MONGODB_URI); // Debugging line

    if (connection && connection.readyState === 1) {
      console.log("DB already connected");
      return connection;
    }

    connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected Successfully");
    return connection;
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    throw new Error("Failed to connect to the database");
  }
}
