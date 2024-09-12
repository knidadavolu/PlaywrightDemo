import { Page } from "playwright/test";
import { BrandSelection } from "../pages/BrandSelection";
import { LoginPage } from "../pages/LoginPage";
import { SearchProduct } from "../pages/SearchProduct";
import { SelectProducts } from "../pages/SelectProduct";
import { AddingToCart } from "../pages/AdddingToCart";
import { CartPage } from "../pages/CartPage";

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
