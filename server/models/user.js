
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const regex = require('../handlers/regex');
const token = require('../handlers/token');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    address: {
      type: String,
      unique: true,
      validate: regex.emailRegex,
      required: true
    },
    verified: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  password: {
    type: String,
    validate: regex.passwordRegex,
    required: true
  },
  profile : {
    name: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      validate: regex.mobileRegex,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    documentUrl: {
      type: String,
      required: true
    },
    userVerified: {
      type: Boolean,
      default: false,
      required: true
    },
    token: {
      type: String,
      default: token(),
      required: true
    },
    isTokenUsed: {
      type: Boolean,
      default: false,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    },
    updatedAt: {
      type: Date,
    }
  },
  roles: {
    type: String,
    enum: ['admin', 'customer', 'deliveryBoy'],
    required: true
  }
});

// validate password length
UserSchema.path('password').validate((v) => {
  return v.length >= 8;
});

// validate contact number length
UserSchema.path('profile.contact').validate((v) => {
  return v.length == 10;
});
/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);
