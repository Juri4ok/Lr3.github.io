document.addEventListener("DOMContentLoaded", function () {
    const imagesArray = [
        {
            path: 'images/001.jpg',
            title: 'Огірок',
            description: 'Огірок звичайний',
        },
        {
            path: 'images/002.jpg',
            title: 'Помідор',
            description: 'Барнаульский консервний',
        },
        {
            path: 'images/003.jpg',
            title: 'Капуста',
            description: 'Капуста білокачанна',
        }
    ];

    function initPhotoRotator(containerId, images) {
        const rotatorContainer = document.getElementById(containerId);
        const photo = document.getElementById("photo");
        const photoNumber = document.getElementById("currentPhotoNumber"); // Змінено ідентифікатор
        const totalPhotos = document.getElementById("totalPhotos"); // Додано ідентифікатор
        const photoTitle = document.getElementById("photoTitle");
        const photoDescription = document.getElementById("photoDescription");
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");

        let currentImageIndex = 0;

        function updateImage() {
            const image = images[currentImageIndex];
            photo.src = image.path;
            photoTitle.textContent = image.title;
            photoDescription.textContent = image.description;
            photoNumber.textContent = currentImageIndex + 1; // Встановлюємо номер фотографії
            totalPhotos.textContent = images.length; // Встановлюємо загальну кількість фотографій
            updateNavigationButtons();
        }

        function updateNavigationButtons() {
            prevButton.style.display = currentImageIndex === 0 ? "none" : "block";
            nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
        }

        prevButton.addEventListener("click", () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateImage();
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
                updateImage();
            }
        });

        updateImage();
    }

    initPhotoRotator("rotator", imagesArray);
});