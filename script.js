
document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('pageName') || document.title;
    const desc = localStorage.getItem('pageDescription') || 'Deskripsi singkat halaman ini.';
    document.querySelector('h1').textContent = name;
    document.querySelector('.description').textContent = desc;

    const links = JSON.parse(localStorage.getItem('customLinks') || '[]');
    const linkContainer = document.querySelector('.links');
    linkContainer.innerHTML = '';
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.url;
        a.textContent = l.text;
        a.className = 'link';
        linkContainer.appendChild(a);
    });
});
