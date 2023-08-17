const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema(
  {
    Role: {
      type: String,
      required: true,
    },
    Nom: {
      type: String,
      required: true,
    },
    Prenom: {
      type: String,
      required: true,
    },
    DateNaiss: {
      type: String,
    },
    Adresse: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Define the static signup method
userSchema.statics.signup = async function (
  Nom,
  Prenom,
  DateNaiss,
  Adresse,
  PhoneNumber,
  email,
  password
) {
  // validation
  if (
    !email ||
    !password ||
    !Nom ||
    !Prenom ||
    !DateNaiss ||
    !Adresse ||
    !PhoneNumber
  ) {
    throw Error("All field must be field miss/sir !");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid !");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough !");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    Nom,
    Prenom,
    DateNaiss,
    Adresse,
    PhoneNumber,
    email,
    password: hash,
  });
  return user;
};
//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fialds must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("user", userSchema);
