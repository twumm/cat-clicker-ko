var initialCats = [{
        clickCount: 0,
        name: 'Mindy',
        imgSrc: 'img/cat1.jpg',
        nicknames: [
            { nickname: 'Miner' },
            { nickname: 'Minar' },
            { nickname: 'Minir' },
        ]
    },
    {
        clickCount: 0,
        name: 'Kitty Galore',
        imgSrc: 'img/cat2.jpg',
        nicknames: [
            { nickname: 'Toyer' },
            { nickname: 'Toyar' },
            { nickname: 'Toyir' },
        ]
    },
    {
        clickCount: 0,
        name: 'Kitty Row',
        imgSrc: 'img/cat3.jpg',
        nicknames: [
            { nickname: 'Kiter' },
            { nickname: 'Kitar' },
            { nickname: 'Kitir' },
        ]
    },
    {
        clickCount: 0,
        name: 'Kitty Saf',
        imgSrc: 'img/cat4.jpg',
        nicknames: [
            { nickname: 'Safer' },
            { nickname: 'Safar' },
            { nickname: 'Safir' },
        ]
    },
    {
        clickCount: 0,
        name: 'Kitty Ju',
        imgSrc: 'img/cat5.jpg',
        nicknames: [
            { nickname: 'Juyer' },
            { nickname: 'Juyar' },
            { nickname: 'Juyir' },
        ]
    }
]

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    // this.imgAttribution = ko.observable('some link here');
    this.nicknames = ko.observableArray(data.nicknames);
    // this.catLevel = ko.observable(catLevel);

    // function to change cat level name using computed observables?
    this.catLevel = ko.computed(function() {
        var levelName = ""
        if (this.clickCount() <= 10) {
            levelName = "Newborn";
        } else if (this.clickCount() <= 20) {
            levelName = "Infant";
        } else if (this.clickCount() <= 50) {
            levelName = "Teen";
        } else if (this.clickCount() <= 100) {
            levelName = "Adult";
        } else {
            levelName = "Grown and Sexy";
        }
        return levelName;

        // one liner not working :/
        // this.catLevel = (this.clickCount() <= 2 ? "Newborn" : this.clickCount() <= 5 ?
        //     "Infant" : this.clickCount() <= 8 ? "Teen" : this.clickCount() <= 12 ? "Adult" : "Grown");
        // return this.catLevel;
    }, this);
}

var ViewModel = function() {
    // self will map to the ViewModel
    var self = this;

    this.catList = ko.observableArray([]);

    // loop through initialCat list and push into catList array
    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    // new/current cat
    this.currentCat = ko.observable(this.catList()[0]);


    self.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        // this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

    // set the cat when it is clicked
    self.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
}

// Initiate the ViewModel
ko.applyBindings(new ViewModel());