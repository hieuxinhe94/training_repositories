
module Utils {
    // Khai báo namespace : gom các function, class ... có chung các đặc điểm lại với nhau
    export namespace NumbericUtils {
        // các hàm xử lý toán học:

        function Add(a: number, b: number): number {
            return a + b;
        }

        function Mul(a: number, b: number): number {
            return a * b;
        }

        class MathConst {
            static readonly PI = 3.14;
        }

        export function Adds(...a: number[]): number {
            let result = 0;
            a.forEach((val) => {
                result += val;
            })
            return result;
        }
    }

    namespace MathUtils {
        // các hàm xử lý toán học phức tạp hơn:

        function SumNumberArrays(a1: number[], a2: []): number {
            let sumArr = NumbericUtils.Adds(...a1);
            sumArr += NumbericUtils.Adds(...a2);
            return sumArr;
        }
    }
}

module ABC {

    // Từ module ABC sử dụng tất cả các namespace đã được export từ module Utils
    // Từ namespace NumbericUtils, sử dụng tất cả các function/class của NumbericUtils
    function Test(a: number[]) {
        const tmp = Utils.NumbericUtils.Adds(...a);
    }

    // Khi module Utils "KHÔNG" export namespace MathUtils
    // Các module khác không thể sử dụng nó
    function Test2(a: number[]) {
        const tmp = Utils.MathUtils.SumNumberArrays(a, a);
    }

    // Note: Các module thì không cần export.
}