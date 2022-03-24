import { useEffect, useState } from 'react';

const initialFormData = Object.freeze({
  filterText: "",
  done: false,
  notDone: false
});

export default function Filter(props: any) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: any) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  useEffect(() => {  
    props.filterForm(formData);
  }, [formData]);

  return (
    <div className="filter-content">
      <form onSubmit={e => { e.preventDefault(); }}>
        <section>
          <input type="text" name="filterText" onChange={handleChange} placeholder="Filter by text..." />
        </section>
        <section className="filter-checkboxes">
          <label>Done:
            <input type="checkbox" name="done" onChange={handleChange} />
          </label>
          <label>Not done:
            <input type="checkbox" name="notDone" onChange={handleChange} />
          </label>
        </section>
      </form>
    </div>
  );
}
