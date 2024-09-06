const dynamicDiv = document.getElementById('dynamicDiv');
const autoselect = document.getElementById('autoselect');
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.addEventListener('DOMContentLoaded', function () {

    dynamicDiv.onclick = function () {
        init()
        dynamicDiv.style.backgroundColor = "#FFFFFF"
        if (dynamicDiv.requestFullscreen) {
            dynamicDiv.requestFullscreen();
        } else if (dynamicDiv.mozRequestFullScreen) { // Firefox
            dynamicDiv.mozRequestFullScreen();
        } else if (dynamicDiv.webkitRequestFullscreen) { // Chrome, Safari and Opera
            dynamicDiv.webkitRequestFullscreen();
        } else if (dynamicDiv.msRequestFullscreen) { // IE/Edge
            dynamicDiv.msRequestFullscreen();
        }
        start()
    };
    
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sel').forEach(function (element) {
        element.addEventListener('click', function (event){
            if (event.target.innerText === "实验1") {
                exp()
                your_function()
                setTimeout(start, 2000);
                // start()
            } else if (event.target.innerText === "实验2") {
                exp()
                your_function()
                setTimeout(start, 2000);
            } else if (event.target.innerText === "实验3") {
                exp()
                your_function()
                setTimeout(start, 2000);
            } else if (event.target.innerText === "实验4") {
                exp()
                your_function()
                setTimeout(start, 2000);
            } else if (event.target.innerText === "实验5") {
                exp()
                your_function()
                setTimeout(start, 2000);
            }
        });
    });
});
function your_function(){
    
}
function init() {
    dynamicDiv.style.display = 'block'
    autoselect.style.display = 'none'
}
function start() {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'block'
}
function exp(){
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
}
function fetchData() {
    fetch(`http://127.0.0.1:8000/getdata`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                if (data.message === '1') {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                else if (data.message === '2') {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                else if (data.message === '3') {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                else if (data.message === '4') {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                else if (data.message === '5') {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                else {
                    console.log("message invilid");
                }
            }
            else {
                console.log("data error");
            }
        })
        .catch(error => {
            console.error('请求失败:', error);
        });
}

// function setData() {
//     const requestType = document.getElementById('requestType').value;
//     const requestMessage = document.getElementById('requestMessage').value;
//     fetch('http://127.0.0.1:8000/setdata', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             type: parseInt(requestType),
//             message: requestMessage
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             alert(data.message); // 提示用户数据已保存
//         })
//         .catch(error => {
//             console.error('set data error :', error);
//         });
// }