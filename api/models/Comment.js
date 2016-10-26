/**
 * Comment.js
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
    threadId: {
      model: "thread"
    },
    content: "string",
    createdAt: "string",
    isSecret: "boolean",
    userId: {
      model: "user"
    }
  }
};
sails.config.models.migrate='drop';
