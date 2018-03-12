const db = require("../models");

module.exports = app => {
	app.get("/", (request, response) => {
		db.burger_stand.findAll({}).then(data => {
			const allBurgers = data.map(burger => burger.dataValues);
			response.render("index", {burgers: allBurgers});
		})
	});

	app.post("/api/burgers", (request,response) => {
		db.burger_stand.create(request.body).then(result => {
			response.json({ id: result.insertId });
		})
	});

	app.get("/api/burgers", (request, response) => {
		db.burger_stand.findAll({}).then(data => {
			response.json(data);
		})
	});

	app.put("/api/burgers/:id", (request, response) => {
		console.log(request.params);
		db.burger_stand.update(
			{is_eaten: true},
			{
			where: {
				id: request.params.id
			}
		}).then( burgers => {
			response.sendStatus(200);
		});
	});
}
