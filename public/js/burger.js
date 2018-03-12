$(document).on("click","#add-burger", (event) => {
	event.preventDefault();
	const burger = {burger_name: $("#burger-order").val().trim()};
	console.log(burger);
	$.ajax({
		url: "/api/burgers/",
		type: "POST",
		data: burger
	}).then( () => {
		location.reload();
	});
});

$(".eat-burger").click( function(event) {
	event.preventDefault();
	let id = $(this).data("id");
	
	$.ajax({
		url: "/api/burgers/" + id,
		type: "PUT",
		data: id
	}).then( () => {
		location.reload();
	});
})