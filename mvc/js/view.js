class View {

	constructor(elem){
		this.elem = elem;
	}

		viewDatos(datos) {
		//console.log(datos);
		for(let x in datos){
			let nodeFilds = document.querySelectorAll(`[name= '${x}']`);

			if (nodeFilds.length > 1 ) {

				const fields = Array.from(nodeFilds);

				const correctFild = fields.find(elem => {
					return elem.value === datos[x];
				});

				correctFild.checked = true;

			}else if(nodeFilds.length > 0){
				nodeFilds[0].value = datos[x];

			}
		}
		
	}
}