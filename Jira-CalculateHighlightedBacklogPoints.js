javascript: (function () {
	const selectedRowSelector = ".lfgNgI";
	const storyPointCircleSelector = "div[class^='ReadViewContentWrapper']";
	const fullSelctor = `${selectedRowSelector} ${storyPointCircleSelector}`;

	const storyPointArray = Array.from(document.querySelectorAll(fullSelctor))
		.map(x => Number(x.innerText));

	const totalStoryPoints = storyPointArray.reduce((previousValue, currentValue) => {
		if (!isNaN(currentValue)) {
			return previousValue + currentValue;
		}
		return previousValue;
	});

	alert(totalStoryPoints);
})();