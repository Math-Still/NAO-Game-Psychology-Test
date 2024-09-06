function fetchData(requestType) {
    fetch(`http://127.0.0.1:8000/getdata`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                if (data.message === 1) {
                    dynamicDiv.style.backgroundColor = "#33FF57"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                if (data.message === 2) {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                if (data.message === 3) {
                    dynamicDiv.style.backgroundColor = "#33FF57"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                if (data.message === 4) {
                    dynamicDiv.style.backgroundColor = "#FFFFFF"; // 你可以根据需要更改颜色
                    dynamicDiv.textContent = data.message;
                }
                if (data.message === 5) {
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
function updateSelection() {
    const selectElement = document.getElementById('experimentSelect');
    const selectedValue = document.getElementById('selectedValue')
    const selectedExperiment = selectElement.value;
    selectedValue.textContent = selectedExperiment;
}
function setData() {
    const tmp = selectedValue.textContent
    console.log(tmp)
    fetch('http://127.0.0.1:8000/setdata/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            request_type: 1,
            message: tmp,
        })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // 提示用户数据已保存
        })
        .catch(error => {
            console.error('set data error :', error);
        });
}


