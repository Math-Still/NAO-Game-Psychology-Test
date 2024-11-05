const dynamicDiv = document.getElementById('dynamicDiv');
const autoselect = document.getElementById('autoselect');
const taskDecision = document.getElementById('taskDecision')
const input = document.getElementById('input1')
const select11 = document.getElementById('select1')
const select22 = document.getElementById('select2')
const dynam = document.getElementById('dynam')
const all = document.getElementById('all')
const tablehead = document.getElementById('tablehead')
const tablep = document.getElementById('tablep')
const tableadd = document.getElementById('tableadd')
const table = document.getElementById('table')
const tableimg = document.getElementById('tableimg')
const starttxt = document.getElementById('starttxt')
const extraimg = document.getElementById('extraimg');
const extrap = document.getElementById('extrap');
const container = document.getElementById('bt-con');
const testflag = 1;
const welcome = document.getElementById('welcome')
const qinmidu = document.getElementById('QinMiDu')
<<<<<<< HEAD
const input11 = document.getElementById('input1')
=======
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
var self_val = 0;
var computer_val = 0;
var reactionTime = 0;
var self_all = 0;
var Sortednumber;
var option = 3
var qinmiduValue;
//亲密度选择
var inputValue;
//实验编号
var other_option = ""
const body = document.body;
let timeoutIds = [];
const sel1_1 = document.getElementById('sel1_1')
const sel1_2 = document.getElementById('sel1_2')
const sel2 = document.getElementById('sel2')
const sel3 = document.getElementById('sel3')
const sel4 = document.getElementById('sel4')
const sel5 = document.getElementById('sel5')
const sel6 = document.getElementById('sel6')
const sel7 = document.getElementById('sel7')
const sel8 = document.getElementById('sel8')
<<<<<<< HEAD
const sel10 = document.getElementById('sel8')
var completedTasks = 0
var exer1 = 0
var exer2 = 0
var expStatus1 = 0
var expStatus2 = 0
var expStatus3 = 0
var expStatus4 = 0
=======
var completedTasks = 0

>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
function say(say_text) {
    fetch('http://127.0.0.1:8000/qisay/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            say_text: say_text,
        })
    }).then(response => response)
        .catch(error => {
            console.error('set data error :', error);
        });
}
function savecsv() {
    fetch('http://127.0.0.1:8000/save/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        })
    }).then(response => response)
        .catch(error => {
            console.error('save err:', error);
        });
}

function changeImage(imgElement, newSrc) {
    // 创建一个新的 Image 对象
    var newImg = new Image();
    newImg.onload = function () {
        // 当新图片加载完成后更新 src 属性
        imgElement.src = newSrc;
    };
    // 设置新图片的源地址开始加载
    newImg.src = newSrc;
}

