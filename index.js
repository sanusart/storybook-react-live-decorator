import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import {themes} from 'prism-react-renderer';

export const ReactLiveDecorator = ({
   code,
   scope,
   fontFamily = 'monospace',
   theme = themes.nightOwl,
   debug,
   ...rest
 }) => {
  return (story, context) => {
    if (context?.parameters?.reactLive?.debug) {
      // eslint-disable-next-line no-console
      console.log(
        `%c λ ReactLiveDecorator log for: "${context.name}" story `,
        'background: salmon; font-size: 14px; color: #555; font-weight: 700',
        {code, scope, story, context}
      );
    }

    return (
      <LiveProvider
        code={code}
        scope={context?.parameters?.reactLive?.scope || scope}
        theme={context?.parameters?.reactLive?.theme || theme}
        {...rest}
      >
        <LivePreview/>
        <LiveError/>
        <br/>
        <div style={{fontFamily: context?.parameters?.reactLive?.fontFamily || fontFamily}}>
          <LiveEditor/>
        </div>
      </LiveProvider>
    );
  };
};
