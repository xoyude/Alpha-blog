// index.js

import { application } from "./application" // Importamos la aplicación
import HelloController from "./hello_controller"

// Registramos el controlador
application.register("hello", HelloController)
