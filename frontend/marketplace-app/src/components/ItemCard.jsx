
const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid}) => {

    // const jwt = useUserStore((state) => state.jwt)
    // const { getItems } = useItemStore()

    // const LoggedUserId = () => {
    //     if (!jwt) return null;
    //     if (jwt.userId) return jwt.userId;
    // };

    //const loggedUserId = LoggedUserId();

    // const handleDelete = async () => {
    //     await deleteMessage(id)
    //     await getItems()
    //     console.log(loggedUserId)
    // }
    // const handleReport = async () => {
    //     try {
    //         await reportMessage(id)
    //         await getItems()
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    // const handleLike = async () => {
    //     try {
    //         await likeMessage(id)
    //         await getItems()
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    return (
        <div className="message-card">
            <div className="message-content">{title}</div>
            <div className="message-meta">
                <span className="message-author">{username}</span>
                <span className="message-author">{description}</span>
                <span className="message-author">{price}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            {/* {loggedUserId && (
                <div className="message-actions">
                    <button onClick={handleLike}
                        className="action-button">
                        <span>{likedBy.includes(loggedUserId) ? "❤️" : "🤍"}</span>
                        <span>{likes}</span>
                    </button>
                </div>)}
            <div className="message-actions">
                <button onClick={handleReport}
                    className="action-button">
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
            </div>
            {loggedUserId && userId && loggedUserId === userId && (
                <div className="message-actions">
                    <button onClick={handleDelete}
                        className="action-button delete">
                        <span>🗑️</span>
                        <span>Удалить</span>
                    </button>
                </div>)} */}
        </div>
    )
}
export default ItemCard