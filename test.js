/**
 * Created by МАКС on 24.01.2017.
 */
function PhoneFabric(){
    this.phoneQuantity = 0;
}

PhoneFabric.prototype.MANUFACTURE_TIME_ONE_PHONE = 2;

PhoneFabric.prototype.getManufactureHours = function (){
    return this.phoneQuantity * this.MANUFACTURE_TIME_ONE_PHONE;
};

PhoneFabric.prototype.manufactureTime = function (){
    var manufactureHours = this.getManufactureHours();
    return manufactureHours * 100;
};

PhoneFabric.prototype.manufacture = function(){
    setTimeout(function(){
        var result = (this.phoneQuantity === 1) ?
            '1 phone manufactured by 2 hours.' :
        this.phoneQuantity + ' phones manufactured by ' + this.getManufactureHours() + ' hours.';
        console.log(result);
    }.bind(this), this.manufactureTime());
};

PhoneFabric.prototype.setPhoneQuantity = function(quantity){
    this.phoneQuantity = quantity;
};


var phoneFabric = new PhoneFabric();
phoneFabric.setPhoneQuantity(15);
phoneFabric.manufacture();