document.addEventListener('DOMContentLoaded', function () {

    dynam.onclick = function () {
        if (!document.fullscreenElement) {
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
        } else {
            //什么也不执行
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
function get_time() {
    var date = new Date();
    const options = {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24小时制
    };
    return date.toLocaleString('zh-CN', options);
}
async function Choose() {
    sel1_1.style.display = 'none'
    sel1_2.style.display = 'none'
}

// select22.style.display = 'block';
document.addEventListener('DOMContentLoaded', function () {

    changeImage(tableimg, 'img/nao,jpg')
    changeImage(tableimg, 'img/3.png')
    changeImage(tableimg, 'img/6.png')
    changeImage
    changeImage(tableimg, 'img/nao,jpg')
    changeImage
    function handleSelClick(event) {
        const target = event.target;
        if (target.innerText === '练习任务') {
            Choose();
            sel1_1.style.backgroundColor = '#ccc';
            sel1_1.style.pointerEvents = 'none';
            sel1_1.style.display = 'none';
            sel1_2.style.display = 'none';
            select11.style.display = 'block';
<<<<<<< HEAD
            sel10.style.display = 'none';
        } else if (target.innerText === '正式任务') {

=======
        } else if (target.innerText === '正式任务') {
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
            console.log("Clicked: 正式任务");
            // 显示欢迎页面
            document.getElementById('welcome').style.display = 'block';

            // 隐藏其他选项
            sel1_1.style.display = 'none';
            sel1_2.style.display = 'none';
        }
    }

    document.getElementById('startDiv').addEventListener('click', function () {
        // 隐藏欢迎页面并显示另一个界面
        document.getElementById('welcome').style.display = 'none';
        qinmidu.style.display = 'block';
    });

    document.getElementById('anotherStartDiv').addEventListener('click', function () {
<<<<<<< HEAD

        qinmidu.style.display = 'none';
        select22.style.display = 'inline-block';
        sel4.style.display = 'inline-block';
        sel5.style.display = 'inline-block';
        // sel6.style.display = 'none';
        sel7.style.display = 'inline-block';
        sel8.style.display = 'inline-block';
=======
        // 隐藏另一个界面并显示实验选择界面
        qinmidu.style.display = 'none';
        select22.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    });

    document.querySelectorAll('.sel').forEach(element => {
        element.addEventListener('click', handleSelClick);
    });

    // 为 select1 中的按钮添加点击事件
<<<<<<< HEAD
    select11.addEventListener('click', handleExer);
=======
    select11.addEventListener('click', function () {
        select11.style.display = 'none';
        exp1();
    });
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2

    // 为 select2 中的按钮添加点击事件
    document.querySelectorAll('.sel').forEach(element => {
        element.addEventListener('click', handleOselClick);
    });
<<<<<<< HEAD
    function handleExer(event) {
        const target = event.target;

        if (target.innerText === '练习1') {
            if (exer1 === 0) {
                select11.style.display = 'none';

                exp1(); // 执行练习1的函数
                exer1 = 1; // 将 exer1 设置为 1，防止重复点击

                // 在函数执行完毕后进行判断
                // if (exer1 == 1 && exer2 == 1) {
                //     select11.style.display = 'block';
                // }
            } else {
                target.style.pointerEvents = 'none'; // 禁用点击事件
            }
        } else if (target.innerText === '练习2') {
            if (exer2 === 0) {
                select11.style.display = 'none';
                dynamicDiv.style.display = 'none'
                exp1_2(); // 执行练习2的函数
                exer2 = 1; // 将 exer2 设置为 1，防止重复点击
            } else {
                target.style.pointerEvents = 'none'; // 禁用点击事件
            }
        }
    }
    function handleOselClick(event) {
        const target = event.target;
        if (target.innerText === '实验1') {
            if (expStatus1 === 0) {
                select22.style.display = 'none';
                hideButtons();
                // console.log(completedTasks)
                exp2();
                expStatus1 = 1;
                console.log(expStatus1);
            }
            else {
                target.style.pointerEvents = 'none'; // 禁用点击事件
            }
            // completedTasks += 1;
        } else if (target.innerText === '实验2') {
            if (expStatus2 === 0) {
                select22.style.display = 'none';
                hideButtons();
                // completedTasks += 1;
                console.log(completedTasks)
                exp3();
                expStatus2 = 1;
                console.log(expStatus2);
                completedTasks += 1;
            }
            else {
                // 禁用点击事件
            }

        } else if (target.innerText === '实验3') {
            if (expStatus3 === 0) {
                select22.style.display = 'none';
                hideButtons();
                // completedTasks += 1;
                console.log(completedTasks)
                exp4();
                expStatus3 = 1;
                console.log(expStatus3);
            }
            else {
                target.style.pointerEvents = 'none';
            }
            // completedTasks += 1;
        } else if (target.innerText === '实验4') {
            if (expStatus4 === 0) {
                select22.style.display = 'none';
                hideButtons();
                // completedTasks += 1;
                // console.log(completedTasks)
                exp5();
                expStatus4 = 1;
                console.log(expStatus4);
                // completedTasks += 1;
                select22.style.display = 'block';
            }
            else {
                target.style.pointerEvents = 'none';
            }
=======

    function handleOselClick(event) {
        const target = event.target;
        if (target.innerText === '实验1') {
            select22.style.display = 'none';
            hideButtons();
            // completedTasks += 1;
            console.log(completedTasks)
            exp2();
            completedTasks += 1;
        } else if (target.innerText === '实验2') {
            select22.style.display = 'none';
            hideButtons();
            // completedTasks += 1;
            console.log(completedTasks)
            exp3();
            completedTasks += 1;
        } else if (target.innerText === '实验3') {
            select22.style.display = 'none';
            hideButtons();
            // completedTasks += 1;
            console.log(completedTasks)
            exp4();
            completedTasks += 1;
        } else if (target.innerText === '实验4') {
            select22.style.display = 'none';
            hideButtons();
            // completedTasks += 1;
            console.log(completedTasks)
            exp5();
            completedTasks += 1;
            select22.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        } else if (target.innerText === '最终分数') {
            exp6();
            document.getElementById('sel6').style.display = 'none';
        }
<<<<<<< HEAD
=======

        if (completedTasks === 4) {
            hideAllSelButtons();
            document.getElementById('sel6').style.display = 'flex';
        }
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    }

    function hideButtons() {
        sel3.style.display = 'none';
        sel2.style.display = 'none';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
        input.style.display = 'none';
        welcome.style.display = 'none';
    }

    function hideAllSelButtons() {
        sel1_1.style.display = 'none';
        sel1_2.style.display = 'none';
        sel3.style.display = 'none';
        sel2.style.display = 'none';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
        input.style.display = 'none';
        welcome.style.display = 'none';
    }
});

<<<<<<< HEAD
document.getElementById('sel10').addEventListener('click', function () {
    select11.style.display = 'none';
    autoselect.style.display = 'inline-block';
    sel1_1.style.display = 'inline-block';
    sel1_2.style.display = 'inline-block';
    dynamicDiv.style.display = 'none';
});
=======

>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
async function exp1tes() {
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
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < 1; i++) {
        await respond(1)
        await setdelay(2500)
        await respond(2)
        await setdelay(2500)
        await select1(decisions[seq[i]], self_val, computer_val, option)
        await respond(3)
        var time = get_time()
<<<<<<< HEAD
        write(1, i, self_val, computer_val, reactionTime, time, other_option, inputValue, qinmiduValue)
        console(qinmidu)
=======
        write(1, i, self_val, computer_val, reactionTime, time, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    respond(4)
    await setdelay(2000)
    await start()
}

async function exp1_1() {
<<<<<<< HEAD

=======
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    const decisions = [
        { option1: { self: 10, computer: 0 } },
        { option1: { self: 9, computer: 1 } },
        { option1: { self: 8, computer: 2 } },
        { option1: { self: 7, computer: 3 } },
        { option1: { self: 6, computer: 4 } },
        { option1: { self: 5, computer: 5 } },
        { option1: { self: 4, computer: 6 } },
        { option1: { self: 3, computer: 7 } },
        { option1: { self: 2, computer: 8 } },
        { option1: { self: 1, computer: 9 } },
        { option1: { self: 0, computer: 10 } },
    ];
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    for (var i = 1; i <= 5; i++) {
        await respond(1)
        await setdelay(2500)
        // button-container
        var buttonPromises = [];
        const header = document.createElement('div');
        header.className = 'header';
        header.className = 'choice-text'
        header.style.width = '100%'
        header.textContent = '请做出您的选择'; // 添加的文本
        container.appendChild(header); // 将文本添加到容器中


        startTime = Date.now()
        container.style.display = "flex"
        taskDecision.style.display = 'none'
        for (let i = 0; i < decisions.length; i++) {
            const button = document.createElement('button');
            button.innerHTML = `自己：${decisions[i].option1.self}<br>对手：${decisions[i].option1.computer}`
            button.className = 'expbut';


            const buttonPromise = new Promise((resolve) => {
                button.addEventListener('click', () => {
                    resolve(i); // 解决 Promise
                });
            });
            buttonPromises.push(buttonPromise);
            container.appendChild(button);
        }


        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
        taskDecision.style.display = 'none';
        // taskDecision.inn
        extraimg.style.display = 'block'
        extraimg.src = 'img/question.png'
        extraimg.style.height = 'auto';
        extraimg.style.width = '250px';
        extrap.innerHTML = "请做出选择"
        extrap.style.display = 'none'
        extrap.style.fontSize = "80px"
        extraimg.style.display = 'none'

        await Promise.race(buttonPromises).then((buttonNumber) => {
            // 在这里执行后续代码
            var time = get_time()
            const endTime = Date.now();
            reactionTime = endTime - startTime
<<<<<<< HEAD
            write(0, i, decisions[buttonNumber].option1.self, decisions[buttonNumber].option1.computer, reactionTime, time, option, other_option, inputValue, qinmiduValue)
=======
            write(0, i, decisions[buttonNumber].option1.self, decisions[buttonNumber].option1.computer, reactionTime, time, option, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        });
        container.style.display = 'none'
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        buttonPromises = [];
        // await respond(2)
        // await setdelay(2500)
        await respond(18)
        await setdelay(2500)
        // header.remove(); // 删除文本
    }
<<<<<<< HEAD
    if (exer1 == 1 && exer2 == 1) {
        select11.style.display = 'block';
    }
    await start()
=======
    await start()

>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
}
// async function exercise() {

// }
async function exp1() {
    const decisions = [
        { option1: { self: 9, computer: 1 }, option2: { self: 8, computer: 2 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 5, computer: 5 } },
        { option1: { self: 5, computer: 5 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 3, computer: 7 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 2, computer: 8 }, option2: { self: 1, computer: 9 } },
    ];
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {//seq.length
        await respond(1)
        await setdelay(2500)
        // await respond(2)
        // await setdelay(2500)
        await select1(decisions[seq[i]], self_val, computer_val)
        await respond(18)
        var time = get_time()
<<<<<<< HEAD
        write(0, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue)
=======
        write(1, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    respond(4)
    await setdelay(2000)
<<<<<<< HEAD
    select11.style.display = 'block';
    if (exer1 == 1 && exer2 == 1) {
        sel9.stle.display = 'block';
    }
    
    await start()
}
async function exp1_2() {

=======
    welcome.style.display = 'block';
    await start()
}
async function exp1_2() {
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    const decisions = [
        { option1: { self: 9, computer: 1 } },
        { option1: { self: 7, computer: 3 } },
        { option1: { self: 5, computer: 5 } },
        { option1: { self: 3, computer: 7 } },
        { option1: { self: 2, computer: 8 } },

    ];
    // await respond(1)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(2500)
        await respond(17)
        await setdelay(2000)
        computer_val = decisions[seq[i]].option1.computer
        self_val = decisions[seq[i]].option1.self
        // tablep.innerText ="“" + "我得" + computer_val + " ¥，你得" + self_val + " ¥" +"”"
        // await respond(8)
        // await setdelay(1000)
        await select1_2(decisions[seq[i]], self_val, computer_val)
        var time = get_time()
        // time=str(t)
<<<<<<< HEAD
        write(1, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue)
        // await setdelay(getRandomNumber(3000,5000))
    }
    if (exer1 == 1 && exer2 == 1) {
        select11.style.display = 'block';
    }
=======
        write(1, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu)
        // await setdelay(getRandomNumber(3000,5000))
    }
    welcome.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    await start()

}
async function exp2() {
    const decisions = [
        { option1: { self: 8, computer: 2 }, option2: { self: 7, computer: 3 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 6, computer: 4 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 5, computer: 5 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 8, computer: 2 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 6, computer: 4 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 5, computer: 5 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 7, computer: 3 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 5, computer: 5 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 6, computer: 4 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 5, computer: 5 }, option2: { self: 4, computer: 6 } },
        { option1: { self: 5, computer: 5 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 5, computer: 5 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 4, computer: 6 }, option2: { self: 3, computer: 7 } },
        { option1: { self: 4, computer: 6 }, option2: { self: 2, computer: 8 } },
        { option1: { self: 3, computer: 7 }, option2: { self: 2, computer: 8 } },
    ];

    imageContainer.innerHTML = `<img src="http://127.0.0.1:8000/img/44.png" alt="Example Image" style="width: 600px; height: auto;">`;
    await respond(12);
    seq = generateRandomPermutation(decisions.length);
    for (let i = 0; i < seq.length; i++) {
        await respond(1);
        await setdelay(2500);
        // await respond(5)
        // await setdelay(2500)
        await select2(decisions[seq[i]], self_val, computer_val);
        await respond(6);
        var time = get_time();
        // time=str(t)
<<<<<<< HEAD
        write(2, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue);
=======
        write(2, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu );
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        await setdelay(getRandomNumber(3000, 5000));

        // 添加显示图片的逻辑
        const imageContainer = document.getElementById('imageContainer');

    }
    say("感谢您的决策，稍后我们将告知您本轮您的收益。");
<<<<<<< HEAD
    select22.style.display = 'inline-block';
    sel4.style.display = 'inline-block';
    sel5.style.display = 'inline-block';
    // sel6.style.display = 'none';
    sel7.style.display = 'inline-block';
    sel8.style.display = 'inline-block';
    if (expStatus1 === 1 && expStatus2 === 1 && expStatus3 === 1 && expStatus4 === 1) {
        select22.style.display = 'inline-block';
        sel6.style.display = 'inline-block';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        // sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
    }
=======
    select22.style.display = 'block';
    sel4.style.display = 'block';
    sel5.style.display = 'block';
    // sel6.style.display = 'none';
    sel7.style.display = 'block';
    sel8.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    await start();
}


async function exp3() {
    const decisions = [
        { option1: { self: 8, computer: 2 } },
        { option1: { self: 7, computer: 3 } },
        { option1: { self: 6, computer: 4 } },
        { option1: { self: 5, computer: 5 } },
        { option1: { self: 4, computer: 6 } },
        { option1: { self: 3, computer: 7 } },
        { option1: { self: 2, computer: 8 } },
        { option1: { self: 8, computer: 2 } },
        { option1: { self: 7, computer: 3 } },
        { option1: { self: 6, computer: 4 } },
        { option1: { self: 5, computer: 5 } },
        { option1: { self: 4, computer: 6 } },
        { option1: { self: 3, computer: 7 } },
        { option1: { self: 2, computer: 8 } },
    ];
    imageContainer.innerHTML = `<img src="http://127.0.0.1:8000/img/11.png" alt="Example Image" style="width: 600px; height: auto;">`;
    await respond(13)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(2500)
        await respond(7)
        await setdelay(2500)
        computer_val = decisions[seq[i]].option1.computer
        self_val = decisions[seq[i]].option1.self
        // tablep.innerText ="“" + "我得" + computer_val + " ¥，你得" + self_val + " ¥" +"”"
        // await respond(8)
        // await setdelay(1000)
        await select3(decisions[seq[i]], self_val, computer_val)
        var time = get_time()
        // time=str(t)
<<<<<<< HEAD
        write(3, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue)
=======
        write(3, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        // await setdelay(getRandomNumber(3000,5000))
    }

    // await setdelay(1000)
    // respond(4)
    // await setdelay(1000)
    say("感谢您的决策，稍后我们将告知您本轮您的收益。")
<<<<<<< HEAD
    select22.style.display = 'inline-block';
    sel4.style.display = 'inline-block';
    sel5.style.display = 'inline-block';
    // sel6.style.display = 'none';
    sel7.style.display = 'inline-block';
    sel8.style.display = 'inline-block';
    if (expStatus1 === 1 && expStatus2 === 1 && expStatus3 === 1 && expStatus4 === 1) {
        select22.style.display = 'inline-block';
        sel6.style.display = 'inline-block';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        // sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
    }
=======
    select22.style.display = 'block';
    sel4.style.display = 'block';
    sel5.style.display = 'block';
    // sel6.style.display = 'none';
    sel7.style.display = 'block';
    sel8.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    await start()

}
async function exp4() {
    const decisions = [
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 7, "computer": 3 }, "choice": "1" },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 6, "computer": 4 }, "choice": "1" },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 5, "computer": 5 }, "choice": "1" },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 4, "computer": 6 }, "choice": "1" },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 3, "computer": 7 }, "choice": "1" },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 6, "computer": 4 }, "choice": "1" },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 5, "computer": 5 }, "choice": "1" },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 4, "computer": 6 }, "choice": "1" },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 3, "computer": 7 }, "choice": "0" },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 5, "computer": 5 }, "choice": "1" },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 4, "computer": 6 }, "choice": "0" },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 3, "computer": 7 }, "choice": "0" },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 4, "computer": 6 }, "choice": "0" },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 3, "computer": 7 }, "choice": "0" },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" },
        { "option1": { "self": 4, "computer": 6 }, "option2": { "self": 3, "computer": 7 }, "choice": "0" },
        { "option1": { "self": 4, "computer": 6 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" },
        { "option1": { "self": 3, "computer": 7 }, "option2": { "self": 2, "computer": 8 }, "choice": "0" }
    ];
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    // say("在本次任务中，您将与我组成团队，共同参与一场博弈，我将在博弈过程中提供建议和策略支持。然而，最终的提议和决策由你来决定。")
    imageContainer.innerHTML = `<img src="http://127.0.0.1:8000/img/33.png" alt="Example Image" style="width: 900px; height: auto;">`;
    await respond(14)

    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {//seq.length
        await respond(1)
        await setdelay(2500)
        // await respond(9)
        // await setdelay(2500)
        await select4(decisions[seq[i]], self_val, computer_val)
        await respond(10)
        var time = get_time()
<<<<<<< HEAD
        write(4, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue)
=======
        write(4, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    // respond(4)
    // await setdelay(2000)
    say("感谢您的决策，稍后我们将告知您本轮您的收益。")
<<<<<<< HEAD
    select22.style.display = 'inline-block';
    sel4.style.display = 'inline-block';
    sel5.style.display = 'inline-block';
    // sel6.style.display = 'none';
    sel7.style.display = 'inline-block';
    sel8.style.display = 'inline-block';
    if (expStatus1 === 1 && expStatus2 === 1 && expStatus3 === 1 && expStatus4 === 1) {
        select22.style.display = 'inline-block';
        sel6.style.display = 'inline-block';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        // sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
    }
=======
    select22.style.display = 'block';
    sel4.style.display = 'block';
    sel5.style.display = 'block';
    // sel6.style.display = 'none';
    sel7.style.display = 'block';
    sel8.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    await start()
}
async function exp5() {
    const decisions = [
        { option1: { self: 8, computer: 2, choice: 0 } },
        { option1: { self: 7, computer: 3, choice: 0 } },
        { option1: { self: 6, computer: 4, choice: 0 } },
        { option1: { self: 5, computer: 5, choice: 0 } },
        { option1: { self: 4, computer: 6, choice: 0 } },
        { option1: { self: 3, computer: 7, choice: 1 } },
        { option1: { self: 2, computer: 8, choice: 1 } },
        { option1: { self: 8, computer: 2, choice: 0 } },
        { option1: { self: 7, computer: 3, choice: 0 } },
        { option1: { self: 6, computer: 4, choice: 0 } },
        { option1: { self: 5, computer: 5, choice: 0 } },
        { option1: { self: 4, computer: 6, choice: 0 } },
        { option1: { self: 3, computer: 7, choice: 1 } },
        { option1: { self: 2, computer: 8, choice: 1 } },
    ];
    // say("在本次任务中，您将与我协作与其他团队进行一场博弈。您将扮演接受者的角色，我会给您提供建议，您可以基于我的建议做出决策。")
    // await respond(10)
    // await respond(11)
    // await setdelay(100000000)
    imageContainer.innerHTML = `<img src="http://127.0.0.1:8000/img/22.png" alt="Example Image" style="width: 900px; height: auto;">`;
    await respond(15)

    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(2500)
        await respond(10)
        await setdelay(2500)
        computer_val = decisions[seq[i]].option1.computer
        self_val = decisions[seq[i]].option1.self
        // await respond(11)

        // tablep.innerText = "“" + "我们得" + computer_val + " ¥，你们得" + self_val + " ¥"+ "”"

        // await setdelay(1000)
        await select5(decisions[seq[i]], self_val, computer_val)
        var time = get_time()
        // time=str(t)
<<<<<<< HEAD
        write(5, i, self_val, computer_val, reactionTime, time, option, other_option, inputValue, qinmiduValue)
=======
        write(5, i, self_val, computer_val, reactionTime, time, option, other_option,inputValue,qinmidu)
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        // await setdelay(2000)
    }
    // await setdelay(1000)
    // respond(4)
    // await setdelay(3000)
    say("感谢您的决策，稍后我们将告知您本轮您的收益")
<<<<<<< HEAD
    select22.style.display = 'inline-block';
    sel4.style.display = 'inline-block';
    sel5.style.display = 'inline-block';
    // sel6.style.display = 'none';
    sel7.style.display = 'inline-block';
    sel8.style.display = 'inline-block';
    if (expStatus1 === 1 && expStatus2 === 1 && expStatus3 === 1 && expStatus4 === 1) {
        select22.style.display = 'inline-block';
        sel6.style.display = 'inline-block';
        sel4.style.display = 'none';
        sel5.style.display = 'none';
        // sel6.style.display = 'none';
        sel7.style.display = 'none';
        sel8.style.display = 'none';
    }
=======
    select22.style.display = 'block';
    sel4.style.display = 'block';
    sel5.style.display = 'block';
    // sel6.style.display = 'none';
    sel7.style.display = 'block';
    sel8.style.display = 'block';
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    await start()

}
async function exp6() {
    savecsv()
    await respond(16)

}
// const tablehead
// const tablep 
// const tableadd
// const tableimg 
// const table 
async function respond(option) {//1 白色 2 响应者电脑 3 电脑正在进行决策 4 您的总收益为 5 响应其他团队
    if (option === 0) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
    } else if (option === 1) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'flex'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
    } else if (option === 2) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-电脑"
        tablep.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/computer.png'
        // dynam.innerText = "响应者-电脑"

    } else if (option === 3) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者"
        tablep.style.display = 'flex'
        tablep.innerText = '响应者正在进行决策'
        tableimg.style.display = 'none'
        // tableimg.src = '{% static "img/computer.png" %}'

        // dynam.innerText = "电脑正在进行决策
    } else if (option === 4) {
        dynamicDiv.style.display = 'flex'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
<<<<<<< HEAD
        input11.style.display = 'none';
        starttxt.innerText = "您的总收益为：" + self_all + " ¥";
        starttxt.style.display = 'block'
=======
        starttxt.innerText = "您的总收益为：" + self_all + " ¥";
        starttxt.style.display = 'flex'
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        dynam.style.display = 'none'
        // } else if (option === 5) {
        //     dynamicDiv.style.display = 'none'
        //     autoselect.style.display = 'none'
        //     taskDecision.style.display = 'none'
        //     table.style.display = 'flex'
        //     tableadd.style.display = 'none'
        //     tablehead.style.display = 'flex'
        //     tablehead.innerText = "响应者-NAO"
        //     tablep.style.display = 'none'
        //     tableimg.style.display = 'flex'
        //     tableimg.src = 'img/nao.jpg'
        // dynam.innerText = "响应者-NAO"
    } else if (option === 6) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-NAO"
        tablep.style.display = 'flex'
        tablep.innerText = '请稍等，NAO正在进行决策'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/nao.jpg'//'img/nao.jpgimg/Blue-NAO.png'
        tableimg.width = '300px'

        // dynam.innerText = "请等待，NAO正在决策"
    } else if (option === 7) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-NAO"
        tablep.style.display = 'flex'
        tablep.innerText = '请稍等，NAO正在进行决策'
        // tableimg.style.display = 'none'
        // dynamicDiv.style.display = 'none'
        // autoselect.style.display = 'none'
        // taskDecision.style.display = 'none'
        // table.style.display = 'flex'
        // tableadd.style.display = 'none'
        // tablehead.style.display = 'flex'
        // tablehead.innerText = "提议者-NAO"
        // tablep.style.display = 'none'
        // tableimg.style.display = 'flex'
        // tableimg.src = 'img/nao.jpg'

        //实验3的nao作为提议者 stage2
    } else if (option === 8) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        // tablehead.innerText = "提议者-NAO"
        tablep.style.display = 'flex'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/nao.jpg' //'img/nao.jpgimg/Blue-NAO.png'
        //实验3
    } else if (option === 9) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-其他团队"
        tablep.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/group.png'
        //实验4 2 
    } else if (option === 10) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-其他团队"
        tablep.style.display = 'flex'
        tablep.innerText = '请等待，对方正在决策'
        tableimg.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/group.png'
        //4 3
    } else if (option === 11) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablehead.innerText = "提议者-其他团队"
        tablep.style.display = 'flex'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/group.png'
        //5 2
    } else if (option === 12) {
        dynamicDiv.style.display = 'flex'
        starttxt.style.display = 'none'
        starttxt.innerText = "在本次任务中，您将与我进行一场资源分配任务。在此次任务中，您将作为提议者，负责提出资源分配的方案。我将作为响应者，对您的提议作出接受或拒绝的决策。"
        dynam.style.display = "flex"
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
        return new Promise(resolve => {
            // 为按钮添加点击事件
            dynam.onclick = () => {
                // 处理按钮1点击
                resolve(); // 解析 Promise，继续执行
            };
        });

        // 介绍任务 task2

    } else if (option === 13) {
        dynamicDiv.style.display = 'flex'
        dynam.style.display = "flex"
        starttxt.style.display = 'none'
        // starttxt.innerText = "在本次任务中，您将与我进行一场资源分配任务。在此次任务中，我将作为提议者，负责提出资源分配的方案。您将作为响应者，对我的提议作出接受或拒绝的决策。"
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
        return new Promise(resolve => {
            // 为按钮添加点击事件
            dynam.onclick = () => {
                // 处理按钮1点击
                resolve(); // 解析 Promise，继续执行
            };
        });
        //task2
    } else if (option === 14) {
        dynamicDiv.style.display = 'flex'
        dynam.style.display = "flex"
        starttxt.innerText = "在本次任务中，您将与我组成团队，共同参与一场博弈，我将在博弈过程中提供建议和策略支持。然而，最终的提议和决策由你来决定。"
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
        return new Promise(resolve => {
            // 为按钮添加点击事件
            dynam.onclick = () => {
                // 处理按钮1点击
                resolve(); // 解析 Promise，继续执行
            };
        });
        //task3
    } else if (option === 15) {
        dynamicDiv.style.display = 'flex'
        dynam.style.display = "flex"
        starttxt.style.display = 'none'
        // starttxt.innerText = "在本次任务中，您将与我协作与其他团队进行一场博弈。您将扮演接受者的角色，我会给您提供建议，您可以基于我的建议做出决策。"
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'none'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tablep.style.display = 'none'
        tableimg.style.display = 'none'
        return new Promise(resolve => {
            // 为按钮添加点击事件
            dynam.onclick = () => {
                // 处理按钮1点击
                resolve(); // 解析 Promise，继续执行
            };
        });

        //task4
    } else if (option === 16) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/result.png'
        tablep.style.display = 'flex'
