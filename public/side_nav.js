/*function checkCookie() {
  var username = "";
  if (getCookie("username") == false) {
    window.location = "login.html";
  }
}

checkCookie();*/
window.onload = pageLoad;

function getCookie(name) {
  var value = "";
  try {
    value = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      .split("=")[1];
    return value;
  } catch (err) {
    return false;
  }
}

function pageLoad() {
  document.getElementById("postbutton").onclick = getData;

  document.getElementById("displayPic").onclick = fileUpload;
  document.getElementById("fileField").onchange = fileSubmit;

  var username = getCookie("username");

  document.getElementById("username").innerHTML = username;
  console.log(getCookie("img"));
  showImg("img/" + getCookie("img"));
  readPost();
}

async function getData() {
  var msg = document.getElementById("textmsg").value;
  document.getElementById("textmsg").value = "";
  await writePost(msg);
  await readPost();
}

function fileUpload() {
  document.getElementById("fileField").click();
}

function fileSubmit() {
  document.getElementById("formId").submit();
}

// แสดงรูปในพื้นที่ที่กำหนด
function showImg(filename) {
  if (filename !== "") {
    var showpic = document.getElementById("displayPic");
    showpic.innerHTML = "";
    var temp = document.createElement("img");
    temp.src = filename;
    showpic.appendChild(temp);
  }
}

// complete it
async function readPost() {
  let response = await fetch("/readPost");
  let content = await response.json();
  showPost(content);
}

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