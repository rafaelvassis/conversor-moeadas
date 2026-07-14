import "./FeedbackMessage.css"

type FeedbackMessageProps = {
    message: string;
}

export default function FeedbackMessage({message}: FeedbackMessageProps){
    return (
        <div className="error">
          <p>{message}</p>
        </div>
    )
}