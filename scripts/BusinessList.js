import { useBusiness } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".container")

const businessList =() =>{
    const businessArr = useBusiness()
    contentElement.innerHTML = "<h1> Business List </h1>"

    businessList.forEach(business => {
        contentElement.innerHTML += businessHTML(business)
    });
}