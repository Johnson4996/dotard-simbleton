import { useBusiness, onlyNy, onlyManuf } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const allBus = document.querySelector(".businessList")
const nyBus = document.querySelector(".businessList--newYork")
const manufBus = document.querySelector(".businessList--manufacturing")



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

export const businnessManuf = () =>{
    const busManuf = onlyManuf()
    manufBus.innerHTML = "<h1> Businesses in Manufacturing </h1>"

    busManuf.forEach(business =>{
        manufBus.innerHTML += businessHTML(business)
    })
}