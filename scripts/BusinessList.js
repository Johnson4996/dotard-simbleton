import { useBusiness } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".container")

export const businessList =() =>{
    const businessArr = useBusiness()
    contentElement.innerHTML = "<h1> Active Businesses </h1>"

    businessArr.forEach(business => {
        contentElement.innerHTML += businessHTML(business)
    });
}