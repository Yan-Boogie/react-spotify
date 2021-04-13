import cx from 'clsx';
import { flexBoxContainerClasses as flexBoxContainer } from 'shared/components/containers';
import styles from './playerBoard.module.scss';
import MusicDetailsBlock from './components/musicDetailsBlock';

export function PlayerBoard() {
  return (
    <div className={cx(styles[flexBoxContainer.host], styles[flexBoxContainer.withPadding])}>
      <MusicDetailsBlock title="title" authors={['author1', 'author2']} />
    </div>
  );
}
