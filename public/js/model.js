/**
 * Created by МАКС on 20.01.2017.
 */
"use strict";
(function () {

    var model = function () {

        var newData = [];
        var index = null;

        function getNewData() {
            return newData;
        }

        function getData() {
            return $.get("js/data.json", function (data) {
                console.log("Initial data is loaded");
                setNewData(data);
                return data;
            })
        }

        function setNewData(data) {
            return data.forEach(function (item) {
                newData.push(item);
            })
        }

        function addData(item) {
            newData.unshift(item);
            console.log("Data successfuly saved: ");
            console.log(item);
        }

        function editData(data) {
            index = data.index;
            console.log(data);
            console.log("Data is ready to edit: ");
        }

        function updateData(item) {
            console.log(index);
            newData.splice(index, 1, item);
            console.log("Data successfuly updated: ");
            console.log(item);
        }

        return {
            getNewData: getNewData,
            getData: getData,
            addData: addData,
            editData: editData,
            updateData: updateData
        }
    };

    window.app = window.app || {};
    window.app.model = model();

}());