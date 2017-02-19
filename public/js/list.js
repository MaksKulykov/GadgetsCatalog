/**
 * Created by МАКС on 27.01.2017.
 */
"use strict";
(function () {

    var list = function () {

        var DOMElements = {
            result : document.querySelector("#result")
        };
        var eventHolder = $({});
        var editEventName = "edit";

        function initListener() {
            DOMElements.result.addEventListener("click", (event) => {
                if (event.target.getAttribute("data-class") == "btnEdit") {
                    var parent = event.target.closest(".row");
                    eventHolder.trigger(editEventName, [createElement(parent)]);
                }
            });
        }

        function getPopular(el){
            var pop = el;
            if ( pop == "Модель популярна"){
                return "да";
            } else if ( pop == "Модель не популярна"){
                return "нет";
            } else {
                this.showHideElements([this.DOMElements.error], SHOW);
            }
        }

        function createElement(item) {
            var elem = item.getElementsByTagName('p');
            return {
                name : elem[0].textContent.split(':')[1].trim(),
                price : elem[1].textContent.split(':')[1].split('г')[0].trim(),
                popular : getPopular(elem[2].textContent.split(':')[1].trim()),
                date : elem[3].textContent.split(':')[1].trim(),
                index : createIndex(item)
            }
        }

        function createIndex(parent) {
            var grandParent = parent.parentNode;
            for(var i = 0; i < grandParent.children.length; i++) {
                if (grandParent.children[i] == parent) {
                    console.log("мы нажали на элемент " + i);
                    return i;
                }
            }
        }

        function changePrice (price) {
            return price + " грн";
        }

        function changePopular (popular) {
            return popular == true ? " Модель популярна" : " Модель не популярна";
        }

        function changeDate (date) {
            var strDate = String(date);
            var tmpDate;
            if (strDate.length == 13) {
                tmpDate = new Date(date);
            } else {
                tmpDate = new Date();
            }
            return tmpDate.getFullYear() + "/" +
                (tmpDate.getMonth() + 1) + "/" +
                tmpDate.getDate();
        }

        function buildList(data) {
            var res = data.reduce(function (sum, item){
                return sum + `<div class="row">
						<div class="col-lg-6">
							<div class="thumbnail">
								<div class="caption">
									<p><b>Название    :</b> ${item.name} </p>
									<p><b>Цена        :</b> ${changePrice(item.price)}</p>
									<p><b>Популярность:</b> ${changePopular(item.popular)}</p>
									<p><b>Дата        :</b> ${changeDate(item.date)}</p>
								</div>
							</div>
						</div>
						<div class="col-lg-2">
							<div class="btn btn-default" data-class="btnEdit">Редактировать</div>
						</div>
					</div>`;
            },"");
            DOMElements.result.innerHTML = res;
        }

        return {
            eventHolder : eventHolder,
            editEventName : editEventName,
            initLis : function () {
                initListener();
            },
            init : function(data){
                buildList(data);
            }
        }
    };

    window.app = window.app || {};
    window.app.list = list();

}());