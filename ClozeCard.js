
var ClozeCard = function(text, cloze) {
	
	/* do not make cloze a literal; use a method to generate this property. */
	this.cloze = cloze;
	this.fulltext = text;
	/* use string replace method to generate this property*/
	this.partial = text.replace(cloze, '...' );
	}	


module.exports = ClozeCard;