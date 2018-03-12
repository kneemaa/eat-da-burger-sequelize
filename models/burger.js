module.exports = (sequelize, DataTypes) => {
	var Burger = sequelize.define("burger_stand", {
		burger_name: {
			type: DataTypes.STRING
		},
		is_eaten: {
			type: DataTypes.BOOLEAN,
			defaultValue: 0
		}
	});
	return Burger;
};