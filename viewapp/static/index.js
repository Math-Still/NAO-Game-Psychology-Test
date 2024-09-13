const dynamicDiv = document.getElementById('dynamicDiv');
const autoselect = document.getElementById('autoselect');
const taskDecision = document.getElementById('taskDecision')
const dynam = document.getElementById('dynam')
const all = document.getElementById('all')
const tablehead = document.getElementById('tablehead')
const tablep = document.getElementById('tablep')
const tableadd = document.getElementById('tableadd')
const table = document.getElementById('table')
const tableimg = document.getElementById('tableimg')
const starttxt = document.getElementById('starttxt')
var self_val = 0;
var computer_val = 0;
var reactionTime = 0;
var self_all = 0;
const body = document.body;
let timeoutIds = [];
const sel1 = document.getElementById('sel1')
const sel2 = document.getElementById('sel2')
const sel3 = document.getElementById('sel3')
const sel4 = document.getElementById('sel4')
const sel5 = document.getElementById('sel5')
const sel6 = document.getElementById('sel6')
var completedTasks = 0
function say(say_text){
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
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sel').forEach(function (element) {
        element.addEventListener('click', function (event) {
            if (event.target.innerText === "练习") {
                exp1()
                sel1.style.backgroundColor = '#ccc'; // 更改按钮颜色表示完成
                sel1.style.pointerEvents = 'none'
                completedTasks += 1
                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "实验1") {
                exp2()
                sel2.style.backgroundColor = '#ccc'; // 更改按钮颜色表示完成
                sel2.style.pointerEvents = 'none'
                completedTasks += 1

                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "实验2") {
                exp3()
                sel3.style.backgroundColor = '#ccc'; // 更改按钮颜色表示完成
                sel3.style.pointerEvents = 'none'
                completedTasks += 1

                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "实验3") {
                exp4()
                sel4.style.backgroundColor = '#ccc'; // 更改按钮颜色表示完成
                sel4.style.pointerEvents = 'none'                
                completedTasks += 1

                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "实验4") {
                exp5()
                sel5.style.backgroundColor = '#ccc'; // 更改按钮颜色表示完成
                sel5.style.pointerEvents = 'none'
                completedTasks += 1

                // your_function()
                // delay(start, 2000);
            } else if (event.target.innerText === "最终分数") {
                exp6()
            }
            if (completedTasks === 5) {
                sel1.style.display = 'none'
                sel2.style.display = 'none'
                sel3.style.display = 'none'
                sel4.style.display = 'none'
                sel5.style.display = 'none'
                document.getElementById('sel6').style.display = 'flex';
            }
        });
    });
});

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
        await setdelay(1000)
        await respond(2)
        await setdelay(1000)
        await select1(decisions[seq[i]], self_val, computer_val)
        await respond(3)
        var time = get_time()
        write(1, i, self_val, computer_val, reactionTime, time)
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    respond(4)
    await setdelay(2000)
    await start()
}

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
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(1000)
        await respond(2)
        await setdelay(1000)
        await select1(decisions[seq[i]], self_val, computer_val)
        await respond(3)
        var time = get_time()
        write(1, i, self_val, computer_val, reactionTime, time)
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    respond(4)
    await setdelay(2000)
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
    say("在本次任务中，您将与我进行一场资源分配任务。在此次任务中，您将作为提议者，负责提出资源分配的方案。我将作为响应者，对您的提议作出接受或拒绝的决策。")
    await respond(12)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(1000)
        await respond(5)
        await setdelay(1000)
        await select2(decisions[seq[i]], self_val, computer_val)
        await respond(6)
        var time = get_time()
        // time=str(t)
        write(2, i, self_val, computer_val, reactionTime, time)
        await setdelay(getRandomNumber(3000, 5000))
    }
    say("感谢您的决策，稍微我们将告知您本轮您的收益。")
    // await setdelay(1000)
    // respond(4)
    // await setdelay(3000)
    await start()

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
    say("在本次任务中，您将与我进行一场最后通牒博弈。在博弈中，我将作为提议者，负责提出资源分配的方案。您将作为响应者，对我的提议作出接受或拒绝的决策。")
    await respond(13)
    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(1000)
        await respond(7)
        await setdelay(1000)
        computer_val = decisions[i].option1.computer
        self_val = decisions[i].option1.self
        tablep.innerText = "我得" + computer_val + " ¥，你得" + self_val + " ¥"
        await respond(8)
        await setdelay(1000)
        await select3(decisions[seq[i]], self_val, computer_val)
        var time = get_time()
        // time=str(t)
        write(3, i, self_val, computer_val, reactionTime, time)
        // await setdelay(getRandomNumber(3000,5000))
    }
    
    // await setdelay(1000)
    // respond(4)
    // await setdelay(1000)
    say("感谢您的决策，稍微我们将告知您本轮您的收益。")
    await start()

}
async function exp4() {
    const decisions = [
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 7, "computer": 3 } },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 6, "computer": 4 } },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 4, "computer": 6 } },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 3, "computer": 7 } },
        { "option1": { "self": 8, "computer": 2 }, "option2": { "self": 8, "computer": 2 } },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 6, "computer": 4 } },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 4, "computer": 6 } },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 7, "computer": 3 } },
        { "option1": { "self": 7, "computer": 3 }, "option2": { "self": 7, "computer": 3 } },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 6, "computer": 4 } },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 6, "computer": 4 } },
        { "option1": { "self": 6, "computer": 4 }, "option2": { "self": 6, "computer": 4 } },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 5, "computer": 5 }, "option2": { "self": 5, "computer": 5 } },
        { "option1": { "self": 4, "computer": 6 }, "option2": { "self": 4, "computer": 6 } },
        { "option1": { "self": 4, "computer": 6 }, "option2": { "self": 4, "computer": 6 } },
        { "option1": { "self": 3, "computer": 7 }, "option2": { "self": 3, "computer": 7 } }
    ];
    // await respond(1)
    // await setdelay(1000)
    // await respond(2)
    // await setdelay(1000)
    say("在本次任务中，您将与我组成团队，共同参与一场博弈，我将在博弈过程中提供建议和策略支持。然而，最终的提议和决策由你来决定。")
    await respond(14)

    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {//seq.length
        await respond(1)
        await setdelay(1000)
        await respond(9)
        await setdelay(1000)
        await select4(decisions[seq[i]], self_val, computer_val)
        await respond(10)
        var time = get_time()
        write(4, i, self_val, computer_val, reactionTime, time)
        await setdelay(getRandomNumber(3000, 5000))
        // await respond(1)
        // await setdelay(1000)
    }
    respond(4)
    await setdelay(2000)
    await start()
}
async function exp5() {
    const decisions = [
        { option1: { self: 8, computer: 2, choice: 0 } },
        { option1: { self: 7, computer: 3, choice: 0 } },
        { option1: { self: 6, computer: 4, choice: 1 } },
        { option1: { self: 5, computer: 5, choice: 1 } },
        { option1: { self: 4, computer: 6, choice: 1 } },
        { option1: { self: 3, computer: 7, choice: 1 } },
        { option1: { self: 2, computer: 8, choice: 1 } },
        { option1: { self: 8, computer: 2, choice: 0 } },
        { option1: { self: 7, computer: 3, choice: 0 } },
        { option1: { self: 6, computer: 4, choice: 1 } },
        { option1: { self: 5, computer: 5, choice: 1 } },
        { option1: { self: 4, computer: 6, choice: 1 } },
        { option1: { self: 3, computer: 7, choice: 1 } },
        { option1: { self: 2, computer: 8, choice: 1 } },
    ];
    say("在本次任务中，您将与我协作与其他团队进行一场博弈。您将扮演接受者的角色，我会给您提供建议，您可以基于我的建议做出决策。")
    await respond(15)

    seq = generateRandomPermutation(decisions.length)
    for (let i = 0; i < seq.length; i++) {
        await respond(1)
        await setdelay(1000)
        await respond(10)
        await setdelay(1000)
        computer_val = decisions[i].option1.computer
        self_val = decisions[i].option1.self
        await respond(11)
        tablep.innerText = "我得" + computer_val + " ¥，你得" + self_val + " ¥"
        await setdelay(1000)
        await select5(decisions[seq[i]], self_val, computer_val)
        var time = get_time()
        // time=str(t)
        write(5, i, self_val, computer_val, reactionTime, time)
        // await setdelay(getRandomNumber(3000,5000))
    }
    // await setdelay(1000)
    // respond(4)
    // await setdelay(3000)
    say("感谢您的决策，稍微我们将告知您本轮您的收益")
    await start()

}
async function exp6() {
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
        tablehead.innerText = "响应者-电脑"
        tablep.style.display = 'flex'
        tablep.innerText = '电脑正在进行决策'
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
        starttxt.innerText = "您的总收益为：" + self_all + " ¥";
        starttxt.style.display = 'flex'
        dynam.style.display = 'none'
    } else if (option === 5) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "响应者-NAO"
        tablep.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/nao.jpg'
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
        tableimg.style.display = 'none'
        // dynam.innerText = "请等待，NAO正在决策"
    } else if (option === 7) {
        dynamicDiv.style.display = 'none'
        autoselect.style.display = 'none'
        taskDecision.style.display = 'none'
        table.style.display = 'flex'
        tableadd.style.display = 'none'
        tablehead.style.display = 'flex'
        tablehead.innerText = "提议者-NAO"
        tablep.style.display = 'none'
        tableimg.style.display = 'flex'
        tableimg.src = 'img/nao.jpg'
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
        tableimg.src = 'img/nao.jpg'
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
        starttxt.innerText = "在本次任务中，您将与我进行一场资源分配任务。在此次任务中，您将作为提议者，负责提出资源分配的方案。我将作为响应者，对您的提议作出接受或拒绝的决策。"
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
        starttxt.innerText = "在本次任务中，您将与我进行一场最后通牒博弈。在博弈中，我将作为提议者，负责提出资源分配的方案。您将作为响应者，对我的提议作出接受或拒绝的决策。"
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
        starttxt.innerText = "在本次任务中，您将与我协作与其他团队进行一场博弈。您将扮演接受者的角色，我会给您提供建议，您可以基于我的建议做出决策。"
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
        tablep.style.display = 'flex'
        tablep.innerText = "您的总收益为：" + getRandomNumber(160, 200) + " ¥\n\n" + "您的排名为： 26/32 "
        tableimg.style.display = 'none'
    } else if (option === 17) {

    }
}

