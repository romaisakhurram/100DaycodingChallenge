var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Day 16
//Q46
var laptop = {
    make: "Dell",
    model: "cori i9 ",
    year: 2020,
    describelaptop: function () {
        console.log("This laptop is a ".concat(this.make, ", ").concat(this.model, " and ").concat(this.year));
    },
};
laptop.describelaptop();
//Q47
var laptops = [
    {
        make: "hp",
        model: "XPS 15",
        year: 2023,
    },
    {
        make: "Dell",
        model: "spectra 360",
        year: 2022,
    },
    {
        make: "hp",
        model: "Mac book pro",
        year: 2021,
    }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
//Q48
var setPrice1 = [500000, 200000, 1000];
var setPrice2 = [700000, 300000, 900000];
var combined_price = __spreadArray(__spreadArray([], setPrice1, true), setPrice2, true).sort();
console.log(combined_price);
