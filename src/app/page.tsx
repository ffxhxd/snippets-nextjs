import { db } from "./db"

const Home = async () => {
  //getting all different snippets from our database [will give array of objects]
  const snippets =  await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet)=>{
    return (
      <div key={snippet.id}>
        {snippet.title}
      </div>
    )
  })

  return (
    <div>{renderedSnippets}</div>
  )
}

export default Home