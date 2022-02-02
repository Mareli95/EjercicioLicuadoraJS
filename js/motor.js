// console.log('123');
'use strict';
let estadoLicuadora = 'apagada';

let licuadora = document.getElementById('blender');
let sonidoLicuadora = document.getElementById('blender-sound');
var botonLicuadora = document.getElementById('blender-button-sound');
function controlarLicuadora() {
	if (estadoLicuadora == 'apagada') {
		estadoLicuadora = 'encendido';
		sonido();
		licuadora.classList.add('active');

		console.log('me prendiste');
	} else {
		estadoLicuadora = 'apagada';
		sonido();
		licuadora.classList.remove('active');
		console.log('apagada');
	}
}

function sonido() {
	if (sonidoLicuadora.paused) {
		botonLicuadora.play();
		sonidoLicuadora.play();
	} else {
		botonLicuadora.play();
		sonidoLicuadora.pause();
		sonidoLicuadora.currentTime = 0;
	}
}
