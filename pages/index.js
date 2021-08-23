import React from 'react'

const TesteCors = () => {
  const handleEmployer = async () => {
    // const token = await getToken()
    fetch("https://open-qa.credisim.com.br/v1/employer/10264663000177", {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': token,
      },
      method: "GET",
    }).then((resp) => console.log(resp))
  }


  const handleLead = async () => {

    //  const token = await getToken()
    fetch("https://consigned-proposal-lead.k8s.qa.gt.intranet.pags/web/lead/private", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: "{\"operationType\":\"FINANCING\",\"partnerCnpj\":\"74739066000134\",\"employerCnpj\":\"46395000000139\",\"institutionCode\":\"006694\",\"client\":{\"incomeValue\":10000,\"cpf\":\"058.041.382-94\",\"registrationNumber\":\"552426004299044\",\"birthDate\":\"1980-01-01\",\"admissionDate\":\"2019-01-01\"},\"creditCondition\":{\"monthlyAmount\":1000,\"installmentQuantity\":10,\"agreementCode\":\"101013\",\"dueDate\":{\"calculationPaymentType\":\"AGREEMENT\",\"dueDateType\":\"BUSINESS_DAYS\",\"firstDueDate\":\"2021-08-02\"}}}",
    }).then((resp) => console.log(resp))
  }


  const handleSimulation = async () => {
    // const token = await getToken()
    fetch("https://open-qa.credisim.com.br/v1/proposal/consigned/public/simulation", {
      headers: {
        "Content-Type": "application/json",
        //'Authorization': token,
      },
      method: "POST",
      body: "{\"operationType\":\"FINANCING\",\"partnerCnpj\":\"74739066000134\",\"employerCnpj\":\"46395000000139\",\"institutionCode\":\"006694\",\"client\":{\"incomeValue\":10000,\"cpf\":\"058.041.382-94\",\"registrationNumber\":\"552426004299044\",\"birthDate\":\"1980-01-01\",\"admissionDate\":\"2019-01-01\"},\"creditCondition\":{\"monthlyAmount\":1000,\"installmentQuantity\":10,\"agreementCode\":\"101013\",\"dueDate\":{\"calculationPaymentType\":\"AGREEMENT\",\"dueDateType\":\"BUSINESS_DAYS\",\"firstDueDate\":\"2021-08-02\"}}}",
    }).then((resp) => console.log(resp))
  }

  return (
    <div>
      <button onClick={handleEmployer}>Employer</button>
      <button onClick={handleLead}>Lead</button>
      <button onClick={handleSimulation}>Simulação</button>
    </div>
  )
}

export default TesteCors