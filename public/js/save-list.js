/**
 * Created by МАКС on 27.01.2017.
 */
"use strict";

(function () {

    function SaveList() {
        app.Gallery.apply(this);
        this.saveEventName = "save";
        this.init();
    }

    SaveList.prototype = {


        set : function (item) {
            this.DOMElements.name.value = item.name;
            this.DOMElements.price.value = item.price;
            this.DOMElements.popular.value = item.popular;
            this.DOMElements.date.value = item.date;
            this.showHideElements([this.DOMElements.btnAdd, this.DOMElements.headerAdd], HIDE);
            this.showHideElements([this.DOMElements.btnSave, this.DOMElements.headerSave], SHOW);
        },

        init : function () {
            this.DOMElements.btnSave.addEventListener("click", () => this.initButton(this.saveEventName));
        },

    };

    window.app = window.app || {};
    window.app.SaveList = SaveList;

}());