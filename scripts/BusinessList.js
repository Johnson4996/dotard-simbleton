import { useBusiness, onlyNy } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const allBus = document.querySelector(".businessList")
const nyBus = document.querySelector(".businessList--newYork")



//lists all businesses 
export const businessList =() =>{
    const businessArr = useBusiness()
    allBus.innerHTML = "<h1> Active Businesses </h1>"

    businessArr.forEach(business => {
        allBus.innerHTML += businessHTML(business)
    });
}

//lists only businesses from NY
export const businessNy =() =>{
    const nyBusinesses = onlyNy()
    nyBus.innerHTML = "<h1> New York Businesses </h1>"

    nyBusinesses.forEach(business => {
        nyBus.innerHTML += businessHTML(business)
    });
}