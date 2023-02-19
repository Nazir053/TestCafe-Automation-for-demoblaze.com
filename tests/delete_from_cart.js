import { Selector } from "testcafe";

import Element_selector from "../package/elements";

var element_selector = new Element_selector()

fixture `product add to card test`
.page `https://www.demoblaze.com/`

test("delete from card test", async delete_test=>{
    await delete_test.click(element_selector.cart);
    await delete_test.click(element_selector.delete);
    

})