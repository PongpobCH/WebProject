function getJobIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function fetchJobDetails(jobId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "js/data_job.json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            callback(jsonData[jobId]);
        } else {
            console.error("Failed to fetch job details");
        }
    };
    xhr.onerror = function () {
        console.error("Error during the XMLHttpRequest");
    };
    xhr.send();
}

function showJobDetails(jobDetails) {
    var jobDetailsContainer = document.getElementById("job-details");
    jobDetailsContainer.innerHTML = ""; // Clear previous data

    // Display job details on the page
    for (var key in jobDetails) {
        var detailElement = document.createElement("p");
        detailElement.innerText = key + ": " + jobDetails[key];
        jobDetailsContainer.appendChild(detailElement);
    }
}

// Add this code to your jobdetails.js file
function saveJob() {
    const jobId = getJobIdFromUrl();
    const saveJobUrl = "/saveJob";
  
    // Assuming you are using fetch API for making AJAX requests
    fetch(saveJobUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId: jobId }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Job saved successfully");
        } else {
          console.error("Failed to save job");
        }
      })
      .catch((error) => {
        console.error("Error during the fetch request", error);
      });
  }
  
// Initial page load
window.onload = function () {
    
};




// check ว่ามีการ set cookies หรือยังถ้ามีจะไปยัง feed.html แต่ถ้าไม่มีจะกลับไปที่ login.html
function checkCookie() {
	var username = "";
	if (getCookie("username") == false) {
	  window.location = "login.html";
	}
  }
  
  checkCookie();
  
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

    var jobId = getJobIdFromUrl();
    if (jobId) {
        fetchJobDetails(jobId, showJobDetails);
    } else {
        console.error("Job ID not found in the URL");
    }

	document.getElementById("postbutton").onclick = getData;
  
	document.getElementById("displayPic").onclick = fileUpload;
	document.getElementById("fileField").onchange = fileSubmit;

	var username = getCookie("username");
  
	document.getElementById("username").innerHTML = username;
	console.log(getCookie("img"));
	showImg("img/" + getCookie("img"));

	//readPost();
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
  
  // complete it
  async function writePost(msg) {
	
    let response = await fetch("/writePost", {
	  method: "POST",
	  headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({
		user: getCookie("username"),
		message: msg,
	  }),
	});
  }
  
  // แสดง post ที่อ่านมาได้ ลงในพื้นที่ที่กำหนด
  function showPost(data) {
	var keys = Object.keys(data);
	console.log(keys);
	var divTag = document.getElementById("feed-container");
	divTag.innerHTML = "";
	for (var i = keys.length - 1; i >= 0; i--) {
	  var temp = document.createElement("div");
	  temp.className = "newsfeed";
	  divTag.appendChild(temp);
	  var temp1 = document.createElement("div");
	  temp1.className = "postmsg";
	  temp1.innerHTML = data[keys[i]]["post"];
	  temp.appendChild(temp1);
	  var temp1 = document.createElement("div");
	  temp1.className = "postuser";
  
      temp.appendChild(temp1);
	  temp1.innerHTML = "Posted by: " + data[keys[i]]["username"]; 
	  
	}
  }