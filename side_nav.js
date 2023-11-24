function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  /*const upload = multer({ storage: storage, fileFilter: imageFilter });
//ทำให้สมบูรณ์
app.post('/profilepic', upload.single('avatar'), (req, res) => {
    if (!req.file) {
        return res.redirect('resume.html?error=1');
    }

    const email = req.cookies.email;

    updateImg(email, req.file.filename);

    res.cookie('img', req.file.filename);

    return res.redirect('resume.html');
})

const updateImg = async (email, filen) => {

    let sql = UPDATE Userdatabase SET img = '${filen}' WHERE email = '${email}'
    let result = await queryDB(sql);

};*/