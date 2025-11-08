import { deleteItem } from "../api/api";
import { useUserStore } from "../store/store";
import { useItemStore } from "../store/useItemStore";
import BidField from "./BidField";

const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid }) => {

    const jwt = useUserStore((state) => state.jwt)
    const { getItems } = useItemStore()
    const isOwner = jwt && userId == jwt.userId
    const LoggedUserId = () => {
        if (!jwt) return null;
        if (jwt.userId) return jwt.userId;
    }
    const handleDelete = async () => {
        await deleteItem(id)
        getItems()
    }

    const loggedUserId = LoggedUserId();

    return (
        <div className="item-card">
            <div className="item-content">{title}</div>
            {imageUrl && (
                <div className="item-image">
                    <img src={imageUrl} alt={title} />
                </div>
            )}
            <div className="item-meta">
                <span className="item-author">{username}</span>
                <span className="item-author">{description}</span>
                <span className="item-author">{price}</span>
                <span className="item-time">{createdAt}</span>
            </div>
            {loggedUserId && userId && loggedUserId === userId && (
                <div>
                    <button onClick={handleDelete}
                        className="button-delete">
                        <span>🗑️</span>
                        <span>Удалить</span>
                    </button>
                </div>)}
            {jwt && !isOwner && (
                <BidField itemId={id} currentPrice={highestBid || price} />
            )}
        </div>
    )
}
export default ItemCard