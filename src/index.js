module.exports =
function getZerosCount(number, base) {
    var res = 9999999999;
    dic_of_primes = findPrimes(base)

    for (var k in dic_of_primes){
        var cnt = 0;
        var zeros = Math.floor(number / parseInt(k));
        while (zeros > 0) {
            cnt += zeros;
            zeros = Math.floor(zeros /parseInt(k));
        }
        res = Math.min(res, Math.floor(cnt / dic_of_primes[k]))
    }

    return res;
}



function findPrimes(base) {
    len = base;
    dic_of_primes = {};
    var freq = 0;
    for (var i = 2; i <= len; i++) {
        while (base > 1 && base % i == 0) {
            base = Math.floor(base / i);
            freq++;
        }
        if (freq > 0) {
            dic_of_primes[i] = freq;
        }
        freq = 0
    }
    return dic_of_primes
}
