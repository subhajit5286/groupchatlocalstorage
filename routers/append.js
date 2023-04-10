
function app1(){
    fs.appendFileSync('message.txt',localStorage.getItem('username'))
}