import { BaseOutput } from '@jovotech/framework';
import { OutputTemplate } from '@jovotech/output';

export class HatesPizzaOutput extends BaseOutput {
	/*
    |--------------------------------------------------------------------------
    | Output Template
    |--------------------------------------------------------------------------
    |
    | This structured output is later turned into a native response
    | Learn more here: www.jovo.tech/docs/output
    |
    */
	build(): OutputTemplate | OutputTemplate[] {
		return {
			message: "That's OK! Not everyone likes pizza.",
		};
	}
}
