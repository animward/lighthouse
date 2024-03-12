

// single beep function
// beep - frequency, duration
//const { exec } = require('child_process');

//exec("[console]::beep(392, 500)", {'shell':'powershell.exe'});


console.log("Ready?");

setTimeout(() => {
    require("child_process").exec("powershell.exe [console]::beep(784, 990)");
    console.log("3");
}, 1000);

setTimeout(() => {
    require("child_process").exec("powershell.exe [console]::beep(784, 990)");
    console.log("2");
}, 2000);

setTimeout(() => {
    require("child_process").exec("powershell.exe [console]::beep(784, 990)");
    console.log("1");
}, 3000);

setTimeout(() => {
    require("child_process").exec("powershell.exe [console]::beep(1568, 990)");
    console.log("GO!");
}, 4000);