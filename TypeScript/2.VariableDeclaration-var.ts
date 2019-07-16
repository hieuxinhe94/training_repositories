//// 1. Khai báo biến một cách tường minh:
// var <tên biến> : <kiểu dữ liệu> = <giá trị>
var employeeName2: string = "John";

// Ví dụ về gán lại giá trị cho biến:
var studentId: number;
studentId = 1001;
studentId = 1002;
// studentId = '1003': Error: Sai kiểu dữ liệu

///// 2. var Variables Scope : Phạm vi của từ khóa <var>
var num1: number = 1;

function functionA() {
	// Phạm vi của <num2> là thuộc functionA (cấp độ 2)
	var num2: number = 2;

	if (false) {
		var num3 = 3;
		console.log(num1); // OK.
	}
	console.log(num1);
	console.log(num2);
	console.log(num3); // Biên dịch OK, Tuy rằng giá trị là undefined.
	
    functionA();  // OK
}

functionA();
 
 //  Error: Phạm vi của <num2> là thuộc (File) > functionA
 // => Global của <num2> ở đây chỉ có thể là từ functionA > (File | class) trở đi thôi
// console.log(num2);

if(false) {
    var num3 = 3;
}

// OK: Phạm vi của <num3> là thuộc (File|class) > khối lệnh if
// => Global scope là (File|class)
console.log(num3);



