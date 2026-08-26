// CIJS-114: Lesson 2 Exercises

// Bài 1: Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// Bài 2: Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr.
const countOccurrences = (arr, value) => arr.filter(x => x === value).length;

// Bài 3: Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
const removeDuplicates = (arr) => [...new Set(arr)];

// Bài 4: Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D thành mảng 1D.
const flattenArray = (arr) => arr.flat();

// Bài 5: Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không.
const isSymmetric = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
};

// Bài 6: Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.
const findSecondLargest = (arr) => {
    const unique = [...new Set(arr)];
    if (unique.length < 2) return undefined;
    unique.sort((a, b) => b - a);
    return unique[1];
};

// Bài 7: Viết hàm sortProductsByPrice(products) sắp xếp danh sách sản phẩm theo giá tăng dần.
const sortProductsByPrice = (products) => [...products].sort((a, b) => a.price - b.price);

// Bài 8: Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.
const findMostExpensiveProduct = (products) => {
    if (products.length === 0) return null;
    return products.reduce((maxProd, prod) => prod.price > maxProd.price ? prod : maxProd, products[0]);
};

// Bài 9: Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).
const groupByType = (arr) => {
    return arr.reduce((acc, curr) => {
        if (!acc[curr.type]) {
            acc[curr.type] = [];
        }
        acc[curr.type].push(curr.name);
        return acc;
    }, {});
};

// Bài 10: Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
const isSubset = (arr1, arr2) => arr2.every(val => arr1.includes(val));

// Bài 11: Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
const findMaxKey = (obj) => {
    let maxKey = null;
    let maxValue = -Infinity;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] > maxValue) {
                maxValue = obj[key];
                maxKey = key;
            }
        }
    }
    return maxKey;
};

// Bài 12: Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
const mergeObjectsSumValues = (obj1, obj2) => {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = (result[key] || 0) + obj2[key];
        }
    }
    return result;
};

// Bài 13: Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
const countElements = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
};

// Bài 14: Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.
const cleanObject = (obj) => {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] !== null && obj[key] !== undefined) {
                result[key] = obj[key];
            }
        }
    }
    return result;
};

// Bài 15: Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// Bài 16: Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
const sumByGroup = (arr, key) => {
    return arr.reduce((acc, curr) => {
        const groupVal = curr[key];
        acc[groupVal] = (acc[groupVal] || 0) + (curr.price || 0);
        return acc;
    }, {});
};

// Bài 17: Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
const uniqueValues = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// Bài 18: Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
const isPermutation = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return sorted1.every((val, index) => val === sorted2[index]);
};

// Bài 19: Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
const findLongestString = (arr) => {
    if (arr.length === 0) return "";
    return arr.reduce((longest, curr) => curr.length > longest.length ? curr : longest, arr[0]);
};

// Bài 20: Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
const intersection = (arr1, arr2) => arr1.filter(val => arr2.includes(val));

// Bài 21: Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
const filterByMinValue = (arr, minValue) => arr.filter(x => x >= minValue);

// Bài 22: Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.
const findLongestValue = (obj) => {
    let longest = "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const val = String(obj[key]);
            if (val.length > longest.length) {
                longest = val;
            }
        }
    }
    return longest;
};

// Bài 23: Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.
const groupByFirstLetter = (arr) => {
    return arr.reduce((acc, curr) => {
        if (curr.length > 0) {
            const firstLetter = curr[0].toLowerCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(curr);
        }
        return acc;
    }, {});
};

// Bài 24: Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
const getAdults = (people) => people.filter(person => person.age >= 18);

// Bài 25: Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].
const convertToArray = (obj) => Object.entries(obj);

// Bài 26: Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.
const sortStringsByLength = (arr) => [...arr].sort((a, b) => a.length - b.length);

// Bài 27: Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.
const sumByKey = (arr, key) => arr.reduce((acc, curr) => acc + (Number(curr[key]) || 0), 0);

// Bài 28: Viết hàm countWords(str) để đếm số từ trong một chuỗi.
const countWords = (str) => {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
};

// Bài 29: Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.
const findMinKey = (obj) => {
    let minKey = null;
    let minValue = Infinity;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] < minValue) {
                minValue = obj[key];
                minKey = key;
            }
        }
    }
    return minKey;
};


