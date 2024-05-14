window.addEventListener('scroll', function () {
    // Lấy vị trí scroll hiện tại của trang
    let scrollPosition = window.pageYOffset;

    // Lấy vị trí của section1
    let section1Position = document.querySelector('.section1').offsetTop;

    // Lấy phần tử container
    const container = document.querySelector('.containers');

    // Kiểm tra nếu vị trí cuộn của trang vượt quá vị trí của section1 cộng với một giá trị cố định (ví dụ: 300px)
    if (scrollPosition > section1Position - 200) {
        // Chuyển class từ container sang fixed
        container.classList.add('fixed');
    } else {
        // Nếu không, loại bỏ class fixed và sử dụng lại container
        container.classList.remove('fixed');
    }
});

window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset;

    let secHeadPosition = document.getElementById('head').offsetTop;
    let sec1Position = document.getElementById('sec1').offsetTop;
    let sec2Position = document.getElementById('sec2').offsetTop;
    let sec3Position = document.getElementById('sec3').offsetTop;
    let sec4Position = document.getElementById('sec4').offsetTop;

    let navItems = document.querySelectorAll('nav ul li');

    if (scrollPosition >= sec4Position - 100) {
        setActive(navItems, 5);
    } else if (scrollPosition >= sec3Position - 100) {
        setActive(navItems, 4);
    } else if (scrollPosition >= sec2Position - 100) {
        setActive(navItems, 3);
    } else if (scrollPosition >= sec1Position - 100) {
        setActive(navItems, 2);
    } else if (scrollPosition >= secHeadPosition - 100) {
        setActive(navItems, 1);
    } else {
        removeActive(navItems);
    }
});

function setActive(items, index) {
    removeActive(items);
    items[index - 1].classList.add('hover');
}

function removeActive(items) {
    items.forEach(item => {
        item.classList.remove('hover');
    });
}