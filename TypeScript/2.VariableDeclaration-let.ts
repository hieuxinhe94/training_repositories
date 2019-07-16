//// 1. Khai báo biến một cách tường minh:
// let <tên biến> : <kiểu dữ liệu> = <giá trị>
let employeeName2: string = "John";

// Ví dụ về gán lại giá trị cho biến:
let studentId: number;
studentId = 1001;
studentId = 1002;
// studentId = '1003'; Error: Không thể gán giá trị có kiểu dữ liệu khác

///// 2. let Variables Scope : Phạm vi của từ khóa <let>

// function scope: phạm vi của biến <num1> là cùng với <functionA>.
// (Cùng được khai báo trong file, cùng cấp độ).
let num1: number = 1;

function functionA() {
	// Phạm vi của <num2> là thuộc functionA (cấp độ 2)
	let num2: number = 2;

	if (true) {
		let num3 = 3;

		console.log(num1); // OK.
	}

	console.log(num1); // OK, Phạm vi lớn hơn (bao trùm) functionA
	console.log(num2); // OK, cùng phạm vi functionA

	// Phạm vi của num3 nằm trong khối lệnh (block scope) if-else, 
	// Trong khi vị trí gọi lại nằm "ngoài". => Không thể truy xuất.
	// console.log(num3);
	

	functionA(); // OK: Scope "khi" <functionA> đc định nghĩa
	// là lớn hơn thân hàm của chính nó 
}

// => Nguyên nhân: Phạm vi của biến <num2> thuộc functionA,
// nhưng vị trí gọi hiện tại lại "ngoài" mà không phải "trong" <functionA>. 
// console.log(num2);
// console.log(num3);

functionA();

