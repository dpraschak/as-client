import React, {useState, useEffect} from "react";

function UserPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  async function fetchPlaylists() {
    let response = await fetch('/playlists')
    console.log(response);

    response = await response.json()
    console.log(response);

    await setPlaylists(response)
    console.log(playlists)
  }

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return <>
  <h1>User Playlists</h1>
  {playlists.map(item => <p key={item.id}><img src={item.images[0]? item.images[0].url: ""}/><br/><h2>{item.name}</h2><br/>{item.description}</p>)}
  </>;
}
export default UserPlaylists;
