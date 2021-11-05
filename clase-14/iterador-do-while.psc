Proceso doWhile
	Definir clave Como Entero
	
	Repetir
		Escribir "Dime tu clave de acceso"
		leer clave
		si clave <> 1234 Entonces 
		  Escribir "clave incorrecta"
		FinSi
	Hasta Que clave == 1234
	
	Escribir "Bienvenido"
FinProceso
