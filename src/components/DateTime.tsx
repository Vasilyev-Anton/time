interface Props{
    date: string
}

export default function DateTime(props : Props) {
    return (
        <p className="date"  >{props.date}</p>
    )
}
