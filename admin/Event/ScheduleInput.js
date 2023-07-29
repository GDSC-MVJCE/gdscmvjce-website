import { Form } from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { useInput } from "react-admin";

const ScheduleInput = ({ source }) => {
  const { field, id } = useInput({ source });
  const schema = {
    title: "Schedule",
    type: "object",
    properties: {
      sessionName: {
        type: "string",
      },
      sessionDate: {
        type: "string",
        format: "date",
      },
      time: {
        type: "object",
        properties: {
          start: {
            type: "string",
            format: "time",
          },
          end: {
            type: "string",
            format: "time",
          },
        },
      },
    },
  };

  return <Form schema={schema} validator={validator} id={id}></Form>;
};

export default ScheduleInput;
