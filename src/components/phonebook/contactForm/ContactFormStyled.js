import styled from 'styled-components';
const Form = styled.form`
  display: flex;
  flex-direction: column;

  .form_fild {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }

  .form_text {
    margin-bottom: 5px;
    font-size: 18px;
    color: #076c77;
  }

  .form_input {
    height: 46px;
    padding: 5px 20px;
    border-radius: 10px;

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);
    }
  }

  .form_btn {
    margin: 0 auto 40px;
    width: 200px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #7915c5;
    border-color: #7915c5;

    border-radius: 5px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:focus,
    &:hover {
      color: #7915c5;
      background-color: #fff;
      border: 2px solid #883dc7f2;
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);

      outline: none;
    }
  }
`;
export default Form;
