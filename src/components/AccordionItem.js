export const AccordionItem = ({ id, title, icon, content }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="true"
          aria-controls={`collapse${id}`}
        >
          <div className="me-4">{icon}</div>
          <div className="title-item">{title}</div>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  )
}

export const Accordion = ({ items }) => {
  return (
    <div className="accordion container-fluid mt-5" id="accordionExample">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
        />
      ))}
    </div>
  )
}
