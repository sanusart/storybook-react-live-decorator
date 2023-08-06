import { Button } from './Button';
import { ReactLiveDecorator } from '../../index';

export default {
  title: 'Example/Button',
  component: Button,
};

const codePrimary = `() => (
  <Button primary={true} size="large" label="Primary" />
)`;

export const Primary = {
  decorators: [ReactLiveDecorator({ code: codePrimary, scope: { Button } })]
};

const codeSecondary = `() => (
  <Button primary={false} size="large" label="Secondary" />
)`;

export const Secondary = {
  decorators: [ReactLiveDecorator({ code: codeSecondary, scope: { Button } })]
};
