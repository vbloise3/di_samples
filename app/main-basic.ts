/**
 * Created by vincebloise on 1/2/17.
 */
import ProductComponent from './components/product';
import {HttpModule, Http} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'app',
    template: `<h1> Basic Dependency Injection Sample</h1>
             <di-product-page></di-product-page>`
})
class AppComponent {}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, ProductComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);