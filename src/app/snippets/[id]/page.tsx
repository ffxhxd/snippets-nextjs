import {notFound} from 'next/navigation'
import { db } from "@/app/db"

interface SnippetShowPageProps {
    params: {
        id: string
    }
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
    
    //reach our db and fetch data
    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(props.params.id)}
    })

    if (!snippet) {
        return notFound();
    }

  return (
    <div>{snippet.title}</div>
  )
}

export default SnippetShowPage