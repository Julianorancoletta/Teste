export class CurrencyUtils {

    public static StringParaDecimal(input): any {
        if (input === null) return 0;
        input = input.replace(/\D/g, '').replace(/([0-9]{2})$/g, ".$1")
        return Number(input);
    }

    public  static DecimalParaString(input): any {
        debugger
        var ret = (input) ? input.toString().replace(".", ",") : null;
        if (ret) {
            var decArr = ret.split(",");
            if (decArr.length > 1) {
                var dec = decArr[1].length;
                if (dec === 1) { ret += "0"; }
            }
        }
        return ret;
    }
}