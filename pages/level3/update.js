// pages/index.js

import { useState } from 'react';

function HomePage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(isChecked);

    // const formData = new FormData();
    // formData.append('isChecked', isChecked);

    // try {
    //   const res = await fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (res.status === 200) {
    //     alert('Form submitted successfully!');
    //   } else {
    //     alert('Error submitting form.');
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name='checkbox'
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Check me!
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
