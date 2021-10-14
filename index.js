const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const swaggerJsdocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const jwt = require("jsonwebtoken");
const path = require("path");
const authRoutes = require("./controllers/authcontroller");
const db = require("./config/database").default;
//const { authenticate } = require('./config/database').default;
const exp = require("constants");
const app = express();

const swaggerOption = {
  swaggerDefinition: {
    info: {
      title: "Ishtehar.pk",
      description: "Public Notices platform Site APIs",
    },
  },

  //API Route
  apis: ["index.js"],
};
const swaggerDocs = swaggerJsdocs(swaggerOption);

// Test DB
const init = async () => {
  try {
    //const connectionResp = await authenticate();
    const app = express();
    app.use(authRoutes);
    app.get("/", (req, res) => res.send("INDEX"));

    //User Routes

    /**
 * @swagger
 * /User:
 *  get:
 *    description: show home page
 *    responses:
 *       200:
 *          description: success

 */
    app.use("/User", require("./routes/UserRoute"));

    /**
 * @swagger
 * /Role:
 *  get:
 *    description: show role of the users
 *    responses:
 *       200:
 *          description: success

 */
    app.use("/Role", require("./routes/RoleRoute"));

    /**
 * @swagger
 * /About:
 *  get:
 *    description: show about page
 *    responses:
 *       200:
 *          description: success

 */
    app.use("/About", require("./routes/AboutRoute"));

    /**
 * @swagger
 * /NewsPaper:
 *  get:
 *    description: show Newspapers that registered on Ishtehar.pk
 *    responses:
 *       200:
 *          description: success

 */

    app.use("/NewsPaper", require("./routes/NewsPaperRoute"));

    /**
 * @swagger
 * /Notices:
 *  get:
 *    description: show Newspapers that registered on Ishtehar.pk
 *    responses:
 *       200:
 *          description: success

 */

    app.use("/Notices", require("./routes/NoticesRoute"));

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};
init();
