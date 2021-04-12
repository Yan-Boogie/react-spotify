import cx from 'clsx';
import { flexBoxContainerClasses as flexBoxContainer } from 'styles/containers';
import { baseTextClasses as baseText } from 'styles/texts';
import styles from './musicDetailsBlock.module.scss';

type MusicDetailsBlockProps = {
  image?: string;
  title: string;
  authors: string[];
};

function MusicDetailsBlock(props: MusicDetailsBlockProps) {
  const {
    image,
    title,
    authors,
  } = props;

  return (
    <div className={styles[flexBoxContainer.host]}>
      {image ? <img src={image} alt="music-detail" /> : <div style={{ width: 64, height: 64 }} />}
      <div className={cx(
        styles[flexBoxContainer.host],
        styles[flexBoxContainer.full],
        styles[flexBoxContainer.columnDirection],
      )}
      >
        <h2 className={styles[baseText.h2]}>{title}</h2>
        {authors.map((author) => (
          <h3 className={styles[baseText.h3]} key={author}>{author}</h3>
        ))}
      </div>
    </div>
  );
}

MusicDetailsBlock.defaultProps = {
  image: '',
};

export default MusicDetailsBlock;
