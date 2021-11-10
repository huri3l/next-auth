import { setupAPIClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';
import { Can } from '../components/Can';

export default function Metrics() {
  return (
    <>
      <h1>Metrics</h1>
      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/me');

    return {
      props: {},
    };
  },
  {
    permissions: ['metrics.list3'],
    roles: ['administrator'],
  },
);
