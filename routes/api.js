/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

// Example connection: MongoClient.connect(MONGODB_CONNECTION_STRING, function(err, db) {});

module.exports = function(app, mongoose) {
  const Book = require('../models/book')(mongoose);
  app.route('/api/books')
      .get(function(req, res) {
      // response will be array of book objects
      // json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
      })

      .post(function(req, res) {
        const title = req.body.title;
      // response will contain new book object including atleast _id and title
      })

      .delete(function(req, res) {
      // if successful response will be 'complete delete successful'
      });


  app.route('/api/books/:id')
      .get(function(req, res) {
        const bookid = req.params.id;
      // json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
      })

      .post(function(req, res) {
        const bookid = req.params.id;
        const comment = req.body.comment;
      // json res format same as .get
      })

      .delete(function(req, res) {
        const bookid = req.params.id;
      // if successful response will be 'delete successful'
      });
};
