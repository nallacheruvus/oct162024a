const exec = require("child_process").exec;
const paths = "C:\\DelhiOfficeFiles\\sopraoct2024\\fiveaproj\\mybat.bat";
exec(paths, (e, stdout, stderr) => {
    if (e) {
        console.log(e);
        return;
    }
    console.log(stdout);
});
