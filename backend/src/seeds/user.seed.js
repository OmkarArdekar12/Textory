import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  {
    fullName: "Alex",
    password: "123451",
    email: "alex@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Alice",
    password: "123452",
    email: "alice@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Bob",
    password: "123453",
    email: "bob@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Sophia",
    password: "123454",
    email: "sophia@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Charlie",
    password: "123455",
    email: "charlie@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Emma",
    password: "123456",
    email: "emma@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "David",
    password: "123457",
    email: "david@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Olivia",
    password: "123458",
    email: "olivia@gmail.com",
    profilePicture: "",
  },
  {
    fullName: "Ethan",
    password: "123459",
    email: "ethan@gmail.com",
    profilePicture: "",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    const storeUser = async (user) => {
      const password = user.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
      await User.create(user);
    };

    for (let user of seedUsers) {
      await storeUser(user);
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
