import { BrandSelection } from "../../pageObject/BrandSelection";
import { LoginPage } from "../../pageObject/LoginPage";
import { SearchProduct } from "../../pageObject/SearchProduct";
import { Page } from "playwright/test";
import { SelectProducts } from "../../pageObject/SelectProduct";
import { AddingToCart } from "../../pageObject/AdddingToCart";
import { CartPage } from "../../pageObject/CartPage";


export class POManager {
  page: Page;
  newPage: Page | undefined;
  loginPage: LoginPage;
  searchProduct: SearchProduct;
  brand: BrandSelection;
  selectProducts: SelectProducts;
  addingToCart: AddingToCart | undefined;
  cartPage: CartPage | undefined;
   static getserachProduct: any;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.searchProduct = new SearchProduct(this.page);
    this.brand = new BrandSelection(page);
    this.selectProducts = new SelectProducts(page);
    this.addingToCart = undefined;
    this.cartPage = undefined;
  }

  setNewPage(newPage: Page) {
    this.newPage = newPage;
    this.addingToCart = new AddingToCart(this.newPage);
    this.cartPage = new CartPage(this.newPage);

  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }
  getserachProduct(): SearchProduct {
    return this.searchProduct;
  }

  /* getbrandList(): BrandSelection {
     return this.brand;
   }*/

  getProductPage(): SelectProducts {
    if (this.newPage) {
      this.selectProducts = new SelectProducts(this.newPage);
    }

    return this.selectProducts;
  }

  getaddingToCartPage(): AddingToCart | undefined {
    return this.addingToCart;
  }

  getCartPage(): CartPage | undefined {
    return this.cartPage;

  }

}