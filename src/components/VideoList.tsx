import Video from "./Video";
import { v4} from "uuid"

interface Props{
    list : {url: string, date : string }[]
}

export default function VideoList(props : Props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={ v4()}/>);
}