<<<<<<< HEAD
        tablep.innerText = "您当前的排名处于前 68.5 百分位 "//"您的总收益为：" + getRandomNumber(160, 200) + 
=======
        tablep.innerText = "\n\n" + "您当前的排名处于前 68.5 百分位 "//"您的总收益为：" + getRandomNumber(160, 200) + 
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
    } else if (option === 17) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "提议者"
        tablep.style.display = 'flex'
        tablep.innerText = '提议者正在进行决策'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/question.png'
    } else if (option === 18) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者"
        tablep.style.display = 'flex'
        tablep.innerText = '响应者正在进行决策'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/question.png'
    } else if (option === 20) {

    } else if (option === 21) {

    } else if (option === 22) {

    } else if (option === 23) {

    }

}

function write(exp_id, index, self_val, computer_val, reaction_time, time, option, other_option, inputValue, qinmidu) {
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
            time: time,
            option: option,
            other_option: other_option,
<<<<<<< HEAD
            inputValue: parseInt(inputValue),
            qinmidu: parseInt(qinmidu),
=======
            inputValue : inputValue,
            qinmidu :qinmidu,
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        })
    }).then(response => response)
        .catch(error => {
            console.error('set data error :', error);
        });
<<<<<<< HEAD
        console.log(qinmidu)
