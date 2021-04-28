import { Component, Handle, BaseComponent } from '@jovotech/framework';
import { YesNoComponent } from './YesNoComponent';

import { AskForPizzaLoveOutput } from './output/AskForPizzaLoveOutput';
import { LovesPizzaOutput } from './output/LovesPizzaOutput';
import { HatesPizzaOutput } from './output/HatesPizzaOutput';

@Component({
	components: [YesNoComponent],
})
export class LoveHatePizzaComponent extends BaseComponent {
	START() {
		return this.$delegate(YesNoComponent, {
			resolveTo: {
				yes: this.LovesPizza,
				no: this.HatesPizza,
				fail: this.LovesPizza,
			},
			config: {
				output: AskForPizzaLoveOutput,
			},
		});
	}

	LovesPizza() {
		return this.$send(LovesPizzaOutput);
	}

	HatesPizza() {
		return this.$send(HatesPizzaOutput);
	}

	UNHANDLED() {
		return this.START();
	}
}
