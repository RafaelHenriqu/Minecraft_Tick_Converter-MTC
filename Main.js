const {app,BrowserWindow} = require("electron")
app.on('ready',()=>{
    const Windows = new BrowserWindow({
        darkTheme:true,
        icon:"./Icon.png",
    })
    Windows.loadFile(`${__dirname}/index.html`)

})