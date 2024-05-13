function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

function updateDateTime() {
    // Tạo một đối tượng `Date` mới
    const now = new Date();

    // Lấy các thành phần của ngày tháng năm
    const day = addLeadingZero(now.getDate());
    const month = addLeadingZero(now.getMonth() + 1); // Tháng bắt đầu từ 0 nên cộng 1
    const year = now.getFullYear();
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());
    let formattedDate = "";
    // Tạo chuỗi ngày tháng năm với định dạng "ngày-tháng-năm"
    if (hours > 12) {
        formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} PM`;
    } else {
        formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} AM`;
    }

    // Cập nhật nội dung của phần tử có id là `datetime`
    document.querySelector('#datetime').textContent = formattedDate;
}

// Gọi hàm `updateDateTime` mỗi giây
setInterval(updateDateTime, 1000);

