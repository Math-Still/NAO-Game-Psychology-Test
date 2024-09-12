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


