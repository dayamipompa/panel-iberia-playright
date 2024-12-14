#  Prueba Técnica Playwright Dayami Pompa

Este proyecto utiliza Playwright para pruebas automatizadas en la web.

## Requisitos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)


## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/dayamipompa/PanelIberiaWebPlaywright-Dayami-Pompa.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd PanelIberiaWebPlaywright-Dayami-Pompa
  
3. Instala las dependencias necesarias:
   
    ```sh
    npm install
    ```
   
## Uso

1. Para ejecutar las pruebas, utiliza uno de los siguientes comandos:
```sh
npx playwright test
```
```sh
npm test
```

Una vez que se han ejecutado todos los tests puede ver el reporte puede abrir el fichero de reporte que se crea en la carpeta **playright-report**


## Estructura del Proyecto

- `tests/`: Contiene los archivos de prueba.
- `pageObjectModel/`: Contiene los objetos de página.
- `dataTest/`: Contiene los datos de Pruebas.
- `constant/`: Contiene las URL utilizadas en las Pruebas y algunas variables usadas.
- `playwright.config.js`: Configuración de Playwright.

## Notas

1. Se ha creado un proyecto de test automatizados con playright para ejecutar un conjunto de test simples sobre la búsqueda de vuelos usando el lenguaje javascript.
2. El requerimiento principal de la prueba técnica es, dado varios juegos de datos definidos en un fichero, para este caso se usó un fichero json, rellenar los campos correspondientes en la web de Iberia.
3. Se han creado además algunos test que validan que se muestren los mensajes de error cuando se dejan campos vacíos y se usa el mismo valor como origen y destino. 
4. Los tests se han separado en varios ficheros para que se ejecuten con cierto paralelismo y se minimice el tiempo de ejecución de los tests, además de ayudar en el mantenimiento de los mismos.
5. Se han integrado variables de entornos para la ejecución de los tests en varios entornos como pueden ser, development, test, staging, hotfix o production.
6. Se creó una clase llamada PageSearchFlight la cual es una **Page Object Model** que representa la página de búsqueda de vuelos, se busca centralizar el comportamiento y los localizadores para que el matenimiento de los test a lo largo del tiempo sea más fácil.
7. **Importante!** Se han usado selectores **CSS** y **XPath** para demostrar conocimientos sobre su uso pero es algo que no recomiendo dado que pueden atentar contra la resiliencia de los tests si la web evoluciona constantemente y se cambia la estructura o los estilos. Se evitó además localizar elementos según el texto que contiene dado que es una aplicación web multilenguaje y hacerlo condicionaría la ejecución de los test al idioma Español. Creo que un enfoque adecuado es que el equipo de QA participe en la fase de análisis; cuando el Product Owner diseñe la historia de usuario y el equipo de UX/UI diseñe la UI y determine su comportamiento, el equipo de QA debe señalar los elementos html que son de su interés para los tests y los desarrolladores deben incluir el atributo **data-testid** a dichos elementos html, de esta manera se garantiza que cambios de estructura o de estilos que no cambien el comportamiento de la aplicación no dañen los tests.