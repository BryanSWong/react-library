import React from 'react';

const Button = (props) => {
//  let status = 'Borrow';

//   if (!props.checkout) {
//     status = 'Checkedout';
//   }

  return (
    <div>
      <button type='submit'>{props.buttonType}</button>
    </div>
  );
};

export default Button;
