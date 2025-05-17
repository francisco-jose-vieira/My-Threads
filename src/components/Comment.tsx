import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

interface Content {
  content: String,
  onDeleteComment: Function
}

export function Comment({content, onDeleteComment}: Content) {

  function handleDeleteComment() {
    onDeleteComment(content)
    
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/francisco-jose-vieira.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Francisco José</strong>
              <time title="09 de maio de 2025 às 15:04">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={25} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
