const User = require('./User');
const Medication = require('./Medication');
const Comment = require('./Comment');

// Define associations between models if needed
User.hasMany(Medication, {
  foreignKey: 'userId',
});
Medication.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Medication.hasMany(Comment, {
  foreignKey: 'medicationId',
});
Comment.belongsTo(Medication, {
  foreignKey: 'medicationId',
});

module.exports = { User, Medication, Comment };
