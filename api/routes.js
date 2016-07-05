var superagent = require('superagent');

var data = require('./data');

module.exports = function (app) {
	

	app.get('/api', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.name)
			.query({ format: "json" })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
				
				res.json(response.body);
				
			});

	});

app.get('/api/show/:id',function (req,res) {
		
		superagent 
				.get('http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast')
				.query( {format: 'json'})
				.query({field_list: 'id,name,image,summary,cast'})
				.end(function (err,result) {
				if (err) {
					return res.send(err);
				}
					res.json(result.body);
				});
	});
}
