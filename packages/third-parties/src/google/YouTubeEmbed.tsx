import React from 'react'
import Script, { ScriptProps } from 'next/script'
import { YouTubeEmbed as TPCYouTubeEmbed } from 'third-party-capital'

import ThirdPartyScriptEmbed from '../ThirdPartyScriptEmbed'
import { YouTubeEmbed as YouTubeEmbedTypes } from '../types/google'

const scriptStrategy = {
  server: 'beforeInteractive',
  client: 'afterInteractive',
  idle: 'lazyOnload',
  worker: 'worker',
}

export default function YouTubeEmbed(props: YouTubeEmbedTypes) {
  const { html, scripts, stylesheets } = TPCYouTubeEmbed(props)

  return (
    <ThirdPartyScriptEmbed
      height={props.height || null}
      width={props.width || null}
      html={html}
      dataNtpc="YouTubeEmbed"
    >
      {scripts?.map((script) => (
        <Script
          src={script.url}
          strategy={scriptStrategy[script.strategy] as ScriptProps['strategy']}
          stylesheets={stylesheets}
        />
      ))}
    </ThirdPartyScriptEmbed>
  )
}
