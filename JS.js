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

const jobTitles = ["“Có hành động chưa chắc sẽ chiến thắng - Nhưng không hành động thì chắc chắn sẽ thất bại”", "“Khi mà chúng ta dám thử thì cơ hội của chúng ta ít nhất là hơn 0% - cơ hội là hi vọng”", "“Hãy sống chứ đừng chỉ tồn tại - Để khi ta nhìn lại hành trình cuộc đời ta không hối tiếc”"];
let currentJobIndex = 0;

function showNextJobTitle() {
    const jobTitleElement = document.querySelector('.job-title');
    jobTitleElement.textContent = jobTitles[currentJobIndex];
    jobTitleElement.classList.add('show'); // Thêm class 'show' để hiển thị với opacity 1
    currentJobIndex = (currentJobIndex + 1) % jobTitles.length;
}

document.addEventListener('DOMContentLoaded', function () {
    showNextJobTitle(); // Hiển thị công việc đầu tiên khi trang được tải

    setInterval(function () {
        const jobTitleElement = document.querySelector('.job-title');
        jobTitleElement.classList.remove('show'); // Loại bỏ class 'show' để ẩn đi với opacity 0
        setTimeout(showNextJobTitle, 1000); // Hiển thị công việc tiếp theo sau khi opacity đã chuyển thành 0
    }, 10000); // Chuyển đổi sau mỗi 10 giây
});

var audio = new Audio();
var isPlaying = false;
// Danh sách các bài hát
var songs = [
    "./Assest/song/Hero.mp3",
    "./Assest/song/Unstoppable.mp3",
    "./Assest/song/Never_said_never.mp3"
];

// Vị trí của bài hát hiện tại trong danh sách
var currentSongIndex = 0;
var currentLyricsIndex = currentSongIndex;
var FirstTime = true;
var currentLyricsID = ["lyrics1", "lyrics2", "lyrics3"];

// Tạm dừng hoặc tiếp tục phát bài hát
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("playIcon").style.display = "inline";
        document.getElementById("pauseIcon").style.display = "none";
        document.getElementById("songContainer").style.display = "flex";
        document.getElementById("songContainer").classList.add('unactive'); // Ẩn phần .Song khi tạm dừng
    } else {
        if (audio.src === '') {
            audio.src = songs[currentSongIndex];
            audio.volume = 0.7;
        }
        audio.volume = 0.7;
        audio.play();
        document.getElementById("playIcon").style.display = "none";
        document.getElementById("pauseIcon").style.display = "inline";
        document.querySelectorAll(".lyrics").forEach(function (element) {
            element.style.display = "none";
        });
        document.getElementById(currentLyricsID[currentLyricsIndex]).style.display = "block";
        if (FirstTime) {
            document.getElementById("songContainer").style.display = "flex";
            document.getElementById("songContainer").classList.add('unactive')
            setTimeout(function () {
                document.getElementById("songContainer").classList.remove('unactive');
            }, 1000);
            FirstTime = false;
        }
        else {
            document.getElementById("songContainer").style.display = "flex";
            document.getElementById("songContainer").classList.remove('unactive') // Hiển thị phần .Song khi phát
        }

    }
    isPlaying = !isPlaying;
}

// Kiểm tra khi bài hát kết thúc và chuyển sang bài hát tiếp theo
audio.onended = function () {
    currentSongIndex = currentSongIndex + 1;
    currentLyricsIndex = currentSongIndex;
    console.log(currentSongIndex);
    audio.src = '';
    togglePlay();
};

// Phát bài hát đầu tiên
togglePlay();