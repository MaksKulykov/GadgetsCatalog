/**
 * Created by МАКС on 27.01.2017.
 */
"use strict";

(function () {

    function AddList() {
        app.Gallery.apply(this);
        this.addEventName = "add";
        this.init();
    }

    AddList.prototype = {
        init : function () {
            this.DOMElements.btnAdd.addEventListener("click", () => this.initButton(this.addEventName));
        },

    };

    window.app = window.app || {};
    window.app.AddList = AddList;

}());