export const getData = async () => {

    const response = await fetch("http://localhost:3000/api/students", {
        method: 'GET',
      
        headers: {
          'Content-Type': 'application/json',
        },
      
        mode: 'cors',
      
        cache: 'no-cache',
      });
      
      const obj = await response.json();
      console.log(obj);
      
      return obj;
}