=======
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clear_database() {

}

async function select1(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'none'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = '自己：' + decisions.option1.self + '</br>响应者：' + decisions.option1.computer;
    bt2.innerHTML = '自己：' + decisions.option2.self + '</br>响应者：' + decisions.option2.computer;
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
            other_option = decisions.option2
            option = 0
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
            other_option = decisions.option1
            option = 1
            resolve(); // 解析 Promise，继续执行
        };
    })
}

async function select1_2(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'flex'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    // taskDecision.inn
    extraimg.style.display = 'block'
    extraimg.src = 'img/question.png'
    extraimg.style.height = 'auto';
    extraimg.style.width = '250px';
    extrap.innerHTML = "“" + "我得" + decisions.option1.computer + " ¥，你得" + decisions.option1.self + " ¥" + "”"
    extrap.style.display = 'block'
    extrap.style.fontSize = "50px"

    // if (decisions.option1.choice === 1) {
    //     bt1.classList.add('button-bordered');
    // } else {
    //     bt2.classList.add('button-bordered');
    // }
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = "接受"
    bt2.innerHTML = "拒绝"
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
            option = 0
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            option = 1
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };
    })
}


async function select2(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'none'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = '自己：' + decisions.option1.self + '</br>NAO：' + decisions.option1.computer;
    bt2.innerHTML = '自己：' + decisions.option2.self + '</br>NAO：' + decisions.option2.computer;
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
            other_option = decisions.option2
            option = 0
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
            other_option = decisions.option1
            option = 1
            resolve(); // 解析 Promise，继续执行
        };
    })
}
async function select3(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'flex'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    // taskDecision.inn
    extraimg.style.display = 'block'
    extraimg.src = 'img/nao.jpg'//'img/nao.jpgimg/Blue-NAO.png' 
    extraimg.style.height = 'auto';
    extraimg.style.width = '250px';
    extrap.innerHTML = "“" + "我得" + decisions.option1.computer + " ¥，你得" + decisions.option1.self + " ¥" + "”"
    extrap.style.display = 'block'
    extrap.style.fontSize = "50px"

    // if (decisions.option1.choice === 1) {
    //     bt1.classList.add('button-bordered');
    // } else {
    //     bt2.classList.add('button-bordered');
    // }
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = "接受"
    bt2.innerHTML = "拒绝"
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
            option = 0
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            option = 1
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };
    })
}

