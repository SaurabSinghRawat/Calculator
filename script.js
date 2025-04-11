let display = document.getElementById('display');

function appendValue(value) {
    if (value === '%') {
        convertToPercentageAndMultiply();
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function convertToPercentageAndMultiply() {
    try {
        let lastNumberMatch = display.value.match(/(\d+\.?\d*)$/);
        if (lastNumberMatch) {
            let number = parseFloat(lastNumberMatch[0]);
            let percentage = number / 100;
            display.value = display.value.replace(/(\d+\.?\d*)$/, percentage + '*');
        }
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');

            // Save preference to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        }

        // Load saved theme preference
        window.onload = function () {
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }
        };
        
        document.querySelector("#themeCheckbox").addEventListener("change", function() {
            document.body.classList.toggle("dark-mode");
        });
        
        function checkScreenSize() {
    if (window.innerWidth < 180) {
        document.getElementById("warningMessage").style.display = "block";
    } else {
        document.getElementById("warningMessage").style.display = "none";
    }
}


window.onload = checkScreenSize;

window.onresize = checkScreenSize;