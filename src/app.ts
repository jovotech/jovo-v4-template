import { App } from 'jovo-framework';
import { config } from './jovo.config';

import { MainComponent } from './components/MainComponent/MainComponent';

const app: App = new App(config);

// ------------------------------------------------------------------
// ROUTING
// ------------------------------------------------------------------

app.useComponents({
	// Responsible for all general interactions like Launch, Help, etc.
	MainComponent,
});

export { app };
