Proceso switch
	Definir sabor Como Caracter
	
	Escribir "Ingrese el sabor de helado deseado uva, cereza, fresa, sandia"
	leer sabor
	
	Segun sabor Hacer
		"uva":
			Escribir "El sabor elegido fue uva"
		"cereza":
			Escribir "El sabor elegido fue cereza"
		"fresa":
			Escribir "El sabor elegido fue fresa"
		"sandia":
			Escribir "El sabor elegido fue sandia"
		De Otro Modo:
			Escribir "El sabor elegido no existe"
	Fin Segun
FinProceso
