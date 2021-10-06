import { useState } from "react";

function GraduateForm() {
  const [graduate, setGraduate] = useState({
    name: "",
    phone: "",
    address: "",
    profileImage: undefined,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", graduate.name);
    formData.append("phone", graduate.phone);
    formData.append("address", graduate.address);
    formData.append("profileImage", graduate.profileImage);

    console.log(graduate);
    fetch("http://localhost:4000/graduate", {
      method: "POST",
      body: formData,
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      Nombre
      <input
        type='text'
        name='name'
        value={graduate.name}
        onChange={(e) =>
          setGraduate((prevState) => ({ ...prevState, name: e.target.value }))
        }
      />
      Telefono
      <input
        type='text'
        name='phone'
        value={graduate.phone}
        onChange={(e) =>
          setGraduate((prevState) => ({ ...prevState, phone: e.target.value }))
        }
      />
      Direccion
      <input
        type='text'
        name='address'
        value={graduate.address}
        onChange={(e) =>
          setGraduate((prevState) => ({
            ...prevState,
            address: e.target.value,
          }))
        }
      />
      foto
      <input
        type='file'
        accept='png jpg jpeg'
        onChange={(e) =>
          setGraduate((prevState) => ({
            ...prevState,
            profileImage: e.target.files[0],
          }))
        }
      />
      <button type='submit'>Registrar</button>
      {graduate.profileImage && (
        <img src={URL.createObjectURL(graduate.profileImage)} />
      )}
    </form>
  );
}

export default GraduateForm;
