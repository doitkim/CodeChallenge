import useAxios from "./useAxios";

const App = () => {
  const [loading, data, error] = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
  });
  console.log(`Loading:${loading}\nError:${error}\nData:${data}`);
  return <h1>Hello</h1>;
};

export default App;
