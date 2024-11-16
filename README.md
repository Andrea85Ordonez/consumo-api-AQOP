# ConsumoApiAQOP

Parte 1: CREACION DEL PROYECTO ANGULAR

Se creo desde consola (cmd) un archivo que se llama "consumo-api-AQOP", este archivo lleva mis inciales

//Imagen 1
//https://drive.google.com/file/d/1V9647Vn6diJdGqWjVZJsb4_Y1PgEk2Za/view?usp=sharing

Una vez creado mi archivo, ejecuto el siguiente comando " ng new consumo-api-INICIALES", para crear un nuevo proyecto en Angular, de igual forma lo llame "consumo-api-AQOP", en donde se nos pidió que seleccionemos algunas características, en mi caso lo puse a tipo de CSS, y que contenga todos sus componentes, aproximadamente toma un tiempo de 5 minutos para crearse.

//Imagen 2 y 3
//https://drive.google.com/file/d/1ghh7cm85_KKNRFI5DE3Z0YOUufVIa_gx/view?usp=sharing
//https://drive.google.com/file/d/1MwRkN7osjCRjcuZg94YrWody295jaR0d/view?usp=sharing

Ya que se finalizo el proyecto, se podrá ver que dentro de la carpeta que se creo desde un inicio, ya se puede ver todos los componentes que debe de tener el proyecto de angular. 

//Imagen 4 y 5
//https://drive.google.com/file/d/1LDrx9wYilMVGA_rapaynyrkKzSUxlA5x/view?usp=sharing
//https://drive.google.com/file/d/1LfDj1KV70S_XBVGfKCLS82Ainf1WSHB1/view?usp=sharing

Entrando a VisualStudioCode, se puede ver igual los componentes, pero en esa parte ya se puede realizar los cambios y ediciones suficientes para nuestro proyecto web 

//Imagen 6
//https://drive.google.com/file/d/1OQWY3pf2EqdXDiOlMdXPz5a7aRD5vHd1/view?usp=sharing

*******************************************************************************************
Parte 2: CREACION DEL SERVICIO PARA CONSUMIR LA API
Ya que se esta en VisualStudioCode, abrimos la terminal para ejecutar el siguiente comando 
" ng generate service services/user", este creara una carpeta llamada "service", estará en la ruta como src/app/service, como se muestra en la imagen 

//Imagen 7
//https://drive.google.com/file/d/11JhLsiqxovMmEGnzFlzMr20NAUV4eCfN/view?usp=sharing


Si bien, se crea dos archivos, que se llama "user.service.spec.ts" y "user.service.ts", en donde se estará ocupando mas es el segundo archivo, que tiene la ruta "src/app/services/user.service.ts", asi mismo se implemento esta parte de codigo, que de igual forma, se utilizara una API publica, la cual es "https://api.escuelajs.co/api/v1/users", para que se muestre los datos de esa API

//Imagen 8
//https://drive.google.com/file/d/1D4l_Cw6mk9p5YOBzQcKzqpJKx2RjSN38/view?usp=sharing

Este código define un servicio en un proyecto Angular que se utiliza para interactuar con una API externa y obtener datos relacionados con los usuarios. Por ello, el método getUsers se utiliza para obtener la lista de usuarios desde el servidor.

*******************************************************************************************
Parte 3: CONFIGURACION DEL ARCHIVO HTTPCLIENTMODULE 
Como se esta usando una versión reciente de Angular, es necesario generar un componente "user-list", para ello se ejecutara en la terminal el siguiente comando " ng generate component components/user-list", para que este se pueda crear, una vez terminado la ejecución se deberá de ver lo siguiente 

//Imagen 9
//https://drive.google.com/file/d/1sgmGv07Kaf4JYVoH1vYjRS52MxlUNGNE/view?usp=sharing

En el archivo "user-list.components.ts", se agrega el "HttpClientModule", como se muestra en la imagen.
 
//Imagen 10
//https://drive.google.com/file/d/1pPvg7hTyYHBzdm4VilBMIhNylqQWYzAj/view?usp=sharing

Este se implementa en imports para que Angular pueda hacer peticiones HTTP a APIS externas, ya que sin él, las solicitudes de HTTP de UserService no funcionarían.

