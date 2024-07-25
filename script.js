document.addEventListener('DOMContentLoaded', () => {
    const ball1 = document.getElementById('ball1');
    const ball2 = document.getElementById('ball2');
    const beaker1 = document.getElementById('beaker1');
    const beaker2 = document.getElementById('beaker2');
    const water1 = document.getElementById('water1');
    const water2 = document.getElementById('water2');
    const instruction1 = document.getElementById('instruction1');
    const instruction2 = document.getElementById('instruction2');
    const initialPrompt = document.getElementById('initialPrompt');

    function showPrompt(message) {
        initialPrompt.innerText = message;
        initialPrompt.style.display = 'block';
    }

    ball1.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('ball', 'absorb');
        setTimeout(() => e.target.style.opacity = '0.5', 0);
    });

    ball2.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('ball', 'non-absorb');
        setTimeout(() => e.target.style.opacity = '0.5', 0);
    });

    ball1.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });

    ball2.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });

    beaker1.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    beaker2.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    beaker1.addEventListener('drop', (e) => {
        const ballType = e.dataTransfer.getData('ball');
        if (ballType === 'absorb') {
            ball1.style.top = '160px';
            ball1.style.left = '35px';
            water1.style.height = '55%';
            instruction1.style.display = 'block';
            showPrompt('Notice the water level and now tap the ball to take it out from the container.');
            setTimeout(() => {
                ball1.style.background = 'rgb(67, 121, 237)';
            }, 1000);
        }
    });

    beaker2.addEventListener('drop', (e) => {
        const ballType = e.dataTransfer.getData('ball');
        if (ballType === 'non-absorb') {
            ball2.style.top = '160px';
            ball2.style.left = '35px';
            water2.style.height = '60%';
            instruction2.style.display = 'block';
            showPrompt('Notice the water level and now tap the ball to take it from the container.');
        }
    });

    ball1.addEventListener('click', () => {
        ball1.style.top = '-40px';
        ball1.style.left = '35px';
        water1.style.height = '45%';
        instruction1.style.display = 'none';
        showPrompt('Notice the water level on beaker 1 after removing ball made of absorbing material.');
    });

    ball2.addEventListener('click', () => {
        ball2.style.top = '-40px';
        ball2.style.left = '35px';
        water2.style.height = '50%';
        instruction2.style.display = 'none';
        showPrompt('Notice the water level on beaker 2 after removing ball made of non-absorbing material.');
    });
});
