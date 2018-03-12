const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-api-routes.js")(app);

db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`App is now listening on port: ${PORT}`);
	})	
})
