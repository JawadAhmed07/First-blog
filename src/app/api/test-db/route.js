import { connectDb } from "@/app/utils/dbconnect";

export async function GET() {
  try {
    await connectDb();
    return new Response(JSON.stringify({ message: "Database Connected Successfully" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error Connecting to Database", error: error.message }), {
      status: 500,
    });
  }
}
