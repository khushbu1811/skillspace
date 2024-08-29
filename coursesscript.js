document.addEventListener("DOMContentLoaded", () => {
    const courses = document.querySelectorAll(".course-card");
    const filterButton = document.querySelector(".apply button");
    const sortSelect = document.getElementById("sort");

    filterButton.addEventListener("click", () => {
        const selectedCategories = Array.from(document.querySelectorAll(".filter-group input[type='checkbox']:checked"))
            .map(checkbox => checkbox.id);
        const filteredCourses = Array.from(courses).filter(course => {
            const categoryMatches = selectedCategories.some(category => course.innerHTML.toLowerCase().includes(category));
            return categoryMatches || selectedCategories.length === 0;
        });

        courses.forEach(course => course.style.display = "none");
        filteredCourses.forEach(course => course.style.display = "block");
    });

    sortSelect.addEventListener("change", () => {
        const sortedCourses = Array.from(courses).sort((a, b) => {
            const sortValue = sortSelect.value;
            let comparison = 0;

            if (sortValue === "popularity") {
                const ratingA = a.querySelector("p:nth-of-type(4)").innerText.split('★').length - 1;
                const ratingB = b.querySelector("p:nth-of-type(4)").innerText.split('★').length - 1;
                comparison = ratingB - ratingA;
            } else if (sortValue === "newest") {
                // Assuming newer courses are added to the end, reverse the order
                comparison = Array.from(courses).indexOf(b) - Array.from(courses).indexOf(a);
            } else if (sortValue === "highest-rated") {
                const ratingA = a.querySelector("p:nth-of-type(4)").innerText.split('★').length - 1;
                const ratingB = b.querySelector("p:nth-of-type(4)").innerText.split('★').length - 1;
                comparison = ratingB - ratingA;
            }
            return comparison;
        });

        const courseList = document.querySelector(".courses");
        courseList.innerHTML = "";
        sortedCourses.forEach(course => courseList.appendChild(course));
    });
});
