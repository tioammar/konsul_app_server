/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: "integer",
      primaryKey: true,
      autoIncrement: true
    },
    firstName: "string",
    lastName: "string",
    userNme: {
      type: "string",
      unique: true
    },
    password: "string",
    email: {
      type: "string",
      unique: true
    },
    avatar: "string",
    threads: {
      collection: "thread",
      via: "userId"
    }
  }
};
sails.config.models.migrate='drop';
