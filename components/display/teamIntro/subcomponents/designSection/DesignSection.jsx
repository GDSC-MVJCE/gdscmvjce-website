import React, { useState } from "react";

import FigmaWindow from "@public/images/figma_window.svg";
import { DesignSectionContainer } from "./DesignSection.styled";

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useDroppable,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import Typography from "@/components/display/typography/Typography";
import { Draggable } from "@/components/draggable/Draggable";
import { Droppable } from "@/components/droppable/Droppable";
import GDSCLogo from "@public/logos/gdscmvjce-logo.svg";
import { restrictToParentElement } from "@dnd-kit/modifiers";
const DesignSection = () => {
  const defaultCoordinates = {
    text: {
      x: 126,
      y: 112
    },
    blob1: {
      x: 0,
      y: 250
    },
    blob2: {
      x: 490,
      y: 160
    },
    logo: {
      x: 173,
      y: 52
    }
  };

  const activationConstraint = {
    delay: 0,
    tolerance: 5
  };

  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  function updateCoordinates(active, delta) {
    const temp = coordinates;
    temp[active.id] = {
      x: temp[active.id].x + delta.x,
      y: temp[active.id].y + delta.y
    };
    setCoordinates((prev) => ({ ...prev, ...temp }));
  }
  return (
    <DesignSectionContainer>
      <FigmaWindow />
      <DndContext
        sensors={sensors}
        onDragEnd={({ delta, active }) => {
          updateCoordinates(active, delta);
        }}
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement]}
      >
        <Droppable className="canvas" id="canvas" />
        <div className="canvas-bound">
          <Draggable
            top={coordinates.text.y}
            left={coordinates.text.x}
            className="draggable"
            id="text"
          >
            <div className="text-draggable">
              <Typography variant="bodyEmphasized">
                The Design Team at GDSC MVJCE is the driving force behind our
                visual appeal. They craft compelling event posters and
                captivating graphics
              </Typography>
            </div>
          </Draggable>
          <Draggable
            top={coordinates.blob1.y}
            left={coordinates.blob1.x}
            className="blob1 draggable"
            id="blob1"
          >
            <div></div>
          </Draggable>
          <Draggable
            top={coordinates.blob2.y}
            left={coordinates.blob2.x}
            className="blob2 draggable"
            id="blob2"
          >
            <div></div>
          </Draggable>
          <Draggable
            top={coordinates.logo.y}
            left={coordinates.logo.x}
            className="draggable logo"
            id="logo"
          >
            <GDSCLogo />
          </Draggable>
        </div>
      </DndContext>
    </DesignSectionContainer>
  );
};

export default DesignSection;
