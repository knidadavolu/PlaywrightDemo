import { Page } from "playwright";
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { SelectHotelPage } from '../pages/SelectHotelPage';
import { BookHotelPage } from '../pages/BookHotelPage';
import { BookingConfirmationPage } from '../pages/BookingConfirmationPage';
export class PageObjectManager {
    page: Page
    loginPage: LoginPage
    homePage: HomePage
    selectHotelPage: SelectHotelPage
    bookHotelPage: BookHotelPage
    bookConfirmationPage: BookingConfirmationPage
    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.selectHotelPage = new SelectHotelPage(this.page);
        this.bookHotelPage = new BookHotelPage(this.page);
        this.bookConfirmationPage = new BookingConfirmationPage(this.page);
    }

    async getLoginPage() {
        return this.loginPage;
    }
    async getHomePage() {
        return this.homePage;
    }
    async getSelectHotelPage() {
        return this.selectHotelPage;
    }
    async getBookHotelPage() {
        return this.bookHotelPage;
    }
    async getBookConfirmationPage() {
        return this.bookConfirmationPage;
    }







}