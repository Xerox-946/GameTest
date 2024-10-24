const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 定义日志文件夹路径
const logsFolderPath = './logs/app';  // 你的日志文件夹路径
const outputFilePath = 'check-log.txt';  // 输出的文件路径

// 存储提取的所有数字
let numbers = [];
let errorNumbers = [];

// 读取文件夹下的所有日志文件
fs.readdir(logsFolderPath, (err, files) => {
    if (err) {
        console.error('读取文件夹失败:', err);
        return;
    }

    // 过滤出日志文件（假设日志文件以 .log 或 .txt 结尾）
    const logFiles = files.filter(file => file.endsWith('.log') || file.endsWith('.txt'));

    // 如果没有日志文件，直接返回
    if (logFiles.length === 0) {
        console.log('没有找到日志文件');
        return;
    }

    // 处理所有日志文件
    logFiles.forEach(file => {
        const filePath = path.join(logsFolderPath, file);
        processLogFile(filePath);
    });
});

// 处理单个日志文件
function processLogFile(filePath) {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    // 逐行读取日志文件
    rl.on('line', (line) => {
        // 查找 [WARN] GameSocket - WebSocket connection closed 后面的数字
        const warnMatch = line.match(/\[WARN\] GameSocket - WebSocket connection closed ===== (\d+)/);
        if (warnMatch) {
            const number = parseInt(warnMatch[1], 10);
            numbers.push(number);
        }

        // 查找 [ERROR] GameSocket - 【world.createEvent】执行不成功! 后面的数字
        const errorMatch = line.match(/\[ERROR\] GameSocket - 【world.createEvent】执行不成功! ====== (\d+)/);
        if (errorMatch) {
            const errorNumber = parseInt(errorMatch[1], 10);
            errorNumbers.push(errorNumber);
        }
    });

    rl.on('close', () => {
        console.log(`${filePath} 处理完成`);
        checkCompletion();
    });
}

// 处理完所有日志文件后，排序并找出缺失的数字
function checkCompletion() {
    if (numbers.length === 0 && errorNumbers.length === 0) {
        console.log('没有找到任何有效数据');
        return;
    }

    // 对提取的数字进行排序
    numbers.sort((a, b) => a - b);
    errorNumbers.sort((a, b) => a - b);

    // 找出缺失的数字
    let missingNumbers = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        if (!numbers.includes(i)) {
            missingNumbers.push(i);
        }
    }

    // 输出正常数字和缺失数字的结果到文件
    const result = `
全部走完的ID: ${numbers.join(', ')}
全部走完的ID个数: ${numbers.length}
没有走完的ID: ${missingNumbers.join(', ')}
没有走完的ID个数: ${missingNumbers.length}
提取到的错误ID: ${errorNumbers.join(', ')}
错误ID个数: ${errorNumbers.length}
`;

    fs.writeFileSync(outputFilePath, result, 'utf-8');
    console.log(`数据处理完成，结果已保存到 ${outputFilePath}`);
}
