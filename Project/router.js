const express = require('express');
const router = express.Router();
const {ListUser} = require('./model');


router.get('/userlist/', (req, res, next) => {

	ListUser.get()
	.then(User => {
			res.status(201).json({
				message : "Successfully sent list of users",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Internal server error.`,
				status : 500
			});
			return next();
		});
});

//Login!
router.post('/LoginUserlist/', (req, res, next) => {
	
			
				//if(User == req.body.Password)
		
		ListUser.login(req.body.UserName)
		.then(User => {
			res.status(201).json({
				message : "Good Login",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		
		

		
		
});


//Add a NewCV
router.post('/CreateNewCV/', (req, res, next) => {
	
	let cvUPdateing = req.body.CvCant+1
			ListUser.increment(req.body.user)
			.then(User => {
			res.status(201).json({
				message : "Incremented the cuantity",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});

		ListUser.updateField(req.body.user,{"FullName" : req.body.FName})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"email" : req.body.FEmail})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"CellPhone" : req.body.FCell})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Objective" : req.body.FObjective})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"University" : req.body.FUniversity})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Major" : req.body.FMajor})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"OfficeSkills" : req.body.FNONTech})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"TechnicalSkills" : req.body.FOTech})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Company1" : req.body.FOCompany1})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Position1" : req.body.FOPosition1})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Location1" : req.body.FOLocation1})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Years1" : req.body.FOYears1})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Company2" : req.body.FOCompany2})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Position2" : req.body.FOPosition2})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Location2" : req.body.FOLocation2})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Years2" : req.body.FOYears2})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"Hobbies" : req.body.FHobbies})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});
		ListUser.updateField(req.body.user,{"References" : req.body.FReferences})
		.then(User => {
			res.status(201).json({
				message : "Updated Name",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});

		
		
});

//Update a field

router.post('/UpdateFieldTips/', (req, res, next) => {
	

	ListUser.updateField(req.body.user,{"Tips" : req.body.NewTip})
		.then(User => {
			res.status(201).json({
				message : "Updated Tip",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Not Found.`,
				status : 500
			});
			return next();
		});

});


//New User!!
router.post('/NewUser/', (req, res, next) => {
	
	let requiredFields = ['UserName', 'Password'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({ 
				message : `Missing field ${currentField} in body.`,
				status : 406
			});
			return next();
		}
	}

	let objectToAdd = {
		user: req.body.UserName,
		pass: req.body.Password,
		cantCv: 0,
		Tips : [""],
		PrimaryCV : 0
		
	};

	ListUser.post(objectToAdd)
		.then(User => {
			res.status(201).json({
				message : "Successfully created a new User",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Internal server error.`,
				status : 500
			});
			return next();
		});
});

module.exports = router;