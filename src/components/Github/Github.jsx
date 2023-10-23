import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-[#212121] text-[#ffdf] p-4 text-3xl">
      <h1> Username: {data.name} </h1> 
       <p> Followers : {data.followers} </p>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/dhruvkapoorx");
  return response.json();
};
