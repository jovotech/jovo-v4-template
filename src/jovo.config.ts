import { JovoDebugger } from 'jovo-plugin-debugger';
import { FileDb } from 'jovo-db-filedb';

// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
	logging: true,

	intentMap: {
		'AMAZON.StopIntent': 'END',
	},

	plugins: [
		// Add Jovo plugins here.
		new JovoDebugger(),
		new FileDb({
			pathToFile: './../../db/db.json',
		}),
	],
};

export { config };
