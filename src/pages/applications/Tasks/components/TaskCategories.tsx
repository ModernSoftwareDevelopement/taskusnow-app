interface Props {
  OnSelectCategory: (category: string) => void;
}

const TaskCategories = ({ OnSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => OnSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Accounting">Accounting</option>
      <option value="Computers and IT">Computers and IT</option>
      <option value="Delivery">Delivery</option>
      <option value="Car service">Car service</option>
    </select>
  );
};

export default TaskCategories;
