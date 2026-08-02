import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World! from stimulus"
    //document.querySelector("#show-fix-content").classList.add("hidden")
  }

  greet(){
    alert("stimulus say Hello")
  }
}
