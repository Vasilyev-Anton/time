import DateTime from "./DateTime"
import ModificateDateTime from "./ModificateDateTime"

interface Props {
    url: string,
    date: string
}

export default function Video(props : Props) {
    const ModDateTime = ModificateDateTime(DateTime , props.date)
    return (
        <div className="video" >
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <ModDateTime />
        </div>
    )
}
