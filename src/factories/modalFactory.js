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


const confirmModal = (title, text, confirmButtonText) => {
	return Swal.fire({
		title: title || 'Tem certeza disso?',
		text: text || 'Você não poderá desfazer essa ação!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085D6',
		cancelButtonColor: '#DD3333',
		confirmButtonText: confirmButtonText || 'Sim, delete isso!'
	})
}


export {
	errorModal,
	successModal,
	confirmModal,
}
