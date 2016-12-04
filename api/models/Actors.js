/**
 * Actors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		actorId: {							//id="ACT01"
			type: 'string',
			unique: true,
			required: true
		},
		name: {								//Specs {name="Altibor"}
			type: 'string',
			unique: true,
			required: true
		},
		type: {								//Specs {type="Main"}
			type: 'string',
			unique: false,
			required: true
		},
		inventory:{
			collection: 'Items', 
			via : 'model'
		}
	}
};

