/**
 * Thread.js
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
    title: "string",
    content: "string",
    userId: {
      model: "user"
    },
    createdAt: "string",
    isSecret: "boolean",
    comments: {
      collection: "comment",
      via: "threadId"
    }
  }
};
sails.config.models.migrate='drop';
