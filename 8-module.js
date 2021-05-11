const os = require('os');

// info About current user
const user = os.userInfo();
console.log(user);

//method rreturns the systems up time in seconds
console.log(`The system up time is: ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOs);