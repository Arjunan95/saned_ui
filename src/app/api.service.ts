import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class APIService {
    
    API_URL = 'http://35.244.46.106:8083';

    constructor(private httpClient: HttpClient) { }
    createContact(contact) {

        return this.httpClient.post(`${this.API_URL}/register`, contact);


    }
    forgetotpverification(contact) {
        return this.httpClient.post(`${this.API_URL}/forgetotpverification`, contact);

    }

    supplierregister(contact) {
        console.log("enter in to the supplier register")
        return this.httpClient.post(`${this.API_URL}/supplier-registration`, contact);

    }
    newsletter(contact) {
        return this.httpClient.post(`${this.API_URL}/newsletter-Residents`, contact);

    }
    sendotp(contact) {
        return this.httpClient.post(`${this.API_URL}/emailotp`, contact);

    }
    forgetpassword(contact) {
        return this.httpClient.post(`${this.API_URL}/forgetpassword`, contact);

    }
    supplieremailotpverification(contact) {
        return this.httpClient.post(`${this.API_URL}/supplieremailotpverification`, contact);

    }
    emailotpverification(contact) {
        return this.httpClient.post(`${this.API_URL}/emailotpverification`, contact);

    }
    login(contact) {
        return this.httpClient.post(`${this.API_URL}/login`, contact);

    }

    fetchContact() {
        return this.httpClient.get(`${this.API_URL}/readUserData/`);
    }

    getRepoIssued(sort: string, order: string, page: number) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.httpClient.get(requestUrl);
    }

}