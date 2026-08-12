function capitalise(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function truncate(string, length) {
    if (string.length <= length) {
        return string;
    }

    return string.slice(0, length) + '...';
}

function camelCase(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word;
            }

            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function isPalindrome(string) {
    const reversed = reverse(string);

    return string === reversed;
}

export {
    capitalise,
    truncate,
    camelCase,
    reverse,
    isPalindrome
};