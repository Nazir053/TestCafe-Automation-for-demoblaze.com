import { Selector } from "testcafe";
export default class Element_selector {
    constructor() {
        this.signUP = Selector("#signin2");
        this.signUpButton = Selector("button").withText("Sign up");
        this.signUpUser = Selector("#sign-username");
        this.signInPass = Selector("#sign-password");

        this.logIn = Selector("#login2");
        this.logInUser = Selector("#loginusername");
        this.logInPass = Selector("#loginpassword");
        this.logInButton = Selector("button").withText("Log in");

        this.productSamsangS6 = Selector(".hrefch").withText("Samsung galaxy s6")
        this.addToCartButton = Selector(".btn").withText('Add to cart');

        this.cart = Selector(".nav-link").withText("Cart");
        this.delete = Selector('a').withText("Delete");


    }
    async signUPmethod() {
        await t.click(this.signUP);
    }
}
  