window.onload = function() {
	
	const display = document.querySelector('.display');
	const guessForm = document.forms[0];
	var totalItems = 0;

	function guessTotalNumber(
		totalOunces = 0,
		itemsPerCuIn = 0
	) {
		const measure = {
			//cubic inches in 1 ounce
			ozToCuIn: 0.5541143,
			//Convert total ounces to cubic inches
			cubicInches: () => Math.round(totalOunces * measure.ozToCuIn),
			//Calculate total item number
			totalNumber: () => itemsPerCuIn * measure.cubicInches()
		};
		return (
			Number.isInteger(measure.totalNumber()) ? 
			`Total Items: ${measure.totalNumber()}` :
			'Please enter numbers only!'
		);
	}

	guessForm.addEventListener('submit', (event) => {
		event.preventDefault();
		
		//Set display content with total number of items
		display.innerHTML = `${guessTotalNumber(
			event.target.ounces.value,
			event.target.items.value
		)}`;
	});
}