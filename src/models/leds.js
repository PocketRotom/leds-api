const { exec } = require("child_process");

async function powerON() {
    let temp;
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        temp = stdout;
    });
    return temp;
}


module.exports = {powerON};