import { forwardRef, ReactNode } from 'react';
import cx from 'clsx';
import classes from './flex-box-container.scss';

export type FlexBoxContainerProps = {
  className?: string;
  children?: ReactNode;
  length: number;
};

const FlexBoxContainer = forwardRef<HTMLDivElement, FlexBoxContainerProps>(function FlexBoxContainer(props, ref) {
  const { className, children, length } = props;

  console.log('classes', classes);

  return (
    <div ref={ref} className={cx(className, classes)}>
      {children}
    </div>
  );
});

export default FlexBoxContainer;
