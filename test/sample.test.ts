import { TestSuite, InputType } from '@jovotech/framework';

/*
|--------------------------------------------------------------------------
| UNIT TESTING
|--------------------------------------------------------------------------
|
| Run `npm test` to execute this sample test.
| Learn more here: v4.jovo.tech/docs/unit-testing
|
*/

test('should ask the user if they like pizza', async () => {
  const testSuite = new TestSuite();

  const { output } = await testSuite.run({
    type: InputType.Launch, // or 'LAUNCH'
  });

  expect(output).toEqual([
    {
      message: 'Do you like Pizza?',
      listen: true,
      quickReplies: ['yes', 'no'],
    },
  ]);
});
