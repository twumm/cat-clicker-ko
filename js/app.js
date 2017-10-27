var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('some link here');
    this.catNicknames = ko.observableArray([
        { nickname: 'Toyer' },
        { nickname: 'Toyar' },
        { nickname: 'Toyir' },
    ]);

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

var ViewModel = function() {
    // new/current cat
    this.currentCat = ko.observable(new Cat());


    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        // this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

// Initiate the ViewModel
ko.applyBindings(new ViewModel());