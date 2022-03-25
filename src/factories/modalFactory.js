import Swal from 'sweetalert2'


const errorModal = (text) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		html: text || 'Algo deu errado!'
	})
}


const successModal = (title, showConfirmButton, timer) => {
	showConfirmButton = showConfirmButton || false
	timer = timer || 1500

	Swal.fire({
		icon: 'success',
		title,
		showConfirmButton,
		timer
	})
}


const confirmModal = (text, confirmButtonText, cancelButtonText) => {
	return Swal.fire({
		text: text || 'Você não poderá desfazer essa ação!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085D6',
		cancelButtonColor: '#DD3333',
		confirmButtonText: confirmButtonText || 'Sim, delete isso!',
		cancelButtonText: cancelButtonText || 'Cancelar'
	})
}


export {
	errorModal,
	successModal,
	confirmModal,
}
