javascript: (function () {
	const ticketBodySelector = "[data-test-id$='issue.views.issue-details.issue-layout.left-most-column']";
	const ticketBody = document.querySelectorAll(ticketBodySelector)[0].parentElement;

	ticketBody.style.width = '150%';
})();