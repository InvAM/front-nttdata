const API_URL = "http://localhost:8000/api/users/generate/";

document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("generate-btn");

	button.addEventListener("click", generateUsers);
});

function generateUsers() {
	axios
		.post(API_URL)
		.then((response) => {
			renderUsers(response.data.data);
		})
		.catch((error) => {
			console.error(error);
			alert("Error al generar usuarios");
		});
}

function renderUsers(users) {
	const container = document.getElementById("users-container");
	container.innerHTML = "";

	users.forEach((user) => {
		const div = document.createElement("div");
		div.className = "user-card";

		div.innerHTML = `
            <img src="${user.photo}" alt="Foto">
            <div>
                <strong>${user.name}</strong><br>
                Género: ${user.gender}<br>
                Ubicación: ${user.location}<br>
                Email: ${user.email}<br>
                Fecha nacimiento: ${user.birthdate}
            </div>
        `;

		container.appendChild(div);
	});
}
