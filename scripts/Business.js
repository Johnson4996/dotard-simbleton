export const businessHTML = (businessObj) =>{
    return `
    <section class="business--card">
            <h2 class="bus__name">${businessObj.companyName}</h2>
            <p class="bus__addressFull">${businessObj.addressFullStreet}</p>
            <p class="bus__CityStateZip">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
        </section>
    
    `
}