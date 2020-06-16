(function () {
	//V---ariables---//
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	//---Funciones---//
	var agregarTarea = function () {
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		//agregamos el contenido al enlace
		enlace.appendChild(contenido);
		//le establecemos el atributo href
		enlace.setAttribute("href", "#");
		//Agregamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		//Agregamos al nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length - 1; i++) {
			lista.children[i].addEventListener("click", function () {
				this.parentNode.removeChild(this);
			});
		}
	};
	var comprobarInput = function () {
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agregar tarea");
	};
	var eliminarTarea = function () {
		this.parentNode.removeChild(this);
	};

	//---Eventos---//
	//Agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//Comprobar input
	tareaInput.addEventListener("click", comprobarInput);

	//Ejecutar ciclo, borrando elementos de la lista
	for (var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
})();
