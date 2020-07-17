import { useBusiness, onlyNy, onlyManuf, getAgents } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"
import { agentsHTML } from "./Agents.js"


const allBus = document.querySelector(".businessList")
const nyBus = document.querySelector(".businessList--newYork")
const manufBus = document.querySelector(".businessList--manufacturing")
const agentElement = document.querySelector(".agents")



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

export const agentList = () =>{
    agentElement.innerHTML += "<h1> Purchasing Agents </h1>"
    const agents = getAgents

    agents.forEach(agent => {
        agentElement.innerHTML += agentsHTML(agent)
    });
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const allAgents = getAgents
            const foundAgents = allAgents.find(agentObj =>{
                if(agentObj.fullName.includes(keyPressEvent.target.value)){
                    return agentObj
                }
            })

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundAgents.fullName}
                </h2>
                <section>
                ${foundAgents.company}
                </section>
                <section>
                ${foundAgents.phone},
                </section>
            `;
        }
    });