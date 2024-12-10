var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Массивы
function findMedian(numbers) {
    var sorted = numbers.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}
function countNonZeroInRange(matrix, start, end) {
    var count = 0;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var num = row_1[_a];
            if (num !== 0 && num >= start && num <= end) {
                count++;
            }
        }
    }
    return count;
}
function multiplyTupleNumbers(tuple) {
    return tuple[0] * tuple[2];
}
// 3. Перечисление
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "Vitamin A";
    Vitamins["B3"] = "Vitamin B3";
    Vitamins["B6"] = "Vitamin B6";
    Vitamins["B12"] = "Vitamin B12";
    Vitamins["E"] = "Vitamin E";
})(Vitamins || (Vitamins = {}));
// 4. Дженерики
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = "Some pet";
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Barsik";
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function displayPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Speak: ").concat(pet.speak()));
}
var vitamin = {
    type: Vitamins.A,
    name: "Retinol",
    amountMg: 900,
    benefits: ["Improves vision", "Boosts immunity", "Supports skin health"],
};
console.log("Середина:", findMedian([5, 3, 8, 1, 9]));
console.log("Количество ненулевых значений [-5, 4]:", countNonZeroInRange([[0, 2, 3], [4, 0, 6], [7, 8, 0]], 3, 7));
console.log("Произведение числовых значений (кортеж):", multiplyTupleNumbers([4, "hello", 5]));
console.log("Тип витамина:", Vitamins.B12);
displayPetInfo(new Dog());
displayPetInfo(new Cat());
console.log("Витамин Info JSON:", JSON.stringify(vitamin, null, 2));
