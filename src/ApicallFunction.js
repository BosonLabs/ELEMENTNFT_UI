export const calltokenForUsers =async()=>{            
    let formData = new FormData();
    formData.append('client_id', 'cEZoGE19mLmQdIPPjXtj2osurm8NRLHK');
    formData.append('client_secret', 'VNe8u0lpgcCvE9NsE7Khcft7gA22RMvW');
    formData.append('grant_type', 'client_credentials');
    formData.append('scope', 'email');

    const requestOptions = {
      method: 'POST',
      body: formData,
    }
    // const response = await axios.post("https://api.elementpad.io/elementsapi/oauth2/token?client_id=cEZoGE19mLmQdIPPjXtj2osurm8NRLHK&client_secret=VNe8u0lpgcCvE9NsE7Khcft7gA22RMvW&grant_type=client_credentials&scope=email");
    const response = await fetch('https://api.elementpad.io/nft/oauth2/token', requestOptions);
    const data = await response.json();
    console.log("fetch token",{ data })
    //elementsapi/v1/txHistory/`,
    // setToken(data.access_token)    
    let response2 = await fetch(`https://api.elementpad.io/nft/v1/nftPlain`, {
        // method: 'GET',
        // mode: 'no-cors',
        headers: {
          'Authorization': `Bearer ${data.access_token}`
        //   // 'Authorization': `Bearer ${token}`
        }
      }
      )
      console.log(response2);
      const data2 = await response2.json();
      console.log("fetch users",data2)
    //   setToken(data2)
    return data2;
        
}