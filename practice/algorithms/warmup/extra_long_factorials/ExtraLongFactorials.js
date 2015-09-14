function processData(input) {
    var n = parseInt(input);
    console.log(formatNumber(factorial(n)));
    console.log(toFixed(factorial(n)));

    function factorial(n)
    {
        if(n <= 1)
        {
            return 1;
        }
        else
        {
            return n * factorial(n-1);
        }
    }

    function formatNumber(n)
    {
        var s = n.toString();
        if(s.indexOf('.') != -1 && s.indexOf('e') != -1)
        {
            var exponent = parseInt(s.substring(s.indexOf('e'), s.length))
            console.log(exponent);
            return n * (10 ^ exponent);
        }
        return n;
    }

    function toFixed(x) {
      if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
      } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
      }
      return x;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});