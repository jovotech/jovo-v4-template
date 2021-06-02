import { Component, Handle, BaseComponent } from '@jovotech/framework';

@Component()
export class YesNoComponent extends BaseComponent<{ numberOfTries: number }, { output: any }> {
  START() {
    this.$component.$data.numberOfTries = 0;

    return this.$send(this.$component.$config!.output);
  }

  @Handle({
    intents: ['YesIntent'],
  })
  Yes() {
    return this.$resolve('yes');
  }

  @Handle({
    intents: ['NoIntent'],
  })
  No() {
    return this.$resolve('no');
  }

  UNHANDLED() {
    this.$component.$data.numberOfTries++;

    if (this.$component.$data.numberOfTries > 2) {
      return this.$resolve('fail');
    } else {
      return this.$send(this.$component.$config!.output);
    }
  }
}
