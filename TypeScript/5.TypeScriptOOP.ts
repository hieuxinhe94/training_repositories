
/**
 * Các ví dụ về Lập trình hướng đối tượng trong TypeScript:
 * 
 * Bài toán: Thiết kế mối quan hệ giữa các 
 * lớp Employee (phân theo phòng ban)
 */


// Định nghĩa một (giao kèo: thuộc tính hoặc/và các hành vi)- mà tất cả các loại Employees đều phải có
interface IEmployee {
    EployeeID: number; // Mã nhân viên

    doWork();    // Làm việc
    rest();      // Nghỉ làm
    getSalary(): number;    // Nhận lương
}


// Định nghĩa lớp trừu tượng Employee có các chức năng/ thuộc tính 
// mà IEmployee yêu cầu. Và các thuộc tính/ phương thức có sẵn (dùng chung)
abstract class Employee implements IEmployee {
    EployeeID: number;
    // Thêm các thuộc tính mới vào lớp base (abstract class)
    EmployeeName: string;
    PhoneNumber: string;

    // Thêm hành vi mới vào lớp base
    meeting() {
        console.log('Meeting (from base abstract class)');
    }

    // Thực thi hành vi chung, mà tất cả lớp con đều sử dụng
    rest() {
        console.log('An Employee go to rest');
    }

    // Các hành vi mà IEmployee bắt buộc phải triễn khai/ thực thi
    // Tiếp tục bắt buộc các lớp dẫn xuất thực thi nó.
    abstract doWork();

    getSalary(): number {
        throw new Error("Method not implemented.");
    }

    // Các tham số constructor cho lớp base
    constructor(id: number, name: string, phone: string) {
        this.EployeeID = id;
        this.EmployeeName = name;
        this.PhoneNumber = phone;
    }
}

// Các loại nhân viên trong cơ quan

// Nhân viên bán hàng

class SaleEmployee extends Employee {
    doWork() {
        console.log('SaleEmployee working');
    }

    getSalary() : number {
        return 1000;
    }
}

// Nhân viên nhân sự
class HumanResourceEmployee extends Employee {

    // Thuộc tính riêng mà chỉ HumanResourceEmployee có
    // Khác biệt với các employee khác.
    HumanResourceInfomation : string [];

    doWork() {
        console.log('HumanResourceEmployee working');
    }
    
    constructor(id: number, name: string, phone: string, infomations: string[]) {
        super(id, name, phone);
        this.HumanResourceInfomation = infomations;
    }
    
}

// Nhân viên cấp cao
class ManagerEmployee extends SaleEmployee {
    doWork() {
        console.log('ManagerEmployee working');
    }

    getSalary() {
        return 2 * super.getSalary();
    }
}

// CxO
class CxOEmployee extends Employee {
    doWork() {
        console.log('CxOEmployee working');
    }

}

// Sử dụng các classes

let saleEmployee1 = new SaleEmployee(1, 'sale1', '12345678');
let humanEmployee1 = new HumanResourceEmployee(1, 'human e1', '12345678', ['x', 'y']);

// Display:
// Hành vi từ lớp cha - lớp cơ sở
saleEmployee1.rest();
humanEmployee1.rest();

// Hành vi từ các lớp con 
saleEmployee1.doWork();
humanEmployee1.doWork();

let manager = new ManagerEmployee(1, 'Manager 1', '12345678'); 
console.log( manager.getSalary());

//Employee ep = new Employee(1, '', '');
// Kiểu dữ liệu trừu tượng/ lớp cha/ lớp cơ sở
let epx : IEmployee = new SaleEmployee(1, 'sale1', '12345678');
epx = new HumanResourceEmployee(1, 'sale1', '12345678', []);
epx = new ManagerEmployee(1, 'sale1', '12345678');
epx = new CxOEmployee(1, 'sale1', '12345678');

// Không thể gán cho những lớp/kiểu dữ liệu khác
epx = "";
epx = true;