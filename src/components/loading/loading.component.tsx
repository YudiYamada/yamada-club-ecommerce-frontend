import type { FunctionComponent } from "react";
import { CircleLoader } from "react-spinners";

import { LoadingContainer } from "./loading.styles";

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <CircleLoader size={100} />
    </LoadingContainer>
  );
};

export default Loading;
