// application.js

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-loading"
import { application } from "./application"  // Importamos la aplicación

// Iniciamos la aplicación
const app = Application.start()

// Cargamos los controladores
const context = require.context("controllers", true, /\.js$/)
app.load(definitionsFromContext(context))

// Exportamos la aplicación
export { app as application }
