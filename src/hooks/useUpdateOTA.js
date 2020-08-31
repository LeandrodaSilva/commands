import * as React from 'react';
import * as Updates from "expo-updates";

export default function useUpdateOTA() {
  const [isCheckForUpdateComplete, seIsCheckForUpdateComplete] = React.useState(false);

  React.useEffect(() => {
    async function updateOTA() {
      if (__DEV__) {
        console.log('Development mode');
      } else {
        const { isAvailable } = Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
    }

    updateOTA().then(() => seIsCheckForUpdateComplete(true));
  }, [])

  return isCheckForUpdateComplete;
}