function write(exp_id, index, self_val, computer_val, reaction_time, time) {
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
            time: time
        })
    }).then(response => response)
        .catch(error => {
            console.error('set data error :', error);
        });
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
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
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
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
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
    bt2.classList.add('button-bordered');
    bt1.innerHTML = '自己：' + decisions.option1.self + '</br>他人：' + decisions.option1.computer;
    bt2.innerHTML = '自己：' + decisions.option2.self + '</br>他人：' + decisions.option2.computer;

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
            bt2.classList.remove('button-bordered');
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option2.self
            self_all += self_val
            computer_val = decisions.option2.computer
            bt2.classList.remove('button-bordered');
            resolve(); // 解析 Promise，继续执行
        };
    })
}
async function select5(decisions) {
    dynamicDiv.style.display = 'none'
    autoselect.style.display = 'none'
    table.style.display = 'flex'
    tableadd.style.display = 'none'
    tablehead.style.display = 'none'
    tablep.style.display = 'none'
    tableimg.style.display = 'none'
    taskDecision.style.display = 'block';
    // taskDecision.inn
    bt1 = document.getElementById('bt1');
    bt2 = document.getElementById('bt2');

    if (decisions.option1.choice === 1) {
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
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
            resolve(); // 解析 Promise，继续执行
        };

        bt2.onclick = () => {
            // 处理按钮2点击
            const endTime = Date.now(); // 记录结束时间
            reactionTime = endTime - startTime; // 计算反应时间
            self_val = decisions.option1.self
            self_all += self_val
            computer_val = decisions.option1.computer
            bt1.classList.remove('button-bordered');
            bt2.classList.remove('button-bordered');
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