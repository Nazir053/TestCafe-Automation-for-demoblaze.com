import { Selector, t } from "testcafe";
import { faker } from '@faker-js/faker';

import Element_selector from "../package/elements";

const element_selector = new Element_selector()

export default class My_method {
    

    async logIn() {
       
        await t.click(element_selector.logIn, faker.name.fullName());
        await t.typeText(element_selector.logInUser, );
        await t.typeText(element_selector.logInPass, faker.internet.password());
        await t
            .setNativeDialogHandler(() => true)
            .click(element_selector.logInButton);

    }



}

