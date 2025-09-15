import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [formData, setformData] = useState({});
  const [datas, setData] = useState([]);
  const [idd, setidd] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/api/submitForm", formData);
  };

  const getDatas = async () => {
    const res = await axios.get("http://localhost:3000/api/getForm");
    setData(res.data);
  };

  const upDate = async () => {
    await axios.post("http://localhost:3000/api/update", { idd });
    const res = await axios.get("http://localhost:3000/api/getForm");
    setData(res.data);
  };

  return (
    <div>
      <input
        type="number"
        name="ID"
        placeholder="ID"
        onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
      /><br /><br />

      <input
        type="text"
        name="title"
        placeholder="Enter title"
        onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
      /><br /><br />

      <input
        type="text"
        name="description"
        placeholder="Enter Description"
        onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
      /><br /><br />

      <input
        type="text"
        name="status"
        placeholder="Enter Status"
        onChange={(e) => setformData({ ...formData, [e.target.name]: e.target.value })}
      /><br /><br />

      <button onClick={handleSubmit}>Click</button>
      <br /><br />

      <button onClick={getDatas}>Get Data</button>
      <br /><br />
      {datas.map((i, index) => (
        <div key={index}>
          Title = {i.title} <br />
          Description = {i.description} <br />
          Status = {i.status} <br /><br />
        </div>
      ))}

      <br /><br /><br />
      <input
        type="number"
        name="updateID"
        placeholder="Enter ID to Update"
        onChange={(e) => setidd(Number(e.target.value))}
      />
      <br />
      <button onClick={upDate}>Click Update</button>
    </div>
  );
}
