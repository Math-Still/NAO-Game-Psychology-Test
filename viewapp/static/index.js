const dynamicDiv = document.getElementById('dynamicDiv');
const autoselect = document.getElementById('autoselect');
const taskDecision = document.getElementById('taskDecision')
const dynam = document.getElementById('dynam')
const all = document.getElementById('all')
var self_val = 0;
var computer_val = 0;
var reactionTime = 0;
var self_all = 0;
const body = document.body;
let timeoutIds = [];
document.addEventListener('DOMContentLoaded', function () {

    dynamicDiv.onclick = function () {
        body.style.backgroundColor = "#FFFFFF"
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.mozRequestFullScreen) { // Firefox
            body.mozRequestFullScreen();
        } else if (body.webkitRequestFullscreen) { // Chrome, Safari and Opera
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) { // IE/Edge
            body.msRequestFullscreen();
        }
    };
});
document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        start()
    } else {
        clean()
    }
});
function delay(func, timeset) {
    const timeoutId = setTimeout(func, timeset);
    timeoutIds.push(timeoutId);
}
function setdelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sel').forEach(function (element) {
        element.addEventListener('click', function (event) {
            if (event.target.innerText === "实验1") {
                exp1()
                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "实验2") {
                exp()
                your_function()
                delay(start, 2000);
            } else if (event.target.innerText === "实验3") {
                exp()
                your_function()
                delay(start, 2000);
            } else if (event.target.innerText === "实验4") {
                exp()
                your_function()
                delay(start, 2000);
            } else if (event.target.innerText === "实验5") {
                exp()
                your_function()
                delay(start, 2000);

            }
        });
    });
});

async function exp1() {
    const decisions = [
        { option1: { self: 10, computer: 0 }, option2: { self: 9, computer: 1 } },
        { option1: { self: 9, computer: 1 }, option2: { self: 8, computer: 2 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 7, computer: 3 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 6, computer: 4 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 5, computer: 5 } },
        { option1: { self: 5, computer: 5 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 4, computer: 6 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 3, computer: 7 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 2, computer: 8 }, option2: { self: 1, computer: 9 } },
        { option1: { self: 1, computer: 9 }, option2: { self: 0, computer: 10 } },
    ];
    await respond(1)
    await setdelay(1000)
    await respond(2)
    await setdelay(1000)
    seq = generateRandomPermutation(decisions.length)
    console.log(seq)
    for (let i = 0; i < seq.length; i++) {
        await select(decisions[seq[i]], self_val, computer_val)
        await respond(1)
        write(1, i, self_val, computer_val, reactionTime)
        await setdelay(1000)
    }
    respond(3)
    await setdelay(1000)
    respond(4)
    await setdelay(2000)
    await start()
}
function write(exp_id, index, self_val, computer_val, reaction_time) {
    console.log(JSON.stringify({
        exp_id: parseInt(exp_id),
        index: index,
        self_val: self_val,
        computer_val: computer_val,
        reaction_time: reaction_time,
    }))
    fetch('http://127.0.0.1:8000/set_exp/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            exp_id: parseInt(exp_id),
            index: parseInt(index),
            self_val: self_val,
            computer_val: computer_val,
            reaction_time: reaction_time,
        })
    }).then(response => console.log(response))
        .catch(error => {
            console.error('set data error :', error);
        });
}
function clear_database() {

}

async function select(decisions) {
    dynamicDiv.style.display = 'none';
    autoselect.style.display = 'none';
    taskDecision.style.display = 'block';
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = '自己：' + decisions.option1.self + '</br>电脑：' + decisions.option1.computer;
    bt2.innerHTML = '自己：' + decisions.option2.self + '</br>电脑：' + decisions.option2.computer;
    const startTime = Date.now(); // 记录开始时间
    return new Promise(resolve => {
        // 为按钮添加点击事件
        bt1.onclick = () => {
            // 处理按钮1点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            resolve(); // 解析 Promise，继续执行
        };
    })
}
function init() {
    // all.style.display = 'none'
    timeoutIds.forEach(clearTimeout);
    timeoutIds = [];
    dynam.innerText = "点击开始实验"
    dynamicDiv.style.display = 'block'
    autoselect.style.display = 'none'
    taskDecision.style.display = 'none'
    self_val = 0;
    computer_val = 0;
    self_all = 0

    // all.style.display = 'block'
    // autoselect.style.zIndex = 0
    // dynamicDiv.style.zIndex = 999
}
function start() {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'block'
    taskDecision.style.display = 'none'
    self_val = 0;
    computer_val = 0;
    self_all = 0

    // autoselect.style.zIndex = 999
    // dynamicDiv.style.zIndex = 0

}
// function exp() {
//     dynamicDiv.style.display = 'none'
//     autoselect.style.display = 'none'
//     taskDecision.style.display = 'none'
//     // autoselect.style.zIndex = 999
//     // dynamicDiv.style.zIndex = 999
// }

function clean() {
    delay(init, 1500)
}
async function respond(option) {//1 白色 2 响应者电脑 3 响应nao 4 提议nao 5 响应其他团队
    if (option === 1) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
    } else if (option === 2) {
        dynamicDiv.style.display = 'block'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        dynam.innerText = "响应者-电脑"
    } else if (option === 3) {
        dynamicDiv.style.display = 'block'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        dynam.innerText = "电脑正在进行决策"
    } else if (option === 4) {
        dynamicDiv.style.display = 'block'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        dynam.innerText = "您的总收益为：" + self_all + " ¥";
    } else if (option === 5) {

    } else if (option === 6) {

    } else if (option === 7) {

    } else if (option === 8) {

    }
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

function generateRandomPermutation(num) {
    // 生成数组 [1, 2, ..., num]
    const nums = Array.from({ length: num }, (_, i) => i);

    // 洗牌算法（Fisher-Yates 洗牌）
    for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]]; // 交换元素
    }

    return nums; // 返回随机全排列
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