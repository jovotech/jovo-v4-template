import { Component, Handle } from 'jovo-framework';
import { WelcomeOutput } from './output/WelcomeOutput';

@Component()
export class MainComponent extends BaseComponent {

  @Handle({
    global: true
  })
  LAUNCH() {
    return this.$send(WelcomeOutput);
  }

}