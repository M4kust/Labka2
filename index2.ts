// 1. Массивы
function findMedian(numbers: number[]): number {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}

function countNonZeroInRange(matrix: number[][], start: number, end: number): number {
    let count = 0;
    for (const row of matrix) {
        for (const num of row) {
            if (num !== 0 && num >= start && num <= end) {
                count++;
            }
        }
    }
    return count;
}

// 2. Кортеж
type CustomTuple = [number, string, number];

function multiplyTupleNumbers(tuple: CustomTuple): number {
    return tuple[0] * tuple[2];
}

// 3. Перечисление
enum Vitamins {
    A = "Vitamin A",
    B3 = "Vitamin B3",
    B6 = "Vitamin B6",
    B12 = "Vitamin B12",
    E = "Vitamin E",
}

// 4. Дженерики
class Pet {
    name: string = "Some pet";
    age: number = -1;
    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = "Barsik";
    age = 2;
    speak(): string {
        return "Miyau!";
    }
}

function displayPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}

// 5. Кастомный тип
type VitaminInfo = {
    type: Vitamins;
    name: string;
    amountMg: number;
    benefits: string[];
};

const vitamin: VitaminInfo = {
    type: Vitamins.A,
    name: "Retinol",
    amountMg: 900,
    benefits: ["Improves vision", "Boosts immunity", "Supports skin health"],
};

console.log("Середина:", findMedian([5, 3, 8, 1, 9]));
console.log("Количество ненулевых значений [4, 7]:", countNonZeroInRange([[0, 2, 3], [4, 0, 6], [7, 8, 0]], 3, 7));
console.log("Произведение числовых значений (кортеж):", multiplyTupleNumbers([4, "hello", 5]));
console.log("Тип витамина:", Vitamins.B12);
displayPetInfo(new Dog());
displayPetInfo(new Cat());
console.log("Витамин Info JSON:", JSON.stringify(vitamin, null, 2));
