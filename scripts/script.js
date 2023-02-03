function handleViews() {
    const notifications = document.getElementById('notifications');
    notifications.innerText = `0`;
    const redball = document.querySelectorAll('.red-ball');
    redball.forEach(redball => {
        redball.classList.add('desactiveState');
    })
}