function addCourse() {
    const container = document.getElementById("course");
    container.setAttribute("class", "flex-column");
    const allContainer = document.createElement("div");
    allContainer.setAttribute("class", "course-input");
    const inputContainer = document.createElement("div");
    const descContainer = document.createElement("div");
    inputContainer.setAttribute("class", "flex-column");
    descContainer.setAttribute("class", "flex-column");

    const courseNameLabel = document.createElement("label");
    courseNameLabel.setAttribute("for", "course-name");
    courseNameLabel.textContent = "Course Title";
    const courseDescLabel = document.createElement("label");
    courseDescLabel.setAttribute("for", "course-desc");
    courseDescLabel.textContent = "Course Description";

    const courseNameInput = document.createElement("input");
    courseNameInput.setAttribute("type", "text");
    courseNameInput.setAttribute("required", null);
    courseNameInput.setAttribute("name", "course-name");
    courseNameInput.setAttribute("id", "course-name");
    courseNameInput.setAttribute("class", "course-name");
    const courseDescInput = document.createElement("input");
    courseDescInput.setAttribute("type", "text");
    courseDescInput.setAttribute("required", null);
    courseDescInput.setAttribute("name", "course-desc");
    courseDescInput.setAttribute("id", "course-desc");
    courseDescInput.setAttribute("class", "course-desc");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Course";
    removeButton.setAttribute("style", "background-color: #FFFD82; border-color: #FFFD82;")

    // Add a click event listener to the remove button to remove the course inputs
    removeButton.addEventListener("click", function() {
        allContainer.removeChild(inputContainer);
        allContainer.removeChild(descContainer);
        allContainer.removeChild(removeButton);
    });

    allContainer.append(inputContainer);
    allContainer.append(descContainer);
    inputContainer.append(courseNameLabel);
    inputContainer.append(courseNameInput);
    descContainer.append(courseDescLabel);
    descContainer.append(courseDescInput);
    allContainer.append(removeButton);
    container.append(allContainer);
    
}

// Add an event listener to the form for form submission
document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve values from form fields
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const introImage = document.getElementById("introImage").files[0];
    const imageURL = URL.createObjectURL(introImage);
    const text = "id=\"me\" src=\"" + imageURL + "\"";
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const webdev = document.getElementById("webdev").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funny").value;
    const elseInfo = document.getElementById("else").value;
    const courseList = document.querySelectorAll(".course-input");

    // Create an array to store the course data
    const courses = [];

    // Iterate over course input containers
    courseList.forEach((container) => {
        const courseName = container.querySelector(".course-name").value;
        const courseDesc = container.querySelector(".course-desc").value;
        courses.push({ name: courseName, description: courseDesc });
    });

    // Create a container for the generated content
    const generatedContent = document.createElement("div");
    generatedContent.classList.add("content");

    // Create and populate the elements
    generatedContent.innerHTML = `
        <br>
        <h2 class="page-title">${name} || ${mascot}</h2>
        <br>
        <div class="content">
            <div class="name-img">
                <figure>
                    <img ${text} >
                    <figcaption><em>${caption}</em></figcaption>
                </figure>
                <br>
            </div>
            <ul class="list">
                <li><strong>Personal Background:</strong> ${personal}</li>
                <li><strong>Professional Background:</strong> ${professional}</li>
                <li><strong>Academic Background:</strong> ${academic}</li>
                <li><strong>Background in this Subject:</strong> ${webdev}</li>
                <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                <li><strong>Courses I'm Taking & Why:</strong>
                    <ul class="sublist">
                        ${courses.map((course) => `<li><strong>${course.name}</strong>: ${course.description}</li>`).join("")}
                    </ul>
                </li>
                <li><strong>Funny/Interesting Item to Remember me by:</strong> ${funny}</li>
                <li><strong>I'd also like to Share:</strong> ${elseInfo}</li>
            </ul>
        </div>
    `;

    // Append the generated content to the page
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(generatedContent);
});