const router = require("express").Router();
const clientRouter = require("./clientRouter");
const userRouter = require("./userRouter");

router.use("/api/users", userRouter);

// server react client and static assets (usually on heroku)
// create-react-app dev server used in development
if (process.env.NODE_ENV === "production") {
  router.use(clientRouter);
}

module.exports = router;
