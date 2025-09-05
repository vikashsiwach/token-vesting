import { useTokenvestingProgramId } from '@/features/tokenvesting/data-access/use-tokenvesting-program-id'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function TokenvestingUiProgramExplorerLink() {
  const programId = useTokenvestingProgramId()

  return <AppExplorerLink address={programId.toString()} label={ellipsify(programId.toString())} />
}
