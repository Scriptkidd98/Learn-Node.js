const fs = require('fs');

fs.readFile('names.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

console.log("Hello....") //Node works in a non blocking asynchronous manner, so while the file reading is going on this will be logged 
//and then when the file reading is completed the content of the file will be logged


if(!fs.existsSync('phone.txt')) {
    fs.writeFile('phone.txt', '0809876543', (err) => {
        if(err) throw err;
        console.log('Write complete');
    })
} else if(fs.existsSync('phone.txt')) {
    fs.appendFile('phone.txt', '\n0809876543', (err) => {
        if(err) throw err;
        console.log('Append Complete');
    })
}