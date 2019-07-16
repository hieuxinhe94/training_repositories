/**
 * Các ví dụ về Lập trình hướng đối tượng trong TypeScript:
 *
 * Bài toán: Thiết kế mối quan hệ giữa các
 * lớp Employee (phân theo phòng ban)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Định nghĩa lớp trừu tượng Employee có các chức năng/ thuộc tính 
// mà IEmployee yêu cầu. Và các thuộc tính/ phương thức có sẵn (dùng chung)
var Employee = /** @class */ (function () {
    // Các tham số constructor cho lớp base
    function Employee(id, name, phone) {
        this.EployeeID = id;
        this.EmployeeName = name;
        this.PhoneNumber = phone;
    }
    // Thêm hành vi mới vào lớp base
    Employee.prototype.meeting = function () {
        console.log('Meeting (from base abstract class)');
    };
    // Thực thi hành vi chung, mà tất cả lớp con đều sử dụng
    Employee.prototype.rest = function () {
        console.log('An Employee go to rest');
    };
    Employee.prototype.getSalary = function () {
        throw new Error("Method not implemented.");
    };
    return Employee;
}());
// Các loại nhân viên trong cơ quan
// Nhân viên bán hàng
var SaleEmployee = /** @class */ (function (_super) {
    __extends(SaleEmployee, _super);
    function SaleEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaleEmployee.prototype.doWork = function () {
        console.log('SaleEmployee working');
    };
    SaleEmployee.prototype.getSalary = function () {
        return 1000;
    };
    return SaleEmployee;
}(Employee));
// Nhân viên nhân sự
var HumanResourceEmployee = /** @class */ (function (_super) {
    __extends(HumanResourceEmployee, _super);
    function HumanResourceEmployee(id, name, phone, infomations) {
        var _this = _super.call(this, id, name, phone) || this;
        _this.HumanResourceInfomation = infomations;
        return _this;
    }
    HumanResourceEmployee.prototype.doWork = function () {
        console.log('HumanResourceEmployee working');
    };
    return HumanResourceEmployee;
}(Employee));
// Nhân viên cấp cao
var ManagerEmployee = /** @class */ (function (_super) {
    __extends(ManagerEmployee, _super);
    function ManagerEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagerEmployee.prototype.doWork = function () {
        console.log('ManagerEmployee working');
    };
    ManagerEmployee.prototype.getSalary = function () {
        return 2 * _super.prototype.getSalary.call(this);
    };
    return ManagerEmployee;
}(SaleEmployee));
// CxO
var CxOEmployee = /** @class */ (function (_super) {
    __extends(CxOEmployee, _super);
    function CxOEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CxOEmployee.prototype.doWork = function () {
        console.log('CxOEmployee working');
    };
    return CxOEmployee;
}(Employee));
// Sử dụng các classes
var saleEmployee1 = new SaleEmployee(1, 'sale1', '12345678');
var humanEmployee1 = new HumanResourceEmployee(1, 'human e1', '12345678', ['x', 'y']);
// Display:
// Hành vi từ lớp cha - lớp cơ sở
saleEmployee1.rest();
humanEmployee1.rest();
// Hành vi từ các lớp con 
saleEmployee1.doWork();
humanEmployee1.doWork();
var manager = new ManagerEmployee(1, 'Manager 1', '12345678');
console.log(manager.getSalary());
//Employee ep = new Employee(1, '', '');
var epx = new SaleEmployee(1, 'sale1', '12345678');
epx = new HumanResourceEmployee(1, 'sale1', '12345678', []);
epx = new ManagerEmployee(1, 'sale1', '12345678');
epx = new CxOEmployee(1, 'sale1', '12345678');
