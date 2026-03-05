import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import spec from "../../swagger";

export default function ApiDocs() {
  return <SwaggerUI spec={spec} />;
}