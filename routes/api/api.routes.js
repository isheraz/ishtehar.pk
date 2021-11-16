const express = require("express");
const authRoutes = require("./auth.routes");
const roleRoutes = require("./role.routes");
const userRoutes = require("./user.routes");
const noticeRoutes = require("./notices.routes");
const categoryRoutes = require("./category.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/role",
    route: roleRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/notices",
    route: noticeRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
