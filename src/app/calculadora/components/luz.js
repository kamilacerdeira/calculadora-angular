numero1 = '0'
numero2 = null
operacao = null
resultado = null

Clicou em 5:

	adicionarNumero(5):
		numero1 -> '5'
	
numero1 = '5'
numero2 = null
operacao = null
resultado = null

Clicou em 4:
	adicionarNumero(4):
		numero1 -> '54'

numero1 = '54'
numero2 = null
operacao = null
resultado = null

Clicou em '-':
	definirOperacao('-'):
		operacao = '-'

numero1 = '54'
numero2 = null
operacao = '-'
resultado = null

Clicou em '4':
	adicionarNumero('4'):
		numero2 -> '4'

numero1 = '54'
numero2 = '4'
operacao = '-'
resultado = null

Clicou em '0':
	adicionarNumero('0'):
		numero2 -> '40'

numero1 = '54'
numero2 = '40'
operacao = '-'
resultado = null

Clicou em '+':
	definirOperacao('+'):
		resultado = 14 // CalculadoraService.calcular(54,40,'-')
		operacao = '+'
		numero1 = '14'
		numero2 = null
		resultado = null

numero1 = '14'
numero2 = null
operacao = '+'
resultado = null

Clicou em '2':
	adicionarNumero('2'):
		numero2 -> '2'