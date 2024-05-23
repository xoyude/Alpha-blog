// application.js

// Importa todas tus dependencias de JS aquí
import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-loading"
import "bootstrap"
import "@popperjs/core"
import "./navbar"; // Importa navbar.js aquí
import "controllers"

const application = Application.start()
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
