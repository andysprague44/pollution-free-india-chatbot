import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
            Delhi is choking. Your action can save it.
        </h1>
        <p className="leading-normal text-muted-foreground">
            1. Delhi is among the top 5 polluted major cities in the world.
        </p>
        <p className="leading-normal text-muted-foreground">
            2. Air pollution is likely the leading cause of death, chronic respiratory illnesses and asthma in Delhi.
        </p>
        <p className="leading-normal text-muted-foreground">
            3. Key reason for the decline in the quality of lives, especially for children and elderly.
        </p>
        <br/>
        <h1 className="text-lg font-semibold">
            Email CM to Take Action on Air Quality.
        </h1>
        <p className="leading-normal text-muted-foreground">
            Get an AI generated personalized email in seconds.
        </p>
      </div>
    </div>
  )
}
