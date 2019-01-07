const contactCollection = {

    getAllContacts (){
        return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
    },
    postAllContacts(newContactToSave){
        fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(newContactToSave)
    })
    location.reload(true);
  }
}

export default contactCollection