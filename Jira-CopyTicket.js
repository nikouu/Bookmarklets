javascript: (function () {
	const titleSelector = '[data-test-id$="summary.heading"]';
	const ticketNumberSelector = '[data-test-id$="breadcrumb-current-issue-container"] a';

	const titleElement = document.querySelectorAll(titleSelector)[0];
	const ticketNumberElement = document.querySelectorAll(ticketNumberSelector)[0];

	const getLinkText = `${ticketNumberElement.innerText} ${titleElement.innerText}`;

	const copyJiraTicketToClipboard = () => {
		const copiedLinkElement = ticketNumberElement.cloneNode(true);
		copiedLinkElement.textContent = getLinkText;

		const clipboardItem = new ClipboardItem({
			"text/plain": new Blob(
				[copiedLinkElement.innerText],
				{ type: "text/plain" }
			),
			"text/html": new Blob(
				[copiedLinkElement.outerHTML],
				{ type: "text/html" }
			),
		});

		navigator.clipboard.write([clipboardItem]);
	};

	copyJiraTicketToClipboard();
})();