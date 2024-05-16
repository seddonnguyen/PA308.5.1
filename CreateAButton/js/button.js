document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    button.addEventListener('click', function() {
      let count = parseInt(button.textContent, 10);
        button.textContent = `${count + 1}`;
    });
});