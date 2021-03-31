import { Jovo, Output, BaseOutput } from '@jovotech/framework';

@Output()
export class WelcomeOutput extends BaseOutput {

    /*
    * Output Template
    * This structured output is later turned into a native response
    * Learn more here: https://www.jovo.tech/docs/output
    */
    build() {
        return { 
            message: 'Hello World!' 
        }
    };

    constructor(jovo: Jovo) {
        super(jovo);
    }


}