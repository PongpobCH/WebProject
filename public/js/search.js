//โชว์ลิสต์งานในหน้าเพจ
// window.onload = pageLoad;

// function pageLoad(){
// 	var xhr = new XMLHttpRequest();
//   xhr.open("GET","js/data_job.json");
//   xhr.onload = function(){
//     var jsdata = JSON.parse(xhr.responseText);
//     console.log(jsdata);
//     showData(jsdata);
//   };
//   xhr.onerror = function(){alert("ERROR!");};
//   xhr.send();
// }

// function showData(data){
//     var keys = Object.keys(data);
//     for(var i =0; i< keys.length; i++){
//         var temp = document.getElementById("layer");
//         var list = temp.querySelectorAll("div");
  
//         var jobName = document.createElement("p");
//         jobName.innerText = data[keys[i]].jobName;
        
//         var contractor = document.createElement("p");
//         contractor.innerText = data[keys[i]].contractor;

//         var earth = document.createElement("p");
//         earth.innerText = data[keys[i]].earth;
  
//         var pay = document.createElement("p");
//         pay.innerText = data[keys[i]].pay;

//          var earth = document.createElement("p");
//         earth.innerText = data[keys[i]].earth;
  
  
        
        
//         list[i].appendChild(jobName);
//         list[i].appendChild(contractor);
//         list[i].appendChild(earth);
//         list[i].appendChild(pay);
//         list[i].appendChild(details);
       
//     }
//   }

  fetch("data_job.json").then(res => res.json()).then(data => {})

