import React, { useState } from 'react';

import FigmaWindow from '@public/images/figma_window.svg';
import { DesignSectionContainer } from './DesignSection.styled';

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { DesignCanvas } from './designCanvas/DesignCanvas';
import Typography from '@/components/display/typography/Typography';
import { Draggable } from '@/components/draggable/Draggable';
import { Droppable } from '@/components/droppable/Droppable';
const DesignSection = () => {
  const defaultCoordinates = {
    text: {
      x: 180,
      y: 160,
    },
    blob1: {
      x: 180,
      y: 160,
    },
  };

  const activationConstraint = {
    delay: 0,
    tolerance: 5,
  };

  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  function updateCoordinates(active, delta) {
    const temp = coordinates;
    temp[active.id] = {
      x: temp[active.id].x + delta.x,
      y: temp[active.id].y + delta.y,
    };
    setCoordinates(temp);
  }
  return (
    <DesignSectionContainer>
      <FigmaWindow />
      <DndContext
        sensors={sensors}
        onDragEnd={({ delta, active }) => {
          updateCoordinates(active, delta);
        }}
      >
        <Droppable className='canvas' id='canvas' />
        <Draggable
          top={coordinates.text.y}
          left={coordinates.text.x}
          className='draggable'
          id='text'
        >
          <div className='text-draggable'>
            <Typography variant='h5'>
              The Design Team at GDSC MVJCE is the driving force behind our
              visual appeal. They craft compelling event posters and captivating
              graphics
            </Typography>
          </div>
        </Draggable>
      </DndContext>
    </DesignSectionContainer>
  );
};

export default DesignSection;
