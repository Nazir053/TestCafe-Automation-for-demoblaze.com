import { Selector } from "testcafe";
import My_method from "../package/method";

import Element_selector  from "../package/elements";

const element_selector = new Element_selector()

const my_method = new My_method()

fixture`Getting started with TestCafe`
    .page`https://www.demoblaze.com/`

test("log in Test", async t => {
    await my_method.logIn();


})

test("sign up Test '@nh'", async t =>{
    await t.click(element_selector.signUP);
    await t.typeText(element_selector.signUpUser, "hhfkfksn");
    await t.typeText(element_selector.signInPass, "anjsdjb");
    await t
        .setNativeDialogHandler(() => true)
        .click(element_selector.signUpButton);

})

test("delete from card test '@nh'", async delete_test=>{
    await delete_test.click(element_selector.cart);
    await delete_test.click(element_selector.delete);
    

})