var express= require("express");
var app= express()
var request= require("request")


app.get("/", function(req, res){
	res.render("search.ejs")
})


app.get("/results", function(req, res){
	var search= req.query.search;
	request("http://www.omdbapi.com/?s=" +search, function (error, response, body){
		if (!error && response.statusCode == 200) {
			// res.send(body)
			var data= JSON.parse(body)
			// res.send(results.Search[0].Title)
			res.render("results.ejs", {results: data})
		}
	})
})


app.listen(3000, function(){
	console.log("Server running")
})
