const { DebuggerConfig } = require('@jovotech/plugin-debugger');

const jovoDebugger = new DebuggerConfig({
  locales: ['en'],
  buttons: [
    {
      label: 'LAUNCH',
      input: {
        type: 'LAUNCH',
      },
    },
    {
      label: 'yes',
      input: {
        intent: 'YesIntent',
      },
    },
    // ...
  ],
});

module.exports = jovoDebugger;