*******************************************************************************************
Parte 4: IMPLEMENTACION DEL COMPONENTE DE LA TABLA USUARIOS
Como ya se tiene la carpeta "components\user-list", en el archivo "user-list.components.ts", se debera de implementar las siguientes importanciones: 
*  import { Component, OnInit } from '@angular/core';
*  import { UserService } from '../../services/user.service';

En el docuemento que proporciona la profesora, contiene la sguiente estructura de codigo: 

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}

Pero en mi caso, como se esta usando una version reciente de Angular, hice algunas modificaciones para su funcionamiento, como se muestra en la imagen: 

//Imagen 11
//https://drive.google.com/file/d/1tcyIVK7iMZTgJ4yshgEfeepDB6qFXLxt/view?usp=sharing

En esta parte igual, se implementa una característica que es la paginación para mayor organización al momento de estar mostrando los usuarios en formato tabla.

*******************************************************************************************
Parte 5: CREACION DE LA VISTA PARA MOSTRAR LOS DATOS EN FORMATO TABLA 

Una vez configurado, todas las clases necesarias, se hara el diseño y la estructura para que los datos, se vean mas presentables y de igual forma, tengan la opcion de paginación, para mayor organización, con HTML y CSS, se hara todo

* Codigo hecho en HTML:
<div class="container mt-5">
    <h2>User List</h2>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let user of paginatedUsers">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
            </tr>
        </tbody>
    </table>
    
    <!-- Controles de paginación -->
    <div class="pagination-controls">
        <button (click)="prevPage()" [disabled]="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages">Siguiente</button>
    </div>
</div>

//Imagen 12
//https://drive.google.com/file/d/1S-d206vietJcrnFnXNUZc1JCdHm2G6JR/view?usp=sharing


* Codigo hecho en CSS:
/* Estilo para el contenedor */
.container {
    margin-top: 50px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo del título */
.container h2 {
    color: #333;
    font-family: Arial, sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}

/* Estilo de la tabla */
.table {
    width: 100%;
    border-collapse: collapse;
}

/* Encabezado de la tabla */
.table thead th {
    background-color: #330080;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    text-align: left;
}

/* Filas de la tabla */
.table tbody tr {
    background-color: #ffffff;
    transition: background-color 0.3s ease;
}

.table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

.table tbody tr:hover {
    background-color: #e9ecef;
}

/* Celdas de la tabla */
.table td {
    padding: 10px;
    color: #333;
    font-family: Arial, sans-serif;
    border: 1px solid #ddd;
}

/* Ajuste de las celdas y del texto */
.table th, .table td {
    text-align: center;
}

/* Controles de paginación */
.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.pagination-controls button {
    background-color: #672d00;
    color: white;
    border: none;
    padding: 8px 16px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.pagination-controls button:hover {
    background-color: #0056b3;
}

.pagination-controls button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

//Imagen 13
//https://drive.google.com/file/d/1ohrP4qWwPppTgYiZauuDjFgV73mxG4mo/view?usp=sharing

*******************************************************************************************
Parte 6: INTEGRACION DEL COMPONENTE EN LA APLICACION 
En la carpeta APP, nos dirgimos al archivo "app.component.html", se implementara el "<app-user-list></app-user-list>" y "<router-outlet />", para tener una buena interacción con la pagina, asi como se muestra en la imagen 

//Imagen 14 
//https://drive.google.com/file/d/16w0y5vfnnnpbQ7Coyq4igpTBwCONuDYh/view?usp=sharing

*******************************************************************************************
Parte 7: EJECUCION DEL PROYECTO
 Una vez ya hecho todas las configuraciones necesarias, se abrirá la terminal, para ejecutar el servidor mediante el siguiente comando "ng serve", que nos mostrara en una pestaña del navegador, los datos en formato tabla, con paginación para mayor estructura y organización de la información, como se muestra en la imagen: 

Solo se muestran 3 usuarios en la tabla
//Imagen 15 y 16
//https://drive.google.com/file/d/1gbtfSAn6LKiJ8juaCcjBFICNiiSAuV2p/view?usp=sharing
//https://drive.google.com/file/d/1ynzr_MUyp2HWPp5BFPfDWkxe8Haav4Yd/view?usp=sharing

Ingresando a la API publica, se ve que solamente hay tres registros, por eso, no se visualizan mas datos 

//Imagen 17
//https://drive.google.com/file/d/1g8qJSy9yJB1QBCupaeGUPkR9FNronfDg/view?usp=sharing