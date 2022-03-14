import React from "react";



const App = () => {
    
    const name = "Digital Inovation One"
    
    const showEvento = (e) => {
        console.log("Evento aconteceu!")
        console.log(e)
        console.log(name)
    }
    
    const handleChange = (e) => {
        console.log("Typing...")
        console.log(e.value)
        console.log(e)
    }
    
    const Button = <button onClick={showEvento}>Mostrar Evento</button>
    
    return (
        <div>
            <p>Digital Inovation One</p>
            <p>Bem-vindo a aula!</p>
            {Button}
            <input type="text" onChange={handleChange}/>
        </div>
    )
}



//---------------------------------------------------------
// #2 Tópico última aula - listas e chaves
//---------------------------------------------------------

// const App = () => {
    
//     const renderCustomers = (customer, index) => {
//         return (
//             <div key={`customer-${customer.id}`}>
//                 <li>{customer.name}</li>
//                 {customer.skills.map(renderSkills)}
//             </div>
//         )
//     }

//     const renderSkills = (skills, index) => {
//         return (
//             <div key={`skills-${index}`}>
//                 <li>{skills}</li>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <p>Digital Inovation One</p>
//             <p>Bem-vindo a aula!</p>
//             <div>
//                 <ul>
//                     {listCustomer.map(renderCustomers)}    
//                 </ul>
//             </div>
//         </div>
//     )
// }



//---------------------------------------------------------
// #1 Tópico última aula - renderização condicional
// verão modulada do código!!
//---------------------------------------------------------

// const App = () => {
    

//     const renderShowHistory = (
//         <div>
//             Clique no botão abaixo para visualizar o histórico dos clientes
//             <br />
//             {buttonA}
//         </div>
//         )

//     const renderAddCustomer = (
//             <div>
//                 Clique abaixo para cadastrar novo Cliente
//                 <br />
//                 {buttonB}
//             </div>
//         )

//         const customer = "Hiago Murilo"

//         const showCustomer = () => {

//             if (!hasCustomer) return null

//             return (
//                 <div>
//                     <h1>Nome do Cliente: Hiago Murilo</h1>
//                 </div>
//             )
//         }

//     return (
//         <div>
//             <p>Digital Inovation One</p>
//             <p>Bem-vindo a aula!</p>
//             {/* {alert (!hasCustomer)} */}
//             {hasCustomer ? (renderShowHistory) : (renderAddCustomer)}
//             <div>
//                 {showCustomer()}
//             </div>
//         </div>
//     )
// }



//---------------------------------------------------------
// #1 Tópico última aula - renderização condicional
// versão não muito indicada, melhor modular o código! Código acima! 
//---------------------------------------------------------

// const App = () => {
    
//     return (
//         <div>
//             <p>Digital Inovation One</p>
//             <p>Bem-vindo a aula!</p>
//             {hasCustomer ? (
//             <div>
//                 Clique no botão abaixo para visualizar o histórico dos clientes
//                 <br />
//                 {buttonA}
//             </div>
//             ) : (
//                 <div>
//                     Clique abaixo para cadastrar novo Cliente
//                     <br />
//                     {buttonB}
//                 </div>
//             )}
//         </div>
//     )
// }
export default App