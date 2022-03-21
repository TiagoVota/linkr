const sanitizeCpf = (cpf) => {
	cpf = clearCpfInput(cpf)
	cpf = makeCpfStyle(cpf)
	return cpf
}

const clearCpfInput = (cpf) => {
	cpf = cpf.replaceAll('.', '').replaceAll('-', '')

	const onlyNumbers = new RegExp(/^[0-9]{0,11}$/)
	if (!onlyNumbers.test(cpf)) cpf = cpf.slice(0, -1)

	return cpf
}

const makeCpfStyle = (cpf) => {
	const cpfLen = cpf.length

	if (cpfLen > 3) cpf = addCharAt(cpf, '.', 3)
	if (cpfLen > 6) cpf = addCharAt(cpf, '.', 6+1)
	if (cpfLen > 9) cpf = addCharAt(cpf, '-', 9+2)

	return cpf
}

const addCharAt = (str, char, position) => {
	str = [...str]
	str.splice(position, 0, char)
	return str.join('')
}


export {
	sanitizeCpf,
}
