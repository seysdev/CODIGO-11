Proceso Calculadora
	Definir a Como Entero
	Definir b Como Entero
	Definir operacion Como Caracter
	
	Escribir "Por favor ingrese el primer numero"
	leer a
	
	Escribir "Por favor ingrese el segundo numero"
	leer b
	
	Escribir "Por favor ingrese la operacion *,/,-,+"
	leer operacion
	
	Segun operacion Hacer
		"+":
		   Escribir "El resuldo es = " Suma(a,b)
		"-":
		   Escribir "El resuldo es = " Resta(a,b)
		"/":
		    Escribir "El resuldo es = " Dividir(a,b)
		"*":
		    Escribir "El resuldo es = " Multiplicar(a,b)
		De Otro Modo:
		    Escribir "Por favor ingrese un operador valido"
	Fin Segun
FinProceso

Funcion suma_retorno = Suma(a, b)
	suma_retorno = a + b
FinFuncion

Funcion restar_retorno = Resta(a, b)
	restar_retorno = a - b
FinFuncion

Funcion dividir_retorno = Dividir(a, b)
	dividir_retorno = a / b
FinFuncion

Funcion multiplicar_retorno = Multiplicar(a, b)
	multiplicar_retorno = a * b
FinFuncion

