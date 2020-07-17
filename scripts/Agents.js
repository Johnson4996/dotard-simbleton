export const agentsHTML = (agent) =>{
return `
<section class = "agent--card">
    <h2 class="agent__name">${agent.fullName}</h2>
        <p class="agent__company"><b>${agent.company}</b></p>
        <p class="agent__phone"><b>${agent.phone}</b></p>
</section>
`
}