var config = module.exports = {}



if (process.env.NODE_ENV=='<%= productionServerName %>'){
	config.db={
		url:'mongodb://localhost:27017/<%= databaseName %>'
	}
}else{
	config.db={
		url:'mongodb://localhost:27017/<%= databaseName %>'
	}
}

