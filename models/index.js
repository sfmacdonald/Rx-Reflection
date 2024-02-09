const User = require('./User');
const Medication = require('./Medication');
const Comment = require('./Comment');
const Patient = require('./Patient');

// Define associations between models
// A user can have many medications, and each medication belongs to a user
User.hasMany(Medication, {
  foreignKey: 'userId', // Foreign key in the Medication model referencing the User model
  onDelete: 'CASCADE', // If a user is deleted, delete associated medications
});
Medication.belongsTo(User, {
  foreignKey: 'userId', // Foreign key in the Medication model referencing the User model
});

User.hasOne(Patient, {
  foreignKey: 'userId', // Foreign key in the Patient model referencing the User model
  onDelete: 'CASCADE', // If a user is deleted, delete associated patient record
});
Patient.belongsTo(User, {
  foreignKey: 'userId', // Foreign key in the Patient model referencing the User model
});


// A user can create many comments, and each comment belongs to a user
User.hasMany(Comment, {
  foreignKey: 'userId', // Foreign key in the Comment model referencing the User model
});
Comment.belongsTo(User, {
  foreignKey: 'userId', // Foreign key in the Comment model referencing the User model
});

// A medication can have many comments, and each comment belongs to a medication
Medication.hasMany(Comment, {
  foreignKey: 'medicationId', // Foreign key in the Comment model referencing the Medication model
});
Comment.belongsTo(Medication, {
  foreignKey: 'medicationId', // Foreign key in the Comment model referencing the Medication model
});

// Export models
module.exports = { User, Medication, Patient };
