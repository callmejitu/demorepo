var name="apple";
var description =" fruit from the apple tree";

module.exports = function()
{
	var functions = {
		setname: function(namein)
		{
			this.name=namein;
		},
		setdescription: function(descriptionin){
			this.description=descriptionin;
		},
		getinfo: function()
		{
			return{
				name:name,
				description:description
			}
		}
		
	};
	return functions;
}