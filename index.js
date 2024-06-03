function commonPrefix(inputs) {
    function calculateZArray(s) {
        const Z = Array(s.length).fill(0);
        let left = 0, right = 0, K;
        for (let i = 1; i < s.length; i++) {
            if (i > right) {
                left = right = i;
                while (right < s.length && s[right] === s[right - left]) {
                    right++;
                }
                Z[i] = right - left;
                right--;
            } else {
                K = i - left;
                if (Z[K] < right - i + 1) {
                    Z[i] = Z[K];
                } else {
                    left = i;
                    while (right < s.length && s[right] === s[right - left]) {
                        right++;
                    }
                    Z[i] = right - left;
                    right--;
                }
            }
        }
        return Z;
    }

    const results = [];
    for (const s of inputs) {
        const Z = calculateZArray(s);
        const totalSum = s.length + Z.reduce((sum, val) => sum + val, 0);
        results.push(totalSum);
    }

    return results;
}

const inputs1 = ['abcabcd'];
const inputs2 = ['ababaa'];
const inputs3 = ['aa'];
const inputs4 = ['ababababab'];

console.log(commonPrefix(inputs1));
console.log(commonPrefix(inputs2));
console.log(commonPrefix(inputs3));
console.log(commonPrefix(inputs4));