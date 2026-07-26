// Manually register controllers for the bundler (avoid stimulus-loading import)
import { application } from "./application"
import HelloController from "./hello_controller"

application.register("hello", HelloController)
