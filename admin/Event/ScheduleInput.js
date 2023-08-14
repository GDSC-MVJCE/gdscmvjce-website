import { Form } from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import get from "lodash/get";
import { useEffect, useState } from "react";
import {
  useFormGroupContext,
  useFormGroups,
  useInput,
  useRecordContext,
} from "react-admin";
import { useController } from "react-hook-form";

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

const ScheduleInput = ({ source, defaultValue }) => {
  const formGroupName = useFormGroupContext();
  const formGroups = useFormGroups();

  const record = useRecordContext();
  useEffect(() => {
    if (!formGroups || formGroupName == null) {
      return;
    }

    formGroups.registerField(source, formGroupName);

    return () => {
      formGroups.unregisterField(source, formGroupName);
    };
  }, [formGroups, formGroupName, source]);

  const {
    field: controllerField,
    fieldState,
    formState,
  } = useController({
    name: source,
    defaultValue: get(record, source, defaultValue),
  });

  return (
    <Form
      schema={schema}
      onChange={(e) => controllerField.onChange(JSON.stringify(e.formData))}
      validator={validator}
      formData={() => {
        try {
          return JSON.parse(controllerField.value);
        } catch (e) {
          return {};
        }
      }}
    >
      <button type="submit"></button>
    </Form>
  );
};

export default ScheduleInput;
