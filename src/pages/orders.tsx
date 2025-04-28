import { CONFIG } from 'src/config-global';

import { OrderView } from 'src/sections/orders/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Orders - ${CONFIG.appName}`}</title>

      <OrderView />
    </>
  );
}
