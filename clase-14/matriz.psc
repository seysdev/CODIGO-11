Proceso matriz
	Dimension datos[4]
	Dimension datosSuma[4]
	
	datos[1] = 0
	datos[2] = 1
	datos[3] = 2
	datos[4] = 3
	
	Escribir "El primer dato es " datos[1]
	Escribir "El segundo dato es " datos[2]
	
	Para x=1 Hasta 4 Con Paso 1 Hacer
		Escribir "Posicion " x " = " datos[x]
		datosSuma[x] = x + 10
	Fin Para
	
	Para x=1 Hasta 4 Con Paso 1 Hacer
		Escribir "Posicion datosSuma " x " = " datosSuma[x]
	Fin Para
	
FinProceso
