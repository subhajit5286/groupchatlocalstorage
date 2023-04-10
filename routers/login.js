const express=require('express');
const router = express.Router()
const fs=require('fs')
router.get('/login',(req,res,next)=>{
    res.write(`<html>`)
    res.write(`<form action="/sendusername" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)"> `)
    res.write(`<input type="text" id="username" name="username">`)
    res.write(`<button type="submit">Login</button>`)
    res.write(`</form>`)
    res.write(`</html>`)
    res.end()
})
router.post('/sendusername',(req,res,next)=>{
   // console.log(req.body.username)
    fs.appendFileSync('message.txt',req.body.username)
    //localStorage.setItem('username',req.body.username)
    res.redirect('/sendmessage')
});
router.get('/sendmessage',(req,res,next)=>{
    res.send(`<form action="/savemessage" method="POST" ><input type="text" name="message"><button type"submit">Submit</button></form>`) 
})
router.post('/savemessage',(req,res,next)=>{
    //fs.writeFileSync('message.txt',req.body.message)
    //var name=localStorage.getItem('username');
    fs.appendFileSync('message.txt',":"+req.body.message+" ")
    res.redirect('/chatpage')
})
router.get('/chatpage',(req,res,next)=>{
    let array = fs.readFileSync('message.txt')
    .toString('UTF8');
    res.write('<html>')
    res.write(`<h3>${array}</h3>`)
    res.write(`
    <form action="/savemessage" method="POST">
    <input type="text" name="message" id="message">
    <button type"submit">Submit</button>
    </form> 
    `)

    res.write('</html>')
    res.end();
    
})

router.get('/',(req,res,next)=>{
    
    res.send(`<h3>Welcome to Group chat page. For login visit /login </h3>`)
    
})

module.exports = router;