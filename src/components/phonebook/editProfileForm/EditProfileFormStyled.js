import styled from 'styled-components';

const EditProfileStyled = styled.div`
  padding: 30px 15px;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  .profile_title {
    margin-bottom: 20px;
    text-align: center;
  }

  .profile_form {
    display: flex;
    flex-direction: column;
  }

  .profile_fild {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &-category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    &-date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  .profile_text {
    margin-bottom: 5px;
    font-size: 18px;
    color: #076c77;
  }

  .profile_input {
    width: 100%;
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

  .profile_category-text,
  .profile_date-text {
    font-size: 16px;
    color: #076c77;
  }

  .profile_category-select {
    width: 150px;
  }
  .select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    color: #444;
    line-height: 1.3;
    padding: 5px 10px;
    width: 150px;

    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #c7f3ec 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    cursor: pointer;
  }

  .select-css:hover,
  .select-css:focus {
    border-color: #c97ddf;
    box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);

    color: #222;
    outline: none;
  }

  .profile_date {
    text-align: center;
    width: 220px;
    padding: 5px 10px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #ffffff 0%, #c7f3ec 100%);
    cursor: pointer;

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);
    }
  }
  .info_btn {
    margin: 0 auto;

    width: 150px;
    height: 40px;
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
export default EditProfileStyled;