async function select4(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'none'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';

    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');
    bt1.innerHTML = '自己：' + decisions.option1.self + '</br>他人：' + decisions.option1.computer;
    bt2.innerHTML = '自己：' + decisions.option2.self + '</br>他人：' + decisions.option2.computer;

    const startTime = Date.now(); // 记录开始时间

    if (decisions.choice === "0") {
        bt1.classList.add('button-bordered');
    } else {
        bt2.classList.add('button-bordered');
    }
    return new Promise(resolve => {
        // 为按钮添加点击事件
        bt1.onclick = () => {
            // 处理按钮1点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            other_option = decisions.option2
            option = 0
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
            // extrap.innerHTML = "请做出选择"
            // extrap.style.display = 'none'
            // extrap.style.fontSize = "80px"
            // extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
            other_option = decisions.option1
            option = 1
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
            // extrap.innerHTML = "请做出选择"
            // extrap.style.display = 'none'
            // extrap.style.fontSize = "80px"
            // extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };
    })
}
async function select5(decisions) {
    // extrapimg.style.display = 'flex'
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'flex'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    extraimg.style.display = 'block'
    extraimg.src = 'img/group.png'
    extraimg.style.height = 'auto';
    extraimg.style.width = '250px';
    extrap.innerHTML = "“" + "我们得" + decisions.option1.computer + " ¥，你们得" + decisions.option1.self + " ¥" + "”"
    extrap.style.display = 'block'
    extrap.style.fontSize = "50px"
    // taskDecision.inn
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');

    if (decisions.option1.choice === 0) {
        bt1.classList.add('button-bordered');
    } else {
        bt2.classList.add('button-bordered');
    }
    bt1.innerHTML = "接受"
    bt2.innerHTML = "拒绝"
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
            option = 0
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
            // extrapimg.style.display = 'none'
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            option = 1
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
            // extrapimg.style.display = 'none'
            extrap.innerHTML = "请做出选择"
            extrap.style.display = 'none'
            extrap.style.fontSize = "80px"
            extraimg.style.display = 'none'
            resolve(); // 解析 Promise，继续执行
        };
    })
}
function init() {
    // all.style.display = 'none'
    timeoutIds.forEach(clearTimeout);
    timeoutIds = [];
    dynam.innerText = "开始吧"
    dynamicDiv.style.display = 'block'
    autoselect.style.display = 'none'
    taskDecision.style.display = 'none'
    table.style.display = 'none'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
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
    table.style.display = 'none'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
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
<<<<<<< HEAD
window.onload = function () {
    // 监听 dynam 按钮的点击事件
    document.getElementById('dynam').addEventListener('click', function () {
        // 获取第一个输入框的值
        inputValue = document.getElementById('input1').value;
        if (inputValue === '') {
            alert("请输入一个亲密度");
        }
=======
window.onload = function() {
    // 监听 dynam 按钮的点击事件
    document.getElementById('dynam').addEventListener('click', function() {
        // 获取第一个输入框的值
        inputValue = document.getElementById('input1').value;
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        console.log('Input 1 Value:', inputValue);
    });

    // 监听 anotherStartDiv 按钮的点击事件
<<<<<<< HEAD
    document.getElementById('anotherStartDiv').addEventListener('click', function () {
        // 获取第二个输入框的值
        qinmiduValue = document.getElementById('input2').value;
        if (qinmiduValue === '') {
            alert("请输入一个亲密度");
        }
=======
    document.getElementById('anotherStartDiv').addEventListener('click', function() {
        // 获取第二个输入框的值
        qinmiduValue = document.getElementById('input2').value;
>>>>>>> 6f2b7b7b4ba58ccbd5da2682897aa087f8d1f1d2
        console.log('Input 2 Value:', qinmiduValue);
    });
};