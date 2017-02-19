/**
 * Created by МАКС on 20.01.2017.
 */
(function () {

    var model = app.model;
    var list = app.list;
    var AddList = app.AddList;
    var SaveList = app.SaveList;
    var Gallery = app.Gallery;
    var addList = null;
    var saveList = null;

    function inheritense (parent, child) {
        var tempChild = child.prototype;
        child.prototype = Object.create(parent.prototype);
        for(var key in tempChild) {
            if (tempChild.hasOwnProperty(key)){
                child.prototype[key] = tempChild[key];
            }
        }
    }

    function bindEdit() {
        list.eventHolder.on( list.editEventName, (event, item) => {
            model.editData(item);
            saveList.set(item);
        });
    }

    function bindAdd() {
        addList.eventHolder.on( addList.addEventName, (event, item) => {
            model.addData(item);
            list.init(model.getNewData());
        });
    }

    function bindSave() {
        saveList.eventHolder.on( saveList.saveEventName, (event, item) => {
            console.log(item);
            model.updateData(item);
            list.init(model.getNewData());
        });
    }

    function bindEvents() {
        bindEdit();
        bindAdd();
        bindSave()
    }

    function initGallery(data) {
        inheritense(Gallery, AddList);
        inheritense(Gallery, SaveList);
        addList = new AddList();
        saveList = new SaveList();
        list.init(data);
        list.initLis();
    }

    function init() {
        model.getData().then((data) => {
            initGallery(data);
            bindEvents();
        });
    }
    init();
}());