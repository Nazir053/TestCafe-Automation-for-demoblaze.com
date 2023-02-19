import { Selector } from "testcafe";

import Element_selector  from "../package/elements";

const element_selector = new Element_selector()

fixture `Getting started with TestCafe`
    .page`https://www.demoblaze.com/`

test("First Test", async t =>{
    await t.click(element_selector.signUP);
    await t.typeText(element_selector.signUpUser, "hhfkfksn");
    await t.typeText(element_selector.signInPass, "anjsdjb");
    await t
        .setNativeDialogHandler(() => true)
        .click(element_selector.signUpButton);
    await t.debug();

})
