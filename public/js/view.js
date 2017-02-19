/**
 * Created by МАКС on 20.01.2017.
 */
"use strict";

const SHOW = "block";
const HIDE = "none";

(function () {

    function Gallery(items) {
        this.DOMElements = {
            error : document.querySelector("#error"),
            name : document.querySelector("#name"),
            price : document.querySelector("#price"),
            popular : document.querySelector("#popular"),
            date : document.querySelector("#date"),
            btnAdd : document.querySelector("#btnAdd"),
            btnSave : document.querySelector("#btnSave"),
            headerAdd : document.querySelector("#headerAdd"),
            headerSave : document.querySelector("#headerSave")
        };
        this.items = items; // наш массив data
        this.eventHolder = $({});
    }

    Gallery.prototype = {
        
        validate : function () {
            return (this.DOMElements.name.value
                && this.DOMElements.price.value
                && this.DOMElements.popular.value
                && this.DOMElements.date.value);
        },

        showHideElements : function (elements, status) {
            return elements.forEach(function (item) {
                item.style.display = status;
            })
        },

        getPopular : function () {
            var pop = this.DOMElements.popular.value;
            if ( pop == "да"){
                return "Модель популярна";
            } else if ( pop == "нет"){
                return "Модель не популярна";
            } else {
                this.showHideElements([this.DOMElements.error], SHOW);
            }
        },

        getForm : function () {
            return {
                name: this.DOMElements.name.value,
                price: this.DOMElements.price.value,
                popular: this.getPopular(),
                date: this.DOMElements.date.value,
            }
        },

        cleanForm : function () {
            this.showHideElements([this.DOMElements.error], HIDE);
            this.DOMElements.name.value = "";
            this.DOMElements.price.value = "";
            this.DOMElements.popular.value = "";
            this.DOMElements.date.value = "";
        },

        editElement :function (event) {
            var element = this.getForm();
            this.eventHolder.trigger(event, [element]);
            this.cleanForm();
            this.showHideElements([this.DOMElements.btnAdd, this.DOMElements.headerAdd], SHOW);
            this.showHideElements([this.DOMElements.btnSave, this.DOMElements.headerSave], HIDE);
        },

        initButton : function (eventName) {
            if (this.validate()){
                this.showHideElements([this.DOMElements.error], HIDE);
                this.editElement(eventName);
            } else {
                this.showHideElements([this.DOMElements.error], SHOW);
            }
        }
    };

    window.app = window.app || {};
    window.app.Gallery = Gallery;

}());