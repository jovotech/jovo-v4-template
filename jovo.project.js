const { configure } = require('jovo-cli-core');

// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

const project = configure({
	endpoint: '${JOVO_WEBHOOK_URL}',
	plugins: [
		// Add Jovo CLI plugins here.
	],
	hooks: {
		'before.build': [
			// require('./cli/hooks/getCmsDataBeforeBuild')
		],
	},
	defaultStage: 'dev',
	stages: {
		// dev: require('./cli/jovo.project.dev')
	},
});

module.exports = project;
