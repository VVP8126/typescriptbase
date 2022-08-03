import React from "react";

// Common (generic) type for rendering of ReactNode elements
interface CommonListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode;
}

export default function CommonList<T>(props: CommonListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
}
