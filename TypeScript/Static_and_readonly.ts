
export class Configuration {
    // Biến chứa số lượng người đang truy cập trang web
   static CURRENT_VISITOR_COUNT = 1;
    // Các số có giá trị cố định
    static PI = 3.1428;

    readonly PREFIX_URL = 'https://www.myapi.com/api/';
    readonly RETRY_TIMES = 3;

    // Kết hợp giữa các đặc tính static có và readonly cũng có
    static readonly IS_PRODUCTION = true;
}

// truy xuất giá trị biến <static> mà không cần khởi tạo thực thể, không đi qua constructor
// chỉ cần Tên Lớp(.)Thuộc tính
let tmp = Configuration.PI;
// Có thể gán lại giá trị cho biến static
Configuration.PI = 3.14;
// Không thể truy cập thông qua thực thể của lớp
let tmp1 = new Configuration().PI;

// Không giống static, không thể truy xuất thuộc tính mà không có thực thể.
let tmp2 = Configuration.PREFIX_URL;
let tmp3 = new Configuration().PREFIX_URL;
// Không thể gán giá trị khác cho biến readonly
new Configuration().PREFIX_URL = 'New Value';

// static readonly property
Configuration.IS_PRODUCTION;
Configuration.IS_PRODUCTION = false;