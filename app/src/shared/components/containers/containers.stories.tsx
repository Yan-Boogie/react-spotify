import { storiesOf } from '@storybook/react';
import { FlexBoxContainer } from '.';

export const Primary = () => <FlexBoxContainer length={56} />;

storiesOf('Primary', module).add('with text', () => <FlexBoxContainer length={56} />);
