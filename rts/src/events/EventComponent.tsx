const EventComponent: React.FC = () => {
  // Only one of the below annotations are required (onChange function or event object)
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event);
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />

      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
