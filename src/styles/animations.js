import { keyframes } from 'styled-components';

export default {
  creepy: keyframes`
    0%
    {
      filter url('#squiggly-0')
    }

    25%
    {
      filter url('#squiggly-1')
    }

    50%
    {
      filter url('#squiggly-2')
    }

    75%
    {
      filter url('#squiggly-3')
    }

    100%
    {
      filter url('#squiggly-4')
    }
  `,

  opacity: keyframes`
    0%
    {
      opacity: 0;
    }

    100%
    {
      opacity: 1;
    }
  `,

  textChange: text => keyframes`
    0%
    {
      opacity: 0;
    }

    100%
    {
      opacity: 1;
      content: '${text}';
    }
  `,
};
