export default function TocSidebar({titles}){
    return(
        <nav>
            <h2>Nesse documento</h2>
            <ul>
                {titles.map(({text,id}) => (
                    <li key={id}>
                        <a href={`#${id}`}>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}