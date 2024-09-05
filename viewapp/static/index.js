const dynamicDiv = document.getElementById('dynamicDiv');

function fetchData(requestType) {
    fetch("127.0.0.1:8080/getdata") 
        .then(response => response.json())
        .then(data => {
            updateDisplay(data);
        })
        .catch(error => {
            console.error('请求失败:', error);
        });
}

dynamicDiv.onclick = function() {
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
};

function updateDisplay(data) {
    switch (data.type) {
        case 1:
            dynamicDiv.style.backgroundColor = "#FF5733";
            dynamicDiv.textContent = "这是请求 1 的结果";
            break;
        case 2:
            dynamicDiv.style.backgroundColor = "#33FF57";
            dynamicDiv.textContent = "这是请求 2 的结果";
            break;
        case 3:
            dynamicDiv.style.backgroundColor = "#3357FF";
            dynamicDiv.textContent = "这是请求 3 的结果";
            break;
        default:
            dynamicDiv.style.backgroundColor = "#FFFFFF";
            dynamicDiv.textContent = "未知请求";
            break;
    }
}