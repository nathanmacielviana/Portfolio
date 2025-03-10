window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(function() {
        loaderWrapper.style.display = 'none'; // Esconde o loader após o tempo
    }, 4000); // Ajuste o tempo conforme necessário
});