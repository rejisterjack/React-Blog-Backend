const express = require("express");
const blogController = require("../details/data");

const blogRouter = express.Router();
blogRouter.route("/blogdata").get(blogController.apiController);
module.exports = blogRouter;
