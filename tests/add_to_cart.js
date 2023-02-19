import { Selector } from "testcafe";

import Element_selector from "../package/elements";

var element_selector = new Element_selector()

fixture `product add to card test`
.page `https://www.demoblaze.com/`

test("add to card test", async card_test=>{
    await card_test.click(element_selector.productSamsangS6);
    await card_test.click(element_selector.addToCartButton);


})