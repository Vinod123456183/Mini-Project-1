const C = document.getElementById('celsiusInput');
const F = document.getElementById('fahrenheitInput');

// const C2F = c => (c * 9/5) + 32;
// const F2C = f => (f - 32) * 5/9;



function C2F(c) {
    return (c * 9/5) + 32;
}

function F2C(f) {
    return (f - 32) * 5/9;
} 

C.addEventListener('input', () => {
    const cv = C.value;
    if (!isNaN(parseFloat(cv))) {
        F.value = parseFloat(C2F(cv));
    } else {
        F.value = '';
    }
});

F.addEventListener('input', () => {
    const fv = F.value;
    if (!isNaN(parseFloat(fv))) {
        C.value = parseFloat(F2C(fv));
    } else {
        C.value = '';
    }
});
