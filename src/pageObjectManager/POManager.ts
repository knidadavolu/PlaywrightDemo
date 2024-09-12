
import { LoginPage } from "../pages/LoginPage";
import { SearchProduct } from "../pages/SearchProduct";
import { Page } from "playwright/test";
import { SelectProducts } from "../pages/SelectProduct";
import { AddingToCart } from "../pages/AdddingToCart";
import { CartPage } from "../pages/CartPage";
import { BrandSelection } from "../pages/BrandSelection";

export class POManager {
  page: Page;
  loginPage: LoginPage;
  searchProduct: SearchProduct;
  brand: BrandSelection;
  selectProducts: SelectProducts;
  addingToCart: AddingToCart ;
  cartPage: CartPage;
  
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.searchProduct = new SearchProduct(this.page);
    this.brand = new BrandSelection(this.page);
    this.selectProducts = new SelectProducts(this.page);
    this.addingToCart = new AddingToCart(this.page);
    this.cartPage = new CartPage(this.page);
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