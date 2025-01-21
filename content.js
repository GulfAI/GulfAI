// Function to process text nodes before they're displayed
function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        const replacedText = text.replace(/Gulf of Mexico/gi, "Gulf of America").replace(/Golfo de México/gi, "Golfo de América");

        if (replacedText !== text) {
            node.nodeValue = replacedText;
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Skip script and style tags
        if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
            node.childNodes.forEach(processNode);
        }
    }
}

// Process new nodes added to the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(processNode);
    });
});

// Start observing as early as possible
if (document.documentElement) {
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true
    });
}

// Process initial HTML content
document.addEventListener('DOMContentLoaded', () => {
    // Process all existing nodes
    processNode(document.documentElement);

    // Mark as processed to show content
    document.body.setAttribute('data-processed', 'true');
});

// Handle document.write and similar dynamic content
const originalWrite = document.write;
document.write = function (...args) {
    originalWrite.apply(this, args);
    processNode(document.documentElement);
};

// Process any existing content immediately
if (document.documentElement) {
    processNode(document.documentElement);
}
