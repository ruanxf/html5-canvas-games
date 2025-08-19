const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');

// 游戏常量
const GRID_SIZE = 20;
const TILE_COUNT_X = canvas.width / GRID_SIZE;
const TILE_COUNT_Y = canvas.height / GRID_SIZE;

// 游戏状态
let gameRunning = false;
let playerScore = 0;
let aiScore = 0;
let gameSpeed = 100; // 默认速度(ms)
let aiStrategyRatio = 0.8; // AI追逐食物的概率

// 难度设置
document.getElementById('difficulty-easy').addEventListener('click', () => {
    startGame(150, 0.7); // 慢速，AI更倾向于吃食物
});

document.getElementById('difficulty-medium').addEventListener('click', () => {
    startGame(100, 0.8); // 中等速度，平衡策略
});

document.getElementById('difficulty-hard').addEventListener('click', () => {
    startGame(70, 0.9); // 快速，AI更激进
});

function startGame(speed, strategyRatio) {
    gameSpeed = speed;
    aiStrategyRatio = strategyRatio;
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    resetGame();
}

// 玩家蛇
const playerSnake = {
    body: [
        {x: 5, y: 10},
        {x: 4, y: 10},
        {x: 3, y: 10}
    ],
    direction: 'right',
    nextDirection: 'right',
    color: '#4CAF50'
};

// AI蛇
const aiSnake = {
    body: [
        {x: 15, y: 10},
        {x: 16, y: 10},
        {x: 17, y: 10}
    ],
    direction: 'left',
    nextDirection: 'left',
    color: '#F44336'
};

// 食物
let food = generateFood();

// 生成随机食物位置
function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * TILE_COUNT_X),
            y: Math.floor(Math.random() * TILE_COUNT_Y)
        };
    } while (isPositionOccupied(newFood));
    return newFood;
}

function isPositionOccupied(position) {
    // 检查是否与蛇重叠
    return [...playerSnake.body, ...aiSnake.body].some(segment => 
        segment.x === position.x && segment.y === position.y
    );
}

// 绘制游戏
function draw() {
    // 清空画布
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制食物
    ctx.fillStyle = '#FFC107';
    ctx.fillRect(
        food.x * GRID_SIZE, 
        food.y * GRID_SIZE, 
        GRID_SIZE, GRID_SIZE
    );
    
    // 绘制玩家蛇
    drawSnake(playerSnake);
    
    // 绘制AI蛇
    drawSnake(aiSnake);
    
    // 更新分数
    scoreElement.textContent = `玩家: ${playerScore} | AI: ${aiScore}`;
}

function drawSnake(snake) {
    snake.body.forEach((segment, index) => {
        ctx.fillStyle = snake.color;
        if (index === 0) {
            // 蛇头颜色更深
            ctx.fillStyle = shadeColor(snake.color, -50);
        }
        ctx.fillRect(
            segment.x * GRID_SIZE, 
            segment.y * GRID_SIZE, 
            GRID_SIZE, GRID_SIZE
        );
    });
}

function shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3), 16);
    let G = parseInt(color.substring(3,5), 16);
    let B = parseInt(color.substring(5,7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    return `#${R.toString(16).padStart(2, '0')}${G.toString(16).padStart(2, '0')}${B.toString(16).padStart(2, '0')}`;
}

// 更新游戏状态
function update() {
    // 移动蛇
    moveSnake(playerSnake);
    moveSnake(aiSnake);
    
    // 处理方向更新
    playerSnake.direction = playerSnake.nextDirection;
    updateAIDirection();
    
    // 检查碰撞
    checkCollisions();
    
    // 检查是否吃到食物
    checkFood();
}

// AI决策逻辑
function updateAIDirection() {
    const aiHead = aiSnake.body[0];
    const directions = ['up', 'down', 'left', 'right'];
    const possibleDirections = directions.filter(dir => {
        if (dir === 'up' && aiSnake.direction === 'down') return false;
        if (dir === 'down' && aiSnake.direction === 'up') return false;
        if (dir === 'left' && aiSnake.direction === 'right') return false;
        if (dir === 'right' && aiSnake.direction === 'left') return false;
        return true;
    });
    
    // 计算到食物的距离
    const foodDistances = possibleDirections.map(dir => {
        const nextPos = getNextPosition(aiHead, dir);
        return {
            direction: dir,
            distance: Math.abs(nextPos.x - food.x) + Math.abs(nextPos.y - food.y)
        };
    });
    
    // 计算到玩家的距离
    const playerDistances = possibleDirections.map(dir => {
        const nextPos = getNextPosition(aiHead, dir);
        return {
            direction: dir,
            distance: Math.abs(nextPos.x - playerSnake.body[0].x) + Math.abs(nextPos.y - playerSnake.body[0].y)
        };
    });
    
    // 智能决策：根据难度设置调整策略
    const strategy = Math.random() < aiStrategyRatio ? 'chaseFood' : 'interferePlayer';
    
    let bestDirection;
    if (strategy === 'chaseFood') {
        // 选择距离食物最近的方向
        foodDistances.sort((a, b) => a.distance - b.distance);
        bestDirection = foodDistances[0].direction;
    } else {
        // 选择距离玩家最近的方向
        playerDistances.sort((a, b) => a.distance - b.distance);
        bestDirection = playerDistances[0].direction;
    }
    
    // 确保选择的方向不会立即撞到自己
    const nextPos = getNextPosition(aiHead, bestDirection);
    const willCollideSelf = aiSnake.body.some((segment, index) => 
        index > 0 && segment.x === nextPos.x && segment.y === nextPos.y
    );
    
    if (!willCollideSelf) {
        aiSnake.direction = bestDirection;
    } else {
        // 如果最优方向会撞到自己，选择次优方向
        const safeDirections = possibleDirections.filter(dir => {
            const pos = getNextPosition(aiHead, dir);
            return !aiSnake.body.some((segment, index) => 
                index > 0 && segment.x === pos.x && segment.y === pos.y
            );
        });
        
        if (safeDirections.length > 0) {
            aiSnake.direction = safeDirections[0];
        }
    }
}

function getNextPosition(position, direction) {
    const nextPos = {x: position.x, y: position.y};
    
    switch(direction) {
        case 'up':
            nextPos.y -= 1;
            break;
        case 'down':
            nextPos.y += 1;
            break;
        case 'left':
            nextPos.x -= 1;
            break;
        case 'right':
            nextPos.x += 1;
            break;
    }
    
    // 墙壁穿透
    if (nextPos.x < 0) nextPos.x = TILE_COUNT_X - 1;
    if (nextPos.x >= TILE_COUNT_X) nextPos.x = 0;
    if (nextPos.y < 0) nextPos.y = TILE_COUNT_Y - 1;
    if (nextPos.y >= TILE_COUNT_Y) nextPos.y = 0;
    
    return nextPos;
}

function moveSnake(snake) {
    // 移动蛇身
    const head = {x: snake.body[0].x, y: snake.body[0].y};
    
    switch(snake.direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    
    // 墙壁穿透
    if (head.x < 0) head.x = TILE_COUNT_X - 1;
    if (head.x >= TILE_COUNT_X) head.x = 0;
    if (head.y < 0) head.y = TILE_COUNT_Y - 1;
    if (head.y >= TILE_COUNT_Y) head.y = 0;
    
    snake.body.unshift(head);
    snake.body.pop();
}

function checkCollisions() {
    // 检查玩家蛇是否撞到自己
    if (isSelfCollision(playerSnake)) {
        endGame("玩家撞到自己了！");
        return;
    }
    
    // 检查AI蛇是否撞到自己
    if (isSelfCollision(aiSnake)) {
        endGame("AI撞到自己了！");
        return;
    }
    
    // 检查玩家是否撞到AI
    const playerHead = playerSnake.body[0];
    if (aiSnake.body.some((segment, index) => 
        index > 0 && segment.x === playerHead.x && segment.y === playerHead.y
    )) {
        endGame("玩家撞到AI了！");
        return;
    }
}

function isSelfCollision(snake) {
    const head = snake.body[0];
    return snake.body.some((segment, index) => 
        index > 0 && segment.x === head.x && segment.y === head.y
    );
}

function checkFood() {
    const playerHead = playerSnake.body[0];
    if (playerHead.x === food.x && playerHead.y === food.y) {
        // 玩家吃到食物
        playerScore++;
        growSnake(playerSnake);
        food = generateFood();
    }
    
    const aiHead = aiSnake.body[0];
    if (aiHead.x === food.x && aiHead.y === food.y) {
        // AI吃到食物
        aiScore++;
        growSnake(aiSnake);
        food = generateFood();
    }
}

function growSnake(snake) {
    // 在蛇尾添加一个新节点
    const tail = snake.body[snake.body.length - 1];
    snake.body.push({...tail});
}

function endGame(message) {
    gameRunning = false;
    const restart = confirm(message + ` 最终比分 - 玩家: ${playerScore} | AI: ${aiScore}\n\n点击确定重新开始游戏`);
    if (restart) {
        resetGame();
    }
}

let gameLoopTimeout;

function resetGame() {
    // 清除之前的游戏循环
    if (gameLoopTimeout) {
        clearTimeout(gameLoopTimeout);
    }
    
    // 重置玩家蛇
    playerSnake.body = [
        {x: 5, y: 10},
        {x: 4, y: 10},
        {x: 3, y: 10}
    ];
    playerSnake.direction = 'right';
    playerSnake.nextDirection = 'right';
    
    // 重置AI蛇
    aiSnake.body = [
        {x: 15, y: 10},
        {x: 16, y: 10},
        {x: 17, y: 10}
    ];
    aiSnake.direction = 'left';
    aiSnake.nextDirection = 'left';
    
    // 重置分数
    playerScore = 0;
    aiScore = 0;
    
    // 生成新食物
    food = generateFood();
    
    // 重新开始游戏
    gameRunning = true;
    gameLoop();
}

// 游戏主循环
function gameLoop() {
    if (!gameRunning) return;
    
    update();
    draw();
    gameLoopTimeout = setTimeout(gameLoop, gameSpeed);
}

// 添加键盘控制
document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
            if (playerSnake.direction !== 'down') {
                playerSnake.nextDirection = 'up';
            }
            break;
        case 'ArrowDown':
            if (playerSnake.direction !== 'up') {
                playerSnake.nextDirection = 'down';
            }
            break;
        case 'ArrowLeft':
            if (playerSnake.direction !== 'right') {
                playerSnake.nextDirection = 'left';
            }
            break;
        case 'ArrowRight':
            if (playerSnake.direction !== 'left') {
                playerSnake.nextDirection = 'right';
            }
            break;
    }
});
