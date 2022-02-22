import axios from "axios";
export async function callApi({
  url,
  method,
  data,
  contentType = "application/json",
  header = {},
  onUploadProgress,
  cancelTokenSource,
}) {
  const { REACT_APP_API_URL, REACT_APP_OCP_APIM_SUB_KEY } = process.env;
  return axios({
    headers: {
      "Ocp-Apim-Subscription-Key": `${REACT_APP_OCP_APIM_SUB_KEY}`,
      "Content-type": contentType,
      ...header,
    },
    onUploadProgress,
    method,
    // url: `${REACT_APP_API_URL}${url}`,
    url: `https://apim-decompanion-dev-use2.azure-api.net/todo${url}`,
    data: data || null,
    cancelToken: cancelTokenSource && cancelTokenSource.token,
  }).catch((err) => {
    // track error
    if (axios.isCancel(err)) {
      return { canceled: true };
    } else {
      // handle error
      return [];
    }
  });
}
