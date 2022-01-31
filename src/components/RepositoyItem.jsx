export function RepositoryItem (props){
    return (
        <li>
             <strong>{ props.repository  }</strong>
             <p>{props.description}</p>
             <a href={props.link}>
                 Acessar reposotório
             </a>
        </li>
    )
}