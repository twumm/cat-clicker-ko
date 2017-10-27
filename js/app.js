var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('some link here')

    // 
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    // function to change cat level name using computed observables?
    this.catLevel = ko.computed(function() {
        if (this.clickCount() <= 10) {
            return "Newborn";
        } else if (this.clickCount() <= 20) {
            return "Infant";
        } else if (this.clickCount() <= 50) {
            return "Teen";
        } else if (this.clickCount() <= 100) {
            return "Adult";
        } else {
            return "Grown and Sexy";
        }

        // one liner not working :/
        // this.catLevel = (this.clickCount() <= 2 ? "Newborn" : this.clickCount() <= 5 ?
        //     "Infant" : this.clickCount() <= 8 ? "Teen" : this.clickCount() <= 12 ? "Adult" : "Grown");
        // return this.catLevel;
    }, this);
}

// Initiate the ViewModel
ko.applyBindings(new ViewModel());