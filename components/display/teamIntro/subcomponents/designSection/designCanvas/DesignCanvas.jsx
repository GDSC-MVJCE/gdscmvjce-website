import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function DesignCanvas(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div ref={setNodeRef} className={props.className}>
      {props.children}
    </div>
  );
}
