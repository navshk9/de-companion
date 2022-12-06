import { AppConfigurationClient } from "@azure/app-configuration";
import { useMemo, useState } from "react";

const { REACT_APP_CONFIG_KEY_CONNECTION_STRING } = process.env;

const client = new AppConfigurationClient(
  REACT_APP_CONFIG_KEY_CONNECTION_STRING
);

/**
 * Retrieves the specified feature flag from Azure App Configuration.
 * @param {string} flagKey App Config Feature Flag key
 * @returns the feature flag for the specified key
 */
const useFeatureFlag = (flagKey = "") => {
  const [enabled, setEnabled] = useState(false);

  useMemo(async () => {
    if (!flagKey || !flagKey.toString().trim().length) {
      console.error("A feature flag key must be supplied.");
    } else {
      try {
        const result = await client.getConfigurationSetting({
          key: `.appconfig.featureflag/${flagKey.toString().trim()}`,
        });
        if (result && typeof result === "object") {
          console.debug(
            "Feature: " + JSON.parse(result.value).id,
            JSON.parse(result.value).enabled
          );
          setEnabled(JSON.parse(result.value).enabled);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [flagKey]);

  return { enabled };
};

export { useFeatureFlag };
