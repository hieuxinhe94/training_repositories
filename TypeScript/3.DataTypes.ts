/**
 *  Các ví dụ về các kiểu dữ liệu trong TypeScript
 */

// 1. String
let studentName1: string = "A";
let studentName2 = "A";

// 2. Number
let age: number = 19;  // Số nguyên
const PI = 3.14;       // Số thực
const BINARY = 0b1101; // Nhị phân

// 3. Boolean
let hasSeen = true;
const IS_MAN: boolean = true;

// 4. Arrays: Mảng, các phần tử có thể cùng kiểu hoặc không tùy định nghĩa
let students = ['A', 'B', "C", "D"];
let teachers: string[] = ['A', 'B', "C", "D"];
let ids: number[] = [1, 2, 3, "Error"]; // Giới hạn kiểu dữ liệu nhập vào array

let students2: Array<string> = ['A', 'B', "C", "D"];
let teachers2: Array<string | number> = ['A', 1, "C", 2]; // Giới hạn nhiều kiểu dữ liệu
let ids2: (number | string)[] = [1, 2, 3, "ABCXYZ"]; // Các cách khai báo khác nhau
// 5. Any : Bất kỳ kiểu dl nào

let anything: any;
anything = "String";
anything = true;
anything = [];

// 6. Tuple
let studentsTp = [
    [ 1, "A", 2000],
    [ 2, "B", 2001],
    [ 3, "C", 2002],
]

function TupleExample() {
    // Hàm trả về một kiểu dữ liệu không cần định nghĩa trước.
    return ["Value 1", 2, "value 3"];

}


 // 7. Others

