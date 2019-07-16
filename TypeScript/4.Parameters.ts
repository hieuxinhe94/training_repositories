// Bài toán: Viết function tính tổng các số nguyên truyền vào.

// Cố định số lượng tham số đầu vào
function Sum(x1: number, x2: number) {
    return x1 + x2;
}

// Trường hợp muốn tính tổng 2 số, hoặc 4,5 số nguyên ????
function SumNumbers(...numbers: number[]): number {
    let result = 0;
    // Lặp từng phần tử của đối số truyền vào
    numbers.forEach(
        // Cộng thêm vào kết quả đầu ra
        (x) => { result += x; }
    );

    return result;
}

// Seem likes java
function Main(...args: string[]) {

}

Sum(1,2, 3);

SumNumbers(1,2,3,4,5,6,7,8,0,1,12,13);