import { useSolana } from '@/components/solana/use-solana'
import { useMemo } from 'react'
import { getTokenvestingProgramId } from '@project/anchor'

export function useTokenvestingProgramId() {
  const { cluster } = useSolana()

  return useMemo(() => getTokenvestingProgramId(cluster.id), [cluster])
}
