/**
 * ActorsController
 *
 * @description :: Server-side logic for managing Actors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'create': function(req,res){
		Actors.find(function showAllActors(err, actors){
			if(err) return next(err);
			if(!actors) return next();
			res.view({
				actors : actors
			});
		});
	},
	new:function(req,res,next){
		
		// Create a new Actor
		Actors.create(req.params.all(), function actorCreated(err, actor){
			
			//If we find errors
			if(err){
				console.log(err);
				req.session.flash ={
					err : err
				};

				return res.redirect('actors/create');
			} 

			//But if everything works: 
			res.redirect('actors/create');
		});
	},
	show:function(req,res,next){
		Actors.findOne(req.param('id'), function showActor(err, actor){
			if(err) return next(err);
			if(!actor) return next();
			res.view({
				actor : actor
			});
		});
	}
};

