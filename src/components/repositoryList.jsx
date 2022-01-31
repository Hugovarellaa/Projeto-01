import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoyItem";

export function RepositoryList(){
    const [list , setList] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/Hugovarellaa/repos")
        .then(response => response.json())
        .then(data => setList(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
               {list.map(item => (
                   <RepositoryItem repository={item.name} link={item.html_url} description={item.description}/>
               ))}
               
            </ul>
        </section>
    )
}