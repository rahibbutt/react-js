import type {User} from "../../App.tsx";
import './List.css'
interface ListProps {
    items: User[]
}
export const List = (props: ListProps) => {
    const { items } = props
    return  <div className="List">
        {items.map((user) => <ul key={user.id}>
            <li>Name: {user.username}</li>
            <li>Phone: {user.phone}</li>
            <li>Id: {user.id}</li>
            <li>website: {user.website}</li>
        </ul>)}</div>
}