import { keyframes } from 'styled-components';

const triggerKeyFrame = () => Math.random()
  .toString(36)
  .substring(7);

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

  collapseMenu: (trigger = triggerKeyFrame()) => keyframes`
    0%
    {
      border-bottom-right-radius: 0%;
      border-bottom-right-radius: 0%;
      transform: translateX(0%);

    }

    100%
    {
      transform: translateX(-90%);
      border-top-right-radius: 200%;
      border-bottom-right-radius: 200%;
      content: ${trigger};
    }

  `,
};
