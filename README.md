Promise that resolves when the document has triggered the `DOMContentLoaded` event.

## Usage
```javascript
import documentReady from '@tiddo/document-ready';

async function init() {
	await documentReady;
	console.log("Document is ready!");
}
init();
```
