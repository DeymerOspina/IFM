document.getElementById('position-left').addEventListener('click', function() {
    var sidePanel = document.getElementById('sidePanel');
    if (sidePanel.classList.contains('show-animation')) {
        sidePanel.classList.remove('show-animation');
        sidePanel.classList.add('hidden');
    } else {
        sidePanel.classList.remove('hidden');
        sidePanel.classList.add('show-animation');
    }
});
