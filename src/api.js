import axios from "axios";

const getUsuario = async (user_id) => {

    const response = await axios.get('https://ubiquitous-orbit-wr7xrqxv9wgxf9wrp-2025.app.github.dev/test/' + user_id, {});
    
    console.log(response)
    return response;
};
  
export default getUsuario;