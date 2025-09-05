import { useSolana } from '@/components/solana/use-solana'
import { WalletButton } from '@/components/solana/solana-provider'
import { AppHero } from '@/components/app-hero'
import { TokenvestingUiProgramExplorerLink } from './ui/tokenvesting-ui-program-explorer-link'
import { TokenvestingUiCreate } from './ui/tokenvesting-ui-create'
import { TokenvestingUiProgram } from '@/features/tokenvesting/ui/tokenvesting-ui-program'

export default function TokenvestingFeature() {
  const { account } = useSolana()

  if (!account) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="hero py-[64px]">
          <div className="hero-content text-center">
            <WalletButton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppHero title="Tokenvesting" subtitle={'Run the program by clicking the "Run program" button.'}>
        <p className="mb-6">
          <TokenvestingUiProgramExplorerLink />
        </p>
        <TokenvestingUiCreate />
      </AppHero>
      <TokenvestingUiProgram />
    </div>
  )
}
