import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable({ id, children, top, left, className }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id ? id : 'draggable',
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        border: isDragging ? '2px solid #4285F4' : 'none',
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={{ ...style, top, left }}
      {...listeners}
      {...attributes}
      className={className}
    >
      {children}
    </div>
  );
}
