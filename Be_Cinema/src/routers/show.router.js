const express = require("express");
const { getShowTicket, getAllShow, getDetailShow, createShow, updateShow } = require("../controller/show.controller");
const { checkLoginAdmin } = require("../middlewares/jwtMiddleware");
const showRouter = express.Router();


showRouter.route("/createShow").post(createShow)
showRouter.route("/allShow").get(getAllShow)
showRouter.route("/showTicket/:movieId").get(getShowTicket)
showRouter.route("/detailShow/:showId").get(getDetailShow)
showRouter.route("/updateShow/:showId").put(updateShow)

module.exports = {
    showRouter
}