const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);

    // Ensure to handle connection properly
    const connectionObject =
      db.connections.length > 0 ? db.connections[0] : db.connection;

    if (connectionObject) {
      connection.isConnected = connectionObject.readyState;
      console.log(
        `Connected to MongoDB with readyState: ${connectionObject.readyState}`
      );
    } else {
      throw new Error("MongoDB connection not established");
    }
  } catch (error) {
    console.error(`Error connecting to the Database: ${error.message}`);
    throw new Error(`Error connecting to the Database: ${error.message}`);
  }
};
