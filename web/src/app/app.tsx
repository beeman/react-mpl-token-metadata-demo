import { createMetadataAccountV3 } from '@metaplex-foundation/mpl-token-metadata';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './app-routes';
import { ClusterProvider } from './cluster/cluster-data-access';
import { SolanaProvider } from './solana/solana-provider';
import { UiLayout } from './ui/ui-layout';

const client = new QueryClient();

export function App() {
  console.log('createMetadataAccountV3', createMetadataAccountV3);
  return (
    <QueryClientProvider client={client}>
      <ClusterProvider>
        <SolanaProvider>
          <UiLayout>
            <AppRoutes />
          </UiLayout>
        </SolanaProvider>
      </ClusterProvider>
    </QueryClientProvider>
  );
}
